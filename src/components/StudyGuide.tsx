import React, { useState, useEffect, useRef } from "react";
import { babokChapters } from "../data/babokContent";
import { quizzesDb } from "../data/quizzes";
import { TranslateTooltip } from "./TranslateTooltip";
import { 
  BookOpen, 
  BookOpenCheck, 
  ChevronRight, 
  Lightbulb,
  ChevronLeft,
  ChevronRightSquare,
  Award,
  RefreshCw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  FileText
} from "lucide-react";

interface StudyGuideProps {
  activeChapterId: string | null;
  readChapters: string[];
  onMarkRead: (chapterId: string) => void;
  onAddToVocab: (word: string, translation: string, definition: string) => void;
  bookmarkedWords: string[];
}

const chapterPageRanges: Record<string, { start: number; end: number }> = {
  ch1: { start: 11, end: 20 },
  ch2: { start: 21, end: 33 },
  ch3: { start: 34, end: 65 },
  ch4: { start: 66, end: 88 },
  ch5: { start: 89, end: 112 },
  ch6: { start: 113, end: 145 },
  ch7: { start: 146, end: 175 },
  ch8: { start: 176, end: 205 },
  ch9: { start: 206, end: 226 },
  ch10: { start: 227, end: 376 },
  ch11: { start: 377, end: 514 }
};

interface PDFPageRenderProps {
  pdfDoc: any;
  pageNum: number;
  scale: number;
  onWordClick: (word: string, e: React.MouseEvent) => void;
}

