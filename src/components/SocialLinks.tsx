import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Code } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", url: "https://github.com/askarthemasss" },
  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/mohamed-askar-a-9370a1b2/" },
  { icon: Twitter, label: "X (Twitter)", url: "https://x.com/askarthemass" },
  { icon: Code, label: "LeetCode", url: "https://leetcode.com/u/askarthemasss/" },
];

const SocialLinks = () => {
  return (
    <section id="social" className="py-24 bg-space-surface/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-2">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-10 mx-auto" />

          <div className="flex justify-center gap-6 flex-wrap">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-primary/40 hover:glow-primary w-28"
                aria-label={s.label}
              >
                <s.icon size={32} className="text-muted-foreground transition-colors group-hover:text-primary" />
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinks;
