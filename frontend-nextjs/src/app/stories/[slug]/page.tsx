"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const storiesData = [
  {
    slug: "master-perfumer-journey",
    title: "The Master Perfumer's Journey",
    content: `
      <p>Jean-Claude's journey began in the sun-drenched jasmine fields of Grasse, the undisputed world capital of perfumery. Born into a family of artisan distillers, his childhood was defined by the intoxicating rhythms of the seasons—the delicate harvest of May roses, the intense aroma of summer lavender, and the earthy richness of autumn oakmoss.</p>
      
      <p>Over the next four decades, this odyssey would take him across five continents. From the high-altitude sandalwood forests of Mysore to the remote vanilla plantations of Madagascar, Jean-Claude sought not just ingredients, but the very soul of nature. "A great perfume is a photograph of a moment in time," he often says. "It's a memory that you can wear."</p>

      <h2>The Art of the 'Nose'</h2>
      <p>Being a 'nose' is as much about silence as it is about scent. It requires an almost meditative state of mind to distinguish between hundreds of subtle molecular variations. In his Parisian atelier, Jean-Claude spends months, sometimes years, perfecting a single accord. A symphony of top, heart, and base notes must balance perfectly, evolving on the skin like a unfolding story.</p>

      <blockquote>"Nature is the greatest artist. I am merely its humble translator, trying to capture a single breath of its magnificence in a bottle."</blockquote>

      <h2>Legacy and Innovation</h2>
      <p>Today, Jean-Claude's legacy continues through our Heritage Collection. By blending traditional extraction methods—some dating back centuries—with modern molecular distillation, we create fragrances that are both timeless and contemporary. Each bottle is a testament to forty years of passion, patience, and the pursuit of olfactory perfection.</p>
    `,
    image: "/assets/story-artisan.jpg",
    date: "November 15, 2024",
    author: "Jean-Claude",
    category: "Behind the Scenes",
    readTime: "6 min read"
  },
  {
    slug: "spices-silk-road",
    title: "Spices of the Silk Road",
    content: `
      <p>The Silk Road was never just about silk; it was the world's first great aromatic highway. For centuries, caravans laden with precious resins, rare barks, and exotic seeds traversed the vast deserts and mountain passes of Central Asia, bringing the olfactory treasures of the East to the royal courts of the West.</p>

      <h2>The Alchemist's Palette</h2>
      <p>Our latest oriental compositions are an homage to these ancient traders. We've sourced the finest saffron from the plains of Khorasan, aged patchouli from the humid jungles of Indonesia, and the most exquisite Mysore sandalwood. These are 'living' ingredients, each carrying the DNA of the soil and climate where they were born.</p>

      <p>The challenge for a modern perfumer is to take these heavy, traditional notes and give them a contemporary lightness. We achieve this through a process of 'aeration', blending dense resins with bright citrus or unexpected ozonic notes to create a fragrance that feels both ancient and modern.</p>

      <blockquote>"To smell a spice is to travel through time. It is the most immediate way to visit a place you have never been."</blockquote>

      <h2>A Symphony of Warmth</h2>
      <p>When you wear a fragrance from our Oriental Luxe range, you are participating in a tradition that spans millennia. It's a symphony of warmth—an intoxicating blend of history, mystery, and luxury that lingers long after the sun has set.</p>
    `,
    image: "/assets/story-spice.jpg",
    date: "October 22, 2024",
    author: "Elena Rossi",
    category: "Ingredients",
    readTime: "5 min read"
  },
  {
    slug: "capturing-mediterranean",
    title: "Capturing the Mediterranean",
    content: `
      <p>The Mediterranean is not just a sea; it's a state of mind. It's the scent of salt on warm skin, the citrus-heavy breeze of a Sicilian morning, and the dry, herbal aroma of the maquis under the midday sun.</p>

      <h2>The Essence of Azure</h2>
      <p>Capturing this essence requires a palette of 'blue' and 'gold' notes. We use premium bergamot from Calabria, hand-pressed to preserve its bright, peppery sparkle. This is layered over a heart of sea salt and neroli, creating an immediate sensation of coastal freshness.</p>

      <p>But the Mediterranean also has a deeper, darker side. To ground our aquatic fragrances, we use the resinous scent of stone pine and the sun-baked warmth of cedarwood. This gives the fragrance 'driftwood' character, evoking the memory of an endless summer day spent by the azure water.</p>

      <blockquote>"The sea does not just have a scent; it has a heartbeat. My goal is to capture that pulse in liquid form."</blockquote>

      <h2>Liquid Poetry</h2>
      <p>Our Aquatic Fresh collection is designed for those who seek serenity. It is liquid poetry—a breath of fresh air that transports you to a rocky cove where the only sound is the rhythmic washing of waves against the shore.</p>
    `,
    image: "/assets/story-ocean.jpg",
    date: "September 10, 2024",
    author: "Marco Silva",
    category: "Inspiration",
    readTime: "4 min read"
  },
  {
    slug: "secret-garden-collection",
    title: "The Secret Garden Collection",
    content: `
      <p>There is a specific moment, just before dawn, when a rose garden is at its most potent. The dew is still heavy on the petals, and the air is cool, allowing the most delicate volatile compounds to remain trapped in the flower's heart.</p>

      <h2>The Harvest of Light</h2>
      <p>For our Secret Garden Collection, we harvest only during these 'golden hours'. We work with a small estate in the English countryside that specializes in heritage rose varieties—flowers that have been bred for scent rather than just beauty. These roses possess a complexity that modern commercial varieties have lost—notes of honey, clove, and even green apple.</p>

      <p>Distilling these flowers requires extreme care. We use a low-temperature steam distillation process that takes three times longer than standard methods but preserves the fragile 'soul' of the rose. The result is an absolute that smells exactly like a living flower, not a synthetic imitation.</p>

      <blockquote>"A rose is a rose is a rose... unless it's a De-Hac rose. Then it's a masterpiece."</blockquote>

      <h2>Floral Romance</h2>
      <p>This collection is our tribute to the timeless romance of the garden. It's an enchanting escape into a world of rare botanicals and hidden pathways, where every scent is a discovery and every discovery is a delight.</p>
    `,
    image: "/assets/story-garden.jpg",
    date: "August 05, 2024",
    author: "Sarah Jenkins",
    category: "New Release",
    readTime: "7 min read"
  }
];

