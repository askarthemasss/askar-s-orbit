import { Helmet } from "react-helmet-async";
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
    <>
      <Helmet>
        <title>Mohamed Askar – Senior Frontend Developer | Angular & TypeScript Expert</title>
        <meta name="description" content="Portfolio of Mohamed Askar, a Senior Frontend Developer with 4+ years of experience building scalable Angular applications, TypeScript systems, and modern frontend architecture." />
        <link rel="canonical" href="https://mohamedaskr.dev/" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Credibility />
          <CodingActivity />
          <Resume />
          <SocialLinks />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
