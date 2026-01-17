"use client";

import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { urlFor } from "@/lib/sanity/client";
import { CartItem } from "@/types/product";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-display font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">
            Discover our luxurious fragrance collection
          </p>
          <Link href="/shop">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90">
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }


  // Free shipping threshold in PKR
  const freeShippingThreshold = 20000; // Threshold for free shipping in PKR

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <Link href="/shop">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Button>
        </Link>

        <h1 className="text-4xl font-display font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <CartItemCard
                key={`${item._id}-${item.selectedSize}`}
                item={item}
                index={index}
                onRemove={removeFromCart}
                onUpdateQuantity={updateQuantity}
              />
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 sticky top-24">
              <h2 className="font-display font-semibold text-xl mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">PKR {cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium text-gold">Calculated at checkout</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg font-bold">
                  <span>Estimated Total</span>
                  <span>PKR {cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <Button className="w-full mb-3 bg-crimson text-white hover:bg-crimson/90">
                Proceed to Checkout
              </Button>

              {cartTotal > 0 && cartTotal < freeShippingThreshold && (
                <p className="text-sm text-center text-muted-foreground">
                  Add PKR {(freeShippingThreshold - cartTotal).toFixed(2)} more for free shipping
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Separate component for cart item
interface CartItemCardProps {
  item: CartItem;
  index: number;
  onRemove: (productId: string, size?: string) => void;
  onUpdateQuantity: (productId: string, quantity: number, size?: string) => void;
}

const CartItemCard = ({ item, index, onRemove, onUpdateQuantity }: CartItemCardProps) => {
  // Get image URL from Sanity or fallback
  const imageUrl = item.image?.asset?.url
    ? urlFor(item.image).width(200).height(200).url()
    : "/placeholder-product.jpg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-card rounded-lg p-4 flex flex-row gap-4"
    >
      {/* Single Product Image */}
      <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32">
        <img
          src={imageUrl}
          alt={item.image?.alt || item.name}
          className="w-full h-full object-cover rounded"
        />
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-4">
        {/* Product Info */}
        <div className="flex-1">
          <Link href={`/product/${item.slug}`}>
            <h3 className="font-display font-semibold text-lg hover:text-gold transition-smooth">
              {item.name}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground mb-1">
            Size: {item.selectedSize}
          </p>
          <p className="text-lg font-bold">PKR {item.price}</p>
        </div>

        {/* Actions */}
        <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onRemove(item._id, item.selectedSize)}
            className="text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-2 border rounded-lg">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onUpdateQuantity(item._id, item.quantity - 1, item.selectedSize)}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center font-medium">
              {item.quantity}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onUpdateQuantity(item._id, item.quantity + 1, item.selectedSize)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
