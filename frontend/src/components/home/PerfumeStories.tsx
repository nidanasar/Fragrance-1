import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import artisanImg from "@/assets/story-artisan.jpg";
import spiceImg from "@/assets/story-spice.jpg";
import oceanImg from "@/assets/story-ocean.jpg";
import gardenImg from "@/assets/story-garden.jpg";

const stories = [
  {
    image: artisanImg,
    title: "The Artisan's Legacy",
    story: "Handcrafted in a Parisian atelier, each bottle tells a story of five generations of master perfumers. Where tradition meets innovation in every note.",
    tag: "Heritage Collection",
  },
  {
    image: spiceImg,
    title: "Spice Route Journey",
    story: "An olfactory voyage through ancient spice markets. Rare saffron threads, aged vanilla, and exotic spices create an intoxicating symphony of warmth.",
    tag: "Oriental Luxe",
  },
  {
    image: oceanImg,
    title: "Coastal Serenity",
    story: "Capturing the essence of ocean mist at dawn. Fresh marine notes blend with sun-kissed driftwood, evoking memories of endless summer days.",
    tag: "Aquatic Fresh",
  },
  {
    image: gardenImg,
    title: "Secret Garden",
    story: "A romantic escape to a hidden rose garden. Thousands of damascus roses harvested at sunrise create this timeless, enchanting fragrance.",
    tag: "Floral Romance",
  },
];

export const PerfumeStories = () => {
  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Stories Behind Every Scent
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each fragrance carries a unique tale, crafted with passion and inspired by extraordinary moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-luxury hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-gold text-gold-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {story.tag}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {story.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    {story.story}
                  </p>
                  <Link to="/shop">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-white text-white hover:bg-white hover:text-primary"
                    >
                      Explore Collection
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link to="/shop">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6">
              Discover All Stories
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
