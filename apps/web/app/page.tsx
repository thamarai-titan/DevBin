import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import ToolsSection from "@/components/SearchFilter";

export default function Home() {
  return (
    <main className="w-full">

      <Navbar />
      <HeroSection />
      <ToolsSection/>

    </main>
  );
}
