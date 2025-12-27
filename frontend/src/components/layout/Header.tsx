import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
              <div className="w-4 h-6 bg-primary rounded-sm" />
            </div>
            <span className="text-xl md:text-2xl font-display font-bold text-primary">
              ScentHaven
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-gold transition-smooth">
              Home
            </Link>
            
            {/* Shop Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-gold transition-smooth outline-none">
                Shop <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="bg-background border border-border w-40">
                <DropdownMenuItem asChild>
                  <Link to="/shop?category=women" className="w-full cursor-pointer">
                    Women
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/shop?category=men" className="w-full cursor-pointer">
                    Men
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/shop?category=unisex" className="w-full cursor-pointer">
                    Unisex
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/shop" className="w-full cursor-pointer">
                    All Fragrances
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/stories" className="text-sm font-medium hover:text-gold transition-smooth">
              Stories
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-gold transition-smooth">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-gold transition-smooth">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:bg-gold/10"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-gold/10">
              <User className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative hover:bg-gold/10">
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-crimson text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-border"
            >
              <div className="py-4">
                <Input
                  type="search"
                  placeholder="Search fragrances..."
                  className="max-w-2xl mx-auto"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border bg-card"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                to="/"
                className="text-sm font-medium hover:text-gold transition-smooth"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Shop Accordion */}
              <div>
                <button
                  onClick={() => setShopOpen(!shopOpen)}
                  className="flex items-center justify-between w-full text-sm font-medium hover:text-gold transition-smooth"
                >
                  Shop
                  <ChevronDown className={`h-4 w-4 transition-transform ${shopOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {shopOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 mt-2 space-y-2"
                    >
                      <Link
                        to="/shop?category=women"
                        className="block text-sm text-muted-foreground hover:text-gold transition-smooth"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Women
                      </Link>
                      <Link
                        to="/shop?category=men"
                        className="block text-sm text-muted-foreground hover:text-gold transition-smooth"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Men
                      </Link>
                      <Link
                        to="/shop?category=unisex"
                        className="block text-sm text-muted-foreground hover:text-gold transition-smooth"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Unisex
                      </Link>
                      <Link
                        to="/shop"
                        className="block text-sm text-muted-foreground hover:text-gold transition-smooth"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        All Fragrances
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/stories"
                className="text-sm font-medium hover:text-gold transition-smooth"
                onClick={() => setMobileMenuOpen(false)}
              >
                Stories
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium hover:text-gold transition-smooth"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium hover:text-gold transition-smooth"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
