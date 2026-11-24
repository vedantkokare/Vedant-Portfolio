const BASE_URL = import.meta.env.BASE_URL || '/';

export const portfolioData = {
  personal: {
    brand: 'VK.',
    fullName: 'Vedant Ganesh Kokare',
    firstName: 'VEDANT',
    lastName: 'KOKARE',
    heroLabel: 'Full Stack Java Developer, Mumbai',
    heroLine: 'Java and Spring Boot on the back end. Shopify, PHP and Laravel at work.',
    heroSub: 'Jr. Developer at Netlynx Technologies since November 2025.',
    email: 'vedantkokare81@gmail.com',
    phone: '+91 99207 65762',
    phoneHref: 'tel:+919920765762',
    location: 'Mumbai, India',
    linkedin: 'https://www.linkedin.com/in/vedantkokare/',
    github: 'https://github.com/vedantkokare',
    resumeUrl: `${BASE_URL}Vedant_Kokare_Resume.pdf`,
    resumeFallback: 'mailto:vedantkokare81@gmail.com',
  },

  navLinks: [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ],

  about: {
    label: 'About',
    paragraphs: [
      'I am a Java developer who likes building things that work. I trained and interned on a live citizen-government grievance platform using Core Java, Spring Boot, Spring MVC, Servlets/JSP, JDBC and MySQL, and built my own CRUD and REST projects.',
      'Today I am a Junior Developer at Netlynx Technologies, building Shopify storefronts and working with PHP and Laravel, while pursuing my MCA in Mumbai.',
    ],
  },

  experience: {
    label: 'Experience',
    items: [
      {
        period: 'Nov 2025 to Present',
        location: 'Mumbai',
        role: 'Jr. Developer',
        company: 'Netlynx Technologies Pvt. Ltd.',
        bullets: [
          'Develop and maintain Shopify storefronts using custom Liquid templates, HTML5, CSS3, JavaScript and Bootstrap.',
          'Work with PHP and Laravel on web application development alongside Shopify work.',
          'Debug and resolve front-end issues and build responsive, cross-device sections to client requirements, working with designers and teammates.',
        ],
        tags: ['Shopify Liquid', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'Laravel'],
      },
      {
        period: 'Apr 2025 to Nov 2025',
        location: 'Sangola',
        role: 'Java Intern',
        company: 'Riyality Software Services',
        bullets: [
          'Developed features for the Civic Citizen Help Desk, a Java-based platform where citizens report civic issues (potholes, power cuts, water problems) to the responsible authority.',
          'Contributed to back-end modules and MySQL database design, and built front-end interfaces for issue submission and complaint tracking.',
          'Completed Java Full Stack training (Core Java, JDBC, Servlets/JSP, MySQL) and worked with the team on project requirements.',
        ],
        tags: ['Java', 'JDBC', 'Servlets', 'JSP', 'MySQL'],
      },
    ],
  },

  projects: {
    label: 'Projects',
    featured: [
      {
        id: 'finance-buddy',
        title: 'Finance Buddy',
        subtitle: 'Finance management system',
        description:
          'Personal finance web application built with Java 17, Spring Boot, Spring Web MVC, Spring Data JPA, JSP/JSTL and MySQL. Supports user registration and session login, a dashboard displaying total credited, debited and overall balance, full CRUD for income and expense entries by category and payment mode, and a transaction history view.',
        tags: ['Java 17', 'Spring Boot', 'Spring Web MVC', 'Spring Data JPA', 'JSP', 'MySQL', 'Bootstrap'],
        githubUrl: 'https://github.com/vedantkokare/Finance-Buddy',
        liveUrl: 'https://finance-management-system-s29u.onrender.com/login',
        liveNote: 'Hosted on a free tier, the first load may take a moment.',
        imageUrl: `${BASE_URL}assets/images/finance-buddy-live.png`,
        imageAlt: 'Finance Buddy live login interface running on Render',
      },
      {
        id: 'record-handler',
        title: 'Record Handler',
        subtitle: 'Java CRUD application',
        description:
          'CRUD application with REST-style endpoints, MVC architecture and form validation.',
        tags: ['Java', 'Servlet', 'JSP', 'MySQL'],
        githubUrl: 'https://github.com/vedantkokare/Record-Handler',
        liveUrl: null,
        imageUrl: `${BASE_URL}assets/images/Recordhandler-Add.png`,
        imageAlt: 'Record Handler web form for creating a new record',
      },
      {
        id: 'responsive-website',
        title: 'Responsive E-Commerce Website',
        subtitle: 'Multi-section storefront',
        description:
          'Multi-section, cross-device site with dynamic navigation.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        githubUrl: 'https://github.com/vedantkokare/Responsive-Website',
        liveUrl: null,
        imageUrl: `${BASE_URL}assets/images/Responsive-website.png`,
        imageAlt: 'Responsive E-Commerce Website storefront landing view',
      },
    ],
    alsoBuilt: {
      label: 'Also built',
      items: [
        {
          name: 'Civic Citizen Help Desk',
          detail: 'Internship web platform for reporting civic issues',
          url: null,
        },
        {
          name: 'Gym Management System',
          detail: 'C# .NET Windows Forms desktop app',
          url: 'https://github.com/vedantkokare/Gym-Member-Handler',
        },
        {
          name: 'This portfolio',
          detail: 'React and Vite source repository',
          url: 'https://github.com/vedantkokare/Portfolio',
        },
      ],
      githubLinkLabel: 'github.com/vedantkokare',
      githubLinkUrl: 'https://github.com/vedantkokare',
    },
  },

  skills: {
    label: 'Skills',
    groups: [
      {
        name: 'Back end',
        items: [
          'Core Java',
          'OOP',
          'Collections',
          'Generics',
          'Lambda Expressions',
          'Spring Boot',
          'Spring MVC',
          'RESTful APIs',
          'JDBC',
          'Servlets',
          'JSP',
          'PHP',
          'Laravel',
        ],
      },
      {
        name: 'Front end',
        items: [
          'HTML5',
          'CSS3',
          'JavaScript',
          'Bootstrap',
          'Responsive Design',
          'Shopify Liquid',
        ],
      },
      {
        name: 'Database',
        items: ['MySQL', 'SQL', 'MySQL Workbench', 'Database Design'],
      },
      {
        name: 'Tools',
        items: [
          'Git',
          'GitHub',
          'Eclipse',
          'Postman',
          'MVC Architecture',
          'Debugging',
          'API Design and Integration',
        ],
      },
    ],
  },

  education: {
    label: 'Education and achievements',
    items: [
      {
        title: 'Master of Computer Applications (pursuing, year 1)',
        institution: 'Late Bhausaheb Hiray College, Bandra, Mumbai',
        meta: 'Current',
        isHighlighted: true,
      },
      {
        title: 'Bachelor of Computer Science',
        institution: 'Dr. Ganpatrao Deshmukh Mahavidyalaya, Sangola',
        meta: '2025 · 72%',
        isHighlighted: false,
      },
      {
        title: 'H.S.C. (Science) & S.S.C.',
        institution: 'Mumbai',
        meta: 'H.S.C. 2022 · S.S.C. 2020',
        isHighlighted: false,
      },
      {
        title: '3rd Prize, Web Designing Competition',
        institution: 'Dr. Ganpatrao Deshmukh Mahavidyalaya',
        meta: 'Achievement',
        isHighlighted: false,
      },
      {
        title: 'Java Full Stack Development Training',
        institution: 'Riyality Software Services',
        meta: 'Training',
        isHighlighted: false,
      },
    ],
  },

  contact: {
    label: 'Contact',
    heading: 'Let’s build something reliable.',
    email: 'vedantkokare81@gmail.com',
    phone: '+91 99207 65762',
    phoneHref: 'tel:+919920765762',
    location: 'Mumbai, India',
    linkedin: 'https://www.linkedin.com/in/vedantkokare/',
    github: 'https://github.com/vedantkokare',
  },

  footer: {
    copyright: '© 2026 Vedant Ganesh Kokare.',
  },
};
