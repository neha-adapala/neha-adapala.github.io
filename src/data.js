export const data = {
  name: "Neha Adapala",
  title: "Software Engineer • Creative Developer • Problem Solver",
  circularLabels: ["Contact", "About Me", "Projects", "Achievements", "Art"],
  
  about: {
    intro1: "Hello! I'm Neha Adapala. Currently studying Computer Science as an undergraduate at the University of California, Los Angeles. I love exploring new applications of computer science in different fields.",
    intro2: "The intersection of healthcare and technology has recently been most interesting to me. Recently, I've dived into finding solutions to female health conditions and issues linked to the brain.",
    personal1: "I also enjoy art. Visiting art galleries is one of my favorite hobbies: it gives me the chance to self-reflect, find inspiration and appreciate the world around me. I also enjoy creating art - knitting, crocheting, painting and drawing.",
    personal2: "I've learned that writing is incredibly important, so I am currently developing my writing skills. Reach out if you are on a similar journey or have any tips!",
    organizations: [
      {
        name: "VEST",
        subtitle: "UCLA's builder/startup community",
        building: "Currently building:\nmuse - beli for art museums"
      },
      {
        name: "Data Science Union",
        subtitle: "Professional Data Science growth",
        building: "Currently building:\nlectra - conceptual lecture notes mapper"
      },
      {
        name: "CruX",
        subtitle: "Learning about neurotechnology",
        building: "Currently building:\nUsing brain waves to optimise learning"
      }
    ],
    media: [
      {
        title: "Antifragile: Things That Gain from Disorder",
        author: "Nassim Nicholas Taleb",
        takeaway: "humans have the power to rebound stronger after intense hardship.",
        image: "/antifragile.png"
      },
      {
        title: "Rise of the Planet of the Apes",
        author: "",
        takeaway: "you need not be the smartest, strongest or loudest person in the room. personal experience makes you a strong leader.",
        image: "/planet of the apes.png"
      },
      {
        title: "Almond",
        author: "Sohn Won-pyung",
        takeaway: "i automatically assign emotion to everything. sometimes useful, sometimes not.",
        image: "/almond.png"
      },
      {
        title: "Mulan",
        author: "",
        takeaway: "think unconventionally. work on yourself, trust your intuition and build valuable relationships to achieve your goals.",
        image: "/mulan.png"
      },
      {
        title: "Ikigai: The Japanese Secret to a Long and Happy Life",
        author: "Francesc Miralles and Hector Garcia",
        takeaway: "do the things you love. spend time with those who make you happy.",
        image: "/ikigai.png"
      },
      {
        title: "The Knowledge Project - Shane Parrish",
        author: "",
        takeaway: "be more present in the moment: don't only look for the past and future. nothing is absolute - no always, no never.",
        image: "/the knowledge project.png"
      },
      {
        title: "Atomic Habits - James Clear",
        author: "James Clear",
        takeaway: "to achieve a goal, imagine what someone who has achieved that would do; create systems; grow incrementally",
        image: "/atomic habits.png"
      },
      {
        title: "The Huberman Lab",
        author: "",
        takeaway: "always find something to be grateful for. complain less. get sunlight within the first few minutes of waking.",
        image: "/huberman lab.png"
      },
      {
        title: "Live to 100: Secrets of the Blue Zones",
        author: "",
        takeaway: "being happy, loving your life and respecting yourself is the best thing you can do for your health.",
        image: "/live to 100 blue zones.png"
      }
    ],
    contact: [
      {
        name: "Email",
        text: "nehaadapala@g.ucla.edu",
        url: "mailto:nehaadapala@g.ucla.edu"
      },
      {
        name: "LinkedIn",
        text: "Neha Adapala",
        url: "https://linkedin.com/in/neha-adapala"
      },
      {
        name: "X",
        text: "@neha_adapala",
        url: "https://x.com/neha_adapala"
      },
      {
        name: "Medium",
        text: "@neha.adapala",
        url: "https://medium.com/@neha.adapala"
      }
    ]
  },
  
  projects: [
    {
      title: "Book Buddy",
      description: "Storybook reader to increase child literacy",
      features: [
        "User authentication with SQL",
        "Photo capture stored in user database (MySQL)",
        "File handler to upload & select storybook pages",
        "Read words aloud on hover via computer vision",
        "Progress tracker w/ graphs (NumPy & Matplotlib)"
      ],
      images: [
        { src: "/book buddy 1.png", alt: "Login/Registration Page" },
        { src: "/book buddy 2.png", alt: "Book Creation Interface" },
        { src: "/book buddy 3.png", alt: "File Handler" },
        { src: "/book buddy 4.png", alt: "Progress Tracker" }
      ],
      gridLayout: "2x2"
    },
    {
      title: "NextUp",
      description: "Optimising college student's productivity",
      features: [
        "Google Calendar API to identify \"productivity periods\"",
        "Gmail API to find different required tasks",
        "Gemini API to create task summaries and predicted task times",
        "React for the frontend",
        "MongoDB for the database"
      ],
      images: [
        { src: "/next up 1.png", alt: "Upcoming Tasks Panel" },
        { src: "/next up 2.png", alt: "Current Productivity Period" },
        { src: "/next up 3.png", alt: "Current Tasks" }
      ],
      gridLayout: "3col"
    },
    {
      title: "Neurotechnology projects",
      description: "Things I've built to satiate my neurotech curiosity",
      features: [
        "Creating interactive art that adapts to brain waves",
        "Changing computer volume with brain waves",
        "Understanding the current brain state"
      ],
      images: [
        { src: "/neurotech 1.png", alt: "Interactive Art Visualization" },
        { src: "/neurotech 2.png", alt: "Music Player Interface" },
        { src: "/neurotech 3.png", alt: "Code Snippet" },
        { src: "/neurotech 4.png", alt: "Brainwave Graph" }
      ],
      gridLayout: "2x2"
    }
  ],
  
  achievements: [
    {
      title: "Pamela Sweetnam Cup for Initiative and Development",
      date: "Dec 2025"
    },
    {
      title: "1st Place: Co-Designing Care: A Policy Hackathon for Technology and the Public Good",
      date: "Oct 2025"
    },
    {
      title: "Gold: Senior Mathematical Challenge",
      date: "Oct 2024"
    },
    {
      title: "CREST Gold Award: AI-powered PCOS detection using menstrual blood",
      date: "Sep 2024"
    },
    {
      title: "Jack Petchey Award: Won $475 to fund 10 robotics kits for school",
      date: "May 2024"
    },
    {
      title: "TechGirl 2023: Using neurotechnology to optimise learning",
      date: "May 2023"
    },
    {
      title: "3rd Place: Non-Trivial - International AI Ethics Policy",
      date: "April 2023"
    }
  ],
  inTheNews: [
    {
      source: "UCLA Newsroom",
      description: "International Computer Science Undergraduate Charts an Early Path in AI and Neurotechnology from London to LA"
    },
    {
      source: "The Standard",
      description: "Young female stars crowned winners of 2023 TechGirl awards"
    },
    {
      source: "Meet The Leader",
      description: "Driving Diversity in Tech: TechGirl winners announced"
    }
  ],
  
  art: [
    {
      title: "Burger Eating",
      image: "/burger eating.png",
      span: 1,
      rowSpan: 2,
      aspectRatio: "portrait"
    },
    {
      title: "Pineapple Close-up",
      image: "/pineapple close up.png",
      span: 1,
      rowSpan: 1,
      aspectRatio: "landscape"
    },
    {
      title: "Moth and Flower",
      image: "/butterfly moth flower.png",
      span: 1,
      rowSpan: 2,
      aspectRatio: "portrait"
    },
    {
      title: "Dessert Cone",
      image: "/dessert cone.png",
      span: 1,
      rowSpan: 1,
      aspectRatio: "landscape"
    },
    {
      title: "Bird and Nest",
      image: "/bird nest.png",
      span: 1,
      rowSpan: 2,
      aspectRatio: "portrait"
    },
    {
      title: "Peeled Pineapple",
      image: "/pineapple sketch.png",
      span: 1,
      rowSpan: 3,
      aspectRatio: "portrait-large"
    }
  ]
}
