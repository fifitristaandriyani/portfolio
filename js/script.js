// ==================== CONFIGURABLE CORE VARIABLES ====================
const ROUTING_VARIABLES = {
  links: {
    linkedin: "https://linkedin.com/in/fifi-trista-andriyani",
    instagram: "https://instagram.com/fifi_trista",
    email: "mailto:fifitristaa04@gmail.com",
    whatsapp: "https://wa.me/6287736397291",
  },
  certificates: [
    {
      title: "OD and TA Intern Completion",
      year: "2025",
      path: "assets/images/certificates/cert-1.jpg",
    },
    {
      title: "Project Control Intern Completion",
      year: "2025",
      path: "assets/images/certificates/cert-2.jpg",
    },
    {
      title: "Laboratory Assistant Product Design and Development",
      year: "2024",
      path: "assets/images/certificates/cert-3.jpg",
    },
    {
      title: "Assistant Lecturer Product Design and Development",
      year: "2024",
      path: "assets/images/certificates/cert-4.jpg",
    },
    {
      title: "Assistant Lecturer Engineering Material",
      year: "2023",
      path: "assets/images/certificates/cert-5.jpg",
    },
    {
      title: "Data Analytic in Power BI Course Completion",
      year: "2025",
      path: "assets/images/certificates/cert-6.jpg",
    },
    {
      title: "Project Management Course Completion",
      year: "2025",
      path: "assets/images/certificates/cert-7.jpg",
    },
    {
      title: "Digital Marketing Course Completion",
      year: "2024",
      path: "assets/images/certificates/cert-8.jpg",
    },
  ],
  achievements: [
    {
      id: "ach1",
      title: "TOEFL ITP 573",
      group: "Official Score",
      text: "English communication proficiency with an official authenticated institutional TOEFL ITP score of 573.",
      path: "assets/images/certificates/cert-9.jpg",
    },
    {
      id: "ach2",
      title: "Top 10 Product Design Competition TI USU 2024",
      group: "National Placement",
      text: "Achieved Top 10 finalist placement in the Product Design Competition held by Universitas Sumatera Utara (TI USU) in 2024.",
      path: "assets/images/certificates/cert-10.jpg",
    },
    {
      id: "ach3",
      title: "Top 4 Industrial Simulation Competition 2023",
      group: "National Placement",
      text: "Achieved Top 4 placement in the Industrial Simulation Competition 2023 by demonstrating analytical and problem-solving skills in manufacturing system simulations.",
      path: "assets/images/certificates/cert-11.jpg",
    },
    {
      id: "ach4",
      title: "2nd Place Product Design Expo INDEX UGM 2022",
      group: "Project and Exhibition Winner",
      text: "Awarded 2nd Place in the Product Design Project and Expo INDEX UGM 2022 for developing an innovative product design solution.",
      path: "assets/images/certificates/cert-12.jpg",
    },
  ],
};

