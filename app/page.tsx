import Hero from "@/components/Hero";
import About from "@/components/About";
import Initiatives from "@/components/Initiatives";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Initiatives />
    </main>
  );
}
