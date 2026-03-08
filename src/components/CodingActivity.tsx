import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";

const CodingActivity = () => {
  return (
    <section id="coding" className="py-24 bg-space-surface/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            Coding <span className="text-gradient">Activity</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-10" />

          <div className="grid md:grid-cols-2 gap-6">
            {/* GitHub Card */}
            <motion.a
              href="https://github.com/askarthemasss"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group p-6 rounded-2xl bg-card border border-border card-hover block"
            >
              <div className="flex items-center gap-3 mb-4">
                <Github size={28} className="text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">GitHub</h3>
                  <p className="text-xs text-muted-foreground">@askarthemasss</p>
                </div>
                <ExternalLink size={16} className="ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">
                Open source contributions, personal projects, and code experiments. 
                Actively building and sharing frontend solutions.
              </p>
              <div className="flex gap-4 mt-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs text-muted-foreground">TypeScript</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-xs text-muted-foreground">Angular</span>
                </div>
              </div>
            </motion.a>

            {/* LeetCode Card */}
            <motion.a
              href="https://leetcode.com/u/askarthemasss/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group p-6 rounded-2xl bg-card border border-border card-hover block"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code size={28} className="text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">LeetCode</h3>
                  <p className="text-xs text-muted-foreground">@askarthemasss</p>
                </div>
                <ExternalLink size={16} className="ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">
                Sharpening problem-solving skills through algorithmic challenges 
                and data structure exercises.
              </p>
              <div className="flex gap-4 mt-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs text-muted-foreground">Algorithms</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-xs text-muted-foreground">Data Structures</span>
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingActivity;
