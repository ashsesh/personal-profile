// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ashsesh', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/personal-profile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['ashsesh/Data-Structures-Algorithms-Projects', 'ashsesh/Seattle-City-Light'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ashwath Seshamani',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ashwath-seshamani',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'ashwathesh@gmail.com',
    email2: 'ashsesh@uw.edu',
  },
  resume: {
    fileUrl:
      'https://github.com/ashsesh/pdf/blob/main/Seshamani_Tech%20Resume%20(1).pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'SQL',
    'R Programming',
    'Web Development',
    'Figma',
    'Git',
    'Problem Solving',
    'Communication',
    'Leadership',
    'Critical Thinking',
  ],
  experiences: [
    {
      company: 'Seattle City Light',
      position: 'Power Ops & Market Trading Intern',
      from: 'June 2024',
      body: 'Achieved 90% forecast accuracy for Q4 2024 energy market trends through SQL data analysis, coupled with Python and R predictive modeling techniques.\n\nReduced report generation time by 20%, saving 10+ hours per month, by developing a Tableau dashboard to streamline reporting processes.\n\nHelped generate $2.5M+ in monthly profits by providing real-time data insights to support day-ahead and real-time energy trading.',
      to: 'September 2024',
    },
    {
      company: 'Healthy Amplified',
      position: 'Product Analyst Intern',
      from: 'July 2024',
      to: 'September 2024',
    },
    {
      company: 'PeerGuide',
      position: 'Co-Founder',
      from: 'October 2020',
      to: 'April 2023',
      companyLink: 'https://www.peerguide.org/',
    },
    {
      company: 'Cope Health Scholars',
      position: 'Junior Cope Health Scholar Intern',
      from: 'May 2022',
      to: 'September 2022',
    },
    {
      company: 'Kumon',
      position: 'Classroom Assistant',
      from: 'October 2021',
      to: 'March 2022',
    },
  ],
  certifications: [
    {
      name: 'Google Data Analytics Professional Certificate',
      body: 'This certificate has equipped me with essential skills in data analysis:\n' +
          '• Clean and organize data using spreadsheets, SQL, and R programming\n' +
          '• Perform detailed analyses and calculations for statistical insights\n' +
          '• Create visualizations and dashboards with:\n' +
          '  - Tableau\n' +
          '  - Spreadsheets\n' +
          '  - ggplot2 in R.\n' +
          'These skills prepare me to transform raw data into actionable insights and compelling visual narratives.',      
      year: 'September 2023',
      link: 'https://coursera.org/share/f0d336992bd5f715f9427913f60ec06e',
    },
  ],
  educations: [
    {
      institution: 'University of Washington',
      degree: 'B.S. Informatics',
      from: '2023',
      to: '2026',
    },
    {
      institution: 'Issaquah High School',
      degree: 'High School Diploma',
      from: '2019',
      to: '2023',
    },
  ],
  publications: [
    {
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