const projectDatabase = {
  projOmega: {
    title: "OMEGA - AI Powered Plant Performance Intelligence",
    contributions: [
      "Led QCC problem analysis, including fishbone analysis and improvement planning, to address inefficiencies in cost analysis.",
      "Defined analytical requirements, prepared cost datasets, and mapped business logic for AI development.",
      "Coordinated with IT developers and AI engineers to develop, test, and validate the solution through sprint run project meetings.",
    ],
    outcomes:
      "Reduced analysis lead time from 705 to 60 minutes (91.5%), exceeding the 80% reduction target. Developed an integrated cost dashboard and AI-powered analytical interface.",
    tools: [
      "QCC",
      "Fishbone Analysis",
      "Cost Analysis",
      "Data Validation",
      "AI Product Development",
      "Data Analytics",
    ],
    images: [
      "assets/images/projects/project-omega-1.jpg",
      "assets/images/projects/project-omega-2.jpg",
    ],
  },
  projCost: {
    title: "Plant Cost & Performance Analysis System",
    contributions: [
      "Developed Looker Studio dashboards and Excel-based tools to monitor expense trends, cost-saving progress, and plant performance.",
      "Conducted cost and gap analysis to identify expense anomalies, performance deviations, and potential improvement opportunities.",
      "Prepared monthly analytical reports by investigating cost drivers and translating operational data into actionable insights for management review.",
    ],
    outcomes:
      "Integrated cost monitoring, expense trend analysis, and project-saving progress tracking to support data-driven performance evaluation.",
    tools: [
      "Looker Studio",
      "Microsoft Excel",
      "Cost Trend Analysis",
      "Gap Analysis",
      "Performance Monitoring",
    ],
    images: [
      "assets/images/projects/project-cost-1.jpg",
      "assets/images/projects/project-cost-2.jpg",
    ],
  },
  projDynamics: {
    title: "System Dynamics Simulation for Production Capacity Optimization",
    contributions: [
      "Modeled operational relationships between production planning, capacity, manpower, overtime, and conversion cost.",
      "Simulated product grammage adjustments and recruitment scenarios to evaluate their operational impact.",
      "Analyzed scenarios to support capacity planning and coordination with PPIC.",
    ],
    outcomes:
      "Identified product grammage and recruitment adjustment as a potential strategy to improve fulfillment while reducing overtime and conversion cost in the simulation. Provided insights into how product mix decisions and recruitment affect capacity and production planning, supporting more informed coordination with PPIC.",
    tools: [
      "Vensim",
      "System Dynamics",
      "Scenario Analysis",
      "Capacity Planning",
      "Production System",
    ],
    images: [
      "assets/images/projects/project-dynamics-1.jpg",
      "assets/images/projects/project-dynamics-2.jpg",
    ],
  },
  projShpWay: {
    title: "SHP WAY — Smart Changeover & Production Line Optimization",
    contributions: [
      "Analyzed operational challenges arising from SKU expansion, linking planning complexity and changeover losses to production cost and fulfillment performance.",
      "Developed the improvement rationale and SHP WAY framework, defining SKU readiness criteria based on product compatibility, machine parameters, line capacity, and production schedules.",
    ],
    outcomes:
      "Reduced planning time from 3 hours to 5 minutes and changeover time from 1,005 to 630 minutes in the SHP WAY comparison. Demonstrated through simulation that an 8.2% increase in SKU volume could be managed with only a 6.4% increase in changeover time through optimized line mapping.",
    tools: [
      "Focused Improvement",
      "Autonomous Maintenance",
      "4M1E Analysis",
      "Root Cause Analysis",
    ],
    images: [
      "assets/images/projects/project-shpway-1.jpg",
      "assets/images/projects/project-shpway-2.jpg",
    ],
  },
  projErmPlant: {
    title: "Plant-Level Enterprise Risk Management",
    contributions: [
      "Coordinated departmental risk identification, assessment, and risk register updates.",
      "Monitored risk treatment plans, control effectiveness, and mitigation progress with process owners.",
      "Maintained risk profiles, RACI assignments, and KPI/KRI monitoring to support plant risk reviews.",
    ],
    outcomes:
      "Strengthened cross-departmental risk visibility and accountability through structured ERM monitoring. Completed the Risk Management Development Program, strengthening capabilities in enterprise risk assessment and mitigation.",
    tools: [
      "Enterprise Risk Management",
      "Risk Assessment",
      "Risk Register",
      "RACI",
      "KPI/KRI Monitoring",
      "Risk Mitigation",
    ],
    images: [
      "assets/images/projects/project-erm-1.jpg",
      "assets/images/projects/project-erm-2.jpg",
    ],
  },
  projPandawaAward: {
    title: "Pandawa Award — Kaizen Culture & Continuous Improvement Program",
    contributions: [
      "Developed program frameworks, scoring criteria, and facilitator routines to maintain improvement quality and consistency.",
      "Initiated engagement programs including Instagram Trivia, improvement quizzes, CG League, and dedicated improvement communication channels.",
      "Created KPI simulations and knowledge-sharing activities to help facilitators guide teams and sustain improvement initiatives.",
    ],
    outcomes:
      "Expanded improvement participation across departments and award categories. Increased plant improvement projects advancing to field judging in the Sanghiang Perkasa Manufacturing Improvement Competition from 15 to 24 (+60%).",
    tools: [
      "Focused Improvement",
      "Kaizen Culture",
      "Facilitator Development",
      "Program Development",
      "Performance Assessment",
      "Employee Engagement",
    ],
    images: [
      "assets/images/projects/project-pandawa-award-1.jpg",
      "assets/images/projects/project-pandawa-award-2.jpg",
    ],
  },
  proj1: {
    title: "KPI Performance & Cost Management System",
    contributions: [
      "Developed and maintained integrated plant performance dashboards using Looker Studio and Microsoft Excel.",
      "Built project tracking dashboards to monitor improvement initiatives and action plan progress.",
      "Conducted performance gap analysis to identify operational losses, recurring issues, and cost drivers.",
      "Developed and Maintained plant cost databases and analyzed relationships between operational performance and cost outcomes.",
      "Developed Causal Loop Diagram (CLD) simulations to understand KPI interactions and support improvement planning.",
    ],
    outcomes:
      "Cost Performance Dashboard (Looker Studio), KPI Monitoring Dashboard, Project Tracking Dashboard, KPI Simulation Model (CLD)",
    tools: [
      "Performance Management",
      "Cost Analysis",
      "Gap Analysis",
      "Looker Studio",
      "Microsoft Excel",
      "KPI Simulation",
    ],
    images: [
      "assets/images/projects/project-1-1.jpg",
      "assets/images/projects/project-1-2.jpg",
    ],
  },
  proj2: {
    title: "AI-Enabled Performance Dashboard Development",
    contributions: [
      " Prepared and structured datasets according to dashboard requirements.",
      "Supported the formal development cycles for Business Requirement Documents (BRD) and Functional Specification Documents (FSD).",
      "Validated data quality, consistency, and reporting accuracy.",
      "Collaborated with Data Analysts and AI Developers during dashboard development and testing.",
      "Supported user acceptance and dashboard refinement activities.",
    ],
    outcomes:
      "Delivered Business Requirement Document (BRD), Functional Specification Document (FSD), Validated Operational Dataset, Dashboard Testing & Validation Reports, User Acceptance Testing (UAT).",
    tools: [
      "Business Analysis",
      "Data Validation",
      "Dashboard Development",
      "Cross-Functional Collaboration",
    ],
    images: [
      "assets/images/projects/project-2-1.jpeg",
      "assets/images/projects/project-2-2.jpg",
    ],
  },
  proj3: {
    title: "Smart Changeover & Autonomous Response System",
    contributions: [
      "Developed improvement concepts under the Focused Improvement (FI) pillar to strengthen problem-solving and continuous improvement practices.",
      "Utilized manufacturing process data to identify losses, bottlenecks, and improvement opportunities.",
      "Supported Autonomous Maintenance (AM) initiatives through operational data collection and issue identification.",
      "Presented improvement proposals and implementation strategies during TPM review activities.",
      "Integrated technical, operational, and people management aspects into a single improvement framework.",
    ],
    outcomes:
      "Loss & Bottleneck Identification Framework, Implementation Roadmap & Action Plan, TPM Project Presentation Materials",
    tools: [
      "TPM",
      "Continuous Improvement",
      "Root Cause Analysis",
      "Problem Solving",
      "Project Management",
    ],
    images: [
      "assets/images/projects/project-3-1.jpg",
      "assets/images/projects/project-3-2.jpg",
    ],
  },
  proj4: {
    title: "Enterprise Risk Management (ERM)",
    contributions: [
      "Completed formalized plant-level corporate Enterprise Risk Management training blueprints.",
      "Supported technical risk documentation steps and coordinated departmental preventive action mapping.",
      "Participated directly in formal internal risk audit operations and structured compliance reviews.",
      "Monitored the implementation of risk treatment plans to ensure adherence to corporate safety standards.",
    ],
    outcomes:
      "Risk Register Documentation, Risk Assessment Matrix, Risk Mitigation Action Plans, Internal Audit Support Documentation, Risk Monitoring & Follow-up Reports.",
    tools: [
      "Risk Management",
      "Internal Audit",
      "Risk Assessment",
      "Compliance Management",
    ],
    images: [
      "assets/images/projects/project-4-1.jpg",
      "assets/images/projects/project-4-2.jpg",
    ],
  },
  proj5: {
    title: "Pandawa Continuous Improvement Challenge",
    contributions: [
      "Developed the master program framework, scoring rules, and performance assessment criteria for individual and group contributions.",
      "Created data-driven KPI and System Flow Diagram (SFD) simulations to help plant floor teams understand performance targets.",
      "Designed and managed monthly continuous improvement trivia campaigns via corporate channels to build workforce knowledge.",
      "Monitored ongoing performance metrics and maintained the master annual participant ranking systems used for evaluations.",
      "Managed employee engagement initiatives using the program's official WhatsApp Channel to increase active suggestions.",
      "Coordinated the final execution logistics for the annual corporate recognition and awarding ceremonies.",
    ],
    outcomes:
      "CI Scoring System, Assessment Criteria Framework, KPI & SFD Simulation Materials, Monthly Trivia Program, Annual Awarding System, Employee Engagement Dashboard.",
    tools: [
      "Continuous Improvement",
      "Program Development",
      "Employee Engagement",
      "Performance Measurement",
      "Internal Communication",
      "Change Management",
    ],
    images: [
      "assets/images/projects/project-5-1.jpg",
      "assets/images/projects/project-5-2.jpg",
    ],
  },
};

