// ==================== CONFIGURABLE CORE VARIABLES ====================
const ROUTING_VARIABLES = {
    links: {
        linkedin: "https://linkedin.com/in/fifi-trista-andriyani",
        instagram: "https://instagram.com/fifi_trista",
        email: "mailto:fifitristaa04@gmail.com",
        whatsapp: "https://wa.me/6287736397291"
    },
    certificates: [
        { title: "OD and TA Intern Completion", year: "2025", path: "assets/images/certificates/cert-1.jpg" },
        { title: "Project Control Intern Completion", year: "2025", path: "assets/images/certificates/cert-2.jpg" },
        { title: "Laboratory Assistant Product Design and Development", year: "2024", path: "assets/images/certificates/cert-3.jpg" },
        { title: "Assistant Lecturer Product Design and Development", year: "2024", path: "assets/images/certificates/cert-4.jpg" },
        { title: "Assistant Lecturer Engineering Material", year: "2023", path: "assets/images/certificates/cert-5.jpg" },
        { title: "Data Analytic in Power BI Course Completion", year: "2025", path: "assets/images/certificates/cert-6.jpg" },
        { title: "Project Management Course Completion", year: "2025", path: "assets/images/certificates/cert-7.jpg" },
        { title: "Digital Marketing Course Completion", year: "2024", path: "assets/images/certificates/cert-8.jpg" }
    ],
    achievements: [
        { id: "ach1", title: "TOEFL ITP 573", group: "Official Score", text: "English communication proficiency with an official authenticated institutional TOEFL ITP score of 573.", path: "assets/images/certificates/cert-9.jpg" },
        { id: "ach2", title: "Top 10 Product Design Competition TI USU 2024", group: "National Placement", text: "Achieved Top 10 finalist placement in the Product Design Competition held by Universitas Sumatera Utara (TI USU) in 2024.", path: "assets/images/certificates/cert-10.jpg" },
        { id: "ach3", title: "Top 4 Industrial Simulation Competition 2023", group: "National Placement", text: "Achieved Top 4 placement in the Industrial Simulation Competition 2023 by demonstrating analytical and problem-solving skills in manufacturing system simulations.", path: "assets/images/certificates/cert-11.jpg" },
        { id: "ach4", title: "2nd Place Product Design Expo INDEX UGM 2022", group: "Project and Exhibition Winner", text: "Awarded 2nd Place in the Product Design Project and Expo INDEX UGM 2022 for developing an innovative product design solution.", path: "assets/images/certificates/cert-12.jpg" }
    ]
};

