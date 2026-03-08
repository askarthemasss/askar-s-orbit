import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, FileText } from "lucide-react";

const roles = [
  "Senior Frontend Developer",
  "Angular 20 Specialist",
  "TypeScript Engineer",
  "Frontend Architect",
  "UI Performance Enthusiast",
];

const StarField = () => {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-primary animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            opacity: 0.4,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = roles[roleIndex];

  const tick = useCallback(() => {
    if (!isDeleting) {
      if (text.length < currentRole.length) {
        setText(currentRole.slice(0, text.length + 1));
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        setText(currentRole.slice(0, text.length - 1));
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, [text, isDeleting, currentRole, roleIndex]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <StarField />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">
            &lt;hello world /&gt;
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Mohamed{" "}
            <span className="text-gradient">Askar</span>
          </h1>

          <div className="h-8 mb-6">
            <span className="text-xl sm:text-2xl text-muted-foreground font-light">
              {text}
              <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
            </span>
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
            Senior Frontend Developer specializing in scalable Angular applications 
            and modern frontend architecture. Passionate about building high-quality 
            web experiences with clean, performant code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              View Projects <ExternalLink size={16} />
            </a>
            <a
              href="#resume"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
            >
              View Resume <FileText size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={20} className="animate-float" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
