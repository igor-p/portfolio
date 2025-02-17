import { Link as LinkIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

import { ProjectLink as ProjectLinkType } from "@/app/types"

export interface ProjectLinkProps {
  link: ProjectLinkType
}

export default function ProjectLink({ link }: ProjectLinkProps) {
  const href = typeof link === "string" ? link : link.url
  const label = typeof link === "string" ? link : link.label

  return (
    <Link
      href={href}
      target="_blank"
      className="inline-flex items-center gap-2 text-sm underline underline-offset-4"
    >
      <LinkIcon className="h-4 w-4" />
      {label}
    </Link>
  )
}
