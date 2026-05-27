import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./components/Dashboard";
import { StudyGuide } from "./components/StudyGuide";
import { VocabularyFlashcards } from "./components/VocabularyFlashcards";
import { PracticeQuiz } from "./components/PracticeQuiz";
import { Dictionary } from "./components/Dictionary";
import type { VocabItem } from "./data/vocabulary";

function App() {
  // Navigation
  const [currentTab, setCurrentTab] = useState<string>("dashboard");
  const [activeStudyChapterId, setActiveStudyChapterId] = useState<string | null>(null);

  // Core user states with localStorage fallback
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme");
    return (saved as "light" | "dark") || "dark"; // Default to dark theme for premium aesthetics
  });

  const [readChapters, setReadChapters] = useState<string[]>(() => {
    const saved = localStorage.getItem("readChapters");
    return saved ? JSON.parse(saved) : [];
  });

  const [quizScores, setQuizScores] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem("quizScores");
    return saved ? JSON.parse(saved) : {};
  });

  const [vocabStatus, setVocabStatus] = useState<Record<string, "new" | "learning" | "mastered">>(() => {
    const saved = localStorage.getItem("vocabStatus");
    return saved ? JSON.parse(saved) : {};
  });

  const [customVocab, setCustomVocab] = useState<VocabItem[]>(() => {
    const saved = localStorage.getItem("customVocab");
    return saved ? JSON.parse(saved) : [];
  });

  const [streak, setStreak] = useState<number>(() => {
    const saved = localStorage.getItem("streak");
    return saved ? parseInt(saved, 10) : 1;
  });

  // Theme effect
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem("readChapters", JSON.stringify(readChapters));
  }, [readChapters]);

  useEffect(() => {
    localStorage.setItem("quizScores", JSON.stringify(quizScores));
  }, [quizScores]);

  useEffect(() => {
    localStorage.setItem("vocabStatus", JSON.stringify(vocabStatus));
  }, [vocabStatus]);

  useEffect(() => {
    localStorage.setItem("customVocab", JSON.stringify(customVocab));
  }, [customVocab]);

  useEffect(() => {
    localStorage.setItem("streak", streak.toString());
  }, [streak]);

  // Streak update logic
  const recordActivity = () => {
    const today = new Date().toDateString();
    const lastDate = localStorage.getItem("lastStudyDate");

    if (lastDate !== today) {
      if (lastDate) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastDate === yesterday.toDateString()) {
          // Increment streak
          setStreak(prev => prev + 1);
        } else {
          // Reset streak to 1
          setStreak(1);
        }
      } else {
        setStreak(1);
      }
      localStorage.setItem("lastStudyDate", today);
    }
  };

  const handleMarkChapterRead = (chapterId: string) => {
    recordActivity();
    setReadChapters((prev) => {
      if (prev.includes(chapterId)) {
        return prev.filter((id) => id !== chapterId); // Toggle read status
      } else {
        return [...prev, chapterId];
      }
    });
  };

  const handleSaveQuizScore = (chapterId: string, scorePercent: number) => {
    recordActivity();
    setQuizScores((prev) => {
      const highest = prev[chapterId] || 0;
      if (scorePercent > highest) {
        return { ...prev, [chapterId]: scorePercent };
      }
      return prev;
    });
  };

  const handleUpdateVocabStatus = (word: string, status: "new" | "learning" | "mastered") => {
    recordActivity();
    setVocabStatus((prev) => ({
      ...prev,
      [word.toLowerCase()]: status
    }));
  };

  const handleAddToVocab = (word: string, translation: string, definition: string) => {
    recordActivity();
    const wordKey = word.toLowerCase();
    
    // Check if word is already in customVocab
    if (customVocab.some((item) => item.term.toLowerCase() === wordKey)) return;

    const newItem: VocabItem = {
      term: word,
      type: "word",
      pronunciation: "",
      definition: definition || "Click to lookup details",
      translation: translation || "Chưa có bản dịch",
      example: "",
      category: "General"
    };

    setCustomVocab((prev) => [...prev, newItem]);
    setVocabStatus((prev) => ({ ...prev, [wordKey]: "learning" }));
  };

  const handleRemoveVocab = (word: string) => {
    const wordKey = word.toLowerCase();
    setCustomVocab((prev) => prev.filter((item) => item.term.toLowerCase() !== wordKey));
    setVocabStatus((prev) => {
      const copy = { ...prev };
      delete copy[wordKey];
      return copy;
    });
  };

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleDashboardNavigate = (tab: string, chapterId?: string) => {
    if (chapterId) {
      setActiveStudyChapterId(chapterId);
    } else {
      setActiveStudyChapterId(null);
    }
    setCurrentTab(tab);
  };

  // Selectable bookmarked word terms helper
  const bookmarkedWords = customVocab.map((item) => item.term.toLowerCase());

  // Render content depending on active Tab
  const renderTabContent = () => {
    switch (currentTab) {
      case "dashboard":
        return (
          <Dashboard
            readChapters={readChapters}
            quizScores={quizScores}
            vocabStatus={vocabStatus}
            onNavigate={handleDashboardNavigate}
            streak={streak}
          />
        );
      case "study":
        return (
          <StudyGuide
            activeChapterId={activeStudyChapterId}
            readChapters={readChapters}
            onMarkRead={handleMarkChapterRead}
            onAddToVocab={handleAddToVocab}
            bookmarkedWords={bookmarkedWords}
          />
        );
      case "vocabulary":
        return (
          <VocabularyFlashcards
            vocabStatus={vocabStatus}
            onUpdateVocabStatus={handleUpdateVocabStatus}
            customVocab={customVocab}
          />
        );
      case "quiz":
        return (
          <PracticeQuiz
            quizScores={quizScores}
            onSaveScore={handleSaveQuizScore}
            onNavigate={handleDashboardNavigate}
          />
        );
      case "dictionary":
        return (
          <Dictionary
            customVocab={customVocab}
            onAddToVocab={handleAddToVocab}
            onRemoveVocab={handleRemoveVocab}
            bookmarkedWords={bookmarkedWords}
          />
        );
      default:
        return (
          <Dashboard
            readChapters={readChapters}
            quizScores={quizScores}
            vocabStatus={vocabStatus}
            onNavigate={handleDashboardNavigate}
            streak={streak}
          />
        );
    }
  };

  return (
    <div className="app-layout">
      <Sidebar
        currentTab={currentTab}
        setTab={(tab) => {
          setActiveStudyChapterId(null);
          setCurrentTab(tab);
        }}
        theme={theme}
        toggleTheme={handleThemeToggle}
        streak={streak}
      />
      <main className="main-content">
        {renderTabContent()}
      </main>
    </div>
  );
}

export default App;