const projectDatabase = {
    'proj1': {
        title: "KPI Performance & Cost Management System",
        context: "The plant manufacturing space required a standardized approach to manage operational indicators and evaluate cost drivers directly against financial performance logs.",
        contributions: [
            "Developed and maintained integrated plant performance dashboards using Looker Studio and Microsoft Excel.",
            "Built project tracking dashboards to monitor improvement initiatives and action plan progress.",
            "Conducted performance gap analysis to identify operational losses, recurring issues, and cost drivers.",
            "Developed and Maintained plant cost databases and analyzed relationships between operational performance and cost outcomes.",
            "Developed Causal Loop Diagram (CLD) simulations to understand KPI interactions and support improvement planning."
        ],
        outcomes: "Cost Performance Dashboard (Looker Studio), KPI Monitoring Dashboard, Project Tracking Dashboard, KPI Simulation Model (CLD)",
        tools: ["Performance Management", "Cost Analysis", "Gap Analysis", "Looker Studio", "Microsoft Excel", "KPI Simulation"],
        images: ["assets/images/projects/project-1-1.jpg", "assets/images/projects/project-1-2.jpg"]
    },
    'proj2': {
        title: "AI-Enabled Performance Dashboard Development",
        context: "The organization launched an initiative to deploy an advanced performance dashboard driven by automation to simplify traditional manufacturing reporting models.",
        contributions: [
            " Prepared and structured datasets according to dashboard requirements.",
            "Supported the formal development cycles for Business Requirement Documents (BRD) and Functional Specification Documents (FSD).",
            "Validated data quality, consistency, and reporting accuracy.",
            "Collaborated with Data Analysts and AI Developers during dashboard development and testing.",
            "Supported user acceptance and dashboard refinement activities."
        ],
        outcomes: "Delivered Business Requirement Document (BRD), Functional Specification Document (FSD), Validated Operational Dataset, Dashboard Testing & Validation Reports, User Acceptance Testing (UAT).",
        tools: ["Business Analysis", "Data Validation", "Dashboard Development", "Cross-Functional Collaboration"],
        images: ["assets/images/projects/project-2-1.jpg", "assets/images/projects/project-2-2.jpg"]
    },
    'proj3': {
        title: "Smart Changeover & Autonomous Response System",
        context: "High manufacturing line downtime and extended tool changeover cycles created production constraints requiring a structured Total Productive Maintenance (TPM) strategy.",
        contributions: [
            "Developed improvement concepts under the Focused Improvement (FI) pillar to strengthen problem-solving and continuous improvement practices.",
            "Utilized manufacturing process data to identify losses, bottlenecks, and improvement opportunities.",
            "Supported Autonomous Maintenance (AM) initiatives through operational data collection and issue identification.",
            "Presented improvement proposals and implementation strategies during TPM review activities.",
            "Integrated technical, operational, and people management aspects into a single improvement framework."
        ],
        outcomes: "Loss & Bottleneck Identification Framework, Implementation Roadmap & Action Plan, TPM Project Presentation Materials",
        tools: ["TPM", "Continuous Improvement", "Root Cause Analysis", "Problem Solving", "Project Management"],
        images: ["assets/images/projects/project-3-1.jpg", "assets/images/projects/project-3-2.jpg"]
    },
    'proj4': {
        title: "Enterprise Risk Management (ERM)",
        context: "Supported plant-level Enterprise Risk Management implementation through risk identification, assessment activities, training participation, and audit support.",
        contributions: [
            "Completed formalized plant-level corporate Enterprise Risk Management training blueprints.",
            "Supported technical risk documentation steps and coordinated departmental preventive action mapping.",
            "Participated directly in formal internal risk audit operations and structured compliance reviews.",
            "Monitored the implementation of risk treatment plans to ensure adherence to corporate safety standards."
        ],
        outcomes: "Risk Register Documentation, Risk Assessment Matrix, Risk Mitigation Action Plans, Internal Audit Support Documentation, Risk Monitoring & Follow-up Reports.",
        tools: ["Risk Management", "Internal Audit", "Risk Assessment", "Compliance Management"],
        images: ["assets/images/projects/project-4-1.jpg", "assets/images/projects/project-4-2.jpg"]
    },
    'proj5': {
        title: "Pandawa Continuous Improvement Challenge",
        context: "Designed and managed a plant-wide Continuous Improvement engagement program aimed at strengthening improvement culture through performance-based challenges, KPI simulations, knowledge-sharing activities, and structured recognition systems.",
        contributions: [
            "Developed the master program framework, scoring rules, and performance assessment criteria for individual and group contributions.",
            "Created data-driven KPI and System Flow Diagram (SFD) simulations to help plant floor teams understand performance targets.",
            "Designed and managed monthly continuous improvement trivia campaigns via corporate channels to build workforce knowledge.",
            "Monitored ongoing performance metrics and maintained the master annual participant ranking systems used for evaluations.",
            "Managed employee engagement initiatives using the program's official WhatsApp Channel to increase active suggestions.",
            "Coordinated the final execution logistics for the annual corporate recognition and awarding ceremonies."
        ],
        outcomes: "CI Scoring System, Assessment Criteria Framework, KPI & SFD Simulation Materials, Monthly Trivia Program, Annual Awarding System, Employee Engagement Dashboard.",
        tools: ["Continuous Improvement", "Program Development", "Employee Engagement", "Performance Measurement", "Internal Communication", "Change Management"],
        images: ["assets/images/projects/project-5-1.jpg", "assets/images/projects/project-5-2.jpg"]
    }
};

