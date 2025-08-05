"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, FileText } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "GDP Prediction Model using MLP",
      description:
        "Developed a GDP prediction model using Multilayer Perceptron (MLP) neural network achieving 89% accuracy for economic forecasting applications.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "PyTorch", "Pandas", "NumPy"],
      githubUrl: "#",
      liveUrl: "#",
      highlights: ["89% accuracy achieved", "MLP neural network", "Economic forecasting"],
    },
    {
      title: "Telecom Customer Churn Analysis",
      description:
        "Conducted comprehensive churn analysis on telecommunications data and provided actionable insights for customer retention strategies.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      githubUrl: "#",
      liveUrl: "#",
      highlights: ["Customer retention insights", "Predictive modeling", "Business recommendations"],
    },
    {
      title: "World GDP Visualization Dashboard",
      description:
        "Created an interactive Tableau dashboard to visualize global GDP data with comprehensive trend analysis and country comparisons.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Tableau", "Data Visualization", "Statistical Analysis"],
      githubUrl: "#",
      liveUrl: "https://public.tableau.com/views/WorldGDPDashboard/Dashboard1",
      highlights: ["Interactive visualizations", "Global trend analysis", "Country comparisons"],
    },
    {
      title: "Plankton Image Classification",
      description:
        "Developed a plankton image classification model using Transformer architecture with the Crustacea Zooscan Image Database, achieving 0.809 F1-Score.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "PyTorch", "Computer Vision", "Transformers"],
      githubUrl: "#",
      liveUrl: "#",
      highlights: ["0.809 F1-Score", "Transformer architecture", "Image preprocessing & augmentation"],
    },
    {
      title: "Customer Segmentation with K-Means",
      description:
        "Implemented K-Means clustering algorithm for pattern recognition and customer segmentation analysis to identify distinct customer groups.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "Scikit-learn", "Matplotlib", "Pandas"],
      githubUrl: "#",
      liveUrl: "#",
      highlights: ["Pattern recognition", "Customer segmentation", "Unsupervised learning"],
    },
    {
      title: "Ciliwung River Water Level Prediction",
      description:
        "Built a predictive model for water level forecasting in Ciliwung River using linear regression for flood prevention and water management.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "Linear Regression", "Time Series", "Pandas"],
      githubUrl: "#",
      liveUrl: "#",
      highlights: ["Environmental application", "Flood prevention", "Time series analysis"],
    },
  ]

  const publications = [
    {
      title: "Developing a Visual Dashboard to Improve Research Activity Assessment",
      description: "Published research paper in IEEE presented at IC3INA 2024 conference",
      type: "IEEE Publication",
      url: "#",
    },
    {
      title: "Pemanfaatan Aplikasi Learning Adaptively, Resonating Values And Approaches (Larva)",
      description: "Article about interactive learning optimization at SMAN 1 Pangalengan",
      type: "Research Article",
      url: "#",
    },
  ]

  return (
    <section ref={sectionRef} id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            A showcase of my data science projects demonstrating various machine learning techniques and real-world
            applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-1">
                  <h4 className="font-semibold text-sm">Key Achievements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 bg-transparent hover:scale-105 transition-transform duration-200"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  {project.liveUrl !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 bg-transparent hover:scale-105 transition-transform duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Publications Section */}
        <div
          className={`mt-16 transition-all duration-800 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Publications & Research</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <Card
                key={index}
                className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg hover:text-primary transition-colors duration-200">
                        {pub.title}
                      </CardTitle>
                      <CardDescription className="mt-2">{pub.description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="animate-pulse">
                      {pub.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 bg-transparent hover:scale-105 transition-transform duration-200"
                  >
                    <FileText className="h-4 w-4" />
                    Read Paper
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
