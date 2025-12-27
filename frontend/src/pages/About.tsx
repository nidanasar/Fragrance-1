import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Crafting timeless fragrances since 1985
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              The Art of Perfumery
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              At ScentHaven, we believe that fragrance is more than just a scent—it's an expression 
              of identity, a memory captured in a bottle, and an art form perfected over generations.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in the heart of Grasse, France, our house has dedicated nearly four decades 
              to the pursuit of olfactory excellence. Each fragrance in our collection is a testament 
              to the mastery of our perfumers, who blend rare ingredients sourced from the world's 
              most pristine locations.
            </p>

            <div className="grid md:grid-cols-3 gap-8 py-12">
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-gold mb-2">40+</div>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-gold mb-2">200+</div>
                <p className="text-muted-foreground">Unique Fragrances</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-gold mb-2">50+</div>
                <p className="text-muted-foreground">Countries Worldwide</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to sustainability and ethical sourcing ensures that every bottle 
              not only smells extraordinary but also contributes to a better world. We work 
              directly with farmers and artisans, supporting communities while obtaining the 
              finest raw materials.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
