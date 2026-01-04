"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";
import { useState } from "react";

export const VideoSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* Left Side - Video */}
        <div 
          className="relative h-[50vh] lg:h-auto overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
          >
            <source
              src="https://cdn.pixabay.com/video/2020/07/30/45651-446378982_large.mp4"
              type="video/mp4"
            />
          </video>
          
          {/* Decorative Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/20 lg:to-background" />
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Play Button Overlay */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40">
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </div>
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute top-6 left-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
          >
            <span className="text-white text-sm font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Holiday Collection
            </span>
          </motion.div>
        </div>

        {/* Right Side - Content */}
        <div className="flex items-center justify-center p-8 lg:p-16 bg-background">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            {/* Decorative Element */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-primary" />
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
                Gift Season
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground leading-tight">
              Unwrap
              <br />
              <span className="text-primary">Excellence</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From the finest ingredients to the most exacting finishing touch, 
              each ScentHaven fragrance is tailored with masterful intent. Leave 
              your mark this season with a gesture of true distinction.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-border">
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-foreground">50+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Fragrances</div>
              </div>
              <div className="text-center border-x border-border">
                <div className="text-2xl font-display font-bold text-foreground">100%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Natural</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-foreground">24h</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Longevity</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium w-full sm:w-auto"
                >
                  Shop All Gifts
                </Button>
              </Link>
              <Link href="/stories">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-border text-foreground hover:bg-accent px-8 py-6 text-base font-medium w-full sm:w-auto"
                >
                  Our Story
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
