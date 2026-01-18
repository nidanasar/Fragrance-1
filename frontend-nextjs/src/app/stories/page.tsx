"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stories = [
  {
    id: 1,
    slug: "master-perfumer-journey",
    title: "The Master Perfumer's Journey",
    excerpt: "Follow Jean-Claude's 40-year odyssey through the world's most exotic botanical gardens.",
    image: "/assets/story-artisan.jpg",
    date: "November 2024",
    category: "Behind the Scenes",
  },
  {
    id: 2,
    slug: "spices-silk-road",
    title: "Spices of the Silk Road",
    excerpt: "How ancient trade routes continue to inspire our most daring oriental compositions.",
    image: "/assets/story-spice.jpg",
    date: "October 2024",
    category: "Ingredients",
  },
  {
    id: 3,
    slug: "capturing-mediterranean",
    title: "Capturing the Mediterranean",
    excerpt: "The art of distilling sun-drenched coastal memories into liquid poetry.",
    image: "/assets/story-ocean.jpg",
    date: "September 2024",
    category: "Inspiration",
  },
  {
    id: 4,
    slug: "secret-garden-collection",
    title: "The Secret Garden Collection",
    excerpt: "Unveiling our latest floral masterpieces, born from rare English rose varieties.",
    image: "/assets/story-garden.jpg",
    date: "August 2024",
    category: "New Release",
  },
];

export default function StoriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Stories</h1>
          <p className="text-xl font-light max-w-2xl mx-auto">
            Tales of artistry, discovery, and the endless pursuit of olfactory perfection
          </p>
        </motion.div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <motion.article
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/stories/${story.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                    <span className="absolute top-4 left-4 bg-gold text-primary px-3 py-1 text-xs font-medium rounded">
                      {story.category}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm text-muted-foreground">{story.date}</span>
                    <h2 className="text-2xl font-display font-bold group-hover:text-gold transition-colors">
                      {story.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{story.excerpt}</p>
                    <span className="inline-block text-black font-medium group-hover:underline pt-2">
                      Read More &rarr;
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
