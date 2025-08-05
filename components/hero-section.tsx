"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-pulse">
                  Muhammad Zaki Nur Rahman
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground animate-fade-in-up delay-300">
                Fresh Graduate Data Scientist
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in-up delay-500">
                Data Science fresh graduate with 2+ internship experiences and multiple national awards in data science
                competitions. Passionate about machine learning, data visualization, and delivering impactful solutions
                through data.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-700">
              <Button size="lg" className="gap-2 hover:scale-105 transition-transform duration-200">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 bg-transparent hover:scale-105 transition-transform duration-200"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4 animate-fade-in-up delay-1000">
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 hover:text-primary transition-all duration-200"
                asChild
              >
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 hover:text-primary transition-all duration-200"
                asChild
              >
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="text-lg text-muted-foreground animate-fade-in-up delay-1200">
              Based in Bandung, West Java
            </div>
          </div>

          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative group">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Muhammad Zaki Nur Rahman"
                  width={300}
                  height={300}
                  className="rounded-full object-cover relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
