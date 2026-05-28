import React, { useEffect, useState, useRef } from "react";
import { lookupWord } from "../utils/dictionaryHelper";
import { Volume2, Plus, BookmarkCheck, X, Loader2 } from "lucide-react";

interface TranslateTooltipProps {
  word: string;
  x: number;
  y: number;
  onClose: () => void;
  onAddToVocab: (word: string, translation: string, definition: string) => void;
  isBookmarked: boolean;
}

interface TranslationInfo {
  term: string;
  type: string;
  pronunciation: string;
  translation: string;
  definition: string;
  exampleText: string;
  exampleTranslation: string;
  isBA: boolean;
  itTranslation?: string;
  alternatives?: { type: string; meanings: string[] }[];
}

// Global cache to avoid redundant API requests for the same word
const translationCache: Record<string, TranslationInfo> = {};

const IT_BUSINESS_CONTEXT_DICT: Record<string, string> = {
  record: "Bản ghi (IT/Database) | Hồ sơ (BA)",
  records: "Các bản ghi (IT/Database) | Hồ sơ (BA)",
  key: "Khóa (IT) | Cốt lõi, quan trọng (BA)",
  keys: "Khóa (IT) | Các phần quan trọng (BA)",
  field: "Trường dữ liệu / Trường thông tin (IT)",
  fields: "Các trường dữ liệu / Trường thông tin (IT)",
  interface: "Giao diện (Software) | Giao tiếp (System)",
  interfaces: "Các giao diện (Software) | Giao tiếp (System)",
  state: "Trạng thái (System/IT)",
  states: "Các trạng thái (System/IT)",
  run: "Khởi chạy / Chạy (Software)",
  execute: "Thực thi / Khởi chạy (IT)",
  execution: "Sự thực thi (IT) | Sự thi hành",
  performance: "Hiệu năng / Hiệu suất (Software)",
  build: "Bản Build / Bản dựng (Software)",
  builds: "Các bản Build (Software)",
  map: "Ánh xạ (IT) | Sơ đồ (BA)",
  maps: "Ánh xạ (IT) | Sơ đồ (BA)",
  table: "Bảng dữ liệu (Database)",
  tables: "Các bảng dữ liệu (Database)",
  process: "Quy trình (BA) | Tiến trình (OS/IT) | Xử lý",
  processes: "Các quy trình (BA) / Tiến trình (OS)",
  deliver: "Chuyển giao / Bàn giao sản phẩm (BA/Software)",
  deliverable: "Kết quả bàn giao / Sản phẩm bàn giao (BA)",
  deliverables: "Các kết quả bàn giao / Sản phẩm bàn giao (BA)",
  deploy: "Triển khai hệ thống (Software)",
  deployment: "Triển khai phần mềm (IT)",
  release: "Bản phát hành / Ra mắt (Software)",
  releases: "Các bản phát hành (Software)",
  stream: "Luồng dữ liệu / Stream (IT)",
  streams: "Các luồng dữ liệu (IT)",
  flow: "Luồng công việc / Quy trình (BA/IT)",
  flows: "Các luồng công việc / Quy trình (BA/IT)",
  class: "Lớp đối tượng (Programming/OOP)",
  classes: "Các lớp đối tượng (Programming/OOP)",
  object: "Đối tượng (Programming/OOP)",
  objects: "Các đối tượng (Programming/OOP)",
  method: "Phương thức (Programming/OOP)",
  methods: "Các phương thức (Programming/OOP)",
  property: "Thuộc tính (Programming/OOP)",
  properties: "Các thuộc tính (Programming/OOP)",
  function: "Hàm (Programming) | Chức năng (Software)",
  functions: "Các hàm (Programming) | Chức năng (Software)",
  variable: "Biến số (Programming)",
  variables: "Các biến số (Programming)",
  parameter: "Tham số (Programming)",
  parameters: "Các tham số (Programming)",
  argument: "Đối số (Programming)",
  arguments: "Các đối số (Programming)",
  exception: "Lỗi ngoại lệ (Programming)",
  exceptions: "Các lỗi ngoại lệ (Programming)",
  log: "Nhật ký hệ thống / Ghi log (IT)",
  logs: "Nhật ký hệ thống / Ghi log (IT)",
  port: "Cổng kết nối (Networking/IT)",
  ports: "Các cổng kết nối (Networking/IT)",
  client: "Máy khách / Client (Software)",
  clients: "Các máy khách / Client (Software)",
  server: "Máy chủ / Server (IT)",
  servers: "Các máy chủ / Server (IT)",
  host: "Lưu trữ / Máy chủ Host (IT)",
  hosts: "Lưu trữ / Máy chủ Host (IT)",
  load: "Tải trọng / Nạp dữ liệu (IT)",
  query: "Truy vấn dữ liệu (Database/IT)",
  queries: "Các truy vấn dữ liệu (Database/IT)",
  index: "Chỉ mục (Database/IT)",
  indexes: "Các chỉ mục (Database/IT)",
  view: "Khung nhìn / View (Database/IT)",
  views: "Khung nhìn / View (Database/IT)",
  trigger: "Bộ kích hoạt / Trigger (Database/IT)",
  triggers: "Bộ kích hoạt / Trigger (Database/IT)",
  triggering: "Kích hoạt (IT)",
  triggered: "Được kích hoạt (IT)",
  procedure: "Thủ tục (Programming/BA)",
  procedures: "Các thủ tục (Programming/BA)",
  transaction: "Giao dịch (Database/Business)",
  transactions: "Các giao dịch (Database/Business)",
  commit: "Lưu thay đổi / Commit (Git/Database)",
  commits: "Các commit (Git)",
  rollback: "Hoàn tác / Rollback (Database)",
  merge: "Hợp nhất code / Merge (Git)",
  branch: "Nhánh code / Branch (Git)",
  branches: "Các nhánh code (Git)",
  push: "Đẩy code / Push (Git)",
  pull: "Kéo code / Pull (Git)",
  application: "Ứng dụng (Software)",
  applications: "Các ứng dụng (Software)",
  system: "Hệ thống (IT)",
  systems: "Các hệ thống (IT)",
  data: "Dữ liệu (IT)",
  database: "Cơ sở dữ liệu (IT)",
  databases: "Các cơ sở dữ liệu (IT)",
  user: "Người dùng (Software)",
  users: "Người dùng (Software)",
  client_side: "Phía máy khách (Software)",
  server_side: "Phía máy chủ (Software)",
  code: "Mã nguồn / Code (Programming)",
  developer: "Lập trình viên (IT)",
  developers: "Các lập trình viên (IT)",
  developing: "Đang phát triển / Đang lập trình (IT)",
  engineer: "Kỹ sư (Software)",
  engineers: "Các kỹ sư (Software)",
  analyst: "Chuyên viên phân tích (BA)",
  analysts: "Các chuyên viên phân tích (BA)",
  requirement: "Yêu cầu nghiệp vụ (BA)",
  requirements: "Các yêu cầu nghiệp vụ (BA)",
  scope: "Phạm vi dự án (BA/IT)",
  feature: "Tính năng (Software)",
  features: "Các tính năng (Software)",
  bug: "Lỗi phần mềm / Bug (IT)",
  bugs: "Các lỗi phần mềm / Bug (IT)",
  debug: "Sửa lỗi / Debug (IT)",
  testing: "Kiểm thử / Test (IT)",
  architecture: "Kiến trúc hệ thống (IT)",
  design: "Thiết kế hệ thống (IT)",
  model: "Mô hình / Model (IT/BA)",
  models: "Các mô hình / Model (IT/BA)",
  logic: "Logic nghiệp vụ / Thuật toán (IT)",
  algorithm: "Thuật toán (IT)",
  algorithms: "Các thuật toán (IT)",
  syntax: "Cú pháp (Programming)",
  compiler: "Trình biên dịch (IT)",
  interpreter: "Trình thông dịch (IT)",
  framework: "Khung làm việc / Framework (Software)",
  frameworks: "Các khung làm việc (Software)",
  library: "Thư viện code (Software)",
  libraries: "Các thư viện code (Software)",
  package: "Gói thư viện (Software)",
  packages: "Các gói thư viện (Software)",
  module: "Phân hệ / Module (Software)",
  modules: "Các phân hệ / Module (Software)",
  component: "Thành phần / Component (Software)",
  components: "Các thành phần / Component (Software)",
  service: "Dịch vụ (Software/IT)",
  services: "Các dịch vụ (Software/IT)",
  api: "Giao diện lập trình ứng dụng / API (IT)",
  protocol: "Giao thức mạng (IT)",
  protocols: "Các giao thức mạng (IT)",
  network: "Mạng máy tính (IT)",
  networks: "Các mạng máy tính (IT)",
  security: "Bảo mật hệ thống (IT)",
  encryption: "Mã hóa dữ liệu (IT)",
  decryption: "Giải mã dữ liệu (IT)",
  hash: "Băm dữ liệu / Mã băm (IT)",
  token: "Mã định danh / Token (IT)",
  tokens: "Các mã định danh / Token (IT)",
  session: "Phiên làm việc / Session (IT)",
  sessions: "Các phiên làm việc (IT)",
  cookie: "Cookie trình duyệt (IT)",
  cookies: "Các cookie trình duyệt (IT)",
  request: "Yêu cầu gửi đi / Request (IT)",
  requests: "Các yêu cầu gửi đi / Request (IT)",
  response: "Phản hồi nhận về / Response (IT)",
  responses: "Các phản hồi nhận về / Response (IT)",
  header: "Phần đầu gói tin / Header (IT)",
  headers: "Phần đầu gói tin / Header (IT)",
  payload: "Dữ liệu tải / Payload (IT)",
  endpoint: "Đường dẫn API / Endpoint (IT)",
  endpoints: "Các đường dẫn API / Endpoint (IT)",
  route: "Định tuyến / Route (IT)",
  routes: "Định tuyến / Route (IT)",
  gateway: "Cổng kết nối / Gateway (IT)",
  gateways: "Cổng kết nối / Gateway (IT)",
  proxy: "Máy chủ ủy quyền / Proxy (IT)",
  firewall: "Tường lửa (IT)",
  cloud: "Điện toán đám mây (IT)",
  serverless: "Không máy chủ / Serverless (IT)",
  container: "Container / Docker (IT)",
  containers: "Các Container / Docker (IT)",
  deployment: "Triển khai phần mềm (IT)",
  deployments: "Các đợt triển khai phần mềm (IT)",
  integration: "Tích hợp hệ thống (IT)",
  pipeline: "Đường ống tự động hóa / Pipeline (IT)",
  pipelines: "Đường ống tự động hóa / Pipeline (IT)",
  repository: "Kho lưu trữ mã nguồn / Repo (Git/IT)",
  repositories: "Các kho lưu trữ mã nguồn / Repo (Git/IT)",
  pull_request: "Yêu cầu gộp code / PR (Git)",
  pull_requests: "Các yêu cầu gộp code / PR (Git)",
  code_review: "Đánh giá mã nguồn (IT)",
  environment: "Môi trường chạy phần mềm (IT)",
  environments: "Các môi trường chạy phần mềm (IT)",
  production: "Môi trường Production / Chạy thật (IT)",
  staging: "Môi trường Staging / Thử nghiệm (IT)",
  development_env: "Môi trường Dev (IT)",
  testing_env: "Môi trường Test (IT)",
  back_end: "Phần xử lý hệ thống / Back-end (IT)",
  front_end: "Giao diện người dùng / Front-end (IT)",
  full_stack: "Phát triển toàn diện / Full-stack (IT)",
  devops: "Vận hành và phát triển / DevOps (IT)",
  agile: "Quy trình phát triển linh hoạt / Agile (IT)",
  scrum: "Khung làm việc Scrum (IT)",
  sprint: "Chu kỳ phát triển / Sprint (Scrum)",
  sprints: "Các chu kỳ phát triển / Sprint (Scrum)",
  backlog: "Danh sách công việc tồn đọng / Backlog (Scrum)",
  user_story: "Câu chuyện người dùng (BA/Agile)",
  user_stories: "Các câu chuyện người dùng (BA/Agile)",
  epic: "Yêu cầu lớn / Epic (BA/Agile)",
  epics: "Các yêu cầu lớn / Epic (BA/Agile)",
  task: "Nhiệm vụ nhỏ (Agile)",
  tasks: "Các nhiệm vụ (Agile)",
  board: "Bảng quản lý công việc (Agile)",
  velocity: "Tốc độ hoàn thành công việc (Agile)",
  standup: "Họp nhanh hàng ngày (Agile)",
  retrospective: "Họp cải tiến / Rút kinh nghiệm (Agile)",
  planning: "Lập kế hoạch phát triển (Agile)",
  estimation: "Ước lượng công việc (Agile)",
  refactoring: "Tối ưu, cấu trúc lại code (IT)",
  technical_debt: "Nợ kỹ thuật (IT)",
  legacy: "Hệ thống cũ / Legacy (IT)",
  migration: "Chuyển đổi dữ liệu / Di trú hệ thống (IT)",
  stakeholder: "Bên liên quan (BA)",
  stakeholders: "Các bên liên quan (BA)"
};

