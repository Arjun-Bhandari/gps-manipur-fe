import { 
  Book, 
  Search, 
  Download, 
  Star, 
  Filter,
  Eye,
  Bookmark
} from "lucide-react"

export default function BooksPage() {
  const books = [
    { id: 1, title: "Class 10 Mathematics", author: "BOSEM", rating: 4.8, reads: "12k+", category: "Textbook", color: "bg-blue-500" },
    { id: 2, title: "Modern Physics Vol 1", author: "H.C. Verma", rating: 4.9, reads: "45k+", category: "Reference", color: "bg-purple-500" },
    { id: 3, title: "General Knowledge 2024", author: "Manohar Pandey", rating: 4.5, reads: "28k+", category: "Competitive", color: "bg-orange-500" },
    { id: 4, title: "English Grammar", author: "Wren & Martin", rating: 4.7, reads: "15k+", category: "Language", color: "bg-green-500" },
    { id: 5, title: "Economics: Class 12", author: "NCERT", rating: 4.6, reads: "8k+", category: "Textbook", color: "bg-red-500" },
    { id: 6, title: "Quantitative Aptitude", author: "R.S. Aggarwal", rating: 4.9, reads: "60k+", category: "Competitive", color: "bg-indigo-500" },
  ]

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">E-Book Library</h1>
          <p className="text-muted-foreground mt-1">Access all your board textbooks and competitive reference materials in one place.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search library..." 
              className="bg-muted/50 border border-border/50 rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all w-64"
            />
          </div>
          <button className="mac-button-secondary p-2 rounded-full">
            <Filter className="size-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {books.map((book) => (
          <div key={book.id} className="group relative">
            <div className={`aspect-[3/4] rounded-2xl ${book.color} p-4 flex flex-col justify-between shadow-xl shadow-black/10 group-hover:scale-[1.02] transition-all duration-300 relative overflow-hidden`}>
              {/* Diffracted background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-black/20 rounded-full blur-2xl" />
              
              <div className="relative flex justify-between items-start">
                <span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider">
                  {book.category}
                </span>
                <button className="text-white/70 hover:text-white transition-colors">
                  <Bookmark className="size-4" />
                </button>
              </div>

              <div className="relative">
                <Book className="size-12 text-white/40 mb-2" />
                <h3 className="text-white font-bold text-sm leading-tight leading-4 line-clamp-2">{book.title}</h3>
                <p className="text-white/60 text-[10px] font-medium mt-1">{book.author}</p>
              </div>
            </div>

            <div className="mt-4 space-y-1 px-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="size-3 fill-warning text-warning" />
                  <span className="text-xs font-bold">{book.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Eye className="size-3" />
                  <span className="text-[10px] font-medium">{book.reads}</span>
                </div>
              </div>
              <button className="w-full mt-2 py-2 rounded-xl bg-muted border border-border/10 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all flex items-center justify-center gap-2 text-xs font-bold">
                <Download className="size-3" />
                Download PDF
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="premium-card p-8 bg-gradient-to-r from-primary/10 via-transparent to-transparent flex items-center justify-between mt-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 -mr-32 -mt-32 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-lg">
          <h3 className="text-2xl font-bold mb-2">Request a Book</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Can't find what you're looking for? Tell us which textbook or reference guide you need, and we'll try to add it to our library.
          </p>
          <button className="mt-6 px-6 py-2.5 rounded-full bg-foreground text-background font-bold text-sm hover:opacity-90 transition-opacity">
            Submit Request
          </button>
        </div>
        <div className="hidden lg:block relative z-10">
          <div className="size-32 rounded-3xl bg-primary/20 rotate-12 flex items-center justify-center border border-primary/20 shadow-2xl">
            <Book className="size-16 text-primary" />
          </div>
        </div>
      </div>
    </div>
  )
}
