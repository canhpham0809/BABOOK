import React from "react";
import { babokChapters } from "../data/babokContent";
import { vocabularyDb } from "../data/vocabulary";
import { 
  BookOpen, 
  GraduationCap, 
  Layers, 
  Flame, 
  CheckCircle,
  Play
} from "lucide-react";

interface DashboardProps {
  readChapters: string[];
  quizScores: Record<string, number>;
  vocabStatus: Record<string, "new" | "learning" | "mastered">;
  onNavigate: (tab: string, arg?: any) => void;
  streak: number;
}

export const Dashboard: React.FC<DashboardProps> = ({
  readChapters,
  quizScores,
  vocabStatus,
  onNavigate,
  streak
}) => {
  const totalChapters = babokChapters.length;
  const readCount = readChapters.length;
  const readPercentage = Math.round((readCount / totalChapters) * 100);

  // Calculate average quiz score
  const quizValues = Object.values(quizScores);
  const avgQuizScore = quizValues.length > 0 
    ? Math.round(quizValues.reduce((sum, score) => sum + score, 0) / quizValues.length)
    : 0;

  // Calculate vocabulary statuses
  const vocabItems = vocabularyDb;
  const totalVocab = vocabItems.length;
  let learningCount = 0;
  let masteredCount = 0;

  vocabItems.forEach(item => {
    const status = vocabStatus[item.term] || "new";
    if (status === "learning") learningCount++;
    if (status === "mastered") masteredCount++;
  });

  const nextChapter = babokChapters.find(ch => !readChapters.includes(ch.id)) || babokChapters[0];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h1 style={{ fontSize: "2.2rem", marginBottom: "0.5rem" }}>
          Chào mừng trở lại, <span className="text-gradient">Business Analyst</span>!
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
          Track your progress, study core BABOK Guide v3 concepts, and practice multiple-choice exams.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="dashboard-grid">
        <div className="stat-card">
          <div className="stat-icon-wrapper primary">
            <BookOpen size={24} />
          </div>
          <div>
            <div className="stat-value">{readCount}/{totalChapters}</div>
            <div className="stat-label">Chapters Read ({readPercentage}%)</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper accent">
            <Layers size={24} />
          </div>
          <div>
            <div className="stat-value">{masteredCount}/{totalVocab}</div>
            <div className="stat-label">Vocab Mastered</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper success">
            <GraduationCap size={24} />
          </div>
          <div>
            <div className="stat-value">{avgQuizScore}%</div>
            <div className="stat-label">Avg Quiz Score ({quizValues.length} Taken)</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper warning">
            <Flame size={24} />
          </div>
          <div>
            <div className="stat-value">{streak} Days</div>
            <div className="stat-label">Daily Study Streak</div>
          </div>
        </div>
      </div>

      {/* Main Panel grid */}
      <div className="dashboard-details">
        <div className="dashboard-panel" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div className="dashboard-panel-header">
            <h2 className="dashboard-panel-title">
              <BookOpen size={20} className="text-gradient" />
              <span>Chương trình học BABOK Guide v3</span>
            </h2>
          </div>

          <div className="progress-section" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, fontSize: "0.9rem" }}>
              <span>Tiến độ đọc tài liệu</span>
              <span>{readPercentage}% Hoàn thành</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: `${readPercentage}%` }}></div>
            </div>
          </div>

          <div 
            style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "0.75rem",
              maxHeight: "380px",
              overflowY: "auto",
              paddingRight: "0.5rem"
            }}
          >
            {babokChapters.map((chapter) => {
              const isRead = readChapters.includes(chapter.id);
              const score = quizScores[chapter.id];
              return (
                <div 
                  key={chapter.id}
                  style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    padding: "0.75rem 1rem",
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    backgroundColor: "var(--bg-color)"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    {isRead ? (
                      <CheckCircle size={18} style={{ color: "var(--success-color)" }} />
                    ) : (
                      <div style={{ width: 18, height: 18, borderRadius: "50%", border: "2px solid var(--text-muted)" }}></div>
                    )}
                    <span style={{ fontWeight: 500, fontSize: "0.95rem" }}>{chapter.title}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    {score !== undefined && (
                      <span className="badge-category" style={{ backgroundColor: "var(--success-bg)", color: "var(--success-color)" }}>
                        Quiz: {score}%
                      </span>
                    )}
                    <button 
                      onClick={() => onNavigate("study", chapter.id)}
                      className="btn-secondary"
                      style={{ padding: "0.25rem 0.75rem", fontSize: "0.8rem" }}
                    >
                      Học ngay
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Quick Study Card */}
          <div 
            className="dashboard-panel" 
            style={{ 
              background: "linear-gradient(135deg, var(--primary-color), var(--accent-color))",
              color: "white",
              display: "flex", 
              flexDirection: "column", 
              gap: "1rem" 
            }}
          >
            <div style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", opacity: 0.8, fontWeight: 700 }}>
              Học tiếp theo
            </div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>{nextChapter.title}</h3>
            <p style={{ fontSize: "0.9rem", opacity: 0.9, lineHeight: 1.4 }}>
              {nextChapter.description}
            </p>
            <button 
              onClick={() => onNavigate("study", nextChapter.id)}
              className="btn-primary"
              style={{ 
                backgroundColor: "white", 
                color: "var(--primary-color)", 
                alignSelf: "flex-start",
                padding: "0.5rem 1rem",
                marginTop: "0.5rem"
              }}
            >
              <Play size={16} fill="currentColor" />
              <span>Tiếp tục học</span>
            </button>
          </div>

          {/* Vocab Status Panel */}
          <div className="dashboard-panel" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 className="dashboard-panel-title">
              <Layers size={18} className="text-gradient" />
              <span>Thống kê từ vựng</span>
            </h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)" }}>Đã thuộc (Mastered)</span>
                <span style={{ fontWeight: 600 }}>{masteredCount}</span>
              </div>
              <div className="progress-bar-container" style={{ height: "6px" }}>
                <div 
                  className="progress-bar-fill progress-bar-success" 
                  style={{ width: `${totalVocab > 0 ? (masteredCount / totalVocab) * 100 : 0}%` }}
                ></div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)" }}>Đang học (Learning)</span>
                <span style={{ fontWeight: 600 }}>{learningCount}</span>
              </div>
              <div className="progress-bar-container" style={{ height: "6px" }}>
                <div 
                  className="progress-bar-fill" 
                  style={{ 
                    width: `${totalVocab > 0 ? (learningCount / totalVocab) * 100 : 0}%`,
                    background: "var(--warning-color)"
                  }}
                ></div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)" }}>Chưa học (Not Started)</span>
                <span style={{ fontWeight: 600 }}>{totalVocab - learningCount - masteredCount}</span>
              </div>
              <div className="progress-bar-container" style={{ height: "6px" }}>
                <div 
                  className="progress-bar-fill" 
                  style={{ 
                    width: `${totalVocab > 0 ? ((totalVocab - learningCount - masteredCount) / totalVocab) * 100 : 0}%`,
                    background: "var(--border-color)"
                  }}
                ></div>
              </div>
            </div>

            <button 
              onClick={() => onNavigate("vocabulary")}
              className="btn-secondary"
              style={{ width: "100%", textAlign: "center", padding: "0.5rem" }}
            >
              Học Flashcard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
