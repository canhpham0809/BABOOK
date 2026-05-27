import { vocabularyDb } from "../data/vocabulary";
import type { VocabItem } from "../data/vocabulary";

// A pre-compiled list of common words in the BABOK summaries and their Vietnamese translations
export const commonDict: Record<string, { translation: string; type: string; definition: string }> = {
  purpose: { translation: "mục đích", type: "noun", definition: "The reason for which something is done or created or for which something exists." },
  body: { translation: "cơ thể / tập hợp", type: "noun", definition: "A collection of information or standard guidelines." },
  knowledge: { translation: "kiến thức", type: "noun", definition: "Facts, information, and skills acquired through experience or education." },
  globally: { translation: "trên toàn cầu", type: "adverb", definition: "In a way that relates to the whole world." },
  recognized: { translation: "được công nhận", type: "adjective", definition: "Generally accepted or approved." },
  standard: { translation: "tiêu chuẩn", type: "noun", definition: "A level of quality or attainment." },
  practice: { translation: "thực hành / thông lệ", type: "noun", definition: "The actual application or use of an idea, belief, or method." },
  defines: { translation: "định nghĩa", type: "verb", definition: "State or describe exactly the nature, scope, or meaning of." },
  skills: { translation: "kỹ năng", type: "noun", definition: "The ability to do something well; expertise." },
  tasks: { translation: "nhiệm vụ", type: "noun", definition: "Pieces of work to be done or undertaken." },
  techniques: { translation: "kỹ thuật", type: "noun", definition: "Ways of carrying out a particular task, especially the execution or performance of an artistic work or a scientific procedure." },
  effectively: { translation: "hiệu quả", type: "adverb", definition: "In such a manner as to achieve a desired result." },
  provides: { translation: "cung cấp", type: "verb", definition: "Make available for use; supply." },
  common: { translation: "chung / phổ biến", type: "adjective", definition: "Shared by, coming from, or done by more than one." },
  terminology: { translation: "thuật ngữ", type: "noun", definition: "The body of terms used with a particular technical application in a subject of study, profession, or neighborhood." },
  framework: { translation: "khung làm việc / khuôn khổ", type: "noun", definition: "An essential supporting structure of a building, vehicle, or object." },
  helps: { translation: "giúp đỡ", type: "verb", definition: "Make it easier for someone to do something by offering one's services or resources." },
  organizations: { translation: "các tổ chức", type: "noun", definition: "An organized body of people with a particular purpose, especially a business, society, or association." },
  achieve: { translation: "đạt được", type: "verb", definition: "Successfully reach or attain a desired objective, level, or result by effort, skill, or courage." },
  successful: { translation: "thành công", type: "adjective", definition: "Accomplishing an aim or purpose." },
  change: { translation: "thay đổi / sự thay đổi", type: "noun/verb", definition: "Make or become different." },
  understanding: { translation: "sự thấu hiểu", type: "noun", definition: "The ability to understand something; comprehension." },
  needs: { translation: "nhu cầu / cần thiết", type: "noun/verb", definition: "Circumstances in which something is necessary or requires some course of action." },
  identifying: { translation: "nhận diện / xác định", type: "verb", definition: "Establish or indicate who or what someone or something is." },
  valuable: { translation: "có giá trị", type: "adjective", definition: "Worth a great deal of money or extremely useful/important." },
  solutions: { translation: "giải pháp", type: "noun", definition: "Means of solving a problem or dealing with a difficult situation." },
  enabling: { translation: "cho phép / kích hoạt", type: "verb", definition: "Give someone or something the authority or means to do something." },
  organizational: { translation: "thuộc về tổ chức", type: "adjective", definition: "Relating to an organization or administrative structure." },
  context: { translation: "ngữ cảnh / bối cảnh", type: "noun", definition: "The circumstances that form the setting for an event, statement, or idea, and in terms of which it can be fully understood and assessed." },
  recommending: { translation: "đề xuất / tiến cử", type: "verb", definition: "Put forward someone or something with approval as being suitable for a particular purpose or role." },
  deliver: { translation: "bàn giao / mang lại", type: "verb", definition: "Provide something promised or expected." },
  value: { translation: "giá trị", type: "noun", definition: "The regard that something is held to deserve; the importance, worth, or usefulness of something." },
  stakeholders: { translation: "các bên liên quan", type: "noun", definition: "People with an interest or concern in something, especially a business." },
  allows: { translation: "cho phép", type: "verb", definition: "Give necessary time or opportunity for." },
  enterprises: { translation: "doanh nghiệp", type: "noun", definition: "A project or undertaking, typically one that is difficult or requires effort; or a business or company." },
  articulate: { translation: "bày tỏ / phát biểu rõ ràng", type: "verb", definition: "Express an idea or feeling fluently and coherently." },
  rationale: { translation: "lý do căn bản / cơ sở hợp lý", type: "noun", definition: "A set of reasons or a logical basis for a course of action or a belief." },
  describe: { translation: "mô tả", type: "verb", definition: "Give an account in words of someone or something, including all the important characteristics, qualities, or events." },
  performed: { translation: "thực hiện", type: "verb", definition: "Carry out, accomplish, or fulfill an action, task, or function." },
  projects: { translation: "các dự án", type: "noun", definition: "An individual or collaborative enterprise that is carefully planned and designed to achieve a particular aim." },
  throughout: { translation: "xuyên suốt", type: "preposition", definition: "In every part of a place or object, or from beginning to end of a period of time." },
  evolution: { translation: "sự tiến hóa / phát triển", type: "noun", definition: "The gradual development of something, especially from a simple to a more complex form." },
  continuous: { translation: "liên tục", type: "adjective", definition: "Forming an unbroken whole, without interruption." },
  improvement: { translation: "sự cải tiến / cải thiện", type: "noun", definition: "An instance of making or becoming better." },
  regardless: { translation: "bất kể / không quan tâm", type: "adverb", definition: "Without paying attention to the present situation." },
  title: { translation: "chức danh / tiêu đề", type: "noun", definition: "A name that describes someone's position or job, or the name of a book/chapter." },
  responsible: { translation: "chịu trách nhiệm", type: "adjective", definition: "Having an obligation to do something, or having control over or care for someone." },
  discovering: { translation: "phát hiện / tìm ra", type: "verb", definition: "Find unexpectedly or during a search." },
  synthesizing: { translation: "tổng hợp", type: "verb", definition: "Combine a number of things into a coherent whole." },
  analyzing: { translation: "phân tích", type: "verb", definition: "Examine methodically and in detail the constitution or structure of something." },
  information: { translation: "thông tin", type: "noun", definition: "Facts provided or learned about something or someone." },
  various: { translation: "đa dạng / khác nhau", type: "adjective", definition: "Of different kinds, as two or more things; differing one from another." },
  sources: { translation: "nguồn", type: "noun", definition: "Places, persons, or things from which something comes or can be obtained." },
  investigate: { translation: "điều tra / khảo sát", type: "verb", definition: "Carry out a systematic or formal inquiry to discover and examine the facts of." },
  desires: { translation: "mong muốn", type: "noun", definition: "Strong feelings of wanting to have something or wishing for something to happen." },
  clarify: { translation: "làm rõ", type: "verb", definition: "Make a statement or situation less confusing and more clearly comprehensible." },
  real: { translation: "thực tế / thực sự", type: "adjective", definition: "Actually existing as a thing or occurring in fact; not imagined or supposed." },
  align: { translation: "đồng nhất / căn chỉnh", type: "verb", definition: "Place or arrange in a straight line or in agreement." },
  goals: { translation: "các mục tiêu", type: "noun", definition: "The objects of a person's ambition or effort; an aim or desired result." },
  detailed: { translation: "chi tiết", type: "adjective", definition: "Having many details; thorough." },
  requirements: { translation: "yêu cầu", type: "noun", definition: "Things that are needed or wanted." },
  bridge: { translation: "cầu nối", type: "noun", definition: "A structure carrying a road, path, or railway across a river, or a link between two groups." },
  connecting: { translation: "kết nối", type: "verb", definition: "Join or link things together." },
  technical: { translation: "thuộc kỹ thuật", type: "adjective", definition: "Relating to a particular subject, art, or craft, or its techniques." },
  developers: { translation: "lập trình viên", type: "noun", definition: "People who write computer software." },
  external: { translation: "bên ngoài", type: "adjective", definition: "Belonging to or forming the outer surface or structure of something." },
  partners: { translation: "đối tác", type: "noun", definition: "People or organizations that take part in an undertaking with another." },
  conceptual: { translation: "thuộc về khái niệm", type: "adjective", definition: "Relating to or based on mental concepts." },
  consists: { translation: "bao gồm", type: "verb", definition: "Be composed or made up of." },
  equal: { translation: "ngang bằng / bình đẳng", type: "adjective", definition: "Being the same in quantity, size, degree, or value." },
  necessary: { translation: "cần thiết", type: "adjective", definition: "Required to be done, achieved, or present; essential." },
  act: { translation: "hành động", type: "noun/verb", definition: "A thing done; a deed; or to behave in a specified way." },
  transformation: { translation: "sự chuyển đổi", type: "noun", definition: "A thorough or dramatic change in form or appearance." },
  response: { translation: "sự phản hồi", type: "noun", definition: "A reaction to something." },
  opportunity: { translation: "cơ hội", type: "noun", definition: "A set of circumstances that makes it possible to do something." },
  addressed: { translation: "được giải quyết / xử lý", type: "verb", definition: "Think about and begin to deal with a problem." },
  specific: { translation: "cụ thể", type: "adjective", definition: "Clearly defined or identified." },
  satisfying: { translation: "thỏa mãn / đáp ứng", type: "verb", definition: "Fulfill a desire, need, or appetite." },
  group: { translation: "nhóm", type: "noun", definition: "A number of people or things that are located close together or are considered or classed together." },
  individual: { translation: "cá nhân", type: "noun", definition: "A single human being as distinct from a group, class, or family." },
  relationship: { translation: "mối quan hệ", type: "noun", definition: "The way in which two or more concepts, objects, or people are connected." },
  worth: { translation: "giá trị", type: "noun", definition: "The value equivalent to that of a specified commodity or sum of money." },
  importance: { translation: "tầm quan trọng", type: "noun", definition: "The state or fact of being of great significance or value." },
  usefulness: { translation: "tính hữu ích", type: "noun", definition: "The quality of having utility and practical value." },
  circumstances: { translation: "hoàn cảnh / bối cảnh", type: "noun", definition: "Facts or conditions connected with or relevant to an event or action." },
  influence: { translation: "ảnh hưởng", type: "noun/verb", definition: "The capacity to have an effect on the character, development, or behavior of someone or something." },
  influenced: { translation: "bị ảnh hưởng", type: "verb", definition: "Affected by something." },
  situation: { translation: "tình huống / hoàn cảnh", type: "noun", definition: "A set of circumstances in which one finds oneself; a state of affairs." },
  classified: { translation: "được phân loại", type: "verb", definition: "Arranged in classes or categories according to shared characteristics." },
  categories: { translation: "danh mục / loại", type: "noun", definition: "Classes or divisions of people or things regarded as having particular shared characteristics." },
  highlevel: { translation: "mức độ cao / khái quát", type: "adjective", definition: "At a generic or executive level, without detail." },
  objectives: { translation: "các mục tiêu chiến lược", type: "noun", definition: "Things aimed at or sought; targets." },
  outcomes: { translation: "kết quả đầu ra", type: "noun", definition: "The way things turn out; consequences." },
  capabilities: { translation: "năng lực / tính năng", type: "noun", definition: "The power or ability to do something." },
  qualities: { translation: "chất lượng / đặc tính", type: "noun", definition: "Distinctive attributes or characteristics possessed by someone or something." },
  subdivided: { translation: "được chia nhỏ", type: "verb", definition: "Divided into smaller parts of something that has already been divided." },
  functional: { translation: "thuộc chức năng", type: "adjective", definition: "Relating to the way in which something works or operates." },
  nonfunctional: { translation: "phi chức năng", type: "adjective", definition: "Relating to operational qualities like speed, security, and stability rather than specific features." },
  representing: { translation: "đại diện cho", type: "verb", definition: "Acting or speaking on behalf of someone or something." },
  behaviors: { translation: "hành vi / cách hoạt động", type: "noun", definition: "The way in which a natural phenomenon or a machine functions." },
  transition: { translation: "chuyển đổi / chuyển tiếp", type: "noun", definition: "The process or a period of changing from one state or condition to another." },
  temporary: { translation: "tạm thời", type: "adjective", definition: "Lasting for only a limited period of time; not permanent." },
  nature: { translation: "bản chất / tự nhiên", type: "noun", definition: "The basic or inherent features, character, or qualities of something." },
  focus: { translation: "tập trung", type: "verb", definition: "Pay particular attention to." },
  boundary: { translation: "ranh giới", type: "noun", definition: "A line that marks the limits of an area; a dividing line." },
  fluid: { translation: "linh hoạt / lỏng", type: "adjective", definition: "Not settled or stable; likely or able to change." },
  lead: { translation: "dẫn tới", type: "verb", definition: "Cause a person or thing to go in a certain direction." },
  turn: { translation: "quay / chuyển", type: "verb", definition: "Move in a circular direction." },
  reduce: { translation: "giảm bớt", type: "verb", definition: "Make smaller or less in amount, degree, or size." },
  waiting: { translation: "chờ đợi", type: "verb", definition: "Remaining inactive in one place in anticipation of something." },
  time: { translation: "thời gian", type: "noun", definition: "The indefinite continued progress of existence and events in the past, present, and future." },
  automated: { translation: "tự động hóa", type: "adjective", definition: "Operated by largely automatic equipment." },
  checkout: { translation: "thanh toán", type: "noun", definition: "A point at which goods are paid for in a supermarket or department store." },
  kiosks: { translation: "quầy thông tin / ki-ốt", type: "noun", definition: "Small open-fronted huts or cubicles from which newspapers, refreshments, or tickets are sold." },
  generates: { translation: "tạo ra / phát sinh", type: "verb", definition: "Produce or create." },
  interface: { translation: "giao diện", type: "noun", definition: "A point where two systems, subjects, organizations, etc. meet and interact." },
};

/**
 * Searches for a word translation first in the specialized BA vocab database,
 * and if not found, falls back to the common dictionary database.
 */
export const lookupWord = (word: string): Partial<VocabItem> & { isBA: boolean } => {
  const cleanWord = word.trim().toLowerCase();
  
  // 1. Check in specialized BA database (exact match or prefix)
  const baMatch = vocabularyDb.find(
    (item) => item.term.toLowerCase() === cleanWord || 
              item.term.toLowerCase() + "s" === cleanWord || 
              item.term.toLowerCase().slice(0, -1) === cleanWord
  );

  if (baMatch) {
    return {
      ...baMatch,
      isBA: true
    };
  }

  // 2. Check in common vocabulary
  const commonMatch = commonDict[cleanWord];
  if (commonMatch) {
    return {
      term: word,
      type: commonMatch.type,
      pronunciation: "",
      definition: commonMatch.definition,
      translation: commonMatch.translation,
      example: "",
      category: "General",
      isBA: false
    };
  }

  // 3. Not found, return basic information
  return {
    term: word,
    type: "word",
    pronunciation: "",
    definition: "Translation loaded dynamically. Click to search online.",
    translation: `Từ: "${word}"`,
    example: "",
    category: "General",
    isBA: false
  };
};
