
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
  const activeBackgroundColor = activeProject ? activeProject.color : "rgba(65, 105, 225, 0.7)";

  return (
    <div className="flex space-x-0.25 overflow-x-auto w-full relative z-10 -mb-1" style={{ scrollbarWidth: "none", msOverflowStyle: "none", overflow: "hidden" }}>
      {projects.map((project, index) => {
        const isActive = project.id === activeProjectId;
        const isHovered = project.id === hoveredTab;
        const delay = 300 + index * 100;
        const backgroundColor = project.color || "rgba(65, 105, 225, 0.7)";
        const inactiveBackgroundColor = isActive
          ? backgroundColor
          : backgroundColor.replace("0.7)", "0.2)");
        const hoveredBackgroundColor = project.color.replace("5)", "0.5)"); // Slightly brighter when hovered

        return (
          <div
            key={project.id}
            className={cn(
              "tab",
              isActive ? "tab-active z-10" : "tab-inactive",
              loaded ? "animate-fade-in opacity-0" : "opacity-0",
            )}
            style={{
              backgroundColor: isActive
                ? activeBackgroundColor
                : isHovered
                  ? hoveredBackgroundColor
                  : inactiveBackgroundColor,

              filter: isActive
                ? "none"
                : isHovered
                  ? "brightness(90%)"
                  : "brightness(75%)",
              animationDelay: `${delay}ms`,
              minWidth: isActive ? "auto" : "60px",
              maxWidth: isActive ? "280px" : "60px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              transition: "all 0.5s ease-in-out, background-color 0.5s ease-in-out, transform 0.3s ease-in-out",
              transform: isHovered && !isActive ? "translateY(-3px)" : "translateY(0)",
              // Connect with content - remove bottom radius when active
              borderBottomLeftRadius: isActive ? "0" : "8px",
              borderBottomRightRadius: isActive ? "0" : "8px",
              borderBottom: isActive ? "3px solid" : "none",
              clipPath: isActive
                ? "none"
                : "polygon(0 0, 100% 0, 100% 89%, 0% 89%)",
              // Make active tab taller to connect with content
              height: isActive ? "45px" : "40px",
              marginBottom: isActive ? "-5px" : "0",
              boxShadow: isActive ? `0 -2px 10px rgba(0,0,0,0.1), 0 0 1px ${backgroundColor}` : "none",
            }}
            onClick={() => onTabChange(project.id)}
            onMouseEnter={() => setHoveredTab(project.id)}
            onMouseLeave={() => setHoveredTab(null)}
          >
            {project.name}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectTabs;
