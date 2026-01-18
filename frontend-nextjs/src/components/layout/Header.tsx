// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { Search, ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useCart } from "@/contexts/CartContext";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// export const Header = () => {
//   const router = useRouter();
//   const { cartCount } = useCart();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [shopOpen, setShopOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && searchQuery.trim()) {
//       router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
//       setSearchOpen(false);
//       setSearchQuery("");
//     }
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
//       <div className="container mx-auto px-4">
//         {/* Top Bar */}
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Mobile Menu Toggle */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="md:hidden"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X /> : <Menu />}
//           </Button>

//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
//               <div className="w-4 h-6 bg-primary rounded-sm" />
//             </div>
//             <span className="text-xl md:text-2xl font-display font-bold text-primary">
//               De-Hac
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="text-sm font-medium hover:text-gold transition-smooth">
//               Home
//             </Link>

//             {/* Shop Dropdown */}
//             <DropdownMenu>
//               <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-gold transition-smooth outline-none">
//                 Shop <ChevronDown className="h-4 w-4" />
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="center" className="bg-background border border-border w-40">
//                 <DropdownMenuItem asChild>
//                   <Link href="/shop?category=women" className="w-full cursor-pointer">
//                     Women
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                   <Link href="/shop?category=men" className="w-full cursor-pointer">
//                     Men
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                   <Link href="/shop?category=unisex" className="w-full cursor-pointer">
//                     Unisex
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                   <Link href="/shop" className="w-full cursor-pointer">
//                     All Fragrances
//                   </Link>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>

//             <Link href="/stories" className="text-sm font-medium hover:text-gold transition-smooth">
//               Stories
//             </Link>
//             <Link href="/about" className="text-sm font-medium hover:text-gold transition-smooth">
//               About
//             </Link>
//             <Link href="/contact" className="text-sm font-medium hover:text-gold transition-smooth">
//               Contact
//             </Link>
//           </nav>

//           {/* Actions */}
//           <div className="flex items-center space-x-2 md:space-x-4">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setSearchOpen(!searchOpen)}
//               className="hover:bg-gold/10"
//             >
//               <Search className="h-5 w-5" />
//             </Button>
//             <Button variant="ghost" size="icon" className="hover:bg-gold/10">
//               <User className="h-5 w-5" />
//             </Button>
//             <Link href="/cart">
//               <Button variant="ghost" size="icon" className="relative hover:bg-gold/10">
//                 <ShoppingBag className="h-5 w-5" />
//                 {cartCount > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-crimson text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                     {cartCount}
//                   </span>
//                 )}
//               </Button>
//             </Link>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <AnimatePresence>
//           {searchOpen && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               className="overflow-hidden border-t border-border"
//             >
//               <div className="py-4">
//                 <Input
//                   type="search"
//                   placeholder="Search fragrances..."
//                   className="max-w-2xl mx-auto"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   onKeyDown={handleSearch}
//                 />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="md:hidden border-t border-border bg-card"
//           >
//             <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
//               <Link
//                 href="/"
//                 className="text-sm font-medium hover:text-gold transition-smooth"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Home
//               </Link>

