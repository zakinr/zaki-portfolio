import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Trophy } from "lucide-react"

export function EducationSection() {
  const achievements = [
    "2nd Place Winner - Lomba Inovasi Digital Mahasiswa (LIDM) 2023",
    "2nd Place Winner - Data Science Competition IPB University 2023",
    "Finalist - GEMASTIK Data Mining 2024",
    "Finalist - Dataquest Airnology 3.0 2024",
    "Best Presenter - Data Science Competition IPB 2023",
    "Favourite Winner - Data Science Competition IPB 2023",
  ]

  const certifications = [
    { name: "Intro to Machine Learning", issuer: "Kaggle", year: "2023" },
    { name: "Python Certification", issuer: "Kaggle", year: "2023" },
    { name: "The Basics of Project Management", issuer: "Dicoding Indonesia", year: "2023" },
    { name: "Python Fundamental for Data Science", issuer: "DQLab", year: "2023" },
    { name: "Mastering Adobe Illustrator", issuer: "Rubrik Grafis", year: "2023" },
    { name: "The Basics of Data Visualization", issuer: "Dicoding Indonesia", year: "2022" },
  ]

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education & Achievements</h2>
          <p className="text-lg text-muted-foreground">
            My academic background, certifications, and competition achievements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="text-center">
              <GraduationCap className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>Bachelor of Data Science</CardTitle>
              <CardDescription>Telkom University</CardDescription>
              <p className="text-sm text-muted-foreground">2021 - 2025</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold mb-2">GPA: 3.96/4.0</p>
                <p className="text-sm text-muted-foreground mb-3">Summa Cum Laude</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    Data Analysis
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    SQL Query
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Machine Learning
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Deep Learning
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Data Visualization
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Statistical Analysis
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Award className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>Certifications</CardTitle>
              <CardDescription>Professional Credentials</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index}>
                    <p className="font-semibold text-sm">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Trophy className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>Competition Awards</CardTitle>
              <CardDescription>National Recognition</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-sm">
                    <p className="font-medium">{achievement}</p>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <h4 className="font-semibold mb-2">Leadership:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Chairman - Himpunan Mahasiswa Data Science (41 members)</li>
                  <li>• Assistant Lecturer - Telkom University</li>
                  <li>• Published IEEE Research Paper</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
