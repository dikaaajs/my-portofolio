"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Clock,
  CheckCircle,
  MessageSquare,
} from "lucide-react";

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  username: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "zoneandika@gmail.com",
    href: "mailto:zoneandika@gmail.com",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "WhatsApp",
    value: "+62 856-2474-5579",
    href: "https://wa.me/6285624745579",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "Bandung, Indonesia",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: "Availability",
    value: "Open for opportunities",
  },
];

const socialLinks: SocialLink[] = [
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    href: "https://github.com/dikaaajs",
    username: "@dikaaajs",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andika-rafli-7311a4248/",
    username: "/in/andika-rafli-7311a4248",
  },
  {
    icon: <Instagram className="h-5 w-5" />,
    label: "Instagram",
    href: "https://instagram.com/dikaaa.js",
    username: "@dikaaa.js",
  },
];

export default function GetInTouchSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailto = `mailto:zoneandika@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section className="py-3 max-w-7xl dark">
      <div className="pb-5">
        <p className="text-lg text-muted-foreground max-w-2xl ">
          Let's collaborate! I'm always open to discussing interesting projects,
          job opportunities, or just sharing ideas about technology.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-muted-foreground">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                        target={
                          info.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">
                        {info.value}
                      </p>
                    )}
                  </div>
                  {info.label === "Availability" && (
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                    >
                      Available
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">
                    {social.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{social.label}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {social.username}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="h-5 w-5" />
              Send Message
            </CardTitle>
            <CardDescription>
              Fill out the form below and I will respond within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for your message. I will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Discussion / Job Opportunity / Collaboration"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about the project or idea you want to discuss..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      {/* <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-violet-800/50 to-violet-300/50 rounded-xl p-5 py-10 border-primary/20 relative">
          <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
          <img
            src="https://i.pinimg.com/736x/87/a7/85/87a7858606890ad6167b706d7ea90e9f.jpg"
            alt="Collaboration"
            className="mx-auto mb-6 rounded-md absolute object-cover -top-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-5 md:-top-5 w-[80px] shadow-2xl shadow-blue-500/20"
          />
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you have an exciting project, a job opportunity, or just
            want to discuss technology, I'm always happy to hear from you. Let's
            create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:zoneandika@gmail.com">
                <Mail className="h-5 w-5 mr-2" />
                Email Directly
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div> */}
    </section>
  );
}
