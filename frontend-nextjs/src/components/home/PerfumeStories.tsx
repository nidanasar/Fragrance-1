// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import artisanImg from "@/assets/story-artisan.jpg";
// import spiceImg from "@/assets/story-spice.jpg";
// import oceanImg from "@/assets/story-ocean.jpg";
// import gardenImg from "@/assets/story-garden.jpg";

// const stories = [
//   {
//     image: artisanImg,
//     title: "The Artisan's Legacy",
//     story: "Handcrafted in a Parisian atelier, each bottle tells a story of five generations of master perfumers. Where tradition meets innovation in every note.",
//     tag: "Heritage Collection",
//   },
//   {
//     image: spiceImg,
//     title: "Spice Route Journey",
//     story: "An olfactory voyage through ancient spice markets. Rare saffron threads, aged vanilla, and exotic spices create an intoxicating symphony of warmth.",
//     tag: "Oriental Luxe",
//   },
//   {
//     image: oceanImg,
//     title: "Coastal Serenity",
//     story: "Capturing the essence of ocean mist at dawn. Fresh marine notes blend with sun-kissed driftwood, evoking memories of endless summer days.",
//     tag: "Aquatic Fresh",
//   },
//   {
//     image: gardenImg,
//     title: "Secret Garden",
//     story: "A romantic escape to a hidden rose garden. Thousands of damascus roses harvested at sunrise create this timeless, enchanting fragrance.",
//     tag: "Floral Romance",
//   },
// ];

// export const PerfumeStories = () => {
//   return (
//     <section className="py-10 bg-background">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-8"
//         >
//           <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
//             Stories Behind Every Scent
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Each fragrance carries a unique tale, crafted with passion and inspired by extraordinary moments
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {stories.map((story, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="group relative overflow-hidden rounded-lg shadow-luxury hover:shadow-xl transition-all duration-500"
//             >
//               <div className="relative h-80 overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
//                 <Image
//                   src={story.image}
//                   alt={story.title}
//                   fill
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
                
//                 <div className="absolute top-4 left-4 z-20">
//                   <span className="bg-gold text-gold-foreground px-3 py-1 rounded-full text-xs font-medium">
//                     {story.tag}
//                   </span>
//                 </div>

//                 <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
//                   <h3 className="text-2xl font-display font-bold text-white mb-2">
//                     {story.title}
//                   </h3>
//                   <p className="text-white/90 text-sm leading-relaxed mb-4">
//                     {story.story}
//                   </p>
//                   <Link href="/shop">
//                     <Button 
//                       variant="outline" 
//                       size="sm"
//                       className="border-white text-white hover:bg-white hover:text-primary"
//                     >
//                       Explore Collection
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mt-8"
//         >
//           <Link href="/shop">
//             <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6">
//               Discover All Stories
//             </Button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import artisanImg from "@/assets/story-artisan.jpg";
import spiceImg from "@/assets/story-spice.jpg";
import oceanImg from "@/assets/story-ocean.jpg";
import gardenImg from "@/assets/story-garden.jpg";

const stories = [
  {
    slug: "master-perfumer-journey",
    image: artisanImg,
    title: "The Artisan's Legacy",
    story: "Handcrafted in a Parisian atelier, each bottle tells a story of five generations of master perfumers. Where tradition meets innovation in every note.",
    tag: "Heritage Collection",
    accent: "from-amber-500 to-orange-600"
  },
  {
    slug: "spices-silk-road",
    image: spiceImg,
    title: "Spice Route Journey",
    story: "An olfactory voyage through ancient spice markets. Rare saffron threads, aged vanilla, and exotic spices create an intoxicating symphony of warmth.",
    tag: "Oriental Luxe",
    accent: "from-red-500 to-pink-600"
  },
  {
    slug: "capturing-mediterranean",
    image: oceanImg,
    title: "Coastal Serenity",
    story: "Capturing the essence of ocean mist at dawn. Fresh marine notes blend with sun-kissed driftwood, evoking memories of endless summer days.",
    tag: "Aquatic Fresh",
    accent: "from-cyan-500 to-blue-600"
  },
  {
    slug: "secret-garden-collection",
    image: gardenImg,
    title: "Secret Garden",
    story: "A romantic escape to a hidden rose garden. Thousands of damascus roses harvested at sunrise create this timeless, enchanting fragrance.",
    tag: "Floral Romance",
    accent: "from-rose-500 to-pink-600"
  },
];

export const PerfumeStories = () => {
  return (
    <section className="relative py-12 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
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
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Our Stories</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
            Stories Behind Every Scent
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Each fragrance carries a unique tale, crafted with passion and inspired by extraordinary moments that capture the essence of luxury
          </p>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-muted/50 to-muted/30 border-2 border-gold/10 shadow-2xl hover:shadow-gold/20 transition-all duration-700 hover:border-gold/30">
                
                {/* Image Container */}
                <div className="relative h-[450px] overflow-hidden">
                  {/* Main Image */}
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 group-hover:from-black/90 transition-all duration-700" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${story.accent} opacity-0 group-hover:opacity-20 mix-blend-overlay transition-opacity duration-700`} />
                  
                  {/* Decorative Corner Accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/40 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-24 group-hover:h-24" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/40 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-24 group-hover:h-24" />
                  
                  {/* Tag Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="relative group/badge">
                      <div className={`absolute inset-0 bg-gradient-to-r ${story.accent} blur-lg opacity-50 group-hover/badge:opacity-75 transition-opacity`} />
                      <span className="relative bg-gradient-to-r from-gold via-amber-500 to-gold px-5 py-2 rounded-full text-xs font-bold text-white uppercase tracking-widest shadow-xl border border-gold/30 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        {story.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    {/* Decorative Line Above Title */}
                    <div className="w-16 h-1 bg-gradient-to-r from-gold to-amber-500 mb-4 rounded-full group-hover:w-24 transition-all duration-500" />
                    
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                      {story.title}
                    </h3>
                    
                    <p className="text-white/90 text-base leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                      {story.story}
                    </p>
                    
                    {/* CTA Button */}
                    <Link href={`/stories/${story.slug}`}>
                      <Button
                        variant="outline"
                        size="lg"
                        className="group/btn border-2 border-white/80 text-black hover:bg-gradient-to-r hover:from-gold hover:to-amber-600 hover:border-gold hover:text-primary backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gold/30"
                      >
                        Read Story
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>

                  {/* Floating Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
                  </div>
                </div>

                {/* Bottom Accent Bar */}
                <div className={`h-1 bg-gradient-to-r ${story.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>

              {/* Floating Number */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-gold via-amber-500 to-gold flex items-center justify-center shadow-xl border-4 border-background z-30 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <div className="relative inline-block">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gold blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
            
            <Link href="/stories">
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-gold via-amber-600 to-gold hover:from-amber-600 hover:via-gold hover:to-amber-600 text-white font-bold text-lg px-10 py-7 rounded-2xl shadow-2xl shadow-gold/30 hover:shadow-gold/50 hover:scale-105 transition-all duration-300 border-2 border-gold/50"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Discover All Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Over 50+ unique fragrances waiting to tell their story
          </p>
        </motion.div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
};