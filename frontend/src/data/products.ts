import { Product } from "@/types/product";
import oudNoirImg from "@/assets/perfume-oud-noir.jpg";
import roseElixirImg from "@/assets/perfume-rose-elixir.jpg";
import urbanMuskImg from "@/assets/perfume-urban-musk.jpg";
import vanillaDreamsImg from "@/assets/perfume-vanilla-dreams.jpg";
import citrusBloomImg from "@/assets/perfume-citrus-bloom.jpg";
import noirMystiqueImg from "@/assets/perfume-noir-mystique.jpg";
import lifestyleImg1 from "@/assets/perfume-lifestyle-1.jpg";
import detailImg1 from "@/assets/perfume-detail-1.jpg";
import lifestyleImg2 from "@/assets/perfume-lifestyle-2.jpg";
import packagingImg1 from "@/assets/perfume-packaging-1.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Oud Noir",
    price: 89,
    originalPrice: 120,
    image: oudNoirImg,
    images: [oudNoirImg, lifestyleImg1, detailImg1, packagingImg1],
    category: "men",
    description: "A sophisticated blend of rare oud and amber creates an unforgettable evening signature. Crafted from sustainably sourced ingredients, this bold fragrance commands attention with its deep, mysterious character.",
    scentNotes: {
      top: ["Bergamot", "Cardamom", "Black Pepper"],
      heart: ["Oud Wood", "Leather", "Saffron"],
      base: ["Amber", "Patchouli", "Musk"]
    },
    rating: 4.8,
    reviews: 127,
    sizes: ["50ml", "100ml"],
    inStock: true
  },
  {
    id: "2",
    name: "Rose Elixir",
    price: 65,
    image: roseElixirImg,
    images: [roseElixirImg, lifestyleImg2, detailImg1, packagingImg1],
    category: "women",
    description: "Timeless elegance captured in a bottle. Bulgarian rose petals meet jasmine in this romantic fragrance that lingers beautifully throughout the day with moderate sillage.",
    scentNotes: {
      top: ["Mandarin", "Pink Pepper"],
      heart: ["Bulgarian Rose", "Jasmine", "Peony"],
      base: ["Vanilla", "Sandalwood", "White Musk"]
    },
    rating: 4.9,
    reviews: 203,
    sizes: ["50ml", "100ml"],
    inStock: true
  },
  {
    id: "3",
    name: "Urban Musk",
    price: 55,
    image: urbanMuskImg,
    images: [urbanMuskImg, lifestyleImg1, detailImg1, packagingImg1],
    category: "unisex",
    description: "Contemporary and clean. Perfect for daily wear with its fresh yet grounding composition. Loved by professionals seeking an understated signature scent.",
    scentNotes: {
      top: ["Bergamot", "Green Apple", "Mint"],
      heart: ["Lavender", "Sage", "Geranium"],
      base: ["White Musk", "Cedarwood", "Tonka Bean"]
    },
    rating: 4.7,
    reviews: 156,
    sizes: ["50ml", "100ml"],
    inStock: true
  },
  {
    id: "4",
    name: "Vanilla Dreams",
    price: 72,
    image: vanillaDreamsImg,
    images: [vanillaDreamsImg, lifestyleImg2, detailImg1, packagingImg1],
    category: "women",
    description: "Warm and inviting gourmand fragrance featuring Madagascar vanilla. This cozy scent wraps you in comfort with its sweet yet sophisticated profile.",
    scentNotes: {
      top: ["Caramel", "Almond"],
      heart: ["Madagascar Vanilla", "Jasmine", "Orange Blossom"],
      base: ["Benzoin", "Tonka Bean", "Sandalwood"]
    },
    rating: 4.6,
    reviews: 89,
    sizes: ["50ml", "100ml"],
    inStock: true
  },
  {
    id: "5",
    name: "Citrus Bloom",
    price: 48,
    image: citrusBloomImg,
    images: [citrusBloomImg, lifestyleImg1, detailImg1, packagingImg1],
    category: "unisex",
    description: "Energizing and vibrant. Bursting with Mediterranean citrus notes, this refreshing fragrance is perfect for spring and summer occasions.",
    scentNotes: {
      top: ["Sicilian Lemon", "Grapefruit", "Bergamot"],
      heart: ["Orange Blossom", "Neroli", "Petitgrain"],
      base: ["White Musk", "Vetiver", "Amber"]
    },
    rating: 4.5,
    reviews: 142,
    sizes: ["50ml", "100ml"],
    inStock: true
  },
  {
    id: "6",
    name: "Noir Mystique",
    price: 95,
    image: noirMystiqueImg,
    images: [noirMystiqueImg, lifestyleImg1, detailImg1, packagingImg1],
    category: "men",
    description: "Dark, mysterious, and intensely seductive. This bold oriental fragrance features exotic spices and precious resins for unforgettable nights.",
    scentNotes: {
      top: ["Pink Pepper", "Clove", "Cinnamon"],
      heart: ["Incense", "Myrrh", "Tobacco"],
      base: ["Amber", "Labdanum", "Patchouli"]
    },
    rating: 4.9,
    reviews: 98,
    sizes: ["50ml", "100ml"],
    inStock: true
  },
  {
    id: "7",
    name: "Aqua Sublime",
    price: 58,
    image: urbanMuskImg,
    images: [urbanMuskImg, lifestyleImg1, detailImg1, packagingImg1],
    category: "men",
    description: "Fresh aquatic fragrance reminiscent of ocean breezes. Light yet long-lasting, perfect for active lifestyles and warm weather.",
    scentNotes: {
      top: ["Sea Salt", "Grapefruit", "Mint"],
      heart: ["Marine Notes", "Jasmine", "Rosemary"],
      base: ["Cedarwood", "Musk", "Amber"]
    },
    rating: 4.4,
    reviews: 67,
    sizes: ["50ml", "100ml"],
    inStock: true
  },
  {
    id: "8",
    name: "Velvet Iris",
    price: 78,
    image: roseElixirImg,
    images: [roseElixirImg, lifestyleImg2, detailImg1, packagingImg1],
    category: "women",
    description: "Powdery and elegant iris absolute blended with soft florals. A sophisticated choice for the modern woman who appreciates timeless beauty.",
    scentNotes: {
      top: ["Mandarin", "Aldehydes"],
      heart: ["Iris", "Violet", "Rose"],
      base: ["Musk", "Vanilla", "Tonka Bean"]
    },
    rating: 4.7,
    reviews: 112,
    sizes: ["50ml", "100ml"],
    inStock: true
  }
];

export const getFeaturedProducts = () => products.slice(0, 6);
export const getProductsByCategory = (category: string) => 
  products.filter(p => category === "all" || p.category === category);
export const getProductById = (id: string) => 
  products.find(p => p.id === id);
