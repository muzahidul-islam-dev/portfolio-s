"use client"

import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground text-balance">
            Full Stack <span className="text-primary">Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance">
            Building beautiful, performant web experiences with modern technologies
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I specialize in React, Next.js, and TypeScript. I create scalable applications that combine elegant design
          with robust engineering.
        </p>

        <div className="flex gap-4 justify-center pt-8">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium">
            View My Work
          </button>
          <button className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium">
            Get In Touch
          </button>
        </div>

        <div className="pt-12 animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
