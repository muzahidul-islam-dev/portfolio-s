"use client"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML 5", "CSS3","Tailwind CSS", "JavaScript", "React"],
    },
    {
      title: "Tools & Methods",
      skills: ["Git", "Github"],
    },
    {
      title: "Design",
      skills: ["Figma", "Responsive Design", "Accessibility"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sidx) => (
                  <span key={sidx} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
