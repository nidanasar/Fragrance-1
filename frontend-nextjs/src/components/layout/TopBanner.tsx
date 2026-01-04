"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const promoText = "FLASH SALE: Buy One Get One Free on All Fragrances | Free Shipping Over $50 | 30-Day Returns | Limited Time Only! ";

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-crimson text-white overflow-hidden relative"
    >
      <div className="flex items-center justify-between px-4 py-2">
        {/* Running Text Animation */}
        <div className="flex-1 overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Repeat the text multiple times for seamless loop */}
            {[...Array(3)].map((_, i) => (
              <span key={i} className="text-sm font-medium pr-8">
                {promoText}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 h-6 w-6 hover:bg-white/20 text-white ml-4"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
};
