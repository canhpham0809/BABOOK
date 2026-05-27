import React, { useState, useEffect } from "react";
import { babokChapters } from "../data/babokContent";
import { quizzesDb } from "../data/quizzes";
import type { Question } from "../data/quizzes";
import { 
  Timer, 
  CheckCircle2, 
  XCircle, 
  Award, 
  RefreshCw, 
  BookOpen,
  ArrowRight,
  AlertCircle
} from "lucide-react";

interface PracticeQuizProps {
  quizScores: Record<string, number>;
  onSaveScore: (chapterId: string, scorePercent: number) => void;
  onNavigate: (tab: string, arg?: any) => void;
}

export const PracticeQuiz: React.FC<PracticeQuizProps> = ({
  quizScores,
  onSaveScore,
  onNavigate
}) => {
  // Quiz selection states
  const [selectedChapterId, setSelectedChapterId] = useState<string>("all");
  const [quizStarted, setQuizStarted] = useState(false);
  
  // Active quiz states
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  
  // Timer states
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerActive, setTimerActive] = useState(false);
  
  // Results states
  const [quizFinished, setQuizFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});

  // Timer effect
  useEffect(() => {
    let interval: any;
    if (timerActive && timeLeft > 0 && !isAnswered) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !isAnswered) {
      // Time out!
      handleTimeOut();
    }
    return () => clearInterval(interval);
  }, [timeLeft, timerActive, isAnswered]);

  const handleTimeOut = () => {
    setIsAnswered(true);
    setSelectedOption(-1); // Mark as incorrect/unanswered
  };

  const startQuiz = () => {
    let filteredQuestions: Question[] = [];
    if (selectedChapterId === "all") {
      filteredQuestions = [...quizzesDb];
    } else {
      filteredQuestions = quizzesDb.filter((q) => q.chapterId === selectedChapterId);
    }

    if (filteredQuestions.length === 0) {
      alert("Chưa có câu hỏi cho chương này! Hãy thử chọn chương khác hoặc làm bài thi tổng hợp.");
      return;
    }

    // Shuffle and pick max 10 questions for a quick quiz session
    const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setCorrectCount(0);
    setUserAnswers({});
    setQuizStarted(true);
    setQuizFinished(false);
    
    // Start Timer
    setTimeLeft(60);
    setTimerActive(true);
  };

  const handleOptionSelect = (optionIdx: number) => {
    if (isAnswered) return;
    setSelectedOption(optionIdx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswered) return;
    
    setIsAnswered(true);
    const currentQuestion = questions[currentIndex];
    
    // Save user answer
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: selectedOption
    }));

    if (selectedOption === currentQuestion.correctOptionIndex) {
      setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(60);
      setTimerActive(true);
    } else {
      // Finish Quiz
      setTimerActive(false);
      setQuizFinished(true);
      
      // Save highest score
      const finalScorePercent = Math.round((correctCount / questions.length) * 100);
      // If we are doing 'all' (comprehensive exam), we map it to a custom key 'comprehensive'
      onSaveScore(selectedChapterId, finalScorePercent);
    }
  };

  // Helper letters
  const optionLetters = ["A", "B", "C", "D"];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Quiz setup panel */}
      {!quizStarted && (
        <div className="quiz-setup-container">
          <div>
            <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Luyện tập & Thi thử trắc nghiệm</h1>
            <p style={{ color: "var(--text-muted)" }}>
              Test your understanding of the BABOK Guide v3 chapters. Select a chapter or run a comprehensive test.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Chọn Chương luyện tập:</h3>
            
            <div className="quiz-grid">
              {/* Comprehensive mock card */}
              <div 
                className={`quiz-setup-card ${selectedChapterId === "all" ? "selected" : ""}`}
                onClick={() => setSelectedChapterId("all")}
                style={{ 
                  borderColor: selectedChapterId === "all" ? "var(--primary-color)" : "var(--border-color)",
                  background: selectedChapterId === "all" ? "var(--primary-light)" : "var(--card-bg)"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Bài thi thử Tổng Hợp (Comprehensive)</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                      Tất cả các chương của BABOK Guide v3 ({quizzesDb.length} câu hỏi có sẵn)
                    </p>
                  </div>
                  <span className="badge-category">EXAM</span>
                </div>
                {quizScores["all"] !== undefined && (
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--success-color)", marginTop: "auto" }}>
                    Điểm cao nhất: {quizScores["all"]}%
                  </div>
                )}
              </div>

              {/* Individual Chapter cards */}
              {babokChapters.map((chapter) => {
                const chapterQuestions = quizzesDb.filter(q => q.chapterId === chapter.id);
                const score = quizScores[chapter.id];
                
                return (
                  <div 
                    key={chapter.id}
                    className="quiz-setup-card"
                    onClick={() => setSelectedChapterId(chapter.id)}
                    style={{ 
                      borderColor: selectedChapterId === chapter.id ? "var(--primary-color)" : "var(--border-color)",
                      background: selectedChapterId === chapter.id ? "var(--primary-light)" : "var(--card-bg)"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <h4 style={{ fontSize: "1.05rem", fontWeight: 700 }}>{chapter.title}</h4>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                          {chapter.vietnameseTitle} ({chapterQuestions.length} câu hỏi)
                        </p>
                      </div>
                      <span className="badge-chapter">{chapter.id.toUpperCase()}</span>
                    </div>
                    {score !== undefined && (
                      <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--success-color)", marginTop: "auto" }}>
                        Điểm cao nhất: {score}%
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <button 
              onClick={startQuiz}
              className="btn-primary"
              style={{ padding: "0.9rem", fontSize: "1.05rem", borderRadius: "10px", justifyContent: "center", marginTop: "1rem" }}
            >
              Bắt đầu kiểm tra
            </button>
          </div>
        </div>
      )}

      {/* Active Quiz Viewport */}
      {quizStarted && !quizFinished && questions.length > 0 && (
        <div className="quiz-viewport">
          <div className="quiz-header">
            <div>
              <span className="badge-chapter" style={{ fontSize: "0.7rem" }}>
                {questions[currentIndex].chapterId.toUpperCase()}
              </span>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginLeft: "0.5rem" }}>
                Câu {currentIndex + 1} / {questions.length}
              </span>
            </div>
            
            <div className="quiz-timer">
              <Timer size={16} />
              <span>{timeLeft}s</span>
            </div>
          </div>

          <div className="progress-bar-container" style={{ height: "4px", margin: 0 }}>
            <div 
              className="progress-bar-fill" 
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question Text */}
          <div style={{ fontSize: "1.15rem", fontWeight: 600, lineHeight: 1.5 }}>
            {questions[currentIndex].questionText}
          </div>

          {/* Option list */}
          <div className="quiz-option-list">
            {questions[currentIndex].options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = questions[currentIndex].correctOptionIndex === idx;
              
              let btnClass = "";
              if (isAnswered) {
                if (isCorrect) btnClass = "correct";
                else if (isSelected) btnClass = "incorrect";
              } else if (isSelected) {
                btnClass = "selected";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(idx)}
                  className={`quiz-option-btn ${btnClass}`}
                  disabled={isAnswered}
                >
                  <div className="quiz-option-letter">
                    {optionLetters[idx]}
                  </div>
                  <div>{option}</div>
                </button>
              );
            })}
          </div>

          {/* Submission and Next buttons */}
          <div style={{ display: "flex", justifyContent: "flex-end", borderTop: "1px solid var(--border-color)", paddingTop: "1.25rem", marginTop: "0.5rem" }}>
            {!isAnswered ? (
              <button
                onClick={handleSubmitAnswer}
                className="btn-primary"
                disabled={selectedOption === null}
                style={{ opacity: selectedOption === null ? 0.6 : 1 }}
              >
                Nộp câu trả lời
              </button>
            ) : (
              <button onClick={handleNextQuestion} className="btn-primary">
                <span>
                  {currentIndex === questions.length - 1 ? "Xem kết quả" : "Câu tiếp theo"}
                </span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>

          {/* Answer explanation portal */}
          {isAnswered && (
            <div className="explanation-box" style={{ 
              borderColor: selectedOption === questions[currentIndex].correctOptionIndex ? "var(--success-color)" : "var(--error-color)",
              backgroundColor: selectedOption === questions[currentIndex].correctOptionIndex ? "var(--success-bg)" : "var(--error-bg)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                {selectedOption === questions[currentIndex].correctOptionIndex ? (
                  <>
                    <CheckCircle2 size={18} style={{ color: "var(--success-color)" }} />
                    <span style={{ color: "var(--success-color)" }}>Chính xác!</span>
                  </>
                ) : (
                  <>
                    <XCircle size={18} style={{ color: "var(--error-color)" }} />
                    <span style={{ color: "var(--error-color)" }}>
                      Chưa chính xác (Đáp án đúng: {optionLetters[questions[currentIndex].correctOptionIndex]})
                    </span>
                  </>
                )}
              </div>
              <div style={{ fontSize: "0.9rem", lineHeight: 1.4, color: "var(--text-color)" }}>
                <strong>Giải thích:</strong> {questions[currentIndex].explanation}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Results Viewport */}
      {quizFinished && (
        <div className="quiz-viewport" style={{ maxWidth: "800px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", textAlign: "center", padding: "1rem 0" }}>
            <div 
              style={{ 
                width: "80px", 
                height: "80px", 
                borderRadius: "50%", 
                backgroundColor: "var(--primary-light)", 
                color: "var(--primary-color)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Award size={44} />
            </div>
            
            <div>
              <h2 style={{ fontSize: "1.8rem", marginBottom: "0.25rem" }}>Kết quả bài kiểm tra</h2>
              <span className="badge-chapter">
                {selectedChapterId === "all" ? "Comprehensive Exam" : `Chương ${selectedChapterId.toUpperCase()}`}
              </span>
            </div>

            <div style={{ fontSize: "3rem", fontWeight: 800, fontFamily: "var(--font-title)", margin: "0.5rem 0" }}>
              {correctCount} / {questions.length}
            </div>

            <div style={{ fontSize: "1.2rem", fontWeight: 600, color: correctCount >= questions.length * 0.8 ? "var(--success-color)" : "var(--text-muted)" }}>
              {correctCount === questions.length 
                ? "Perfect! Bạn đã hiểu trọn vẹn chương này." 
                : correctCount >= questions.length * 0.8 
                  ? "Rất tốt! Bạn nắm bắt kiến thức vững vàng."
                  : "Cần cải thiện! Hãy đọc lại tài liệu chương này nhé."}
            </div>

            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
              <button onClick={startQuiz} className="btn-primary">
                <RefreshCw size={16} />
                <span>Làm lại đề này</span>
              </button>
              
              <button 
                onClick={() => {
                  setQuizStarted(false);
                  setQuizFinished(false);
                }} 
                className="btn-secondary"
              >
                Chọn chương khác
              </button>

              {selectedChapterId !== "all" && (
                <button 
                  onClick={() => onNavigate("study", selectedChapterId)} 
                  className="btn-secondary"
                  style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
                >
                  <BookOpen size={16} />
                  <span>Đọc tài liệu</span>
                </button>
              )}
            </div>
          </div>

          {/* Review incorrect questions */}
          <div style={{ marginTop: "1rem", borderTop: "1px solid var(--border-color)", paddingTop: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <AlertCircle size={18} />
              <span>Xem lại chi tiết câu hỏi</span>
            </h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {questions.map((q, idx) => {
                const userAns = userAnswers[q.id];
                const isUserCorrect = userAns === q.correctOptionIndex;
                
                return (
                  <div 
                    key={q.id}
                    style={{ 
                      padding: "1rem", 
                      border: "1px solid var(--border-color)", 
                      borderRadius: "8px",
                      backgroundColor: "var(--bg-color)"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", marginBottom: "0.5rem" }}>
                      <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                        Câu {idx + 1}: {q.questionText}
                      </span>
                      {isUserCorrect ? (
                        <CheckCircle2 size={18} style={{ color: "var(--success-color)", flexShrink: 0 }} />
                      ) : (
                        <XCircle size={18} style={{ color: "var(--error-color)", flexShrink: 0 }} />
                      )}
                    </div>

                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "0.25rem", margin: "0.5rem 0" }}>
                      <div>• Lựa chọn của bạn: <span style={{ color: isUserCorrect ? "var(--success-color)" : "var(--error-color)", fontWeight: 600 }}>
                        {userAns !== -1 && userAns !== undefined ? `${optionLetters[userAns]}. ${q.options[userAns]}` : "Không trả lời (Hết giờ)"}
                      </span></div>
                      {!isUserCorrect && (
                        <div>• Đáp án chính xác: <span style={{ color: "var(--success-color)", fontWeight: 600 }}>
                          {optionLetters[q.correctOptionIndex]}. {q.options[q.correctOptionIndex]}
                        </span></div>
                      )}
                    </div>
                    
                    <div style={{ fontSize: "0.85rem", padding: "0.5rem", backgroundColor: "var(--card-bg)", borderRadius: "4px", marginTop: "0.5rem", borderLeft: "2px solid var(--primary-color)" }}>
                      <strong>Giải thích:</strong> {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
