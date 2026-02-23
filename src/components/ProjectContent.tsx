import { useEffect, useState, useRef } from "react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ExternalLink, Github, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { createPortal } from "react-dom";
import getTechIcon from "@/utils/techIcons";

interface ProjectContentProps {
  project: Project;
}

const ProjectContent = ({ project }: ProjectContentProps) => {
  const [loaded, setLoaded] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isVideoFullscreen, setIsVideoFullscreen] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const [scrollY, setScrollY] = useState(0);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const checkOverflow = () => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      setIsOverflowing(scrollWidth > clientWidth);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!scrollRef.current || e.buttons !== 1) return;
    scrollRef.current.scrollLeft -= e.movementX;
    if (Math.abs(e.pageX - startXRef.current) > 5) {
      isDraggingRef.current = true;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = false;
    startXRef.current = e.pageX;
  };

  const handleImageClick = (index: number) => {
    if (isDraggingRef.current) return;
    setSelectedImageIndex(index);
  };

  useEffect(() => {
    // Reset overflow state immediately when project changes to prevent flashing old state
    setIsOverflowing(false);

    // Check overflow immediately in case elements are already painted
    checkOverflow();

    const timeout = setTimeout(() => {
      setLoaded(true);
      checkOverflow(); // Check again after fade-in completes
    }, 50);

    window.addEventListener('resize', checkOverflow);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', checkOverflow);
    };
  }, [project.id]);

  useEffect(() => {
    if (selectedImageIndex !== null || isVideoFullscreen) {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Lock scroll position
      document.body.style.position = "fixed";
      document.body.style.top = `-${currentScrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Restore scroll position
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImageIndex, isVideoFullscreen]);

  return (
    <div
      className={cn(
        "project-content w-full",
        "animate-scale opacity-0",
        "overflow-hidden transition-all duration-700",
        "relative -mt-3 z-20 rounded-b-lg rounded-tr-lg shadow-lg"
      )}
      style={{
        minHeight: "650px",
        backgroundColor: project.contentColor,
        opacity: loaded ? 0.95 : 0,
        transform: loaded ? "scale(1)" : "scale(0.97)",
        marginTop: "-1px",
        position: "relative",
        zIndex: 5,
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      }
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">{project.name}</h2>
          <p className="text-portfolio-white/80">{project.description}</p>

          {/* Demo Section */}
          {project.demo && (
            <div className="space-y-2 relative group">
              <div className="bg-black/80 rounded-lg aspect-video overflow-hidden relative">
                <video
                  src={project.demo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setIsVideoFullscreen(true)}
                  className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                  aria-label="Fullscreen"
                >
                  <Maximize2 size={20} />
                </button>
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
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Images</h3>
                {isOverflowing && (
                  <div className="flex items-center gap-2 text-neutral-300 text-sm font-medium">
                    <span>DRAG TO EXPLORE</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8L22 12L18 16" />
                      <path d="M6 8L2 12L6 16" />
                      <path d="M2 12H22" />
                    </svg>
                  </div>
                )}
              </div>
              <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
                style={{
                  scrollbarWidth: "none", // Hide scrollbar Firefox
                  msOverflowStyle: "none", // Hide scrollbar IE/Edge
                }}
                onMouseMove={handleMouseMove}
              >
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.name} - Image ${index + 1}`}
                    className="w-[200px] h-[150px] object-cover rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:brightness-90"
                    onMouseDown={handleMouseDown}
                    onClick={() => handleImageClick(index)}
                    onDragStart={(e) => e.preventDefault()}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Image Overlay */}
          {selectedImageIndex !== null &&
            createPortal(
              <div
                className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={() => setSelectedImageIndex(null)}
              >
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(null); }}
                  className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 z-50"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>

                {selectedImageIndex > 0 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(selectedImageIndex - 1); }}
                    className="absolute left-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 z-50"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={32} />
                  </button>
                )}

                <img
                  src={project.images[selectedImageIndex]}
                  alt="Enlarged view"
                  className="max-w-[80%] max-h-[85%] rounded-lg shadow-2xl transition-transform duration-300 ease-in-out scale-110 object-contain"
                  onClick={(e) => e.stopPropagation()}
                />

                {selectedImageIndex < project.images.length - 1 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(selectedImageIndex + 1); }}
                    className="absolute right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 z-50"
                    aria-label="Next image"
                  >
                    <ChevronRight size={32} />
                  </button>
                )}
              </div>,
              document.body
            )}

          {/* Video Fullscreen Lightbox */}
          {isVideoFullscreen && project.demo && createPortal(
            <div
              className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300"
              onClick={() => setIsVideoFullscreen(false)}
            >
              <button
                onClick={(e) => { e.stopPropagation(); setIsVideoFullscreen(false); }}
                className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 z-50"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <div
                className="w-full max-w-6xl p-4 aspect-video flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  src={project.demo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-w-full max-h-full rounded-xl shadow-2xl object-contain"
                />
              </div>
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
    </div >
  );
};

export default ProjectContent;