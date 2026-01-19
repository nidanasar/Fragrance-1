import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const VideoHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/video/video-1.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-wide"
            >
              Unwrap Excellence
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mb-8"
            >
              <div className="text-6xl md:text-8xl font-display font-bold mb-4">
                SCENTHAVEN
              </div>
              <div className="text-xl md:text-2xl tracking-[0.3em] font-light">
                CUT DIFFERENT
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto font-light"
            >
              From the finest ingredients to the most exacting finishing touch, 
              each fragrance is tailored with masterful intent. Leave your mark 
              this season with a gesture of true distinction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/shop">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base font-medium tracking-wide"
                >
                  Shop All Gifts
                </Button>
              </Link>
              <Link href="/shop">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-base font-medium tracking-wide"
                >
                  Be Inspired
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

