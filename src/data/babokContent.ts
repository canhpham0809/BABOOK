export interface BACCMConcept {
  name: string;
  desc: string;
}

export interface BABOKSection {
  id: string;
  title: string;
  vietnameseTitle: string;
  content: string;
  keyTakeaways: string[];
  inputs?: string[];
  outputs?: string[];
  elements?: { name: string; desc: string }[];
  realWorldExample?: {
    scenario: string;
    details: string;
  };
  baccm?: BACCMConcept[];
}

export interface BABOKChapter {
  id: string;
  title: string;
  vietnameseTitle: string;
  description: string;
  sections: BABOKSection[];
}

export const babokChapters: BABOKChapter[] = [
  {
    id: "ch1",
    title: "Chapter 1: Introduction",
    vietnameseTitle: "Chương 1: Giới thiệu",
    description: "Learn the foundational definitions of Business Analysis, the Business Analyst role, and the structure of the BABOK Guide v3.",
    sections: [
      {
        id: "ch1_1",
        title: "1.1 Purpose of the BABOK Guide",
        vietnameseTitle: "1.1 Mục đích của BABOK Guide",
        content: "The Business Analysis Body of Knowledge (BABOK Guide) is a globally recognized standard for the practice of business analysis. It defines the skills, knowledge, tasks, and techniques that Business Analysts need to perform their work effectively. Rather than a set methodology, it acts as a comprehensive framework describing acceptable practices. It helps professionals understand the value business analysis brings to an organization, establishes a common terminology across companies globally, and ensures consistency in delivering change.",
        keyTakeaways: [
          "Defines the globally recognized standard for Business Analysis.",
          "Establishes a common terminology and framework.",
          "Helps organizations identify valuable solutions to meet their needs."
        ],
        realWorldExample: {
          scenario: "Standardizing BA Practices in a Banking Corporation",
          details: "A bank has 50 Business Analysts working in different departments (retail, wealth, credit). Because they lacked a common standard, they wrote requirements in different formats, resulting in confusion for developers. By adopting the BABOK Guide, the bank aligned on a single standards vocabulary, standardizing deliverables like Business Requirements Documents (BRD) and traceability templates, which reduced development rework by 25%."
        }
      },
      {
        id: "ch1_2",
        title: "1.2 What is Business Analysis?",
        vietnameseTitle: "1.2 Phân tích nghiệp vụ là gì?",
        content: "Business analysis is the practice of enabling change in an organizational context by defining needs and recommending solutions that deliver value to stakeholders. BAs do not just build systems; they understand the organizational context, define the core underlying problems (needs), and design solutions. A solution can be software, but it can also involve process changes, organizational restructuring, policy updates, or training.",
        keyTakeaways: [
          "Enables change in an organization by defining needs.",
          "Recommends solutions that deliver value to stakeholders.",
          "Applies to projects, continuous improvement, and overall enterprise evolution."
        ],
        inputs: ["Needs / Opportunities"],
        outputs: ["Recommended Solutions", "Delivered Value"],
        realWorldExample: {
          scenario: "Solving High Customer Churn rate on an E-wallet App",
          details: "Instead of jumping straight into coding new discount pop-ups (a software solution), a BA analyzed the user drop-off process. They discovered that users were dropping off because bank-linking was failing frequently. The BA recommended negotiating faster APIs with partner banks and restructuring the registration flow. This process-level and technical recommendation successfully reduced customer churn by 40%."
        }
      },
      {
        id: "ch1_3",
        title: "1.3 Who is a Business Analyst?",
        vietnameseTitle: "1.3 Chuyên viên phân tích nghiệp vụ (BA) là ai?",
        content: "A Business Analyst is any person who performs business analysis tasks described in the BABOK Guide, regardless of their organizational job title. BAs are responsible for discovering, synthesizing, and analyzing information from various sources. They investigate stakeholder desires, clarify real needs, align organizational goals, and define the detailed requirements for solutions. They serve as a bridge connecting business stakeholders, technical developers, and external partners.",
        keyTakeaways: [
          "Anyone who performs BA tasks, regardless of formal job title.",
          "Responsible for discovering, synthesizing, and analyzing information.",
          "Acts as a critical bridge between business stakeholders and technical teams."
        ],
        elements: [
          { name: "Roles and Titles", desc: "BAs can be Product Owners, Systems Analysts, Process Analysts, Business Architects, or Consultants." },
          { name: "Core Responsibilities", desc: "Understanding enterprise problems, defining goals, eliciting stakeholder requirements, and validating values." }
        ],
        realWorldExample: {
          scenario: "A QA Lead transitions to a BA role",
          details: "An employee with the title of QA Lead started facilitating customer workshops, mapping workflow diagrams, and defining features for a new checkout process. Even though their official contract said 'QA Lead', they were actively practicing Business Analysis. Aligning with BABOK 1.3, they adopted BA tools which helped them land a formal BA lead position."
        }
      },
      {
        id: "ch1_4",
        title: "1.4 Structure of the BABOK Guide",
        vietnameseTitle: "1.4 Cấu trúc của tài liệu BABOK Guide v3",
        content: "The BABOK Guide is structured into key components: 1) Knowledge Areas (6 core areas containing tasks), 2) Tasks (specific actions BAs perform), 3) Underlying Competencies (skills/behaviors BAs need), 4) Techniques (50 specific methods to execute tasks), and 5) Perspectives (5 context-driven lenses like Agile or IT). This structure provides a complete framework for learning and practice.",
        keyTakeaways: [
          "Knowledge Areas (6 KAs) contain the core tasks BAs perform.",
          "Techniques (50 total) describe how to execute tasks.",
          "Underlying Competencies define skills BAs need to be effective."
        ],
        elements: [
          { name: "Knowledge Areas", desc: "Planning & Monitoring, Elicitation & Collaboration, Requirements Life Cycle, Strategy Analysis, RADD, and Solution Evaluation." },
          { name: "Techniques", desc: "Methods like SWOT, User Stories, Data Models, Brainstorming, etc." },
          { name: "Underlying Competencies", desc: "Analytical Thinking, Behavioral Characteristics, Business Knowledge, and Communication." }
        ],
        realWorldExample: {
          scenario: "Navigating the BABOK Guide for a Project",
          details: "A BA assigned to a complex enterprise project maps their plan using the BABOK structure. They use 'Strategy Analysis' (KA) to define the scope, select 'Workshops' and 'Interviews' (Techniques) to elicit requirements, and apply 'Systems Thinking' (Underlying Competency) to verify that all systems align, demonstrating how the BABOK components work together."
        }
      }
    ]
  },
  {
    id: "ch2",
    title: "Chapter 2: Business Analysis Key Concepts",
    vietnameseTitle: "Chương 2: Các khái niệm cốt lõi",
    description: "Explore the Business Analysis Core Concept Model (BACCM), requirements classification schema, and key stakeholder types.",
    sections: [
      {
        id: "ch2_1",
        title: "2.1 The Business Analysis Core Concept Model (BACCM)",
        vietnameseTitle: "2.1 Mô hình khái niệm cốt lõi (BACCM)",
        content: "The BACCM is a conceptual framework for business analysis. It consists of six core concepts that are equal and necessary. Each concept is defined by the other five, meaning you cannot fully understand one without the others. BAs use the BACCM to analyze and structure business situations, verify that all aspects of a change have been addressed, and evaluate the overall quality of their BA work.",
        keyTakeaways: [
          "The BACCM is composed of 6 equal and interdependent core concepts.",
          "Change: Transformation to address a need.",
          "Need: A problem or opportunity of interest.",
          "Solution: A specific way of satisfying needs.",
          "Stakeholder: An individual or group affected by or involved in a change.",
          "Value: The worth or usefulness of something to stakeholders.",
          "Context: The circumstances influencing the change (culture, technology, structure)."
        ],
        baccm: [
          { name: "Change (Thay đổi)", desc: "The act of transformation in response to a need. Example: Automating customer KYC onboarding." },
          { name: "Need (Nhu cầu)", desc: "A problem or opportunity to be addressed. Example: Reducing user registration time to comply with new regulations." },
          { name: "Solution (Giải pháp)", desc: "A specific way of satisfying one or more needs. Example: Integrating an AI-based OCR photo scanning API." },
          { name: "Stakeholder (Bên liên quan)", desc: "A group or individual with a relationship to the change. Example: Customers, Compliance Officers, Developers." },
          { name: "Value (Giá trị)", desc: "The worth, importance, or usefulness of something. Example: Faster approval rate and higher customer satisfaction." },
          { name: "Context (Bối cảnh)", desc: "The circumstances that influence and are influenced by the change. Example: Smartphone penetration rates and local privacy laws." }
        ],
        realWorldExample: {
          scenario: "Analyzing a Credit Card Approval project through BACCM",
          details: "A BA applies the BACCM to structure a project. The NEED is a high card rejection rate. The CHANGE is migrating from manual underwriting to automatic scoring. The SOLUTION is a scoring engine. The STAKEHOLDERS are risk controllers and card buyers. The VALUE is a drop in approval time from 5 days to 2 minutes. The CONTEXT is the high digital literacy of the target youth segment."
        }
      },
      {
        id: "ch2_2",
        title: "2.2 Requirements Classification Schema",
        vietnameseTitle: "2.2 Phân loại yêu cầu (Requirements)",
        content: "Requirements are not all the same. BAs classify them to ensure completeness and establish clear tracing. Business requirements outline the 'why' from the enterprise perspective. Stakeholder requirements outline the 'what' from the user perspective. Solution requirements specify the system capabilities (split into Functional - behaviors/screens, and Non-Functional - qualities like security, loading speeds, availability). Transition requirements are temporary conditions needed to safely deploy the solution.",
        keyTakeaways: [
          "Business Requirements: High-level organization goals and objectives.",
          "Stakeholder Requirements: Bridging goals, what specific users need.",
          "Solution Requirements: Capabilities of the system. Split into Functional (features/behaviors) and Non-Functional (performance, security, usability).",
          "Transition Requirements: Temporary conditions needed to deploy the solution."
        ],
        elements: [
          { name: "Business Requirements", desc: "Enterprise-wide statements of goals and objectives. E.g., 'Increase annual revenue by 15%.'" },
          { name: "Stakeholder Requirements", desc: "User needs and bridge concepts. E.g., 'As a premium user, I must be able to download transaction history reports in PDF.'" },
          { name: "Functional Requirements", desc: "System behaviors, data fields, and rules. E.g., 'The system must send a OTP code via SMS when the transaction exceeds 10 million VND.'" },
          { name: "Non-Functional Requirements", desc: "System qualities, security, speed, and limits. E.g., 'The payment screen must load within 1.5 seconds under 3G connection.'" },
          { name: "Transition Requirements", desc: "Temporary deployment constraints. E.g., 'Existing customer data must be migrated to the new database structure before launch.'" }
        ],
        realWorldExample: {
          scenario: "Classifying Requirements for a Peer-to-Peer Lending App",
          details: "The BA maps: Business Requirement = Capture 10% of sub-prime loan market. Stakeholder Requirement = Investors need to view loan risk ratings. Functional Requirement = System displays risk ratings using Color Codes (Green/Yellow/Red). Non-Functional Requirement = Database encrypted using AES-256 standards. Transition Requirement = Operations staff must attend 2 hours of training on the risk rating algorithm."
        }
      },
      {
        id: "ch2_3",
        title: "2.3 Requirements vs Designs",
        vietnameseTitle: "2.3 Yêu cầu (Requirements) đối chiếu Thiết kế (Designs)",
        content: "Requirements represent the need: what must be solved or achieved. Designs represent the solution: how that need will be met. The boundary is fluid. A requirement can lead to a design, which then generates lower-level requirements. Business requirements are high-level needs, while screen mockups or API schemas represent designs.",
        keyTakeaways: [
          "Requirements focus on the need (what).",
          "Designs focus on the solution representation (how).",
          "The boundary is fluid and depends on context."
        ],
        realWorldExample: {
          scenario: "Defining requirements vs designs for card payments",
          details: "Requirement: 'The system must support fast contactless payments.' Design: A high-fidelity UI wireframe showing a tap-to-pay button and a sequence flow showing connection to Visa/Mastercard payment rails."
        }
      },
      {
        id: "ch2_4",
        title: "2.4 Stakeholders",
        vietnameseTitle: "2.4 Các bên liên quan (Stakeholders)",
        content: "A stakeholder is an individual or group affected by or involved in a change. The BABOK Guide lists key roles: Customer (who uses the product), End User (directly operates the system), Domain Subject Matter Expert (SME - process experts), Project Manager, Tester, Sponsor (funds the project), Regulator (compliance/legal), and Supplier (vendors).",
        keyTakeaways: [
          "BAs must identify all stakeholders to elicit complete requirements.",
          "Different stakeholders have different values and perspectives.",
          "Sponsors hold the ultimate decision and funding authority."
        ],
        realWorldExample: {
          scenario: "Stakeholder mapping for bank integration",
          details: "The BA maps: Sponsor = Head of Retail Banking. Domain SME = Head of Card Operations. Regulator = State Bank Compliance auditor. Tester = QA team lead. Supplier = Third-party KYC OCR provider."
        }
      },
      {
        id: "ch2_5",
        title: "2.5 Requirements and Designs",
        vietnameseTitle: "2.5 Khái quát Yêu cầu và Thiết kế",
        content: "Requirements and designs exist in a hierarchy. At the top are high-level business goals (Business Requirements). These derive into User/Stakeholder requirements, which are designed into system capabilities, which in turn specify database fields. BAs must manage this entire vertical stack to ensure alignment and value delivery.",
        keyTakeaways: [
          "Both requirements and designs evolve from high-level to detailed.",
          "BAs ensure designs satisfy requirements.",
          "Traceability maintains the alignment across the stack."
        ]
      }
    ]
  },
  {
    id: "ch3",
    title: "Chapter 3: BA Planning and Monitoring",
    vietnameseTitle: "Chương 3: Lập kế hoạch và Giám sát Phân tích nghiệp vụ",
    description: "Understand how BAs plan their approach, stakeholder engagement, governance, information management, and improvement cycles.",
    sections: [
      {
        id: "ch3_1",
        title: "3.1 Plan Business Analysis Approach",
        vietnameseTitle: "3.1 Lập kế hoạch phương pháp phân tích nghiệp vụ",
        content: "This task describes the planning of business analysis work from choosing a methodology to defining deliverables and tasks. BAs must decide whether to use a Predictive approach (plan-driven/waterfall, focusing on upfront documentation and change control) or an Adaptive approach (change-driven/agile, focusing on iterations, quick feedback, and lightweight backlogs). The approach dictates how requirements will be managed.",
        keyTakeaways: [
          "Selects methodology: Predictive (plan-driven) vs. Adaptive (change-driven).",
          "Inputs: Needs.",
          "Outputs: Business Analysis Approach."
        ],
        inputs: ["Needs (Nhu cầu)"],
        outputs: ["Business Analysis Approach (Phương pháp BA)"],
        elements: [
          { name: "Planning Decision", desc: "Choose Waterfall (rigid, clear scope) or Agile (high uncertainty, iterative releases)." },
          { name: "BA Activities", desc: "Define what tasks will be performed, when, and what templates will be used." },
          { name: "Deliverables", desc: "List documents like PRD, UML diagrams, user story maps, or wireframes to be produced." },
          { name: "Stakeholder Engagement", desc: "Determine how often business team members must meet to review progress." }
        ],
        realWorldExample: {
          scenario: "Planning BA Approach for a Core Banking Migration vs. Mini-App Feature",
          details: "For a core banking migration, the BA plans a Predictive Approach because regulatory compliance requires strict upfront documentation and rigid approvals. For a new loyalty game inside a shopping app, the BA plans an Adaptive Approach, holding daily stand-ups and drafting lightweight user stories directly in Jira to test value within 2-week sprints."
        }
      },
      {
        id: "ch3_2",
        title: "3.2 Plan Stakeholder Engagement",
        vietnameseTitle: "3.2 Lập kế hoạch gắn kết các bên liên quan",
        content: "BAs analyze stakeholders to determine their roles, influence, authority, and preferences. BAs map stakeholder relationships, estimate their level of interest and influence (using matrices), and define communication frequency, collaboration formats, and feedback loops to build trust and alignment.",
        keyTakeaways: [
          "Identifies and maps stakeholder interest and influence.",
          "Establishes communication frequencies and collaboration formats.",
          "Outputs: Stakeholder Engagement Approach."
        ],
        inputs: ["Needs", "Business Analysis Approach"],
        outputs: ["Stakeholder Engagement Approach"],
        elements: [
          { name: "Stakeholder Analysis", desc: "Perform power/interest grids to identify decision-makers, core experts, and passive users." },
          { name: "Collaboration Plan", desc: "Define workshop formats, review frequency, and digital tools (like Miro or Jira)." }
        ],
        realWorldExample: {
          scenario: "Planning engagement for a third-party accounting system sync",
          details: "The BA identified the Head of Accounting as 'High Power, High Interest'. They planned weekly 1-on-1 walkthroughs. Passive end-users were grouped as 'Low Power, High Interest' and planned for group bi-weekly surveys, optimizing stakeholder alignment."
        }
      },
      {
        id: "ch3_3",
        title: "3.3 Plan Business Analysis Governance",
        vietnameseTitle: "3.3 Lập kế hoạch quản trị phân tích nghiệp vụ",
        content: "Governance defines the decision-making process for business analysis. BAs must establish clear protocols for: who prioritizes requirements, who has the authority to approve changes, who must be consulted during impact analysis, and how conflicts are escalated. This prevents scope creep and unauthorized changes.",
        keyTakeaways: [
          "Establishes decision-making, change control, and prioritization rules.",
          "Identifies escalation paths and approval authorities.",
          "Outputs: Governance Approach."
        ],
        inputs: ["Business Analysis Approach", "Stakeholder Engagement Approach"],
        outputs: ["Governance Approach (Phương pháp Quản trị)"],
        elements: [
          { name: "Decision Making", desc: "Establish who represents the final business decision-makers (e.g. Sponsor, Product Owner)." },
          { name: "Change Control Process", desc: "Define how change requests are submitted, analyzed for impact, and signed off." },
          { name: "Prioritization Plan", desc: "Agree on the scoring models (like MoSCoW: Must, Should, Could, Won't) to resolve priority conflicts." }
        ],
        realWorldExample: {
          scenario: "Handling Mid-Sprint Scope Creep on a Payment Gateway Project",
          details: "A marketing manager requested adding a new cryptocurrency payment method in the middle of a release cycle. Because the BA had planned the Governance Approach, they routed the request through the Change Control Process. The BA conducted an impact analysis (which showed it would delay the launch by 4 weeks), presented it to the Project Sponsor, who rejected the change for this release, saving the timeline."
        }
      },
      {
        id: "ch3_4",
        title: "3.4 Plan BA Information Management",
        vietnameseTitle: "3.4 Lập kế hoạch quản lý thông tin phân tích nghiệp vụ",
        content: "This task structures how BA deliverables (requirements, models, and metadata) are stored, organized, and retrieved. BAs plan traceability relationships, choose requirements tools, define naming conventions, and establish access levels to ensure information remains reusable.",
        keyTakeaways: [
          "Defines how requirements are structured, saved, and accessed.",
          "Establishes standard naming conventions and version controls.",
          "Outputs: Information Management Approach."
        ],
        inputs: ["Business Analysis Approach", "Stakeholder Engagement Approach", "Governance Approach"],
        outputs: ["Information Management Approach"],
        realWorldExample: {
          scenario: "Setting up a Confluence Workspace for Credit Scoring Core",
          details: "The BA organized requirements under Confluence folders by functional module, created a Jira integration template, and defined a tagging system (`[CreditScore]`, `[UserOnboarding]`) to allow developers to retrieve rules within 5 seconds."
        }
      },
      {
        id: "ch3_5",
        title: "3.5 Identify BA Performance Improvements",
        vietnameseTitle: "3.5 Xác định cải tiến hiệu suất phân tích nghiệp vụ",
        content: "BAs monitor actual analysis performance against goals, identify delays or quality issues in requirements documentation, gather feedback from developers and testers, and implement corrective actions (continuous improvement).",
        keyTakeaways: [
          "Compares actual BA timelines and quality against planning.",
          "Implements corrective adjustments (Plan-Do-Check-Act).",
          "Outputs: Business Analysis Performance Assessment."
        ],
        inputs: ["Business Analysis Approach", "Performance Objectives"],
        outputs: ["Business Analysis Performance Assessment"],
        realWorldExample: {
          scenario: "Correcting delayed requirement delivery",
          details: "During retrospectives, developers complained that UI mock-ups were missing, delaying sprints. The BA updated their planning checklist to require UX approvals 3 days before sprint planning, resolving the bottleneck."
        }
      }
    ]
  },
  {
    id: "ch4",
    title: "Chapter 4: Elicitation and Collaboration",
    vietnameseTitle: "Chương 4: Khơi gợi và Hợp tác",
    description: "Learn how to prepare, conduct, and confirm elicitation results, and manage stakeholder relationships.",
    sections: [
      {
        id: "ch4_1",
        title: "4.1 Prepare for Elicitation",
        vietnameseTitle: "4.1 Chuẩn bị khơi gợi yêu cầu",
        content: "Preparation involves defining the scope of the elicitation activity, selecting appropriate techniques (interviews, workshops, surveys, observation), identifying participants, setting up logistics, and drafting questions or preparing prototypes.",
        keyTakeaways: [
          "Defines the elicitation scope and selects techniques.",
          "Prepares logistics and templates.",
          "Outputs: Elicitation Activity Plan."
        ],
        inputs: ["Needs", "Business Analysis Approach"],
        outputs: ["Elicitation Activity Plan"],
        realWorldExample: {
          scenario: "Preparing for KYC workflow optimization interviews",
          details: "The BA defined a scope (KYC registration drop-offs), selected three compliance officers, prepared 5 open-ended questions about manual checks, and scheduled 1-on-1 Teams calls."
        }
      },
      {
        id: "ch4_2",
        title: "4.2 Conduct Elicitation",
        vietnameseTitle: "4.2 Thực hiện khơi gợi yêu cầu",
        content: "Conducting elicitation is the execution phase of discovering requirements. It is not just about 'gathering' requirements; it is a proactive exploration of business needs. BAs use three types of elicitation: Collaborative (active group work like workshops, focus groups, and interviews), Research (document analysis, benchmarking, and interface analysis), and Experimental (building wireframe prototypes and user tests).",
        keyTakeaways: [
          "Types: Collaborative, Research, and Experimental.",
          "Explores and discovers stakeholder needs, goals, and constraints.",
          "Outputs: Elicitation Results (Unconfirmed)."
        ],
        inputs: ["Elicitation Activity Plan", "Supporting Materials"],
        outputs: ["Elicitation Results (Unconfirmed)"],
        elements: [
          { name: "Collaborative", desc: "Direct interactions. E.g., Conducting structured interviews with warehouse operators to find processing bottlenecks." },
          { name: "Research", desc: "Static data analysis. E.g., Reviewing compliance logs to check error rates in loan applications." },
          { name: "Experimental", desc: "Interactive feedback. E.g., Showing a clickable wireframe UI mock-up to users to verify navigation flow." }
        ],
        realWorldExample: {
          scenario: "Eliciting Requirements for a Kid's Savings Account Feature",
          details: "A BA combined all three types. First, they researched competitor products (Research). Second, they conducted a workshop with parents and kids to brainstorm ideas (Collaborative). Third, they showed a low-fidelity paper mock-up of a virtual piggy bank to kids to observe their reactions (Experimental). This comprehensive elicitation revealed that kids prefer animations over text metrics."
        }
      },
      {
        id: "ch4_3",
        title: "4.3 Confirm Elicitation Results",
        vietnameseTitle: "4.3 Xác nhận kết quả khơi gợi",
        content: "BAs review the information gathered during elicitation to check for accuracy, consistency, and alignment with other sources. BAs compare findings from interviews with system logs and confirm details with stakeholders to resolve discrepancies.",
        keyTakeaways: [
          "Checks elicited data for correctness, clarity, and consistency.",
          "Identifies gaps or misunderstandings early.",
          "Outputs: Elicitation Results (Confirmed)."
        ],
        inputs: ["Elicitation Results (Unconfirmed)"],
        outputs: ["Elicitation Results (Confirmed)"],
        realWorldExample: {
          scenario: "Confirming e-wallet registration limits",
          details: "In a meeting, the operations manager said transaction limits were 50M VND. The BA checked central bank policies (Research) which said 100M VND. The BA held a quick sync to confirm the 100M limit and recorded the validated requirement."
        }
      },
      {
        id: "ch4_4",
        title: "4.4 Communicate BA Information",
        vietnameseTitle: "4.4 Giao tiếp thông tin phân tích nghiệp vụ",
        content: "BAs package business analysis information (requirements, models, and plans) and present it to stakeholders in formats tailored to their roles (decks, spreadsheets, process charts, walkthroughs). This ensures a shared understanding.",
        keyTakeaways: [
          "Packages information for specific audiences.",
          "Conducts formal walkthroughs or reviews.",
          "Outputs: Business Analysis Information (Communicated)."
        ],
        inputs: ["Business Analysis Information"],
        outputs: ["Business Analysis Information (Communicated)"],
        realWorldExample: {
          scenario: "Packaging a new card feature for Developers vs Executives",
          details: "The BA created a high-level visual journey slide deck for the Executive Sponsor (value-focused), and a detailed Jira Epic with Use Case diagrams for the engineering team (spec-focused)."
        }
      },
      {
        id: "ch4_5",
        title: "4.5 Manage Stakeholder Collaboration",
        vietnameseTitle: "4.5 Quản lý hợp tác của các bên liên quan",
        content: "BAs monitor stakeholder engagement, manage relationships, build trust, handle resistance, and resolve conflicts regarding priorities and scope, ensuring stakeholders stay committed to the change.",
        keyTakeaways: [
          "Maintains high engagement, trust, and alignment.",
          "Resolves conflicts between stakeholders.",
          "Outputs: Stakeholder Engagement."
        ],
        inputs: ["Business Analysis Approach", "Stakeholder Engagement Approach"],
        outputs: ["Stakeholder Engagement"],
        realWorldExample: {
          scenario: "Resolving UI layout conflict between marketing and IT",
          details: "Marketing wanted rich animations, while IT warned of server lag. The BA facilitated a compromise: standard animations with caching, keeping both teams collaborating productively."
        }
      }
    ]
  },
  {
    id: "ch5",
    title: "Chapter 5: Requirements Life Cycle Management",
    vietnameseTitle: "Chương 5: Quản lý vòng đời yêu cầu",
    description: "Understand how requirements are traced, maintained, prioritized, evaluated for change, and approved.",
    sections: [
      {
        id: "ch5_1",
        title: "5.1 Trace Requirements",
        vietnameseTitle: "5.1 Truy vết yêu cầu",
        content: "Traceability involves linking requirements and designs from their business origin (business goals) down to implementation components, software code, and test cases. It is critical for: Impact Analysis (checking which features are affected when a goal changes), Coverage Analysis (checking if all business goals are met by solutions), and Auditing.",
        keyTakeaways: [
          "Links requirements from business goals down to software code and test cases.",
          "Enables impact analysis, coverage checks, and audit trails.",
          "Outputs: Requirements (Traced), Designs (Traced)."
        ],
        inputs: ["Requirements", "Designs"],
        outputs: ["Requirements (Traced)", "Designs (Traced)"],
        elements: [
          { name: "Derivation Tracing", desc: "Link business goals to stakeholder requirements, and then to solution requirements." },
          { name: "Implementation Tracing", desc: "Link solution requirements to technical architecture components and source code." },
          { name: "Verification Tracing", desc: "Link functional requirements to QA test scenarios and user acceptance test cases." }
        ],
        realWorldExample: {
          scenario: "Performing Traceability Audit on an E-invoice Compliance System",
          details: "Due to new tax regulations, a business rule changed. The BA opened their Traceability Matrix. They mapped the tax rule to 3 stakeholder requirements, which mapped to 5 software modules and 4 QA test cases. Developers updated only those 5 modules and testers ran only those 4 test cases. The audit took 2 hours instead of 3 weeks of scanning the entire system."
        }
      },
      {
        id: "ch5_2",
        title: "5.2 Maintain Requirements",
        vietnameseTitle: "5.2 Duy trì yêu cầu",
        content: "BAs ensure requirements are kept accurate, current, and organized during and after a change initiative. This maintains requirements in a format that allows them to be reused for future projects or ongoing operations.",
        keyTakeaways: [
          "Keeps requirements accurate, organized, and reusable.",
          "Maintains metadata like author, status, and version.",
          "Outputs: Requirements (Maintained), Designs (Maintained)."
        ],
        inputs: ["Requirements", "Designs"],
        outputs: ["Requirements (Maintained)", "Designs (Maintained)"],
        realWorldExample: {
          scenario: "Reusing KYC requirements for credit card product onboarding",
          details: "Instead of eliciting customer onboarding rules again, the BA accessed the maintained 'KYC Core Requirements' folder in Confluence and imported the validated rules, saving 3 weeks of work."
        }
      },
      {
        id: "ch5_3",
        title: "5.3 Prioritize Requirements",
        vietnameseTitle: "5.3 Ưu tiên hóa yêu cầu",
        content: "BAs facilitate agreements among stakeholders to rank requirements. Prioritization factors include business value, risks, implementation costs, ease, urgency, regulatory penalties, and technical dependencies.",
        keyTakeaways: [
          "Ranks requirements to determine implementation order.",
          "Uses factors like MoSCoW, ROI, and risk assessment.",
          "Outputs: Requirements (Prioritized), Designs (Prioritized)."
        ],
        inputs: ["Requirements", "Designs"],
        outputs: ["Requirements (Prioritized)", "Designs (Prioritized)"],
        realWorldExample: {
          scenario: "Applying MoSCoW to an MVP E-wallet",
          details: "Must Have: Fund transfers (core value). Should Have: Biometric login (high UX value). Could Have: QR themes (nice to have). Won't Have: Crypto wallets (postponed)."
        }
      },
      {
        id: "ch5_4",
        title: "5.4 Assess Requirements Changes",
        vietnameseTitle: "5.4 Đánh giá thay đổi yêu cầu",
        content: "When a change is requested, BAs assess its impact on the business objectives, schedule, budget, complexity, and risks. BAs determine if the change provides enough net value to justify modifying the project baseline.",
        keyTakeaways: [
          "Analyzes change requests for schedule, cost, and benefit impacts.",
          "Verifies alignment with the initial business goals.",
          "Outputs: Requirements Change Assessment."
        ],
        inputs: ["Requirements", "Designs", "Proposed Change"],
        outputs: ["Requirements Change Assessment"],
        realWorldExample: {
          scenario: "Evaluating a face-match API request",
          details: "Marketing requested an additional face-match check during logins. The BA's assessment showed this would double API usage costs and add 2 seconds of latency, prompting a recommendation to delay the change."
        }
      },
      {
        id: "ch5_5",
        title: "5.5 Approve Requirements",
        vietnameseTitle: "5.5 Phê duyệt yêu cầu",
        content: "BAs facilitate review sessions and obtain formal sign-offs from authorized decision-makers, indicating that requirements and designs are complete, validated, and ready for development.",
        keyTakeaways: [
          "Secures formal sign-off from authorized decision-makers.",
          "Resolves outstanding disputes before coding begins.",
          "Outputs: Requirements (Approved), Designs (Approved)."
        ],
        inputs: ["Requirements", "Designs"],
        outputs: ["Requirements (Approved)", "Designs (Approved)"],
        realWorldExample: {
          scenario: "Hosting an approval walkthrough",
          details: "The BA hosted a walkthrough of the billing rules with the Sponsor (Business Head) and Tech Lead. After aligning on a database locking rule, both signed the release document."
        }
      }
    ]
  },
  {
    id: "ch6",
    title: "Chapter 6: Strategy Analysis",
    vietnameseTitle: "Chương 6: Phân tích Chiến lược",
    description: "Discover how to analyze the current state, define the target future state, assess risks, and formulate a change strategy.",
    sections: [
      {
        id: "ch6_1",
        title: "6.1 Analyze Current State",
        vietnameseTitle: "6.1 Phân tích trạng thái hiện tại",
        content: "BAs analyze the current organization structure, processes, culture, capabilities, and technology (As-Is state) to establish a baseline. This helps identify problems and opportunities and understand what constraints exist in the current environment.",
        keyTakeaways: [
          "Establishes the baseline (As-Is state).",
          "Examines business processes, capabilities, systems, and constraints.",
          "Outputs: Current State Description, Business Requirements."
        ],
        inputs: ["Needs"],
        outputs: ["Current State Description", "Business Requirements"],
        realWorldExample: {
          scenario: "Analyzing current manual loan processing flow",
          details: "The BA mapped out the existing flow. They found that customer files were hand-delivered across 3 floors for approvals, causing a 5-day delay per application. This mapped the baseline 'As-Is' state."
        }
      },
      {
        id: "ch6_2",
        title: "6.2 Define Future State",
        vietnameseTitle: "6.2 Xác định trạng thái tương lai",
        content: "Defining the future state involves specifying the desired goals, capabilities, processes, structures, and systems (To-Be state) that will solve current problems or capture new opportunities. BAs must define success metrics, key performance indicators (KPIs), and constraints that determine whether the solution has successfully delivered value.",
        keyTakeaways: [
          "Defines the target destination (To-Be state).",
          "Specifies the objectives and success metrics.",
          "Outputs: Future State Description, Business Objectives."
        ],
        inputs: ["Current State Description", "Business Requirements"],
        outputs: ["Future State Description (Mô tả TT Tương lai)", "Business Objectives (Mục tiêu KD)"],
        elements: [
          { name: "Business Objectives", desc: "Establish measurable success criteria (e.g. increase net profit margin by 3% within 12 months)." },
          { name: "Solution Scope", desc: "Define boundaries of the new system capability and process flows." },
          { name: "Success Metrics", desc: "Define indicators like Customer Satisfaction (CSAT) score or Transaction Success Rate." }
        ],
        realWorldExample: {
          scenario: "Defining the Future State for a Fintech Digital Lending Service",
          details: "A BA defined the future state. The objective: approve consumer micro-loans within 5 minutes. The future state description detailed an automatic scoring engine connected to national credit databases. The success metrics: target loan default rate below 2.5%, UAT feedback score above 4.5/5, and automatic processing rate of 90% without manual review."
        }
      },
      {
        id: "ch6_3",
        title: "6.3 Assess Risks",
        vietnameseTitle: "6.3 Đánh giá rủi ro",
        content: "BAs identify and assess potential risks that could prevent the organization from achieving the future state or disrupt operations during the transition. Risks are evaluated based on their probability and impact, and mitigation strategies are planned.",
        keyTakeaways: [
          "Identifies threats to the change initiative.",
          "Evaluates risk probability, impact, and determines mitigation plans.",
          "Outputs: Risk Analysis Results."
        ],
        inputs: ["Current State Description", "Future State Description", "Change Strategy"],
        outputs: ["Risk Analysis Results"],
        realWorldExample: {
          scenario: "Assessing risk of bank API down-time",
          details: "The BA identified a risk: Partner bank API may experience high down-time. Probability = Medium. Impact = High. Mitigation: Build a local database cache and queue transactions for retry, reducing service disruption."
        }
      },
      {
        id: "ch6_4",
        title: "6.4 Define Change Strategy",
        vietnameseTitle: "6.4 Xác định chiến lược thay đổi",
        content: "The change strategy is the high-level plan that describes how the organization will transition from the current state to the future state. It outlines the transition path, determines if the solution should be built, bought, or leased, and establishes the release roadmap.",
        keyTakeaways: [
          "Defines the transition path and scope releases.",
          "Determines build vs. buy decisions.",
          "Outputs: Change Strategy, Transition States."
        ],
        inputs: ["Current State Description", "Future State Description", "Risk Analysis Results"],
        outputs: ["Change Strategy", "Transition States"],
        realWorldExample: {
          scenario: "Formulating a phased rollout strategy",
          details: "For a new core bank migration, the BA formulated a change strategy: Release to employees first (Transition State 1), then to 10% of retail customers (Transition State 2), before a 100% rollout."
        }
      }
    ]
  },
  {
    id: "ch7",
    title: "Chapter 7: Requirements Analysis and Design Definition",
    vietnameseTitle: "Chương 7: Phân tích yêu cầu và Xác định thiết kế (RADD)",
    description: "Learn how to model requirements, verify and validate them, establish architecture, and define options.",
    sections: [
      {
        id: "ch7_1",
        title: "7.1 Specify and Model Requirements",
        vietnameseTitle: "7.1 Chi tiết hóa và Mô hình hóa yêu cầu",
        content: "This task involves converting raw elicitation results into structured requirements and design models. Models can be text-based, matrices, or visual diagrams (e.g., process maps, use cases, data models). Modeling helps stakeholders understand complex relationships.",
        keyTakeaways: [
          "Translates raw notes into structured documents and diagrams.",
          "Uses matrices, flowcharts, data models, or user stories.",
          "Outputs: Requirements (Specified and Modeled)."
        ],
        inputs: ["Elicitation Results (Confirmed)"],
        outputs: ["Requirements (Specified & Modeled)"],
        realWorldExample: {
          scenario: "Modeling checkout payments via BPMN",
          details: "The BA converted text notes into a BPMN diagram showing 3 lanes (User, E-wallet App, Bank API) to detail the payment flow."
        }
      },
      {
        id: "ch7_2",
        title: "7.2 Verify Requirements",
        vietnameseTitle: "7.2 Kiểm chứng yêu cầu (Verification)",
        content: "Verification checks that requirements and designs are of high quality, follow standard templates, and are free of errors. BAs ensure that requirements are clear, concise, complete, consistent, and testable. In short, verification asks: 'Did we build the requirements document correctly?'",
        keyTakeaways: [
          "Ensures quality standards, clarity, completeness, and testability.",
          "Checks syntax, formats, and checklist standards.",
          "Outputs: Requirements (Verified)."
        ],
        inputs: ["Requirements (Specified & Modeled)"],
        outputs: ["Requirements (Verified)"],
        elements: [
          { name: "Accuracy", desc: "Verify that the business rules are correctly recorded." },
          { name: "Completeness", desc: "Ensure no data fields, rules, or edge cases are missing." },
          { name: "Testability", desc: "Verify that QA testers can write binary pass/fail test cases based on the requirements." },
          { name: "Unambiguity", desc: "Ensure there is only one possible interpretation of the requirements." }
        ],
        realWorldExample: {
          scenario: "Fixing a Verification Error in a Payment Transfer Requirement",
          details: "A BA wrote: 'The system should process high-value transfers quickly.' During verification, the lead BA flagged this. The statement is ambiguous ('high-value', 'quickly'). The BA rewrote it to: 'The system must process bank transfers exceeding 500 million VND (high-value) within 3 seconds (quickly)'. This requirement is now verified because it is clear and testable."
        }
      },
      {
        id: "ch7_3",
        title: "7.3 Validate Requirements",
        vietnameseTitle: "7.3 Xác thực yêu cầu (Validation)",
        content: "Validation checks that requirements and designs actually deliver value and support business goals. It ensures that the proposed solution meets the real business need. In short, validation asks: 'Are we building the right solution?' A requirement can be verified (written correctly) but not validated (does not deliver the expected business value).",
        keyTakeaways: [
          "Ensures requirements align with business objectives and deliver value.",
          "Confirms that implementing the requirement actually solves the core problem.",
          "Outputs: Requirements (Validated)."
        ],
        inputs: ["Requirements (Specified & Modeled)"],
        outputs: ["Requirements (Validated)"],
        realWorldExample: {
          scenario: "Validating a Biometric Login Requirement",
          details: "A BA proposed requiring facial recognition for all minor account balance checks. The requirement was clear and testable (verified). However, during validation, the BA realized this would slow down app interactions, causing user frustration and dropping login rates. Since it conflicted with the business goal of increasing active users, the requirement was rejected (not validated)."
        }
      },
      {
        id: "ch7_4",
        title: "7.4 Define Requirements Architecture",
        vietnameseTitle: "7.4 Xác định cấu trúc yêu cầu",
        content: "BAs establish a structured hierarchy of requirements. The architecture shows how different models relate (e.g. process map links to data entities, which links to UI wireframes), ensuring requirements fit together to form a cohesive description of the solution.",
        keyTakeaways: [
          "Structures requirements into a cohesive description.",
          "Shows relationships and dependencies between models.",
          "Outputs: Requirements Architecture."
        ],
        inputs: ["Requirements", "Designs"],
        outputs: ["Requirements Architecture"],
        realWorldExample: {
          scenario: "Structuring requirements for micro-loan module",
          details: "The BA structured the architecture: Category 1: Loan Application (contains 3 functional requirements). Category 2: Underwriting Engine (contains 4 rules). Category 3: Funding (contains 2 APIs), showing clear structural links."
        }
      },
      {
        id: "ch7_5",
        title: "7.5 Define Design Options",
        vietnameseTitle: "7.5 Xác định các phương án thiết kế",
        content: "BAs identify alternative ways to satisfy requirements. Design options can include custom software build, purchase of commercial software, business process restructuring, or hybrid integrations.",
        keyTakeaways: [
          "Identifies alternative implementation options.",
          "Considers build vs. buy tradeoffs.",
          "Outputs: Design Options."
        ],
        inputs: ["Requirements Architecture", "Future State Description"],
        outputs: ["Design Options"],
        realWorldExample: {
          scenario: "Selecting design options for loyalty program",
          details: "Option A: Build custom loyalty database inside app. Option B: Integrate vendor API SaaS loyalty tool. Option C: Partner with external rewards network (credit card partner)."
        }
      },
      {
        id: "ch7_6",
        title: "7.6 Analyze Potential Value & Recommend Solution",
        vietnameseTitle: "7.6 Phân tích giá trị tiềm năng và Đề xuất giải pháp",
        content: "BAs perform cost-benefit analysis and risk assessments for each design option, recommending the option that provides the highest net value and meets the business goals.",
        keyTakeaways: [
          "Evaluates design options based on costs, benefits, and risks.",
          "Recommends the best solution to sponsors.",
          "Outputs: Solution Recommendation."
        ],
        inputs: ["Design Options", "Requirements (Validated)"],
        outputs: ["Solution Recommendation"],
        realWorldExample: {
          scenario: "Recommending vendor SaaS integration",
          details: "The BA evaluated custom build vs. vendor API. Vendor API cost was $10K/year with 1-month setup, while custom build cost was $80K and 6-month setup. BA recommended vendor API for faster ROI."
        }
      }
    ]
  },
  {
    id: "ch8",
    title: "Chapter 8: Solution Evaluation",
    vietnameseTitle: "Chương 8: Đánh giá giải pháp",
    description: "Learn how to measure solution performance, assess limitations, and recommend value-boosting actions.",
    sections: [
      {
        id: "ch8_1",
        title: "8.1 Measure Solution Performance",
        vietnameseTitle: "8.1 Đo lường hiệu suất giải pháp",
        content: "BAs define performance metrics, collect data on the live system's actual performance (quantitative and qualitative), and measure how effectively it delivers value to stakeholders.",
        keyTakeaways: [
          "Defines performance metrics and collects live system data.",
          "Measures actual value delivery.",
          "Outputs: Performance Measures."
        ],
        inputs: ["Implemented Solution"],
        outputs: ["Performance Measures"],
        realWorldExample: {
          scenario: "Measuring checkout app success rates",
          details: "The BA collected statistics from Google Analytics showing the checkout process success rate was 88% and average checkout time was 42 seconds."
        }
      },
      {
        id: "ch8_2",
        title: "8.2 Analyze Performance Measures",
        vietnameseTitle: "8.2 Phân tích các số liệu hiệu suất",
        content: "BAs compare the actual performance metrics collected in Task 8.1 against the target business objectives to identify variances and determine if there are performance gaps.",
        keyTakeaways: [
          "Compares actual performance against targets.",
          "Identifies performance variances.",
          "Outputs: Solution Performance Analysis."
        ],
        inputs: ["Performance Measures", "Business Objectives"],
        outputs: ["Solution Performance Analysis"],
        realWorldExample: {
          scenario: "Analyzing the 12% drop-off in checkout",
          details: "The BA compared the 88% success rate against the target goal (95%). This revealed a 7% performance gap, showing that the system was not delivering full planned value."
        }
      },
      {
        id: "ch8_3",
        title: "8.3 Assess Solution Limitations",
        vietnameseTitle: "8.3 Đánh giá các hạn chế của giải pháp",
        content: "This task examines what is wrong within the solution itself that prevents it from delivering full value. BAs identify internal constraints, bugs, interface design bottlenecks, database delays, or functional gaps within the deployed software system. BAs run root-cause analysis to pinpoint why performance is lagging.",
        keyTakeaways: [
          "Identifies deficiencies in the design or implementation of the system.",
          "Pinpoints issues like system bugs, UX bottlenecks, or data errors.",
          "Outputs: Solution Limitation."
        ],
        inputs: ["Performance Measures", "Implemented Solution"],
        outputs: ["Solution Limitations (Hạn chế Giải pháp)"],
        realWorldExample: {
          scenario: "Diagnosing Drop-offs in a Credit Application Form",
          details: "An automated loan system was built, but metrics showed 60% of applicants dropped off at Page 3. The BA conducted a heuristic evaluation and discovered that Page 3 required uploading physical paper income statements, which users didn't have on their phones. This was identified as a Solution Limitation (form interface bottleneck)."
        }
      },
      {
        id: "ch8_4",
        title: "8.4 Assess Enterprise Limitations",
        vietnameseTitle: "8.4 Đánh giá các hạn chế của doanh nghiệp",
        content: "Enterprise limitations are external factors that prevent the organization from fully utilizing the solution. This is not about software code; it is about human behavior, corporate culture, training gaps, obsolete policies, or poorly aligned operational structures. If the business is not ready to adopt the tool, the solution cannot deliver value.",
        keyTakeaways: [
          "Investigates external constraints (people, processes, culture, organizational structure).",
          "Determines if the business is ready to absorb and benefit from the tool.",
          "Outputs: Enterprise Limitation."
        ],
        inputs: ["Performance Measures", "Implemented Solution"],
        outputs: ["Enterprise Limitations (Hạn chế Doanh nghiệp)"],
        realWorldExample: {
          scenario: "Enterprise Obstacles during a new CRM Rollout",
          details: "A company spent $1 million on a new Salesforce CRM system (a perfect software solution). However, sales metrics did not improve. The BA investigated and found that sales managers preferred updating excel sheets because their sales commission reports were still compiled manually. This corporate policy constraint was an Enterprise Limitation. The solution was changing the commission policy, not rewriting code."
        }
      },
      {
        id: "ch8_5",
        title: "8.5 Recommend Actions to Increase Solution Value",
        vietnameseTitle: "8.5 Đề xuất hành động nhằm gia tăng giá trị giải pháp",
        content: "Based on identified limitations, BAs recommend actions to maximize value. This can include software upgrades, bug fixes, training programs, process restructuring, policy changes, or system retirement.",
        keyTakeaways: [
          "Recommends action to boost solution performance and ROI.",
          "Proposes process, human, or systems-level updates.",
          "Outputs: Recommended Actions."
        ],
        inputs: ["Solution Limitations", "Enterprise Limitations"],
        outputs: ["Recommended Actions"],
        realWorldExample: {
          scenario: "Recommending changes to credit scoring engine",
          details: "The BA recommended integrating an automated OCR scanning library (software upgrade) and training card consultants on how to read dashboard risk alerts (training change)."
        }
      }
    ]
  },
  {
    id: "ch9",
    title: "Chapter 9: Underlying Competencies",
    vietnameseTitle: "Chương 9: Năng lực cốt lõi (Underlying Competencies)",
    description: "Explore the analytical, behavioral, business, communication, and interaction skills required of a Business Analyst.",
    sections: [
      {
        id: "ch9_1",
        title: "9.1 Analytical Thinking and Problem Solving",
        vietnameseTitle: "9.1 Tư duy phân tích và Giải quyết vấn đề",
        content: "Analytical thinking and problem-solving skills are required for BAs to analyze problems and opportunities effectively, identify which changes will deliver the most value, and work with stakeholders to understand the impact of those changes. It includes Creative Thinking, Decision Making, Learning, Systems Thinking, Conceptual Thinking, and Visual Thinking.",
        keyTakeaways: [
          "Systems Thinking: Understanding how people, processes, and systems interact.",
          "Conceptual Thinking: Connecting isolated details to see the big picture.",
          "Decision Making: Weighing options objectively to choose the best path."
        ],
        inputs: ["Complex Business Problems", "Raw Transaction Data", "Conflicting Stakeholder Opinions"],
        outputs: ["Root Cause Analysis Documents", "Logical Decision Matrices", "Visual Solution Models"],
        elements: [
          { name: "Creative Thinking", desc: "Generating new, out-of-the-box ideas and alternatives to solve traditional problems." },
          { name: "Decision Making", desc: "Weighing different options objectively and selecting the optimal path based on evidence and constraints." },
          { name: "Learning", desc: "Rapidly acquiring knowledge regarding new domains, technical systems, and business processes." },
          { name: "Systems Thinking", desc: "Understanding how people, processes, and systems interact within an organization as a whole system." },
          { name: "Conceptual Thinking", desc: "Connecting isolated pieces of information to identify patterns and understand the big picture." },
          { name: "Visual Thinking", desc: "Creating visual diagrams (flowcharts, mockups) to communicate complex concepts simply." }
        ],
        realWorldExample: {
          scenario: "Applying Systems Thinking to a customer support bottleneck",
          details: "A customer service team complained of overloaded call volumes and requested hiring 20 more call agents. Instead of approving the budget, a BA used Systems Thinking. They mapped out the entire pipeline and found that 80% of calls were from customers asking: 'Where is my order?'. The BA proposed adding an automated shipping status SMS system. This systemic change reduced calls by 70% without hiring a single agent, saving the company $200,000 annually."
        }
      },
      {
        id: "ch9_2",
        title: "9.2 Behavioural Characteristics",
        vietnameseTitle: "9.2 Các đặc tính hành vi cá nhân",
        content: "Behavioural characteristics support the BA in earning trust, respect, and cooperation from stakeholders. These competencies include Ethics (behaving with integrity), Personal Accountability (delivering tasks on time), Trustworthiness (holding sensitive data safely), and Adaptability (managing project changes).",
        keyTakeaways: [
          "Trustworthiness is fundamental for stakeholders to share confidential business rules.",
          "Ethics ensures the BA remains objective and reports actual values without bias."
        ],
        inputs: ["Confidential Financial Data", "Regulatory Compliance Policies", "Project Stressors"],
        outputs: ["Stakeholder Trust", "Unbiased BA Deliverables", "Professional Adaptability"],
        elements: [
          { name: "Ethics", desc: "Behaving with integrity, transparency, and reporting real value metrics without political bias." },
          { name: "Personal Accountability", desc: "Taking responsibility for completing tasks on time, meeting quality standards, and admitting mistakes." },
          { name: "Trustworthiness", desc: "Earning stakeholder confidence by protecting sensitive data and keeping professional promises." },
          { name: "Adaptability", desc: "Effectively adjusting behaviors, priorities, and work methods to handle rapid changes in a project." }
        ],
        realWorldExample: {
          scenario: "Ethically Handling a Compliance Vulnerability in an E-wallet Launch",
          details: "During a pre-launch audit of a peer-to-peer money transfer app, a BA discovered a loophole in the verification pipeline that bypassed AML checks for transfers under 100,000 VND. Despite pressure from the Product Manager to overlook this to hit the release date, the BA demonstrated accountability. They documented the risk, presented it to the Compliance Sponsor, and worked with the team to implement a hotfix, maintaining regulatory alignment and preventing multi-million dollar penalties."
        }
      },
      {
        id: "ch9_3",
        title: "9.3 Business Knowledge",
        vietnameseTitle: "9.3 Kiến thức kinh doanh và nghiệp vụ",
        content: "Business knowledge enables BAs to understand the overarching context of a change. It includes Business Acumen (how businesses run and make money), Industry Knowledge (understanding market trends and competitors), Organization Knowledge (company structures and politics), and Solution/Product Knowledge.",
        keyTakeaways: [
          "Business Acumen helps BAs align project targets with company profitability.",
          "Industry Knowledge ensures compliance with local banking or privacy regulations."
        ],
        inputs: ["Market Trends", "Competitor E-wallet Features", "Organizational Hierarchy"],
        outputs: ["Strategic Business Value", "Regulatory Compliance Mapping", "Solution Feasibility Assessments"],
        elements: [
          { name: "Business Acumen", desc: "Understanding general business principles, financial statements, and how organizations make profit." },
          { name: "Industry Knowledge", desc: "Knowing the competitive landscape, customer segments, market trends, and regulations of a specific domain." },
          { name: "Organization Knowledge", desc: "Navigating the political structure, key decision-makers, and cultural dynamics of the company." },
          { name: "Solution Knowledge", desc: "Understanding the capabilities, interfaces, and limitations of existing software and systems." }
        ],
        realWorldExample: {
          scenario: "Leveraging Industry Knowledge for a Cross-Border Remittance System",
          details: "A BA working on a digital remittance system between Vietnam and Japan used their understanding of State Bank of Vietnam foreign exchange regulations (Circular 34) and Japan's FSA rules. This knowledge allowed them to design compliance checkpoints into the transaction flow upfront, avoiding a major redesign during the regulatory approval phase."
        }
      },
      {
        id: "ch9_4",
        title: "9.4 Communication Skills",
        vietnameseTitle: "9.4 Kỹ năng giao tiếp",
        content: "Communication involves the effective transfer of information. BAs must practice Verbal Communication (speaking clearly), Non-Verbal Communication (body language), Written Communication (writing clear specifications without ambiguity), and Active Listening (paraphrasing and showing empathy).",
        keyTakeaways: [
          "Active Listening ensures the BA detects underlying stakeholder worries, not just text rules.",
          "Written spec clarity directly affects code quality and QA testing speeds."
        ],
        inputs: ["Unstructured Elicitation Notes", "Technical DB Schemas", "Stakeholder Feedback"],
        outputs: ["Clear Requirements Specifications (BRD/PRD)", "Aligned Technical Specifications", "Empathetic Stakeholder Consensus"],
        elements: [
          { name: "Verbal Communication", desc: "Expressing ideas, requirements, and feedback clearly in spoken conversations and meetings." },
          { name: "Non-Verbal Communication", desc: "Being aware of body language, facial expressions, and posture to gauge stakeholder emotions." },
          { name: "Written Communication", desc: "Writing clean, structured, and unambiguous requirements specifications (PRD, User Stories) suitable for developers." },
          { name: "Active Listening", desc: "Paraphrasing, paying full attention, and validating understanding before drawing conclusions." }
        ],
        realWorldExample: {
          scenario: "Resolving Ambiguity in Payment Reconciliation Specifications",
          details: "The accounting team requested that the database perform 'daily balance matching'. The BA used active listening and probing questions to clarify that they actually required automated multi-party clearing with 3 core banks at exactly 11:30 PM GMT+7, documenting this into a precise, unambiguous flow diagram that developers coded with zero bugs."
        }
      },
      {
        id: "ch9_5",
        title: "9.5 Interaction Skills",
        vietnameseTitle: "9.5 Kỹ năng tương tác và làm việc",
        content: "Interaction skills enable BAs to work productively with teams and facilitate agreement. It includes Facilitation (guiding workshops to consensus), Leadership and Influencing (guiding change without direct authority), Negotiation & Conflict Resolution, and Teamwork.",
        keyTakeaways: [
          "Facilitation keeps workshops focused and prevents dominant stakeholders from hijacking meetings.",
          "Negotiation resolves conflicting requirements between business units."
        ],
        inputs: ["Conflicting Stakeholder Interests", "Project Resource Constraints", "Team Disputes"],
        outputs: ["Consensus on Scope", "Stakeholder Engagement", "Resolved Resource and Goal Conflicts"],
        elements: [
          { name: "Facilitation", desc: "Guiding a group meeting or workshop to achieve its objectives, ensuring participation and neutrality." },
          { name: "Leadership and Influencing", desc: "Inspiring and guiding teams toward a target future state without having direct managerial power." },
          { name: "Negotiation and Conflict Resolution", desc: "Mediating disputes over requirements, timeline priorities, or solution options to reach a win-win consensus." },
          { name: "Teamwork", desc: "Collaborating productively with designers, developers, QA, and business users to deliver value." }
        ],
        realWorldExample: {
          scenario: "Facilitating Consensus between Risk Compliance and Marketing",
          details: "Marketing wanted a 1-click checkout with no verification, while Compliance demanded a 3-step OTP flow to prevent card fraud. The BA facilitated a negotiation workshop. They proposed a risk-based adaptive KYC flow: 1-click for transactions under 200,000 VND, and OTP verification for higher values. Both teams enthusiastically signed off, balancing user experience with risk management."
        }
      },
      {
        id: "ch9_6",
        title: "9.6 Tools and Technology",
        vietnameseTitle: "9.6 Công cụ và Công nghệ",
        content: "BAs use various tools to capture, structure, model, and trace requirements. This includes Office Productivity tools (spreadsheets, docs), Business Analysis tools (Jira, Confluence, requirements management platforms), and Modelling tools (Visio, Lucidchart, Miro for process flow charts).",
        keyTakeaways: [
          "Requirements management tools automate traceability matrices.",
          "Modeling tools visual diagrams represent complex flows better than text docs."
        ],
        inputs: ["Raw Requirements", "Process Drawings", "Stakeholder Communications"],
        outputs: ["Structured Traceability Matrices", "Digital Process Flows", "Collaborative Wikis"],
        elements: [
          { name: "Office Productivity Tools", desc: "Spreadsheets, word processors, and presentation decks used for basic reporting and metrics." },
          { name: "Business Analysis Tools", desc: "Dedicated requirements management tools like Jira, Confluence, or Doors to trace requirements and manage backlogs." },
          { name: "Modeling Tools", desc: "Software like Lucidchart, Draw.io, or Miro to build process flows, swimlanes, and ERDs visually." }
        ],
        realWorldExample: {
          scenario: "Structuring a Complex E-KYC Project Workspace using Jira and Miro",
          details: "For a new facial-recognition KYC project, the BA mapped the user journeys in Miro, converted them to Jira User Stories, and linked them to compliance matrices in Confluence. This digitised workspace enabled immediate traceability checks and kept 3 distributed developer teams aligned throughout the project lifecycle."
        }
      }
    ]
  },
  {
    id: "ch10",
    title: "Chapter 10: Key Techniques",
    vietnameseTitle: "Chương 10: Các kỹ thuật then chốt (Key Techniques)",
    description: "Explore the most critical and frequently tested analysis techniques from the 50 methods in the BABOK Guide.",
    sections: [
      {
        id: "ch10_1",
        title: "10.1 Acceptance and Evaluation Criteria",
        vietnameseTitle: "10.1 Tiêu chí nghiệm thu và đánh giá",
        content: "Acceptance criteria define the minimal quality standards a solution must meet to be accepted by stakeholders. Evaluation criteria define how design options will be compared to select the best vendor or custom solution.",
        keyTakeaways: [
          "Acceptance criteria must be binary (pass or fail).",
          "Evaluation criteria allow objective comparisons using scoring sheets."
        ],
        inputs: ["Requirements", "Designs", "Sponsor Value Objectives"],
        outputs: ["Testable Acceptance Criteria", "Vendor Assessment Scoring Sheets"],
        elements: [
          { name: "Value Attributes", desc: "Qualities like transaction throughput, system reliability, security protocols, or usability standards." },
          { name: "Testability", desc: "Structuring criteria in a binary pass/fail format (e.g. Given/When/Then scenarios) so QA can verify them." }
        ],
        realWorldExample: {
          scenario: "Defining UAT criteria for a new e-KYC OCR service provider",
          details: "A BA defined acceptance criteria: The OCR engine must extract card holder names with >98% accuracy, and the API response must be under 1.5 seconds. If the supplier's API fails to meet these limits during a stress test of 10,000 requests, the contract will be terminated, providing a clear binary criteria for vendor evaluation."
        }
      },
      {
        id: "ch10_2",
        title: "10.2 Backlog Management & Brainstorming",
        vietnameseTitle: "10.2 Quản lý Backlog và Động não (Brainstorming)",
        content: "Backlog Management is the process of ordering, prioritizing, and maintaining a list of requirements. Brainstorming is an elicitation method to generate a high volume of creative ideas in a short, non-judgmental group session.",
        keyTakeaways: [
          "A backlog is dynamic and constantly re-prioritized.",
          "Brainstorming focuses on quantity of ideas first, postponing evaluation."
        ],
        inputs: ["Raw Elicitation Notes", "Product Roadmap Goals", "Bug Reports"],
        outputs: ["Prioritized Product Backlog", "Creative Feature Ideas List"],
        elements: [
          { name: "Backlog Items", desc: "User stories, defects, technical tasks, or business changes listed for implementation." },
          { name: "Prioritization Models", desc: "Scoring systems like MoSCoW (Must/Should/Could/Won't) or WSJF to order tasks based on value." },
          { name: "Refinement & Grooming", desc: "Regularly reviewing and clarifying backlog items to prepare them for developer sprint planning." }
        ],
        realWorldExample: {
          scenario: "Managing the Agile Backlog for a Peer-to-Peer Lending Application",
          details: "Faced with 200 customer requests, the BA ran a brainstorming session to generate loyalty program ideas. The BA then structured the backlog in Jira, scoring features using the MoSCoW method. Features like 'loan payment via bank card' were classified as Must-Haves, while 'custom card skins' were moved to Could-Haves, enabling a focused MVP release in 6 weeks."
        }
      },
      {
        id: "ch10_3",
        title: "10.3 Business Cases & Financial Analysis",
        vietnameseTitle: "10.3 Xây dựng Business Case và Phân tích tài chính",
        content: "A Business Case justifies a change initiative by outlining the business problem, proposed solution options, costs, risks, and estimated benefits. Financial Analysis uses metrics like ROI (Return on Investment), NPV (Net Present Value), and payback period.",
        keyTakeaways: [
          "The Business Case provides the baseline for validating requirements value.",
          "ROI estimates how much profit is returned per dollar spent."
        ],
        inputs: ["Strategy Goals", "Needs Description", "Vendor Pricing Models"],
        outputs: ["Formal Business Case Document", "Financial Value Assessments (ROI, NPV, Payback Period)"],
        elements: [
          { name: "Cost-Benefit Analysis", desc: "Quantifying project implementation costs against expected financial gains." },
          { name: "Risk Assessment", desc: "Identifying and sizing operational risks that could offset benefits." },
          { name: "Financial Metrics", desc: "Calculating ROI (Return on Investment), NPV (Net Present Value), and Payback Period to determine project viability." }
        ],
        realWorldExample: {
          scenario: "Cost-Benefit Analysis of Building vs Buying a Fraud Detection Engine",
          details: "The BA calculated that building a custom machine learning fraud engine would cost $150,000 upfront with $20,000 annual maintenance. Licensing a third-party SaaS would cost $40,000 annually. The financial analysis showed that by Year 3, the custom build would reach its payback period and yield a higher NPV due to volume discounts, justifying the build decision to the CFO."
        }
      },
      {
        id: "ch10_4",
        title: "10.4 Data Modelling (ERD) & Data Flow Diagrams",
        vietnameseTitle: "10.4 Mô hình hóa dữ liệu (ERD) & Sơ đồ luồng dữ liệu",
        content: "Data Modelling describes the logical structure of database assets, mapping entities (e.g. Customer, Card), attributes (e.g. Name, Number), and relationships (1-to-many). Data Flow Diagrams map how data moves through processes.",
        keyTakeaways: [
          "Entity Relationship Diagrams (ERDs) define system database rules.",
          "Ensure logical schemas are verified before database development begins."
        ],
        inputs: ["Business Rules", "System Interface Requirements"],
        outputs: ["Entity Relationship Diagrams (ERD)", "Data Flow Diagrams (DFD)"],
        elements: [
          { name: "Entities and Attributes", desc: "Defining core data tables (Entities) and their key-value fields (Attributes)." },
          { name: "Relationships", desc: "Mapping mathematical links between tables, such as 1-to-Many or Many-to-Many." },
          { name: "Data Flow Paths", desc: "Tracing how data enters a system, processes, gets saved in data stores, and outputs to users." }
        ],
        realWorldExample: {
          scenario: "Mapping Database for E-wallet Balance Sync",
          details: "The BA drew an ERD showing: Customer Entity (Primary Key: CustomerID) has a 1-to-many relationship with Account Entity (Primary Key: AccountID), which has a 1-to-many relationship with Transaction Entity (Primary Key: TxnID), preventing double-spending bugs."
        }
      },
      {
        id: "ch10_5",
        title: "10.5 Decision, Risk & SWOT Analysis",
        vietnameseTitle: "10.5 Phân tích Quyết định, Rủi ro và SWOT",
        content: "Decision Analysis uses tools like decision trees to choose paths under uncertainty. Risk Analysis identifies threats and plans responses (Avoid, Mitigate, Transfer, Accept). SWOT Analysis maps Strengths, Weaknesses, Opportunities, and Threats.",
        keyTakeaways: [
          "SWOT: Internal (Strengths/Weaknesses) vs External (Opportunities/Threats).",
          "Risk responses must be quantified by cost and impact."
        ],
        inputs: ["Enterprise Strategy", "Market Competition Data", "Technical Constraints"],
        outputs: ["Decision Trees", "Risk Registers", "SWOT Analysis Quadrants"],
        elements: [
          { name: "Decision Matrices & Trees", desc: "Using mathematical trees to score options based on cost and probability of success." },
          { name: "Risk Register", desc: "Documenting potential failures, probability, impact, and formal response strategies (Mitigate, Transfer, Avoid)." },
          { name: "SWOT Matrix", desc: "Analyzing internal project capabilities (Strengths/Weaknesses) against external forces (Opportunities/Threats)." }
        ],
        realWorldExample: {
          scenario: "SWOT and Risk Assessment for Integrating a New Cryptocurrency Gateway",
          details: "A BA conducted a SWOT analysis: Strength = First-mover advantage in payments. Weakness = High transaction volatility. Opportunity = Capturing tech-savvy users. Threat = Regulatory crackdowns. The BA documented these into a Risk Register, mapping 'regulatory block' as High Impact / Medium Probability, and proposed a mitigation plan of keeping crypto funds in a ring-fenced escrow account."
        }
      },
      {
        id: "ch10_6",
        title: "10.6 Estimation & Metrics (KPIs)",
        vietnameseTitle: "10.6 Ước lượng và Chỉ số đánh giá (KPIs)",
        content: "Estimation predicts the cost, effort, or timeline of a project (using methods like Delphi or analogous estimation). Metrics and KPIs measure actual business performance against targets.",
        keyTakeaways: [
          "Estimation is always a range with a confidence level, not a single static number.",
          "KPIs must be SMART (Specific, Measurable, Actionable, Relevant, Time-bound)."
        ],
        inputs: ["Backlog Items", "Historical Project Metrics", "Business Goals"],
        outputs: ["Effort and Cost Estimates", "SMART KPI Dashboard Specifications"],
        elements: [
          { name: "Estimation Techniques", desc: "Using historical data (Analogous), group consensus (Delphi), or mathematical ranges (Three-Point)." },
          { name: "KPI Metrics", desc: "Defining clear business metrics like Transaction Success Rate, Active Users, or System Downtime." }
        ],
        realWorldExample: {
          scenario: "Estimating Development for a Compliance Tool and Defining Success KPIs",
          details: "The BA used Three-Point Estimation (Optimistic: 2 weeks, Most Likely: 4 weeks, Pessimistic: 8 weeks) to establish a 4.5-week delivery expectation. They defined the primary success KPI as: '99.9% of financial transactions processed must be reported to the central regulator within 24 hours of settlement', establishing a clear operational SLA."
        }
      },
      {
        id: "ch10_7",
        title: "10.7 Interviews & Questionnaires/Surveys",
        vietnameseTitle: "10.7 Phỏng vấn và Khảo sát bằng bảng hỏi",
        content: "Interviews are collaborative sessions where a BA asks a single stakeholder questions to elicit requirements. Questionnaires/Surveys allow BAs to gather requirements or feedback from a large group of stakeholders quickly.",
        keyTakeaways: [
          "Interviews are rich but time-consuming.",
          "Surveys must use clear, non-leading questions to prevent data bias."
        ],
        inputs: ["Elicitation Objectives", "Stakeholder Lists"],
        outputs: ["Interview Transcripts", "Structured Survey Results Data"],
        elements: [
          { name: "Interviews", desc: "1-on-1 dialogs to elicit deep, detailed context. Can be structured or semi-structured." },
          { name: "Surveys & Questionnaires", desc: "Standardized list of questions sent to a large group. Excellent for statistical patterns." }
        ],
        realWorldExample: {
          scenario: "Investigating Refund Bottlenecks in an E-commerce Payment Gateway",
          details: "To discover why refunds took 5 days, the BA conducted semi-structured interviews with 5 billing operators (Collaborative). They followed up with a quantitative survey to 100 merchant clients (Research) to rate refund satisfaction. The results pinpointed a manual approval step as the main bottleneck, leading to a proposal for automated balance-checks."
        }
      },
      {
        id: "ch10_8",
        title: "10.8 Process Modelling (BPMN) & Prototyping",
        vietnameseTitle: "10.8 Mô hình hóa quy trình (BPMN) và Làm bản mẫu (Prototyping)",
        content: "Process Modelling maps sequential process steps using standards like BPMN (swimlanes, gateways, events). Prototyping builds early, clickable mockups (low-fidelity wireframes or high-fidelity code) to verify UI designs with stakeholders.",
        keyTakeaways: [
          "BPMN gateways define logic split points (Exclusive XOR, Parallel AND).",
          "Prototypes clarify vague user requirements by giving them a visual UI to click."
        ],
        inputs: ["Current Process Observations", "Functional System Requirements"],
        outputs: ["BPMN Swimlane Diagrams", "High/Low-Fidelity Clickable Wireframes"],
        elements: [
          { name: "BPMN Diagramming", desc: "Drawing process steps showing roles (Swimlanes), gateways (Logic branches), and events." },
          { name: "Fidelity Levels", desc: "Low-fidelity wireframes (layout-focused) vs. High-fidelity prototypes (clickable screens with data inputs)." }
        ],
        realWorldExample: {
          scenario: "Modeling and Prototyping a Split-Bill Feature for a Social E-wallet",
          details: "The BA modeled the split-bill flow using BPMN, detailing gateways for parallel approvals from multiple users (AND join). To resolve arguments about the UI, the BA built a clickable Figma prototype showing how customers select friends and approve transactions, leading to an immediate engineering sign-off with zero layout confusion."
        }
      },
      {
        id: "ch10_9",
        title: "10.9 Use Cases & User Stories",
        vietnameseTitle: "10.9 Use Cases và User Stories",
        content: "Use Cases model requirements by describing a complete sequence of interactions between an actor and a system to achieve a specific user goal. It includes: Actor, Pre-conditions, Post-conditions, Basic flow, and Alternate/Exception flows. User Stories represent high-level customer requirements in agile environments, typically in the format: 'As a [role], I want [capability], so that [value].' User Stories focus on conversational agreements and acceptance criteria.",
        keyTakeaways: [
          "Use Case: Detailed flow of events, actor interactions, pre-conditions, and post-conditions.",
          "User Story: Lightweight, conversational requirements focused on user value. Uses the 3Cs (Card, Conversation, Confirmation)."
        ],
        inputs: ["Elicited Requirements", "User Persona Profiles"],
        outputs: ["Use Case Specifications", "User Story Cards with Acceptance Criteria"],
        elements: [
          { name: "Use Case Actors & Flows", desc: "Identifying the user/system (Actor), happy path (Basic Flow), and error handling (Exception Flow)." },
          { name: "User Story Structure", desc: "Documenting requirement value cards (As a... I want... So that...) and confirming criteria." }
        ],
        realWorldExample: {
          scenario: "Documenting bank transfer via User Story vs Use Case",
          details: "User Story: 'As a mobile app user, I want to transfer money to another bank using their card number, so that I don't need to ask for their bank branch code.' Use Case: Actor = User. Pre-condition = User is logged in and balance is positive. Basic flow = User inputs card number, system checks bank name, displays owner name, user inputs amount, approves OTP, system deducts balance. Exception flow = Invalid card number, display error message."
        }
      },
      {
        id: "ch10_10",
        title: "10.10 Workshops & Focus Groups",
        vietnameseTitle: "10.10 Hội thảo (Workshops) và Nhóm tập trung",
        content: "Workshops are highly structured collaborative sessions facilitated by a BA, bringing key stakeholders together to define and agree on requirements quickly. Focus Groups gather qualitative feedback on a product concept from target consumers.",
        keyTakeaways: [
          "Workshops require a neutral facilitator, scribe, clear agenda, and ground rules.",
          "Focus groups observe user reactions rather than negotiating rules."
        ],
        inputs: ["Agendas", "Elicitation Goals", "Diverse Stakeholder Groups"],
        outputs: ["Consensus Documents", "Customer Reaction and Feedback Logs"],
        elements: [
          { name: "Workshop Roles", desc: "Ensuring a neutral Facilitator manages debates, while a Scribe documents decisions." },
          { name: "Focus Group Selection", desc: "Inviting 6-12 representative users to observe product usage patterns and gain qualitative feedback." }
        ],
        realWorldExample: {
          scenario: "Aligning Product Management and Security Engineering on Passwordless Login",
          details: "Security wanted strict face scans, while Product wanted fast logins. The BA facilitated a 4-hour structured workshop. They established ground rules, used sticky notes on Miro, and timeboxed debates. The workshop resulted in a compromise: biometric login enabled for 30 days, re-authenticating with passwords only for security-sensitive profile edits."
        }
      }
    ]
  },
  {
    id: "ch11",
    title: "Chapter 11: Perspectives",
    vietnameseTitle: "Chương 11: Các góc nhìn phân tích (Perspectives)",
    description: "Explore the 5 perspectives of Business Analysis: Agile, Business Intelligence, Information Technology, Business Architecture, and Business Process Management.",
    sections: [
      {
        id: "ch11_1",
        title: "11.1 The Agile Perspective",
        vietnameseTitle: "11.1 Góc nhìn Agile (Agile Perspective)",
        content: "The Agile perspective focuses on rapid value delivery, adapting to change, and collaborative feedback loops. It emphasizes lightweight documentation, active backlog grooming, and continuous evolution of requirements over rigid change control processes.",
        keyTakeaways: [
          "Agile prioritizes functioning software over comprehensive documentation.",
          "Emphasizes continuous collaboration between the BA, Product Owner, and Developers."
        ],
        inputs: ["Dynamic Product Backlog", "Sprint Stakeholder Feedback"],
        outputs: ["Iterative Feature Increments", "Refined User Stories", "Sprint Retrospective Items"],
        elements: [
          { name: "Agile Mindset", desc: "Emphasizing collaboration, early feedback, and adjusting plans dynamically over upfront documentation." },
          { name: "Scrum & Sprints", desc: "Splitting project releases into 2-week iterations containing Planning, Standups, and Demos." },
          { name: "Agile BA Role", desc: "Translating business needs into small, bite-sized user stories and helping the PO prioritize the backlog." }
        ],
        realWorldExample: {
          scenario: "Iterative Rollout of a QR Code Merchant Payment Feature",
          details: "Instead of waiting for a 6-month waterfall project, the BA in a scrum team defined a minimal viable QR payment flow. In Sprint 1, they shipped static QR payments for a single pilot merchant. Based on real customer transactions, they refined the feedback flow and shipped dynamic QR generation in Sprint 2, delivering value to the business in 4 weeks."
        }
      },
      {
        id: "ch11_2",
        title: "11.2 The Business Intelligence Perspective",
        vietnameseTitle: "11.2 Góc nhìn Trí tuệ doanh nghiệp (BI Perspective)",
        content: "The BI perspective focuses on data analysis, reporting, ETL (Extract, Transform, Load) operations, and dashboard design to support corporate decision-making. BAs help transform raw transactional data into actionable strategic insights.",
        keyTakeaways: [
          "BI BAs deal heavily with data warehousing, metrics, and report design.",
          "Helps executives make data-driven decisions."
        ],
        inputs: ["Raw Transaction Database Tables", "Executive Business KPI Goals"],
        outputs: ["ETL Mapping Documents", "Interactive BI Dashboards", "Data Warehouse Schema Specs"],
        elements: [
          { name: "ETL Processing", desc: "Specifying rules to Extract raw data, Transform it (cleansing, converting), and Load it into reporting servers." },
          { name: "Dimensional Modeling", desc: "Designing database tables optimized for analysis, separating Fact tables (sales) from Dimension tables (cities, categories)." },
          { name: "Data Visualization", desc: "Designing interactive charts and layouts to make metrics clear for business executives." }
        ],
        realWorldExample: {
          scenario: "Implementing a dynamic BI sales report",
          details: "A BA collaborated with database architects to map sales records, filter transactions by city, and design a dashboard mock-up displaying metrics like Average Order Value and Growth Rates, allowing regional managers to adjust prices dynamically."
        }
      },
      {
        id: "ch11_3",
        title: "11.3 The Information Technology Perspective",
        vietnameseTitle: "11.3 Góc nhìn Công nghệ thông tin (IT Perspective)",
        content: "The IT perspective focuses on system development, configuration, integration, and deployment of software products. BAs map business objectives directly to technical APIs, database tables, and non-functional security/performance criteria.",
        keyTakeaways: [
          "IT BAs require basic systems analysis and API/Database integration understanding.",
          "Bridges the gap between business needs and actual software engineering."
        ],
        inputs: ["High-level Business Objectives", "Legacy System Architectures"],
        outputs: ["API Interface Specifications", "Non-functional Performance and Security specs"],
        elements: [
          { name: "SDLC Frameworks", desc: "Integrating requirements processes with Software Development Lifecycles (Waterfall, V-Model, or DevOps)." },
          { name: "System Mappings", desc: "Mapping how business fields translate to database tables, JSON payloads, or SOAP/REST API nodes." },
          { name: "Non-Functional Criteria", desc: "Defining detailed server requirements like load times, API response latency, and cryptographic encryptions." }
        ],
        realWorldExample: {
          scenario: "Mapping User Deposit Flow to Core Banking API endpoints",
          details: "A BA mapped the mobile app transfer request to the core bank's SOAP-to-REST API gateway. The BA specified that the transfer API must execute with a transaction ID to prevent double deposits and must fail if the partner bank's response exceeds 3 seconds (Non-functional requirement), securing the integration."
        }
      },
      {
        id: "ch11_4",
        title: "11.4 The Business Architecture Perspective",
        vietnameseTitle: "11.4 Góc nhìn Kiến trúc doanh nghiệp (Business Architecture)",
        content: "The Business Architecture perspective establishes a blueprint of the enterprise's strategy, capabilities, value streams, and organizational structures, aligning operational solutions with high-level corporate goals.",
        keyTakeaways: [
          "Focuses on capability mapping and strategic alignment across the company.",
          "Operates at an enterprise level, higher than individual projects."
        ],
        inputs: ["Corporate Strategy Plans", "Enterprise Core Value Streams"],
        outputs: ["Business Capability Maps", "Value Stream Blueprints", "Strategic Gap Assessments"],
        elements: [
          { name: "Capability Mapping", desc: "Defining what business capabilities (e.g. Payment Processing, KYC Check) the company can perform." },
          { name: "Value Stream Blueprinting", desc: "Mapping how an enterprise coordinates its capabilities to deliver end-to-end value for customers." },
          { name: "Strategic Alignment", desc: "Verifying that every IT project directly supports a strategic pillar in the CEO's corporate roadmap." }
        ],
        realWorldExample: {
          scenario: "Strategic Capability Mapping for a Digital Bank Launch",
          details: "Prior to launching a digital-only bank, the BA created a Capability Map. They identified that while they possessed strong 'Digital Customer Acquisition' capabilities, they had a critical gap in 'Regulatory Reporting and Anti-Money Laundering (AML)' capability. This gap analysis led to the strategic acquisition of a compliance technology system before launch."
        }
      },
      {
        id: "ch11_5",
        title: "11.5 The Business Process Management Perspective",
        vietnameseTitle: "11.5 Góc nhìn Quản lý quy trình nghiệp vụ (BPM Perspective)",
        content: "The BPM perspective optimization focuses on analyzing, design, executing, monitoring, and governing business processes across the organization, using metrics to reduce waste and bottlenecks.",
        keyTakeaways: [
          "BPM: Optimizes workflows, monitors performance, and manages compliance.",
          "Applies frameworks like Lean, Six Sigma, and BPMN."
        ],
        inputs: ["As-Is Process Performance Data", "Organizational Process Flowcharts"],
        outputs: ["Optimized To-Be Process Models", "Process Performance Metrics Dashboard Specs"],
        elements: [
          { name: "Process Discovery", desc: "Observing, eliciting, and documenting how tasks are executed today to identify As-Is flows." },
          { name: "Lean Process Optimization", desc: "Analyzing process steps to eliminate waste (Muda), such as manual double-checks or excessive delays." },
          { name: "Continuous Monitoring", desc: "Setting up reporting systems to trace cycle times, process errors, and system delays on an ongoing basis." }
        ],
        realWorldExample: {
          scenario: "Applying Lean to Credit Line Application Approval Processes",
          details: "The BA analyzed the loan approval process and mapped 8 distinct approval steps. They discovered that 3 of the steps were redundant document checks (waste/muda). By redesigning the process to use automated rules, the steps were reduced to 4, and the average approval time dropped from 3 days to 4 hours, significantly improving customer conversion."
        }
      }
    ]
  }
];
