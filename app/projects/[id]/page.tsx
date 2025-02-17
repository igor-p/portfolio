import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import React from "react"

import ProjectLink from "@/components/ProjectLink"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { PROJECTS } from "@/content/projects"
import { cn } from "@/lib/utils"

export interface ProjectPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const projectId = (await params).id
  const project = PROJECTS.find(({ id }) => id === projectId)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/#projects"
        className="text-sm text-muted-foreground hover:underline"
      >
        ← Back to all projects
      </Link>
      <section className="my-4 flex flex-col items-start gap-4">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <div className={textContentStyles}>{project.fullTextContent}</div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        {project.link && <ProjectLink link={project.link} />}
      </section>
      <Separator orientation="horizontal" className="my-4" />
      <section
        className={cn(
          "grid gap-8 my-4",
          project.images.length > 1 ? "lg:grid-cols-2" : "lg:grid-cols-1"
        )}
      >
        {project.images.map((image, i) => (
          <Image
            key={image}
            src={image || "/placeholder.svg"}
            alt={`${project.title} image ${i}`}
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        ))}
      </section>
    </div>
  )
}

const textContentStyles =
  "leading-7 text-sm" +
  " [&_p:not(:first-child)]:mt-3 [&_*.muted]:text-muted-foreground" +
  " [&_ul]:my-2 [&_ul]:ml-6 [&_ul]:list-disc [&_a]:underline [&_a]:underline-offset-4" +
  " [&_code]:rounded [&_code]:bg-muted [&_code]:px-[0.3rem] [&_code]:py-[0.2rem] [&_code]:font-mono [&_code]:font-semibold"
