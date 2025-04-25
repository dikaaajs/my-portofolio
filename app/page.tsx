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
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* background */}
      <div className="absolute w-full z-10 flex justify-center">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={1}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="p-6 z-50">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
          {/* Left Sidebar */}
          <div className="space-y-8 mt-8">
            {/* Profile Header */}
            <div className="flex items-center gap-4">
              <Image
                src="/me.jpg"
                alt="Profile"
                width={60}
                height={60}
                className="rounded-xl"
              />
              <div>
                <h1 className="text-2xl font-bold">Dikaaa</h1>
                <p className="text-gray-400 font-medium">Web Developer</p>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I am a Front-End Developer with expertise in UI development, API
                consumption, and various aspects of web and mobile application
                development. I have extensive experience working with frameworks
                like Next.js, Vue, and Flutter to build responsive and
                high-performance applications. Additionally, I have a
                understanding and experience in API development. I am always
                eager to learn the latest technologies and apply them to
                projects to achieve optimal results
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="font-medium underline decoration-blue-500">
                my sosial media
              </h3>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://www.linkedin.com/in/andika-rafli-7311a4248/">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://github.com/dikaaajs">
                    <GithubIcon className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Menu Button - Only show on mobile */}
            <div className="flex justify-end lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </div>

            {/* Projects Section */}
            <section>
              {/* header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-satoshi font-bold underline decoration-blue-500">
                  projects
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsAllProjectsOpen(true)}
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
                  tech stack
                </h2>
              </div>

              <TechStackTree />
              {/* <div className="flex gap-4">
              <img
                src="/tech-stack/nextjs.svg"
                className="h-10 w-10 bg-white/30 p-2 rounded-md"
              />
              <img
                src="/tech-stack/tailwind.svg"
                className="h-10 w-10 bg-white/30 p-2 rounded-md"
              />
              <img
                src="/tech-stack/mongodb.svg"
                className="h-10 w-10 bg-white/30 p-2 rounded-md"
              />
              <img
                src="/tech-stack/laravel.png"
                className="h-10 w-10 bg-white/30 p-2 rounded-md"
              />
            </div> */}
            </section>
          </div>
        </div>

        {/* Project Details Modal with Image Carousel */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="bg-neutral-900 text-white border-neutral-800 max-w-4xl h-[90vh]">
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
          <DialogContent className="bg-neutral-900 text-white border-neutral-800 max-w-5xl w-[80%] h-[90vh] overflow-y-auto">
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
