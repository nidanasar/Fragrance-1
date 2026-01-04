import { notFound } from "next/navigation";
import { getProductBySlug, getProducts } from "@/lib/sanity/fetch";
import { ProductDetailContent } from "@/components/products/ProductDetailContent";
import type { Metadata } from "next";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all products (SSG)
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | ScentHaven`,
    description: product.shortDescription || product.tagline || `Shop ${product.name} at ScentHaven`,
    openGraph: {
      title: product.name,
      description: product.shortDescription || product.tagline,
      images: product.seo?.ogImage ? [product.seo.ogImage] : [],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailContent product={product} />;
}
