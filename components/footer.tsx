import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-background border-t py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Muhammad Zaki Nur Rahman</h3>
            <p className="text-muted-foreground">Data Scientist • Fresh Graduate • Machine Learning Enthusiast</p>
          </div>

          <div className="flex gap-4">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Muhammad Zaki Nur Rahman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