const activityDatabase = {
    'act1': {
        title: "Daily Management System (DMS)",
        purpose: "Facilitate routine performance monitoring and issue escalation to ensure timely corrective actions.",
        role: "Acted as moderator and coordinator during DMS sessions, facilitated discussions, documented key issues, and followed up action plans with related departments.",
        skills: ["Facilitation", "Problem Solving", "Issue Management", "Stakeholder Coordination"],
        image: "assets/images/activities/activity-1.jpeg"
    },
    'act2': {
        title: "Monthly Operating Review (MOR)",
        purpose: "Review monthly KPI achievement, operational performance, and improvement progress across departments.",
        role: "Prepared performance reports, served as moderator and presenter for the division, and monitored follow-up actions from management discussions.",
        skills: ["Performance Analysis", "Executive Reporting", "Presentation Skills", "KPI Management"],
        image: "assets/images/activities/activity-2.jpeg"
    },
    'act3': {
        title: "Yearly Operating Review (YOR)",
        purpose: "Evaluate annual business performance and align improvement priorities and operational plans for the following year.",
        role: "Compiled annual performance summaries, facilitated review discussions, documented key decisions, and supported future planning alignment.",
        skills: ["Strategic Planning", "Business Review", "Reporting", "Stakeholder Management"],
        image: "assets/images/activities/activity-3.jpeg"
    },
    'act4': {
        title: "Gemba Observation & Improvement Program",
        purpose: "Capture bottom-up insights from shopfloor operations to identify recurring issues and improvement opportunities.",
        role: "Conducted operator interviews, gathered operational observations, analyzed findings, and proposed improvement interventions based on identified patterns.",
        skills: ["Root Cause Analysis", "Operational Analysis", "Communication", "Continuous Improvement"],
        image: "assets/images/activities/activity-4.jpeg"
    },
    'act5': {
        title: "TPM Quick Win Activities",
        purpose: "Drive TPM implementation through practical improvement initiatives and measurable operational improvements.",
        role: "Monitored project progress, presented improvement outcomes, and coordinated implementation follow-ups with pipeline teams.",
        skills: ["TPM", "Project Coordination", "Improvement Management", "Presentation Skills"],
        image: "assets/images/activities/activity-5.jpeg"
    },
    'act6': {
        title: "Employee Engagement & Training Programs",
        purpose: "Support employee engagement and employee development initiatives through structured programs and training activities.",
        role: "Coordinated employee engagement events, supported training administration, communicated program information to participants, and assisted in ensuring smooth execution of activities.",
        skills: ["TPM", "Project Coordination", "Improvement Management", "Presentation Skills"],
        image: "assets/images/activities/activity-6.jpg"
    }
};

// ==================== STATE ENGINE VARIABLES ====================
let pmIndex = 0;
let pmSize = 0;

function openEngineModal(type, targetId) {
    if (type === 'project') {
        const data = projectDatabase[targetId];
        if (!data) return;

        document.getElementById('pm-title').innerText = data.title;
        document.getElementById('pm-context').innerText = data.context;
        document.getElementById('pm-outcomes').innerText = data.outcomes;

        const contributionsUl = document.getElementById('pm-contributions');
        contributionsUl.innerHTML = '';
        data.contributions.forEach(item => {
            const li = document.createElement('li');
            li.innerText = item;
            contributionsUl.appendChild(li);
        });

        const toolsDiv = document.getElementById('pm-tools');
        toolsDiv.innerHTML = '';
        data.tools.forEach(tool => {
            const span = document.createElement('span');
            span.className = 'tool-badge';
            span.innerText = tool;
            toolsDiv.appendChild(span);
        });

        const track = document.getElementById('pm-wrapper');
        track.innerHTML = '';
        data.images.forEach(src => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide-item';
            slide.style.backgroundImage = `url('${src}')`;
            track.appendChild(slide);
        });

        pmIndex = 0;
        pmSize = data.images.length;
        shiftActiveCarousel(0);

        document.getElementById('project-modal').style.display = 'flex';
    } 
    else if (type === 'activity') {
        const data = activityDatabase[targetId];
        if (!data) return;

        document.getElementById('am-title').innerText = data.title;
        document.getElementById('am-purpose').innerText = data.purpose;
        document.getElementById('am-role').innerText = data.role;
        document.getElementById('am-hero-img').style.backgroundImage = `url('${data.image}')`;

        const skillsDiv = document.getElementById('am-skills');
        skillsDiv.innerHTML = '';
        data.skills.forEach(skill => {
            const span = document.createElement('span');
            span.className = 'tool-badge';
            span.innerText = skill;
            skillsDiv.appendChild(span);
        });

        document.getElementById('activity-modal').style.display = 'flex';
    }
}

