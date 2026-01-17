"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { X } from "lucide-react";
import { Product } from "@/types/product";

interface ShopContentProps {
  initialProducts: Product[];
}

export const ShopContent = ({ initialProducts }: ShopContentProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const searchParam = searchParams.get("search") || "";

  // Calculate min and max price from products
  const minPrice = useMemo(() => {
    if (initialProducts.length === 0) return 1500;
    return Math.min(...initialProducts.map((p) => p.price), 1500);
  }, [initialProducts]);

  const maxPrice = useMemo(() => {
    if (initialProducts.length === 0) return 5000;
    return Math.max(...initialProducts.map((p) => p.price), 5000);
  }, [initialProducts]);

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);

  // Filter products based on category, price, and search
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const categoryMatch =
        selectedCategory === "all" || product.category === selectedCategory;
      const priceMatch =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      
      const searchMatch = searchParam
        ? product.name.toLowerCase().includes(searchParam.toLowerCase()) ||
          product.shortDescription?.toLowerCase().includes(searchParam.toLowerCase()) ||
          (typeof product.description === 'string' ? product.description.toLowerCase().includes(searchParam.toLowerCase()) : false)
        : true;

      return categoryMatch && priceMatch && searchMatch;
    });
  }, [initialProducts, selectedCategory, priceRange, searchParam]);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Filters Sidebar */}
      <aside className="lg:w-72 flex-shrink-0">
        <div className="border border-border rounded-xl sticky top-24 overflow-hidden">
          {/* Filter Header */}
          <div className="bg-muted/30 px-6 py-4 border-b border-border flex items-center justify-between">
            <h2 className="font-display font-semibold text-lg">Filters</h2>
            {(selectedCategory !== "all" || priceRange[0] !== minPrice || priceRange[1] !== maxPrice || searchParam) && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-xs text-muted-foreground hover:text-foreground"
                onClick={() => {
                  setSelectedCategory("all");
                  setPriceRange([minPrice, maxPrice]);
                  router.push("/shop");
                }}
              >
                <X className="h-3 w-3 mr-1" />
                Clear All
              </Button>
            )}
          </div>

          <Accordion type="multiple" defaultValue={["category", "price"]} className="px-2">
            {/* Category Filter */}
            <AccordionItem value="category" className="border-b border-border/50">
              <AccordionTrigger className="px-4 py-4 hover:no-underline">
                <span className="font-medium">Category</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-3">
                  {[
                    { value: "all", label: "All Categories" },
                    { value: "women", label: "Women" },
                    { value: "men", label: "Men" },
                    { value: "unisex", label: "Unisex" },
                  ].map((cat) => (
                    <label
                      key={cat.value}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <Checkbox
                        checked={selectedCategory === cat.value}
                        onCheckedChange={() => setSelectedCategory(cat.value)}
                        className="data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                      />
                      <span className="text-sm group-hover:text-gold transition-colors">
                        {cat.label}
                      </span>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Price Filter */}
            <AccordionItem value="price" className="border-none">
              <AccordionTrigger className="px-4 py-4 hover:no-underline">
                <span className="font-medium">Price Range</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6">
                <div className="space-y-6">
                  <div className="px-2">
                    <Slider
                      value={priceRange}
                      onValueChange={(value) => setPriceRange(value as [number, number])}
                      min={minPrice}
                      max={maxPrice}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between mt-3 text-sm text-muted-foreground">
                      <span>PKR {minPrice}</span>
                      <span className="font-medium text-foreground">
                        PKR {priceRange[0]} - PKR {priceRange[1]}
                      </span>
                      <span>PKR {maxPrice}</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-border/50">
                    <p className="text-xs text-muted-foreground mb-3">Quick Select</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { range: [minPrice, maxPrice] as [number, number], label: "All" },
                        { range: [minPrice, 2500] as [number, number], label: "PKR 1500 - 2500" },
                        { range: [2500, 3500] as [number, number], label: "PKR 2500 - 3500" },
                        { range: [3500, maxPrice] as [number, number], label: "PKR 3500+" },
                      ].map((option) => (
                        <button
                          key={option.label}
                          onClick={() => setPriceRange(option.range)}
                          className={`px-3 py-2 text-xs rounded-lg border transition-all ${
                            priceRange[0] === option.range[0] && priceRange[1] === option.range[1]
                              ? "bg-gold text-gold-foreground border-gold"
                              : "border-border hover:border-gold/50 hover:bg-muted/50"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </aside>

      {/* Products Grid */}
      <div className="flex-1">
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div className="flex flex-col">
            <p className="text-muted-foreground">
              {filteredProducts.length} products found
            </p>
            {searchParam && (
              <p className="text-sm text-gold mt-1">
                Searching for: <span className="font-semibold">"{searchParam}"</span>
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product._id} product={product} index={index} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No products found matching your filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
