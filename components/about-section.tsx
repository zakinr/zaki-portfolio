import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Brain, Database, TrendingUp } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Analysis & SQL",
      description: "Expert in Python (Pandas, NumPy, SciPy) and SQL for data manipulation and analysis",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Machine Learning & Deep Learning",
      description: "Proficient in supervised and unsupervised learning with PyTorch and scikit-learn",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Data Visualization",
      description: "Creating compelling visualizations with Tableau, Power BI, Streamlit, and Plotly",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Cloud & Big Data",
      description: "Experience with Google Cloud Platform, BigQuery, and large-scale data processing",
    },
  ]

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a recent graduate with a Bachelor's degree in Data Science from Telkom University, passionate about
            leveraging data to solve real-world problems. With 2+ internship experiences and multiple national
            competition awards, I have strong analytical skills and hands-on experience with various data science tools
            and techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4 text-primary">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
