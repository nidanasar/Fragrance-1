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

      {/* Featured Products - Right after Hero */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Bestsellers
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our most celebrated fragrances, chosen by connoisseurs worldwide
            </p>
          </div>

          <Suspense
            fallback={
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-gold" />
              </div>
            }
          >
            <FeaturedProducts />
          </Suspense>

          <div className="text-center mt-10">
            <Link href="/shop">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6"
              >
                View All Fragrances
              </Button>
            </Link>
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
