import { 
  Compass, 
  Search, 
  Map, 
  CheckCircle2, 
  ArrowRight,
  Lightbulb,
  FileText
} from "lucide-react"

export default function GuidesPage() {
  const guides = [
    { 
      id: 1, 
      title: "BOSEM Class 10 Exam Blueprint", 
      desc: "Understand the weightage of each chapter and the official marking scheme for the upcoming board exams.",
      category: "Exam Strategy",
      steps: 8
    },
    { 
      id: 2, 
      title: "NEET Physics: High Yield Topics", 
      desc: "A focused guide on chapters that consistently appear in the last 10 years of NEET papers.",
      category: "Subject Guide",
      steps: 12
    },
    { 
      id: 3, 
      title: "Preparation Roadmap: UPSC Manipur", 
      desc: "Starting from scratch? Follow this month-by-month roadmap to cover the entire civil services syllabus.",
      category: "Career Roadmap",
      steps: 24
    },
  ]

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Study Guides & Roadmaps</h1>
        <p className="text-muted-foreground text-lg">Step-by-step strategies to help you navigate through complex subjects and competitive exams.</p>
      </div>

      <div className="grid gap-6">
        {guides.map((guide) => (
          <div key={guide.id} className="premium-card p-6 flex flex-col md:flex-row gap-6 group hover:border-primary/40 transition-all cursor-pointer">
            <div className="size-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Map className="size-10" />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-muted px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    {guide.category}
                  </span>
                  <span className="text-[10px] font-bold text-primary flex items-center gap-1">
                    <CheckCircle2 className="size-3" /> {guide.steps} Steps
                  </span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{guide.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-2xl">
                  {guide.desc}
                </p>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold text-primary hover:underline">
                View Blueprint <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="premium-card p-8 flex gap-6 items-start bg-success/5 border-success/20">
          <div className="p-3 rounded-xl bg-success/20 text-success">
            <Lightbulb className="size-6" />
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2 text-success-foreground">Quick Tip: Active Recall</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Don't just read the guides. Try to summarize each step from memory after reading to boost retention by 2x.
            </p>
          </div>
        </div>

        <div className="premium-card p-8 flex gap-6 items-start bg-primary/5 border-primary/20">
          <div className="p-3 rounded-xl bg-primary/20 text-primary">
            <FileText className="size-6" />
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2 text-primary-foreground">Download as PDF</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium members can download all roadmap infographics and guidebooks for offline viewing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
