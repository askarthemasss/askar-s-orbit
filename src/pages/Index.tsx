import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Credibility from "@/components/Credibility";
import CodingActivity from "@/components/CodingActivity";
import Resume from "@/components/Resume";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Credibility />
      <CodingActivity />
      <Resume />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default Index;
