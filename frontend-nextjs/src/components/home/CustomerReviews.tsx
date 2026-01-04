"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sophia Laurent",
    location: "Paris, France",
    rating: 5,
    review: "Absolutely divine! The Rose Elixir has become my signature scent. The longevity is incredible and I receive compliments everywhere I go.",
    product: "Rose Elixir",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
  },
  {
    id: 2,
    name: "James Mitchell",
    location: "London, UK",
    rating: 5,
    review: "Noir Mystique is pure sophistication. It's the perfect balance of bold and refined. Worth every penny.",
    product: "Noir Mystique",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Milan, Italy",
    rating: 5,
    review: "The craftsmanship is unparalleled. Citrus Bloom captures summer in a bottle. Fresh yet long-lasting.",
    product: "Citrus Bloom",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
  },
  {
    id: 4,
    name: "Alexander Chen",
    location: "New York, USA",
    rating: 5,
    review: "Oud Noir is a masterpiece. The depth and complexity of this fragrance is unlike anything I've experienced.",
    product: "Oud Noir",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80"
  },
];

export const CustomerReviews = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover why our fragrances have captivated connoisseurs worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 relative group hover:border-gold/30 transition-colors"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-gold/20" />
              
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-sm">{review.name}</h4>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                "{review.review}"
              </p>

              <p className="text-xs font-medium text-gold">
                Purchased: {review.product}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <div className="flex items-center justify-center gap-8 text-muted-foreground">
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-foreground">4.9</p>
              <p className="text-xs">Average Rating</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-foreground">10K+</p>
              <p className="text-xs">Happy Customers</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-foreground">50+</p>
              <p className="text-xs">Countries</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
