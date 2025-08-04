import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "SQL"],
    },
    {
      title: "Data Science Libraries",
      skills: ["Pandas", "NumPy", "SciPy", "PyTorch", "Seaborn", "Plotly", "NetworkX", "Matplotlib"],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Jupyter Notebook",
        "Visual Studio Code",
        "BigQuery",
        "Google Colab",
        "Kaggle Notebook",
        "Excel",
        "Figma",
        "Canva",
        "Adobe Illustrator",
      ],
    },
    {
      title: "Data Visualization",
      skills: ["Tableau", "Power BI", "Streamlit", "Looker Studio", "Matplotlib", "Plotly"],
    },
    {
      title: "Cloud Platforms",
      skills: ["Google Cloud Platform", "BigQuery", "Google Cloud Storage"],
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Public Speaking", "Problem Solving", "Communication", "Teamwork", "Time Management"],
    },
  ]

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
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
