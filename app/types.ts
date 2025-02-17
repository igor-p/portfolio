import { ReactNode } from "react"

export type ProjectId =
  | "wgsn-instock"
  | "reonomy"
  | "aptos-tournament"
  | "aptos-learn"
  | "aptos-docs"
  | "aptos-build"

export interface Project {
  description: string
  fullTextContent?: ReactNode
  id: ProjectId
  images: string[]
  link?: ProjectLink
  tags: string[]
  title: string
}

export type ProjectLink =
  | string
  | {
      url: string
      label: string
    }

export interface TechStack {
  category: string
  skills: string[]
}
