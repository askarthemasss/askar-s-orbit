import { motion } from "framer-motion";
import { Award, Code2, Layers, TestTube } from "lucide-react";

const metrics = [
  { icon: Award, value: "4+", label: "Years of Experience" },
  { icon: Code2, value: "Angular 20", label: "Primary Framework" },
  { icon: Layers, value: "UI Architecture", label: "Frontend Specialization" },
  { icon: TestTube, value: "Jest", label: "Testing Approach" },
];

const Credibility = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            Engineering <span className="text-gradient">Credibility</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-10" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-6 rounded-2xl bg-card border border-border card-hover text-center"
              >
                <m.icon size={28} className="text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold text-foreground mb-1">{m.value}</p>
                <p className="text-xs text-muted-foreground">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Credibility;
