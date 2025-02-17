import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Frontend",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "React Query",
      "Zustand",
    ],
  },
  {
    category: "Backend",
    skills: ["GraphQL", "Node.js", "Express", "Python", "Java"],
  },
  {
    category: "DevOps & Tooling",
    skills: ["Git", "CI/CD", "Linux", "Jest", "Vitest", "Selenium"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
