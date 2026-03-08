import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon: typeof Briefcase;
  highlights?: string[];
}

const timeline: TimelineItem[] = [
  {
    date: "2016 – 2020",
    title: "Bachelor of Engineering – Mechatronics",
    description: "Coimbatore Institute of Engineering and Technology",
    icon: GraduationCap,
  },
  {
    date: "Sep 2021",
    title: "Software Development Intern",
    description: "Began professional software development journey with a focus on frontend technologies.",
    icon: Briefcase,
    highlights: ["Foundations in web development", "Frontend frameworks exposure"],
  },
  {
    date: "Jan 2022",
    title: "Full-Time Software Developer",
    description: "Transitioned to a full-time engineering role focused on building scalable Angular applications.",
    icon: Briefcase,
    highlights: [
      "Built scalable Angular applications",
      "Modernized legacy frontend systems",
      "Improved code maintainability and quality",
    ],
  },
  {
    date: "Present",
    title: "Senior Frontend Developer",
    description: "Leading frontend architecture decisions and driving engineering best practices across the team.",
    icon: Briefcase,
    highlights: [
      "Frontend architecture leadership",
      "Performance optimization at scale",
      "Engineering best practices advocacy",
      "Mentoring junior developers",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            Experience <span className="text-gradient">Timeline</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-10" />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row items-start gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10" />

                  <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="text-xs font-mono text-primary tracking-wider">{item.date}</span>
                    <h3 className="text-lg font-semibold mt-1 text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    {item.highlights && (
                      <ul className={`mt-3 space-y-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                        {item.highlights.map((h) => (
                          <li key={h} className="text-xs text-muted-foreground">
                            <span className="text-primary">▸</span> {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
