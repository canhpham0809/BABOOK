export interface Question {
  id: string;
  chapterId: string;
  questionText: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export const quizzesDb: Question[] = [
  // Chapter 1
  {
    id: "q1_1",
    chapterId: "ch1",
    questionText: "What is the primary purpose of the BABOK Guide?",
    options: [
      "To provide a project management framework for software development projects.",
      "To define the profession of business analysis and provide a globally recognized standard.",
      "To serve as a training manual for passing the PMP certification exam.",
      "To outline coding guidelines and technical architecture standards."
    ],
    correctOptionIndex: 1,
    explanation: "The BABOK Guide defines the profession of business analysis and provides a globally recognized standard for the practices, tasks, and competencies required of Business Analysts."
  },
  {
    id: "q1_2",
    chapterId: "ch1",
    questionText: "According to the BABOK Guide, which of the following best defines Business Analysis?",
    options: [
      "The practice of managing software developers and assigning tasks.",
      "The practice of enabling change in an organizational context by defining needs and recommending solutions that deliver value to stakeholders.",
      "The process of writing system specifications and code to build IT systems.",
      "The act of auditing financial transactions to detect corporate fraud."
    ],
    correctOptionIndex: 1,
    explanation: "Business Analysis is defined in BABOK v3 as the practice of enabling change in an organizational context by defining needs and recommending solutions that deliver value to stakeholders."
  },
  {
    id: "q1_3",
    chapterId: "ch1",
    questionText: "Who is considered a Business Analyst according to the BABOK Guide?",
    options: [
      "Only individuals who hold the job title 'Business Analyst'.",
      "Anyone who performs business analysis tasks, regardless of their job title.",
      "Only members of the International Institute of Business Analysis (IIBA).",
      "Only professionals with a computer science or business administration degree."
    ],
    correctOptionIndex: 1,
    explanation: "The BABOK Guide states that a Business Analyst is any person who performs business analysis tasks, regardless of their organizational job title."
  },

  // Chapter 2
  {
    id: "q2_1",
    chapterId: "ch2",
    questionText: "Which core concept of the BACCM represents 'a problem or opportunity to be addressed'?",
    options: [
      "Change",
      "Value",
      "Need",
      "Context"
    ],
    correctOptionIndex: 2,
    explanation: "In the BACCM, a 'Need' is defined as a problem or opportunity to be addressed."
  },
  {
    id: "q2_2",
    chapterId: "ch2",
    questionText: "A requirement that describes the capabilities and qualities of a solution is classified as a:",
    options: [
      "Business Requirement",
      "Stakeholder Requirement",
      "Solution Requirement",
      "Transition Requirement"
    ],
    correctOptionIndex: 2,
    explanation: "Solution Requirements describe the capabilities and qualities of a solution, and are further subdivided into Functional and Non-Functional requirements."
  },
  {
    id: "q2_3",
    chapterId: "ch2",
    questionText: "What is the key difference between requirements and designs?",
    options: [
      "Requirements are written in English, while designs are always code.",
      "Requirements focus on the need (what is required), while designs focus on the solution representation (how it will be met).",
      "Requirements are created by business stakeholders, while designs are created only by developers.",
      "There is no difference; the terms are identical in the BABOK Guide."
    ],
    correctOptionIndex: 1,
    explanation: "Requirements focus on the need (the 'what'), while designs represent a concrete blueprint of how that need will be met (the 'how')."
  },
  {
    id: "q2_4",
    chapterId: "ch2",
    questionText: "Security standards, performance targets, and usability standards of a system are examples of what type of requirements?",
    options: [
      "Functional Requirements",
      "Non-Functional Requirements",
      "Transition Requirements",
      "Business Requirements"
    ],
    correctOptionIndex: 1,
    explanation: "Non-Functional Requirements describe the qualities, environmental conditions, or constraints under which the solution must remain effective, such as security, usability, and performance."
  },

  // Chapter 3
  {
    id: "q3_1",
    chapterId: "ch3",
    questionText: "What is the primary input for the task 'Plan Business Analysis Approach'?",
    options: [
      "Business Analysis Approach",
      "Stakeholder Engagement Approach",
      "Needs",
      "Requirements Management Plan"
    ],
    correctOptionIndex: 2,
    explanation: "According to the BABOK Guide, 'Needs' is the primary input for the task 'Plan Business Analysis Approach' (Task 3.1)."
  },
  {
    id: "q3_2",
    chapterId: "ch3",
    questionText: "Which BA planning task involves defining the change control and requirements approval process?",
    options: [
      "Plan Business Analysis Approach",
      "Plan Business Analysis Governance",
      "Plan Business Analysis Information Management",
      "Plan Stakeholder Engagement"
    ],
    correctOptionIndex: 1,
    explanation: "Plan Business Analysis Governance (Task 3.3) defines how decisions are made about requirements, including change control, prioritization, and approvals."
  },
  {
    id: "q3_3",
    chapterId: "ch3",
    questionText: "Which approach helps a BA understand the influence, authority, and communication preferences of project participants?",
    options: [
      "Governance Approach",
      "Information Management Approach",
      "Stakeholder Engagement Approach",
      "Business Analysis Approach"
    ],
    correctOptionIndex: 2,
    explanation: "The Stakeholder Engagement Approach (Task 3.2) defines the communication, collaboration, and engagement strategy based on stakeholder analysis."
  },

  // Chapter 4
  {
    id: "q4_1",
    chapterId: "ch4",
    questionText: "Which of the following represents the correct sequence of elicitation tasks in Chapter 4?",
    options: [
      "Prepare -> Conduct -> Confirm -> Communicate -> Manage Collaboration",
      "Conduct -> Confirm -> Prepare -> Communicate -> Manage Collaboration",
      "Prepare -> Communicate -> Conduct -> Confirm -> Manage Collaboration",
      "Manage Collaboration -> Prepare -> Conduct -> Confirm -> Communicate"
    ],
    correctOptionIndex: 0,
    explanation: "The logical structure of Chapter 4 is: 4.1 Prepare for Elicitation, 4.2 Conduct Elicitation, 4.3 Confirm Elicitation Results, 4.4 Communicate Business Analysis Information, and 4.5 Manage Stakeholder Collaboration."
  },
  {
    id: "q4_2",
    chapterId: "ch4",
    questionText: "What are the three types of elicitation defined in the BABOK Guide?",
    options: [
      "Waterfall, Agile, Hybrid",
      "Collaborative, Research, Experimental",
      "Interviews, Workshops, Brainstorming",
      "Internal, External, Regulatory"
    ],
    correctOptionIndex: 1,
    explanation: "The three types of elicitation are Collaborative (e.g., interactive sessions like workshops), Research (e.g., analyzing documents/records), and Experimental (e.g., prototypes, pilots)."
  },
  {
    id: "q4_3",
    chapterId: "ch4",
    questionText: "What is the status of elicitation results immediately after conducting the elicitation activities but before verifying them?",
    options: [
      "Elicitation Results (Confirmed)",
      "Elicitation Results (Unconfirmed)",
      "Requirements (Specified)",
      "Business Analysis Approach"
    ],
    correctOptionIndex: 1,
    explanation: "The output of Task 4.2 (Conduct Elicitation) is Elicitation Results (Unconfirmed), which are subsequently validated in Task 4.3 to become Elicitation Results (Confirmed)."
  },

  // Chapter 5
  {
    id: "q5_1",
    chapterId: "ch5",
    questionText: "What is the primary benefit of tracing requirements?",
    options: [
      "It helps estimate the developer's hourly wage.",
      "It helps check if requirements map to business goals and evaluate the impact of proposed changes.",
      "It makes the requirements document look highly detailed and impressive.",
      "It automates the writing of database code."
    ],
    correctOptionIndex: 1,
    explanation: "Requirements traceability links requirements to business objectives and solution deliverables, making impact analysis, scope validation, and audit coverage possible."
  },
  {
    id: "q5_2",
    chapterId: "ch5",
    questionText: "Which criteria are commonly used to prioritize requirements?",
    options: [
      "Developer popularity and font size.",
      "Value, Risk, Cost, Difficulty, Urgency, and Dependencies.",
      "Alphabetical order and word count.",
      "File size and document version number."
    ],
    correctOptionIndex: 1,
    explanation: "Typical prioritization factors include Value, Risk, Cost, Ease/Difficulty of implementation, Urgency, and Dependencies."
  },
  {
    id: "q5_3",
    chapterId: "ch5",
    questionText: "Which document assesses the impact of a proposed change on schedule, cost, and overall value delivery?",
    options: [
      "Requirements Change Assessment",
      "Business Analysis Approach",
      "Stakeholder Engagement Approach",
      "Elicitation Results (Confirmed)"
    ],
    correctOptionIndex: 0,
    explanation: "Task 5.4 (Assess Requirements Changes) produces the Requirements Change Assessment, analyzing if changes are viable and how they affect project variables."
  },

  // Chapter 6
  {
    id: "q6_1",
    chapterId: "ch6",
    questionText: "The 'As-Is' state is analyzed during which Strategy Analysis task?",
    options: [
      "Define Future State",
      "Analyze Current State",
      "Assess Risks",
      "Define Change Strategy"
    ],
    correctOptionIndex: 1,
    explanation: "Task 6.1 (Analyze Current State) establishes the baseline baseline capabilities, systems, processes, and structures of the enterprise (often called the 'As-Is' state)."
  },
  {
    id: "q6_2",
    chapterId: "ch6",
    questionText: "What represents the high-level plan mapping out transition states to move the enterprise from current to future state?",
    options: [
      "Requirements Architecture",
      "Change Strategy",
      "Elicitation Activity Plan",
      "Solution Recommendation"
    ],
    correctOptionIndex: 1,
    explanation: "The Change Strategy (Task 6.4) describes how the organization will cross the gap from As-Is to To-Be, including transition steps, scoping, and release roadmaps."
  },
  {
    id: "q6_3",
    chapterId: "ch6",
    questionText: "During Strategy Analysis, why does the BA assess risks?",
    options: [
      "To guarantee that the project will never experience any delays.",
      "To identify potential negative events, evaluate their impact/likelihood, and plan mitigation strategies.",
      "To determine who is responsible for failures so they can be fired.",
      "To write the insurance policy for the office building."
    ],
    correctOptionIndex: 1,
    explanation: "Risk Assessment (Task 6.3) identifies threats, assesses their probability and severity, and designs responses to protect the initiative's value."
  },

  // Chapter 7
  {
    id: "q7_1",
    chapterId: "ch7",
    questionText: "What is the key difference between 'Verify Requirements' and 'Validate Requirements'?",
    options: [
      "Verification is done by testers; Validation is done by developers.",
      "Verification ensures quality, correctness, and completeness of document syntax. Validation ensures alignment with business goals and actual value delivery.",
      "Verification is for agile projects; Validation is for waterfall projects.",
      "There is no difference; they are alternative names for the same task."
    ],
    correctOptionIndex: 1,
    explanation: "Verification ensures requirements are documented correctly (clarity, quality, checklists). Validation ensures we are building the right solution to deliver the expected business value."
  },
  {
    id: "q7_2",
    chapterId: "ch7",
    questionText: "Which task organizes requirements and models to show how they fit together to form a cohesive system description?",
    options: [
      "Specify and Model Requirements",
      "Define Requirements Architecture",
      "Define Design Options",
      "Verify Requirements"
    ],
    correctOptionIndex: 1,
    explanation: "Define Requirements Architecture (Task 7.4) structures and arranges all requirements and designs so that they support each other and represent a complete solution."
  },
  {
    id: "q7_3",
    chapterId: "ch7",
    questionText: "A BA is outlining three options: buy an off-the-shelf CRM, build a custom database, or outsource customer service. What task is being performed?",
    options: [
      "Define Future State",
      "Define Design Options",
      "Measure Solution Performance",
      "Specify and Model Requirements"
    ],
    correctOptionIndex: 1,
    explanation: "Task 7.5 (Define Design Options) identifies alternative ways of satisfying the requirements, including custom builds, commercial software packages, and process adjustments."
  },

  // Chapter 8
  {
    id: "q8_1",
    chapterId: "ch8",
    questionText: "When is Solution Evaluation performed in the solution lifecycle?",
    options: [
      "Only before any coding or purchasing decision starts.",
      "On components of the solution under development or on a completed live system.",
      "Only when the project is cancelled to write the post-mortem.",
      "It is only performed by external auditors after three years."
    ],
    correctOptionIndex: 1,
    explanation: "Solution Evaluation (Chapter 8) can evaluate solutions under development (prototypes, releases) or live, operational solutions to measure value."
  },
  {
    id: "q8_2",
    chapterId: "ch8",
    questionText: "A BA is investigating why customer service agents are not using a newly deployed CRM system. They discover that a lack of staff training is the cause. This represents:",
    options: [
      "A Solution Limitation",
      "An Enterprise Limitation",
      "A Requirement Error",
      "A Strategy Failure"
    ],
    correctOptionIndex: 1,
    explanation: "Enterprise Limitations (Task 8.4) represent factors outside the solution itself that hinder value realization, such as organizational structure, culture, or training gaps."
  },
  {
    id: "q8_3",
    chapterId: "ch8",
    questionText: "If the BA discovers that a software bug is slowing down transaction speed, this is classified as a:",
    options: [
      "Solution Limitation",
      "Enterprise Limitation",
      "Change Strategy Option",
      "Governance Failure"
    ],
    correctOptionIndex: 0,
    explanation: "Solution Limitations (Task 8.3) are problems inherent within the solution components themselves (like bugs, poor UI, or capacity issues) that block full value."
  },

  // Chapter 9
  {
    id: "q9_1",
    chapterId: "ch9",
    questionText: "Which underlying competency involves understanding how people, processes, and technology interact within an organization as a whole?",
    options: [
      "Creative Thinking",
      "Systems Thinking",
      "Conceptual Thinking",
      "Visual Thinking"
    ],
    correctOptionIndex: 1,
    explanation: "Systems Thinking is the competency of understanding how all the parts of an organization (people, processes, technology) work together as a system."
  },
  {
    id: "q9_2",
    chapterId: "ch9",
    questionText: "Why is active listening considered a critical communication skill for Business Analysts?",
    options: [
      "To write down every single word a stakeholder says without thinking.",
      "To ensure stakeholder inputs are fully understood, confirming meanings, and detecting underlying feelings or subtexts.",
      "To wait for their turn to speak and argue with the stakeholder.",
      "To record conversations secretly for legal documentation."
    ],
    correctOptionIndex: 1,
    explanation: "Active listening involves paraphrasing, focusing, and confirming understanding to ensure the real stakeholder message and emotions are captured without bias."
  },
  {
    id: "q9_3",
    chapterId: "ch9",
    questionText: "Which competency under Behavioural Characteristics is defined as taking responsibility for completing work on time, meeting expectations, and acknowledging errors?",
    options: [
      "Trustworthiness",
      "Personal Accountability",
      "Ethics",
      "Adaptability"
    ],
    correctOptionIndex: 1,
    explanation: "Personal Accountability involves taking responsibility for your actions, completing commitments on time, and owning up to errors and correcting them."
  },
  {
    id: "q9_4",
    chapterId: "ch9",
    questionText: "A BA is analyzing a banking transaction database and needs to connect isolated records of high-value transactions with country-specific compliance regulations. Which analytical thinking sub-competency is most critical here?",
    options: [
      "Creative Thinking",
      "Visual Thinking",
      "Conceptual Thinking",
      "Decision Making"
    ],
    correctOptionIndex: 2,
    explanation: "Conceptual Thinking involves finding patterns and linking details from various sources (such as transactions and compliance rules) to see how they form a unified picture."
  },
  {
    id: "q9_5",
    chapterId: "ch9",
    questionText: "Under Underlying Competencies, what category does 'Industry Knowledge' fall under?",
    options: [
      "Analytical Thinking and Problem Solving",
      "Business Knowledge",
      "Behavioral Characteristics",
      "Interaction Skills"
    ],
    correctOptionIndex: 1,
    explanation: "Industry Knowledge is an element of Business Knowledge. It is the understanding of market trends, competitors, customer segments, and regulations of a specific industry."
  },

  // Chapter 10
  {
    id: "q10_1",
    chapterId: "ch10",
    questionText: "What are the three Cs of a User Story in agile methodologies?",
    options: [
      "Coding, Compliance, Cost",
      "Card, Conversation, Confirmation",
      "Concept, Capability, Constraint",
      "Current, Change, Closing"
    ],
    correctOptionIndex: 1,
    explanation: "The three Cs of a User Story are Card (the physical/digital card describing the user story), Conversation (collaborative discussion between team and stakeholder), and Confirmation (acceptance criteria)."
  },
  {
    id: "q10_2",
    chapterId: "ch10",
    questionText: "SWOT analysis is divided into which categories?",
    options: [
      "Systems, Workflows, Objectives, Tasks",
      "Strengths, Weaknesses, Opportunities, Threats",
      "Scope, Work-hours, Outputs, Timeframes",
      "Software, Web-interfaces, Databases, Transactions"
    ],
    correctOptionIndex: 1,
    explanation: "SWOT stands for Strengths and Weaknesses (internal factors), and Opportunities and Threats (external factors)."
  },
  {
    id: "q10_3",
    chapterId: "ch10",
    questionText: "Which diagram models the static structure of a system by showing data entities, attributes, and relationship lines?",
    options: [
      "BPMN Process Map",
      "Entity Relationship Diagram (ERD)",
      "Use Case Diagram",
      "SWOT Matrix"
    ],
    correctOptionIndex: 1,
    explanation: "An Entity Relationship Diagram (ERD) is a form of data modeling that shows the entities, attributes, and relationships representing data structure."
  },
  {
    id: "q10_4",
    chapterId: "ch10",
    questionText: "When establishing acceptance and evaluation criteria, what is a key quality that acceptance criteria must possess?",
    options: [
      "They must be written in pseudocode.",
      "They must be testable and binary (either pass or fail).",
      "They must outline the database schema details.",
      "They must be vague enough to allow developer flexibility."
    ],
    correctOptionIndex: 1,
    explanation: "Acceptance criteria must be structured so that they are testable and binary—meaning they either pass or fail, leaving no room for subjective interpretation."
  },
  {
    id: "q10_5",
    chapterId: "ch10",
    questionText: "In financial analysis for a Business Case, what does the Payback Period measure?",
    options: [
      "The number of hours developers spend coding.",
      "The time required for net benefits to equal the initial investment.",
      "The total duration of the project sprint cycle.",
      "The interest rate charged by central banks."
    ],
    correctOptionIndex: 1,
    explanation: "The payback period is the length of time required for the net economic benefits of a project to equal the initial investment cost."
  },
  {
    id: "q10_6",
    chapterId: "ch10",
    questionText: "In a BPMN process map, what does an XOR (Exclusive) gateway represent?",
    options: [
      "A split where all paths are executed in parallel.",
      "A split where only one path can be chosen based on conditions.",
      "A point where database records are encrypted.",
      "A task box representing a user interface mockup."
    ],
    correctOptionIndex: 1,
    explanation: "In BPMN, an XOR (Exclusive) gateway represents a decision point where only one mutually exclusive path is chosen based on a specific condition."
  },

  // Chapter 11
  {
    id: "q11_1",
    chapterId: "ch11",
    questionText: "Which BABOK perspective focuses on rapid value delivery, adapting to change, and continuous feedback loops?",
    options: [
      "Information Technology perspective",
      "Agile perspective",
      "Business Intelligence perspective",
      "Business Process Management perspective"
    ],
    correctOptionIndex: 1,
    explanation: "The Agile perspective focuses on rapid value delivery, high adaptability to change, iterative development, and highly collaborative feedback loops."
  },
  {
    id: "q11_2",
    chapterId: "ch11",
    questionText: "A BA is mapping the organization's capabilities, business models, and value streams to align high-level strategy with execution. What perspective is this?",
    options: [
      "Business Intelligence perspective",
      "Information Technology perspective",
      "Agile perspective",
      "Business Architecture perspective"
    ],
    correctOptionIndex: 3,
    explanation: "The Business Architecture perspective provides a holistic blueprint of the enterprise's strategy, goals, organizational capabilities, and value streams to align IT and business operations."
  },
  {
    id: "q11_3",
    chapterId: "ch11",
    questionText: "Optimizing workflows, removing process waste, and designing 'To-Be' process models using Lean/Six Sigma are primary activities of which perspective?",
    options: [
      "Agile perspective",
      "Business Process Management (BPM) perspective",
      "Information Technology perspective",
      "Business Intelligence perspective"
    ],
    correctOptionIndex: 1,
    explanation: "The Business Process Management (BPM) perspective focuses on analyzing, optimizing, modeling, and governing business processes to improve organizational efficiency and quality."
  },
  {
    id: "q11_4",
    chapterId: "ch11",
    questionText: "Which BABOK perspective operates at the enterprise level, mapping corporate capabilities, value streams, and organizational structures?",
    options: [
      "Agile perspective",
      "Business Architecture perspective",
      "Information Technology perspective",
      "Business Process Management perspective"
    ],
    correctOptionIndex: 1,
    explanation: "The Business Architecture perspective provides enterprise-level capability mapping and value stream blueprints to align high-level strategy with project execution."
  },
  {
    id: "q11_5",
    chapterId: "ch11",
    questionText: "A BA is mapping a transactional data stream to design fact and dimension tables for an executive KPI report. Which perspective is this BA practicing?",
    options: [
      "Agile perspective",
      "Business Intelligence perspective",
      "Information Technology perspective",
      "Business Process Management perspective"
    ],
    correctOptionIndex: 1,
    explanation: "The Business Intelligence perspective is centered around data warehousing, dimensional modeling (fact and dimension tables), ETL, and executive reporting dashboards."
  },
  {
    id: "q11_6",
    chapterId: "ch11",
    questionText: "Under the Information Technology perspective, security standards, server response times, and database encryption levels are examples of:",
    options: [
      "Functional Requirements",
      "Non-Functional Requirements",
      "Transition Requirements",
      "Business Capabilities"
    ],
    correctOptionIndex: 1,
    explanation: "In an IT project context, quality characteristics like security, response speed, and encryption are classified as Non-Functional Requirements."
  }
];

