import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { urlFor } from "@/lib/sanity/client";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addToCart } = useCart();

  // Get image URL - handle both Sanity image and fallback
  const imageUrl = product.image?.asset?.url
    ? urlFor(product.image).width(400).height(400).url()
    : product.images?.[0]?.asset?.url
    ? urlFor(product.images[0]).width(400).height(400).url()
    : "/placeholder-product.jpg";

  // Get default size from variants
  const defaultSize = product.variants?.find((v) => v.isDefault)?.size ||
    product.variants?.[0]?.size ||
    "50ml";

  // Get heart notes for display
  const heartNotes = product.fragranceNotes?.middle || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-luxury transition-all duration-300"
    >
      <Link to={`/product/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={imageUrl}
            alt={product.image?.alt || product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <div className="absolute top-4 right-4 bg-crimson text-white px-3 py-1 rounded-full text-sm font-medium">
              Sale
            </div>
          )}
          {product.isNewArrival && (
            <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 rounded-full text-sm font-medium">
              New
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-medium">Out of Stock</span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-gold transition-smooth">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < 4 ? "fill-gold text-gold" : "text-muted-foreground/30"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">(4.8)</span>
        </div>

        {heartNotes.length > 0 && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {heartNotes.join(", ")}
          </p>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">
              AED {product.price}
            </span>
            {product.compareAtPrice && product.compareAtPrice > product.price && (
              <span className="text-sm text-muted-foreground line-through">
                AED {product.compareAtPrice}
              </span>
            )}
          </div>
          <Button
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              if (product.inStock) {
                addToCart(product, defaultSize);
              }
            }}
            disabled={!product.inStock}
            className="bg-primary hover:bg-primary/90"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
