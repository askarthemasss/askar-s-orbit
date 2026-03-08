import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            My <span className="text-gradient">Resume</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-10" />

          <div className="rounded-2xl bg-card border border-border p-8 text-center">
            <FileText size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Mohamed Askar – Resume
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
              Senior Frontend Developer with 4+ years of experience in Angular, TypeScript, 
              and modern frontend architecture. Download to view full details.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <FileText size={16} /> Preview Resume
              </a>
              <a
                href="/resume.pdf"
                download="Mohamed_Askar_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
              >
                <Download size={16} /> Download PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
