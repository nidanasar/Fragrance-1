// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// export const HomeCategories = () => {
//   return (
//     <section className="py-12 bg-background">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-10"
//         >
//           <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
//             Shop by Collection
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Explore our curated collections, each crafted for distinct tastes and occasions
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <Link href="/shop?category=women" className="group">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="relative h-80 rounded-sm overflow-hidden"
//             >
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
//               <img
//                 src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80"
//                 alt="Women's Fragrances"
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
//                 <h3 className="text-3xl font-display font-bold mb-3">For Her</h3>
//                 <p className="text-sm tracking-widest text-white/90 mb-4">TIMELESS ELEGANCE</p>
//                 <div className="w-12 h-px bg-white/60" />
//               </div>
//             </motion.div>
//           </Link>

//           <Link href="/shop?category=men" className="group">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="relative h-80 rounded-sm overflow-hidden"
//             >
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
//               <img
//                 src="https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80"
//                 alt="Men's Fragrances"
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
//                 <h3 className="text-3xl font-display font-bold mb-3">For Him</h3>
//                 <p className="text-sm tracking-widest text-white/90 mb-4">SOPHISTICATED POWER</p>
//                 <div className="w-12 h-px bg-white/60" />
//               </div>
//             </motion.div>
//           </Link>

//           <Link href="/shop?category=unisex" className="group">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               className="relative h-80 rounded-sm overflow-hidden"
//             >
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
//               <img
//                 src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80"
//                 alt="Unisex Fragrances"
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
//                 <h3 className="text-3xl font-display font-bold mb-3">Unisex</h3>
//                 <p className="text-sm tracking-widest text-white/90 mb-4">MODERN VERSATILITY</p>
//                 <div className="w-12 h-px bg-white/60" />
//               </div>
//             </motion.div>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Heart } from "lucide-react";

export const HomeCategories = () => {
  const categories = [
    {
      href: "/shop?category=women",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
      title: "For Her",
      subtitle: "Timeless Elegance",
      description: "Sophisticated fragrances for the modern woman",
      accent: "from-rose-500/20 to-pink-500/20"
    },
    {
      href: "/shop?category=men",
      image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80",
      title: "For Him",
      subtitle: "Sophisticated Power",
      description: "Bold scents for the confident gentleman",
      accent: "from-blue-500/20 to-cyan-500/20"
    },
    {
      href: "/shop?category=unisex",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80",
      title: "Unisex",
      subtitle: "Modern Versatility",
      description: "Boundary-breaking contemporary fragrances",
      accent: "from-amber-500/20 to-gold/20"
    }
  ];

  return (
    <section className="relative py-12 bg-gradient-to-b from-background via-muted/10 to-background overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-xs font-semibold text-gold uppercase tracking-wider">
              Collections
            </span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Shop by Collection
          </h2>
          
          {/* Subtitle */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore our curated collections, each crafted for distinct tastes and occasions
          </p>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rounded-full bg-gold shadow-lg shadow-gold/50" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <Link key={category.href} href={category.href} className="group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
              >
                {/* Card Container */}
                <div className="relative h-[450px] rounded-3xl overflow-hidden border-2 border-border/50 group-hover:border-gold/50 shadow-xl group-hover:shadow-2xl group-hover:shadow-gold/20 transition-all duration-700">
                  
                  {/* Image with Overlay */}
                  <div className="absolute inset-0">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    
                    {/* Multi-layered Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 transition-all duration-700" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-700`} />
                  </div>

                  {/* Decorative Corner Accents */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/40 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-20 group-hover:h-20 z-20" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/40 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-20 group-hover:h-20 z-20" />

                  {/* Content */}
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white p-8">
                    
                    {/* Decorative Top Line */}
                    <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-amber-500 mb-6 rounded-full group-hover:w-24 transition-all duration-500" />
                    
                    {/* Category Title */}
                    <h3 className="text-4xl md:text-5xl font-display font-bold mb-3 group-hover:text-gold transition-colors duration-300">
                      {category.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-sm tracking-[0.3em] text-white/90 uppercase mb-4 font-semibold">
                      {category.subtitle}
                    </p>
                    
                    {/* Decorative Dot Divider */}
                    <div className="flex items-center gap-1.5 mb-4">
                      <div className="w-1 h-1 bg-white/60 rounded-full" />
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                      <div className="w-1 h-1 bg-white/60 rounded-full" />
                    </div>

                    {/* Description */}
                    <p className="text-sm text-white/80 text-center mb-6 max-w-xs leading-relaxed">
                      {category.description}
                    </p>

                    {/* CTA Button */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-gold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <span>Explore Collection</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="relative group/badge">
                      <div className="absolute inset-0 bg-gold/30 blur-lg rounded-full" />
                      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2">
                        <Heart className="w-5 h-5 text-white group-hover:fill-gold group-hover:text-gold transition-all duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10">
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
                  </div>

                  {/* Bottom Accent Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/60 via-amber-500/60 to-gold/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link 
            href="/shop"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 font-semibold text-lg group transition-colors duration-300"
          >
            <span>View All Fragrances</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
          <p className="text-xs text-muted-foreground mt-3">
            Discover over 50+ premium fragrances
          </p>
        </motion.div>
      </div>
    </section>
  );
};