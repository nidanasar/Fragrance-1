// GROQ Queries for Sanity CMS

/**
 * Get all active products for shop listing
 */
export const ALL_PRODUCTS_QUERY = `
  *[_type == "product" && status == "active"] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    tagline,
    shortDescription,
    "image": images[0] {
      asset-> {
        _id,
        url,
        "lqip": metadata.lqip
      },
      alt
    },
    "images": images[] {
      asset-> {
        _id,
        url,
        "lqip": metadata.lqip
      },
      alt
    },
    "price": coalesce(variants[isDefault == true][0].price, variants[0].price),
    "compareAtPrice": coalesce(variants[isDefault == true][0].compareAtPrice, variants[0].compareAtPrice),
    "defaultVariant": coalesce(variants[isDefault == true][0], variants[0]) {
      size,
      sku,
      price,
      compareAtPrice,
      stock
    },
    variants[] {
      size,
      sku,
      price,
      compareAtPrice,
      stock,
      isDefault
    },
    "totalStock": math::sum(variants[].stock),
    "inStock": math::sum(variants[].stock) > 0,
    isFeatured,
    isNewArrival,
    tags,
    "categories": categories[]-> {
      _id,
      name,
      "slug": slug.current
    },
    "category": categories[0]->slug.current,
    fragranceNotes {
      top,
      middle,
      base
    },
    averageRating,
    numberOfReviews
  }
`;

/**
 * Get single product by slug with full details
 */
export const PRODUCT_BY_SLUG_QUERY = `
  *[_type == "product" && slug.current == $slug && status == "active"][0] {
    _id,
    name,
    "slug": slug.current,
    tagline,
    description,
    shortDescription,
    "images": images[] {
      asset-> {
        _id,
        url,
        "lqip": metadata.lqip,
        "dimensions": metadata.dimensions
      },
      alt
    },
    variants[] {
      size,
      sku,
      price,
      compareAtPrice,
      stock,
      isDefault
    },
    "price": coalesce(variants[isDefault == true][0].price, variants[0].price),
    "compareAtPrice": coalesce(variants[isDefault == true][0].compareAtPrice, variants[0].compareAtPrice),
    "inStock": math::sum(variants[].stock) > 0,
    trackInventory,
    "categories": categories[]-> {
      _id,
      name,
      "slug": slug.current
    },
    "category": categories[0]->slug.current,
    tags,
    fragranceNotes {
      top,
      middle,
      base
    },
    specifications[] {
      label,
      value
    },
    ingredients,
    howToUse,
    careInstructions,
    averageRating,
    numberOfReviews,
    shippingInfo,
    returnPolicy,
    isFeatured,
    isNewArrival,
    seo {
      metaTitle,
      metaDescription,
      "ogImage": ogImage.asset->url
    },
    _createdAt,
    _updatedAt
  }
`;

/**
 * Get single product by ID
 */
export const PRODUCT_BY_ID_QUERY = `
  *[_type == "product" && _id == $id && status == "active"][0] {
    _id,
    name,
    "slug": slug.current,
    tagline,
    description,
    shortDescription,
    "images": images[] {
      asset-> {
        _id,
        url,
        "lqip": metadata.lqip
      },
      alt
    },
    variants[] {
      size,
      sku,
      price,
      compareAtPrice,
      stock,
      isDefault
    },
    "price": coalesce(variants[isDefault == true][0].price, variants[0].price),
    "compareAtPrice": coalesce(variants[isDefault == true][0].compareAtPrice, variants[0].compareAtPrice),
    "inStock": math::sum(variants[].stock) > 0,
    "categories": categories[]-> {
      _id,
      name,
      "slug": slug.current
    },
    "category": categories[0]->slug.current,
    tags,
    fragranceNotes {
      top,
      middle,
      base
    },
    averageRating,
    numberOfReviews,
    shippingInfo,
    returnPolicy
  }
`;

/**
 * Get featured products for homepage
 */
export const FEATURED_PRODUCTS_QUERY = `
  *[_type == "product" && status == "active" && isFeatured == true] | order(_createdAt desc) [0...6] {
    _id,
    name,
    "slug": slug.current,
    tagline,
    shortDescription,
    "image": images[0] {
      asset-> {
        _id,
        url,
        "lqip": metadata.lqip
      },
      alt
    },
    "images": images[] {
      asset-> {
        _id,
        url,
        "lqip": metadata.lqip
      },
      alt
    },
    "price": coalesce(variants[isDefault == true][0].price, variants[0].price),
    "compareAtPrice": coalesce(variants[isDefault == true][0].compareAtPrice, variants[0].compareAtPrice),
    variants[] {
      size,
      sku,
      price,
      compareAtPrice,
      stock,
      isDefault
    },
    "totalStock": math::sum(variants[].stock),
    "inStock": math::sum(variants[].stock) > 0,
    tags,
    "categories": categories[]-> {
      _id,
      name,
      "slug": slug.current
    },
    "category": categories[0]->slug.current,
    fragranceNotes {
      top,
      middle,
      base
    }
  }
`;

/**
 * Get products filtered by category slug
 */
export const PRODUCTS_BY_CATEGORY_QUERY = `
  *[_type == "product" && status == "active" && $categorySlug in categories[]->slug.current] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    tagline,
    shortDescription,
    "image": images[0] {
      asset-> {
        _id,
        url,
        "lqip": metadata.lqip
      },
      alt
    },
    "price": coalesce(variants[isDefault == true][0].price, variants[0].price),
    "compareAtPrice": coalesce(variants[isDefault == true][0].compareAtPrice, variants[0].compareAtPrice),
    "totalStock": math::sum(variants[].stock),
    "inStock": math::sum(variants[].stock) > 0,
    tags,
    "categories": categories[]-> {
      _id,
      name,
      "slug": slug.current
    },
    "category": categories[0]->slug.current,
    fragranceNotes {
      top,
      middle,
      base
    }
  }
`;

/**
 * Search products by name
 */
export const SEARCH_PRODUCTS_QUERY = `
  *[_type == "product" && status == "active" && name match $searchTerm + "*"] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    tagline,
    "image": images[0] {
      asset-> {
        _id,
        url,
        "lqip": metadata.lqip
      },
      alt
    },
    "price": coalesce(variants[isDefault == true][0].price, variants[0].price),
    "totalStock": math::sum(variants[].stock),
    "inStock": math::sum(variants[].stock) > 0,
    tags,
    "category": categories[0]->slug.current
  }
`;

/**
 * Get all active categories
 */
export const ALL_CATEGORIES_QUERY = `
  *[_type == "category" && isActive == true] | order(sortOrder asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    "image": image {
      asset-> {
        _id,
        url,
        "lqip": metadata.lqip
      },
      alt
    },
    "productCount": count(*[_type == "product" && status == "active" && references(^._id)])
  }
`;

/**
 * Get related products (same category, excluding current)
 */
export const RELATED_PRODUCTS_QUERY = `
  *[_type == "product" && status == "active"
    && _id != $currentProductId
    && count(categories[@._ref in $categoryIds]) > 0
  ] | order(_createdAt desc) [0...4] {
    _id,
    name,
    "slug": slug.current,
    "image": images[0] {
      asset-> {
        _id,
        url,
        "lqip": metadata.lqip
      },
      alt
    },
    "price": coalesce(variants[isDefault == true][0].price, variants[0].price),
    "inStock": math::sum(variants[].stock) > 0,
    "category": categories[0]->slug.current
  }
`;
