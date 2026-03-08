import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Code, MapPin, Eye } from "lucide-react";

const socials = [
  { icon: Github, url: "https://github.com/askarthemasss", label: "GitHub" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/mohamed-askar-a-9370a1b2/", label: "LinkedIn" },
  { icon: Twitter, url: "https://x.com/askarthemass", label: "X" },
  { icon: Code, url: "https://leetcode.com/u/askarthemasss/", label: "LeetCode" },
];

const Footer = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const key = "portfolio_visits";
    const current = parseInt(localStorage.getItem(key) || "0", 10) + 1;
    localStorage.setItem(key, current.toString());
    setVisits(current);
  }, []);

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col items-center text-center gap-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Mohamed Askar</h3>
            <p className="text-sm text-muted-foreground">Senior Frontend Developer</p>
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1 mt-1">
              <MapPin size={12} /> Chennai, India
            </p>
          </div>

          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
                aria-label={s.label}
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Eye size={14} />
            <span>{visits.toLocaleString()} visits</span>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mohamed Askar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
