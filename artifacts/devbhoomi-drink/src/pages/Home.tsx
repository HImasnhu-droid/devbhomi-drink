import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Comparison } from "@/components/Comparison";
import { Pride } from "@/components/Pride";
import { Outlet } from "@/components/Outlet";
import { Offers } from "@/components/Offers";
import { Founder } from "@/components/Founder";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <Products />
      <Offers />
      <Comparison />
      <Outlet />
      <Pride />
      <Founder />
      <Footer />
    </div>
  );
}
