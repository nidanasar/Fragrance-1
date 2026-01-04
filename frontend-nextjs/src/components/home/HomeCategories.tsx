"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const HomeCategories = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Shop by Collection
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our curated collections, each crafted for distinct tastes and occasions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/shop?category=women" className="group">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80"
                alt="Women's Fragrances"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
                <h3 className="text-3xl font-display font-bold mb-3">For Her</h3>
                <p className="text-sm tracking-widest text-white/90 mb-4">TIMELESS ELEGANCE</p>
                <div className="w-12 h-px bg-white/60" />
              </div>
            </motion.div>
          </Link>

          <Link href="/shop?category=men" className="group">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative h-80 rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80"
                alt="Men's Fragrances"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
                <h3 className="text-3xl font-display font-bold mb-3">For Him</h3>
                <p className="text-sm tracking-widest text-white/90 mb-4">SOPHISTICATED POWER</p>
                <div className="w-12 h-px bg-white/60" />
              </div>
            </motion.div>
          </Link>

          <Link href="/shop?category=unisex" className="group">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative h-80 rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80"
                alt="Unisex Fragrances"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
                <h3 className="text-3xl font-display font-bold mb-3">Unisex</h3>
                <p className="text-sm tracking-widest text-white/90 mb-4">MODERN VERSATILITY</p>
                <div className="w-12 h-px bg-white/60" />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};