export default function StoryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const story = storiesData.find((s) => s.slug === slug);

  if (!story) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-display font-bold mb-4">Story Not Found</h1>
        <p className="text-muted-foreground mb-8">The tale you're looking for hasn't been written yet.</p>
        <Link href="/stories">
          <Button className="bg-gold text-primary hover:bg-gold/90">
            Back to Stories
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Image */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container mx-auto px-4 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link href="/stories">
                <Button variant="ghost" className="text-white hover:text-gold mb-6 -ml-4">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Stories
                </Button>
              </Link>
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mb-4">
                <span className="bg-gold text-primary px-3 py-1 rounded font-medium text-xs uppercase tracking-wider">
                  {story.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {story.date}
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" /> By {story.author}
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                {story.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Intro Stats */}
            <div className="flex items-center justify-between py-6 border-y border-border mb-12">
              <div className="flex items-center gap-6">
                <div className="text-sm">
                  <span className="text-muted-foreground block">Reading Time</span>
                  <span className="font-semibold">{story.readTime}</span>
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="text-sm">
                  <span className="text-muted-foreground block">Category</span>
                  <span className="font-semibold">{story.category}</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
                <Share2 className="h-4 w-4" /> Share Story
              </Button>
            </div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="prose prose-lg dark:prose-invert prose-gold max-w-none"
              dangerouslySetInnerHTML={{ __html: story.content }}
            />

            {/* Footer / CTA */}
            <div className="mt-20 p-8 md:p-12 rounded-3xl bg-muted/30 border border-gold/20 text-center">
              <h3 className="text-2xl font-display font-bold mb-4">Inspired by this tale?</h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Explore the collection that was born from these extraordinary moments.
              </p>
              <Link href="/shop">
                <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-6 rounded-xl text-lg">
                  Explore the Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
