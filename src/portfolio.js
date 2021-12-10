/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Heni",
  logo_name: "Heni",
  nickname: "heni1990 / picleric",
  full_name: "Heni Ltaief",
  subTitle: "Full Stack Web Developer. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1vlA-oI5saMFO4hUbJSpyr6r_CsipjC3Y/view?usp=sharing",
  mail: "heniltaief@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/heniLtaief",
  linkedin: "https://www.linkedin.com/in/heni-letaïef-824014100/",
  gmail: "https://mail.google.com/mail/u/0/#inbox",
  instagram: "https://www.instagram.com/",
};

const skills = {
  data: [
    {
      title: "Full Stack JS Dev",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive front end website  using ReactJS",
        "⚡ Building react apps with server-side rendering",
        "⚡ Experience with 3+ Projects",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NestJS",
          fontAwesomeClassname: "simple-icons:nestjs",
          style: {
            color: "red",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "TailwindCss",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "indigo",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ExpressJs",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "black",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#62EBD8",
          },
        },
      ],
    },
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Develop interactive Front end / User Interfaces for your web and mobile applications",
    //     "⚡ Building responsive front end website  using ReactJS",
    //     "⚡ Building react apps with server-side rendering",
    //     "⚡ Experience with 3+ Projects"
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Node",
    //       fontAwesomeClassname: "simple-icons:node-dot-js",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#339933",
    //       },
    //     },
    //     {
    //       skillName: "ExpressJs",
    //       fontAwesomeClassname: "simple-icons:express",
    //       style: {
    //         backgroundColor: "white",
    //         color: "black",
    //       },
    //     },
    //     {
    //       skillName: "NestJs",
    //       fontAwesomeClassname: "simple-icons:nestjs",
    //       style: {
    //         backgroundColor: "white",
    //         color: "red",
    //       },
    //     },
    //     {
    //       skillName: "ReactJS",
    //       fontAwesomeClassname: "logos-react",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Javascript",
    //       fontAwesomeClassname: "ion-logo-javascript",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#F7DF1E",
    //       },
    //     },
    //     {
    //       skillName: "TailwindCss",
    //       fontAwesomeClassname: "simple-icons:tailwindcss",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3DDC84",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Experience hosting and managing websites",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Experience with Continuous Integration",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Netlify",
    //       fontAwesomeClassname: "simple-icons:netlify",
    //       style: {
    //         color: "#38AFBB",
    //       },
    //     },
    //     {
    //       skillName: "Heroku",
    //       fontAwesomeClassname: "simple-icons:heroku",
    //       style: {
    //         color: "#6863A6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //   ],
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "High Ingineering School Of Medjez El Beb",
      subtitle: "hydraulic Engineering",
      logo_path: "esim.png",
      alt_name: "",
      duration: "2012 - 2015",
      descriptions: [
        "⚡ I have studied hydraulic ingineering during 3 years after 2 years of praparatory school (Technical Preparatory Cycle).",
      ],
      website_link: "http://www.esier.agrinet.tn",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Deep Learning Specialization",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/737a9587023c666b8e6cb303157aaeba",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "Sequence Models",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/FM5AKEZA9NUY",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#F6B808",
    // },
    // {
    //   title: "Convolutional Neural Networks",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/U8BLDNUT9UUM",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Structuring Machine Learning Projects",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/YLC25SJQKH3Y",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#E2405F",
    // },
    // {
    //   title: "Machine Learning",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/72KY93DT82MP",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Neural Networks and Deep Learning",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/25JXRB2RWHRX",
    //   alt_name: "Google",
    //   color_code: "#7A7A7A",
    // },
    // {
    //   title: "Improving Deep Neural Networks",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Android Developer Nanodegree",
    //   subtitle: "Part of Google India Scholarship Program",
    //   logo_path: "100.png",
    //   certificate_link: "https://graduation.udacity.com/confirm/HLE7K5V3",
    //   alt_name: "Google",
    //   color_code: "#C5E2EE",
    // },
    // {
    //   title: "Google Summer of Code 2019",
    //   subtitle: "Google / Sugar Labs",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#ffc475",
    // },
    // {
    //   title: "Google Code-In Student",
    //   subtitle: "2014-2017",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#1e70c1",
    // },
    // {
    //   title: "Google Summer of Code Mentor",
    //   subtitle: "2017 / 2018 / 2020",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#ffbfae",
    // },
    // {
    //   title: "InOut 4.0 Winner #2",
    //   subtitle: "2017",
    //   logo_path: "ino.png",
    //   certificate_link: " ",
    //   alt_name: "InOut",
    //   color_code: "#fffbf3",
    // },
    // {
    //   title: "Google Code-In Mentor",
    //   subtitle: "2017 / 2018 / 2019",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#b190b0",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've recently completed my certification at Rebootkamp Tunisia (Sponsored with Hack Reactor & Galvanize). I've mostly done projects on my own or team mates and I am actively looking for internships or job. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Project superviser",
          company: "STN (Société des Travaux du Nord)",
          company_url: "http://www.stn.tn",
          logo_path: "stn.png",
          duration: "August 2017 - November 2019",
          location: "Tunis - Northern Urbain Center",
          description:
            "The company STN was created in 2005, Its activity is the field of various roads and networks in the public and private sector. The company specializes in road works.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Work",
      experiences: [
        {
          title: "Client Technical Advisor",
          company: "Teleperformance Tunisia",
          company_url: "http://www.teleperformance-tunisie.com/joinus.php",
          logo_path: "teleperformance.png",
          duration: "November 2019 - April - 2021",
          location: "Tunis - Kram",
          description:
            "Teleperformance is the global leader in multi-channel customer experience management. Present in Tunisia since 2000, Teleperformance Tunisia employs more than 6,000 employees at its centres in Greater Tunis (Charguia 2, Montplaisir, Kram and Ben Arous) and Sousse.",
          color: "#2962FF",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Google Summer of Code",
    //       company: "Sugar Labs",
    //       company_url: "https://sugarlabs.org/",
    //       logo_path: "google_logo.png",
    //       duration: "May 2019 - Aug 2019",
    //       location: "Work From Home",
    //       description:
    //         "I worked on the Dashboard project which helps users track their activities while using Sugar OS. I also worked on making a Tamagotchi-like widget for Sugar's Home Screen",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Android App Developer Intern",
    //       company: "IAS4Sure",
    //       company_url: " ",
    //       logo_path: "buld.jpg",
    //       duration: "December 2019 - February 2020",
    //       location: "Work From Home",
    //       description:
    //         "Internship task was to make a native Android application. ",
    //       color: "#0071C5",
    //     },
    //     {
    //       title: "Web Developer",
    //       company: "Wrighter Writing Solutions",
    //       company_url: " ",
    //       logo_path: "wrighter.jpg",
    //       duration: "August 2020",
    //       location: "",
    //       description: "Develop a website using PHP and jQuery.",
    //       color: "#56A4D3",
    //     },
    //     {
    //       title: "Front-End Developer",
    //       company: "VJ TechServe",
    //       company_url: " ",
    //       logo_path: "vjt.png",
    //       duration: "September 2020",
    //       location: "",
    //       description: "Develop a portfolio website using ReactJS",
    //       color: "#800000",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Summer of Code Mentor",
    //       company: "Sugar Labs / GSoC",
    //       company_url: "https://sugarlabs.org/",
    //       logo_path: "google_logo.png",
    //       duration: "Summer of 2017 / 18 / 20",
    //       location: " ",
    //       description:
    //         "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Google Code-In Mentor",
    //       company: "Sugar Labs / GSoC",
    //       company_url: "https://sugarlabs.org/",
    //       logo_path: "google_logo.png",
    //       duration: "Winter of 2017 / 18 / 19",
    //       location: " ",
    //       description:
    //         "Day to day resposibilites of this mentorship was to help out children aged 13-17 get started with programming and open-source, review their work and approve them.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Board Member at Codeuino",
    //       company: " ",
    //       company_url: " ",
    //       logo_path: "codeuino.jpg",
    //       duration: "2018 - 2019",
    //       location: " ",
    //       description: "Previous Board during early days of Codeuino",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "BluWings Club",
    //       company: " ",
    //       company_url: " ",
    //       logo_path: "b.png",
    //       duration: "2018 - On Going",
    //       location: " ",
    //       description:
    //         "Co-Founder and President of the programming club called BluWings. Have organized several workshops which introduced programming and related tools to freshers.",
    //       color: "#D83B01",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to learn new Technologies. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "heni.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something I do it right, I do try to document it so it can be helpful to others. I write on Medium.",
    link: "https://medium.com/@heniltaief",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Rmdb",
      url: "https://github.com/heniLtaief/greenField",
      description: "Pair project: A similar version of Imdb",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Css",
          iconifyClass: "fa-css3",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      id: "1",
      name: "E-Commerce Catwalk",
      url: "https://github.com/heniLtaief/Overview-Capstone",
      description:
        "Group project (4 people): Create an interface similar to the given specification and design by the (Product Owner) in the form ofadobe xd file.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "TailwindCss",
          iconifyClass: "logos-tailwindcss",
        },
      ],
    },
    {
      id: "2",
      name: "Legacy Project: FreeMarket",
      url: "https://github.com/heniLtaief/Legacy",
      description:
        "Team project (3 Developers): example of E-Commerce website using Angular JS",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
        {
          name: "Angular",
          iconifyClass: "logos-angular",
        },
        {
          name: "TailwindCss",
          iconifyClass: "logos-tailwindcss",
        },
      ],
    },
    {
      id: "3",
      name: "By-Cycle",
      url: "https://github.com/heniLtaief/Thesis-rbktn16-1",
      description:
        "Thesis project: mobile application for public bikes stations",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "TailwindCss",
          iconifyClass: "logos-tailwindcss",
        },
        {
          name: "Nest JS",
          iconifyClass: "logos-nestjs",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
        {
          name: "Heroku",
          iconifyClass: "logos-heroku",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
