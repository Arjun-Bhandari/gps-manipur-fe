import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowUpRight,
  ArrowDownRight,
  MousePointer2,
  Timer
} from "lucide-react"

export default function AnalyticsPage() {
  const chartBars = [
    { label: "Mon", value: 65 },
    { label: "Tue", value: 45 },
    { label: "Wed", value: 85 },
    { label: "Thu", value: 55 },
    { label: "Fri", value: 95 },
    { label: "Sat", value: 75 },
    { label: "Sun", value: 35 },
  ]

  const metrics = [
    { title: "Page Views", value: "48.2k", growth: "+18%", icon: MousePointer2, trend: "up" },
    { title: "Avg. Session", value: "4m 32s", growth: "+5%", icon: Timer, trend: "up" },
    { title: "Active Now", value: "142", growth: "Live", icon: Users, trend: "neutral" },
    { title: "Bounce Rate", value: "32.4%", growth: "-2%", icon: Globe, trend: "down" },
  ]

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text">Analytics Insights</h1>
        <p className="text-muted-foreground text-lg">Deep dive into platform usage and student behavior patterns.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, i) => (
          <div key={i} className="premium-card p-6 border-b-2 border-b-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-secondary text-primary">
                <metric.icon className="size-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{metric.title}</span>
            </div>
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl font-bold">{metric.value}</h3>
              <div className={`flex items-center gap-1 text-xs font-bold ${
                metric.trend === 'up' ? 'text-success' : 
                metric.trend === 'down' ? 'text-destructive' : 
                'text-primary'
              }`}>
                {metric.trend === 'up' && <ArrowUpRight className="size-3" />}
                {metric.trend === 'down' && <ArrowDownRight className="size-3" />}
                {metric.growth}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 premium-card p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold flex items-center gap-2">
              <BarChart3 className="size-4 text-primary" />
              Weekly Traffic Volume
            </h3>
            <select className="bg-muted border-none rounded-md text-xs font-medium px-2 py-1 outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="flex items-end justify-between h-48 gap-2 pt-4">
            {chartBars.map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div className="w-full relative flex items-end justify-center rounded-t-lg bg-muted/50 overflow-hidden h-full">
                  <div 
                    className="w-full bg-primary/60 group-hover:bg-primary transition-all duration-500 rounded-t-lg"
                    style={{ height: `${bar.value}%` }}
                  />
                  <div className="absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-full pb-2">
                    <span className="bg-foreground text-background text-[10px] font-bold px-1.5 py-0.5 rounded shadow-xl">
                      {bar.value * 12}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="premium-card p-6">
          <h3 className="font-bold flex items-center gap-2 mb-6">
            <TrendingUp className="size-4 text-success" />
            Top Categories
          </h3>
          <div className="space-y-6">
            {[
              { name: "Mathematics", value: 85, color: "bg-blue-500" },
              { name: "Science", value: 62, color: "bg-green-500" },
              { name: "PYQs", value: 94, color: "bg-purple-500" },
              { name: "General Knowledge", value: 45, color: "bg-orange-500" },
            ].map((cat) => (
              <div key={cat.name} className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span>{cat.name}</span>
                  <span className="text-muted-foreground">{cat.value}%</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${cat.color} rounded-full transition-all duration-1000`} 
                    style={{ width: `${cat.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
