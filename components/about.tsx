"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate full-stack developer with 5+ years of experience building web applications. I love
                crafting elegant solutions to complex problems and creating seamless user experiences.
              </p>
              <p>
                My journey started with a curiosity about how the web works, and it has evolved into a career focused on
                writing clean, maintainable code and delivering value to users.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open source, writing technical blogs, or exploring
                new technologies.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-background rounded-lg border border-border">
              <h3 className="font-semibold mb-3 text-foreground">Experience</h3>
              <p className="text-sm text-muted-foreground">Senior Developer at Tech Company • 2+ years</p>
              <p className="text-sm text-muted-foreground mt-4">Full Stack Developer at StartUp • 3+ years</p>
            </div>

            <div className="p-6 bg-background rounded-lg border border-border">
              <h3 className="font-semibold mb-3 text-foreground">Education</h3>
              <p className="text-sm text-muted-foreground">B.S. Computer Science • 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
