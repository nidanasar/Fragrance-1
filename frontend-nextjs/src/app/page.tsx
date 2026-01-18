import { Suspense } from "react";
import Link from "next/link";
import { getFeaturedProducts } from "@/lib/sanity/fetch";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { VideoSection } from "@/components/home/VideoSection";
import { BrandStatement } from "@/components/home/BrandStatement";
import { PerfumeStories } from "@/components/home/PerfumeStories";
import { CustomerReviews } from "@/components/home/CustomerReviews";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { HomeCategories } from "@/components/home/HomeCategories";
import { Sparkles, ArrowRight } from "lucide-react";

// Revalidate every 60 seconds
export const revalidate = 60;

async function FeaturedProducts() {
  const products = await getFeaturedProducts();

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Featured products coming soon...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard key={product._id} product={product} index={index} />
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
 {/* Featured Products - Enhanced & Optimized */}
<section className="relative py-16 bg-gradient-to-b from-background via-muted/5 to-background overflow-hidden">
  {/* Decorative Background Elements */}
  <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
  
  <div className="container mx-auto px-4 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-12">
      {/* Premium Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-4">
        <Sparkles className="h-4 w-4 text-gold" />
        <span className="text-xs font-semibold text-gold uppercase tracking-wider">
          Bestsellers
        </span>
      </div>
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
        Featured Products
      </h2>
      
      <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
        Discover our most celebrated fragrances, chosen by connoisseurs worldwide
      </p>
      
      {/* Decorative Line */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
      </div>
    </div>

    {/* Products Container */}
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center py-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full" />
            <Loader2 className="relative h-10 w-10 animate-spin text-gold" />
          </div>
          <p className="mt-4 text-muted-foreground text-sm">Loading our finest fragrances...</p>
        </div>
      }
    >
      <FeaturedProducts />
    </Suspense>

    {/* Bottom CTA */}
    <div className="text-center mt-12">
      <Link href="/shop">
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-gold via-amber-600 to-gold hover:from-amber-600 hover:via-gold hover:to-amber-600 text-white font-semibold text-base px-8 py-6 rounded-xl shadow-xl shadow-gold/20 hover:shadow-gold/40 hover:scale-105 transition-all duration-300 border border-gold/30 group"
        >
          <Sparkles className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
          View All Fragrances
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </Link>
      <p className="text-xs text-muted-foreground mt-4">
        Explore our complete collection of premium fragrances
      </p>
    </div>
  </div>
</section>
     

      <VideoSection />
      <BrandStatement />
      <PerfumeStories />

      {/* Categories */}
      <HomeCategories />

      <CustomerReviews />
    </div>
  );
}
