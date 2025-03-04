import { User, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("py-4 mt-auto", className)}>
      <div className="portfolio-container flex items-center justify-start space-x-4">
        <div className="flex items-center space-x-3 bg-portfolio-blue/10 py-2 px-4 rounded-full backdrop-blur-sm">
          <User size={20} className="text-portfolio-white" />
          <a className="text-portfolio-white text-sm sm:text-base transition-all duration-300">
            vandenheuveldaniel2004@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-3 bg-portfolio-blue/10 py-2 px-4 rounded-full backdrop-blur-sm">
          <Phone size={20} className="text-portfolio-white" />
          <span className="text-portfolio-white text-sm sm:text-base">0735970769</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;