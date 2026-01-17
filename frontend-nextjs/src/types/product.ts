// Sanity Image Asset
export interface SanityImageAsset {
  _id: string;
  url: string;
  lqip?: string;
  dimensions?: {
    width: number;
    height: number;
    aspectRatio: number;
  };
}

export interface SanityImage {
  asset: SanityImageAsset;
  alt?: string;
}

// Product Variant (size options)
export interface ProductVariant {
  size: string;
  sku: string;
  price: number;
  compareAtPrice?: number;
  stock: number;
  isDefault?: boolean;
}

// Fragrance Notes
export interface FragranceNotes {
  top?: string[];
  middle?: string[];
  base?: string[];
}

// Category Reference
export interface CategoryRef {
  _id: string;
  name: string;
  slug: string;
}

// SEO Data
export interface ProductSEO {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
}

// Specification Item
export interface Specification {
  label: string;
  value: string;
}

// Main Product Type (from Sanity)
export interface Product {
  _id: string;
  name: string;
  slug: string;
  tagline?: string;
  description?: any[]; // Portable Text blocks
  shortDescription?: string;
  image?: SanityImage;
  images?: SanityImage[];
  price: number;
  compareAtPrice?: number;
  variants?: ProductVariant[];
  defaultVariant?: ProductVariant;
  totalStock?: number;
  inStock: boolean;
  trackInventory?: boolean;
  categories?: CategoryRef[];
  category?: string; // Primary category slug for filtering
  tags?: string[];
  fragranceNotes?: FragranceNotes;
  specifications?: Specification[];
  ingredients?: string;
  howToUse?: string;
  careInstructions?: string;
  averageRating?: number;
  numberOfReviews?: number;
  shippingInfo?: string;
  returnPolicy?: string;
  isFeatured?: boolean;
  isNewArrival?: boolean;
  seo?: ProductSEO;
  _createdAt?: string;
  _updatedAt?: string;
}

// Cart Item extends Product with cart-specific fields
export interface CartItem {
  _id: string;
  name: string;
  slug: string;
  image?: SanityImage;
  price: number;
  compareAtPrice?: number;
  category?: string;
  variants?: ProductVariant[];
  fragranceNotes?: FragranceNotes;
  inStock: boolean;
  quantity: number;
  selectedSize: string;
  selectedVariant?: ProductVariant;
}

// Helper type for product listing (minimal data)
export interface ProductListItem {
  _id: string;
  name: string;
  slug: string;
  image?: SanityImage;
  price: number;
  compareAtPrice?: number;
  inStock: boolean;
  category?: string;
  tags?: string[];
  fragranceNotes?: FragranceNotes;
}

// Category Type
export interface Category {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image?: SanityImage;
  productCount?: number;
}
