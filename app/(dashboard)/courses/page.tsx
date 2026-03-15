import { 
  Play, 
  Clock, 
  BarChart, 
  Users, 
  Search,
  CheckCircle2,
  Lock,
  ArrowRight
} from "lucide-react"

export default function CoursesPage() {
  const courses = [
    { 
      id: 1, 
      title: "Mastering Physics: Class 12 Boards", 
      instructor: "Dr. S. Khuman", 
      duration: "24h 15m", 
      level: "Advanced", 
      students: "1,240",
      progress: 45,
      isLocked: false,
      lessons: 48,
      thumbnail: "bg-blue-600"
    },
    { 
      id: 2, 
      title: "Complete Mathematics for NEET", 
      instructor: "Prof. L. Singh", 
      duration: "32h 45m", 
      level: "Expert", 
      students: "3,850",
      progress: 12,
      isLocked: false,
      lessons: 64,
      thumbnail: "bg-indigo-600"
    },
    { 
      id: 3, 
      title: "Biology: Genetics & Evolution", 
      instructor: "M. Devi", 
      duration: "12h 20m", 
      level: "Intermediate", 
      students: "950",
      progress: 0,
      isLocked: true,
      lessons: 24,
      thumbnail: "bg-green-600"
    },
    { 
      id: 4, 
      title: "English Grammar Mastery", 
      instructor: "R. Sharma", 
      duration: "8h 10m", 
      level: "Beginner", 
      students: "2,100",
      progress: 100,
      isLocked: false,
      lessons: 15,
      thumbnail: "bg-orange-600"
    },
  ]

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Structured Courses</h1>
          <p className="text-muted-foreground mt-1">Deep dive into subjects with expert-led video lectures and quizzes.</p>
        </div>
        <div className="flex gap-2">
          <button className="mac-button-secondary text-sm px-4">All Subjects</button>
          <button className="mac-button-secondary text-sm px-4 bg-primary text-primary-foreground border-primary">Active</button>
          <button className="mac-button-secondary text-sm px-4">Completed</button>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {courses.map((course) => (
          <div key={course.id} className="premium-card flex flex-col md:flex-row overflow-hidden group hover:border-primary/40 transition-all">
            <div className={`w-full md:w-48 aspect-video md:aspect-auto ${course.thumbnail} relative flex items-center justify-center`}>
              {course.isLocked ? (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                  <Lock className="size-8 text-white/70" />
                </div>
              ) : (
                <div className="size-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  <Play className="size-6 text-white fill-white" />
                </div>
              )}
              {course.progress === 100 && (
                <div className="absolute top-2 left-2 bg-success text-white px-2 py-0.5 rounded-md text-[10px] font-bold flex items-center gap-1">
                  <CheckCircle2 className="size-3" /> COMPLETED
                </div>
              )}
            </div>

            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{course.level}</span>
                  <div className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground">
                    <Users className="size-3" /> {course.students}
                  </div>
                </div>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors leading-tight mb-2">
                  {course.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">by {course.instructor}</p>
                
                <div className="flex items-center gap-4 text-[10px] font-bold text-muted-foreground uppercase mb-6">
                  <span className="flex items-center gap-1"><Clock className="size-3" /> {course.duration}</span>
                  <span className="flex items-center gap-1"><BarChart className="size-3" /> {course.lessons} Lessons</span>
                </div>
              </div>

              <div className="space-y-3">
                {course.isLocked ? (
                  <button className="w-full py-2.5 rounded-xl bg-muted text-muted-foreground text-xs font-bold cursor-not-allowed border border-border/50">
                    Unlock for ₹999
                  </button>
                ) : (
                  <>
                    <div className="flex justify-between items-end mb-1">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase">Overall Progress</span>
                      <span className="text-xs font-bold">{course.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-primary rounded-full transition-all duration-1000`} 
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <button className="w-full mt-2 py-2.5 rounded-xl bg-foreground text-background text-xs font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2">
                      {course.progress === 0 ? "Start Learning" : course.progress === 100 ? "Review Content" : "Continue Lesson"}
                      <ArrowRight className="size-3" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="premium-card p-6 border-dashed border-2 flex flex-col items-center justify-center py-12 bg-muted/20">
        <div className="size-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
          <CheckCircle2 className="size-8 text-muted-foreground/50" />
        </div>
        <h3 className="font-bold text-lg">Looking for something else?</h3>
        <p className="text-sm text-muted-foreground text-center max-w-sm mt-1">
          New courses are added every week. Subscribe to our newsletter to stay updated on new content releases.
        </p>
        <div className="flex w-full max-w-sm gap-2 mt-6">
          <input type="email" placeholder="email@example.com" className="flex-1 bg-background border border-border/50 rounded-xl px-4 py-2 text-sm outline-none" />
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-primary/20">Subscribe</button>
        </div>
      </div>
    </div>
  )
}
