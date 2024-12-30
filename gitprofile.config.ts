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
          title: 'Seattle City Light Energy Pricing Analysis Q1 2025',
          description:
            'The Energy Pricing Analysis Report for Seattle City Light (SCL) provides a comprehensive examination of energy pricing scenarios for Q1 2025. The report begins with a historical market price analysis, comparing PDX (real-time), forward, and day-ahead prices from January to March over several years. This analysis reveals significant price volatility, particularly in January and February, with forward prices generally higher than PDX and day-ahead prices. The report then presents a year-over-year price change analysis, using 2020 as a baseline, which shows substantial price increases across all markets, especially in January.' +
'A regression model is used to predict forward prices through 2025, indicating an upward trend in energy costs. The model highlights higher prices during daytime hours, particularly from 10 AM to 8 PM, with peaks around midday. This information is valuable for businesses looking to optimize their energy usage and costs. The report also examines two pricing scenarios: an Index-Based Pricing Scenario and a Variable Megawatts Scenario. The Index-Based scenario, which involves selling energy at an index price plus a premium and buying back at the market index price, consistently yields positive profits across all three months. The Variable Megawatts scenario, while also profitable, shows narrower margins and requires careful adjustment of buyback amounts to profitability.' +
'The report concludes by emphasizing the importance of understanding historical trends, predictive models, and various pricing strategies for informed decision-making in energy trading. It suggests that stakeholders can use this information to optimize their energy trading strategies, maximize returns, and mitigate risks in the dynamic energy market.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Seattle_City_Light_%28logo%29.svg/2560px-Seattle_City_Light_%28logo%29.svg.png',
          link: 'https://docs.google.com/document/d/1_9Vuh5S40TpZHaC0WSprCs59sUr13HTM/edit?usp=sharing&ouid=115020781663086349708&rtpof=true&sd=true',
        },
        {
          title: 'Project Name',
          description:
            'The centralized digital platform directly solves the problem of scattered information that makes it hard for students to find the resources they need. By bringing academic support, mental health resources, career counseling, and campus events into one easy-to-use web hub, the platform becomes super accessible, especially for first-year and international students who might find navigating multiple systems confusing. Features like a guided resource finder, categorized pages, and an interactive campus map make it simple for students to locate what they need without hassle. The personalized recommendations are a great touch, helping students find the most relevant support faster. Overall, this idea is easy to use, covers a wide range of student needs, and lines up with what success looks like, more students using campus services, attending events, and feeling less stressed about finding help.',
          imageUrl:
            'https://m.media-amazon.com/images/I/31+t0OIpl+L._AC_UF894,1000_QL80_.jpg',
          link: 'https://www.figma.com/proto/FKCIbg2o7Qo2TJsvfrBZKN/ResourceFinderPrototype?node-id=0-1&t=Zuu3gMZK1ZF4OMVS-1',
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