function getBaseWord(word: string): string {
  const w = word.toLowerCase();
  if (w.endsWith("ies")) {
    return w.slice(0, -3) + "y"; // e.g. capabilities -> capability
  }
  if (w.endsWith("s") && !w.endsWith("ss")) {
    return w.slice(0, -1); // e.g. professionals -> professional
  }
  if (w.endsWith("ed")) {
    return w.slice(0, -1); // e.g. recognized -> recognize
  }
  if (w.endsWith("ing")) {
    if (w.endsWith("ying")) return w.slice(0, -4) + "y"; // identifying -> identify
    if (w.endsWith("zing")) return w.slice(0, -3) + "e"; // analyzing -> analyze
    return w.slice(0, -3); // e.g. showing -> show
  }
  return w;
}

const fetchWordData = async (word: string): Promise<TranslationInfo> => {
  const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "").trim();
  const cacheKey = cleanWord.toLowerCase();
  if (translationCache[cacheKey]) {
    return translationCache[cacheKey];
  }

  // 1. Check local lookup first
  const localMatch = lookupWord(cleanWord);
  const isBA = !!localMatch.isBA;

  let translation = localMatch.translation || "";
  let partOfSpeech = localMatch.type || "";
  let pronunciation = localMatch.pronunciation || "";
  let alternatives: { type: string; meanings: string[] }[] = [];

  const baseWord = getBaseWord(cleanWord);
  const itTranslation = IT_BUSINESS_CONTEXT_DICT[cleanWord.toLowerCase()] || IT_BUSINESS_CONTEXT_DICT[baseWord];

  // If local match has a translation, return immediately (0ms)
  if (translation && !translation.includes("Từ:")) {
    const result = {
      term: cleanWord,
      type: partOfSpeech,
      pronunciation,
      translation,
      definition: "",
      exampleText: "",
      exampleTranslation: "",
      isBA,
      itTranslation,
      alternatives: []
    };
    translationCache[cacheKey] = result;
    return result;
  }

  // 2. Fetch from Google Translate API (single request)
  try {
    const gtUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&dt=bd&q=${encodeURIComponent(cleanWord)}`;
    const gtRes = await fetch(gtUrl);
    const gtData = await gtRes.json();
    if (gtData[0] && gtData[0][0] && gtData[0][0][0]) {
      translation = gtData[0][0][0];
    }
    if (gtData[1]) {
      gtData[1].forEach((posGroup: any) => {
        const posType = posGroup[0]; // e.g. "noun", "verb"
        const translations = posGroup[1]; // e.g. ["ghi chép", "kỷ lục"]
        if (posType && Array.isArray(translations)) {
          alternatives.push({
            type: posType,
            meanings: translations.slice(0, 4) // Keep up to 4 meanings per part of speech
          });
        }
      });
      // Extract the first part of speech for display
      if (gtData[1][0] && gtData[1][0][0]) {
        partOfSpeech = gtData[1][0][0];
      }
    }
  } catch (e) {
    console.error("Google Translate word fetch failed:", e);
  }

  if (!translation || translation.includes("Từ:")) {
    translation = `Từ: "${cleanWord}"`;
  }

  const result = {
    term: cleanWord,
    type: partOfSpeech,
    pronunciation,
    translation,
    definition: "",
    exampleText: "",
    exampleTranslation: "",
    isBA,
    itTranslation,
    alternatives
  };

  translationCache[cacheKey] = result;
  return result;
};

export const TranslateTooltip: React.FC<TranslateTooltipProps> = ({
  word,
  x,
  y,
  onClose,
  onAddToVocab,
  isBookmarked
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<TranslationInfo | null>(null);

  // Clean word (remove punctuation for dictionary search)
  const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "").trim();

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(info ? info.term : cleanWord);
      utterance.lang = "en-US";
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    let active = true;
    setLoading(true);
    
    if (!cleanWord) {
      setLoading(false);
      return;
    }

    fetchWordData(cleanWord)
      .then((data) => {
        if (active) {
          setInfo(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        if (active) {
          // Fallback to local dictionary
          const localMatch = lookupWord(cleanWord);
          setInfo({
            term: cleanWord,
            type: localMatch.type || "word",
            pronunciation: localMatch.pronunciation || "",
            translation: localMatch.translation || `Từ: "${cleanWord}"`,
            definition: localMatch.definition || "Translation failed to load.",
            exampleText: localMatch.example || "",
            exampleTranslation: "",
            isBA: !!localMatch.isBA
          });
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [cleanWord]);

  useEffect(() => {
    // Reposition if off screen
    if (tooltipRef.current && !loading) {
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
  }, [x, y, onClose, loading]);

  if (!cleanWord) return null;

  if (loading) {
    return (
      <div
        ref={tooltipRef}
        className="translate-tooltip"
        style={{ position: "fixed", left: x, top: y }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="translate-loading">
          <Loader2 className="translate-loading-spinner" size={20} />
          <span style={{ fontSize: "0.8rem" }}>Đang tra từ điển...</span>
        </div>
      </div>
    );
  }

  if (!info) return null;

  return (
    <div
      ref={tooltipRef}
      className="translate-tooltip"
      style={{ position: "fixed", left: x, top: y }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="translate-header">
        <div>
          <span className="translate-word">{info.term}</span>
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

      {/* IT / Business Context Meaning */}
      {info.itTranslation && (
        <div 
          style={{ 
            fontSize: "0.82rem", 
            backgroundColor: "var(--primary-light)", 
            color: "var(--primary-color)", 
            padding: "0.4rem 0.6rem", 
            borderRadius: "6px", 
            borderLeft: "3px solid var(--primary-color)",
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            fontWeight: 600,
            lineHeight: 1.4
          }}
        >
          💻 Ngữ cảnh IT/BA: {info.itTranslation}
        </div>
      )}

      {/* Alternative Meanings */}
      {info.alternatives && info.alternatives.length > 0 && (
        <div style={{ marginTop: "0.6rem", borderTop: "1px dashed var(--border-color)", paddingTop: "0.5rem", marginBottom: "0.5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "0.25rem", textTransform: "uppercase" }}>
            Các nghĩa khác:
          </div>
          {info.alternatives.map((alt, idx) => (
            <div key={idx} style={{ fontSize: "0.78rem", marginBottom: "0.25rem", lineHeight: 1.4 }}>
              <span style={{ fontStyle: "italic", color: "var(--primary-color)", marginRight: "0.25rem" }}>({alt.type}):</span>
              <span style={{ color: "var(--text-color)" }}>{alt.meanings.join(", ")}</span>
            </div>
          ))}
        </div>
      )}
      
      {info.isBA && (
        <div className="mb-2">
          <span className="badge-category" style={{ fontSize: "0.65rem" }}>
            BA Glossary
          </span>
        </div>
      )}

      <div className="translate-actions" style={{ marginTop: "0.5rem" }}>
        <button onClick={handleSpeak} className="translate-btn" title="Pronounce Word">
          <Volume2 size={16} />
          <span>Listen</span>
        </button>

        <button
          onClick={() => onAddToVocab(info.term, info.translation || "", info.definition || "")}
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
