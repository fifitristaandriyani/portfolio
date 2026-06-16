// ==================== CONFIGURABLE CORE VARIABLES ====================
const ROUTING_VARIABLES = {
    links: {
        linkedin: "https://linkedin.com/in/fifi-trista-andriyani",
        instagram: "https://instagram.com/fifitrista",
        email: "mailto:fifi.trista@example.com",
        whatsapp: "https://wa.me/6281234567890"
    },
    certificates: [
        { title: "Enterprise Risk Management Optimization", year: "2025", path: "assets/images/certificates/cert-1.jpg" },
        { title: "Total Productive Maintenance Operations Specialist", year: "2025", path: "assets/images/certificates/cert-2.jpg" },
        { title: "Advanced Looker Studio Data Engineering", year: "2024", path: "assets/images/certificates/cert-3.jpg" },
        { title: "Lean Manufacturing Six Sigma Foundations", year: "2024", path: "assets/images/certificates/cert-4.jpg" },
        { title: "Statistical Process Control & Minitab Modeling", year: "2024", path: "assets/images/certificates/cert-5.jpg" },
        { title: "Product Design Development Practicum Certification", year: "2023", path: "assets/images/certificates/cert-6.jpg" },
        { title: "Industrial Plant Simulation Systems", year: "2023", path: "assets/images/certificates/cert-7.jpg" },
        { title: "TOEFL ITP High-Proficiency Attainment Certificate", year: "2023", path: "assets/images/certificates/cert-8.jpg" }
    ],
    achievements: [
        { id: "ach1", title: "TOEFL ITP 573", group: "Official Score", text: "Verified professional English communication proficiency with an official authenticated institutional TOEFL ITP score of 573.", path: "assets/images/certificates/cert-8.jpg" },
        { id: "ach2", title: "Top 10 Product Design Competition TI USU 2024", group: "National Placement", text: "Ranked within the elite Top 10 national finalists during the flagship Product Design Competition hosted by Universitas Sumatera Utara (TI USU) in 2024.", path: "assets/images/certificates/cert-6.jpg" },
        { id: "ach3", title: "Top 4 Industrial Simulation Competition 2023", group: "Operations Elite", text: "Placed within the Top 4 elite ranking tier nationwide in the high-stakes Industrial Simulation Competition and Event 2023, configuring processing bottlenecks under strict variables.", path: "assets/images/certificates/cert-7.jpg" },
        { id: "ach4", title: "2nd Place Product Design Expo INDEX UGM 2022", group: "Exhibition Winner", text: "Awarded 2nd Place out of large competitive development teams during the Product Design Project and Expo INDEX UGM in 2022.", path: "assets/images/certificates/cert-1.jpg" }
    ]
};

