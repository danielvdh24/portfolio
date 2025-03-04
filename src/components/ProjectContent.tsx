import { useEffect, useState, useLayoutEffect } from "react";
import ReactPlayer from "react-player";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { createPortal } from "react-dom";
import getTechIcon from "@/utils/techIcons";

interface ProjectContentProps {
  project: Project;
}

const ProjectContent = ({ project }: ProjectContentProps) => {
  const [loaded, setLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 250);

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [project.id]);

  return (
    <div
      className={cn(
        "project-content w-full",
        "animate-scale opacity-0",
        "overflow-hidden transition-all duration-700",
        "relative -mt-3 z-20 rounded-t-lg shadow-lg"
      )}
      style={{
        minHeight: "650px",
        backgroundColor: project.color || "rgba(65, 105, 225, 0.7)",
        opacity: loaded ? 0.95 : 0,
        transform: loaded ? "scale(1)" : "scale(0.97)",
        marginTop: "-1px",
        position: "relative",
        zIndex: 5,
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">{project.name}</h2>
          <p className="text-portfolio-white/80">{project.description}</p>

          {/* Demo Section */}
          {project.demo && (
            <div className="space-y-2">
              <div className="bg-black/80 rounded-lg aspect-video overflow-hidden">
                <ReactPlayer
                  url={project.demo}
                  playing
                  loop
                  muted
                  playsinline
                  width="100%"
                  height="100%"
                  className="rounded-lg"
                />
              </div>
            </div>
          )}

          {/* Features Section */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Features</h3>
              <ul className="list-disc list-outside pl-6 text-portfolio-white/80">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Section */}
          {project.technology && project.technology.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technology.map((tech, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-2 text-portfolio-white/90 bg-portfolio-purple/10 py-1 px-3 rounded-full text-sm"
                  >
                    {getTechIcon(tech)}
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-8">
          {/* Authors Section */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Authors</h3>
            <div className="flex flex-wrap gap-2">
              {project.authors.map((author, index) => (
                <a
                  key={index}
                  href={author.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-white/90 bg-portfolio-purple/10 py-1 px-3 rounded-full text-sm no-underline hover:opacity-80 transition-opacity"
                  style={{ textDecoration: "none" }}
                >
                  {author.name}
                </a>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          {project.comments && (
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Comments</h3>
              <p className="text-portfolio-white/80 leading-relaxed">
                {project.comments}
              </p>
            </div>
          )}

          {/* Images Section */}
          {project.images.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Images</h3>
              <div
                className="flex gap-4 overflow-x-auto scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.name} - Image ${index + 1}`}
                    className="w-[200px] h-[150px] object-cover rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out 
                     hover:brightness-90"
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Image Overlay */}
          {selectedImage &&
            createPortal(
              <div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[9999]"
                onClick={() => setSelectedImage(null)
                }
              >
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="max-w-[85%] max-h-[85%] rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-110"
                />
              </div>,
              document.body
            )}

          {/* GitHub Link */}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-portfolio-black/20 hover:bg-portfolio-black/30 text-portfolio-white py-2 px-4 rounded-lg transition-colors duration-300"
          >
            <Github size={18} />
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;