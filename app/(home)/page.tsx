import Navigation from "@/app/(home)/_components/Navigation";
import Hero from "@/app/(home)/_components/Hero";
import About from "@/app/(home)/_components/About";
import Skills from "@/app/(home)/_components/Skills";
import Projects from "@/app/(home)/_components/Projects";
import Career from "@/app/(home)/_components/Career";
import Contact from "@/app/(home)/_components/Contact";
import Footer from "@/app/(home)/_components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Career />
      <Contact />
      <Footer />
    </main>
  );
}

