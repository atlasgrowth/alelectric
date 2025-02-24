import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { About } from "@/components/sections/about";
import { ServicesOverview } from "@/components/sections/services";
import { Reviews } from "@/components/sections/reviews";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ServicesOverview />
      <Reviews />
    </div>
  );
}
