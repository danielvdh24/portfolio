import { Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("py-6 w-full", className)}>
      <div className="portfolio-container flex justify-between items-center">
        <div className="animate-fade-in [animation-delay:200ms] opacity-0">
          <h1 className="text-7xl md:text-8xl font-bold text-portfolio-black">PROJECTS</h1>
          <p className="text-xl md:text-2xl font-semibold text-portfolio-black pl-1.5">Daniel Van Den Heuvel</p>
        </div>
        
        <div className="flex space-x-4 animate-fade-in [animation-delay:400ms] opacity-0">
          <a 
            href="https://linkedin.com/in/danielvdh24" 
            target="_blank" 
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} className="text-portfolio-white hover:scale-110 transition-transform duration-300" />
          </a>

          <a 
            href="https://github.com/danielvdh24/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="GitHub"
          >
            <Github size={24} className="text-portfolio-white hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;