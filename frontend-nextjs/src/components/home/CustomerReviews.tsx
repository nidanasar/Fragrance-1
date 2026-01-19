// "use client";

// import { motion } from "framer-motion";
// import { Star, Quote } from "lucide-react";

// const reviews = [
//   {
//     id: 1,
//     name: "Sophia Laurent",
//     location: "Paris, France",
//     rating: 5,
//     review: "Absolutely divine! The Rose Elixir has become my signature scent. The longevity is incredible and I receive compliments everywhere I go.",
//     product: "Rose Elixir",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
//   },
//   {
//     id: 2,
//     name: "James Mitchell",
//     location: "London, UK",
//     rating: 5,
//     review: "Noir Mystique is pure sophistication. It's the perfect balance of bold and refined. Worth every penny.",
//     product: "Noir Mystique",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
//   },
//   {
//     id: 3,
//     name: "Elena Rodriguez",
//     location: "Milan, Italy",
//     rating: 5,
//     review: "The craftsmanship is unparalleled. Citrus Bloom captures summer in a bottle. Fresh yet long-lasting.",
//     product: "Citrus Bloom",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
//   },
//   {
//     id: 4,
//     name: "Alexander Chen",
//     location: "New York, USA",
//     rating: 5,
//     review: "Oud Noir is a masterpiece. The depth and complexity of this fragrance is unlike anything I've experienced.",
//     product: "Oud Noir",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80"
//   },
// ];

// export const CustomerReviews = () => {
//   return (
//     <section className="py-16 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
//             What Our Clients Say
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Discover why our fragrances have captivated connoisseurs worldwide
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {reviews.map((review, index) => (
//             <motion.div
//               key={review.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="bg-card border border-border rounded-xl p-6 relative group hover:border-gold/30 transition-colors"
//             >
//               <Quote className="absolute top-4 right-4 h-8 w-8 text-gold/20" />
              
//               <div className="flex items-center gap-3 mb-4">
//                 <img
//                   src={review.image}
//                   alt={review.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div>
//                   <h4 className="font-medium text-sm">{review.name}</h4>
//                   <p className="text-xs text-muted-foreground">{review.location}</p>
//                 </div>
//               </div>

//               <div className="flex gap-1 mb-3">
//                 {[...Array(review.rating)].map((_, i) => (
//                   <Star key={i} className="h-4 w-4 fill-gold text-gold" />
//                 ))}
//               </div>

//               <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
//                 "{review.review}"
//               </p>

//               <p className="text-xs font-medium text-gold">
//                 Purchased: {review.product}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-center mt-10"
//         >
//           <div className="flex items-center justify-center gap-8 text-muted-foreground">
//             <div className="text-center">
//               <p className="text-3xl font-display font-bold text-foreground">4.9</p>
//               <p className="text-xs">Average Rating</p>
//             </div>
//             <div className="w-px h-12 bg-border" />
//             <div className="text-center">
//               <p className="text-3xl font-display font-bold text-foreground">10K+</p>
//               <p className="text-xs">Happy Customers</p>
//             </div>
//             <div className="w-px h-12 bg-border" />
//             <div className="text-center">
//               <p className="text-3xl font-display font-bold text-foreground">50+</p>
//               <p className="text-xs">Countries</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

"use client";

import { motion } from "framer-motion";
import { Star, Quote, Sparkles, Award, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sophia Laurent",
    location: "Paris, France",
    rating: 5,
    review: "Absolutely divine! The Rose Elixir has become my signature scent. The longevity is incredible - it lasts all day and I receive compliments everywhere I go. The packaging is equally stunning.",
    product: "Rose Elixir",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    verified: true
  },
  {
    id: 2,
    name: "James Mitchell",
    location: "London, UK",
    rating: 5,
    review: "Noir Mystique is pure sophistication. It's the perfect balance of bold and refined, mysterious yet approachable. The sillage is phenomenal. Worth every penny for this masterpiece.",
    product: "Noir Mystique",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    verified: true
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Milan, Italy",
    rating: 5,
    review: "The craftsmanship is unparalleled. Citrus Bloom captures summer in a bottle - fresh yet long-lasting. The bottle design is a work of art. This is luxury you can wear every day.",
    product: "Citrus Bloom",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    verified: true
  },
  {
    id: 4,
    name: "Alexander Chen",
    location: "New York, USA",
    rating: 5,
    review: "Oud Noir is a masterpiece. The depth and complexity of this fragrance is unlike anything I've experienced. Each note unfolds beautifully. This is what true luxury smells like.",
    product: "Oud Noir",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    verified: true
  },
];

export const CustomerReviews = () => {
  return (
    <section className="relative py-12 bg-gradient-to-b from-background via-muted/5 to-background overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
      
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
            <Star className="h-4 w-4 text-gold fill-gold" />
            <span className="text-xs font-semibold text-gold uppercase tracking-wider">
              Customer Stories
            </span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            What Our Clients Say
          </h2>
          
          {/* Subtitle */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover why our fragrances have captivated connoisseurs worldwide
          </p>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rounded-full bg-gold shadow-lg shadow-gold/50" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full bg-card border-2 border-border/50 group-hover:border-gold/40 rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-gold/10 overflow-hidden">
                
                {/* Decorative Quote Icon */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gold/20 blur-lg rounded-full" />
                    <Quote className="relative h-10 w-10 text-gold/30 group-hover:text-gold/50 transition-colors duration-500" />
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/20 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Customer Info */}
                <div className="flex items-start gap-3 mb-4 relative z-10">
                  <div className="relative">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-gold/30 group-hover:border-gold transition-colors duration-500"
                    />
                    {review.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-background">
                        <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-base">{review.name}</h4>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <span className="w-1 h-1 bg-gold rounded-full" />
                      {review.location}
                    </p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-5 group-hover:text-foreground/80 transition-colors duration-500">
                  "{review.review}"
                </p>

                {/* Product Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 group-hover:bg-gold/20 transition-colors duration-500">
                  <Sparkles className="h-3 w-3 text-gold" />
                  <p className="text-xs font-semibold text-gold">
                    {review.product}
                  </p>
                </div>

                {/* Bottom Accent Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/60 via-amber-500/60 to-gold/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 rounded-3xl -z-10" />
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 p-8 md:p-12 rounded-3xl border border-gold/20">
            {/* Stat 1 */}
            <div className="text-center group">
              <div className="relative inline-block mb-2">
                <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full" />
                <div className="relative flex items-baseline gap-1">
                  <p className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent">
                    4.9
                  </p>
                  <Star className="h-6 w-6 text-gold fill-gold mb-2" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                Average Rating
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

            {/* Stat 2 */}
            <div className="text-center group">
              <div className="relative inline-block mb-2">
                <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full" />
                <div className="relative flex items-baseline gap-1">
                  <p className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent">
                    10K+
                  </p>
                  <Award className="h-6 w-6 text-gold mb-2" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                Happy Customers
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

            {/* Stat 3 */}
            <div className="text-center group">
              <div className="relative inline-block mb-2">
                <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full" />
                <div className="relative flex items-baseline gap-1">
                  <p className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent">
                    50+
                  </p>
                  <Sparkles className="h-6 w-6 text-gold mb-2" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                Countries Worldwide
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};