"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/client";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Star, ShoppingCart, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/types/product";

interface ProductDetailContentProps {
  product: Product;
}

export const ProductDetailContent = ({ product }: ProductDetailContentProps) => {
  const { addToCart } = useCart();

  // Get default variant or first variant
  const defaultVariant = useMemo(() => {
    if (!product?.variants) return null;
    return product.variants.find((v) => v.isDefault) || product.variants[0];
  }, [product]);

  const [selectedSize, setSelectedSize] = useState<string>(defaultVariant?.size || "");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Get selected variant for price display
  const selectedVariant = useMemo(() => {
    if (!product?.variants || !selectedSize) return defaultVariant;
    return product.variants.find((v) => v.size === selectedSize) || defaultVariant;
  }, [product, selectedSize, defaultVariant]);

  const currentPrice = selectedVariant?.price || product.price;
  const comparePrice = selectedVariant?.compareAtPrice || product.compareAtPrice;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <Link href="/shop">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              {product.images && product.images[selectedImageIndex] ? (
                <img
                  src={urlFor(product.images[selectedImageIndex]).width(800).url()}
                  alt={product.images[selectedImageIndex].alt || `${product.name} - View ${selectedImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  No image available
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-smooth ${
                      selectedImageIndex === idx
                        ? "border-gold"
                        : "border-transparent hover:border-gold/50"
                    }`}
                  >
                    <img
                      src={urlFor(img).width(200).url()}
                      alt={img.alt || `${product.name} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <span className="text-sm text-gold font-medium uppercase tracking-wide">
                {product.category || "Fragrance"}
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-4">
                {product.name}
              </h1>

              {product.tagline && (
                <p className="text-lg text-muted-foreground italic mb-4">
                  {product.tagline}
                </p>
              )}

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < 4 ? "fill-gold text-gold" : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  4.8 (Reviews coming soon)
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-primary">
                  AED {currentPrice}
                </span>
                {comparePrice && comparePrice > currentPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    AED {comparePrice}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Scent Notes */}
            {product.fragranceNotes && (
              <div className="mb-6 bg-muted/30 rounded-lg p-6">
                <h3 className="font-display font-semibold text-lg mb-4">
                  Scent Profile
                </h3>
                <div className="space-y-3">
                  {product.fragranceNotes.top && product.fragranceNotes.top.length > 0 && (
                    <div>
                      <span className="text-sm font-medium text-gold">Top Notes:</span>
                      <p className="text-sm text-muted-foreground">
                        {product.fragranceNotes.top.join(", ")}
                      </p>
                    </div>
                  )}
                  {product.fragranceNotes.middle && product.fragranceNotes.middle.length > 0 && (
                    <div>
                      <span className="text-sm font-medium text-gold">Heart Notes:</span>
                      <p className="text-sm text-muted-foreground">
                        {product.fragranceNotes.middle.join(", ")}
                      </p>
                    </div>
                  )}
                  {product.fragranceNotes.base && product.fragranceNotes.base.length > 0 && (
                    <div>
                      <span className="text-sm font-medium text-gold">Base Notes:</span>
                      <p className="text-sm text-muted-foreground">
                        {product.fragranceNotes.base.join(", ")}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <h3 className="font-medium mb-3">Select Size</h3>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.sku}
                      onClick={() => setSelectedSize(variant.size)}
                      disabled={variant.stock === 0}
                      className={`px-6 py-3 rounded-lg border-2 transition-smooth ${
                        selectedSize === variant.size
                          ? "border-gold bg-gold/10"
                          : variant.stock === 0
                          ? "border-border opacity-50 cursor-not-allowed"
                          : "border-border hover:border-gold/50"
                      }`}
                    >
                      <span className="block">{variant.size}</span>
                      {variant.price !== product.price && (
                        <span className="text-xs text-muted-foreground">
                          AED {variant.price}
                        </span>
                      )}
                      {variant.stock === 0 && (
                        <span className="text-xs text-red-500 block">Out of stock</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <Button
              size="lg"
              onClick={() => addToCart(product, selectedSize)}
              disabled={!product.inStock || (selectedVariant && selectedVariant.stock === 0)}
              className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {product.inStock ? `Add to Cart - AED ${currentPrice}` : "Out of Stock"}
            </Button>

            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>Free shipping on orders over AED 200</p>
              <p>30-day return policy</p>
              <p>Authentic guaranteed</p>
            </div>

            {/* Specifications */}
            {product.specifications && product.specifications.length > 0 && (
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="font-display font-semibold text-lg mb-4">
                  Specifications
                </h3>
                <dl className="space-y-2">
                  {product.specifications.map((spec, idx) => (
                    <div key={idx} className="flex">
                      <dt className="w-1/3 text-muted-foreground">{spec.label}</dt>
                      <dd className="w-2/3">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {/* Ingredients */}
            {product.ingredients && (
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-display font-semibold text-lg mb-4">
                  Ingredients
                </h3>
                <p className="text-sm text-muted-foreground">{product.ingredients}</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
