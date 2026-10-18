import AgentGate from "@/components/AgentGate";
import Contact from "@/components/Contact";
import Credentials from "@/components/Credentials";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Products from "@/components/Products";
import Shell from "@/components/Shell";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";

export default function Page() {
  return (
    <Shell>
      <Hero />
      <Marquee />
      <Stats />
      <Experience />
      <Products />
      <AgentGate />
      <Skills />
      <Credentials />
      <Contact />
    </Shell>
  );
}
