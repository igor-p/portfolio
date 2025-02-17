import { TechStack } from "@/app/types"
import { Card } from "@/components/ui/card"

export default function TechStackCard({ category, skills }: TechStack) {
  return (
    <Card key={category} className="p-6">
      <h3 className="text-lg font-semibold mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  )
}
