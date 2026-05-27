export interface VocabItem {
  term: string;
  type: string;
  pronunciation: string;
  definition: string;
  translation: string;
  example: string;
  category: "General" | "Planning" | "Requirements" | "Strategy" | "Techniques" | "Evaluation";
}

export const vocabularyDb: VocabItem[] = [
  {
    term: "Elicitation",
    type: "noun",
    pronunciation: "/ɪˌlɪs.ɪˈteɪ.ʃən/",
    definition: "The act of drawing out or discovering information, requirements, or needs from stakeholders.",
    translation: "Sự khơi gợi yêu cầu",
    example: "Requirements elicitation is a collaborative process involving interviews and workshops.",
    category: "Requirements"
  },
  {
    term: "Stakeholder",
    type: "noun",
    pronunciation: "/ˈsteɪkˌhoʊl.dər/",
    definition: "Any individual, group, or organization that can affect, be affected by, or perceive itself to be affected by a decision or activity.",
    translation: "Bên liên quan",
    example: "The project manager is a key stakeholder who needs regular status updates.",
    category: "General"
  },
  {
    term: "Governance",
    type: "noun",
    pronunciation: "/ˈɡʌv.ər.nəns/",
    definition: "The framework of rules, relationships, systems, and processes by which authority is exercised and controlled.",
    translation: "Sự quản trị / Quy trình quản trị",
    example: "We need to plan the business analysis governance to define who approves requirements changes.",
    category: "Planning"
  },
  {
    term: "Traceability",
    type: "noun",
    pronunciation: "/ˌtreɪ.səˈbɪl.ə.ti/",
    definition: "The ability to track requirements from their origin, through design and development, to testing and deployment.",
    translation: "Khả năng truy vết",
    example: "Traceability matrices ensure that every requirement maps directly to a business objective and a test case.",
    category: "Requirements"
  },
  {
    term: "Feasibility",
    type: "noun",
    pronunciation: "/ˌfiː.zəˈbɪl.ə.ti/",
    definition: "The degree to which a proposed project or solution is practical, doable, and worth the cost.",
    translation: "Tính khả thi",
    example: "We conducted a feasibility study to verify if the technology could support real-time data streaming.",
    category: "Strategy"
  },
  {
    term: "Constraint",
    type: "noun",
    pronunciation: "/kənˈstreɪnt/",
    definition: "A limitation or restriction that must be accommodated by the solution or the project (e.g., budget, time, regulation).",
    translation: "Ràng buộc / Hạn chế",
    example: "The compliance deadline is a hard constraint that cannot be negotiated.",
    category: "General"
  },
  {
    term: "Assumption",
    type: "noun",
    pronunciation: "/əˈsʌmp.ʃən/",
    definition: "A factor that is believed to be true, real, or certain for planning purposes, but without proof.",
    translation: "Giả định",
    example: "The plan is based on the assumption that three developers will be assigned to the project next month.",
    category: "Planning"
  },
  {
    term: "Facilitate",
    type: "verb",
    pronunciation: "/fəˈsɪl.ɪ.teɪt/",
    definition: "To make an action or process easier, often by guiding a group discussions to help them reach agreement.",
    translation: "Điều phối / Làm cho dễ dàng hơn",
    example: "The Business Analyst will facilitate the requirements modeling workshop tomorrow.",
    category: "Techniques"
  },
  {
    term: "Mitigate",
    type: "verb",
    pronunciation: "/ˈmɪt.ɪ.ɡeɪt/",
    definition: "To make something less severe, serious, or painful; to reduce risk.",
    translation: "Giảm thiểu / Giảm nhẹ",
    example: "We implemented automated backups to mitigate the risk of data loss.",
    category: "Strategy"
  },
  {
    term: "Baseline",
    type: "noun",
    pronunciation: "/ˈbeɪs.laɪn/",
    definition: "An approved, reference version of a plan, requirements document, or system design, used as a comparison point.",
    translation: "Đường cơ sở / Bản gốc đối chiếu",
    example: "Once the requirements baseline is signed off, any changes must go through the change control board.",
    category: "Planning"
  },
  {
    term: "Backlog",
    type: "noun",
    pronunciation: "/ˈbæk.lɒɡ/",
    definition: "An ordered, prioritized list of work items, features, or requirements that need to be addressed.",
    translation: "Danh sách công việc tồn đọng / Backlog",
    example: "The product owner reviews the product backlog every sprint planning meeting.",
    category: "Requirements"
  },
  {
    term: "Requirement",
    type: "noun",
    pronunciation: "/rɪˈkwaɪə.mənt/",
    definition: "A usable representation of a need, focusing on what capability or quality is required.",
    translation: "Yêu cầu",
    example: "Functional requirements specify what behaviors the software must exhibit.",
    category: "General"
  },
  {
    term: "Validation",
    type: "noun",
    pronunciation: "/ˌvæl.ɪˈdeɪ.ʃən/",
    definition: "The process of checking if the requirements or solution meet the actual business needs and deliver value (are we building the right thing?).",
    translation: "Sự xác thực (đúng nhu cầu)",
    example: "Requirements validation involves aligning capabilities back to the initial business case.",
    category: "Evaluation"
  },
  {
    term: "Verification",
    type: "noun",
    pronunciation: "/ˌver.ɪ.fɪˈkeɪ.ʃən/",
    definition: "The process of checking if the requirements are documented correctly, following standards, and free of errors (did we build the requirements document right?).",
    translation: "Sự kiểm chứng (đúng quy chuẩn)",
    example: "During requirements verification, we check for clarity, ambiguity, and complete testability.",
    category: "Requirements"
  },
  {
    term: "Prioritize",
    type: "verb",
    pronunciation: "/praɪˈɒr.ɪ.taɪz/",
    definition: "To arrange or do in order of importance, urgency, cost, or value.",
    translation: "Ưu tiên hóa",
    example: "We must prioritize requirements to ensure high-value features are delivered in the first release.",
    category: "Planning"
  },
  {
    term: "Decomposition",
    type: "noun",
    pronunciation: "/ˌdiː.kɒm.pəˈzɪʃ.ən/",
    definition: "A technique that breaks down a complex concept, system, process, or deliverable into smaller, more manageable components.",
    translation: "Sự phân rã",
    example: "Functional decomposition breaks a large process down into sub-activities and tasks.",
    category: "Techniques"
  },
  {
    term: "Sponsor",
    type: "noun",
    pronunciation: "/ˈspɒn.sər/",
    definition: "The stakeholder who authorizes, funds, and champions a change initiative and has ultimate decision-making power.",
    translation: "Nhà tài trợ / Chủ đầu tư",
    example: "The executive sponsor signed the project charter to authorize the budget.",
    category: "General"
  },
  {
    term: "Persona",
    type: "noun",
    pronunciation: "/pəˈsəʊ.nə/",
    definition: "A fictional profile representing a user group, used to understand their behaviors, needs, and goals.",
    translation: "Hình tượng người dùng mục tiêu",
    example: "Creating a user persona helped our team design a more intuitive navigation bar for elderly users.",
    category: "Techniques"
  },
  {
    term: "Gap Analysis",
    type: "noun",
    pronunciation: "/ɡæp əˈnæl.ə.sɪs/",
    definition: "The comparison of actual performance or current state with potential/desired performance or future state to identify what is missing.",
    translation: "Phân tích khoảng cách (As-Is vs To-Be)",
    example: "The BA performed a gap analysis to identify capabilities missing from the legacy system.",
    category: "Strategy"
  },
  {
    term: "Elicit",
    type: "verb",
    pronunciation: "/iˈlɪs.ɪt/",
    definition: "To call forth, draw out, or provoke information or responses from stakeholders.",
    translation: "Khơi gợi / Thu thập",
    example: "The BA used open-ended questions to elicit requirements from the customer support team.",
    category: "Requirements"
  },
  {
    term: "Methodology",
    type: "noun",
    pronunciation: "/ˌmeθ.əˈdɒl.ə.dʒi/",
    definition: "A system of methods, principles, and rules used in a particular discipline, such as agile or waterfall.",
    translation: "Phương pháp luận",
    example: "The organization has adopted a hybrid methodology, using agile for coding and waterfall for compliance.",
    category: "Planning"
  },
  {
    term: "Use Case",
    type: "noun",
    pronunciation: "/juːs keɪs/",
    definition: "A description of the steps or interactions between a user (actor) and a software system to achieve a specific goal.",
    translation: "Trường hợp sử dụng / Use Case",
    example: "We documented the 'Register New User' use case to detail the validation errors and success screens.",
    category: "Techniques"
  },
  {
    term: "Prototype",
    type: "noun",
    pronunciation: "/ˈprəʊ.tə.taɪp/",
    definition: "A preliminary, working model of a product or software built to test ideas, designs, and requirements with users.",
    translation: "Bản mẫu / Nguyên mẫu thử nghiệm",
    example: "We built a low-fidelity wireframe prototype to gather early feedback on the layout.",
    category: "Techniques"
  },
  {
    term: "Scope",
    type: "noun",
    pronunciation: "/skəʊp/",
    definition: "The boundary of what is included and excluded in a project, system, or business analysis initiative.",
    translation: "Phạm vi",
    example: "Adding social media login was declared out of scope for the initial release.",
    category: "Planning"
  },
  {
    term: "Solution",
    type: "noun",
    pronunciation: "/səˈluː.ʃən/",
    definition: "A specific way of satisfying one or more needs in a context, consisting of software, processes, rules, or organizational structures.",
    translation: "Giải pháp",
    example: "The recommended solution includes both a new software system and a restructured warehouse workflow.",
    category: "General"
  },
  {
    term: "Deliverable",
    type: "noun",
    pronunciation: "/dɪˈlɪv.ər.ə.bəl/",
    definition: "Any unique and verifiable product, result, or capability that must be produced to complete a process or project.",
    translation: "Sản phẩm bàn giao",
    example: "The Business Requirements Document is the primary deliverable for this phase.",
    category: "Planning"
  },
  {
    term: "Acceptance Criteria",
    type: "noun",
    pronunciation: "/əkˈsep.təns kraɪˈtɪə.ri.ə/",
    definition: "The specific conditions, requirements, or quality standards that a solution must meet to be accepted by stakeholders.",
    translation: "Tiêu chí nghiệm thu",
    example: "The user story is not complete until it passes all predefined acceptance criteria.",
    category: "Requirements"
  },
  {
    term: "KPI",
    type: "noun",
    pronunciation: "/ˌkeɪ.piːˈaɪ/",
    definition: "Key Performance Indicator; a quantifiable measure used to evaluate the success of an organization or employee in meeting objectives.",
    translation: "Chỉ số đánh giá hiệu suất (KPI)",
    example: "The key KPI for the new app is reducing checkout abandonment by 15%.",
    category: "Evaluation"
  },
  {
    term: "Acumen",
    type: "noun",
    pronunciation: "/ˈæk.jə.mən/",
    definition: "The ability to make good judgments and quick decisions, typically in a particular domain (e.g. business acumen).",
    translation: "Sự nhạy bén / Đầu óc nhạy bén",
    example: "BAs need business acumen to understand how financial markets affect their projects.",
    category: "General"
  },
  {
    term: "Walkthrough",
    type: "noun",
    pronunciation: "/ˈwɔːk.θruː/",
    definition: "A step-by-step review of a document, process, or system design with stakeholders to gather feedback and confirm understanding.",
    translation: "Buổi đi qua rà soát chi tiết / Walkthrough",
    example: "We held a walkthrough of the process maps to ensure no steps were missing.",
    category: "Techniques"
  }
];
