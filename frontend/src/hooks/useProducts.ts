import { useState, useEffect, useCallback } from "react";
import { sanityClient } from "@/lib/sanity/client";
import {
  ALL_PRODUCTS_QUERY,
  PRODUCT_BY_SLUG_QUERY,
  PRODUCT_BY_ID_QUERY,
  FEATURED_PRODUCTS_QUERY,
  PRODUCTS_BY_CATEGORY_QUERY,
  SEARCH_PRODUCTS_QUERY,
  ALL_CATEGORIES_QUERY,
} from "@/lib/sanity/queries";
import type { Product, Category } from "@/types/product";

interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

interface UseProductReturn {
  product: Product | null;
  loading: boolean;
  error: Error | null;
}

interface UseCategoriesReturn {
  categories: Category[];
  loading: boolean;
  error: Error | null;
}

/**
 * Hook to fetch all products
 */
export function useProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await sanityClient.fetch<Product[]>(ALL_PRODUCTS_QUERY);
      setProducts(data || []);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch products"));
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, refetch: fetchProducts };
}

/**
 * Hook to fetch a single product by slug
 */
export function useProduct(slug: string): UseProductReturn {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await sanityClient.fetch<Product>(PRODUCT_BY_SLUG_QUERY, { slug });
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to fetch product"));
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  return { product, loading, error };
}

/**
 * Hook to fetch a single product by ID
 */
export function useProductById(id: string): UseProductReturn {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await sanityClient.fetch<Product>(PRODUCT_BY_ID_QUERY, { id });
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to fetch product"));
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
}

/**
 * Hook to fetch featured products
 */
export function useFeaturedProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await sanityClient.fetch<Product[]>(FEATURED_PRODUCTS_QUERY);
      setProducts(data || []);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch featured products"));
      console.error("Error fetching featured products:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, refetch: fetchProducts };
}

/**
 * Hook to fetch products by category
 */
export function useProductsByCategory(categorySlug: string): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProducts = useCallback(async () => {
    if (!categorySlug || categorySlug === "all") {
      // Fetch all products if no category specified
      try {
        setLoading(true);
        const data = await sanityClient.fetch<Product[]>(ALL_PRODUCTS_QUERY);
        setProducts(data || []);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to fetch products"));
      } finally {
        setLoading(false);
      }
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await sanityClient.fetch<Product[]>(PRODUCTS_BY_CATEGORY_QUERY, {
        categorySlug,
      });
      setProducts(data || []);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch products"));
      console.error("Error fetching products by category:", err);
    } finally {
      setLoading(false);
    }
  }, [categorySlug]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, refetch: fetchProducts };
}

/**
 * Hook to search products
 */
export function useSearchProducts(searchTerm: string): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchProducts = useCallback(async () => {
    if (!searchTerm || searchTerm.length < 2) {
      setProducts([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await sanityClient.fetch<Product[]>(SEARCH_PRODUCTS_QUERY, {
        searchTerm,
      });
      setProducts(data || []);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to search products"));
      console.error("Error searching products:", err);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const debounceTimer = setTimeout(fetchProducts, 300);
    return () => clearTimeout(debounceTimer);
  }, [fetchProducts]);

  return { products, loading, error, refetch: fetchProducts };
}

/**
 * Hook to fetch all categories
 */
export function useCategories(): UseCategoriesReturn {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await sanityClient.fetch<Category[]>(ALL_CATEGORIES_QUERY);
        setCategories(data || []);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to fetch categories"));
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}
