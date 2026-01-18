"use client";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Sparkles, Heart, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background via-muted/20 to-background border-t border-gold/20 mt-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section - Enhanced */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block group mb-6">
              <div className="flex flex-col">
                {/* Brand Name with Premium Typography */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-px w-6 bg-gradient-to-r from-transparent to-gold" />
                  <h2 className="text-3xl font-display font-bold tracking-tight relative">
                    <span className="relative inline-block">
                      {/* Glow Effect */}
                      <span className="absolute inset-0 blur-lg bg-gradient-to-r from-gold via-amber-400 to-gold opacity-30 group-hover:opacity-50 transition-opacity" />
                      
                      {/* Main Text with Gradient */}
                      <span className="relative bg-gradient-to-r from-foreground via-gold to-foreground bg-clip-text text-transparent group-hover:from-gold group-hover:via-amber-400 group-hover:to-gold transition-all duration-500">
                        DE-HAC
                      </span>
                    </span>
                  </h2>
                  <div className="h-px w-6 bg-gradient-to-l from-transparent to-gold" />
                </div>
                
                {/* Tagline */}
                <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase font-light flex items-center gap-1.5">
                  <span className="h-px w-3 bg-gold/50" />
                  Embrace the Essence
                  <span className="h-px w-3 bg-gold/50" />
                </p>
              </div>
            </Link>
            
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Curated luxury fragrances from global artisans. Discover your signature scent and embrace timeless elegance.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground group">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <MapPin className="h-4 w-4 text-gold" />
                </div>
                <span>123 Fragrance St, Karachi</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground group">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone className="h-4 w-4 text-gold" />
                </div>
                <span>+92 300 1234567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-gold" />
              Shop
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="/shop?category=women" 
                  className="text-muted-foreground hover:text-gold transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-gold rounded-full group-hover:scale-150 transition-transform" />
                  For Women
                </Link>
              </li>
              <li>
                <Link 
                  href="/shop?category=men" 
                  className="text-muted-foreground hover:text-gold transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-gold rounded-full group-hover:scale-150 transition-transform" />
                  For Men
                </Link>
              </li>
              <li>
                <Link 
                  href="/shop?category=unisex" 
                  className="text-muted-foreground hover:text-gold transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-gold rounded-full group-hover:scale-150 transition-transform" />
                  Unisex Collection
                </Link>
              </li>
              <li>
                <Link 
                  href="/shop" 
                  className="text-gold hover:text-gold/80 transition-all duration-300 flex items-center gap-2 group font-semibold"
                >
                  <Heart className="w-3.5 h-3.5 group-hover:fill-gold transition-all" />
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-gold" />
              Customer Care
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="/contact" 
                  className="text-muted-foreground hover:text-gold transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-gold rounded-full group-hover:scale-150 transition-transform" />
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-muted-foreground hover:text-gold transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-gold rounded-full group-hover:scale-150 transition-transform" />
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-muted-foreground hover:text-gold transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-gold rounded-full group-hover:scale-150 transition-transform" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-muted-foreground hover:text-gold transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-gold rounded-full group-hover:scale-150 transition-transform" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter - Enhanced */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" />
              Stay Connected
            </h3>
            <p className="text-sm mb-4 text-muted-foreground leading-relaxed">
              Subscribe for exclusive offers, new arrivals, and fragrance inspiration.
            </p>
            
            {/* Newsletter Form */}
            <div className="space-y-3 mb-6">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pr-24 h-11 rounded-xl border-gold/30 focus:border-gold bg-background/50 backdrop-blur-sm"
                />
                <Button 
                  className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-gold to-amber-600 hover:from-amber-600 hover:to-gold text-white font-semibold px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Join
                </Button>
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-gold" />
                Join 10,000+ fragrance enthusiasts
              </p>
            </div>

            {/* Social Links - Enhanced */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Follow Us
              </p>
              <div className="flex gap-2">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="hover:bg-gold/10 rounded-xl border border-border/50 hover:border-gold/50 transition-all duration-300 group"
                  >
                    <Instagram className="h-5 w-5 group-hover:text-gold transition-colors" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="hover:bg-gold/10 rounded-xl border border-border/50 hover:border-gold/50 transition-all duration-300 group"
                  >
                    <Facebook className="h-5 w-5 group-hover:text-gold transition-colors" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="hover:bg-gold/10 rounded-xl border border-border/50 hover:border-gold/50 transition-all duration-300 group"
                  >
                    <Twitter className="h-5 w-5 group-hover:text-gold transition-colors" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-background px-4">
              <Sparkles className="h-4 w-4 text-gold" />
            </div>
          </div>
        </div>

        {/* Bottom Bar - Enhanced */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>&copy; 2026 DE-HAC. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Crafted with</span>
            <Heart className="h-3 w-3 text-gold fill-gold hidden md:inline" />
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/about" 
              className="text-muted-foreground hover:text-gold transition-all duration-300 relative group"
            >
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
            </Link>
            <Link 
              href="/about" 
              className="text-muted-foreground hover:text-gold transition-all duration-300 relative group"
            >
              Terms of Service
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
            </Link>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-gold rounded-full" />
              <span>100% Authentic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-gold rounded-full" />
              <span>Free Shipping Over $50</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-gold rounded-full" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-gold rounded-full" />
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};