const activityDatabase = {
  act1: {
    title: "Daily Management System (DMS)",
    purpose:
      "Drive routine performance reviews and issue resolution through structured discussions, clear ownership, and timely follow-up.",
    role: "As Daily Management System Lead, led Tuesday sessions to consolidate new operational issues and Thursday reviews to monitor OOEE performance, breakdowns, and ongoing issues. Moderated discussions to clarify issues, align issue raisers with action owners, and establish corrective action commitments. Documented Minutes of Meeting (MoM), monitored action progress, and followed up with departments to ensure timely issue closure.",
    skills: [
      "Meeting Facilitation",
      "Performance Monitoring",
      "Issue Resolution",
      "Action Tracking",
      "Cross-functional Coordination",
    ],
    image: "",
  },
  act2: {
    title: "Monthly Operating Review (MOR)",
    purpose:
      "Review overall plant KPI performance, identify performance gaps, and align improvement priorities with management.",
    role: "As Performance Management Coordinator, prepared and presented overall plant KPI reports, including performance achievements, deviations, and gap analysis to Managers and Supervisors. Moderated management review discussions, translating performance gaps into key insights and improvement priorities. Documented meeting outcomes and coordinated action follow-ups with responsible PICs to ensure timely progress.",
    skills: [
      "Performance Analysis",
      "Gap Analysis",
      "Management Reporting",
      "Meeting Facilitation",
      "Action Tracking",
    ],
    image: "assets/images/activities/activity-2.jpeg",
  },
  act3: {
    title: "Yearly Operating Review (YOR)",
    purpose:
      "Evaluate annual plant performance, review improvement achievements, and align strategic priorities and programs for the following year.",
    role: "As Annual Performance Review Coordinator, designed the YOR event concept, evaluation agenda, and key review activities. Prepared annual performance summaries and facilitated discussions on achievements, gaps, and improvement strategies. Presented proposed improvement programs and priorities for the following year, documenting key decisions and alignment.",
    skills: [
      "Annual Performance Review",
      "Strategic Planning",
      "Program Development",
      "Management Reporting",
      "Stakeholder Coordination",
    ],
    image: "assets/images/activities/activity-3.jpeg",
  },
  act4: {
    title: "Gemba Observation & Improvement Program",
    purpose:
      "Identify shopfloor gaps and improvement opportunities through workplace observations, AM audits, and operator feedback.",
    role: "As Operational Improvement Coordinator, conducted Gemba 5P and Autonomous Maintenance audits to identify workplace condition gaps and operational abnormalities. Analyzed audit findings to identify recurring issues and improvement opportunities. Gathered operator feedback through surveys to develop bottom-up improvement initiatives based on actual shopfloor needs.",
    skills: [
      "Gemba Observation",
      "5P Audit",
      "Autonomous Maintenance",
      "Gap Analysis",
      "Employee Engagement",
      "Continuous Improvement",
    ],
    image: "assets/images/activities/activity-4.jpeg",
  },
  act5: {
    title: "TPM (Total Productive Maintenance) Quick Win Presentation",
    purpose:
      "Promote plant-level improvement initiatives through TPM Quick Win presentations, showcasing solutions to key operational challenges.",
    role: "As Focused Improvement Representative & Quick Win Presenter, monitored project progress, presented improvement outcomes, and coordinated implementation follow-ups with pipeline teams.",
    skills: [
      "TPM",
      "Project Coordination",
      "Improvement Management",
      "Presentation Skills",
    ],
    image: "",
  },
  act7: {
    title: "Monthly Improvement Review & Facilitator Coordination",
    purpose:
      "Drive bottom-up improvement initiatives through regular facilitator coordination, project monitoring, and strategic improvement reviews.",
    role: "As Improvement Review Coordinator, coordinated departmental facilitators (Supervisors) to monitor bottom-up initiatives and provide feedback on the Pandawa program. Reviewed improvement project progress, cost-saving achievements, and Focused Improvement initiatives. Facilitated discussions on improvement strategies and competition opportunities at manufacturing, corporate, national, and international levels.",
    skills: [
      "Facilitator Coordination",
      "Continuous Improvement",
      "Project Monitoring",
      "Cost Saving Analysis",
      "Meeting Facilitation",
    ],
    image: "",
  },
  act6: {
    title: "Employee Engagement & Training Programs",
    purpose:
      "Support employee engagement and employee development initiatives through structured programs and training activities.",
    role: "Coordinated employee engagement events, supported training administration, communicated program information to participants, and assisted in ensuring smooth execution of activities.",
    skills: [
      "TPM",
      "Project Coordination",
      "Improvement Management",
      "Presentation Skills",
    ],
    image: "assets/images/activities/activity-6.jpg",
  },
  act8: {
    title: "Training & Professional Development",
    purpose:
      "Strengthen professional capabilities through structured learning programs in risk management and system dynamics.",
    role: "Completed the Risk Management Development Program (RMDP) through Kalbe Cendekia Learning Course (2026), covering Enterprise Risk Management for risk identification, assessment, and mitigation. Completed a four-month System Dynamics Intensive Training & Workshop as Team Lead, developing a Vensim-based plant operational simulation model and evaluating production capacity strategies involving product grammage adjustments and recruitment to assess impacts on fulfillment, overtime, and conversion cost.",
    skills: [
      "Enterprise Risk Management",
      "Risk Assessment",
      "System Dynamics",
      "Vensim",
      "Scenario Analysis",
      "Capacity Planning",
    ],
    image: "",
  },
};