const projectDatabase = {
    'proj1': {
        title: "KPI Performance & Cost Management System",
        context: "The plant manufacturing space required a standardized approach to manage operational indicators and evaluate cost drivers directly against financial performance logs.",
        role: "Performance Management and Analysis Sr. Staff at Kalbe Nutritionals. I assumed full ownership for the dashboard modeling and tracking logic.",
        contributions: [
            "Developed and maintained integrated plant performance dashboards using Looker Studio and Microsoft Excel.",
            "Built centralized project tracking dashboards to monitor continuous improvement initiatives and log weekly action plan progress.",
            "Conducted comprehensive performance gap analysis to map specific plant operational losses, recurring process challenges, and financial cost drivers.",
            "Maintained plant cost databases and performed data correlation checks between ongoing manufacturing performance and overall site cost outputs.",
            "Developed advanced KPI simulation models utilizing Causal Loop Diagrams (CLD) to track metrics interactions."
        ],
        outcomes: "Centralized disparate site operational data tracking sheets, reducing metric compilation delays and providing management with a single point of reference for live production efficiency metrics.",
        tools: ["Performance Management", "Cost Analysis", "Gap Analysis", "Looker Studio", "Microsoft Excel", "KPI Simulation"],
        images: ["assets/images/projects/project-1-1.jpg", "assets/images/projects/project-1-2.jpg"]
    },
    'proj2': {
        title: "AI-Enabled Performance Dashboard Development",
        context: "The organization launched an initiative to deploy an advanced performance dashboard driven by automation to simplify traditional manufacturing reporting models.",
        role: "Operational Support Staff. I acted as the primary analytical bridge coordinating between plant operations teams and development engineers.",
        contributions: [
            "Prepared, cleaned, and structured production operational datasets according to master dashboard data engineering requirements.",
            "Supported the formal development cycles for Business Requirement Documents (BRD) and Functional Specification Documents (FSD).",
            "Validated incoming plant data quality, assessed logging consistency, and calculated final reporting model accuracy parameters.",
            "Collaborated closely with Data Analysts and AI Developers during live dashboard prototyping and functional verification sprints.",
            "Supported end-user acceptance testing (UAT) and post-deployment dashboard refinement activities."
        ],
        outcomes: "Delivered highly accurate data definitions and specification parameters to the technical engineering team, preventing calculation errors prior to release.",
        tools: ["Business Analysis", "Data Validation", "Requirement Gathering", "Dashboard Development", "Cross-Functional Collaboration"],
        images: ["assets/images/projects/project-2-1.jpg", "assets/images/projects/project-2-2.jpg"]
    },
    'proj3': {
        title: "Smart Changeover & Autonomous Response System",
        context: "High manufacturing line downtime and extended tool changeover cycles created production constraints requiring a structured Total Productive Maintenance (TPM) strategy.",
        role: "Industrial Engineering Project Leader. I developed a comprehensive proposal targeting specific machine efficiency factors.",
        contributions: [
            "Developed practical improvement concepts under the Focused Improvement (FI) framework pillar to support site continuous improvement practices.",
            "Utilized empirical manufacturing process data records to isolate line losses, address bottlenecks, and discover processing opportunities.",
            "Supported Autonomous Maintenance (AM) setups by collecting operational floor metrics and identifying hardware anomalies.",
            "Presented complete improvement proposals, action plans, and execution steps directly during scheduled plant TPM review activities.",
            "Integrated technical, operational, and staff coordination elements into a single deployment framework."
        ],
        outcomes: "Provided plant operations with an actionable execution blueprint that established standard changeover sequences, helping reduce line switch times.",
        tools: ["TPM", "Continuous Improvement", "Root Cause Analysis", "Problem Solving", "Project Management"],
        images: ["assets/images/projects/project-3-1.jpg", "assets/images/projects/project-3-2.jpg"]
    },
    'proj4': {
        title: "Enterprise Risk Management (ERM)",
        context: "Plant leadership required a systematic method to map business vulnerabilities, identify regulatory compliance targets, and structure business continuity blueprints.",
        role: "Risk Management and Internal Audit Support Staff. I led data gathering and risk alignment operations across factory divisions.",
        contributions: [
            "Completed formalized plant-level corporate Enterprise Risk Management training blueprints.",
            "Facilitated risk identification workshops and structured hazard assessment operations across active plant divisions.",
            "Supported technical risk documentation steps and coordinated departmental preventive action mapping.",
            "Participated directly in formal internal risk audit operations and structured compliance reviews.",
            "Monitored the implementation of risk treatment plans to ensure adherence to corporate safety standards."
        ],
        outcomes: "Centralized separate process liabilities into an actionable site risk registry, increasing audit preparedness and mitigating core operational safety risks.",
        tools: ["Risk Management", "Internal Audit", "Risk Assessment", "Compliance Management"],
        images: ["assets/images/projects/project-4-1.jpg", "assets/images/projects/project-4-2.jpg"]
    },
    'proj5': {
        title: "Pandawa Continuous Improvement Challenge",
        context: "The facility required an engaging framework to maximize operator suggestions, optimize documentation practices, and expand continuous improvement efforts.",
        role: "Program Creator and Operations Manager. I designed the tracking tables, engagement metrics, and evaluation rules.",
        contributions: [
            "Developed the master program framework, scoring rules, and performance assessment criteria for individual and group contributions.",
            "Created data-driven KPI and System Flow Diagram (SFD) simulations to help plant floor teams understand performance targets.",
            "Designed and managed monthly continuous improvement trivia campaigns via corporate channels to build workforce knowledge.",
            "Monitored ongoing performance metrics and maintained the master annual participant ranking systems used for evaluations.",
            "Managed employee engagement initiatives using the program's official WhatsApp Channel to increase active suggestions.",
            "Coordinated the final execution logistics for the annual corporate recognition and awarding ceremonies."
        ],
        outcomes: "Drove engagement across plant lines, boosting bottom-up continuous improvement suggestions and surfacing hidden material waste leaks.",
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
        image: "assets/images/activities/activity-1.jpg"
    },
    'act2': {
        title: "Monthly Operating Review (MOR)",
        purpose: "Review monthly KPI achievement, operational performance, and improvement progress across departments.",
        role: "Prepared performance reports, served as moderator and presenter for the division, and monitored follow-up actions from management discussions.",
        skills: ["Performance Analysis", "Executive Reporting", "Presentation Skills", "KPI Management"],
        image: "assets/images/activities/activity-2.jpg"
    },
    'act3': {
        title: "Yearly Operating Review (YOR)",
        purpose: "Evaluate annual business performance and align improvement priorities and operational plans for the following year.",
        role: "Compiled annual performance summaries, facilitated review discussions, documented key decisions, and supported future planning alignment.",
        skills: ["Strategic Planning", "Business Review", "Reporting", "Stakeholder Management"],
        image: "assets/images/activities/activity-3.jpg"
    },
    'act4': {
        title: "Gemba Observation & Improvement Program",
        purpose: "Capture bottom-up insights from shopfloor operations to identify recurring issues and improvement opportunities.",
        role: "Conducted operator interviews, gathered operational observations, analyzed findings, and proposed improvement interventions based on identified patterns.",
        skills: ["Root Cause Analysis", "Operational Analysis", "Communication", "Continuous Improvement"],
        image: "assets/images/activities/activity-4.jpg"
    },
    'act5': {
        title: "TPM Quick Win Activities",
        purpose: "Drive TPM implementation through practical improvement initiatives and measurable operational improvements.",
        role: "Monitored project progress, presented improvement outcomes, and coordinated implementation follow-ups with pipeline teams.",
        skills: ["TPM", "Project Coordination", "Improvement Management", "Presentation Skills"],
        image: "assets/images/activities/activity-5.jpg"
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
        document.getElementById('pm-role').innerText = data.role;
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
