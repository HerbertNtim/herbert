export const stack = [
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "AWS",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "Git & CI/CD",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "scikit-learn",
  "TensorFlow",
  "TensorFlow Hub",
] as const;

// export const publications = [
//   {
//     name: "Progress / Telerik",
//     href: "https://www.telerik.com/blogs/author/leonardo-maldonado",
//   },
//   {
//     name: "LogRocket",
//     href: "https://blog.logrocket.com/author/leonardomaldonado/",
//   },
//   {
//     name: "Medium",
//     href: "https://medium.com/@leonardomso",
//   },
//   {
//     name: "dev.to",
//     href: "https://dev.to/leonardomso",
//   },
// ] as const;

export const contacts = [
  {
    label: "Email",
    value: "herbertntim2023@gmail.com",
    href: "mailto:herbertntim2023@gmail.com",
  },
  {
    label: "X",
    value: "@hntim0829",
    href: "https://x.com/hntim0829",
  },
  {
    label: "GitHub",
    value: "@HerbertNtim",
    href: "https://github.com/HerbertNtim",
  },
  {
    label: "LinkedIn",
    value: "/in/Herbert Ntim",
    href: "https://www.linkedin.com/in/hntim/",
  },
] as const;

export type Project = {
  name: string;
  href: string;
  label: string;
  description: string;
  tags: string[];
  home?: boolean;
};

export const projects: Project[] = [
  {
    name: "Data Science and Machine Learning",
    href: "https://github.com/HerbertNtim/dataScience-ML",
    label: "Building Now",
    description:
      "Exploring data science, machine learning, and deep learning through hands-on projects focused on real-world problem-solving.",
    tags: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "TensorFlow",
      "Google Colab",
      "Jupyter Notebook",
    ],
    home: true,
  },

  {
    name: "Zero To Mastery ",
    href: "https://github.com/zero-to-mastery",
    label: "Open Source",
    description:
      "Member of the Zero To Mastery open-source community, contributing to collaborative projects and gaining practical experience with open-source development and community-driven software.",
    tags: ["JavaScript", "Open Source"],
    home: true,
  },
  {
    name: "Learnify LMS",
    href: "https://learnify-lms-ten.vercel.app/",
    label: "Full-Stack",
    description:
      "A learning management system for managing courses, students, and instructors, with authentication, media uploads, payments, and course organization.",
    tags: [
      "Next.js",
      "TypeScript",
      "Express",
      "Node.JS",
      "AWS (CloudFront, API Gateway, DynamoDB, Lambda, S3)",
      "Docker",
    ],
    home: true,
  },
  {
    name: "Heart Disease Prediction",
    href: "https://github.com/HerbertNtim/heart-disease_project",
    label: "Machine Learning",
    description:
      "A machine learning project exploring medical data to predict the presence of heart disease using Python and classification techniques.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "scikit-learn"],
    home: true,
  },
  {
    name: "Evently",
    href: "https://github.com/HerbertNtim/evently-app",
    label: "Web App",
    description:
      "An event management and ticketing application with event creation, search and filtering, user authentication, order management, and Stripe payments.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Clerk"],
    home: true,
  },
  {
    name: "React Admin Dashboard",
    href: "https://react-admin-dashboard-rust-delta.vercel.app/",
    label: "Dashboard",
    description:
      "An administrative dashboard built with React and Refine, exploring reusable interfaces and the foundations of data-driven internal tools.",
    tags: ["React", "TypeScript", "Refine", "Vite"],
    home: true,
  },
  {
    name: "hntim.com",
    href: "https://hntim.com",
    label: "Personal",
    description:
      "This portfolio website. Built with Vite & React.JS, Tailwind CSS, and deployed on Cloudflare Workers.",
    tags: ["Vite & React.JS", "TypeScript", "Tailwind CSS"],
  },
];

export const homeExperience = [
  {
    dates: "Oct 2024 to Oct 2026",
    role: "Software Developer",
    company: "College of Engineering, KNUST",
    companyHref: "https://coe.knust.edu.gh/",
    body: "Developed software solutions to simplify examination scheduling and administration, improving workflows for the College of Engineering and supporting over 9,800 students.",
  },
  {
    dates: "Sept 2023 to Dec 2023",
    role: "Generative AI Intern",
    company: "Alle-ai",
    companyHref: "https://www.alle-ai.com/",
    body: "Applied generative AI techniques to explore practical solutions to real-world problems, gaining hands-on experience in AI-powered application development.",
  },
  {
    dates: "Apr 2023 to Aug 2023",
    role: "Front End Engineer",
    company: "MIT-LAB",
    companyHref: "",
    body: "Developed responsive interfaces for an online voting application using React and Tailwind CSS, translating Figma designs into functional user experiences while exploring QGIS and geospatial mapping.",
  },
];

