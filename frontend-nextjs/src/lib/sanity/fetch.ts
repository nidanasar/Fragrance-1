import { sanityClient } from "./client";
import {
  ALL_PRODUCTS_QUERY,
  PRODUCT_BY_SLUG_QUERY,
  PRODUCT_BY_ID_QUERY,
  FEATURED_PRODUCTS_QUERY,
  PRODUCTS_BY_CATEGORY_QUERY,
  SEARCH_PRODUCTS_QUERY,
  ALL_CATEGORIES_QUERY,
  RELATED_PRODUCTS_QUERY,
} from "./queries";
import type { Product, Category } from "@/types/product";

/**
 * Get all active products
 */
export async function getProducts(): Promise<Product[]> {
  return sanityClient.fetch<Product[]>(ALL_PRODUCTS_QUERY);
}

/**
 * Get a single product by slug
 */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  return sanityClient.fetch<Product | null>(PRODUCT_BY_SLUG_QUERY, { slug });
}

/**
 * Get a single product by ID
 */
export async function getProductById(id: string): Promise<Product | null> {
  return sanityClient.fetch<Product | null>(PRODUCT_BY_ID_QUERY, { id });
}

/**
 * Get featured products for homepage
 */
export async function getFeaturedProducts(): Promise<Product[]> {
  return sanityClient.fetch<Product[]>(FEATURED_PRODUCTS_QUERY);
}

/**
 * Get products by category slug
 */
export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  if (!categorySlug || categorySlug === "all") {
    return getProducts();
  }
  return sanityClient.fetch<Product[]>(PRODUCTS_BY_CATEGORY_QUERY, { categorySlug });
}

/**
 * Search products by name
 */
export async function searchProducts(searchTerm: string): Promise<Product[]> {
  if (!searchTerm || searchTerm.length < 2) {
    return [];
  }
  return sanityClient.fetch<Product[]>(SEARCH_PRODUCTS_QUERY, { searchTerm });
}

/**
 * Get all active categories
 */
export async function getCategories(): Promise<Category[]> {
  return sanityClient.fetch<Category[]>(ALL_CATEGORIES_QUERY);
}

/**
 * Get related products (same category, excluding current product)
 */
export async function getRelatedProducts(
  currentProductId: string,
  categoryIds: string[]
): Promise<Product[]> {
  return sanityClient.fetch<Product[]>(RELATED_PRODUCTS_QUERY, {
    currentProductId,
    categoryIds,
  });
}
