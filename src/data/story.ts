type StoryImage = {
  src: string;
  alt: string;
  align?: "left" | "right";
  aspectRatio?: "square" | "wide";
};

type Story = {
  title?: string;
  text: string;
  image?: StoryImage;
  images?: Omit<StoryImage, "align">[];
  variant?: "highlight";
};

export const storyShort = `My journey to becoming a Lead Frontend Developer was anything but
                           conventional. It began on a karate mat, where sixteen years of
                           professional competition and international medals built a foundation
                           of grit and accountability. That same discipline eventually led me
                           back to my engineering roots, where I now combine technical
                           precision with the leadership skills I honed as a business owner.`;

export const story: Story[] = [
  {
    title: "Opening",
    text: `My path to becoming a Lead Frontend Developer was not a straight line,
        but every step along the way contributed to the person and engineer I am
        today.`,
  },
  {
    title: "Young age",
    text: `For sixteen years of my early life, my focus was mainly on karate. What
        started as a childhood hobby evolved into a professional career that led
        me to medals at the highest international levels, including European and
        World championships. This journey demanded years of relentless work and
        sacrifice, but more importantly, it shaped my character, building a core
        of responsibility, persistence, and respect!`,
    image: {
      src: "/images/karate-medals.webp",
      alt: "Karate Medals",
      align: "left",
    },
  },
  {
    title: "Education",
    text: `Parallel to my athletic
        life, I attended a technical high school for electrical engineering.
        This was my first introduction to physics, electronics, and programming.
        It planted the seed of engineering thinking and the satisfaction of
        building projects from scratch.
        When it came time for university, I stood at a crossroads between
        engineering and sport. I chose sport, graduating from the Faculty of
        Sport and Physical Education and following that with a year in New York
        City. There, I earned my Master’s degree while perfecting my English
        fluency. Throughout those formative years, I worked as a coach in
        karate, gymnastics, and eventually fitness, learning how to guide others
        toward their goals.`,
    image: {
      src: "/images/crafting1.jpg",
      alt: "Crafting",
      align: "right",
    },
  },
  {
    title: "Entrepreneurship",
    text: `After my studies, my entrepreneurial spirit took over. I founded a
        running club called "Running Tribe" and a fitness studio named "Reborn."
        For eight years, I operated as the owner and director, managing a
        diverse team of eighteen professionals including coaches, nutritionists,
        doctors, and marketing staff. I also served as the Sports Coordinator
        for Mensa Serbia for five years. This period honed my leadership skills,
        demanding accountability, proactivity, and the ability to organize
        complex systems.`,
    image: {
      src: "/images/tribe1.webp",
      alt: "Running Tribe",
      align: "left",
    },
  },
  {
    title: "Passing knowledge",
    text: `I frequently shared this knowledge through public
        lectures and television appearances, discussing health and mental
        well-being.`,
    images: [
      {
        src: "/images/rts.webp",
        alt: "RTS TV Appearance",
      },
      {
        src: "/images/n1.webp",
        alt: "N1 TV Appearance",
      },
    ],
  },
  {
    title: "Learning to code",
    text: `While managing these businesses, I needed technical solutions to help
        them grow. Professional web development services were expensive at the
        time, so I decided to build them myself. I started with WordPress and
        customization, reigniting the passion for logic and structure I
        discovered in high school. I also had to make time for hobbies like
        playing guitar, crafting, and snowboarding, but coding slowly transitioned
        from a necessity to a genuine interest.`,
    images: [
      {
        src: "/images/guitar1.webp",
        alt: "Playing Guitar",
        aspectRatio: "square",
      },
      {
        src: "/images/snowboard1.webp",
        alt: "Snowboarding",
        aspectRatio: "square",
      },
      {
        src: "/images/tribe2.webp",
        alt: "Running",
        aspectRatio: "square",
      },
    ],
  },
  {
    title: "The pivot",
    text: `This fast-paced life had its challenges. As I prepared to start a family, 
        I realized that managing multiple businesses didn't leave enough space to be 
        the husband and father I wanted to be. Programming was becoming increasingly 
        attractive, offering the intellectual challenge I craved and the flexibility 
        my family deserved. The arrival of COVID-19 was the final turning point. 
        With lockdowns affecting the fitness industry, I decided it was time to 
        entrust my businesses to others and pivot fully to software engineering. 
        Because I had already built a solid foundation through my own projects, 
        the transition felt like a natural return to my engineering roots.`,
    variant: "highlight",
  },
  {
    title: "Today",
    text: `Today, I am a Lead Frontend Developer. I have found that the skills I
        cultivated as an elite athlete and business owner are just as valuable
        in code as they are on the field. The discipline to write clean code,
        the responsibility of leading a team, and the ability to communicate
        complex ideas are what allowed me to advance quickly in this industry. I
        now bring that same level of championship dedication to building
        scalable, high-performance mobile and web applications.`,
    image: {
      src: "/images/hero.webp",
      alt: "Coding",
      align: "right",
    },
  },
  {
    title: "Conclusion",
    text: `My journey from the karate mat to the lead engineer seat has taught me 
        that the arena might change, but the principles of success do not. I thrive 
        at the intersection of technical precision and human leadership. Whether 
        I'm architecting a complex frontend or mentoring a team, I apply the same 
        focus and grit that earned me medals on the world stage. I am not just 
        building software, I am building solutions that reflect a lifetime of 
        discipline, growth, and the pursuit of excellence.`,
    image: {
      src: "/images/medals.jpg",
      alt: "Medals & Achievements",
      align: "left",
    },
  },
];