export const faqs = [
  {
    question: "Who is Herbert Ntim?",
    answer:
      "Herbert Ntim is a software engineer from Kumasi, Ghana, with a background in Computer Engineering from KNUST. He builds full-stack applications using TypeScript, JavaScript, React, Next.js, and Python, with interests in data science, machine learning, and computer vision.",
  },
  {
    question: "What is Herbert Ntim studying?",
    answer:
      "Herbert is pursuing an MPhil in Computer Engineering, building on his undergraduate background in Computer Engineering from KNUST. His academic interests include image processing, computer vision, data science, and machine learning, with a focus on applying engineering techniques to practical problems.",
  },
  {
    question: "What is Herbert Ntim working on right now?",
    answer:
      "Herbert is expanding his skills in machine learning and deep learning through practical projects, including dog vision, face recognition, heart disease prediction, and bulldozer price prediction. He is focused on building, evaluating, and deploying models to solve real-world problems.",
  },
  {
    question: "What did Herbert do at the College of Engineering, KNUST?",
    answer:
      "Herbert developed JavaScript and TypeScript automation tools for examination scheduling, maintained examination web applications and student room-allocation systems, and used Python to customize examination attendance sheets. His work supported examination operations for more than 9,000 students.",
  },
  {
    question: "What is Herbert Ntim's technical stack?",
    answer:
      "Herbert's core development tools include JavaScript, TypeScript, React, Next.js, Node.js, Python, and Tailwind CSS. He also works with technologies such as MongoDB, PostgreSQL, GraphQL, and FastAPI, and is developing skills in data science and machine learning with NumPy, Pandas, scikit-learn, and TensorFlow.",
  },
  {
    question: "What are Herbert Ntim's research interests?",
    answer:
      "Herbert is interested in Computer Engineering, image processing, computer vision, data science, and machine learning. He is particularly interested in exploring image-enhancement techniques for degraded CCTV, camera, and mobile images, beginning with traditional image-processing methods.",
  },
  {
    question: "Does Herbert Ntim contribute to open source?",
    answer:
      "Herbert is a member of the Zero To Mastery open-source community and has contributed to an open-source project. He is interested in learning through collaboration and becoming more involved in the open-source ecosystem.",
  },
  {
    question: "How can I contact Herbert Ntim?",
    answer:
      "You can connect with Herbert through his GitHub profile at github.com/HerbertNtim or reach out through the contact links available on his portfolio website.",
  },
  {
    question: "Is Herbert Ntim open to new opportunities?",
    answer:
      "Herbert is interested in opportunities that support his growth as a software engineer, including full-stack development, collaborative software projects, and work related to data science and machine learning. He is also focused on advancing his academic journey in Computer Engineering.",
  },
];

export const uses = [
  {
    title: "Editor & Terminal",
    items: [
      ["VS Code", "Primary code editor"],
      ["Terminal", "macOS terminal"],
      ["Geist Mono", "Monospace font for editor and terminal"],
    ],
  },
  {
    title: "Development",
    items: [
      ["TypeScript", "Primary language for everything"],
      ["React / Next.js", "Frontend framework of choice"],
      ["Tailwind CSS", "Utility-first CSS framework"],
      ["Node.js", "Server-side runtime"],
      ["PostgreSQL", "Database for most projects"],
      ["Git", "Version control"],
    ],
  },
  {
    title: "Apps",
    items: [
      ["Figma", "Design and prototyping"],
      ["Notion", "Notes and documentation"],
    ],
  },
  {
    title: "Services",
    items: [
      ["Vercel", "Deployment and hosting"],
      ["GitHub", "Code hosting and collaboration"],
      ["Cloudflare", "DNS and CDN"],
    ],
  },
] as const;

