import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  Globe, 
  Palette, 
  Key, 
  Database,
  Save,
  Trash2
} from "lucide-react"

export default function SettingsPage() {
  const sections = [
    {
      id: "profile",
      title: "Admin Profile",
      icon: User,
      desc: "Manage your account details and public information."
    },
    {
      id: "security",
      title: "Password & Security",
      icon: Shield,
      desc: "Update your password and enable two-factor authentication."
    },
    {
      id: "notifications",
      title: "Notification System",
      icon: Bell,
      desc: "Configure how you receive platform alerts and user feedback."
    },
    {
      id: "appearance",
      title: "Internal Dashboard Appearance",
      icon: Palette,
      desc: "Customize the admin interface colors and density."
    },
    {
      id: "api",
      title: "API Keys & Integrations",
      icon: Key,
      desc: "Manage external service connections and access tokens."
    },
    {
      id: "backup",
      title: "Database & Backups",
      icon: Database,
      desc: "Monitor system health and manually trigger data snapshots."
    },
  ]

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
        <p className="text-muted-foreground text-lg">Configure your admin environment and manage global platform parameters.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* Navigation Sidebar */}
        <div className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all group ${
                section.id === 'profile' 
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
                  : 'hover:bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              <section.icon className={`size-4 ${section.id === 'profile' ? '' : 'text-muted-foreground/60 group-hover:text-primary'}`} />
              {section.title}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="space-y-8">
          {/* Account Section */}
          <div className="premium-card p-8 space-y-8">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold">Admin Profile</h3>
                <p className="text-sm text-muted-foreground mt-1">This information is only visible to other system administrators.</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="mac-button-secondary text-xs px-4 py-2">Discard</button>
                <button className="mac-button-primary flex items-center gap-2 text-xs px-4 py-2">
                  <Save className="size-3" />
                  Save Changes
                </button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                <input 
                  type="text" 
                  defaultValue="Arjun Bhandari" 
                  className="w-full bg-muted/30 border border-border/50 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                <input 
                  type="email" 
                  defaultValue="arjun@gpsmanipur.com" 
                  className="w-full bg-muted/30 border border-border/50 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Bio / Role Description</label>
                <textarea 
                  rows={3}
                  defaultValue="Senior Administrator responsible for content strategy and technical oversight of the GPS Manipur learning platform."
                  className="w-full bg-muted/30 border border-border/50 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-border/50">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-bold">Public Profile Status</p>
                  <p className="text-xs text-muted-foreground">Make your profile details visible to students in help articles.</p>
                </div>
                <div className="w-12 h-6 bg-primary rounded-full relative flex items-center px-1 cursor-pointer">
                  <div className="size-4 bg-white rounded-full ml-auto shadow-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="premium-card p-8 border-destructive/20 bg-destructive/5">
            <h3 className="text-lg font-bold text-destructive flex items-center gap-2 mb-4">
              <Trash2 className="size-5" />
              Danger Zone
            </h3>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-sm font-bold">Deactivate Admin Account</p>
                <p className="text-xs text-muted-foreground">Once deactivated, you will lose all access to the admin command center.</p>
              </div>
              <button className="bg-destructive text-destructive-foreground px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-destructive/90 transition-all shadow-lg shadow-destructive/20">
                Deactivate Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
