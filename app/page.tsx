import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Capabilities from "@/components/Capabilities";
import Highlights from "@/components/Highlights";
import Process from "@/components/Process";
import Automation from "@/components/Automation";
import Experience from "@/components/Experience";
import GithubSection from "@/components/GithubSection";
import Faq from "@/components/Faq";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav flameHero />
      <main>
        <Hero />
        <About />
        <Work />
        <Capabilities />
        <Highlights />
        <Process />
        <Automation />
        <Experience />
        <GithubSection />
        <Faq />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
