import { User, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className={cn("py-4 mt-auto animate-fade-in [animation-delay:200ms] opacity-0", className)}>
      <div className={`portfolio-container flex ${isMobile ? "flex-col space-y-4 items-center" : "flex-row space-x-4"} transition-all duration-500`}>
        <div className="flex items-center space-x-3 bg-portfolio-blue/10 py-2 px-4 rounded-full backdrop-blur-sm transition-all duration-500">
          <User size={20} className="text-portfolio-white" />
          <a className="text-portfolio-white text-sm sm:text-base transition-all duration-300">
            vandenheuveldaniel2004@gmail.com
          </a>
        </div>
        <div className={`flex items-center space-x-3 bg-portfolio-blue/10 py-2 px-4 rounded-full backdrop-blur-sm transition-all duration-500 ${isMobile ? "translate-y-2 opacity-90" : "translate-y-0 opacity-100"}`}>
          <Phone size={20} className="text-portfolio-white" />
          <span className="text-portfolio-white text-sm sm:text-base">0735970769</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;