import React from "react";
import { 
  LayoutDashboard, 
  BookOpen, 
  Layers, 
  GraduationCap, 
  Search, 
  Sun, 
  Moon, 
  Flame
} from "lucide-react";

interface SidebarProps {
  currentTab: string;
  setTab: (tab: string) => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
  streak: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  setTab,
  theme,
  toggleTheme,
  streak
}) => {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "study", label: "BABOK Study Guide", icon: BookOpen },
    { id: "vocabulary", label: "Vocabulary Decks", icon: Layers },
    { id: "quiz", label: "Practice & Quizzes", icon: GraduationCap },
    { id: "dictionary", label: "BA Dictionary", icon: Search }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-logo">B</div>
        <div className="sidebar-title">BABOOK Study</div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`sidebar-item ${currentTab === item.id ? "active" : ""}`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div 
          className="flex items-center gap-2 px-3 py-2 rounded-md bg-warning-bg" 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "0.5rem", 
            padding: "0.5rem 0.75rem", 
            borderRadius: "6px",
            backgroundColor: "var(--warning-bg)",
            color: "var(--warning-color)",
            fontWeight: 600,
            fontSize: "0.9rem"
          }}
          title="Daily Study Streak"
        >
          <Flame size={18} fill="currentColor" />
          <span>{streak} Day Streak</span>
        </div>

        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === "light" ? (
            <>
              <Moon size={18} />
              <span>Dark Mode</span>
            </>
          ) : (
            <>
              <Sun size={18} />
              <span>Light Mode</span>
            </>
          )}
        </button>

        <div className="text-center" style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
          BABOK Guide v3 Helper
        </div>
      </div>
    </aside>
  );
};
