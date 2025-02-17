import TechStack from "@/app/_components/tech-stack"
import { Hero } from "@/components/Hero"
import ProjectCard from "@/components/ProjectCard"
import { PROJECTS } from "@/content/projects"

export default function Page() {
  return (
    <>
      <section id="about" className={sectionStyles}>
        <Hero />
      </section>

      <section id="projects" className={sectionStyles}>
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} data={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className={sectionStyles}>
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Tech Stack
          </h2>
          <TechStack />
        </div>
      </section>
    </>
  )
}

const sectionStyles = "my-12 md:my-24 lg:my-32 scroll-mt-20"