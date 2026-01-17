"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/client";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Star, ShoppingCart, ArrowLeft, Package, Shield, Truck, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/types/product";
import { PortableText } from "@portabletext/react";

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

  const luxuryFeatures = [
    { icon: Package, text: "Premium Packaging" },
    { icon: Shield, text: "Authenticity Guaranteed" },
    // { icon: Truck, text: "Free Luxury Delivery" },
    // { icon: Award, text: "Award-Winning Scents" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <Link href="/shop">
          <Button 
            variant="ghost" 
            className="mb-8 hover:bg-gold/10 transition-all duration-300 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Collection
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Image Gallery with Enhanced Layout */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Image with Luxury Border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-muted via-background to-muted shadow-2xl border border-gold/20">
                {product.images && product.images[selectedImageIndex] ? (
                  <img
                    src={urlFor(product.images[selectedImageIndex]).width(1200).url()}
                    alt={product.images[selectedImageIndex].alt || `${product.name} - View ${selectedImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <Package className="h-16 w-16 mx-auto mb-4 text-gold/50" />
                      <p>No image available</p>
                    </div>
                  </div>
                )}
                
                {/* Decorative Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/30 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/30 rounded-br-2xl" />
              </div>
            </motion.div>

            {/* Thumbnail Gallery - Horizontal Scroll */}
            {product.images && product.images.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gold/30 scrollbar-track-transparent">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`flex-shrink-0 aspect-square w-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        selectedImageIndex === idx
                          ? "border-gold shadow-lg shadow-gold/20 scale-105"
                          : "border-border/50 hover:border-gold/50 hover:scale-102"
                      }`}
                    >
                      <img
                        src={urlFor(img).width(200).url()}
                        alt={img.alt || `${product.name} thumbnail ${idx + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Luxury Features Grid - Below Images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {luxuryFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-muted/50 to-background border border-gold/10 hover:border-gold/30 transition-all duration-300"
                >
                  <feature.icon className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Detailed Description Section */}
            {product.description && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-muted/40 via-background to-muted/20 border border-gold/10 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-1 h-8 bg-gradient-to-b from-gold to-amber-600 rounded-full" />
                    <h2 className="font-display font-bold text-2xl">Product Story</h2>
                  </div>

                  <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
                    <PortableText value={product.description} />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Additional Product Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* How to Use */}
              {product.howToUse && (
                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    How to Use
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.howToUse}
                  </p>
                </div>
              )}

              {/* Care Instructions */}
              {product.careInstructions && (
                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-3 text-purple-600 dark:text-purple-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    Care Instructions
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.careInstructions}
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column - Product Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 flex flex-col"
          >
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="px-4 py-1.5 text-xs font-semibold uppercase tracking-widest bg-gold/10 text-gold rounded-full border border-gold/20">
                {product.category || "Fragrance"}
              </span>
            </div>

            {/* Product Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
              {product.name}
            </h1>

            {/* Tagline */}
            {product.tagline && (
              <p className="text-lg md:text-xl text-muted-foreground italic mb-6 font-light">
                "{product.tagline}"
              </p>
            )}

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border/50">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < 4 ? "fill-gold text-gold" : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                4.8 · Reviews coming soon
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-5xl font-bold bg-gradient-to-br from-gold via-gold to-amber-600 bg-clip-text text-transparent">
                  PKR {currentPrice}
                </span>
                {comparePrice && comparePrice > currentPrice && (
                  <span className="text-2xl text-muted-foreground line-through opacity-60">
                    PKR {comparePrice}
                  </span>
                )}
              </div>
              {comparePrice && comparePrice > currentPrice && (
                <p className="text-sm text-green-600 font-medium">
                  Save PKR {comparePrice - currentPrice} ({Math.round(((comparePrice - currentPrice) / comparePrice) * 100)}% off)
                </p>
              )}
            </div>

            {/* Description */}
            <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-muted/30 via-muted/20 to-transparent border border-border/50">
              <p className="text-muted-foreground leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Scent Notes */}
            {product.fragranceNotes && (
              <div className="mb-8">
                <h3 className="font-display font-semibold text-xl mb-5 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gold rounded-full" />
                  Scent Profile
                </h3>
                <div className="space-y-4">
                  {product.fragranceNotes.top && product.fragranceNotes.top.length > 0 && (
                    <div className="p-4 rounded-lg bg-gradient-to-r from-amber-500/10 via-transparent to-transparent border-l-2 border-amber-500/50">
                      <span className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wide block mb-1">
                        Top Notes
                      </span>
                      <p className="text-sm text-foreground/80">
                        {product.fragranceNotes.top.join(" · ")}
                      </p>
                    </div>
                  )}
                  {product.fragranceNotes.middle && product.fragranceNotes.middle.length > 0 && (
                    <div className="p-4 rounded-lg bg-gradient-to-r from-rose-500/10 via-transparent to-transparent border-l-2 border-rose-500/50">
                      <span className="text-sm font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wide block mb-1">
                        Heart Notes
                      </span>
                      <p className="text-sm text-foreground/80">
                        {product.fragranceNotes.middle.join(" · ")}
                      </p>
                    </div>
                  )}
                  {product.fragranceNotes.base && product.fragranceNotes.base.length > 0 && (
                    <div className="p-4 rounded-lg bg-gradient-to-r from-gold/10 via-transparent to-transparent border-l-2 border-gold/50">
                      <span className="text-sm font-semibold text-gold uppercase tracking-wide block mb-1">
                        Base Notes
                      </span>
                      <p className="text-sm text-foreground/80">
                        {product.fragranceNotes.base.join(" · ")}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gold rounded-full" />
                  Select Size
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.sku}
                      onClick={() => setSelectedSize(variant.size)}
                      disabled={variant.stock === 0}
                      className={`min-w-[120px] px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                        selectedSize === variant.size
                          ? "border-gold bg-gradient-to-br from-gold/20 to-gold/10 shadow-lg shadow-gold/20"
                          : variant.stock === 0
                          ? "border-border opacity-50 cursor-not-allowed"
                          : "border-border hover:border-gold/50 hover:bg-gold/5"
                      }`}
                    >
                      <span className="block font-semibold text-lg">{variant.size}</span>
                      {variant.price !== product.price && (
                        <span className="text-xs text-muted-foreground mt-1 block">
                          PKR {variant.price}
                        </span>
                      )}
                      {variant.stock === 0 && (
                        <span className="text-xs text-red-500 block mt-1 font-medium">Out of stock</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart Button */}
            <Button
              size="lg"
              onClick={() => addToCart(product, selectedSize)}
              disabled={!product.inStock || !!(selectedVariant && selectedVariant.stock === 0)}
              className="w-full bg-gradient-to-r from-gold via-amber-600 to-gold hover:from-amber-600 hover:via-gold hover:to-amber-600 text-white font-semibold text-lg py-7 rounded-xl shadow-xl shadow-gold/20 hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300 mb-6"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {product.inStock ? `Add to Cart · PKR ${currentPrice}` : "Out of Stock"}
            </Button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-xl bg-muted/20 border border-border/50">
              
              <div className="text-center border-x border-border/50">
                <Shield className="h-5 w-5 mx-auto mb-1 text-gold" />
                <p className="text-xs text-muted-foreground">Authentic</p>
              </div>
              <div className="text-center">
                <Package className="h-5 w-5 mx-auto mb-1 text-gold" />
                <p className="text-xs text-muted-foreground">15-Day Return</p>
              </div>
            </div>

            {/* Specifications */}
            {product.specifications && product.specifications.length > 0 && (
              <div className="mb-8 p-6 rounded-xl bg-muted/20 border border-border/50">
                <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gold rounded-full" />
                  Specifications
                </h3>
                <dl className="space-y-3">
                  {product.specifications.map((spec, idx) => (
                    <div key={idx} className="flex border-b border-border/30 pb-2 last:border-0">
                      <dt className="w-2/5 text-muted-foreground text-sm">{spec.label}</dt>
                      <dd className="w-3/5 text-sm font-medium">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {/* Ingredients */}
            {product.ingredients && (
              <div className="p-6 rounded-xl bg-muted/20 border border-border/50">
                <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gold rounded-full" />
                  Ingredients
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.ingredients}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
///////////////////////////////////////////////////////////
