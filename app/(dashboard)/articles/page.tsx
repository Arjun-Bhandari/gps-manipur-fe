import { 
  Newspaper, 
  Search, 
  TrendingUp, 
  Clock, 
  User, 
  ArrowRight,
  Bookmark,
  Share2
} from "lucide-react"

export default function ArticlesPage() {
  const featuredArticle = {
    title: "How to Crack JEE 2024: A Comprehensive Strategy for Manipur Students",
    excerpt: "Success in competitive exams requires more than just hard work. Learn how to optimize your study schedule and focus on high-yield topics specific to the current exam pattern.",
    author: "Dr. Sangita M.",
    date: "Oct 25, 2024",
    readTime: "12 min read",
    tag: "Exam Prep"
  }

  const articles = [
    { id: 1, title: "10 Tips for Better Time Management", tag: "Productivity", date: "Oct 22, 2024", readTime: "5 min read" },
    { id: 2, title: "Understanding the New CBSE Syllabus", tag: "News", date: "Oct 20, 2024", readTime: "8 min read" },
    { id: 3, title: "Organic Chemistry Made Simple", tag: "Study Guide", date: "Oct 18, 2024", readTime: "15 min read" },
    { id: 4, title: "Mental Health: Coping with Exam Stress", tag: "Wellness", date: "Oct 15, 2024", readTime: "10 min read" },
  ]

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Articles & Insights</h1>
          <p className="text-muted-foreground mt-1">Stay updated with the latest education news, study tips, and expert advice.</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full bg-muted/50 border border-border/50 rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
      </div>

      {/* Featured Article */}
      <div className="premium-card overflow-hidden group hover:border-primary/20 transition-all cursor-pointer">
        <div className="grid md:grid-cols-2">
          <div className="aspect-[16/10] md:aspect-auto bg-gradient-to-br from-primary/30 to-secondary flex items-center justify-center p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(var(--primary-rgb),0.5)_0%,transparent_50%)]" />
            </div>
            <Newspaper className="relative size-32 text-primary group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">
              Featured Post
            </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-4 text-xs font-bold text-primary uppercase tracking-widest">
              {featuredArticle.tag} • {featuredArticle.readTime}
            </div>
            <h2 className="text-3xl font-bold group-hover:text-primary transition-colors leading-tight mb-4">
              {featuredArticle.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {featuredArticle.excerpt}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-muted flex items-center justify-center text-xs font-bold border border-border/50">SM</div>
                <div>
                  <p className="text-sm font-bold">{featuredArticle.author}</p>
                  <p className="text-[10px] text-muted-foreground">{featuredArticle.date}</p>
                </div>
              </div>
              <button className="mac-button-secondary text-xs px-6 py-2.5 flex items-center gap-2 group/btn">
                Read Full Story <ArrowRight className="size-3 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <div className="flex items-center gap-2 border-b border-border/50 pb-4">
            <TrendingUp className="size-5 text-primary" />
            <h3 className="text-xl font-bold">Trending Now</h3>
          </div>
          
          <div className="space-y-8">
            {articles.map((article) => (
              <div key={article.id} className="group cursor-pointer flex gap-6">
                <div className="hidden sm:flex flex-col items-center">
                  <div className="text-2xl font-black text-muted/30 group-hover:text-primary/20 transition-colors">0{article.id}</div>
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    <span className="text-primary">{article.tag}</span>
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h4 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1">
                      <Bookmark className="size-3" /> Save
                    </button>
                    <button className="text-xs font-bold text-muted-foreground hover:text-foreground flex items-center gap-1">
                      <Share2 className="size-3" /> Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <div className="premium-card p-6 bg-muted/20">
            <h3 className="font-bold mb-6 flex items-center gap-2">
              <User className="size-4 text-primary" />
              Top Contributors
            </h3>
            <div className="space-y-6">
              {[
                { name: "Dr. L. Somo", role: "Physics Expert", posts: 24 },
                { name: "Anita Devi", role: "Career Counselor", posts: 18 },
                { name: "Prof. Mani", role: "Math Guru", posts: 42 },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-background border border-border/50 flex items-center justify-center text-xs font-bold">
                    {c.name.split(' ').pop()?.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{c.name}</p>
                    <p className="text-[10px] text-muted-foreground">{c.role} • {c.posts} Posts</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-2.5 rounded-xl border border-primary/20 text-primary text-xs font-bold hover:bg-primary/5 transition-colors">
              Join as Contributor
            </button>
          </div>

          <div className="premium-card p-6 bg-primary text-primary-foreground shadow-2xl shadow-primary/20 overflow-hidden relative">
            <div className="absolute -bottom-6 -left-6 size-32 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <h3 className="text-xl font-bold mb-3 relative z-10">Weekly Newsletter</h3>
            <p className="text-sm text-primary-foreground/80 mb-6 leading-relaxed relative z-10">
              Get the best study strategies and motivation delivered to your inbox every Sunday.
            </p>
            <div className="space-y-3 relative z-10">
              <input type="email" placeholder="Your email address" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm placeholder:text-white/50 outline-none" />
              <button className="w-full bg-white text-primary rounded-xl py-2.5 text-sm font-bold shadow-xl">
                Subscribe for Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
