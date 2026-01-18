import { Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles, ArrowRight } from "lucide-react";
import { FeaturedProducts } from "@/components/products/FeaturedProducts";

export const FeaturedProductsSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background via-muted/10 to-background overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">
              Bestsellers
            </span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
            Featured Products
          </h2>
          
          {/* Subtitle */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our most celebrated fragrances, chosen by connoisseurs worldwide
          </p>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rounded-full bg-gold shadow-lg shadow-gold/50" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center py-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full" />
                  <Loader2 className="relative h-12 w-12 animate-spin text-gold" />
                </div>
                <p className="mt-6 text-muted-foreground text-sm">Loading our finest fragrances...</p>
              </div>
            }
          >
            <FeaturedProducts />
          </Suspense>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="relative inline-block">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gold blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
            
            <Link href="/shop">
              <Button 
                size="lg" 
                className="relative bg-gradient-to-r from-gold via-amber-600 to-gold hover:from-amber-600 hover:via-gold hover:to-amber-600 text-white font-bold text-lg px-10 py-7 rounded-2xl shadow-2xl shadow-gold/30 hover:shadow-gold/50 hover:scale-105 transition-all duration-300 border-2 border-gold/50 group"
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                View All Fragrances
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Explore our complete collection of luxury fragrances
          </p>
        </motion.div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
};