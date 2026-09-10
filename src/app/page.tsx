import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import ProjectsSection from "@/components/ProjectsSection";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Approach />
        <ProjectsSection />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