//               {/* Mobile Shop Accordion */}
//               <div>
//                 <button
//                   onClick={() => setShopOpen(!shopOpen)}
//                   className="flex items-center justify-between w-full text-sm font-medium hover:text-gold transition-smooth"
//                 >
//                   Shop
//                   <ChevronDown className={`h-4 w-4 transition-transform ${shopOpen ? 'rotate-180' : ''}`} />
//                 </button>
//                 <AnimatePresence>
//                   {shopOpen && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       className="overflow-hidden pl-4 mt-2 space-y-2"
//                     >
//                       <Link
//                         href="/shop?category=women"
//                         className="block text-sm text-muted-foreground hover:text-gold transition-smooth"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         Women
//                       </Link>
//                       <Link
//                         href="/shop?category=men"
//                         className="block text-sm text-muted-foreground hover:text-gold transition-smooth"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         Men
//                       </Link>
//                       <Link
//                         href="/shop?category=unisex"
//                         className="block text-sm text-muted-foreground hover:text-gold transition-smooth"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         Unisex
//                       </Link>
//                       <Link
//                         href="/shop"
//                         className="block text-sm text-muted-foreground hover:text-gold transition-smooth"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         All Fragrances
//                       </Link>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               <Link
//                 href="/stories"
//                 className="text-sm font-medium hover:text-gold transition-smooth"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Stories
//               </Link>
//               <Link
//                 href="/about"
//                 className="text-sm font-medium hover:text-gold transition-smooth"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 About
//               </Link>
//               <Link
//                 href="/contact"
//                 className="text-sm font-medium hover:text-gold transition-smooth"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Contact
//               </Link>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ShoppingBag, User, Menu, X, ChevronDown, Sparkles, Heart } from "lucide-react";
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
  const router = useRouter();
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for header effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-2xl shadow-2xl shadow-black/10 border-b border-gold/30' 
          : 'bg-background/95 backdrop-blur-xl border-b border-border/50'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-gold/10 transition-all duration-300 rounded-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </Button>

          {/* Premium Text-Based Logo */}
          <Link href="/" className="flex flex-col items-center group relative">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              {/* Main Brand Name */}
              <div className="flex items-center gap-2">
                {/* Decorative Left Accent */}
                <div className="hidden md:flex items-center gap-1">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent via-gold to-gold" />
                  <div className="w-1 h-1 bg-gold rounded-full" />
                </div>

                {/* Brand Name with Premium Typography */}
                <h1 className="text-2xl md:text-4xl font-display font-bold tracking-tight relative">
                  <span className="relative inline-block">
                    
                    {/* Main Text with Gradient */}
                    <span className="relative bg-gradient-to-r from-foreground via-gold to-foreground bg-clip-text text-transparent group-hover:from-gold group-hover:via-amber-400 group-hover:to-gold transition-all duration-500">
                      DE-HAC
                    </span>
                  </span>
                </h1>

                {/* Decorative Right Accent */}
                <div className="hidden md:flex items-center gap-1">
                  <div className="w-1 h-1 bg-gold rounded-full" />
                  <div className="h-px w-8 bg-gradient-to-l from-transparent via-gold to-gold" />
                </div>
              </div>

              {/* Elegant Tagline */}
              <div className="text-center mt-0.5">
                <p className="text-[10px] md:text-xs tracking-[0.3em] text-muted-foreground uppercase font-normal flex items-center justify-center gap-1.5">
                  <span className="h-px w-3 bg-gold/50" />
                  Embrace the Essence
                  <span className="h-px w-3 bg-gold/50" />
                </p>
              </div>

             
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="relative text-sm font-semibold tracking-wide hover:text-gold transition-all duration-300 group py-2"
            >
              <span>Home</span>
              <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-amber-500 group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>

            {/* Shop Dropdown - Enhanced */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-semibold tracking-wide hover:text-gold transition-all duration-300 outline-none group py-2">
                Shop 
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="center" 
                className="bg-background/95 backdrop-blur-2xl border-2 border-gold/30 shadow-2xl shadow-gold/10 rounded-2xl mt-3 overflow-hidden min-w-[200px]"
              >
                <div className="p-2">
                  
                  <DropdownMenuItem asChild>
                    <Link 
                      href="/shop?category=women" 
                      className="w-full cursor-pointer px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-gold/10 hover:to-transparent transition-all duration-300 flex items-center gap-3 group"
                    >
                      <div className="w-1.5 h-1.5 bg-gold rounded-full group-hover:scale-150 transition-transform" />
                      <span className="font-medium">For Women</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link 
                      href="/shop?category=men" 
                      className="w-full cursor-pointer px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-gold/10 hover:to-transparent transition-all duration-300 flex items-center gap-3 group"
                    >
                      <div className="w-1.5 h-1.5 bg-gold rounded-full group-hover:scale-150 transition-transform" />
                      <span className="font-medium">For Men</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link 
                      href="/shop?category=unisex" 
                      className="w-full cursor-pointer px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-gold/10 hover:to-transparent transition-all duration-300 flex items-center gap-3 group"
                    >
                      <div className="w-1.5 h-1.5 bg-gold rounded-full group-hover:scale-150 transition-transform" />
                      <span className="font-medium">Unisex</span>
                    </Link>
                  </DropdownMenuItem>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-2" />
                  
                  <DropdownMenuItem asChild>
                    <Link 
                      href="/shop" 
                      className="w-full cursor-pointer px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-gold/20 hover:to-transparent transition-all duration-300 flex items-center gap-3 group font-semibold"
                    >
                      <Heart className="w-4 h-4 text-gold group-hover:fill-gold transition-all" />
                      <span className="text-gold">View All</span>
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              href="/stories" 
              className="relative text-sm font-semibold tracking-wide hover:text-gold transition-all duration-300 group py-2"
            >
              <span>Stories</span>
              <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-amber-500 group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>
            <Link 
              href="/about" 
              className="relative text-sm font-semibold tracking-wide hover:text-gold transition-all duration-300 group py-2"
            >
              <span>About</span>
              <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-amber-500 group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>
            <Link 
              href="/contact" 
              className="relative text-sm font-semibold tracking-wide hover:text-gold transition-all duration-300 group py-2"
            >
              <span>Contact</span>
              <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-amber-500 group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>
          </nav>

          {/* Action Buttons - Enhanced */}
          <div className="flex items-center gap-1 md:gap-2">
            {/* Search Button */}
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(!searchOpen)}
                className={`relative hover:bg-gold/10 rounded-xl transition-all duration-300 group ${
                  searchOpen ? 'bg-gold/10 text-gold' : ''
                }`}
              >
                <Search className="h-5 w-5 group-hover:scale-110 transition-transform" />
                {searchOpen && (
                  <span className="absolute inset-0 bg-gold/20 rounded-xl blur-lg" />
                )}
              </Button>
            </motion.div>

            {/* User Button */}
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-gold/10 rounded-xl transition-all duration-300 group"
              >
                <User className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>

            {/* Cart Button - Enhanced */}
            <Link href="/cart">
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative hover:bg-gold/10 rounded-xl transition-all duration-300 group"
                >
                  <ShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  {cartCount > 0 && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1.5 -right-1.5 bg-gradient-to-br from-red-500 to-red-600 text-white text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center font-bold shadow-lg shadow-red-500/50 px-1.5"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Enhanced Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="overflow-hidden border-t border-gold/20"
            >
              <div className="py-8">
                <div className="relative max-w-3xl mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 rounded-2xl blur-xl" />
                  <div className="relative">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gold" />
                    <Input
                      type="search"
                      placeholder="Discover your signature scent..."
                      className="pl-14 pr-12 h-14 rounded-2xl border-2 border-gold/30 focus:border-gold bg-background/50 backdrop-blur-sm text-base font-medium shadow-lg"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleSearch}
                      autoFocus
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-4">
                  <span className="h-px w-8 bg-gold/30" />
                  <span>Press Enter to search or ESC to close</span>
                  <span className="h-px w-8 bg-gold/30" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="lg:hidden border-t border-gold/20 bg-gradient-to-b from-background via-background to-muted/30 backdrop-blur-2xl"
          >
            <nav className="container mx-auto px-4 py-6 space-y-2">
              <Link
                href="/"
                className="flex items-center gap-3 text-base font-semibold hover:text-gold transition-all duration-300 px-4 py-3.5 rounded-xl hover:bg-gradient-to-r hover:from-gold/10 hover:to-transparent group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-1.5 h-1.5 bg-gold rounded-full group-hover:scale-150 transition-transform" />
                Home
              </Link>

              {/* Mobile Shop Accordion - Enhanced */}
              <div className="overflow-hidden rounded-xl border-2 border-gold/20 bg-muted/20">
                <button
                  onClick={() => setShopOpen(!shopOpen)}
                  className="flex items-center justify-between w-full text-base font-semibold hover:text-gold transition-all duration-300 px-4 py-3.5 hover:bg-gold/5"
                >
                  <span className="flex items-center gap-3">
                    <Sparkles className="h-4 w-4 text-gold" />
                    Shop Collections
                  </span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-500 ${shopOpen ? 'rotate-180 text-gold' : ''}`} />
                </button>
                <AnimatePresence>
                  {shopOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-background/50 border-t border-gold/20"
                    >
                      <div className="px-4 py-3 space-y-1">
                        <Link
                          href="/shop?category=women"
                          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-gold transition-all duration-300 px-4 py-2.5 rounded-lg hover:bg-gold/10"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="w-1 h-1 bg-gold rounded-full" />
                          For Women
                        </Link>
                        <Link
                          href="/shop?category=men"
                          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-gold transition-all duration-300 px-4 py-2.5 rounded-lg hover:bg-gold/10"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="w-1 h-1 bg-gold rounded-full" />
                          For Men
                        </Link>
                        <Link
                          href="/shop?category=unisex"
                          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-gold transition-all duration-300 px-4 py-2.5 rounded-lg hover:bg-gold/10"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="w-1 h-1 bg-gold rounded-full" />
                          Unisex
                        </Link>
                        <Link
                          href="/shop"
                          className="flex items-center gap-3 text-sm font-semibold text-gold hover:text-gold/80 transition-all duration-300 px-4 py-2.5 rounded-lg hover:bg-gold/10"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Heart className="w-3.5 h-3.5" />
                          View All
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/stories"
                className="flex items-center gap-3 text-base font-semibold hover:text-gold transition-all duration-300 px-4 py-3.5 rounded-xl hover:bg-gradient-to-r hover:from-gold/10 hover:to-transparent group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-1.5 h-1.5 bg-gold rounded-full group-hover:scale-150 transition-transform" />
                Stories
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-3 text-base font-semibold hover:text-gold transition-all duration-300 px-4 py-3.5 rounded-xl hover:bg-gradient-to-r hover:from-gold/10 hover:to-transparent group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-1.5 h-1.5 bg-gold rounded-full group-hover:scale-150 transition-transform" />
                About
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-3 text-base font-semibold hover:text-gold transition-all duration-300 px-4 py-3.5 rounded-xl hover:bg-gradient-to-r hover:from-gold/10 hover:to-transparent group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-1.5 h-1.5 bg-gold rounded-full group-hover:scale-150 transition-transform" />
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};