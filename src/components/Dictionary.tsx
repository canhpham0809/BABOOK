import React, { useState } from "react";
import { lookupWord } from "../utils/dictionaryHelper";
import { Search, Volume2, Plus, Trash2, History, Star, HelpCircle } from "lucide-react";
import type { VocabItem } from "../data/vocabulary";

interface DictionaryProps {
  customVocab: VocabItem[];
  onAddToVocab: (word: string, translation: string, definition: string) => void;
  onRemoveVocab: (word: string) => void;
  bookmarkedWords: string[];
}

export const Dictionary: React.FC<DictionaryProps> = ({
  customVocab,
  onAddToVocab,
  onRemoveVocab,
  bookmarkedWords
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeWord, setActiveWord] = useState<string>("elicitation");
  const [history, setHistory] = useState<string[]>(["elicitation", "stakeholder", "feasibility", "baseline"]);
  
  // Online API status states
  const [apiResult, setApiResult] = useState<{
    phonetic?: string;
    definition?: string;
    partOfSpeech?: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    triggerLookup(query);
  };

  const triggerLookup = async (word: string) => {
    setActiveWord(word);
    
    // Add to history
    setHistory((prev) => {
      const filtered = prev.filter((item) => item !== word);
      return [word, ...filtered].slice(0, 10); // Keep last 10 entries
    });

    // Check if it's in our local dictionary/vocabulary database
    const local = lookupWord(word);
    
    // If not found locally, try fetching from the free dictionary API
    if (local.definition && !local.definition.includes("loaded dynamically")) {
      setApiResult(null);
    } else {
      setLoading(true);
      setApiResult(null);
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (response.ok) {
          const data = await response.json();
          const firstEntry = data[0];
          const phonetic = firstEntry.phonetic || (firstEntry.phonetics && firstEntry.phonetics[0]?.text) || "";
          
          // Get first meaning
          const meaning = firstEntry.meanings[0];
          const partOfSpeech = meaning?.partOfSpeech || "word";
          const definition = meaning?.definitions[0]?.definition || "No definition found.";
          
          setApiResult({
            phonetic,
            definition,
            partOfSpeech
          });
        } else {
          setApiResult({
            definition: "Không tìm thấy định nghĩa trực tuyến. Vui lòng kiểm tra kết nối mạng hoặc từ chính tả."
          });
        }
      } catch (err) {
        setApiResult({
          definition: "Lỗi kết nối mạng. Không thể tải định nghĩa trực tuyến."
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSpeak = (word: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "en-US";
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Get active word details
  const localInfo = lookupWord(activeWord);
  const isBookmarked = bookmarkedWords.includes(activeWord.toLowerCase());

  // Render definition card contents
  const renderDefinition = () => {
    if (loading) {
      return (
        <div style={{ textAlign: "center", padding: "3rem", color: "var(--text-muted)" }}>
          Đang tải định nghĩa trực tuyến...
        </div>
      );
    }

    const definitionText = apiResult ? apiResult.definition : localInfo.definition;
    const partOfSpeech = apiResult ? apiResult.partOfSpeech : localInfo.type;
    const phonetic = apiResult ? apiResult.phonetic : localInfo.pronunciation;
    const translation = localInfo.translation && !localInfo.translation.includes(`Từ: "${activeWord}"`) 
      ? localInfo.translation 
      : null;

    return (
      <div className="dashboard-panel" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, fontFamily: "var(--font-title)" }}>
              {activeWord}
            </h2>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginTop: "0.25rem" }}>
              {partOfSpeech && <span className="translate-type">({partOfSpeech})</span>}
              {phonetic && <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{phonetic}</span>}
              <button 
                onClick={() => handleSpeak(activeWord)}
                className="btn-secondary"
                style={{ padding: "0.25rem", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <Volume2 size={16} />
              </button>
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            {isBookmarked ? (
              <button
                onClick={() => onRemoveVocab(activeWord.toLowerCase())}
                className="btn-secondary"
                style={{ 
                  color: "var(--error-color)", 
                  borderColor: "var(--error-color)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  padding: "0.5rem 0.75rem"
                }}
              >
                <Trash2 size={16} />
                <span>Bỏ lưu thẻ</span>
              </button>
            ) : (
              <button
                onClick={() => onAddToVocab(
                  activeWord, 
                  translation || `Từ: "${activeWord}"`, 
                  definitionText || ""
                )}
                className="btn-primary"
                style={{ display: "flex", alignItems: "center", gap: "0.25rem", padding: "0.5rem 0.75rem" }}
              >
                <Plus size={16} />
                <span>Lưu vào thẻ học</span>
              </button>
            )}
          </div>
        </div>

        {/* Translation Block */}
        <div 
          style={{ 
            backgroundColor: "var(--primary-light)", 
            borderLeft: "4px solid var(--primary-color)", 
            padding: "1rem 1.25rem",
            borderRadius: "0 8px 8px 0"
          }}
        >
          <div style={{ fontSize: "0.85rem", textTransform: "uppercase", fontWeight: 700, color: "var(--primary-color)", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>
            Nghĩa tiếng Việt
          </div>
          <div style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-color)" }}>
            {translation || "Chưa có bản dịch sẵn (Nhấp lưu thẻ để tự bổ sung)"}
          </div>
        </div>

        {/* Definition Block */}
        <div>
          <h3 style={{ fontSize: "1.1rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem", marginBottom: "0.75rem" }}>
            English Definition
          </h3>
          <p style={{ lineHeight: 1.6, color: "var(--text-color)" }}>
            {definitionText}
          </p>
        </div>

        {/* Example Block */}
        {localInfo.example && (
          <div>
            <h3 style={{ fontSize: "1.1rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem", marginBottom: "0.75rem" }}>
              Ví dụ ngữ cảnh Business Analyst
            </h3>
            <div 
              style={{ 
                backgroundColor: "var(--bg-color)", 
                padding: "1rem", 
                borderRadius: "8px", 
                fontStyle: "italic",
                borderLeft: "3px solid var(--accent-color)" 
              }}
            >
              {localInfo.example}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Từ điển Phân tích nghiệp vụ (BA Dictionary)</h1>
        <p style={{ color: "var(--text-muted)" }}>
          Search for BA terminology or look up general English words to find definitions, translations, and examples.
        </p>
      </div>

      <div className="dictionary-grid">
        {/* Left pane: Search, history, saved words */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Search Form */}
          <form onSubmit={handleSearchSubmit} className="dictionary-search-box">
            <input
              type="text"
              placeholder="Nhập từ cần tra cứu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-text"
            />
            <button type="submit" className="btn-primary">
              <Search size={18} />
              <span>Tra cứu</span>
            </button>
          </form>

          {/* Search History */}
          <div className="dashboard-panel" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 className="dashboard-panel-title" style={{ fontSize: "1rem" }}>
              <History size={16} />
              <span>Lịch sử tra cứu</span>
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {history.map((word) => (
                <div 
                  key={word} 
                  className={`history-item ${activeWord === word ? "active" : ""}`}
                  onClick={() => triggerLookup(word)}
                  style={{ 
                    backgroundColor: activeWord === word ? "var(--primary-light)" : "transparent",
                    color: activeWord === word ? "var(--primary-color)" : "var(--text-color)"
                  }}
                >
                  <span style={{ textTransform: "capitalize", fontWeight: 500 }}>{word}</span>
                </div>
              ))}
              {history.length === 0 && (
                <div style={{ textAlign: "center", padding: "1rem", color: "var(--text-muted)", fontSize: "0.85rem" }}>
                  Chưa có lịch sử tra cứu.
                </div>
              )}
            </div>
          </div>

          {/* Saved Words */}
          <div className="dashboard-panel" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 className="dashboard-panel-title" style={{ fontSize: "1rem" }}>
              <Star size={16} />
              <span>Từ vựng đã lưu ({customVocab.length})</span>
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", maxHeight: "250px", overflowY: "auto" }}>
              {customVocab.map((item) => (
                <div 
                  key={item.term} 
                  className={`history-item ${activeWord === item.term.toLowerCase() ? "active" : ""}`}
                  onClick={() => triggerLookup(item.term.toLowerCase())}
                  style={{ 
                    backgroundColor: activeWord === item.term.toLowerCase() ? "var(--primary-light)" : "transparent",
                    color: activeWord === item.term.toLowerCase() ? "var(--primary-color)" : "var(--text-color)"
                  }}
                >
                  <span style={{ fontWeight: 500 }}>{item.term}</span>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{item.translation}</span>
                </div>
              ))}
              {customVocab.length === 0 && (
                <div style={{ textAlign: "center", padding: "1rem", color: "var(--text-muted)", fontSize: "0.85rem" }}>
                  Chưa có từ vựng nào được lưu.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right pane: Definition card */}
        <div>
          {activeWord ? (
            renderDefinition()
          ) : (
            <div 
              className="dashboard-panel text-center" 
              style={{ 
                padding: "4rem 2rem", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                justifyContent: "center", 
                gap: "1rem",
                color: "var(--text-muted)"
              }}
            >
              <HelpCircle size={48} />
              <p>Chọn một từ từ danh sách lịch sử, từ đã lưu, hoặc tìm kiếm một từ mới ở khung bên trái để xem định nghĩa chi tiết.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
