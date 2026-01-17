// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import Image, { StaticImageData } from "next/image";



// const slides = [
//   {
//     image: "/images/Banner-1.png",
//     title: "Discover Scents That Captivate",
//     subtitle: "Luxury fragrances curated for the modern connoisseur",
//     cta: "Explore Collection",
//     link: "/shop"
//   },
//   {
//     image: "/images/Banner-2.png",
//     title: "Signature Elegance",
//     subtitle: "Find your perfect scent from our exclusive collection",
//     cta: "Shop Now",
//     link: "/shop"
//   },
//   {
//     image: "/images/Banner-3.png",
//     title: "Timeless Beauty",
//     subtitle: "Elegant fragrances with rose and gold accents",
//     cta: "View Collection",
//     link: "/shop"
//   },
//   {
//     image: "/images/2.png",
//     title: "Modern Sophistication",
//     subtitle: "Bold and contemporary scents for the confident individual",
//     cta: "Discover Now",
//     link: "/shop"
//   },
//   // {
//   //   image: hero5,
//   //   title: "Natural Essence",
//   //   subtitle: "Fresh botanical fragrances inspired by nature",
//   //   cta: "Explore Nature",
//   //   link: "/shop"
//   // },
//   // {
//   //   image: hero6,
//   //   title: "Artistic Expression",
//   //   subtitle: "Vibrant and unique scents that stand out",
//   //   cta: "Shop Collection",
//   //   link: "/shop"
//   // }
// ];

// export const HeroCarousel = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   const next = () => setCurrent((prev) => (prev + 1) % slides.length);
//   const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <div className="relative h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden bg-muted">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >
//           <div className="relative w-full h-full">
//             <Image
//               src={slides[current].image}
//               alt={slides[current].title}
//               fill
//               className="object-cover object-center"
//               sizes="100vw"
//               priority
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
//           </div>

//           <div className="absolute inset-0 flex items-center">
//             <div className="container mx-auto px-4">
//               <motion.div
//                 initial={{ x: -50, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.2, duration: 0.8 }}
//                 className="max-w-2xl text-white"
//               >
//                 <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
//                   {slides[current].title}
//                 </h1>
//                 <p className="text-lg md:text-xl mb-8 text-white/90">
//                   {slides[current].subtitle}
//                 </p>
//                 <Link href={slides[current].link}>
//                   <Button
//                     size="lg"
//                     className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-gold text-lg px-8"
//                   >
//                     {slides[current].cta}
//                   </Button>
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation Buttons */}
//       <Button
//         variant="ghost"
//         size="icon"
//         onClick={prev}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white backdrop-blur"
//       >
//         <ChevronLeft className="h-6 w-6" />
//       </Button>
//       <Button
//         variant="ghost"
//         size="icon"
//         onClick={next}
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white backdrop-blur"
//       >
//         <ChevronRight className="h-6 w-6" />
//       </Button>

//       {/* Indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
//         {slides.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrent(idx)}
//             className={`w-2 h-2 rounded-full transition-all ${
//               idx === current ? "bg-gold w-8" : "bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";



const slides = [
  {
    image: "/images/Banner-1.png",
    title: "Discover Scents That Captivate",
    subtitle: "Luxury fragrances curated for the modern connoisseur",
    cta: "Explore Collection",
    link: "/shop"
  },
  {
    image: "/images/Banner-2.png",
    title: "Signature Elegance",
    subtitle: "Find your perfect scent from our exclusive collection",
    cta: "Shop Now",
    link: "/shop"
  },
  {
    image: "/images/Banner-3.png",
    title: "Timeless Beauty",
    subtitle: "Elegant fragrances with rose and gold accents",
    cta: "View Collection",
    link: "/shop"
  },
  {
    image: "/images/Banner-4.png",
    title: "Modern Sophistication",
    subtitle: "Bold and contemporary scents for the confident individual",
    cta: "Discover Now",
    link: "/shop"
  },
  // {
  //   image: hero5,
  //   title: "Natural Essence",
  //   subtitle: "Fresh botanical fragrances inspired by nature",
  //   cta: "Explore Nature",
  //   link: "/shop"
  // },
  // {
  //   image: hero6,
  //   title: "Artistic Expression",
  //   subtitle: "Vibrant and unique scents that stand out",
  //   cta: "Shop Collection",
  //   link: "/shop"
  // }
];

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none" />
          </div>

          <div className="absolute inset-0 flex items-center pointer-events-none">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="max-w-2xl text-white drop-shadow-2xl"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 text-shadow-lg">
                  {slides[current].title}
                </h1>
                <p className="text-lg md:text-xl mb-8 text-white/95 drop-shadow-lg">
                  {slides[current].subtitle}
                </p>
                <Link href={slides[current].link} className="pointer-events-auto inline-block">
                  <Button
                    size="lg"
                    className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-2xl shadow-gold/50 text-lg px-8 hover:scale-105 transition-transform duration-300"
                  >
                    {slides[current].cta}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30 shadow-lg z-10"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30 shadow-lg z-10"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === current ? "bg-gold w-8 shadow-lg shadow-gold/50" : "bg-white/60 w-2 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};