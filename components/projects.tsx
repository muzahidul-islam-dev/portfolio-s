"use client"

import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
      tags: ["Next.js", "Stripe", "PostgreSQL", "TypeScript"],
      link: "#",
      github: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard with interactive charts, data visualization, and custom reporting features.",
      tags: ["React", "D3.js", "Node.js", "MongoDB"],
      link: "#",
      github: "#",
    },
    {
      title: "Social Media App",
      description:
        "A modern social media application with real-time messaging, notifications, and user authentication.",
      tags: ["React", "Firebase", "Socket.io", "Tailwind"],
      link: "#",
      github: "#",
    },
    {
      title: "Task Management Tool",
      description: "Collaborative task management tool with drag-and-drop, team collaboration, and real-time updates.",
      tags: ["Vue.js", "Express", "WebSocket", "PostgreSQL"],
      link: "#",
      github: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group p-8 bg-background rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tidx) => (
                  <span key={tidx} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  View <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  Code <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
