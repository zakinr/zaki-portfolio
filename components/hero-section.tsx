import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-primary">Muhammad Zaki Nur Rahman</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground">Fresh Graduate Data Scientist</h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                Data Science fresh graduate with 2+ internship experiences and multiple national awards in data science
                competitions. Passionate about machine learning, data visualization, and delivering impactful solutions
                through data.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="text-lg text-muted-foreground">Based in Bandung, West Java</div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Muhammad Zaki Nur Rahman"
                  width={300}
                  height={300}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