// ==================== STATE ENGINE VARIABLES ====================
let pmIndex = 0;
let pmSize = 0;

function openEngineModal(type, targetId) {
  if (type === "project") {
    const data = projectDatabase[targetId];
    if (!data) return;

    document.getElementById("pm-title").innerText = data.title;
    document.getElementById("pm-outcomes").innerText = data.outcomes;

    const contributionsUl = document.getElementById("pm-contributions");
    contributionsUl.innerHTML = "";
    data.contributions.forEach((item) => {
      const li = document.createElement("li");
      li.innerText = item;
      contributionsUl.appendChild(li);
    });

    const toolsDiv = document.getElementById("pm-tools");
    toolsDiv.innerHTML = "";
    data.tools.forEach((tool) => {
      const span = document.createElement("span");
      span.className = "tool-badge";
      span.innerText = tool;
      toolsDiv.appendChild(span);
    });

    const track = document.getElementById("pm-wrapper");
    track.innerHTML = "";
    data.images.forEach((src) => {
      const slide = document.createElement("div");
      slide.className = "carousel-slide-item";
      slide.style.backgroundImage = `url('${src}')`;
      track.appendChild(slide);
    });

    pmIndex = 0;
    pmSize = data.images.length;
    shiftActiveCarousel(0);

    document.getElementById("project-modal").style.display = "flex";
  } else if (type === "activity") {
    const data = activityDatabase[targetId];
    if (!data) return;

    document.getElementById("am-title").innerText = data.title;
    document.getElementById("am-purpose").innerText = data.purpose;
    document.getElementById("am-role").innerText = data.role;
    document.getElementById("am-hero-img").style.backgroundImage = data.image
      ? `url('${data.image}')`
      : "none";

    const skillsDiv = document.getElementById("am-skills");
    skillsDiv.innerHTML = "";
    data.skills.forEach((skill) => {
      const span = document.createElement("span");
      span.className = "tool-badge";
      span.innerText = skill;
      skillsDiv.appendChild(span);
    });

    document.getElementById("activity-modal").style.display = "flex";
  }
}

