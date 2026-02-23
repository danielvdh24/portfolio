
import { useState, useEffect } from "react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectTabsProps {
  projects: Project[];
  activeProjectId: string;
  onTabChange: (projectId: string) => void;
}

const ProjectTabs = ({ projects, activeProjectId, onTabChange }: ProjectTabsProps) => {
  const [loaded, setLoaded] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const activeProject = projects.find(project => project.id === activeProjectId);
  const activeBackgroundColor = activeProject ? activeProject.contentColor : "rgba(65, 105, 225, 0.7)";

  return (
    <div className="flex items-end w-full h-[45px] relative z-10" style={{ scrollbarWidth: "none", msOverflowStyle: "none", overflowX: "auto", overflowY: "hidden" }}>
      {projects.map((project, index) => {
        const isActive = project.id === activeProjectId;
        const isHovered = project.id === hoveredTab;
        const delay = 300 + index * 100;
        // To prevent transparent alpha channels overlapping and creating dark spots, 
        // we'll mix the 0.8 / 0.9 alpha manually against white to generate a solid rgb string
        const baseColor = project.contentColor || "rgba(65, 105, 225, 1)";

        let inactiveBackgroundColor, hoveredBackgroundColor, activeColor;

        // Extract RGB values
        const rgbMatch = baseColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (rgbMatch) {
          const r = parseInt(rgbMatch[1]);
          const g = parseInt(rgbMatch[2]);
          const b = parseInt(rgbMatch[3]);

          activeColor = `rgb(${r}, ${g}, ${b})`;
          // Mix 80% color + 20% white for inactive
          inactiveBackgroundColor = `rgb(${Math.round(r * 0.8 + 255 * 0.2)}, ${Math.round(g * 0.8 + 255 * 0.2)}, ${Math.round(b * 0.8 + 255 * 0.2)})`;
          // Mix 90% color + 10% white for hovered
          hoveredBackgroundColor = `rgb(${Math.round(r * 0.9 + 255 * 0.1)}, ${Math.round(g * 0.9 + 255 * 0.1)}, ${Math.round(b * 0.9 + 255 * 0.1)})`;
        } else {
          activeColor = baseColor;
          inactiveBackgroundColor = baseColor.replace("1)", "0.8)");
          hoveredBackgroundColor = baseColor.replace("1)", "0.9)");
        }

        return (
          <div
            key={project.id}
            className={cn(
              "tab flex-shrink-0",
              isActive ? "tab-active z-10" : "tab-inactive",
              loaded ? "animate-fade-in opacity-0" : "opacity-0",
            )}
            style={{
              backgroundColor: isActive
                ? activeColor
                : isHovered
                  ? hoveredBackgroundColor
                  : inactiveBackgroundColor,

              filter: "none",
              animationDelay: `${delay}ms`,
              minWidth: "80px",
              maxWidth: isActive ? "280px" : "80px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              transition: "all 0.5s ease-in-out, background-color 0.5s ease-in-out, transform 0.3s ease-in-out",
              transform: isHovered && !isActive ? "translateY(-3px)" : "translateY(0)",
              // Remove bottom radius when active
              borderBottomLeftRadius: "0",
              borderBottomRightRadius: "0",
              clipPath: "none",
              // Make active tab taller to connect with content
              height: isActive ? "45px" : "40px",
              marginBottom: "0",
              paddingBottom: isActive ? "5px" : "0", // extend active tab down to cover any gap
              boxShadow: isActive ? "none" : "none",
              zIndex: isActive ? 20 : 1,
            }}
            onClick={() => onTabChange(project.id)}
            onMouseEnter={() => setHoveredTab(project.id)}
            onMouseLeave={() => setHoveredTab(null)}
          >
            <div
              style={{
                width: "100%",
                maskImage: isActive ? "none" : "linear-gradient(to right, black 65%, transparent 100%)",
                WebkitMaskImage: isActive ? "none" : "linear-gradient(to right, black 65%, transparent 100%)",
              }}
            >
              {project.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectTabs;
