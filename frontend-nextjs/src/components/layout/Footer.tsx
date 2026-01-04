import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <div className="w-4 h-6 bg-background rounded-sm" />
              </div>
              <span className="text-xl font-display font-bold">ScentHaven</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Curated luxury fragrances from global artisans. Discover your signature scent.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop?category=women" className="hover:text-gold transition-smooth">
                  Women&apos;s Fragrances
                </Link>
              </li>
              <li>
                <Link href="/shop?category=men" className="hover:text-gold transition-smooth">
                  Men&apos;s Fragrances
                </Link>
              </li>
              <li>
                <Link href="/shop?category=unisex" className="hover:text-gold transition-smooth">
                  Unisex Collection
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-gold transition-smooth">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-display font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-gold transition-smooth">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-smooth">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-smooth">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-smooth">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm mb-4 text-primary-foreground/80">
              Subscribe for exclusive offers and new arrivals
            </p>
            <div className="flex gap-2 mb-4">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button className="bg-gold text-gold-foreground hover:bg-gold/90">
                Join
              </Button>
            </div>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="hover:bg-gold/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-gold/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-gold/20">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
          <p>&copy; 2024 ScentHaven. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-gold transition-smooth">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-gold transition-smooth">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
