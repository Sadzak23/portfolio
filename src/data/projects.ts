export type Project = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  sourceUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "The site you are currently visiting, designed with a focus on high performance and minimalist aesthetics. It is hosted on Vercel to ensure seamless deployment and optimized global delivery.",
    image: "/images/projects/portfolio.jpg",
    techStack: ["Next.js", "TypeScript", "SCSS", "Node.js", "Webpack"],
    liveUrl: "https://alex.sadzak.net/",
    sourceUrl: "https://github.com/Sadzak23/portfolio",
  },
  {
    title: "Inception OS",
    description:
      "An enterprise-level platform with 15+ modules, ranging from digital signatures to document archiving. My role involved building reusable component libraries and architecting complex document workflows with multi-language support. I led the frontend integration for several major banks, including Raiffeisen, OTP, and Erste Bank, ensuring a consistent and secure user experience.",
    image: "/images/projects/inception.jpg",
    techStack: [
      "React",
      "TypeScript",
      "TanStackQuery",
      "SCSS",
      "i18next",
      "Vite",
    ],
  },
  {
    title: "Moje eSanduce",
    description:
      "The official mobile application for the Serbian Government's eUprava portal. It serves as a secure digital mailbox for citizens to receive, view, and manage official documents, news and notifications. Currently in the final approval stage, the app is designed for high accessibility and secure communication on a nationwide scale.",
    image: "/images/projects/esanduce.jpg",
    techStack: ["ReactNative", "Expo", "TypeScript", "TanStackQuery", "SCSS"],
  },
  {
    title: "Truly Yours Catering",
    description:
      "A WordPress to Next.js migration focused on performance and speed. While following the client’s specific design, I developed a custom event price calculator that sends automated, accurate quotes directly to the user's email.",
    image: "/images/projects/tyc.jpg",
    techStack: ["Next.js", "TypeScript", "SCSS", "Node.js", "Webpack"],
    liveUrl: "https://www.trulyyourscateringco.com",
  },
  {
    title: "Memory Game",
    description:
      "I built this game over a weekend for my daughter to play. It features three difficulty levels and four different tile sets to keep it engaging. The entire project was developed from scratch without any external libraries or AI tools, focusing on a clean, responsive design that works perfectly in both dark and light modes.",
    image: "/images/projects/memory-game.jpg",
    techStack: ["React", "TypeScript", "SCSS", "Vite"],
    liveUrl: "https://memory-game.sadzak.net/",
    sourceUrl: "https://github.com/Sadzak23/memory-game",
  },
  {
    title: "Pong game",
    description:
      "A logic-heavy project inspired by John Crickett’s coding challenge. It is currently a competitive local 2-player game where I implemented the entire game loop and ball physics using custom mathematical functions. Built without AI or external libraries, with an AI opponent planned for the future.",
    image: "/images/projects/pong.jpg",
    techStack: ["React", "TypeScript", "SCSS", "Vite"],
    liveUrl: "https://pong-game.sadzak.net/game",
    sourceUrl: "https://github.com/Sadzak23/pong",
  },
  //   {
  //     title: "Fitness Tracking App",
  //     description:
  //       "Mobile-first fitness application with workout logging, progress visualization, and social features. Syncs with wearables and provides personalized training plans.",
  //     image:
  //       "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=450&fit=crop",
  //     techStack: ["React Native", "TypeScript", "Node.js", "MongoDB"],
  //     liveUrl: "#",
  //   },
  {
    title: "Design System Library",
    description:
      "Comprehensive component library, build from scratch, with 50+ accessible components, extensive documentation, and theming support. Used by the whole organization.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
    techStack: ["React", "Storybook", "SCSS", "CSS Variables", "Rollup"],
  },
];
