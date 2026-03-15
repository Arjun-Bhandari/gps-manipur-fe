import { 
  MessageSquare, 
  Search, 
  Filter, 
  Star, 
  AlertCircle,
  CheckCircle2,
  Trash2,
  Reply,
  MoreVertical
} from "lucide-react"

export default function FeedbackPage() {
  const feedbacks = [
    { 
      id: 1, 
      user: "Rahul J.", 
      email: "rahul@gmail.com",
      message: "The new Chemistry solved papers are very helpful. Could you please add more diagrams to the organic chemistry section?",
      date: "Oct 24, 2024",
      status: "Unread",
      rating: 5,
      sentiment: "Positive"
    },
    { 
      id: 2, 
      user: "Priya M.", 
      email: "priya.m@yahoo.com",
      message: "The app crashes when I try to open large PDF files on my tablet. Please look into this.",
      date: "Oct 23, 2024",
      status: "Replied",
      rating: 2,
      sentiment: "Issue"
    },
    { 
      id: 3, 
      user: "Devid S.", 
      email: "devid.singh@outlook.com",
      message: "Love the dark mode! It's much easier to study at night now. Thank you GPS Manipur team!",
      date: "Oct 22, 2024",
      status: "Unread",
      rating: 5,
      sentiment: "Positive"
    },
    { 
      id: 4, 
      user: "Anita K.", 
      email: "anita.k@student.in",
      message: "Are the UPSE study materials coming this year? I've been waiting for the updates.",
      date: "Oct 20, 2024",
      status: "Archived",
      rating: 4,
      sentiment: "Question"
    },
  ]

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Student Feedback</h1>
          <p className="text-muted-foreground mt-1">Listen to your users, resolve issues, and improve the learning experience.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="size-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-[10px] font-bold">
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <span className="text-xs font-semibold text-muted-foreground">+12 online</span>
        </div>
      </div>

      <div className="premium-card overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        {/* Sidebar */}
        <div className="w-full md:w-64 border-r border-border/50 bg-muted/20 p-4 space-y-6">
          <div className="space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/20">
              <MessageSquare className="size-4" />
              Inbox
              <span className="ml-auto bg-primary-foreground/20 px-2 rounded-full text-[10px]">12</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-muted text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">
              <Star className="size-4" />
              Starried
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-muted text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">
              <CheckCircle2 className="size-4" />
              Resolved
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-muted text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">
              <Trash2 className="size-4" />
              Trash
            </button>
          </div>

          <div className="space-y-2">
            <p className="px-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Categories</p>
            <div className="px-3 space-y-3">
              <div className="flex items-center gap-2 text-xs font-medium">
                <div className="size-2 rounded-full bg-success"></div>
                Positive
              </div>
              <div className="flex items-center gap-2 text-xs font-medium">
                <div className="size-2 rounded-full bg-destructive"></div>
                Technical Issue
              </div>
              <div className="flex items-center gap-2 text-xs font-medium">
                <div className="size-2 rounded-full bg-warning"></div>
                Suggestions
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-border/50 flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search feedback..." 
                className="w-full bg-muted/30 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
            <button className="p-2 rounded-xl bg-muted/50 border border-border/50 hover:bg-muted transition-colors">
              <Filter className="size-4 text-muted-foreground" />
            </button>
          </div>

          <div className="flex-1 divide-y divide-border/50 overflow-y-auto">
            {feedbacks.map((fb) => (
              <div key={fb.id} className={`p-6 hover:bg-muted/10 transition-colors cursor-pointer group ${fb.status === 'Unread' ? 'bg-primary/[0.02]' : ''}`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`size-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                      fb.sentiment === 'Positive' ? 'bg-success/10 text-success' :
                      fb.sentiment === 'Issue' ? 'bg-destructive/10 text-destructive' :
                      'bg-warning/10 text-warning'
                    }`}>
                      {fb.user[0]}
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${fb.status === 'Unread' ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {fb.user}
                      </h4>
                      <p className="text-[10px] text-muted-foreground">{fb.email} • {fb.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className={`size-3 ${s <= fb.rating ? 'fill-warning text-warning' : 'text-border'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 pl-13 pr-4 leading-relaxed">
                  {fb.message}
                </p>
                <div className="mt-4 flex items-center gap-2 pl-13 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-all">
                    <Reply className="size-3" />
                    Reply
                  </button>
                  <button className="p-1.5 rounded-lg hover:bg-muted transition-colors">
                    <Trash2 className="size-3 text-muted-foreground hover:text-destructive" />
                  </button>
                  <button className="p-1.5 rounded-lg hover:bg-muted transition-colors">
                    <MoreVertical className="size-3 text-muted-foreground" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
