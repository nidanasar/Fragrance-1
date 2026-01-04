"use client";

import { motion } from "framer-motion";

export const BrandStatement = () => {
  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-2xl md:text-3xl font-display leading-relaxed text-foreground">
            Fragrances from ScentHaven are cut differently, hand-crafted from seed 
            to scent with <span className="text-gold">heritage</span>, <span className="text-gold">rarity</span> and <span className="text-gold">timeless mastery</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
