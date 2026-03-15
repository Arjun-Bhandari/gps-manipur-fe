import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  UserPlus,
  Mail,
  Shield,
  Download
} from "lucide-react"

export default function UsersPage() {
  const users = [
    { id: 1, name: "Arjun Bhandari", email: "arjun@example.com", role: "Admin", status: "Active", joined: "Mar 10, 2024" },
    { id: 2, name: "Thoibi Devi", email: "thoibi.d@students.in", role: "Student", status: "Active", joined: "Mar 12, 2024" },
    { id: 3, name: "Robert Khuman", email: "robert.k@external.com", role: "Teacher", status: "Pending", joined: "Mar 15, 2024" },
    { id: 4, name: "Sana Singh", email: "sana.s@students.in", role: "Student", status: "Active", joined: "Feb 28, 2024" },
    { id: 5, name: "Lanchenba M.", email: "lanchenba@admin.com", role: "Moderator", status: "Inactive", joined: "Jan 15, 2024" },
  ]

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground mt-1">Manage permissions, invite new members, and monitor student access.</p>
        </div>
        <button className="mac-button-primary flex items-center gap-2">
          <UserPlus className="size-4" />
          Invite Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search users..." 
            className="w-full bg-muted/50 border border-border/50 rounded-xl py-2 pl-10 pr-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-muted/50 border border-border/50 rounded-xl px-4 py-2 text-sm font-medium hover:bg-muted transition-colors">
            <Filter className="size-3" />
            Filter
          </button>
          <button className="flex items-center gap-2 bg-muted/50 border border-border/50 rounded-xl px-4 py-2 text-sm font-medium hover:bg-muted transition-colors">
            <Download className="size-3" />
            Export
          </button>
        </div>
      </div>

      <div className="premium-card overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-muted/30 border-b border-border/50">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">User</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Role</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Status</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Joined</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-muted/20 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary font-bold">
                      {user.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Mail className="size-3" />
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="size-3 text-primary" />
                    {user.role}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                    user.status === 'Active' ? 'bg-success/10 text-success border border-success/20' :
                    user.status === 'Pending' ? 'bg-warning/10 text-warning border border-warning/20' :
                    'bg-muted text-muted-foreground border border-border'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  {user.joined}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors opacity-0 group-hover:opacity-100">
                    <MoreHorizontal className="size-4 text-muted-foreground" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 border-top border-border/50 bg-muted/10 text-center">
          <button className="text-sm font-medium text-primary hover:underline">Load More Users</button>
        </div>
      </div>
    </div>
  )
}
