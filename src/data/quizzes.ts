export interface Question {
  id: string;
  chapterId: string;
  questionText: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export const quizzesDb: Question[] = [
  // ==================== CHAPTER 1 ====================
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
  {
    id: "q1_4",
    chapterId: "ch1",
    questionText: "What is a 'Knowledge Area' in the context of the BABOK Guide?",
    options: [
      "A specific set of instructions for using database systems.",
      "A collection of logically related tasks and practices performed by BAs.",
      "A department in an organization where business analysts report.",
      "A list of professional certifications offered by the IIBA."
    ],
    correctOptionIndex: 1,
    explanation: "Knowledge Areas in the BABOK Guide categorize related business analysis tasks that are performed to achieve specific objectives throughout an initiative."
  },
  {
    id: "q1_5",
    chapterId: "ch1",
    questionText: "How many core Knowledge Areas are described in the BABOK Guide v3?",
    options: [
      "4 Knowledge Areas",
      "6 Knowledge Areas",
      "8 Knowledge Areas",
      "10 Knowledge Areas"
    ],
    correctOptionIndex: 1,
    explanation: "The BABOK Guide v3 defines 6 core Knowledge Areas: Planning & Monitoring, Elicitation & Collaboration, Life Cycle Management, Strategy Analysis, RADD, and Solution Evaluation."
  },
  {
    id: "q1_6",
    chapterId: "ch1",
    questionText: "Which of the following is NOT one of the six core Knowledge Areas in the BABOK Guide?",
    options: [
      "Requirements Life Cycle Management",
      "Business Architecture Analysis",
      "Strategy Analysis",
      "Solution Evaluation"
    ],
    correctOptionIndex: 1,
    explanation: "'Business Architecture Analysis' is not a standalone Knowledge Area; Business Architecture is treated as a Perspective (Chapter 11) in the BABOK Guide."
  },
  {
    id: "q1_7",
    chapterId: "ch1",
    questionText: "What are 'Underlying Competencies' in the BABOK Guide?",
    options: [
      "The minimum financial requirements needed to fund a project.",
      "The skills, knowledge, and personal qualities that help BAs work effectively.",
      "The database programming languages required for system integration.",
      "The software testing processes used to validate final solutions."
    ],
    correctOptionIndex: 1,
    explanation: "Underlying Competencies (Chapter 9) describe the behaviors, analytical skills, business knowledge, and communication abilities that make a BA effective."
  },
  {
    id: "q1_8",
    chapterId: "ch1",
    questionText: "Which component of the BABOK Guide describes the 'how-to' methods for executing tasks?",
    options: [
      "Tasks",
      "Techniques",
      "Underlying Competencies",
      "Perspectives"
    ],
    correctOptionIndex: 1,
    explanation: "Techniques (Chapter 10) describe specific, alternative methods (e.g. SWOT, ERD, Use Cases) a BA can choose to use when performing a task."
  },
  {
    id: "q1_9",
    chapterId: "ch1",
    questionText: "What do the 'Perspectives' in the BABOK Guide represent?",
    options: [
      "The subjective opinions of individual project managers.",
      "Lenses or contexts (such as Agile or IT) used to apply BA tasks appropriately.",
      "The 3D wireframe models representing user interface layouts.",
      "The organizational hierarchies of business analyst reporting lines."
    ],
    correctOptionIndex: 1,
    explanation: "Perspectives (Chapter 11) provide context-driven lenses (Agile, BI, IT, Business Architecture, BPM) to help BAs tailor tasks to a specific project type."
  },
  {
    id: "q1_10",
    chapterId: "ch1",
    questionText: "A BA is using a specific template to document requirements. This action falls under which BABOK category?",
    options: [
      "Underlying Competency",
      "Technique",
      "Perspective",
      "Task Execution"
    ],
    correctOptionIndex: 1,
    explanation: "Selecting and applying structured document structures, templates, or visual methods to organize requirements is a BA Technique."
  },

  // ==================== CHAPTER 2 ====================
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
    explanation: "In the BACCM, a 'Need' is defined as a problem or opportunity of interest to be addressed."
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
  {
    id: "q2_5",
    chapterId: "ch2",
    questionText: "How many core concepts make up the Business Analysis Core Concept Model (BACCM)?",
    options: [
      "5 concepts",
      "6 concepts",
      "7 concepts",
      "8 concepts"
    ],
    correctOptionIndex: 1,
    explanation: "The BACCM is composed of 6 equal and interdependent core concepts: Change, Need, Solution, Stakeholder, Value, and Context."
  },
  {
    id: "q2_6",
    chapterId: "ch2",
    questionText: "Which BACCM concept represents 'the circumstances that influence and are influenced by the change'?",
    options: [
      "Value",
      "Stakeholder",
      "Context",
      "Solution"
    ],
    correctOptionIndex: 2,
    explanation: "Context is defined as the circumstances that influence, are influenced by, and provide understanding of the change (such as culture, technology, and local laws)."
  },
  {
    id: "q2_7",
    chapterId: "ch2",
    questionText: "A requirement stating 'The bank must increase mobile onboarding completion rate by 15% in Q4' is a:",
    options: [
      "Business Requirement",
      "Stakeholder Requirement",
      "Functional Requirement",
      "Non-Functional Requirement"
    ],
    correctOptionIndex: 0,
    explanation: "Business Requirements are high-level goals, objectives, and outcomes that explain why an organization is implementing a change."
  },
  {
    id: "q2_8",
    chapterId: "ch2",
    questionText: "Transition Requirements differ from other requirement types because they are:",
    options: [
      "Only written for agile projects.",
      "Temporary and will not be needed once the change is fully deployed.",
      "Specifically focused on database schema designs.",
      "Approved only by external regulatory bodies."
    ],
    correctOptionIndex: 1,
    explanation: "Transition Requirements represent temporary conditions (e.g., data migration rules, staff training) needed to move the organization from current to future state, and become obsolete once transition is finished."
  },
  {
    id: "q2_9",
    chapterId: "ch2",
    questionText: "Which role represents the stakeholder who authorizes and funds the project?",
    options: [
      "Project Manager",
      "Regulator",
      "Sponsor",
      "Domain Subject Matter Expert (SME)"
    ],
    correctOptionIndex: 2,
    explanation: "The Sponsor is the stakeholder who authorizes, funds, and champions the change, and holds ultimate decision-making power."
  },
  {
    id: "q2_10",
    chapterId: "ch2",
    questionText: "Under BACCM, what does 'Value' measure?",
    options: [
      "The exact monetary price of the software build.",
      "The worth, importance, or usefulness of something to stakeholders in a context.",
      "The total lines of code produced by developers.",
      "The duration of the project deployment."
    ],
    correctOptionIndex: 1,
    explanation: "Value is the worth, importance, or usefulness of something to stakeholders within a context, and can be tangible (revenue) or intangible (brand reputation)."
  },

  // ==================== CHAPTER 3 ====================
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
  {
    id: "q3_4",
    chapterId: "ch3",
    questionText: "What is the difference between a Predictive and an Adaptive approach in BA Planning?",
    options: [
      "Predictive uses computers, while Adaptive is completely manual.",
      "Predictive focuses on upfront planning and minimizing changes; Adaptive focuses on iteration, quick releases, and accommodating changes.",
      "Predictive is only used for small websites; Adaptive is for core banking systems.",
      "There is no difference in tasks, only in the software tools used."
    ],
    correctOptionIndex: 1,
    explanation: "Predictive approaches (waterfall) focus on upfront detailed planning and rigid change control. Adaptive approaches (agile) focus on iterative refinement of requirements to handle high uncertainty."
  },
  {
    id: "q3_5",
    chapterId: "ch3",
    questionText: "What does 'Traceability planning' fall under in Chapter 3?",
    options: [
      "Plan Business Analysis Approach",
      "Plan Business Analysis Governance",
      "Plan Business Analysis Information Management",
      "Identify Business Analysis Performance Improvements"
    ],
    correctOptionIndex: 2,
    explanation: "Plan Business Analysis Information Management (Task 3.4) covers how requirements, metadata, and models are stored, organized, and traced."
  },
  {
    id: "q3_6",
    chapterId: "ch3",
    questionText: "The 'MoSCoW' scoring method is an element of planning which approach?",
    options: [
      "Governance Approach (for prioritization rules)",
      "Information Management Approach (for storage directories)",
      "Stakeholder Engagement Approach (for communication rules)",
      "Business Analysis Performance Assessment"
    ],
    correctOptionIndex: 0,
    explanation: "Governance Planning (Task 3.3) involves establishing clear prioritization criteria and scoring models (like MoSCoW) to resolve requirements conflicts."
  },
  {
    id: "q3_7",
    chapterId: "ch3",
    questionText: "What output is produced by the task 'Identify Business Analysis Performance Improvements'?",
    options: [
      "Business Analysis Approach",
      "Governance Approach",
      "Business Analysis Performance Assessment",
      "Information Management Approach"
    ],
    correctOptionIndex: 2,
    explanation: "Task 3.5 (Identify BA Performance Improvements) produces the Business Analysis Performance Assessment, capturing actual timelines, quality metrics, and corrective actions."
  },
  {
    id: "q3_8",
    chapterId: "ch3",
    questionText: "Which of the following is a primary input to 'Plan Stakeholder Engagement'?",
    options: [
      "Elicitation Activity Plan",
      "Business Analysis Approach",
      "Information Management Approach",
      "Requirements Change Assessment"
    ],
    correctOptionIndex: 1,
    explanation: "The Business Analysis Approach is a key input to 'Plan Stakeholder Engagement' (Task 3.2) as the overall project methodology dictates collaboration frequency."
  },
  {
    id: "q3_9",
    chapterId: "ch3",
    questionText: "What does 'Information Management Planning' define in a project context?",
    options: [
      "The database schema of the final software.",
      "How requirements documents are named, versioned, linked, and saved.",
      "The password requirements for the project manager's computer.",
      "The network architecture of the corporate servers."
    ],
    correctOptionIndex: 1,
    explanation: "Task 3.4 (Plan BA Information Management) structures requirements storage, document folder structures, metadata rules, and version control policies."
  },
  {
    id: "q3_10",
    chapterId: "ch3",
    questionText: "A BA is holding a retrospective to understand why requirements documentation was delayed. Which task is this?",
    options: [
      "Plan Business Analysis Approach",
      "Plan Stakeholder Engagement",
      "Plan Business Analysis Governance",
      "Identify Business Analysis Performance Improvements"
    ],
    correctOptionIndex: 3,
    explanation: "Monitoring BA work, capturing feedback, and adjusting approaches is part of Task 3.5 (Identify BA Performance Improvements)."
  },

  // ==================== CHAPTER 4 ====================
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
  {
    id: "q4_4",
    chapterId: "ch4",
    questionText: "Why is preparation required for Elicitation?",
    options: [
      "To ensure BAs write the final code first.",
      "To clarify scope, select techniques, invite participants, and prepare logistics/supporting materials.",
      "To request project budget approvals from the Sponsor.",
      "To write the user manuals before coding starts."
    ],
    correctOptionIndex: 1,
    explanation: "Task 4.1 (Prepare for Elicitation) involves defining the scope, picking techniques (e.g. interviews, workshops), preparing logistics, and structuring supporting tools."
  },
  {
    id: "q4_5",
    chapterId: "ch4",
    questionText: "A BA is observing a customer support agent use a software system to log errors. This is what type of elicitation?",
    options: [
      "Collaborative",
      "Research",
      "Experimental",
      "Bespoke"
    ],
    correctOptionIndex: 0,
    explanation: "Observation (Job Shadowing) is a Collaborative elicitation technique as it involves direct, real-time interaction and observation of human participants."
  },
  {
    id: "q4_6",
    chapterId: "ch4",
    questionText: "Reviewing an existing software API document and database schema represents what type of elicitation?",
    options: [
      "Collaborative",
      "Research",
      "Experimental",
      "Transition"
    ],
    correctOptionIndex: 1,
    explanation: "Research elicitation involves extracting information from static records, competitor products, database logs, and existing software systems."
  },
  {
    id: "q4_7",
    chapterId: "ch4",
    questionText: "Showing a user a clickable wireframe UI mockup to capture feedback is what type of elicitation?",
    options: [
      "Collaborative",
      "Research",
      "Experimental",
      "Traditional"
    ],
    correctOptionIndex: 2,
    explanation: "Experimental elicitation involves building prototypes, simulations, or pilots to let users try out concepts and provide feedback on actual behaviors."
  },
  {
    id: "q4_8",
    chapterId: "ch4",
    questionText: "What is the primary objective of task 4.3 'Confirm Elicitation Results'?",
    options: [
      "To get developers to estimate the user stories in sprint planning.",
      "To check elicited information for accuracy, consistency, and resolve discrepancies against other sources.",
      "To write the database scripts for transaction logs.",
      "To sign off the contract with third-party vendors."
    ],
    correctOptionIndex: 1,
    explanation: "Task 4.3 (Confirm Elicitation Results) verifies that the documented results accurately represent the stakeholder's statements and checks them against other source materials."
  },
  {
    id: "q4_9",
    chapterId: "ch4",
    questionText: "Which task involves packaging and presenting requirements information to specific audiences in a clear and appropriate format?",
    options: [
      "Prepare for Elicitation",
      "Communicate Business Analysis Information",
      "Manage Stakeholder Collaboration",
      "Confirm Elicitation Results"
    ],
    correctOptionIndex: 1,
    explanation: "Task 4.4 (Communicate BA Information) focuses on formatting, presenting, and holding review walkthroughs to share BA information with stakeholders."
  },
  {
    id: "q4_10",
    chapterId: "ch4",
    questionText: "Conflict resolution, managing stakeholder resistance, and maintaining high engagement are objectives of:",
    options: [
      "Plan Business Analysis Approach",
      "Confirm Elicitation Results",
      "Manage Stakeholder Collaboration",
      "Trace Requirements"
    ],
    correctOptionIndex: 2,
    explanation: "Task 4.5 (Manage Stakeholder Collaboration) involves building trust, handling resistance, and resolving requirements priority disputes."
  },

  // ==================== CHAPTER 5 ====================
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
  {
    id: "q5_4",
    chapterId: "ch5",
    questionText: "What are the two directions of requirements traceability?",
    options: [
      "Left-to-Right and Right-to-Left",
      "Forward (Business goals to implementation) and Backward (Implementation back to goals)",
      "Database-to-Server and Server-to-Client",
      "Business-to-Marketing and Marketing-to-Sales"
    ],
    correctOptionIndex: 1,
    explanation: "Traceability operates forward (tracing objectives down to solution requirements, code, and tests) and backward (tracing code and tests back to business objectives to justify existence)."
  },
  {
    id: "q5_5",
    chapterId: "ch5",
    questionText: "What is the primary goal of the task 'Maintain Requirements'?",
    options: [
      "To ensure requirements are kept accurate, organized, and reusable across future projects or operations.",
      "To prevent stakeholders from ever requesting changes to requirements.",
      "To write automated unit tests for software code.",
      "To keep the requirements document stored under lock and key."
    ],
    correctOptionIndex: 0,
    explanation: "Task 5.2 (Maintain Requirements) handles structuring requirements and metadata to keep them current, accurate, and available for long-term reuse."
  },
  {
    id: "q5_6",
    chapterId: "ch5",
    questionText: "Which stakeholder has the ultimate authority to approve requirements in most governance models?",
    options: [
      "Business Analyst",
      "Sponsor (or authorized decision-makers like Product Owner)",
      "QA Lead",
      "Software Engineer"
    ],
    correctOptionIndex: 1,
    explanation: "While the BA facilitates the review and consensus, the Project Sponsor or designated business owners (like POs) hold the final approval authority."
  },
  {
    id: "q5_7",
    chapterId: "ch5",
    questionText: "In requirements lifecycle management, what does 'Baselining' represent?",
    options: [
      "Creating the initial database schema.",
      "Securing agreement on a set of requirements as a reference point for future comparisons.",
      "Designing the bottom navigation bar of the application.",
      "Calculating the baseline salary of the project team."
    ],
    correctOptionIndex: 1,
    explanation: "A baseline is an approved version of requirements or design that can only be changed through a formal change control process."
  },
  {
    id: "q5_8",
    chapterId: "ch5",
    questionText: "A BA is analyzing whether a new requirement will affect regulatory compliance. This is an element of which task?",
    options: [
      "Prioritize Requirements",
      "Assess Requirements Changes",
      "Trace Requirements",
      "Maintain Requirements"
    ],
    correctOptionIndex: 1,
    explanation: "Task 5.4 (Assess Requirements Changes) analyzes how change requests impact compliance, strategy, budget, and project constraints."
  },
  {
    id: "q5_9",
    chapterId: "ch5",
    questionText: "What does 'Prioritizing Requirements' resolve?",
    options: [
      "How many hours developers must work each day.",
      "The order of implementation based on value, cost, dependency, and urgency constraints.",
      "The file layout formats for data backups.",
      "The salary structure of the QA testing team."
    ],
    correctOptionIndex: 1,
    explanation: "Task 5.3 (Prioritize Requirements) helps stakeholders reach consensus on the sequence of feature delivery based on relative importance and constraints."
  },
  {
    id: "q5_10",
    chapterId: "ch5",
    questionText: "Which tool or technique is commonly used to record links between requirements, designs, and tests?",
    options: [
      "SWOT Matrix",
      "Traceability Matrix (or requirements management tool)",
      "BPMN Swimlane Diagram",
      "Entity Relationship Diagram (ERD)"
    ],
    correctOptionIndex: 1,
    explanation: "Traceability matrices or dedicated tools (like Jira/Confluence links) are used to map and maintain relationships between different layers of project deliverables."
  },

  // ==================== CHAPTER 6 ====================
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
  {
    id: "q6_4",
    chapterId: "ch6",
    questionText: "The desired destination of a change, complete with objectives and metrics, is called the:",
    options: [
      "As-Is state",
      "To-Be state (or Future State)",
      "Transition state",
      "Governance baseline"
    ],
    correctOptionIndex: 1,
    explanation: "The Future State (Task 6.2) describes the target capability, objectives, and success indicators ('To-Be' state) after the change is successfully deployed."
  },
  {
    id: "q6_5",
    chapterId: "ch6",
    questionText: "What are 'Transition States' in a Change Strategy?",
    options: [
      "Temporary intermediate states where the organization has deployed some capabilities but has not reached the final future state.",
      "The phases of database transactional rollbacks.",
      "The animations shown when users navigate between app screens.",
      "The payroll adjustments made when employees change departments."
    ],
    correctOptionIndex: 0,
    explanation: "Transition States (Task 6.4) represent phased intermediate milestones where some value is deployed, but the full target future state is still in progress."
  },
  {
    id: "q6_6",
    chapterId: "ch6",
    questionText: "Which of the following is a key element when 'Defining Future State'?",
    options: [
      "Reviewing current system error logs.",
      "Specifying measurable Business Objectives and KPI metrics.",
      "Selecting the coding language for the database APIs.",
      "Writing test cases for the user registration screen."
    ],
    correctOptionIndex: 1,
    explanation: "Defining the Future State (Task 6.2) requires establishing concrete, measurable goals (Business Objectives) and indicators (KPIs) to track success."
  },
  {
    id: "q6_7",
    chapterId: "ch6",
    questionText: "Analyzing an organization's 'Internal Capabilities' (such as team skills and culture) is part of which task?",
    options: [
      "Analyze Current State",
      "Define Change Strategy",
      "Prioritize Requirements",
      "Approve Requirements"
    ],
    correctOptionIndex: 0,
    explanation: "Task 6.1 (Analyze Current State) evaluates the internal assets, structures, processes, personnel skills, and technology baseline."
  },
  {
    id: "q6_8",
    chapterId: "ch6",
    questionText: "A BA is comparing a build option (custom scoring code) against a buy option (licensed SaaS). This activity is part of which task?",
    options: [
      "Analyze Current State",
      "Assess Risks",
      "Define Change Strategy",
      "Validate Requirements"
    ],
    correctOptionIndex: 2,
    explanation: "Formulating a Change Strategy (Task 6.4) includes evaluating resource options, sourcing options (build vs. buy), and delivery paths."
  },
  {
    id: "q6_9",
    chapterId: "ch6",
    questionText: "Which formula represents 'Risk' value?",
    options: [
      "Risk = Scope + Time",
      "Risk = Probability x Impact",
      "Risk = Revenue - Cost",
      "Risk = Value / Effort"
    ],
    correctOptionIndex: 1,
    explanation: "Risk is evaluated as the product of the probability of the negative event occurring and the severity of its impact on project outcomes."
  },
  {
    id: "q6_10",
    chapterId: "ch6",
    questionText: "What represents a primary input to 'Define Change Strategy'?",
    options: [
      "Elicitation results (unconfirmed)",
      "Current State Description, Future State Description, and Risk Analysis Results",
      "Jira ticket backlog counts",
      "Approved database schemas"
    ],
    correctOptionIndex: 1,
    explanation: "To formulate a Change Strategy (Task 6.4), the BA must understand where the organization is today (Current), where it needs to go (Future), and what obstacles exist (Risk)."
  },

  // ==================== CHAPTER 7 ====================
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
  {
    id: "q7_4",
    chapterId: "ch7",
    questionText: "What is the output of 'Specify and Model Requirements'?",
    options: [
      "Elicitation Activity Plan",
      "Requirements (Specified and Modeled)",
      "Change Strategy",
      "Solution Recommendation"
    ],
    correctOptionIndex: 1,
    explanation: "Task 7.1 (Specify and Model Requirements) transforms raw elicitation results into structured, categorized requirements models and diagrams."
  },
  {
    id: "q7_5",
    chapterId: "ch7",
    questionText: "Which quality characteristics are checked during 'Requirements Verification'?",
    options: [
      "Profitability and ROI values.",
      "Clarity, completeness, consistency, testability, and unambiguity.",
      "Lines of code and deployment size.",
      "User satisfaction scores."
    ],
    correctOptionIndex: 1,
    explanation: "Verification (Task 7.2) checks document quality indicators, ensuring that requirements are clear, consistent, complete, testable, and have no spelling or semantic errors."
  },
  {
    id: "q7_6",
    chapterId: "ch7",
    questionText: "An business analyst checks if a database field matches the tax compliance policies of the bank. This is an example of:",
    options: [
      "Requirements Verification",
      "Requirements Validation",
      "Backlog refinement",
      "Change control"
    ],
    correctOptionIndex: 1,
    explanation: "Validation (Task 7.3) checks if requirements and solutions align with business objectives, organizational policies, and legal compliance (value alignment)."
  },
  {
    id: "q7_7",
    chapterId: "ch7",
    questionText: "What represents the 'Requirements Architecture'?",
    options: [
      "The hardware configuration of the system server.",
      "The structured relationship framework showing how all requirements and models fit together.",
      "The physical layout blueprint of the business office.",
      "The organizational chart of the software development department."
    ],
    correctOptionIndex: 1,
    explanation: "Task 7.4 (Define Requirements Architecture) structures all requirements to ensure they cover the full scope, don't contradict each other, and show logical relationships."
  },
  {
    id: "q7_8",
    chapterId: "ch7",
    questionText: "What output is produced by the task 'Analyze Potential Value and Recommend Solution'?",
    options: [
      "Requirements (Verified)",
      "Design Options (Prioritized)",
      "Solution Recommendation",
      "Requirements Change Assessment"
    ],
    correctOptionIndex: 2,
    explanation: "Task 7.6 (Analyze Potential Value and Recommend Solution) produces the Solution Recommendation, suggesting the option that yields the highest net benefit to the organization."
  },
  {
    id: "ch7_9",
    chapterId: "ch7",
    questionText: "Which modeling category uses Entity Relationship Diagrams (ERD) to represent data relationships?",
    options: [
      "Activity Modeling",
      "Data Modeling",
      "Process Modeling",
      "Rule Modeling"
    ],
    correctOptionIndex: 1,
    explanation: "Data Modeling (e.g. ERD) is a specific modeling category used to define the logical structures, entities, and attributes of the data."
  },
  {
    id: "q7_10",
    chapterId: "ch7",
    questionText: "The boundary of a Requirements Architecture ensures that:",
    options: [
      "All requirements are translated to code within 2 weeks.",
      "Requirements are complete, support each other, and no scope is missed or duplicated.",
      "The project stays under the initial budget limit.",
      "Only the Product Manager can review requirements documents."
    ],
    correctOptionIndex: 1,
    explanation: "Requirements Architecture (Task 7.4) organizes rules and models to ensure complete coverage, preventing missing, disjointed, or duplicate requirements."
  },

  // ==================== CHAPTER 8 ====================
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
  {
    id: "q8_4",
    chapterId: "ch8",
    questionText: "What is the primary input for the task 'Measure Solution Performance'?",
    options: [
      "Solution Performance Measures",
      "Implemented Solution (or Prototype)",
      "Enterprise Limitations",
      "Change Strategy"
    ],
    correctOptionIndex: 1,
    explanation: "According to the BABOK Guide, the primary input to Task 8.1 (Measure Solution Performance) is the Implemented Solution (or pilot/prototype) that is active."
  },
  {
    id: "q8_5",
    chapterId: "ch8",
    questionText: "Analyzing solution performance metrics involves comparing actual performance against:",
    options: [
      "Competitor sales numbers.",
      "The initial target Business Objectives and success criteria.",
      "The project manager's scheduled tasks.",
      "The total memory size of the server."
    ],
    correctOptionIndex: 1,
    explanation: "Task 8.2 (Analyze Performance Measures) evaluates the collected performance metrics against the goals defined in strategy planning to see if expected value is met."
  },
  {
    id: "q8_6",
    chapterId: "ch8",
    questionText: "A BA is reviewing organizational culture and politics to see if they block app adoption. What task is this?",
    options: [
      "Assess Solution Limitations",
      "Assess Enterprise Limitations",
      "Measure Solution Performance",
      "Analyze Performance Measures"
    ],
    correctOptionIndex: 1,
    explanation: "Task 8.4 (Assess Enterprise Limitations) examines factors outside the system scope (such as user culture, reporting line hierarchies, and operational readiness) that prevent adoption."
  },
  {
    id: "q8_7",
    chapterId: "ch8",
    questionText: "What represents the final output of Solution Evaluation?",
    options: [
      "Solution Performance Measures",
      "Recommended Actions (to improve value or resolve limitations)",
      "Requirements (Verified)",
      "Implemented Solution"
    ],
    correctOptionIndex: 1,
    explanation: "The ultimate goal of Solution Evaluation is to recommend changes (Task 8.5) that will maximize value delivery, such as software tweaks, process changes, or retirement."
  },
  {
    id: "q8_8",
    chapterId: "ch8",
    questionText: "A BA recommends retiring a legacy payroll software and migrating to a SaaS platform. This recommendation is an output of which task?",
    options: [
      "Define Design Options",
      "Recommend Actions to Increase Solution Value",
      "Assess Solution Limitations",
      "Define Future State"
    ],
    correctOptionIndex: 1,
    explanation: "Task 8.5 (Recommend Actions to Increase Solution Value) includes recommending software retirement, replacement, process adjustments, or organizational training."
  },
  {
    id: "q8_9",
    chapterId: "ch8",
    questionText: "Why is an 'active feedback loop' important in Solution Evaluation?",
    options: [
      "To pay developers on a weekly basis.",
      "To ensure continuous improvement based on real performance measures after launch.",
      "To keep the marketing campaigns active.",
      "To prevent stakeholders from contacting the project team."
    ],
    correctOptionIndex: 1,
    explanation: "Measuring, evaluating, and adjusting live systems ensures that the business actually realizes the value calculated in initial strategy plans."
  },
  {
    id: "q8_10",
    chapterId: "ch8",
    questionText: "Which technique is commonly used during Solution Evaluation to collect user satisfaction scores?",
    options: [
      "Data Modelling",
      "Surveys and Questionnaires (or Focus Groups)",
      "Entity Relationship Diagrams (ERD)",
      "MoSCoW Prioritization"
    ],
    correctOptionIndex: 1,
    explanation: "BAs use surveys, interviews, and questionnaires to collect qualitative stakeholder feedback and score solution usability and satisfaction."
  },

  // ==================== CHAPTER 9 ====================
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
  {
    id: "q9_6",
    chapterId: "ch9",
    questionText: "Ethical behavior for a BA involves which of the following practices?",
    options: [
      "Hiding software defects from the project manager to hit release dates.",
      "Reporting real value metrics and requirements gaps without bias or personal gain.",
      "Sharing confidential customer credentials with developers on public forums.",
      "Approving requirements updates without consulting the Sponsor."
    ],
    correctOptionIndex: 1,
    explanation: "Ethics requires BAs to maintain objectivity, report real value and compliance metrics, and handle confidential corporate data with full integrity."
  },
  {
    id: "q9_7",
    chapterId: "ch9",
    questionText: "Which Interaction Skill is defined as mediating requirements disputes to reach a win-win consensus?",
    options: [
      "Facilitation",
      "Negotiation and Conflict Resolution",
      "Leadership",
      "Teamwork"
    ],
    correctOptionIndex: 1,
    explanation: "Negotiation and Conflict Resolution involves helping stakeholders find compromise solutions that satisfy diverse interests, preventing gridlock."
  },
  {
    id: "q9_8",
    chapterId: "ch9",
    questionText: "Which sub-competency under Business Knowledge involves understanding the political structures and informal networks within a company?",
    options: [
      "Business Acumen",
      "Organization Knowledge",
      "Industry Knowledge",
      "Solution Knowledge"
    ],
    correctOptionIndex: 1,
    explanation: "Organization Knowledge is the understanding of the political, cultural, operational, and formal/informal structures of the enterprise."
  },
  {
    id: "q9_9",
    chapterId: "ch9",
    questionText: "What does 'Visual Thinking' help a BA accomplish?",
    options: [
      "Reading text files faster.",
      "Creating clear, visual diagrams (like process flowcharts or mockups) to communicate complex systems simply.",
      "Memorizing database tables easily.",
      "Designing beautiful graphic ads for marketing."
    ],
    correctOptionIndex: 1,
    explanation: "Visual Thinking is the ability to map complex relationships, processes, and UI layouts into intuitive graphic models that clarify specifications."
  },
  {
    id: "q9_10",
    chapterId: "ch9",
    questionText: "Under Underlying Competencies, tools like Visio, Lucidchart, and Miro represent:",
    options: [
      "Office Productivity Tools",
      "Modeling Tools",
      "Requirements Management Tools",
      "Database Systems"
    ],
    correctOptionIndex: 1,
    explanation: "Visio, Lucidchart, and Miro are modeling tools used by BAs to build visual process drawings, ERDs, and collaboration maps."
  },

  // ==================== CHAPTER 10 ====================
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
  {
    id: "q10_7",
    chapterId: "ch10",
    questionText: "What is the primary difference between an Interview and a Survey/Questionnaire?",
    options: [
      "Interviews are only done online, while surveys are printed on paper.",
      "Interviews are deep, interactive 1-on-1 dialogs; surveys collect structured responses from a large group of users quickly.",
      "Interviews are for developers; surveys are for business partners.",
      "There is no difference; they are alternative names for user meetings."
    ],
    correctOptionIndex: 1,
    explanation: "Interviews allow deep exploration of user needs and feelings with a single stakeholder. Surveys/Questionnaires collect standardized data from a large cohort to identify statistical patterns."
  },
  {
    id: "q10_8",
    chapterId: "ch10",
    questionText: "What are the components of a Use Case?",
    options: [
      "Fact tables, Dimension tables, and ETL scripts.",
      "Actor, Pre-conditions, Post-conditions, Basic flow, and Exception flows.",
      "Jira ticket ID, Developer name, and hourly cost.",
      "Strengths, Weaknesses, Opportunities, and Threats."
    ],
    correctOptionIndex: 1,
    explanation: "A Use Case specification details the Actor, Pre-conditions, Post-conditions, the happy path (Basic Flow), and error handling routes (Exception/Alternate Flows)."
  },
  {
    id: "q10_9",
    chapterId: "ch10",
    questionText: "A BA is facilitating a session where 10 diverse stakeholders are brainstorming ideas. To keep the workshop neutral and structured, the BA must act as a:",
    options: [
      "Project Manager",
      "Facilitator",
      "Scribe",
      "Technical Architect"
    ],
    correctOptionIndex: 1,
    explanation: "Workshops require a neutral Facilitator who steers discussions, manages timing, and prevents dominant voices from hijacking the session."
  },
  {
    id: "q10_10",
    chapterId: "ch10",
    questionText: "What is the purpose of estimation techniques in business analysis?",
    options: [
      "To guarantee the exact budget down to the last dollar.",
      "To predict project metrics (costs, timeline, resources) within a range of uncertainty.",
      "To assign daily tasks to individual developers.",
      "To determine system memory limits."
    ],
    correctOptionIndex: 1,
    explanation: "Estimates are predictions of future outcomes (costs, hours, timelines) and are represented as ranges with associated confidence levels."
  },

  // ==================== CHAPTER 11 ====================
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
  },
  {
    id: "q11_7",
    chapterId: "ch11",
    questionText: "Which perspective heavily utilizes ETL (Extract, Transform, Load) mapping specifications?",
    options: [
      "Agile perspective",
      "Business Architecture perspective",
      "Business Intelligence perspective",
      "Business Process Management perspective"
    ],
    correctOptionIndex: 2,
    explanation: "The BI perspective requires BAs to define data transformation and loading rules (ETL) to move raw records to reporting servers."
  },
  {
    id: "q11_8",
    chapterId: "ch11",
    questionText: "Continuous process monitoring, flow cycle measurements, and swimlane diagrams are key tools for which perspective?",
    options: [
      "Business Intelligence perspective",
      "Business Process Management (BPM) perspective",
      "Agile perspective",
      "Business Architecture perspective"
    ],
    correctOptionIndex: 1,
    explanation: "BPM BAs map process flows, identify delays, and measure cycle times to systematically reduce processing bottlenecks."
  },
  {
    id: "q11_9",
    chapterId: "ch11",
    questionText: "In the Agile perspective, how are requirements typically documented and managed?",
    options: [
      "As a massive, locked 500-page System Requirements Specification (SRS) doc.",
      "As dynamic, lightweight user stories managed in a prioritized product backlog.",
      "Directly as code comments in the database repository.",
      "Surveys sent to executive sponsors on a monthly basis."
    ],
    correctOptionIndex: 1,
    explanation: "Agile teams express requirements as small user stories and continuously prioritize them in the backlog to allow rapid iteration."
  },
  {
    id: "q11_10",
    chapterId: "ch11",
    questionText: "A BA is mapping a REST API integration between two external banking microservices. This activity falls under which perspective?",
    options: [
      "Business Intelligence perspective",
      "Information Technology perspective",
      "Business Architecture perspective",
      "Business Process Management perspective"
    ],
    correctOptionIndex: 1,
    explanation: "IT Business Analysis deals with system-to-system integrations, data payload mappings, and API endpoint specs."
  }
];
