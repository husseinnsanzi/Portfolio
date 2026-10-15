export const resumePath = "/Hussein_Nsanzimfura_CV.pdf";

export const email = "nsanzimfurahussein72@gmail.com";

export const navLinks = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#about", id: "about", label: "About Me" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#conferences", id: "conferences", label: "Conferences" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;

export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hussein-nsanzimfura-8b5653422",
  },
  { label: "X", href: "https://x.com/HusseinNsanz" },
  { label: "GitHub", href: "https://github.com/husseinnsanzi" },
  { label: "Email", href: `mailto:${email}` },
] as const;

export const heroIntro =
  "As a final-year Electrical Power Engineering student, I am passionate about developing practical solutions to real-world energy challenges. With a strong foundation in power systems and growing expertise in data analytics and machine learning, I apply computational tools to improve electricity distribution, grid reliability, renewable energy integration, and transformer health monitoring. Through engineering projects, research, and technical training, I aim to bridge electrical engineering with emerging technologies to advance sustainable energy access and address the evolving power-system challenges facing Rwanda and communities across Africa.";

export const aboutParagraphs = [
  "As a final-year Electrical Power Engineering student at the University of Rwanda, I am passionate about developing innovative, practical solutions to real-world energy challenges. With a strong foundation in power systems and growing expertise in data analytics, machine learning, and IoT technologies, I explore ways to improve electricity distribution, grid reliability, renewable energy integration, and access to sustainable electricity across Rwanda and Africa.",
  "My technical interests include power system analysis, solar photovoltaic systems, microgrids, smart grids, and transformer health monitoring. I use engineering tools and computational technologies, including MATLAB/Simulink, Python, Arduino, and data analytics platforms, to investigate engineering problems and develop potential solutions. Through projects focused on electricity theft detection, solar microgrids for rural health centres, and transformer health monitoring, I aim to connect engineering theory with practical applications.",
  "Committed to continuous learning, I actively pursue technical training, research opportunities, and engineering projects that strengthen my knowledge of modern power systems and emerging technologies. Through the CMU-Africa Bridge Program, training in Artificial Intelligence, Machine Learning, and Big Data Analytics through the AFRETEC Network, and ongoing training in IoT and AI Model Development at Kigali Smart Skills Hub, based at Rwanda Polytechnic Kigali College, I continue to explore how computational methods can support reliable, efficient, and sustainable energy systems.",
  "I believe that collaboration, continuous improvement, and engineering innovation are essential to addressing Africa's energy challenges. Through research, teamwork, and practical problem-solving, I aspire to contribute to solutions that improve electricity reliability, expand energy access, and support sustainable development. I welcome opportunities to connect with fellow engineers, researchers, and innovators who share a vision of building a more reliable and sustainable energy future.",
];

export const education = [
  {
    title: "University of Rwanda",
    detail: "Final-year Electrical Power Engineering",
  },
  {
    title: "CMU-Africa Bridge Program",
    detail: "Bridge Program learning, including Arduino Nano 33 BLE",
  },
  {
    title: "AFRETEC Network",
    detail:
      "Training in Artificial Intelligence, Machine Learning, and Big Data Analytics",
  },
  {
    title: "Kigali Smart Skills Hub",
    detail:
      "Ongoing training in IoT and AI Model Development, based at Rwanda Polytechnic Kigali College",
  },
];

export type SkillItem = { name: string; detail: string };

export const skillGroups: { id: string; label: string; items: SkillItem[] }[] =
  [
    {
      id: "power",
      label: "Power Engineering",
      items: [
        {
          name: "Power Systems",
          detail: "Electrical power engineering foundation",
        },
        {
          name: "Transmission & Distribution",
          detail: "Power network concepts and coursework",
        },
        {
          name: "Renewable Energy",
          detail: "Sustainable energy systems and integration",
        },
        {
          name: "Grid Reliability",
          detail: "Interest in distribution reliability and losses",
        },
        {
          name: "Energy Access",
          detail: "Energy-system challenges in Rwanda and Africa",
        },
        {
          name: "Power-System Analysis",
          detail: "Build evidence through coursework and projects",
        },
      ],
    },
    {
      id: "data",
      label: "Data & Programming",
      items: [
        {
          name: "Python",
          detail: "Programming for analysis and project prototypes",
        },
        {
          name: "Machine Learning",
          detail: "Applied to engineering and data problems",
        },
        {
          name: "Data Analytics",
          detail: "Exploring data to support decisions",
        },
        {
          name: "Power BI",
          detail: "Data visualization and reporting",
        },
        {
          name: "Big Data Analytics",
          detail: "Training and applied learning",
        },
        {
          name: "Model Evaluation",
          detail: "Use metrics appropriate to each project",
        },
      ],
    },
    {
      id: "tools",
      label: "Engineering Tools",
      items: [
        {
          name: "MATLAB / Simulink",
          detail: "Engineering computation and simulation",
        },
        {
          name: "AutoCAD Electrical",
          detail: "Electrical design and documentation",
        },
        {
          name: "PVsyst & PVGIS",
          detail: "Solar resource assessment and PV system design",
        },
      ],
    },
    {
      id: "iot",
      label: "IoT & Embedded",
      items: [
        {
          name: "Arduino",
          detail: "Embedded systems learning and prototyping",
        },
        {
          name: "Arduino Nano 33 BLE",
          detail: "Bridge Program learning experience",
        },
        {
          name: "IoT Systems",
          detail: "Connected-device concepts and applications",
        },
        {
          name: "Edge AI",
          detail: "Training exposure to deployment concepts",
        },
        {
          name: "Embedded Systems",
          detail: "Hardware/software interaction",
        },
      ],
    },
  ];

