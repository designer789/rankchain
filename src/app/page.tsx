import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ValueProposition from "@/components/ValueProposition";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <ValueProposition />
      <Tokenomics />
      <Roadmap />
      <FAQ />
    </div>
  );
}
