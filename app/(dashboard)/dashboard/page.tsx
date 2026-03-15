import { 
  Trophy, 
  Target, 
  Flame, 
  Calendar,
  BookOpen,
  ArrowRight,
  PlayCircle,
  Clock
} from "lucide-react"

export default function DashboardPage() {
  const currentCourses = [
    { title: "Advanced Calculus", progress: 65, nextLesson: "Limits & Continuity", icon: BookOpen, color: "text-blue-500", bg: "bg-blue-500/10" },
    { title: "Modern Physic Volume 2", progress: 42, nextLesson: "Photoelectric Effect", icon: Flame, color: "text-orange-500", bg: "bg-orange-500/10" },
    { title: "Organic Chemistry", progress: 88, nextLesson: "Aromatic Compounds", icon: Target, color: "text-green-500", bg: "bg-green-500/10" },
  ]

  const upcomingTests = [
    { title: "Weekly Mock Test #12", date: "Oct 27, 2024", time: "10:00 AM", type: "Full Length" },
    { title: "Biology Unit Quiz", date: "Oct 29, 2024", time: "04:30 PM", type: "Quick Quiz" },
  ]

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, Arjun! 👋</h1>
          <p className="text-muted-foreground mt-1">You've completed 72% of your weekly learning goal. Keep it up!</p>
        </div>
        <div className="flex items-center gap-4 bg-muted/30 p-2 rounded-2xl border border-border/50">
          <div className="flex items-center gap-2 px-3 py-1 bg-background rounded-xl shadow-sm border border-border/50">
            <Flame className="size-4 text-orange-500 fill-orange-500" />
            <span className="text-sm font-bold">12 Day Streak</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-background rounded-xl shadow-sm border border-border/50">
            <Trophy className="size-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-bold">1,240 XP</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentCourses.map((course, i) => (
          <div key={i} className="premium-card p-6 group hover:border-primary/50 transition-all cursor-pointer">
            <div className="flex items-start justify-between mb-6">
              <div className={`p-3 rounded-2xl ${course.bg} ${course.color}`}>
                <course.icon className="size-6" />
              </div>
              <PlayCircle className="size-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="font-bold text-lg leading-tight mb-2">{course.title}</h3>
            <p className="text-xs text-muted-foreground mb-4 flex items-center gap-1">
              Next: <span className="text-foreground font-medium">{course.nextLesson}</span>
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-primary rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]`} 
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Clock className="size-5 text-primary" />
              Continue Learning
            </h2>
            <button className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
              View All <ArrowRight className="size-3" />
            </button>
          </div>
          
          <div className="premium-card overflow-hidden">
            {[1, 2, 3].map((item) => (
              <div key={item} className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors border-b last:border-0 border-border/50 group">
                <div className="flex items-center gap-4">
                  <div className="size-16 rounded-xl bg-muted overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                      <PlayCircle className="size-8 text-primary/40 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-primary uppercase">Lesson {item + 3}</span>
                    <h4 className="font-bold text-sm">Complex Numbers & De Moivre's Theorem</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">Mathematics • 45 minutes</p>
                  </div>
                </div>
                <button className="mac-button-secondary text-xs px-4 py-2">Resume</button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Calendar className="size-5 text-destructive" />
            Upcoming Tests
          </h2>
          <div className="space-y-4">
            {upcomingTests.map((test, i) => (
              <div key={i} className="premium-card p-5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 -mr-8 -mt-8 rounded-full transition-all group-hover:bg-primary/10" />
                <span className="text-[10px] font-bold text-destructive uppercase tracking-widest">{test.type}</span>
                <h4 className="font-bold mb-3 mt-1">{test.title}</h4>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="size-3" /> {test.date}</span>
                  <span className="flex items-center gap-1"><Clock className="size-3" /> {test.time}</span>
                </div>
                <button className="w-full mt-4 py-2 rounded-xl bg-muted border border-border/50 text-xs font-bold hover:bg-foreground hover:text-background transition-all">
                  Set Reminder
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
