import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, Calendar, ExternalLink, Building2 } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  skills: string[];
  description?: string;
}

const certificates: Certificate[] = [
  {
    id: "1",
    title: "C# Unity Game Developer 2D",
    issuer: "GameDev.tv",
    date: "Aug 2024",
    credentialId: "UC-9cb18822-f0b7-49c3-9c18-d1b187299cea",
    verificationUrl:
      "https://www.udemy.com/certificate/UC-9cb18822-f0b7-49c3-9c18-d1b187299cea/",
    skills: ["programming", "game dev", "C#"],
    description: "Validation of ability in designing and creating 2D games",
  },
  {
    id: "2",
    title: "UI UX with Adobe XD and Figma",
    issuer: "Udemy",
    date: "Jul 2025",
    credentialId: "UC-d70a4569-ea7c-4d39-adde-000242e30b94",
    verificationUrl:
      "https://www.udemy.com/certificate/UC-d70a4569-ea7c-4d39-adde-000242e30b94/",
    skills: ["design", "figma", "adobe xd"],
    description:
      "Validation of application design skills using figma and adobe xd",
  },
  {
    id: "3",
    title: "Google Play Store Listing Certificate",
    issuer: "Google Play Academy",
    date: "Nov 2024",
    credentialId:
      "d6116848-d9d3-435e-9f18-9650eca85bc6UC-d70a4569-ea7c-4d39-adde-000242e30b94",
    verificationUrl:
      "https://www.credential.net/d6116848-d9d3-435e-9f18-9650eca85bc6",
    skills: ["google play", "mobile dev"],
    description:
      "Validate capabilities for apps that are suitable for the Google Play Store",
  },
  {
    id: "5",
    title:
      "Learn MERN stack by building real-world applications with Node, Express, MongoDB, React and integrating RESTful APIs",
    issuer: "Udemy",
    date: "Jul 2025",
    credentialId: "UC-d27652ff-78f1-4955-8167-e48f8ba01315",
    verificationUrl:
      "https://www.udemy.com/certificate/UC-d27652ff-78f1-4955-8167-e48f8ba01315",
    skills: ["react", "mongodb", "express"],
    description: "Validate the ability to create backend and frontend",
  },
];

export default function CertificateSection() {
  return (
    <section className="max-w-7xl mx-auto dark">
      <div className="py-3">
        <p className="text-lg text-muted-foreground max-w-2xl">
          A collection of professional certificates that demonstrate a
          commitment to continuous learning and expertise across a variety of
          modern technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <Card
            key={cert.id}
            className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold leading-tight mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Building2 className="h-4 w-4" />
                    <span className="font-medium">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    className="p-2 rounded-full hover:bg-muted transition-colors"
                    title="Verifikasi Sertifikat"
                  >
                    <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary" />
                  </a>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {cert.description && (
                <CardDescription className="text-sm leading-relaxed">
                  {cert.description}
                </CardDescription>
              )}

              {cert.credentialId && (
                <div className="text-xs text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded">
                  ID: {cert.credentialId}
                </div>
              )}

              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