export const professionalSkills = [
  "Technical Research",
  "Problem-Solving",
  "Teamwork",
  "Engineering Communication",
  "Project Collaboration",
];

export type Project = {
  title: string;
  description: string[];
  href: string;
  action: string;
  tags: string[];
  note?: string;
};

export const publication: Project = {
  title:
    "Machine Learning-Based Detection of Non-Technical Losses for Improving Distribution Grid Reliability: A Case Study Using Smart Meter Data",
  description: [
    "This paper presents a machine learning approach for detecting non-technical losses (electricity theft and unmetered consumption) using smart-meter data. The study investigates how data-driven methods can support distribution grid reliability by identifying suspicious consumption patterns.",
  ],
  href: "https://www.researchgate.net/publication/408477843_Machine_Learning-Based_Detection_of_Non-Technical_Losses_for_Improving_Distribution_Grid_Reliability_A_Case_Study_Using_Smart_Meter_Data",
  action: "Read on ResearchGate",
  tags: ["Publication", "2026"],
};

export const projects: Project[] = [
  {
    title: "Electricity Theft Detection System",
    description: [
      "A machine learning system that detects suspicious electricity-consumption patterns from smart-meter data to support revenue protection and grid reliability, with a focus on Rwanda's power network.",
      "The project combines power systems knowledge with data analytics to identify irregular consumption behaviour that may indicate non-technical losses. By detecting hidden or unmetered loads early, the system also aims to help prevent suppressed overloads on distribution equipment that can contribute to blackouts.",
    ],
    href: "https://github.com/husseinnsanzi/Electricity-Theft-Detection-System",
    action: "View on GitHub",
    tags: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Streamlit"],
  },
  {
    title: "Solar-Battery Microgrid for Rural Health Center in Rwanda",
    description: [
      "Design and simulation of an off-grid solar PV and battery storage system for a typical rural health facility in Rwanda. The project includes detailed load assessment, system sizing, hourly energy-balance simulation, and a lifecycle cost comparison with diesel generation.",
      "The goal is to improve electricity reliability for critical healthcare services such as lighting, vaccine refrigeration, and medical equipment in areas with limited or unreliable grid access.",
    ],
    href: "https://github.com/husseinnsanzi/Solar-Microgrid-Rwanda",
    action: "View on GitHub",
    tags: ["Python", "NumPy", "Matplotlib", "PVGIS"],
  },
  {
    title: "Transformer Health Monitoring & Predictive Maintenance",
    description: [
      "A research project focused on investigating data-driven methods for monitoring the health of distribution transformers and supporting predictive maintenance, with particular attention to the Rwandan electricity distribution context.",
      "The work explores relevant transformer condition indicators and examines how data analytics and machine learning can help identify abnormal operating conditions early, with the aim of improving grid reliability and reducing unexpected failures.",
    ],
    href: "https://github.com/husseinnsanzi/transformer-health-monitoring",
    action: "View on GitHub",
    tags: ["Python", "Scikit-learn", "Data Analysis", "Streamlit"],
    note: "Ongoing research",
  },
];

export type Conference = {
  title: string;
  description: string;
  year?: string;
  image?: string;
  imageAlt?: string;
  imageClass?: string;
  mark?: string;
};

export const conferences: Conference[] = [
  {
    title: "Nuclear Energy Innovation Summit for Africa (NEISA 2026)",
    year: "2026",
    description:
      "A continental summit focused on advancing energy access, power system reliability, and advocacy for innovative nuclear solutions in Africa.",
    image: "/images/neisa.jpg",
    imageAlt:
      "Hussein Nsanzimfura at a nuclear energy event hosted by the Republic of Rwanda and the Rwanda Atomic Energy Board",
    imageClass: "object-[center_62%]",
  },
  {
    title: "Nuclear Energy Innovation Summit for Africa (NEISA 2025)",
    year: "2025",
    description:
      "An African platform promoting dialogue on energy access, grid reliability, and advocacy for sustainable nuclear energy development.",
    image: "/images/neisa-2025-summit.jpg",
    imageAlt:
      "Hussein Nsanzimfura with a colleague in front of a nuclear energy banner at the Nuclear Energy Innovation Summit for Africa",
    imageClass: "object-center",
  },
  {
    title: "Africa Energy Expo 2025",
    year: "2025",
    description:
      "A major energy event focused on expanding energy access, improving supply reliability, and advocating for investment in Africa's energy sector.",
    image: "/images/africa-energy-expo.jpg",
    imageAlt:
      "Hussein Nsanzimfura beside the Africa Energy Expo welcome sign for 25–27 November 2025",
    imageClass: "object-[center_30%]",
  },
  {
    title: "Africa Simulation Conference 2025",
    year: "2025",
    description:
      "A technical conference exploring simulation tools that support reliable energy systems and better planning for improved energy access.",
    image: "/images/africa-simulation-conference.jpg",
    imageAlt:
      "Hussein Nsanzimfura at the Africa Simulation Conference, holding an Advantage magazine",
    imageClass: "object-center",
  },
  {
    title: "Rwanda Youth Nuclear Summit",
    description:
      "A youth-centered summit advocating for greater awareness and participation of young people in advancing energy access and reliable power solutions in Rwanda.",
    image: "/images/youth-nuclear-summit.jpg",
    imageAlt:
      "Group photograph at the Rwanda Youth Nuclear Summit, with the RYGN banner visible",
    imageClass: "object-center",
  },
  {
    title: "Empower Forum Association Public Event",
    description:
      "A public engagement event focused on advocacy, knowledge sharing, and promoting solutions for improved electricity access and reliability.",
    image: "/images/empower-forum.jpg",
    imageAlt:
      "Hussein Nsanzimfura speaking on a panel at a public energy forum",
    imageClass: "object-center",
  },
];
