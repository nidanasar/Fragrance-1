"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CartItem, Product, ProductVariant } from "@/types/product";
import { toast } from "@/hooks/use-toast";

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (productId: string, size?: string) => void;
  updateQuantity: (productId: string, quantity: number, size?: string) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error parsing cart from localStorage:", e);
      }
    }
    setIsHydrated(true);
  }, []);

  // Save cart to localStorage on changes
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isHydrated]);

  const addToCart = (product: Product, size: string) => {
    // Find the variant for the selected size
    const selectedVariant = product.variants?.find((v) => v.size === size) ||
      product.variants?.[0];

    const priceToUse = selectedVariant?.price || product.price;

    setCart((prev) => {
      // Check if item with same product ID and size already exists
      const existing = prev.find(
        (item) => item._id === product._id && item.selectedSize === size
      );

      if (existing) {
        toast({
          title: "Updated cart",
          description: `${product.name} quantity increased`,
        });
        return prev.map((item) =>
          item._id === product._id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      toast({
        title: "Added to cart",
        description: `${product.name} (${size}) added successfully`,
      });

      // Create cart item from product
      const cartItem: CartItem = {
        _id: product._id,
        name: product.name,
        slug: product.slug,
        image: product.image || product.images?.[0],
        price: priceToUse,
        compareAtPrice: selectedVariant?.compareAtPrice || product.compareAtPrice,
        category: product.category,
        variants: product.variants,
        fragranceNotes: product.fragranceNotes,
        inStock: product.inStock,
        quantity: 1,
        selectedSize: size,
        selectedVariant: selectedVariant,
      };

      return [...prev, cartItem];
    });
  };

  const removeFromCart = (productId: string, size?: string) => {
    setCart((prev) => {
      if (size) {
        // Remove specific size variant
        return prev.filter(
          (item) => !(item._id === productId && item.selectedSize === size)
        );
      }
      // Remove all variants of this product
      return prev.filter((item) => item._id !== productId);
    });
    toast({
      title: "Removed from cart",
      description: "Item removed successfully",
    });
  };

  const updateQuantity = (productId: string, quantity: number, size?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }

    setCart((prev) =>
      prev.map((item) => {
        if (size) {
          // Update specific size variant
          return item._id === productId && item.selectedSize === size
            ? { ...item, quantity }
            : item;
        }
        // Update first matching product
        return item._id === productId ? { ...item, quantity } : item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    });
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
