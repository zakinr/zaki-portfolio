import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "Badan Riset dan Inovasi Nasional (BRIN)",
      period: "July - September 2024",
      type: "Internship",
      description: [
        "Developed an interactive dashboard for BRIN using Python, Streamlit, and Plotly to visualize research productivity data",
        "Processed and cleaned data from Google Sheets and Excel for efficient trend analysis and collaboration insights",
        "Delivered key visualizations (bar charts, pie charts, network graphs) to enhance decision-making related to research strategies",
        "Published a research paper titled 'Developing a Visual Dashboard to Improve Research Activity Assessment' in IEEE",
      ],
      technologies: ["Python", "Streamlit", "Plotly", "Data Cleaning", "Dashboard Development"],
    },
    {
      title: "Data Visualization Intern",
      company: "Telkom Indonesia",
      period: "February - June 2024",
      type: "MSIB Batch 6",
      description: [
        "Creating dashboard for Smart City Project",
        "Lead Daily Scrum for progress update",
        "Make a dashboard to analyse visitor's data at Innovation Center",
      ],
      technologies: ["Dashboard Development", "Data Visualization", "Scrum", "Smart City Analytics"],
    },
    {
      title: "Assistant Lecturer",
      company: "Telkom University",
      period: "September 2023 - January 2025",
      type: "Academic Role",
      description: [
        "Courses: Mathematical Logic, Mathematical Statistics, ICT Global Insight",
        "Responsibilities: Grading, assisting students, substituting lecturers when needed",
      ],
      technologies: ["Teaching", "Mathematical Statistics", "Academic Support"],
    },
    {
      title: "Chairman",
      company: "Himpunan Mahasiswa Data Science",
      period: "January 2023 - February 2024",
      type: "Leadership",
      description: [
        "Led 41-member organization and external partnerships",
        "Spearhead and manage all activities and initiatives as the President",
        "Develop and maintain positive relationships with external stakeholders",
        "Serve as the primary representative in external relations",
      ],
      technologies: ["Leadership", "Organization Management", "External Relations"],
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground">
            My internship experiences and leadership roles in data science and technology
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground mt-1">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <Badge variant="secondary">{exp.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
