import { Github, Link as LinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Project } from "@/app/types"
import ProjectLink from "@/components/ProjectLink"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export interface ProjectCardProps {
  data: Project
}
export default function ProjectCard({ data }: ProjectCardProps) {
  const projectHref = `/projects/${data.id}`

  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative aspect-video">
        <Link href={projectHref}>
          <Image
            src={data.images[0]}
            alt={data.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </Link>
      </div>
      <CardContent className="p-4 flex-1">
        <Link href={projectHref}>
          <h3 className="font-semibold text-xl mb-2">{data.title}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-4">{data.description}</p>
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {data.link && <ProjectLink link={data.link} />}
      </CardFooter>
    </Card>
  )
}
