// Localized Datastore holding real portfolio structured copy metrics
const projectData = {
    'modal-kpi': {
        title: "KPI Performance & Cost Management System",
        description: "Developed and maintained an integrated performance monitoring system to track plant KPI achievement, operational losses, and cost performance.",
        contributions: [
            "Developed KPI dashboards using Looker Studio and Microsoft Excel",
            "Built project tracking dashboards to monitor improvement initiatives",
            "Conducted performance gap analysis and operational loss analysis",
            "Maintained plant cost databases",
            "Developed KPI simulation models using Causal Loop Diagrams (CLD)"
        ],
        skills: ["Performance Management", "Cost Analysis", "Gap Analysis", "Looker Studio", "Microsoft Excel", "KPI Simulation"],
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", // REPLACE: Project 1 Image 1
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"  // REPLACE: Project 1 Image 2
        ]
    },
    'modal-ai': {
        title: "AI-Enabled Performance Dashboard Development",
        description: "Supported the development of an AI-enabled performance dashboard by preparing business requirements, validating operational data, and collaborating with developers.",
        contributions: [
            "Prepared datasets according to dashboard requirements",
            "Supported BRD and FSD development",
            "Validated data quality and reporting accuracy",
            "Collaborated with Data Analysts and AI Developers"
        ],
        skills: ["Business Analysis", "Data Validation", "Requirement Gathering", "Dashboard Development", "Cross-Functional Collaboration"],
        images: [
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800", // REPLACE: Project 2 Image 1
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"  // REPLACE: Project 2 Image 2
        ]
    },
    'modal-tpm': {
        title: "Integrated Smart Changeover & Autonomous Response System for Agile Manufacturing",
        description: "Developed a TPM-based improvement proposal integrating Focused Improvement and Autonomous Maintenance initiatives.",
        contributions: [
            "Developed improvement concepts under Focused Improvement pillar",
            "Identified losses and bottlenecks using manufacturing data",
            "Supported Autonomous Maintenance initiatives",
            "Presented improvement proposals during TPM review activities"
        ],
        skills: ["TPM", "Continuous Improvement", "Root Cause Analysis", "Problem Solving", "Project Management"],
        images: [
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", // REPLACE: Project 3 Image 1
            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800"  // REPLACE: Project 3 Image 2
        ]
    },
    'modal-erm': {
        title: "Enterprise Risk Management (ERM)",
        description: "Supported plant-level ERM implementation through risk identification, assessment activities, training participation, and audit support.",
        contributions: [
            "Completed ERM training",
            "Facilitated risk identification activities",
            "Supported mitigation planning",
            "Participated in internal audit activities"
        ],
        skills: ["Risk Management", "Internal Audit", "Risk Assessment", "Compliance Management"],
        images: [
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800", // REPLACE: Project 4 Image 1
            "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=800"  // REPLACE: Project 4 Image 2
        ]
    },
    'modal-pandawa': {
        title: "Pandawa Continuous Improvement Challenge",
        description: "Designed and managed a plant-wide Continuous Improvement engagement program aimed at strengthening improvement culture.",
        contributions: [
            "Developed scoring systems and assessment criteria",
            "Created KPI and SFD simulations",
            "Managed monthly trivia programs",
            "Maintained annual participant ranking systems",
            "Managed WhatsApp Channel engagement",
            "Coordinated annual awarding programs"
        ],
        skills: ["Continuous Improvement", "Program Development", "Employee Engagement", "Performance Measurement", "Internal Communication", "Change Management"],
        images: [
            "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=800", // REPLACE: Project 5 Image 1
            "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800"  // REPLACE: Project 5 Image 2
        ]
    }
};

// Carousel Management State variables
let currentSlideIndex = 0;
const modal = document.getElementById('project-modal');
const carouselWrapper = document.getElementById('modal-carousel-wrapper');

function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-description').innerText = data.description;

    // Populate Contributions list
    const contributionsContainer = document.getElementById('modal-contributions');
    contributionsContainer.innerHTML = '';
    data.contributions.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        contributionsContainer.appendChild(li);
    });

    // Populate Skills pills
    const skillsContainer = document.getElementById('modal-skills');
    skillsContainer.innerHTML = '';
    data.skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'skill-badge';
        span.innerText = skill;
        skillsContainer.appendChild(span);
    });

    // Build the dynamic image carousel list items
    carouselWrapper.innerHTML = '';
    data.images.forEach(imgUrl => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.style.backgroundImage = `url('${imgUrl}')`;
        carouselWrapper.appendChild(slide);
    });

    currentSlideIndex = 0;
    updateCarouselPosition();
    modal.style.display = 'flex';
}

function updateCarouselPosition() {
    carouselWrapper.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

// Attach UI execution controls on window load execution bounds
document.addEventListener('DOMContentLoaded', () => {
    
    // UI Modal closing action triggers
    document.querySelector('.close-modal').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });

    // Control structural actions for carousel buttons
    document.querySelector('.prev-btn').addEventListener('click', () => {
        const slidesCount = carousel