function shiftActiveCarousel(step) {
    pmIndex += step;
    if (pmIndex >= pmSize) pmIndex = 0;
    if (pmIndex < 0) pmIndex = pmSize - 1;
    document.getElementById('pm-wrapper').style.transform = `translateX(-${pmIndex * 100}%)`;
}

function closeEngineModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// ==================== SYSTEM INTERACTION ENGINE GENERATION ====================
document.addEventListener('DOMContentLoaded', () => {

    // Dynamic rendering of editable contact info variables across placeholders
    const socialsTarget = document.getElementById('hero-socials-target');
    socialsTarget.innerHTML = `
        <a href="${ROUTING_VARIABLES.links.linkedin}" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
        <a href="${ROUTING_VARIABLES.links.instagram}" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="${ROUTING_VARIABLES.links.email}" title="Email"><i class="fas fa-envelope"></i></a>
        <a href="${ROUTING_VARIABLES.links.whatsapp}" target="_blank" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
    `;

    const contactGridTarget = document.getElementById('contact-links-target');
    contactGridTarget.innerHTML = `
        <a href="${ROUTING_VARIABLES.links.linkedin}" target="_blank" class="contact-action-item"><i class="fab fa-linkedin"></i> LinkedIn</a>
        <a href="${ROUTING_VARIABLES.links.instagram}" target="_blank" class="contact-action-item"><i class="fab fa-instagram"></i> Instagram</a>
        <a href="${ROUTING_VARIABLES.links.email}" class="contact-action-item"><i class="fas fa-envelope"></i> Email</a>
        <a href="${ROUTING_VARIABLES.links.whatsapp}" target="_blank" class="contact-action-item"><i class="fab fa-whatsapp"></i> WhatsApp</a>
    `;

    // Dynamic injection of the local certificate resources gallery
    const certsGrid = document.getElementById('certs-dynamic-grid');
    ROUTING_VARIABLES.certificates.forEach(c => {
        const card = document.createElement('div');
        card.className = 'gallery-card glass-card';
        card.innerHTML = `
            <div class="gallery-img" style="background-image: url('${c.path}');"></div>
            <div class="gallery-info">
                <span class="achievement-year">${c.year}</span>
                <h3>${c.title}</h3>
                <button class="btn details-link">View Certificate</button>
            </div>
        `;
        card.querySelector('.details-link').addEventListener('click', () => {
            document.getElementById('vcm-title').innerText = c.title;
            document.getElementById('vcm-img').src = c.path;
            document.getElementById('view-cert-modal').style.display = 'flex';
        });
        certsGrid.appendChild(card);
    });

    // Dynamic injection of the achievement parameters gallery 
    const achsGrid = document.getElementById('achievements-dynamic-grid');
    ROUTING_VARIABLES.achievements.forEach(a => {
        const card = document.createElement('div');
        card.className = 'gallery-card glass-card';
        card.innerHTML = `
            <div class="gallery-img" style="background-image: url('${a.path}');"></div>
            <div class="gallery-info">
                <span class="achievement-year">${a.group}</span>
                <h3>${a.title}</h3>
                <button class="btn details-link">View Details <i class="fas fa-arrow-right"></i></button>
            </div>
        `;
        card.querySelector('.details-link').addEventListener('click', () => {
            document.getElementById('vam-title').innerText = a.title;
            document.getElementById('vam-desc').innerText = a.text;
            document.getElementById('vam-img').src = a.path; // Upgraded to match Certificate Modal behavior
            document.getElementById('view-achievement-modal').style.display = 'flex';
        });
        achsGrid.appendChild(card);
    });

    // Dismiss active modals when clicking on background layout areas
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-root')) {
            e.target.style.display = 'none';
        }
    });

    // Mobile Navigation Toggle Controller
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('mobile-active');
        });
    });

    // Intersection Observer Engine for scroll-reveal animations
    const observerOptions = { threshold: 0.05, rootMargin: "0px 0px -20px 0px" };
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => revealObserver.observe(el));

    // Live Scrolling Active Navigation Menu Highlighting Engine
    const targetSections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let currentId = '';
        const scrollPositionOffset = window.scrollY + 170;

        targetSections.forEach(sec => {
            if (scrollPositionOffset >= sec.offsetTop && scrollPositionOffset < (sec.offsetTop + sec.offsetHeight)) {
                currentId = sec.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active');
            }
        });
    });
});
