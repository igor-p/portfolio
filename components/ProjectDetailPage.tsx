import Link from "next/link"
import { notFound } from "next/navigation"
import React from "react"

import ProjectLink from "@/components/ProjectLink"
import { Badge } from "@/components/ui/badge"
import { PROJECTS } from "@/content/projects"

export interface ProjectDetailPageProps {
  projectId: string
}

export default function ProjectDetailPage({
  projectId,
}: ProjectDetailPageProps) {
  const project = PROJECTS.find(({ id }) => id === projectId)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/#projects"
        className="text-sm text-muted-foreground hover:underline mb-4 inline-block"
      >
        ← Back to all projects
      </Link>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          {project.link && <ProjectLink link={project.link} />}
        </div>
      </div>
    </div>
  )
}
