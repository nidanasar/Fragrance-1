import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Sanity client for read operations (uses CDN for performance)
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

// Image URL builder
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Helper for optimized images with specific dimensions
export function getImageUrl(
  source: SanityImageSource,
  width: number,
  height?: number
): string {
  let imgBuilder = builder.image(source).width(width).auto("format").quality(80);

  if (height) {
    imgBuilder = imgBuilder.height(height);
  }

  return imgBuilder.url();
}

// Helper for responsive image srcset
export function getImageSrcSet(source: SanityImageSource, widths: number[]): string {
  return widths
    .map((w) => `${getImageUrl(source, w)} ${w}w`)
    .join(", ");
}