function shiftActiveCarousel(step) {
  pmIndex += step;
  if (pmIndex >= pmSize) pmIndex = 0;
  if (pmIndex < 0) pmIndex = pmSize - 1;
  document.getElementById("pm-wrapper").style.transform =
    `translateX(-${pmIndex * 100}%)`;
}

function closeEngineModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// ==================== SYSTEM INTERACTION ENGINE GENERATION ====================
document.addEventListener("DOMContentLoaded", () => {
  // Dynamic rendering of editable contact info variables across placeholders
  const socialsTarget = document.getElementById("hero-socials-target");
  socialsTarget.innerHTML = `
        <a href="${ROUTING_VARIABLES.links.linkedin}" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
        <a href="${ROUTING_VARIABLES.links.instagram}" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="${ROUTING_VARIABLES.links.email}" title="Email"><i class="fas fa-envelope"></i></a>
        <a href="${ROUTING_VARIABLES.links.whatsapp}" target="_blank" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
    `;

  const contactGridTarget = document.getElementById("contact-links-target");
  contactGridTarget.innerHTML = `
        <a href="${ROUTING_VARIABLES.links.linkedin}" target="_blank" class="contact-action-item"><i class="fab fa-linkedin"></i> LinkedIn</a>
        <a href="${ROUTING_VARIABLES.links.instagram}" target="_blank" class="contact-action-item"><i class="fab fa-instagram"></i> Instagram</a>
        <a href="${ROUTING_VARIABLES.links.email}" class="contact-action-item"><i class="fas fa-envelope"></i> Email</a>
        <a href="${ROUTING_VARIABLES.links.whatsapp}" target="_blank" class="contact-action-item"><i class="fab fa-whatsapp"></i> WhatsApp</a>
    `;

  // Dynamic injection of the local certificate resources gallery
  const certsGrid = document.getElementById("certs-dynamic-grid");
  ROUTING_VARIABLES.certificates.forEach((c) => {
    const card = document.createElement("div");
    card.className = "gallery-card glass-card";
    card.innerHTML = `
            <div class="gallery-img" style="background-image: url('${c.path}');"></div>
            <div class="gallery-info">
                <span class="achievement-year">${c.year}</span>
                <h3>${c.title}</h3>
                <button class="btn details-link">View Certificate</button>
            </div>
        `;
    card.querySelector(".details-link").addEventListener("click", () => {
      document.getElementById("vcm-title").innerText = c.title;
      document.getElementById("vcm-img").src = c.path;
      document.getElementById("view-cert-modal").style.display = "flex";
    });
    certsGrid.appendChild(card);
  });

  // Dynamic injection of the achievement parameters gallery
  const achsGrid = document.getElementById("achievements-dynamic-grid");
  ROUTING_VARIABLES.achievements.forEach((a) => {
    const card = document.createElement("div");
    card.className = "gallery-card glass-card";
    card.innerHTML = `
            <div class="gallery-img" style="background-image: url('${a.path}');"></div>
            <div class="gallery-info">
                <span class="achievement-year">${a.group}</span>
                <h3>${a.title}</h3>
                <button class="btn details-link">View Details <i class="fas fa-arrow-right"></i></button>
            </div>
        `;
    card.querySelector(".details-link").addEventListener("click", () => {
      document.getElementById("vam-title").innerText = a.title;
      document.getElementById("vam-desc").innerText = a.text;
      document.getElementById("vam-img").src = a.path; // Upgraded to match Certificate Modal behavior
      document.getElementById("view-achievement-modal").style.display = "flex";
    });
    achsGrid.appendChild(card);
  });

  // Dismiss active modals when clicking on background layout areas
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-root")) {
      e.target.style.display = "none";
    }
  });

  // Mobile Navigation Toggle Controller
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-active");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("mobile-active");
    });
  });

  // Intersection Observer Engine for scroll-reveal animations
  const staggerSelector = [
    ".project-card",
    ".activity-card",
    ".timeline-block",
    ".skill-pill-card",
    ".tool-premium-card",
    ".gallery-card",
    ".about-info-cards > .glass-card",
  ].join(", ");

  const observerOptions = {
    threshold: 0.08,
    rootMargin: "0px 0px -48px 0px",
  };
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const children = el.querySelectorAll(staggerSelector);

      children.forEach((child, i) => {
        child.classList.add("reveal-child");
        child.style.setProperty("--reveal-delay", `${0.08 + i * 0.07}s`);
      });

      el.classList.add("appear");

      requestAnimationFrame(() => {
        children.forEach((child) => child.classList.add("appear"));
      });

      observer.unobserve(el);
    });
  }, observerOptions);

  document
    .querySelectorAll(".fade-in")
    .forEach((el) => revealObserver.observe(el));

  // Live Scrolling Active Navigation Menu Highlighting Engine
  const targetSections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let currentId = "";
    const scrollPositionOffset = window.scrollY + 170;

    targetSections.forEach((sec) => {
      if (
        scrollPositionOffset >= sec.offsetTop &&
        scrollPositionOffset < sec.offsetTop + sec.offsetHeight
      ) {
        currentId = sec.getAttribute("id");
      }
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });
});
