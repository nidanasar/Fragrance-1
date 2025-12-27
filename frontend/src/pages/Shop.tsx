import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "@/components/products/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { X, Loader2 } from "lucide-react";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  const { products, loading, error } = useProducts();

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  // Filter products based on category and price
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === "all" || product.category === selectedCategory;
      const priceMatch =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return categoryMatch && priceMatch;
    });
  }, [products, selectedCategory, priceRange]);

  // Calculate max price from products
  const maxPrice = useMemo(() => {
    if (products.length === 0) return 500;
    return Math.max(...products.map((p) => p.price), 500);
  }, [products]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display font-bold mb-4">Error Loading Products</h2>
          <p className="text-muted-foreground mb-4">{error.message}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Shop Fragrances
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore our curated collection of luxury perfumes from around the world
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="border border-border rounded-xl sticky top-24 overflow-hidden">
              {/* Filter Header */}
              <div className="bg-muted/30 px-6 py-4 border-b border-border flex items-center justify-between">
                <h2 className="font-display font-semibold text-lg">Filters</h2>
                {(selectedCategory !== "all" || priceRange[0] !== 0 || priceRange[1] !== maxPrice) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 text-xs text-muted-foreground hover:text-foreground"
                    onClick={() => {
                      setSelectedCategory("all");
                      setPriceRange([0, maxPrice]);
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
                          value={[priceRange[1]]}
                          onValueChange={(value) => setPriceRange([0, value[0]])}
                          max={maxPrice}
                          step={10}
                          className="w-full"
                        />
                        <div className="flex justify-between mt-3 text-sm text-muted-foreground">
                          <span>AED 0</span>
                          <span className="font-medium text-foreground">
                            Up to AED {priceRange[1]}
                          </span>
                          <span>AED {maxPrice}+</span>
                        </div>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-border/50">
                        <p className="text-xs text-muted-foreground mb-3">Quick Select</p>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { range: [0, maxPrice] as [number, number], label: "All" },
                            { range: [0, 100] as [number, number], label: "Under AED 100" },
                            { range: [100, 200] as [number, number], label: "AED 100 - 200" },
                            { range: [200, maxPrice] as [number, number], label: "AED 200+" },
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
            <div className="mb-4 flex justify-between items-center">
              <p className="text-muted-foreground">
                {loading ? "Loading..." : `${filteredProducts.length} products found`}
              </p>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-gold" />
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
