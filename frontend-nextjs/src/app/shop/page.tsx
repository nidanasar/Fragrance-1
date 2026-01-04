import { Suspense } from "react";
import { getProducts } from "@/lib/sanity/fetch";
import { ShopContent } from "@/components/shop/ShopContent";
import { Loader2 } from "lucide-react";

export const revalidate = 60;

export default async function ShopPage() {
  const products = await getProducts();

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

        <Suspense
          fallback={
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-gold" />
            </div>
          }
        >
          <ShopContent initialProducts={products} />
        </Suspense>
      </div>
    </div>
  );
}
