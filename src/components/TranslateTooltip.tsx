import React, { useEffect, useRef } from "react";
import { lookupWord } from "../utils/dictionaryHelper";
import { Volume2, Plus, BookmarkCheck, X } from "lucide-react";

interface TranslateTooltipProps {
  word: string;
  x: number;
  y: number;
  onClose: () => void;
  onAddToVocab: (word: string, translation: string, definition: string) => void;
  isBookmarked: boolean;
}

export const TranslateTooltip: React.FC<TranslateTooltipProps> = ({
  word,
  x,
  y,
  onClose,
  onAddToVocab,
  isBookmarked
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  
  // Clean word (remove punctuation for dictionary search)
  const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "").trim();
  const info = lookupWord(cleanWord);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(cleanWord);
      utterance.lang = "en-US";
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    // Reposition if off screen
    if (tooltipRef.current) {
      const tooltip = tooltipRef.current;
      const rect = tooltip.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let newX = x - rect.width / 2;
      let newY = y + 15; // Position slightly below the word

      // Horizontal boundaries
      if (newX < 10) newX = 10;
      if (newX + rect.width > viewportWidth - 10) {
        newX = viewportWidth - rect.width - 10;
      }

      // Vertical boundaries
      if (newY + rect.height > viewportHeight - 10) {
        newY = y - rect.height - 15; // Flip to show above the word
      }

      tooltip.style.left = `${newX}px`;
      tooltip.style.top = `${newY}px`;
    }

    // Event listener to close tooltip on click outside
    const handleOutsideClick = (e: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [x, y, onClose]);

  if (!cleanWord) return null;

  return (
    <div
      ref={tooltipRef}
      className="translate-tooltip"
      style={{ position: "fixed", left: x, top: y }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="translate-header">
        <div>
          <span className="translate-word">{cleanWord}</span>
          {info.type && <span className="translate-type"> ({info.type})</span>}
        </div>
        <button 
          onClick={onClose} 
          className="text-muted hover:text-color border-none bg-transparent cursor-pointer p-1"
          title="Close"
        >
          <X size={16} />
        </button>
      </div>

      {info.pronunciation && (
        <div className="translate-pronunciation">{info.pronunciation}</div>
      )}

      <div className="translate-meaning">{info.translation}</div>
      
      {info.definition && (
        <div className="translate-definition">{info.definition}</div>
      )}

      {info.isBA && (
        <div className="mb-2">
          <span className="badge-category" style={{ fontSize: "0.65rem" }}>
            BA Glossary
          </span>
        </div>
      )}

      <div className="translate-actions">
        <button onClick={handleSpeak} className="translate-btn" title="Pronounce Word">
          <Volume2 size={16} />
          <span>Listen</span>
        </button>

        <button
          onClick={() => onAddToVocab(cleanWord, info.translation || "", info.definition || "")}
          className="translate-btn"
          style={{ color: isBookmarked ? "var(--success-color)" : "var(--primary-color)" }}
          title={isBookmarked ? "Already in study deck" : "Add to Study Deck"}
        >
          {isBookmarked ? (
            <>
              <BookmarkCheck size={16} />
              <span>Added</span>
            </>
          ) : (
            <>
              <Plus size={16} />
              <span>Add Deck</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
