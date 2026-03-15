import { 
  FileText, 
  Search, 
  Filter, 
  Download, 
  ExternalLink,
  Calendar,
  GraduationCap
} from "lucide-react"

export default function PyqsPage() {
  const years = ["All Years", "2023", "2022", "2021", "2020", "2019"]
  const subjects = ["All Subjects", "Math", "Physics", "Chemistry", "Biology"]

  const papers = [
    { id: 1, title: "Class 12 Math Board Paper", year: 2023, subject: "Math", board: "BOSEM", size: "2.4 MB" },
    { id: 2, title: "Class 12 Physics Board Paper", year: 2023, subject: "Physics", board: "BOSEM", size: "1.8 MB" },
    { id: 3, title: "Chemistry Annual Exam paper", year: 2022, subject: "Chemistry", board: "COHSEM", size: "3.1 MB" },
    { id: 4, title: "Biology Unit Test Collection", year: 2023, subject: "Biology", board: "BOSEM", size: "1.2 MB" },
    { id: 5, title: "Class 10 Math Term-End", year: 2021, subject: "Math", board: "BOSEM", size: "2.1 MB" },
    { id: 6, title: "Physics Supplementary Paper", year: 2019, subject: "Physics", board: "BOSEM", size: "1.5 MB" },
  ]

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Previous Year Questions</h1>
        <p className="text-muted-foreground text-lg">Download official board question papers and competitive exam blueprints.</p>
      </div>

      <div className="premium-card p-4 bg-muted/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search papers..." 
              className="w-full bg-background border border-border/50 rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>
          <div className="flex gap-2">
            <select className="flex-1 bg-background border border-border/50 rounded-xl px-3 py-2 text-sm font-medium outline-none">
              {years.map(y => <option key={y}>{y}</option>)}
            </select>
            <select className="flex-1 bg-background border border-border/50 rounded-xl px-3 py-2 text-sm font-medium outline-none">
              {subjects.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <button className="mac-button-primary flex items-center justify-center gap-2">
            <Filter className="size-4" /> Apply Filters
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        {papers.map((paper) => (
          <div key={paper.id} className="premium-card p-4 flex items-center justify-between group hover:border-primary/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <FileText className="size-6" />
              </div>
              <div>
                <h4 className="font-bold group-hover:text-primary transition-colors">{paper.title}</h4>
                <div className="flex items-center gap-3 mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="size-3" /> {paper.year}</span>
                  <span className="flex items-center gap-1"><GraduationCap className="size-3" /> {paper.board}</span>
                  <span className="text-primary/70">{paper.subject}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-muted-foreground bg-muted px-2 py-1 rounded">
                PDF • {paper.size}
              </span>
              <button className="p-2 rounded-full border border-border/50 hover:bg-primary hover:text-primary-foreground group-hover:border-primary transition-all">
                <Download className="size-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center pt-6">
        <button className="mac-button-secondary text-sm px-8 py-3">
          Load More Papers
        </button>
      </div>
    </div>
  )
}
