import { 
  CheckCircle2, 
  Search, 
  Filter, 
  Eye, 
  BookOpen,
  ArrowRight,
  TrendingUp,
  Award
} from "lucide-react"

export default function SolvedPyqPage() {
  const solvedPapers = [
    { id: 1, title: "Class 12 Math 2023: Fully Solved", difficulty: "Hard", rating: 4.8, solutions: 45, category: "BOSEM", color: "bg-blue-500" },
    { id: 2, title: "Physics 2022: Chapter-wise Solutions", difficulty: "Medium", rating: 4.9, solutions: 32, category: "COHSEM", color: "bg-purple-500" },
    { id: 3, title: "Chemistry Mock Solutions #4", difficulty: "Expert", rating: 4.5, solutions: 28, category: "NEET Prep", color: "bg-green-500" },
    { id: 4, title: "Biology 2021: Visual solutions", difficulty: "Medium", rating: 4.7, solutions: 25, category: "BOSEM", color: "bg-orange-500" },
  ]

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">Solved PYQs & Solutions</h1>
        <p className="text-muted-foreground text-lg">Detailed, expert-verified solutions for every previous year question paper.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {solvedPapers.map((paper) => (
          <div key={paper.id} className="premium-card p-6 group hover:border-primary/50 transition-all cursor-pointer overflow-hidden relative">
            <div className={`absolute top-0 right-0 w-32 h-32 ${paper.color} opacity-5 -mr-16 -mt-16 rounded-full blur-3xl`} />
            
            <div className="flex items-start justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-2xl ${paper.color}/10 ${paper.color.replace('bg-', 'text-')}`}>
                  <BookOpen className="size-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{paper.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase">{paper.category}</span>
                    <span className="px-2 py-0.5 rounded-full bg-muted text-[8px] font-black uppercase tracking-widest text-muted-foreground">
                      {paper.difficulty}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 text-sm font-bold text-warning">
                  <Award className="size-4" /> {paper.rating}
                </div>
                <span className="text-[10px] text-muted-foreground">{paper.solutions} Explanations</span>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-border/50 pt-4 relative z-10">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Eye className="size-3" /> 2.4k
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <TrendingUp className="size-3" /> Hot
                </div>
              </div>
              <button className="flex items-center gap-2 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                Read Solution <ArrowRight className="size-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="premium-card p-10 flex flex-col items-center justify-center text-center space-y-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-primary/20">
        <div className="p-4 rounded-3xl bg-primary/20 shadow-xl shadow-primary/10 animate-bounce">
          <CheckCircle2 className="size-12 text-primary" />
        </div>
        <h2 className="text-2xl font-bold">100% Accuracy Guaranteed</h2>
        <p className="max-w-md text-muted-foreground text-sm leading-relaxed">
          Every solution is peer-reviewed by our senior subject matter experts to ensure you get the absolute best explanation for your exams.
        </p>
        <div className="grid grid-cols-3 gap-8 pt-6 w-full max-w-lg">
          <div>
            <p className="text-xl font-bold">5k+</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Solved Papers</p>
          </div>
          <div>
            <p className="text-xl font-bold">1.2M</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Trusting Students</p>
          </div>
          <div>
            <p className="text-xl font-bold">99.2%</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Accuracy</p>
          </div>
        </div>
      </div>
    </div>
  )
}
