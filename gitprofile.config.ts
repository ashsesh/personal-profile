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
    aboutMe: {
    name: 'Ashwath Seshamani',
    description: 'Your bio/description here. Talk about yourself, your interests, what you do, etc.'
  },
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['ashsesh/F1-Project','ashsesh/Seattle-City-Light','zhk2/HomeHelp.io','ashsesh/Data-Structures-Algorithms-Projects','ccsekhar20/claude-hackathon','ashsesh/personal-profile'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Seattle City Light Energy Pricing Analysis Q1 2025',
          description:
            'The Energy Pricing Analysis Report for Seattle City Light (SCL) provides a comprehensive examination of energy pricing scenarios for Q1 2025. The report begins with a historical market price analysis, comparing PDX (real-time), forward, and day-ahead prices from January to March over several years. This analysis reveals significant price volatility, particularly in January and February, with forward prices generally higher than PDX and day-ahead prices. The report then presents a year-over-year price change analysis, using 2020 as a baseline, which shows substantial price increases across all markets, especially in January.',
          imageUrl:
            'https://media.licdn.com/dms/image/v2/C560BAQFhcWni8qYVRA/company-logo_200_200/company-logo_200_200/0/1630649311542/seattle_city_light_logo?e=2147483647&v=beta&t=d3JMupDaMlXt0zgT2czirqcF4l85ATXRX8qCm-lJaG4',
          link: 'https://docs.google.com/document/d/1_9Vuh5S40TpZHaC0WSprCs59sUr13HTM/edit?usp=sharing&ouid=115020781663086349708&rtpof=true&sd=true',
        },
        {
          title: 'UW Resource Finder',
          description:
            'The centralized digital platform directly solves the problem of scattered information that makes it hard for students to find the resources they need. By bringing academic support, mental health resources, career counseling, and campus events into one easy-to-use web hub, the platform becomes super accessible, especially for first-year and international students who might find navigating multiple systems confusing. Features like a guided resource finder, categorized pages, and an interactive campus map make it simple for students to locate what they need without hassle. The personalized recommendations are a great touch, helping students find the most relevant support faster. Overall, this idea is easy to use, covers a wide range of student needs, and lines up with what success looks like, more students using campus services, attending events, and feeling less stressed about finding help.',
          imageUrl:
            'https://m.media-amazon.com/images/I/31+t0OIpl+L._AC_UF894,1000_QL80_.jpg',
          link: 'https://www.figma.com/proto/FKCIbg2o7Qo2TJsvfrBZKN/ResourceFinderPrototype?node-id=0-1&t=Zuu3gMZK1ZF4OMVS-1',
        },
        {
          title: 'SmartSip',
          description:
            'This project entails the development of a comprehensive coffee consumption tracking app that prioritizes user experience through thoughtful design principles. The application offers several key features to help users monitor and manage their coffee habits, including caffeine tracking, financial management, and an open-source database. The caffeine tracking feature allows users to log their coffee intake, enabling them to monitor their daily caffeine consumption. Financial management tools are incorporated to help users track their coffee-related expenses, potentially including individual purchase tracking, monthly spending calculations, and insights on potential savings. The integration of an open-source database offers a wide range of coffee-related information, which could include details about various coffee beans, brewing methods, or local coffee shops.',
          imageUrl:
            'https://media.licdn.com/dms/image/v2/C4E12AQG8_Do1Iam3bA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1638280617625?e=2147483647&v=beta&t=c6l6F9fWlqW3O1W9N40Z9fJWuBTV08u8_3Gt6-cpPWM',
          link: 'https://www.figma.com/proto/Efvu2ierYZ1YIDtAH8oujI/Onboarding?node-id=0-1&t=a3ZPDaQqijoR81qd-1',
        },
        {
          title: 'Your Preferred Information World',
          description:
            'This project explores the TikTok algorithm and its impact on users information consumption and opinion formation. The study examines how TikToks advanced machine learning algorithm analyzes user behavior to create personalized content streams through the For You Page (FYP). It highlights the platforms advantages, such as tailored content feeds, increased discoverability of new trends and topics, and exposure to diverse content from various creators. The project also discusses TikToks user-centric design elements, including the intuitive interface and full-screen video playback, which contribute to its popularity. However, it also addresses potential drawbacks, such as the risk of creating echo chambers, reinforcing biases, and inadvertently promoting cultural insensitivity. The research considers the implications of TikToks algorithm on user polarization and proposes potential solutions to mitigate these effects, such as implementing alerts to encourage users to explore diverse perspectives. Overall, this project provides a comprehensive analysis of TikToks algorithm, its benefits, challenges, and potential improvements to create a more balanced and inclusive information environment.',
          imageUrl:
            'https://www.logo.wine/a/logo/TikTok/TikTok-Logomark%26Wordmark-Vertical-Logo.wine.svg',
          link: 'https://docs.google.com/document/d/1T5S_izHE1jz77pyRMbLHFFtemw7AoLuOQbFxJnB5JOc/edit?usp=sharing',
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
    website: 'https://ashsesh.github.io/personal-profile/',
    phone: '',
    email: 'ashwathesh@gmail.com',
    email2: 'ashsesh@uw.edu',
  },
  resume: {
    fileUrl:
      'https://github.com/ashsesh/pdf/blob/main/Resume_Ashwath%20(1).pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'SQL',
    'R Programming',
    'TypeScript',
    'React',
    'REST API',
    'System Architecture',
    'Database Design',
    'Git',
    'AWS (Bedrock, CDK, Redshift, Lambda)',
    'Web Development',
    'Figma',
    'Problem Solving',
    'Communication',
    'Leadership',
    'Critical Thinking',
  ],
  experiences: [
    {
      company: 'Amazon',
      position: 'Software Development Engineering (SDE) Intern',
      from: 'June 2025',
      body: '',
      to: 'September 2025',
    },
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
      to: '2027',
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
