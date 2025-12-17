import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sohail",
  lastName: "Patel",
  name: `Sohail Patel`,
  role: "Software Developer",
  avatar: "/images/avatar.jpeg",
  email: "sohail345patel@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Telugu", "Kannada"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sohail005",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/md-sohail-a63a321b1/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@sohail.code",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.firstName}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Developer - Code, create, and innovate — every single day.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">SOHAIL PATEL</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/collaborations",
  },
  subline: (
    <>
      I’m a software developer who transforms ideas into clean, scalable, and user-focused digital products.{" "}
      <br />With a passion for problem-solving and modern technology, I build solutions that deliver real impact.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m a software developer who transforms ideas into clean, scalable, and user-focused digital products.
        With a passion for problem-solving and modern technology, I build solutions that deliver real impact.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Mufeed Products and Services Pvt Ltd.",
        timeframe: "Feb 2022 - Nov 2023",
        role: "React & React Native Developer",
        achievements: [
          <>
            Learned how to structure and organize a scalable React Native project
          </>,
          <>
            Gained hands-on experience with component reusability and modular coding
          </>,
          <>
            Learned the importance of performance optimization and clean code
          </>,
        ]
      },
      {
        company: "Revalsys Technologies PVT LTD.",
        timeframe: "Dec 2021 - Feb 2025",
        role: "React Native Developer",
        achievements: [
          <>
            Gained experience in writing reusable, modular, and clean code.
          </>,
          <>
            Built and deployed apps end-to-end, improving knowledge of the app release cycle.
          </>,
          <>
            Strengthened problem-solving through handling complex bugs and platform-specific issue.
          </>,
          <>
            Improved performance tuning, memory optimization, and bundle size reduction.
          </>,
          <>
            Enhanced ability to analyze product requirements and translate them into technical solutions.
          </>,
        ]
      },
      {
        company: "Espirits Technologies Pvt Ltd.",
        timeframe: "Feb 2025 -Present",
        role: "React Native, React.js & Next.js Developer",
        achievements: [
          <>
            Advanced expertise in building scalable, production-grade React Native apps for both Android and iOS.
          </>,
          <>
            Worked on maintaining large-scale codebases, managing complex navigation flows and legacy refactoring.
          </>,
          <>
            Hands-on experience with CI/CD pipelines, Fastlane, automation, and app release workflows.
          </>,
          <>
            Learned to lead feature development, coordinate with backend teams, and handle product requirements end-to-end.
          </>,
          <>
            Strengthened communication in cross-functional teams (UI/UX, backend, QA, product).
          </>,
          <>
            Learned how to manage full mobile release cycles including App Store & Play Store guidelines.
          </>,
          <>
            Became skilled in mentoring juniors, conducting code reviews, and guiding best practices.
          </>,
        ]
      }
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Osmania University Hyderabad",
        description: <>Bachelor of Technology (B.Tech) in Computer Science and Engineering</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Software Developer",
        description: (
          <>Frontend Frameworks: React.js, Next.js, React Native</>,
          <>JavaScript & TypeScript: ES6+, async programming, modular architecture</>,
          <>State Management: Redux, Redux Toolkit, Context API, Zustand</>,
          <>UI Development: Responsive design, Flexbox, CSS Modules, Tailwind CSS</>,
          <>Navigation & Routing: React Router, Next.js routing, React Navigation</>,
          <>API Integration: REST APIs, GraphQL, Axios/Fetch, real-time data with WebSockets</>,
          <>Mobile Development: Android & iOS builds, platform-specific components, native modules</>,
          <>Performance Optimization: Memoization, virtualization, lazy loading, code splitting</>,
          <>Testing: Jest, React Testing Library, unit & integration testing</>,
          <>Build & Deployment: Vercel, Expo, Fastlane, Android/iOS release workflows</>,
          <>DevOps & Tools: Git, GitHub Actions, CI/CD pipelines, Docker (basic)</>,
          <>Backend Familiarity: Node.js, Express.js (for API development)</>,
          <>Debugging Tools: Chrome DevTools, Flipper, React Native DevTools</>,
          <>Animations & UX: React Native Reanimated, Gesture Handler, Framer Motion</>
        ),
        tags: [
          {
            name: "Software Developer",
            icon: "OS",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/Development-Methodologies.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/Custom-Software-Development.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Key Skills & Tech Stack",
        description: (
          <>Building high-performance web and mobile applications using React.js, Next.js, and React Native with a focus on clean architecture and great user experience.</>
        ),
        tags: [
          {
            name: "Frontend Development",
            icon: "check",
          },
          {
            name: "React.js & Next.js",
            icon: "check",
          },
          {
            name: "React Native Apps",
            icon: "check",
          },
          {
            name: "API Integration",
            icon: "check",
          },
          {
            name: "State Management",
            icon: "check",
          },
          {
            name: "Performance Optimization",
            icon: "check",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/image-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },

    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };