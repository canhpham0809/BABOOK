import React, { useState, useEffect } from "react";
import { babokChapters } from "../data/babokContent";
import { TranslateTooltip } from "./TranslateTooltip";
import { 
  BookOpen, 
  BookOpenCheck, 
  Columns, 
  Maximize2, 
  Minimize2, 
  ChevronRight, 
  Lightbulb 
} from "lucide-react";

interface StudyGuideProps {
  activeChapterId: string | null;
  readChapters: string[];
  onMarkRead: (chapterId: string) => void;
  onAddToVocab: (word: string, translation: string, definition: string) => void;
  bookmarkedWords: string[];
}

export const StudyGuide: React.FC<StudyGuideProps> = ({
  activeChapterId,
  readChapters,
  onMarkRead,
  onAddToVocab,
  bookmarkedWords
}) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>("ch1");
  const [splitMode, setSplitMode] = useState<"split" | "text" | "pdf">("split");
  const [tooltipState, setTooltipState] = useState<{
    word: string;
    x: number;
    y: number;
  } | null>(null);

  // Sync with activeChapterId from navigation if any
  useEffect(() => {
    if (activeChapterId) {
      setSelectedChapterId(activeChapterId);
    }
  }, [activeChapterId]);

  const selectedChapter = babokChapters.find(ch => ch.id === selectedChapterId) || babokChapters[0];

  const handleWordClick = (word: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Clean word from punctuation for checking
    const clean = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "").trim();
    if (!clean) return;

    setTooltipState({
      word: clean,
      x: e.clientX,
      y: e.clientY
    });
  };

  const renderInteractiveText = (text: string) => {
    const paragraphs = text.split("\n\n");
    return paragraphs.map((para, paraIdx) => {
      const words = para.split(" ");
      return (
        <p key={paraIdx} className="mb-4">
          {words.map((word, wordIdx) => (
            <span
              key={wordIdx}
              className="interactive-word"
              onClick={(e) => handleWordClick(word, e)}
            >
              {word}{" "}
            </span>
          ))}
        </p>
      );
    });
  };

  const isCurrentChapterRead = readChapters.includes(selectedChapter.id);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: "1.5rem" }}>
      {/* Chapter Selector & Actions Toolbar */}
      <div 
        style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <BookOpen className="text-gradient" size={24} />
          <select
            value={selectedChapterId}
            onChange={(e) => setSelectedChapterId(e.target.value)}
            className="input-text"
            style={{ 
              fontWeight: 600, 
              fontSize: "1.1rem", 
              padding: "0.5rem 1.5rem 0.5rem 1rem", 
              borderRadius: "8px", 
              border: "1px solid var(--border-color)",
              minWidth: "260px"
            }}
          >
            {babokChapters.map((ch) => (
              <option key={ch.id} value={ch.id}>
                {ch.title}
              </option>
            ))}
          </select>
        </div>

        {/* View Mode controls */}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            onClick={() => setSplitMode("text")}
            className={`btn-secondary ${splitMode === "text" ? "active" : ""}`}
            style={{ 
              padding: "0.5rem", 
              borderRadius: "8px", 
              display: "flex", 
              alignItems: "center", 
              backgroundColor: splitMode === "text" ? "var(--primary-light)" : "transparent",
              borderColor: splitMode === "text" ? "var(--primary-color)" : "var(--border-color)",
              color: splitMode === "text" ? "var(--primary-color)" : "var(--text-color)"
            }}
            title="Show Text Study Only"
          >
            <Minimize2 size={18} />
          </button>
          <button
            onClick={() => setSplitMode("split")}
            className={`btn-secondary ${splitMode === "split" ? "active" : ""}`}
            style={{ 
              padding: "0.5rem", 
              borderRadius: "8px", 
              display: "flex", 
              alignItems: "center",
              backgroundColor: splitMode === "split" ? "var(--primary-light)" : "transparent",
              borderColor: splitMode === "split" ? "var(--primary-color)" : "var(--border-color)",
              color: splitMode === "split" ? "var(--primary-color)" : "var(--text-color)"
            }}
            title="Split Screen Layout"
          >
            <Columns size={18} />
          </button>
          <button
            onClick={() => setSplitMode("pdf")}
            className={`btn-secondary ${splitMode === "pdf" ? "active" : ""}`}
            style={{ 
              padding: "0.5rem", 
              borderRadius: "8px", 
              display: "flex", 
              alignItems: "center",
              backgroundColor: splitMode === "pdf" ? "var(--primary-light)" : "transparent",
              borderColor: splitMode === "pdf" ? "var(--primary-color)" : "var(--border-color)",
              color: splitMode === "pdf" ? "var(--primary-color)" : "var(--text-color)"
            }}
            title="Show PDF Only"
          >
            <Maximize2 size={18} />
          </button>
        </div>
      </div>

      {/* Main Study Viewport */}
      <div className="study-viewport">
        {/* Left pane: Summarized English text with interactive translations */}
        {(splitMode === "split" || splitMode === "text") && (
          <div className="study-left-pane">
            <div className="study-pane-header">
              <div>
                <span className="badge-chapter">{selectedChapter.id.toUpperCase()}</span>
                <h2 style={{ fontSize: "1.2rem", marginTop: "0.25rem" }}>
                  {selectedChapter.vietnameseTitle}
                </h2>
              </div>
              
              <button
                onClick={() => onMarkRead(selectedChapter.id)}
                className="btn-primary"
                style={{ 
                  padding: "0.4rem 0.8rem", 
                  fontSize: "0.85rem",
                  backgroundColor: isCurrentChapterRead ? "var(--success-color)" : "var(--primary-color)"
                }}
              >
                <BookOpenCheck size={16} />
                <span>{isCurrentChapterRead ? "Đã học ✓" : "Đánh dấu Đã học"}</span>
              </button>
            </div>
            
            <div className="study-pane-scroll" onClick={() => setTooltipState(null)}>
              <div 
                style={{ 
                  padding: "0.75rem 1rem", 
                  backgroundColor: "var(--primary-light)", 
                  color: "var(--primary-color)", 
                  fontSize: "0.85rem", 
                  borderRadius: "8px", 
                  fontWeight: 600,
                  marginBottom: "1.5rem"
                }}
              >
                💡 Mẹo: Nhấp vào bất kỳ từ tiếng Anh nào bên dưới để dịch sang tiếng Việt và lưu từ vựng!
              </div>

              {selectedChapter.sections.map((sect) => (
                <div key={sect.id} style={{ marginBottom: "2rem" }}>
                  <h3 
                    style={{ 
                      fontSize: "1.1rem", 
                      borderBottom: "1px solid var(--border-color)", 
                      paddingBottom: "0.5rem",
                      marginBottom: "1rem",
                      color: "var(--primary-color)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem"
                    }}
                  >
                    <ChevronRight size={18} />
                    <span>{sect.title}</span>
                  </h3>
                  
                  <div className="study-text-container">
                    {renderInteractiveText(sect.content)}
                  </div>

                  {/* BACCM Card Grid */}
                  {sect.baccm && (
                    <div className="baccm-grid">
                      {sect.baccm.map((concept, index) => (
                        <div key={index} className="baccm-card">
                          <div className="baccm-card-title">{concept.name}</div>
                          <div className="baccm-card-desc">{concept.desc}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Input-Output Flowchart */}
                  {(sect.inputs || sect.outputs) && (
                    <div className="io-flowchart">
                      {sect.inputs && sect.inputs.length > 0 && (
                        <div className="io-pane io-inputs">
                          <h4>Inputs</h4>
                          {sect.inputs.map((inp, idx) => (
                            <div key={idx} className="io-box input-box">{inp}</div>
                          ))}
                        </div>
                      )}
                      
                      {sect.inputs && sect.inputs.length > 0 && <div className="io-arrow">➔</div>}
                      
                      <div className="io-pane io-task">
                        <h4>Nhiệm vụ (Task)</h4>
                        <div className="io-task-box">{sect.title.split(" ").slice(1).join(" ")}</div>
                      </div>
                      
                      {sect.outputs && sect.outputs.length > 0 && <div className="io-arrow">➔</div>}
                      
                      {sect.outputs && sect.outputs.length > 0 && (
                        <div className="io-pane io-outputs">
                          <h4>Outputs</h4>
                          {sect.outputs.map((out, idx) => (
                            <div key={idx} className="io-box output-box">{out}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Key Elements Checklist */}
                  {sect.elements && (
                    <div className="elements-container">
                      <h4>Các thành phần trọng tâm (Key Elements)</h4>
                      <div className="elements-grid">
                        {sect.elements.map((el, idx) => (
                          <div key={idx} className="element-item">
                            <strong>{el.name}</strong>: {el.desc}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Real World Example Case Study */}
                  {sect.realWorldExample && (
                    <div className="example-container">
                      <div className="example-header">
                        💼 Ví dụ thực tế (Business Analyst Case Study)
                      </div>
                      <div className="example-body">
                        <strong>Tình huống:</strong> {sect.realWorldExample.scenario}
                        <p style={{ marginTop: "0.5rem" }}>{sect.realWorldExample.details}</p>
                      </div>
                    </div>
                  )}

                  {sect.keyTakeaways.length > 0 && (
                    <div className="takeaway-box">
                      <div className="takeaway-title">
                        <Lightbulb size={16} />
                        <span>Key Takeaways (Trọng tâm ghi nhớ)</span>
                      </div>
                      <ul className="takeaway-list">
                        {sect.keyTakeaways.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Right pane: Embedded PDF reader */}
        {(splitMode === "split" || splitMode === "pdf") && (
          <div className="study-right-pane">
            <div className="study-pane-header">
              <span style={{ fontWeight: 600 }}>Tài liệu BABOK Guide v3 gốc</span>
              <span className="badge-category" style={{ backgroundColor: "var(--accent-light)", color: "var(--accent-color)" }}>PDF</span>
            </div>
            <div style={{ flexGrow: 1, backgroundColor: "var(--border-color)", position: "relative" }}>
              <iframe
                src="/BABOK_Guide_v3_Member.pdf#toolbar=1"
                width="100%"
                height="100%"
                title="BABOK Guide v3 PDF"
                style={{ border: "none" }}
              ></iframe>
            </div>
          </div>
        )}
      </div>

      {/* Floating translate tooltip portals */}
      {tooltipState && (
        <TranslateTooltip
          word={tooltipState.word}
          x={tooltipState.x}
          y={tooltipState.y}
          onClose={() => setTooltipState(null)}
          onAddToVocab={onAddToVocab}
          isBookmarked={bookmarkedWords.includes(tooltipState.word.toLowerCase())}
        />
      )}
    </div>
  );
};