const PDFPageRender: React.FC<PDFPageRenderProps> = ({ pdfDoc, pageNum, scale, onWordClick }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textLayerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    let renderTask: any = null;
    setLoading(true);

    const renderPage = async () => {
      try {
        const page = await pdfDoc.getPage(pageNum);
        if (!active) return;

        const viewport = page.getViewport({ scale });
        setDimensions({ width: viewport.width, height: viewport.height });

        // 1. Render Canvas
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const canvasContext = canvas.getContext('2d');
        if (!canvasContext) return;

        const renderContext = {
          canvasContext,
          viewport
        };
        renderTask = page.render(renderContext);
        await renderTask.promise;
        if (!active) return;

        // 2. Render Text Layer
        const textLayer = textLayerRef.current;
        if (!textLayer) return;
        textLayer.innerHTML = "";
        textLayer.style.width = `${viewport.width}px`;
        textLayer.style.height = `${viewport.height}px`;

        const textContent = await page.getTextContent();
        if (!active) return;

        const textItems = textContent.items as any[];
        const textDivsToScale: { div: HTMLDivElement; expectedWidth: number }[] = [];

        textItems.forEach((item) => {
          if (!item.str || item.str.trim() === "") return;

          const tx = [
            viewport.transform[0] * item.transform[0] + viewport.transform[2] * item.transform[1],
            viewport.transform[1] * item.transform[0] + viewport.transform[3] * item.transform[1],
            viewport.transform[0] * item.transform[2] + viewport.transform[2] * item.transform[3],
            viewport.transform[1] * item.transform[2] + viewport.transform[3] * item.transform[3],
            viewport.transform[0] * item.transform[4] + viewport.transform[2] * item.transform[5] + viewport.transform[4],
            viewport.transform[1] * item.transform[4] + viewport.transform[3] * item.transform[5] + viewport.transform[5]
          ];
          const fontSize = Math.sqrt(tx[0] * tx[0] + tx[1] * tx[1]);
          
          const textDiv = document.createElement("div");
          textDiv.style.position = "absolute";
          textDiv.style.left = `${tx[4]}px`;
          textDiv.style.top = `${tx[5] - fontSize}px`;
          textDiv.style.fontSize = `${fontSize}px`;
          textDiv.style.fontFamily = "sans-serif";
          textDiv.style.color = "transparent";
          textDiv.style.whiteSpace = "pre";
          textDiv.style.transformOrigin = "left bottom";
          textDiv.style.userSelect = "text";
          
          // Split by words, keeping whitespaces
          const parts = item.str.split(/(\s+)/);
          parts.forEach((part: string) => {
            if (part.trim() === "") {
              textDiv.appendChild(document.createTextNode(part));
            } else {
              const span = document.createElement("span");
              span.className = "interactive-word";
              span.textContent = part;
              span.addEventListener("click", (e) => {
                e.stopPropagation();
                onWordClick(part, e as any);
              });
              textDiv.appendChild(span);
            }
          });

          textLayer.appendChild(textDiv);

          if (item.width) {
            textDivsToScale.push({
              div: textDiv,
              expectedWidth: item.width * scale
            });
          }
        });

        // Batch read actual widths to avoid layout thrashing
        const measurements = textDivsToScale.map(m => ({
          div: m.div,
          expectedWidth: m.expectedWidth,
          actualWidth: m.div.getBoundingClientRect().width
        }));

        // Batch write scaleX transforms
        measurements.forEach(m => {
          if (m.actualWidth > 0 && m.expectedWidth > 0) {
            const scaleX = m.expectedWidth / m.actualWidth;
            m.div.style.transform = `scaleX(${scaleX})`;
          }
        });

        setLoading(false);
      } catch (err: any) {
        if (err.name === "RenderingCancelledException" || err.message?.includes("cancelled")) {
          return;
        }
        console.error("Error rendering PDF page:", err);
        if (active) setLoading(false);
      }
    };

    renderPage();

    return () => {
      active = false;
      if (renderTask) {
        try {
          renderTask.cancel();
        } catch (e) {
          // ignore
        }
      }
    };
  }, [pdfDoc, pageNum, scale]);

  return (
    <div 
      className="pdf-page-container" 
      style={{ 
        position: "relative", 
        margin: "0 auto 1.5rem auto", 
        boxShadow: "var(--shadow-md)", 
        borderRadius: "8px", 
        overflow: "hidden", 
        width: dimensions ? `${dimensions.width}px` : "100%",
        height: dimensions ? `${dimensions.height}px` : "500px",
        backgroundColor: "#fff"
      }}
    >
      {loading && (
        <div style={{ position: "absolute", left: 0, top: 0, right: 0, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(255, 255, 255, 0.8)", zIndex: 5 }}>
          <div style={{ color: "var(--primary-color)", fontWeight: 600 }}>Đang tải trang {pageNum}...</div>
        </div>
      )}
      <canvas ref={canvasRef} style={{ display: "block" }} />
      <div 
        ref={textLayerRef} 
        className="textLayer" 
        style={{ 
          position: "absolute", 
          left: 0, 
          top: 0, 
          right: 0, 
          bottom: 0, 
          zIndex: 2, 
          pointerEvents: "auto" 
        }} 
      />
    </div>
  );
};

export const StudyGuide: React.FC<StudyGuideProps> = ({
  activeChapterId,
  readChapters,
  onMarkRead,
  onAddToVocab,
  bookmarkedWords
}) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>("ch1");
  const [activeTab, setActiveTab] = useState<"pdf" | "practice">("pdf");
  
  // PDF Document states
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [pdfLoading, setPdfLoading] = useState(true);
  const [currentPageNum, setCurrentPageNum] = useState(11);
  const [scale, setScale] = useState(1.1);
  const [containerWidth, setContainerWidth] = useState(800);
  
  // Quiz states
  const [quizQuestions, setQuizQuestions] = useState<any[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Tooltip state
  const [tooltipState, setTooltipState] = useState<{
    word: string;
    x: number;
    y: number;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Sync with activeChapterId from navigation if any
  useEffect(() => {
    if (activeChapterId) {
      setSelectedChapterId(activeChapterId);
    }
  }, [activeChapterId]);

  // Sync chapter parameters and reset states when chapter changes
  useEffect(() => {
    const range = chapterPageRanges[selectedChapterId] || chapterPageRanges.ch1;
    setCurrentPageNum(range.start);
    
    // Set quiz questions for this chapter
    const chQuestions = quizzesDb.filter(q => q.chapterId === selectedChapterId);
    setQuizQuestions(chQuestions);
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setScore(0);
    
    // Default to reading tab on change
    setActiveTab("pdf");
  }, [selectedChapterId]);

  // Load PDF.js Document
  useEffect(() => {
    const loadPdf = async () => {
      setPdfLoading(true);
      
      const getPdfjsLib = () => (window as any).pdfjsLib;
      let attempts = 0;
      while (!getPdfjsLib() && attempts < 50) {
        await new Promise(r => setTimeout(r, 100));
        attempts++;
      }

      const pdfjsLib = getPdfjsLib();
      if (!pdfjsLib) {
        console.error("PDF.js library failed to load from CDN.");
        setPdfLoading(false);
        return;
      }

      try {
        const url = `${import.meta.env.BASE_URL}BABOK_Guide_v3_Member.pdf`;
        const doc = await pdfjsLib.getDocument({ url }).promise;
        setPdfDoc(doc);
        setPdfLoading(false);
      } catch (err) {
        console.error("Error loading PDF:", err);
        setPdfLoading(false);
      }
    };
    loadPdf();
  }, []);

  // Measure container width for responsive scaling
  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          // Give some padding
          setContainerWidth(Math.max(400, entry.contentRect.width - 32));
        }
      });
      resizeObserver.observe(containerRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  // Adjust scale dynamically based on page width
  useEffect(() => {
    if (pdfDoc) {
      const getPageScale = async () => {
        try {
          const page = await pdfDoc.getPage(currentPageNum);
          const viewport = page.getViewport({ scale: 1 });
          const newScale = containerWidth / viewport.width;
          setScale(Math.max(0.6, Math.min(1.8, newScale)));
        } catch (e) {
          console.error(e);
        }
      };
      getPageScale();
    }
  }, [pdfDoc, currentPageNum, containerWidth]);

  const selectedChapter = babokChapters.find(ch => ch.id === selectedChapterId) || babokChapters[0];
  const selectedRange = chapterPageRanges[selectedChapterId] || chapterPageRanges.ch1;
  
  const totalPagesInChapter = selectedRange.end - selectedRange.start + 1;
  const currentChapterPageOffset = currentPageNum - selectedRange.start + 1;

  const handlePrevPage = () => {
    if (currentPageNum > selectedRange.start) {
      setCurrentPageNum(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPageNum < selectedRange.end) {
      setCurrentPageNum(prev => prev + 1);
    } else {
      if (window.confirm("Bạn đã đọc hết chương này! Bạn có muốn làm bài tập ôn tập không?")) {
        setActiveTab("practice");
      }
    }
  };

  const handleWordClick = (word: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const clean = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "").trim();
    if (!clean) return;

    setTooltipState({
      word: clean,
      x: e.clientX,
      y: e.clientY
    });
  };

  // Quiz Interaction Handlers
  const handleSelectOption = (questionId: string, optionIdx: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIdx
    }));
  };

  const handleQuizSubmit = () => {
    // Check if all answered
    if (Object.keys(selectedAnswers).length < quizQuestions.length) {
      if (!window.confirm("Bạn chưa trả lời hết các câu hỏi. Vẫn muốn nộp bài?")) {
        return;
      }
    }

    let correctCount = 0;
    quizQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctOptionIndex) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setQuizSubmitted(true);
  };

  const handleQuizReset = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setScore(0);
  };

  const isCurrentChapterRead = readChapters.includes(selectedChapter.id);

  return (
    <div ref={containerRef} style={{ display: "flex", flexDirection: "column", height: "100%", gap: "1.5rem" }}>
      {/* Top Selector Toolbar */}
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

        {/* Tab Controls for Single Pane View */}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            onClick={() => setActiveTab("pdf")}
            className={`btn-secondary ${activeTab === "pdf" ? "active" : ""}`}
            style={{ 
              padding: "0.5rem 1rem", 
              borderRadius: "8px", 
              display: "flex", 
              alignItems: "center", 
              gap: "0.25rem",
              backgroundColor: activeTab === "pdf" ? "var(--primary-light)" : "transparent",
              borderColor: activeTab === "pdf" ? "var(--primary-color)" : "var(--border-color)",
              color: activeTab === "pdf" ? "var(--primary-color)" : "var(--text-color)",
              fontWeight: 600
            }}
          >
            <FileText size={18} />
            <span>Nội dung tài liệu (PDF)</span>
          </button>
          
          <button
            onClick={() => setActiveTab("practice")}
            className={`btn-secondary ${activeTab === "practice" ? "active" : ""}`}
            style={{ 
              padding: "0.5rem 1rem", 
              borderRadius: "8px", 
              display: "flex", 
              alignItems: "center", 
              gap: "0.25rem",
              backgroundColor: activeTab === "practice" ? "var(--primary-light)" : "transparent",
              borderColor: activeTab === "practice" ? "var(--primary-color)" : "var(--border-color)",
              color: activeTab === "practice" ? "var(--primary-color)" : "var(--text-color)",
              fontWeight: 600
            }}
          >
            <HelpCircle size={18} />
            <span>Ví dụ & Bài tập ôn tập</span>
          </button>
        </div>
      </div>

      {/* Main Study Viewport - Occupies 100% width */}
      <div className="study-left-pane" style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        
        {/* Pane Header */}
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

        {/* Tab 1: PDF Reader */}
        {activeTab === "pdf" && (
          <div className="study-pane-scroll" style={{ display: "flex", flexDirection: "column", alignItems: "center" }} onClick={() => setTooltipState(null)}>
            
            {/* Informational tip */}
            <div 
              style={{ 
                padding: "0.75rem 1rem", 
                backgroundColor: "var(--primary-light)", 
                color: "var(--primary-color)", 
                fontSize: "0.85rem", 
                borderRadius: "8px", 
                fontWeight: 600,
                marginBottom: "1rem",
                width: "100%",
                maxWidth: containerWidth ? `${containerWidth}px` : "100%",
                textAlign: "center"
              }}
            >
              💡 Mẹo: Nhấp vào bất kỳ từ tiếng Anh nào trên trang tài liệu gốc để dịch sang tiếng Việt và lưu từ vựng!
            </div>

            {/* Pagination Controls at Top */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem", width: "100%", maxWidth: containerWidth ? `${containerWidth}px` : "100%" }}>
              <button 
                onClick={handlePrevPage} 
                disabled={currentPageNum === selectedRange.start}
                className="btn-secondary"
                style={{ padding: "0.4rem 0.8rem", opacity: currentPageNum === selectedRange.start ? 0.5 : 1 }}
              >
                <ChevronLeft size={16} />
                <span>Trang trước</span>
              </button>
              
              <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text-muted)" }}>
                Trang {currentChapterPageOffset} / {totalPagesInChapter} (Trang PDF: {currentPageNum})
              </span>

              <button 
                onClick={handleNextPage}
                className="btn-secondary"
                style={{ padding: "0.4rem 0.8rem" }}
              >
                <span>{currentPageNum === selectedRange.end ? "Làm bài tập" : "Trang sau"}</span>
                <ChevronRightSquare size={16} style={{ marginLeft: "0.25rem" }} />
              </button>
            </div>

            {/* PDF rendering Canvas with Text Layer */}
            {pdfLoading ? (
              <div style={{ padding: "5rem", textAlign: "center", color: "var(--text-muted)" }}>
                Đang mở tài liệu BABOK Guide v3...
              </div>
            ) : pdfDoc ? (
              <PDFPageRender 
                pdfDoc={pdfDoc}
                pageNum={currentPageNum}
                scale={scale}
                onWordClick={handleWordClick}
                key={currentPageNum} // Force refresh on page change
              />
            ) : (
              <div style={{ padding: "5rem", textAlign: "center", color: "var(--error-color)" }}>
                Không thể tải file PDF. Hãy chắc chắn rằng file BABOK_Guide_v3_Member.pdf có trong thư mục public.
              </div>
            )}

            {/* Pagination Controls at Bottom */}
            {!pdfLoading && pdfDoc && (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1rem", width: "100%", maxWidth: containerWidth ? `${containerWidth}px` : "100%" }}>
                <button 
                  onClick={handlePrevPage} 
                  disabled={currentPageNum === selectedRange.start}
                  className="btn-secondary"
                  style={{ padding: "0.4rem 0.8rem", opacity: currentPageNum === selectedRange.start ? 0.5 : 1 }}
                >
                  <ChevronLeft size={16} />
                  <span>Trang trước</span>
                </button>
                
                <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  Trang {currentChapterPageOffset} / {totalPagesInChapter} (Trang PDF: {currentPageNum})
                </span>

                <button 
                  onClick={handleNextPage}
                  className="btn-secondary"
                  style={{ padding: "0.4rem 0.8rem" }}
                >
                  <span>{currentPageNum === selectedRange.end ? "Làm bài tập" : "Trang sau"}</span>
                  <ChevronRightSquare size={16} style={{ marginLeft: "0.25rem" }} />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Practice Exercises & Examples */}
        {activeTab === "practice" && (
          <div className="study-pane-scroll" style={{ padding: "1.5rem 2rem" }}>
            
            {/* Real World Examples Container */}
            <div style={{ marginBottom: "2.5rem" }}>
              <h3 
                style={{ 
                  fontSize: "1.3rem", 
                  fontWeight: 700,
                  color: "var(--primary-color)",
                  borderBottom: "2px solid var(--border-color)",
                  paddingBottom: "0.5rem",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}
              >
                <Lightbulb size={24} />
                <span>Ví dụ Thực tế Minh họa (Business Analyst Case Studies)</span>
              </h3>

              {selectedChapter.sections.filter(s => s.realWorldExample).map((sect) => (
                <div key={sect.id} className="example-container" style={{ marginBottom: "1.5rem", boxShadow: "var(--shadow-sm)" }}>
                  <div className="example-header" style={{ fontWeight: 700, fontSize: "1.05rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span>💼 Mục {sect.title}: {sect.vietnameseTitle}</span>
                  </div>
                  <div className="example-body" style={{ padding: "1.25rem", lineHeight: 1.6 }}>
                    <div style={{ marginBottom: "0.5rem" }}>
                      <strong style={{ color: "var(--primary-color)" }}>Tình huống (Scenario):</strong> {sect.realWorldExample?.scenario}
                    </div>
                    <div>
                      <strong style={{ color: "var(--primary-color)" }}>Giải quyết chi tiết (Details):</strong> {sect.realWorldExample?.details}
                    </div>
                  </div>
                </div>
              ))}

              {selectedChapter.sections.filter(s => s.realWorldExample).length === 0 && (
                <div style={{ color: "var(--text-muted)", fontStyle: "italic", textAlign: "center", padding: "1rem" }}>
                  Chương này chưa có ví dụ thực tế bổ sung.
                </div>
              )}
            </div>

            {/* Quiz Section */}
            <div className="dashboard-panel" style={{ padding: "2rem", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
              <h3 
                style={{ 
                  fontSize: "1.3rem", 
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "var(--text-color)"
                }}
              >
                <HelpCircle className="text-gradient" size={24} />
                <span>Đánh giá kiến thức Chương</span>
              </h3>
              
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "2rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem" }}>
                Hãy trả lời 10 câu hỏi trắc nghiệm dưới đây để ôn tập và kiểm tra mức độ nắm vững các kiến thức cốt lõi của chương vừa rồi.
              </p>

              {quizQuestions.length > 0 ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                  {quizQuestions.map((q, qIdx) => {
                    const selectedAns = selectedAnswers[q.id];
                    
                    return (
                      <div 
                        key={q.id} 
                        style={{ 
                          paddingBottom: "1.5rem", 
                          borderBottom: qIdx === quizQuestions.length - 1 ? "none" : "1px dashed var(--border-color)" 
                        }}
                      >
                        <h4 style={{ fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.5, marginBottom: "1rem" }}>
                          Câu {qIdx + 1}: {q.questionText}
                        </h4>
                        
                        {/* Options List */}
                        <div className="quiz-option-list" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                          {q.options.map((option: string, idx: number) => {
                            const isSelected = selectedAns === idx;
                            const isCorrect = q.correctOptionIndex === idx;

                            let buttonStyle: React.CSSProperties = {
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "1rem",
                              padding: "0.9rem 1.25rem",
                              borderRadius: "8px",
                              border: "1px solid var(--border-color)",
                              backgroundColor: "var(--card-bg)",
                              cursor: quizSubmitted ? "default" : "pointer",
                              textAlign: "left",
                              lineHeight: 1.4,
                              width: "100%",
                              transition: "all 0.15s ease"
                            };

                            if (quizSubmitted) {
                              if (isCorrect) {
                                buttonStyle.borderColor = "var(--success-color)";
                                buttonStyle.backgroundColor = "var(--success-bg)";
                                buttonStyle.color = "var(--success-color)";
                              } else if (isSelected) {
                                buttonStyle.borderColor = "var(--error-color)";
                                buttonStyle.backgroundColor = "var(--error-bg)";
                                buttonStyle.color = "var(--error-color)";
                              }
                            } else if (isSelected) {
                              buttonStyle.borderColor = "var(--primary-color)";
                              buttonStyle.backgroundColor = "var(--primary-light)";
                            }

                            return (
                              <button
                                key={idx}
                                onClick={() => !quizSubmitted && handleSelectOption(q.id, idx)}
                                style={buttonStyle}
                                disabled={quizSubmitted}
                                className={!quizSubmitted ? "quiz-option-hover" : ""}
                              >
                                <div 
                                  className="quiz-option-letter"
                                  style={{
                                    backgroundColor: isSelected 
                                      ? "var(--primary-color)" 
                                      : quizSubmitted && isCorrect 
                                        ? "var(--success-color)" 
                                        : "var(--border-color)",
                                    color: isSelected || (quizSubmitted && isCorrect) ? "white" : "var(--text-color)",
                                    flexShrink: 0
                                  }}
                                >
                                  {["A", "B", "C", "D"][idx]}
                                </div>
                                <div style={{ fontWeight: isSelected ? 600 : 400 }}>{option}</div>
                              </button>
                            );
                          })}
                        </div>

                        {/* Question explanation portal */}
                        {quizSubmitted && (
                          <div 
                            className="explanation-box" 
                            style={{ 
                              borderColor: selectedAns === q.correctOptionIndex ? "var(--success-color)" : "var(--error-color)",
                              backgroundColor: selectedAns === q.correctOptionIndex ? "var(--success-bg)" : "var(--error-bg)",
                              marginTop: "1rem"
                            }}
                          >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                              {selectedAns === q.correctOptionIndex ? (
                                <>
                                  <CheckCircle2 size={18} style={{ color: "var(--success-color)" }} />
                                  <span style={{ color: "var(--success-color)" }}>Chính xác!</span>
                                </>
                              ) : (
                                <>
                                  <XCircle size={18} style={{ color: "var(--error-color)" }} />
                                  <span style={{ color: "var(--error-color)" }}>
                                    Chưa chính xác (Đáp án đúng: {["A", "B", "C", "D"][q.correctOptionIndex]})
                                  </span>
                                </>
                              )}
                            </div>
                            <div style={{ fontSize: "0.85rem", lineHeight: 1.4, color: "var(--text-color)" }}>
                              <strong>Giải thích:</strong> {q.explanation}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Submission and results footer */}
                  <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {!quizSubmitted ? (
                      <>
                        <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                          Đã trả lời {Object.keys(selectedAnswers).length} / {quizQuestions.length} câu hỏi.
                        </span>
                        <button onClick={handleQuizSubmit} className="btn-primary" style={{ padding: "0.6rem 1.5rem" }}>
                          Nộp bài & Xem kết quả
                        </button>
                      </>
                    ) : (
                      <>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                          <Award size={32} className="text-gradient" />
                          <div>
                            <div style={{ fontWeight: 800, fontSize: "1.2rem" }}>
                              Kết quả: {score} / {quizQuestions.length} câu đúng
                            </div>
                            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                              Tỷ lệ chính xác: {Math.round((score / quizQuestions.length) * 100)}%
                            </div>
                          </div>
                        </div>

                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          <button onClick={handleQuizReset} className="btn-secondary" style={{ padding: "0.6rem 1rem" }}>
                            <RefreshCw size={16} />
                            <span>Làm lại bài</span>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: "center", padding: "2rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                  Không tìm thấy câu hỏi luyện tập cho chương này.
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Click-to-Translate Tooltip */}
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
