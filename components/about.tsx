"use client"

import Image from "next/image"

import Profile from './assets/profile.jpg'
export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-end justify-end">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">About Me</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am Mst.Sadika Akter, I am a Frontend Developer skilled in Html, css, Tailwind,javascript, and react, I am a hardworking and dedicated person who wants to build a successful carrer in computer technology and web devlopment field. I love building responsive and user-friendly web interfaces.My goal is to become a impactful projects.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border border-border">
              <h3 className="font-semibold mb-3 text-foreground">Experience</h3>
              <p className="text-sm text-muted-foreground">Intership - BDCalling on Junior Front-end Developer</p>
            </div>

            <div className="p-6 bg-background rounded-lg border border-border">
              <h3 className="font-semibold mb-3 text-foreground">Education</h3>
              <p className="text-sm text-muted-foreground">Diploma in Computer Science</p>
            </div>
          </div>

          <div className="">
            
          <Image src={Profile} alt="" className="rounded-md inline-block m-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
