
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectTabs from "@/components/ProjectTabs";
import ProjectContent from "@/components/ProjectContent";
import { projectsData } from "@/data/projects";

const Index = () => {
  const [activeProjectId, setActiveProjectId] = useState(projectsData[0].id);
  const [backgroundColor, setBackgroundColor] = useState(getDarkerColor(projectsData[0].color || "rgba(65, 105, 225, 0.7)"));
  
  const activeProject = projectsData.find(
    (project) => project.id === activeProjectId
  ) || projectsData[0];

  useEffect(() => {
    // Update the background color when the active project changes
    setBackgroundColor(getDarkerColor(activeProject.color || "rgba(65, 105, 225, 0.7)"));
  }, [activeProject]);

  function getDarkerColor(color: string): string {
    if (color.startsWith("rgba")) {
      const matches = color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
      if (matches) {
        const r = Math.max(0, parseInt(matches[1]) - 30);
        const g = Math.max(0, parseInt(matches[2]) - 30);
        const b = Math.max(0, parseInt(matches[3]) - 30);
        return `rgba(${r}, ${g}, ${b}, 0.9)`;
      }
    }
    return color;
  }

  const handleTabChange = (projectId: string) => {
    setActiveProjectId(projectId);
  };

  return (
    <div 
      className="min-h-screen flex flex-col transition-colors duration-1000"
      style={{ backgroundColor }}
    >
      <Header />
      
      <main className="flex-1 portfolio-container py-6">
        <div className="w-full mx-auto">
          <ProjectTabs 
            projects={projectsData}
            activeProjectId={activeProjectId}
            onTabChange={handleTabChange}
          />
          
          <ProjectContent project={activeProject} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
