import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/contexts/CartContext";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "DE-HAC - Luxury Fragrances",
  description: "Curated luxury fragrances from global artisans. Experience the art of perfumery with our handpicked collection.",
  keywords: ["perfume", "fragrance", "luxury", "scent", "cologne", "eau de parfum"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <CartProvider>
              <div className="flex flex-col min-h-screen">
                <TopBanner />
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
              <Toaster />
              <Sonner />
            </CartProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
