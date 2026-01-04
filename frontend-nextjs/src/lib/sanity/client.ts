import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.SANITY_API_VERSION || "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

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

export function getImageSrcSet(
  source: SanityImageSource,
  widths: number[] = [320, 640, 960, 1280, 1920]
): string {
  return widths
    .map((w) => `${getImageUrl(source, w)} ${w}w`)
    .join(", ");
}
