import { HeroCarousel } from "@/components/home/HeroCarousel";
import { VideoSection } from "@/components/home/VideoSection";
import { BrandStatement } from "@/components/home/BrandStatement";
import { PerfumeStories } from "@/components/home/PerfumeStories";
import { CustomerReviews } from "@/components/home/CustomerReviews";
import { ProductCard } from "@/components/products/ProductCard";
import { useFeaturedProducts } from "@/hooks/useProducts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const Home = () => {
  const { products: featuredProducts, loading } = useFeaturedProducts();

  return (
    <div className="min-h-screen">
      <HeroCarousel />

      {/* Featured Products - Right after Hero */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Bestsellers
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our most celebrated fragrances, chosen by connoisseurs worldwide
            </p>
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-gold" />
            </div>
          ) : featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product, index) => (
                <ProductCard key={product._id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Featured products coming soon...
              </p>
            </div>
          )}

          <div className="text-center mt-10">
            <Link to="/shop">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6">
                View All Fragrances
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <VideoSection />
      <BrandStatement />
      <PerfumeStories />

      {/* Categories */}
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
            <Link to="/shop?category=women" className="group">
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

            <Link to="/shop?category=men" className="group">
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

            <Link to="/shop?category=unisex" className="group">
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

      <CustomerReviews />
    </div>
  );
};

export default Home;
