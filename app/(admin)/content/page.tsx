import { 
  FileText, 
  Eye, 
  MessageSquare, 
  Plus,
  LayoutGrid,
  List,
  Search,
  ChevronRight
} from "lucide-react"

export default function ContentPage() {
  const contentItems = [
    { id: 1, title: "Class 10 Math: Quadratic Equations", category: "Notes", status: "Published", views: "1.2k", author: "K. Singh" },
    { id: 2, title: "Biology 2023 PYQ Solved", category: "Solved PYQ", status: "Review", views: "450", author: "M. Devi" },
    { id: 3, title: "Study Guide: Physics Term 1", category: "Guides", status: "Published", views: "3.8k", author: "S. Prasad" },
    { id: 4, title: "Entrance Exam Tips 2024", category: "Articles", status: "Draft", views: "0", author: "Admin" },
  ]

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Management</h1>
          <p className="text-muted-foreground mt-1">Create, edit, and organize all educational resources and articles.</p>
        </div>
        <button className="mac-button-primary flex items-center gap-2">
          <Plus className="size-4" />
          Create New
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3 space-y-6">
          <div className="flex items-center gap-4 border-b border-border/50 pb-2">
            <button className="text-sm font-semibold border-b-2 border-primary px-2 pb-2">All Content</button>
            <button className="text-sm font-medium text-muted-foreground px-2 pb-2 hover:text-foreground transition-colors">Published</button>
            <button className="text-sm font-medium text-muted-foreground px-2 pb-2 hover:text-foreground transition-colors">Pending Review</button>
            <button className="text-sm font-medium text-muted-foreground px-2 pb-2 hover:text-foreground transition-colors">Drafts</button>
          </div>

          <div className="grid gap-4">
            {contentItems.map((item) => (
              <div key={item.id} className="premium-card p-4 flex items-center justify-between group hover:border-primary/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className={`size-12 rounded-xl flex items-center justify-center ${
                    item.category === 'Notes' ? 'bg-blue-500/10 text-blue-500' :
                    item.category === 'Solved PYQ' ? 'bg-purple-500/10 text-purple-500' :
                    'bg-orange-500/10 text-orange-500'
                  }`}>
                    <FileText className="size-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">{item.title}</h4>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <span className="bg-muted px-2 py-0.5 rounded-md font-medium uppercase">{item.category}</span>
                      <span className="flex items-center gap-1"><Eye className="size-3" /> {item.views} views</span>
                      <span className="flex items-center gap-1"><MessageSquare className="size-3" /> 12 comments</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                    item.status === 'Published' ? 'text-success bg-success/10' :
                    item.status === 'Review' ? 'text-warning bg-warning/10' :
                    'text-muted-foreground bg-muted'
                  }`}>
                    {item.status}
                  </span>
                  <button className="p-2 rounded-full hover:bg-muted opacity-0 group-hover:opacity-100 transition-all">
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="premium-card p-6">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <LayoutGrid className="size-4 text-primary" />
              Quick Filters
            </h4>
            <div className="space-y-2">
              {['Class 10', 'Class 12', 'NEET/JEE', 'CUET'].map((label) => (
                <button key={label} className="w-full text-left px-3 py-2 rounded-lg hover:bg-muted text-sm font-medium transition-colors flex justify-between items-center group">
                  {label}
                  <span className="text-xs text-muted-foreground group-hover:text-primary">(24)</span>
                </button>
              ))}
            </div>
          </div>

          <div className="premium-card p-6 bg-primary/5 border-primary/20">
            <h4 className="font-bold mb-2">Editor's Tip</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Adding interactive quizzes to your notes increases student engagement by 40% on average.
            </p>
            <button className="mt-4 text-xs font-bold text-primary hover:underline">Read Guide</button>
          </div>
        </div>
      </div>
    </div>
  )
}