export const skillGroups = [
  ["Languages", "JavaScript, TypeScript, Python, HTML, CSS"],
  [
    "Frontend",
    "React, Next.js, React Native, Vite, Tailwind CSS, Redux & Redux Toolkit, Zustand",
  ],
  [
    "Backend",
    "Node.js, GraphQL, REST APIs, WebSocket, PostgreSQL, Redis, MongoDB, Prisma ORM",
  ],
  [
    "AI",
    "VAPI API, Pandas, Numpy, Matplotlib, Scikit-Learn, TensorFlow, Google Colab, Jupyter Notebook",
  ],
  [
    "Cloud & Infrastructure",
    "Docker, AWS, Cloudflare, Vercel, GitHub Actions, CI/CD",
  ],
  // ["Testing", "Vitest, Jest"],
  ["Dev Tools", "Git, Clerk Auth"],
] as const;

export const resumeExperience = [
  {
    company: "KNUST College of Engineering Examination Office",
    href: "https://www.knust.edu.gh/",
    location: "Kumasi, Ghana",
    role: "Software Developer",
    dates: "National Service + Additional Year (2024 - 2026)",
    bullets: [
      "Developed JavaScript and TypeScript automation tools for examination scheduling and maintained web applications, including the student examination room-allocation system, supporting over 9,000 students.",
      "Used Python to customize examination attendance sheets for specific rooms, streamlining administrative workflows and examination operations.",
    ],
  },
  {
    company: "ALLE-AI",
    href: "https://www.alle-ai.com/",
    location: "Ghana",
    role: "Generative AI Intern",
    dates: "Sept 2023 to Dec 2026",
    bullets: [
      "Explored generative AI techniques and their applications in solving practical problems.",
      "Gained hands-on exposure to AI-powered solutions and the development of generative AI applications.",
    ],
  },
  {
    company: "MIT-LAB, KNUST",
    href: "https://www.knust.edu.gh/",
    location: "Kumasi, Ghana",
    role: "Front-End Engineering",
    dates: "Apr 2023 to Aug 2023",
    bullets: [
      "Developed responsive interfaces for an online voting application using React and Tailwind CSS, translating Figma designs into functional user experiences.",
      "Explored QGIS and geospatial mapping concepts and their practical applications.",
    ],
  },
];

export const resumeProjects = [
  {
    name: "Learnify LMS",
    href: "https://learnify-lms-ten.vercel.app/",
    meta: "Live on Vercel",
    aside: "Web Application",
    bullets: [
      "A learning management system designed to support course delivery and learning administration.",
      "Demonstrates modern web application development and integration of backend services.",
    ],
  },
  {
    name: "Readora Voice",
    href: "https://readora-voice.vercel.app/",
    meta: "AI-Powered Application",
    aside: "Full-Stack",
    bullets: [
      "Built an AI-powered voice companion that lets users upload documents and interact with their content through natural voice conversations.",
      "Developed with Next.js, TypeScript, MongoDB, Clerk, and Vapi AI, with PDF processing and document management features.",
    ],
  },

  {
    name: "React Admin Dashboard",
    href: "https://react-admin-dashboard-rust-delta.vercel.app/",
    meta: "Web Application",
    aside: "Frontend",
    bullets: [
      "Built an interactive admin dashboard with reusable React components and a structured interface for presenting application data.",
      "Focused on responsive UI development, component-based architecture, and data visualization.",
    ],
  },
  {
    name: "Dog Vision",
    href: "https://github.com/HerbertNtim/dataScience-ML/blob/main/dog_vision.ipynb",
    meta: "Machine Learning",
    aside: "Deep Learning",
    bullets: [
      "Applying computer vision and deep learning techniques to classify images of dogs.",
      "Exploring the machine learning workflow, including data preparation, model training, and evaluation.",
    ],
  },
  {
    name: "Heart Disease Prediction",
    href: "https://github.com/HerbertNtim/heart-disease_project",
    meta: "Machine Learning",
    aside: "Classification",
    bullets: [
      "Developing a predictive classification model using health-related data to explore patterns associated with heart disease.",
      "Applying data preprocessing, feature analysis, model training, and evaluation techniques.",
    ],
  },
  {
    name: "Bulldozer Price Prediction",
    href: "https://github.com/HerbertNtim/bulldozer-price-prediction",
    meta: "Machine Learning",
    aside: "Regression",
    bullets: [
      "Building a regression model to estimate bulldozer sale prices from historical auction data.",
      "Applying data cleaning, feature engineering, and model evaluation to a real-world price prediction problem.",
    ],
  },
];
