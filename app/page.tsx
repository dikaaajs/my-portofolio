"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  Twitter,
  Linkedin,
  Youtube,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Github,
  GithubIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import TechStackTree from "@/components/parts/tech-stack";
import Aurora from "@/public/background/Aurora/Aurora";
import CertificateSection from "@/components/parts/certificate-section";
import GetInTouchSection from "@/components/parts/get-in-section";
import Hp3d from "@/components/parts/hp-3d";
import { useRef } from "react";

// Projects data structure
const projects = [
  {
    images: ["/absensi-1.png", "/absensi-2.jpg", "/absensi-3.png"],
    title: "attendance website",
    desc: "The Attendance Website is a web-based system for managing participants, events, and attendance efficiently. It features CRUD operations for participants, events, and attendance tracking, allowing users to add, edit, delete, and view records easily. The system also includes authentication, ensuring secure access for authorized users. With a responsive and user-friendly design, it simplifies attendance management for organizations and events. 🚀",
    redirect: "https://example.com/project1",
  },
  {
    images: ["/tanya-1.png", "/tanya-2.png", "/tanya-3.png"],
    title: "Tanya",
    desc: "Develop and build web and Android based applications using Next.js and Flutter. I focus on creating modern, user-friendly applications.",
    redirect: null,
  },
  {
    images: ["/qroom-1.png", "/qroom-2.png", "/qroom-3.png", "/qroom-4.png"],
    title: "Qroom",
    desc: "website that I made to take part in the Boosts Hack 2 hackathons. For more details, you can visit the link https://devpost.com/software/qroom-quiz-made-easy",
    redirect: "https://example.com/project3",
  },
  {
    images: ["/pemira-1.png", "/pemira-2.png"],
    title: "Pemira",
    desc: "create a school website for the election of student council presidents",
    redirect: "https://example.com/project3",
  },
  {
    images: ["/valoin.png"],
    title: "Valoin",
    desc: "I created a Valorant community website to share in-game tricks",
    redirect: "https://example.com/project3",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[0]
  >(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);
  const [showHp3d, setShowHp3d] = useState(false);

  // ref
  const getInTouchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!getInTouchRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowHp3d(true); // Munculkan jika terlihat
        } else {
          setShowHp3d(false); // Sembunyikan jika keluar
        }
      },
      {
        root: null, // viewport
        threshold: 0.3, // 30% bagian terlihat
      }
    );

    observer.observe(getInTouchRef.current);

    return () => {
      if (getInTouchRef.current) {
        observer.unobserve(getInTouchRef.current);
      }
    };
  }, []);

  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsOpen(true);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + selectedProject.images.length) %
        selectedProject.images.length
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Reset image index when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setCurrentImageIndex(0);
      setIsAutoplay(true);
    }
  }, [isOpen]);

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoplay && selectedProject && selectedProject.images.length > 1) {
      interval = setInterval(() => {
        nextImage();
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoplay, selectedProject, currentImageIndex]);

  return (
    <div className="min-h-screen bg-black text-white font-satoshi w-full relative">
      {/* background */}
      <div className="absolute !w-[100%] z-10 flex justify-center right-0 left-0">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={1}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="p-6 !z-50">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 relative">
          {/* Left Sidebar */}
          <div className="space-y-8 mt-8 lg:sticky lg:top-8 lg:self-start h-[50hv]">
            {/* Profile Header */}
            <div className="flex items-center gap-4">
              <div className="w-fit h-fit relative z-30">
                <Image
                  src="/me.jpg"
                  alt="Profile"
                  width={60}
                  height={60}
                  className="rounded-xl z-30"
                />
                <div className="absolute -bottom-2 right-1 z-30">👨‍💻</div>
              </div>
              <div className="z-30">
                <h1 className="text-2xl font-bold z-30">Dikaaa</h1>
                <p className="text-gray-400 font-medium z-30">Web Developer</p>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a Front-End Developer who loves building clean and
                responsive UIs using Next.js, Vue, and Flutter. I also work on
                the backend using Express and MongoDB to create full-stack apps.
                Always curious and excited to try out new tech and make cool
                stuff!
              </p>
            </div>

            <div
              className={`hidden lg:block transition-all duration-1000 ease-out ${
                showHp3d
                  ? "opacity-100 translate-x-0 rotate-y-0"
                  : "opacity-0 -translate-x-10 -rotate-y-45"
              }`}
              style={{
                transformStyle: "preserve-3d",
                transitionProperty: "opacity, transform",
              }}
            >
              <Hp3d />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-20">
            {/* Menu Button - Only show on mobile */}
            <div className="flex justify-end lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </div>

            {/* Projects Section */}
            <section>
              {/* header */}
              <div className="flex justify-between items-center mb-4 z-30">
                <h2 className="text-2xl font-satoshi font-bold underline decoration-blue-500 z-30">
                  Projects
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsAllProjectsOpen(true)}
                  className="z-30"
                >
                  <span className="sr-only">View all projects</span>→
                </Button>
              </div>

              {/* body */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projects.slice(0, 3).map((project, index) => (
                  <div
                    key={index}
                    className="relative aspect-square bg-neutral-900 rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => handleProjectClick(project)}
                  >
                    <Image
                      src={project.images[0] || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <h3 className="text-white font-bold text-lg">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Stack Section */}
            <section>
              {/* header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-satoshi font-bold underline decoration-blue-500">
                  Tech Stack
                </h2>
              </div>

              <TechStackTree />
            </section>

            {/* certificate section */}
            <section>
              {/* header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-satoshi font-bold underline decoration-blue-500">
                  Certificate & Credentials
                </h2>
              </div>

              {/* body */}
              <CertificateSection />
            </section>

            {/* get in touch section */}
            <section ref={getInTouchRef}>
              {/* header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-satoshi font-bold underline decoration-blue-500">
                  Get In Touch
                </h2>
              </div>

              {/* body */}
              <GetInTouchSection />
            </section>
          </div>
        </div>

        {/* Project Details Modal with Image Carousel */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="bg-neutral-900 text-white border-neutral-800 max-w-4xl h-[90vh] font-satoshi">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-mono">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-neutral-400">
                    {selectedProject.desc}
                  </DialogDescription>
                </DialogHeader>

                {/* Image Carousel */}
                <div className="relative my-6">
                  {/* Main Image */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    {selectedProject.images.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          index === currentImageIndex
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${selectedProject.title} image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows - Only show if there are multiple images */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </Button>
                    </>
                  )}

                  {/* Image Indicators */}
                  {selectedProject.images.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex
                              ? "bg-white scale-125"
                              : "bg-neutral-500"
                          }`}
                          onClick={() => goToImage(index)}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Autoplay Toggle */}
                  {/* {selectedProject.images.length > 1 && (
                  <div className="flex justify-center mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsAutoplay(!isAutoplay)}
                      className="text-xs"
                    >
                      {isAutoplay ? "Pause Slideshow" : "Start Slideshow"}
                    </Button>
                  </div>
                )} */}
                </div>

                {/* Image Counter */}
                {selectedProject.images.length > 1 && (
                  <div className="text-center text-sm text-neutral-400 mb-4">
                    Image {currentImageIndex + 1} of{" "}
                    {selectedProject.images.length}
                  </div>
                )}

                {selectedProject.redirect && (
                  <div className="flex justify-end">
                    <Button asChild>
                      <Link
                        href={selectedProject.redirect}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Visit Project <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* All Projects Modal */}
        <Dialog open={isAllProjectsOpen} onOpenChange={setIsAllProjectsOpen}>
          <DialogContent className="bg-neutral-900 text-white border-neutral-800 max-w-5xl w-[80%] h-[90vh] overflow-y-auto font-satoshi">
            <DialogHeader>
              <DialogTitle className="text-2xl">All Projects</DialogTitle>
              <DialogDescription className="text-neutral-400 font-medium">
                Browse through all my design and development work
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative aspect-square bg-neutral-800 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => {
                    setIsAllProjectsOpen(false);
                    handleProjectClick(project);
                  }}
                >
                  <Image
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end">
                    <h3 className="text-white font-bold text-lg">
                      {project.title}
                    </h3>
                    <p className="text-neutral-300 text-sm line-clamp-2 mt-1">
                      {project.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
