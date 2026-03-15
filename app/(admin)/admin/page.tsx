import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2
} from "lucide-react"

export default function AdminPage() {
  const stats = [
    {
      title: "Total Students",
      value: "12,482",
      change: "+12.5%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Active Courses",
      value: "452",
      change: "+3.2%",
      trend: "up",
      icon: BookOpen,
    },
    {
      title: "Engagement Rate",
      value: "84.2%",
      change: "-1.5%",
      trend: "down",
      icon: TrendingUp,
    },
    {
      title: "System Status",
      value: "Healthy",
      change: "99.9% Uptime",
      trend: "neutral",
      icon: CheckCircle2,
    },
  ]

  const recentLogs = [
    { id: 1, user: "K. Singh", action: "Updated PYQ 2023", time: "2 mins ago", type: "content" },
    { id: 2, user: "M. Devi", action: "Resolved Feedback #442", time: "15 mins ago", type: "support" },
    { id: 3, user: "System", action: "Automatic Backup Complete", time: "1 hour ago", type: "system" },
    { id: 4, user: "R. Sharma", action: "Added New Study Guide", time: "3 hours ago", type: "content" },
  ]

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">Admin Command Center</h1>
        <p className="text-muted-foreground text-lg">Real-time overview of the GPS Manipur ecosystem.</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="premium-card p-6 flex flex-col gap-4 group hover:border-primary/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <stat.icon className="size-5" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
                stat.trend === 'up' ? 'bg-success/10 text-success' : 
                stat.trend === 'down' ? 'bg-destructive/10 text-destructive' : 
                'bg-muted text-muted-foreground'
              }`}>
                {stat.trend === 'up' && <ArrowUpRight className="size-3" />}
                {stat.trend === 'down' && <ArrowDownRight className="size-3" />}
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{stat.title}</p>
              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="premium-card overflow-hidden">
          <div className="p-6 border-b border-border/50 bg-muted/30 flex items-center justify-between">
            <h3 className="font-semibold flex items-center gap-2">
              <Clock className="size-4 text-primary" />
              Recent Activity
            </h3>
            <button className="text-xs font-medium text-primary hover:underline">View All</button>
          </div>
          <div className="divide-y divide-border/50">
            {recentLogs.map((log) => (
              <div key={log.id} className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold border border-border">
                    {log.user.split('.').pop()?.trim()[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{log.action}</p>
                    <p className="text-xs text-muted-foreground">by {log.user}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{log.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="premium-card p-6 flex flex-col justify-between bg-gradient-to-br from-primary/5 via-transparent to-transparent">
          <div>
            <h3 className="font-semibold flex items-center gap-2 mb-4">
              <AlertCircle className="size-4 text-warning" />
              Critical Tasks
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-warning/20 bg-warning/5 text-sm">
                <p className="font-medium text-warning-foreground">Course Review Required</p>
                <p className="text-muted-foreground mt-1">"Advanced Mathematics Vol. 2" has 4 pending approvals.</p>
              </div>
              <div className="p-4 rounded-xl border border-destructive/20 bg-destructive/5 text-sm">
                <p className="font-medium text-destructive">User Reports Peak</p>
                <p className="text-muted-foreground mt-1">High volume of playback issues reported in Imphal East region.</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-6 py-3 rounded-xl bg-foreground text-background font-semibold hover:opacity-90 transition-opacity">
            Generate Weekly Report
          </button>
        </div>
      </div>
    </div>
  )
}
