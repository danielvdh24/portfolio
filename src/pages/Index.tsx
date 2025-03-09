
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectTabs from "@/components/ProjectTabs";
import ProjectContent from "@/components/ProjectContent";
import { projectsData } from "@/data/projects";

const Index = () => {
  const [activeProjectId, setActiveProjectId] = useState(projectsData[0].id);
  
  const activeProject = projectsData.find(
    (project) => project.id === activeProjectId
  ) || projectsData[0];

  useEffect(() => {
    document.documentElement.style.setProperty("--page-background", activeProject.pageColor || "rgb(112, 81, 55)");
  }, [activeProject]);

  return (
    <div 
      className="min-h-screen flex flex-col transition-colors duration-1000"
      style={{ backgroundColor: activeProject.pageColor }}
    >
      <Header />
      <main className="flex-1 portfolio-container py-6">
        <div className="w-full mx-auto">
          <ProjectTabs 
            projects={projectsData}
            activeProjectId={activeProjectId}
            onTabChange={setActiveProjectId}
          />
          <ProjectContent project={activeProject} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
