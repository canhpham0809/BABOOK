import React, { useState } from "react";
import { vocabularyDb } from "../data/vocabulary";
import type { VocabItem } from "../data/vocabulary";
import { Volume2, RefreshCw, Star } from "lucide-react";

interface VocabularyFlashcardsProps {
  vocabStatus: Record<string, "new" | "learning" | "mastered">;
  onUpdateVocabStatus: (word: string, status: "new" | "learning" | "mastered") => void;
  customVocab: VocabItem[];
}

export const VocabularyFlashcards: React.FC<VocabularyFlashcardsProps> = ({
  vocabStatus,
  onUpdateVocabStatus,
  customVocab
}) => {
  const [activeTab, setActiveTab] = useState<"list" | "flashcard">("list");
  
  // List view search & filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  // Flashcard states
  const [deck, setDeck] = useState<VocabItem[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [deckFilter, setDeckFilter] = useState<"all" | "new" | "learning" | "mastered">("all");

  // Combine standard BA vocabulary with custom bookmarked terms
  const allVocab = [...vocabularyDb, ...customVocab];

  // Unique categories
  const categories = ["All", ...Array.from(new Set(allVocab.map((v) => v.category)))];

  // Filter word list
  const filteredVocab = allVocab.filter((item) => {
    const status = vocabStatus[item.term.toLowerCase()] || "new";
    const matchesSearch = item.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.translation.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "All" || item.category === categoryFilter;
    const matchesStatus = statusFilter === "All" || status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleSpeak = (word: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "en-US";
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Flashcard deck generation
  const startFlashcards = (filter: "all" | "new" | "learning" | "mastered") => {
    setDeckFilter(filter);
    const selectedCards = allVocab.filter((item) => {
      const status = vocabStatus[item.term.toLowerCase()] || "new";
      if (filter === "all") return true;
      return status === filter;
    });

    // Shuffle deck
    const shuffled = [...selectedCards].sort(() => 0.5 - Math.random());
    setDeck(shuffled);
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setActiveTab("flashcard");
  };

  const handleCardEval = (status: "new" | "learning" | "mastered") => {
    if (deck.length === 0) return;
    const currentCard = deck[currentCardIndex];
    onUpdateVocabStatus(currentCard.term.toLowerCase(), status);

    setIsFlipped(false);
    setTimeout(() => {
      if (currentCardIndex < deck.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1);
      } else {
        // Finished deck, reset or show done
        setCurrentCardIndex(deck.length);
      }
    }, 200);
  };

  return (
    <div className="vocab-layout">
      {/* Header and navigation */}
      <div 
        style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          borderBottom: "1px solid var(--border-color)",
          paddingBottom: "0.5rem"
        }}
      >
        <div className="vocab-tabs">
          <button 
            onClick={() => setActiveTab("list")} 
            className={`vocab-tab-btn ${activeTab === "list" ? "active" : ""}`}
          >
            Sổ tay từ vựng ({allVocab.length})
          </button>
          <button 
            onClick={() => {
              if (deck.length === 0) {
                startFlashcards("all");
              } else {
                setActiveTab("flashcard");
              }
            }} 
            className={`vocab-tab-btn ${activeTab === "flashcard" ? "active" : ""}`}
          >
            Học Thẻ Ghi Nhớ (Flashcards)
          </button>
        </div>

        {activeTab === "list" && (
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button 
              onClick={() => startFlashcards("all")}
              className="btn-primary"
              style={{ padding: "0.4rem 0.8rem", fontSize: "0.85rem" }}
            >
              Luyện tất cả
            </button>
            <button 
              onClick={() => startFlashcards("learning")}
              className="btn-secondary"
              style={{ padding: "0.4rem 0.8rem", fontSize: "0.85rem" }}
            >
              Luyện từ đang học
            </button>
          </div>
        )}
      </div>

      {/* List View Tab */}
      {activeTab === "list" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Filters toolbar */}
          <div 
            style={{ 
              display: "flex", 
              gap: "1rem", 
              flexWrap: "wrap", 
              alignItems: "center",
              backgroundColor: "var(--card-bg)",
              padding: "1rem",
              borderRadius: "12px",
              border: "1px solid var(--border-color)"
            }}
          >
            <div className="dictionary-search-box" style={{ flexGrow: 1, margin: 0 }}>
              <input
                type="text"
                placeholder="Search English word or Vietnamese definition..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-text"
              />
            </div>
            
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="input-text"
                style={{ padding: "0.5rem 1rem", borderRadius: "8px", minWidth: "120px" }}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    Chủ đề: {cat}
                  </option>
                ))}
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="input-text"
                style={{ padding: "0.5rem 1rem", borderRadius: "8px", minWidth: "120px" }}
              >
                <option value="All">Trạng thái: Tất cả</option>
                <option value="new">Từ mới (New)</option>
                <option value="learning">Đang học (Learning)</option>
                <option value="mastered">Đã thuộc (Mastered)</option>
              </select>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="vocab-card-grid">
            {filteredVocab.map((item, idx) => {
              const status = vocabStatus[item.term.toLowerCase()] || "new";
              return (
                <div key={idx} className="vocab-list-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <span style={{ fontSize: "1.2rem", fontWeight: 700, fontFamily: "var(--font-title)" }}>
                        {item.term}
                      </span>
                      <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginLeft: "0.25rem" }}>
                        ({item.type})
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
                      <button 
                        onClick={(e) => handleSpeak(item.term, e)}
                        className="text-muted hover:text-color bg-transparent border-none cursor-pointer p-1"
                        title="Phát âm"
                      >
                        <Volume2 size={16} />
                      </button>
                      <span className={`vocab-badge ${status}`}>
                        {status === "new" ? "New" : status === "learning" ? "Learning" : "Mastered"}
                      </span>
                    </div>
                  </div>

                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    {item.pronunciation} • <span className="badge-category" style={{ fontSize: "0.65rem" }}>{item.category}</span>
                  </div>

                  <div 
                    style={{ 
                      fontWeight: 600, 
                      color: "var(--primary-color)", 
                      borderLeft: "2px solid var(--accent-color)", 
                      paddingLeft: "0.5rem",
                      marginTop: "0.25rem" 
                    }}
                  >
                    {item.translation}
                  </div>

                  <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.4 }}>
                    {item.definition}
                  </div>

                  {item.example && (
                    <div 
                      style={{ 
                        fontSize: "0.8rem", 
                        fontStyle: "italic", 
                        backgroundColor: "var(--bg-color)", 
                        padding: "0.5rem", 
                        borderRadius: "4px",
                        marginTop: "0.25rem"
                      }}
                    >
                      e.g. {item.example}
                    </div>
                  )}

                  {/* Quick state toggle */}
                  <div style={{ display: "flex", gap: "0.25rem", marginTop: "0.5rem", borderTop: "1px solid var(--border-color)", paddingTop: "0.5rem" }}>
                    <button
                      onClick={() => onUpdateVocabStatus(item.term.toLowerCase(), "learning")}
                      className="btn-secondary"
                      style={{ 
                        flex: 1, 
                        padding: "0.25rem", 
                        fontSize: "0.75rem", 
                        borderRadius: "4px",
                        backgroundColor: status === "learning" ? "var(--warning-bg)" : "transparent",
                        borderColor: status === "learning" ? "var(--warning-color)" : "var(--border-color)",
                        color: status === "learning" ? "var(--warning-color)" : "var(--text-color)"
                      }}
                    >
                      Đang học
                    </button>
                    <button
                      onClick={() => onUpdateVocabStatus(item.term.toLowerCase(), "mastered")}
                      className="btn-secondary"
                      style={{ 
                        flex: 1, 
                        padding: "0.25rem", 
                        fontSize: "0.75rem", 
                        borderRadius: "4px",
                        backgroundColor: status === "mastered" ? "var(--success-bg)" : "transparent",
                        borderColor: status === "mastered" ? "var(--success-color)" : "var(--border-color)",
                        color: status === "mastered" ? "var(--success-color)" : "var(--text-color)"
                      }}
                    >
                      Thuộc ✓
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredVocab.length === 0 && (
            <div style={{ textAlign: "center", padding: "3rem", color: "var(--text-muted)" }}>
              Không tìm thấy từ vựng nào khớp với bộ lọc.
            </div>
          )}
        </div>
      )}

      {/* Flashcards View Tab */}
      {activeTab === "flashcard" && (
        <div className="flashcard-deck-container">
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
            <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>
              Tiến trình: {currentCardIndex < deck.length ? `${currentCardIndex + 1}/${deck.length}` : `${deck.length}/${deck.length}`}
            </span>
            
            <div style={{ display: "flex", gap: "0.5rem", marginLeft: "auto" }}>
              <select
                value={deckFilter}
                onChange={(e) => startFlashcards(e.target.value as any)}
                className="input-text"
                style={{ padding: "0.25rem 0.5rem", borderRadius: "6px", fontSize: "0.85rem" }}
              >
                <option value="all">Tất cả từ</option>
                <option value="new">Từ mới</option>
                <option value="learning">Từ đang học</option>
                <option value="mastered">Từ đã thuộc</option>
              </select>
              <button 
                onClick={() => startFlashcards(deckFilter)} 
                className="btn-secondary"
                style={{ padding: "0.25rem 0.5rem", display: "flex", alignItems: "center", gap: "0.25rem", borderRadius: "6px", fontSize: "0.85rem" }}
                title="Shuffle Deck"
              >
                <RefreshCw size={14} />
                <span>Trộn lại</span>
              </button>
            </div>
          </div>

          {/* Cards counter and card viewport */}
          {deck.length > 0 && currentCardIndex < deck.length ? (
            <>
              {/* Interactive 3D flip card */}
              <div 
                className={`flashcard-perspective ${isFlipped ? "flipped" : ""}`}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div className="flashcard-inner">
                  {/* Front card face */}
                  <div className="flashcard-face flashcard-front">
                    <span className="flashcard-hint">{deck[currentCardIndex].category}</span>
                    
                    <h2 style={{ fontSize: "2.4rem", fontWeight: 800, fontFamily: "var(--font-title)", marginBottom: "0.5rem" }}>
                      {deck[currentCardIndex].term}
                    </h2>
                    
                    {deck[currentCardIndex].pronunciation && (
                      <div style={{ fontSize: "1.1rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
                        <span>{deck[currentCardIndex].pronunciation}</span>
                        <button 
                          onClick={(e) => handleSpeak(deck[currentCardIndex].term, e)}
                          className="btn-secondary"
                          style={{ padding: "0.25rem", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}
                        >
                          <Volume2 size={16} />
                        </button>
                      </div>
                    )}
                    
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontStyle: "italic", border: "1px dashed var(--border-color)", padding: "0.4rem 0.8rem", borderRadius: "6px" }}>
                      Part of speech: {deck[currentCardIndex].type}
                    </div>

                    <span className="flashcard-action-hint">Chạm vào thẻ để lật xem nghĩa 🔄</span>
                  </div>

                  {/* Back card face */}
                  <div className="flashcard-face flashcard-back">
                    <span className="flashcard-hint">{deck[currentCardIndex].category} - Định nghĩa</span>
                    
                    <h3 style={{ fontSize: "1.8rem", color: "var(--primary-color)", fontWeight: 700, fontFamily: "var(--font-title)", marginBottom: "0.75rem" }}>
                      {deck[currentCardIndex].translation}
                    </h3>

                    <p style={{ fontSize: "0.95rem", lineHeight: 1.4, color: "var(--text-color)", marginBottom: "1.25rem", maxWidth: "450px" }}>
                      {deck[currentCardIndex].definition}
                    </p>

                    {deck[currentCardIndex].example && (
                      <div 
                        style={{ 
                          fontSize: "0.85rem", 
                          fontStyle: "italic", 
                          backgroundColor: "var(--bg-color)", 
                          padding: "0.75rem 1rem", 
                          borderRadius: "8px", 
                          borderLeft: "3px solid var(--accent-color)",
                          textAlign: "left",
                          width: "100%",
                          maxWidth: "450px"
                        }}
                      >
                        <strong>e.g.</strong> {deck[currentCardIndex].example}
                      </div>
                    )}

                    <span className="flashcard-action-hint">Chạm vào thẻ để lật lại mặt trước 🔄</span>
                  </div>
                </div>
              </div>

              {/* Evaluation buttons */}
              <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <div style={{ textAlign: "center", fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500 }}>
                  Bạn nhớ từ này ở mức độ nào?
                </div>
                <div className="flashcard-controls">
                  <button 
                    onClick={() => handleCardEval("learning")} 
                    className="flashcard-eval-btn btn-hard"
                  >
                    <span>Quên / Rất Khó</span>
                    <span style={{ fontSize: "0.7rem", opacity: 0.8 }}>(Đang học)</span>
                  </button>
                  
                  <button 
                    onClick={() => handleCardEval("learning")} 
                    className="flashcard-eval-btn btn-medium"
                  >
                    <span>Nhớ một chút</span>
                    <span style={{ fontSize: "0.7rem", opacity: 0.8 }}>(Đang học)</span>
                  </button>
                  
                  <button 
                    onClick={() => handleCardEval("mastered")} 
                    className="flashcard-eval-btn btn-easy"
                  >
                    <span>Thuộc Lòng ✓</span>
                    <span style={{ fontSize: "0.7rem", opacity: 0.8 }}>(Đã thuộc)</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div 
              className="dashboard-panel text-center" 
              style={{ 
                width: "100%", 
                padding: "3rem 2rem", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                gap: "1.5rem" 
              }}
            >
              <div 
                style={{ 
                  width: "80px", 
                  height: "80px", 
                  borderRadius: "50%", 
                  backgroundColor: "var(--success-bg)", 
                  color: "var(--success-color)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Star size={40} fill="currentColor" />
              </div>
              <div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Tuyệt vời! Bạn đã hoàn thành bộ thẻ!</h3>
                <p style={{ color: "var(--text-muted)" }}>
                  Bạn đã duyệt qua toàn bộ {deck.length} thẻ từ vựng trong danh sách chọn.
                </p>
              </div>
              <button 
                onClick={() => startFlashcards(deckFilter)}
                className="btn-primary"
              >
                Luyện tập lại bộ này
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
