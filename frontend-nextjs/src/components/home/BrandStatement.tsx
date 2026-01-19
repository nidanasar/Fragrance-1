// "use client";

// import { motion } from "framer-motion";

// export const BrandStatement = () => {
//   return (
//     <section className="py-10 bg-background">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto text-center"
//         >
//           <p className="text-2xl md:text-3xl font-display leading-relaxed text-foreground">
//             Fragrances from ScentHaven are cut differently, hand-crafted from seed 
//             to scent with <span className="text-gold">heritage</span>, <span className="text-gold">rarity</span> and <span className="text-gold">timeless mastery</span>.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

"use client";

import { motion } from "framer-motion";
import { Sparkles, Quote } from "lucide-react";

export const BrandStatement = () => {
  return (
    <section className="relative py-12 bg-gradient-to-b from-background via-muted/5 to-background overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2" />
      
      {/* Decorative Dots Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Top Decorative Element */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <Sparkles className="h-5 w-5 text-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>

          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full" />
              <Quote className="relative h-12 w-12 text-gold/40" />
            </div>
          </div>

          {/* Main Statement */}
          <div className="relative">
            {/* Background Card */}
            <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-muted/10 to-transparent rounded-3xl -z-10" />
            <div className="absolute inset-0 border-2 border-gold/10 rounded-3xl -z-10" />
            
            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/20 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/20 rounded-br-3xl" />

            <div className="p-8 md:p-12 text-center">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl md:text-4xl lg:text-5xl font-display leading-relaxed text-foreground/90"
              >
                Fragrances from{" "}
                <span className="relative inline-block group">
                  <span className="absolute inset-0 bg-gradient-to-r from-gold/20 via-amber-500/20 to-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative font-bold bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent">
                    DE-HAC
                  </span>
                </span>{" "}
                are cut differently, hand-crafted from seed to scent with{" "}
                <span className="relative inline-block group cursor-default">
                  <span className="absolute inset-0 bg-gold/10 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative font-semibold text-gold group-hover:scale-105 inline-block transition-transform">
                    heritage
                  </span>
                </span>
                ,{" "}
                <span className="relative inline-block group cursor-default">
                  <span className="absolute inset-0 bg-gold/10 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative font-semibold text-gold group-hover:scale-105 inline-block transition-transform">
                    rarity
                  </span>
                </span>
                {" "}and{" "}
                <span className="relative inline-block group cursor-default">
                  <span className="absolute inset-0 bg-gold/10 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative font-semibold text-gold group-hover:scale-105 inline-block transition-transform">
                    timeless mastery
                  </span>
                </span>
                .
              </motion.p>
            </div>
          </div>

          {/* Bottom Decorative Element */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <div className="flex gap-1.5">
              <div className="w-1 h-1 bg-gold/60 rounded-full" />
              <div className="w-2 h-2 bg-gold rounded-full" />
              <div className="w-1 h-1 bg-gold/60 rounded-full" />
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-sm text-muted-foreground italic tracking-wide flex items-center justify-center gap-2">
              <Sparkles className="h-3 w-3 text-gold" />
              The art of perfumery, perfected
              <Sparkles className="h-3 w-3 text-gold" />
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
};