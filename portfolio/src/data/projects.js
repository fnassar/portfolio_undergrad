// `colors.a` / `colors.b` tint the two rotating rectangles while the project is in view.
// `loadWriteup` is optional: projects without it show the summary layout in the popup.

export const projects = [
  {
    id: "coda-dialect-id",
    category: "code",
    title: "Arabic (CODA) Spelling Correction and Dialect ID",
    summary:
      "A research project with the CAMeL Lab at New York University: a multi-task model that takes in a sentence and outputs its correct dialectal spelling along with the dialect it was written in.",
    image: "/images/CS/CS-1.png",
    tags: ["NLP", "Python", "Research"],
    colors: { a: "#8b7cf6", b: "#5eead4" },
    links: [],
  },
  {
    id: "draw-the-word",
    category: "code",
    title: "Draw the Word",
    summary:
      "A drawing game packaged in a Docker image. It uses part of the QuickDraw dataset to check whether a player correctly draws the word that comes up.",
    image: "/images/CS/CS-6.jpg",
    tags: ["ML", "Docker", "Python"],
    colors: { a: "#f472b6", b: "#fbbf24" },
    links: [{ label: "GitHub", href: "https://github.com/fnassar/Guess-drawing-ml" }],
  },
  {
    id: "feeding-nemo",
    category: "code",
    title: "Feeding Nemo",
    summary:
      "A game built with p5.js (Python mode), inspired by Feeding Frenzy: control a fish and eat as many fish as you can without getting eaten by the bigger ones.",
    image: "/images/CS/CS-3-thumb.jpg",
    tags: ["Game", "p5.js", "Python"],
    colors: { a: "#38bdf8", b: "#fb923c" },
    links: [{ label: "GitHub", href: "https://github.com/fnassar/feeding-nemo-fork" }],
  },
  {
    id: "rise-app",
    category: "code",
    title: "RISE: Product Application Design",
    summary:
      "Using data collected from a New York startup (Rise New York, now Solstice), we prototyped an app that keeps the company in touch with its customers after purchase.",
    image: "/images/CS/CS-5-thumb.jpg",
    tags: ["Product", "Figma", "Research"],
    colors: { a: "#a78bfa", b: "#f9a8d4" },
    links: [
      { label: "GitHub", href: "https://github.com/fnassar/Prototyping_figma" },
      { label: "Solstice", href: "https://usesolstice.com/" },
    ],
  },
  {
    id: "metric-calculator",
    category: "code",
    title: "Metric Calculator",
    summary:
      "A Python package that converts ages (days, seconds…), time zones, number systems and distance measures.",
    image: "/images/CS/CS-4.jpeg",
    tags: ["Python", "Package"],
    colors: { a: "#34d399", b: "#818cf8" },
    links: [
      { label: "GitHub", href: "https://github.com/fnassar/python-fun-calc-package" },
    ],
  },
  {
    id: "cookbook",
    category: "code",
    title: "Cookbook",
    // TODO: replace placeholder summary
    summary: "A containerised recipe app built with Docker.",
    image: "/images/CS/CS-2.gif",
    tags: ["Docker", "Full-stack"],
    colors: { a: "#fca5a5", b: "#fde68a" },
    links: [
      { label: "GitHub", href: "https://github.com/fnassar/Cookbook-Docker/tree/main" },
    ],
  },
  {
    id: "morse-code",
    category: "art",
    title: "Love is the Universal Language",
    summary:
      "A journey through love, poetry and a century-old pottery bowl: a user's love story becomes a secret Morse code animation. The Latin text is forever deleted; the Morse code is forever remembered.",
    image: "/images/IM/display/IM-5-thumb.jpg",
    tags: ["p5.js", "Installation", "Louvre Abu Dhabi"],
    team: ["Genie Hou", "Jannah Mokhtar"],
    colors: { a: "#f472b6", b: "#c4b5fd" },
    links: [{ label: "GitHub", href: "https://github.com/fnassar/morseCode/" }],
    loadWriteup: () => import("../writeups/MorseCode.jsx"),
  },
  {
    id: "digital-doodle",
    category: "art",
    title: "Digital Doodle",
    summary:
      "An interactive drawing tool built with Processing and Arduino: draw on a screen with your hands using five generative brushes and a colour selector.",
    image: "/images/IM/display/IM-1.jpg",
    tags: ["Processing", "Arduino", "Physical computing"],
    team: ["Ingy el Sheikh"],
    colors: { a: "#facc15", b: "#60a5fa" },
    links: [],
    loadWriteup: () => import("../writeups/DigitalDoodle.jsx"),
  },
  {
    id: "live-coding-blur",
    category: "art",
    title: "LiveCoding: Blur!",
    summary:
      "A live audio-visual performance using Hydra for visuals and TidalCycles for music on Flok, built around a series of blur effects controlled live.",
    image: "/images/IM/display/IM-6-thumb.jpg",
    tags: ["Hydra", "TidalCycles", "Performance"],
    team: ["Marta", "Bato", "Jeongin"],
    colors: { a: "#22d3ee", b: "#e879f9" },
    links: [
      {
        label: "GitHub",
        href: "https://github.com/fnassar/live_coding_final/blob/main/flock.js",
      },
    ],
    loadWriteup: () => import("../writeups/LiveCodingBlur.jsx"),
  },
  {
    id: "slenderman",
    category: "art",
    title: "Slenderman's Scavenger Hunt",
    summary:
      "A multiplayer scavenger hunt that revives memories of places around campus. Players use their phone camera and ml5.js object detection to find hidden pages.",
    image: "/images/IM/display/IM-2.png",
    tags: ["ml5.js", "Socket.io", "Mobile"],
    team: ["Andres Ugartechea"],
    colors: { a: "#e5e7eb", b: "#ef4444" },
    links: [
      { label: "GitHub", href: "https://github.com/fnassar/Slenderman" },
      { label: "Play", href: "https://slenderman-scavenger-hunt.glitch.me/" },
    ],
    loadWriteup: () => import("../writeups/SlenderMan.jsx"),
  },
  {
    id: "fifi-robot",
    category: "art",
    title: "Performing Robot: FIFI",
    summary:
      "A dancing, talking robot built for a theatrical performance, shaped by a collection of identities and memorable ideas.",
    image: "/images/IM/display/IM-11-thumb.jpg",
    tags: ["Robotics", "Arduino", "Performance"],
    team: ["Jannah Mokhtar"],
    colors: { a: "#f59e0b", b: "#a78bfa" },
    links: [{ label: "Video", href: "https://www.youtube.com/shorts/Z11REMjYteA" }],
    loadWriteup: () => import("../writeups/FifiRobot.jsx"),
  },
  {
    id: "world-map",
    category: "art",
    title: "World Map Search",
    summary:
      "A website for searching countries, seeing where they are on the map and learning a little about each one.",
    image: "/images/IM/display/IM-3.jpg",
    tags: ["Web", "API"],
    colors: { a: "#4ade80", b: "#38bdf8" },
    links: [
      { label: "Live", href: "https://fnassar.github.io/connectionslab/Project1/" },
    ],
  },
  {
    id: "howl-mr-rabbit",
    category: "art",
    title: "Howl Are You, Mr. Rabbit?",
    // TODO: replace placeholder summary
    summary: "An interactive web piece.",
    image: "/images/IM/display/IM-4.jpg",
    tags: ["Web"],
    colors: { a: "#fb7185", b: "#93c5fd" },
    links: [{ label: "Live", href: "https://howl-are-you-mr-rabbit.glitch.me/" }],
  },
  {
    id: "lost-found-reborn",
    category: "art",
    title: "Lost, Found & Reborn",
    summary: "A proposed virtual gallery about the environment.",
    image: "https://raw.githubusercontent.com/fnassar/ArtGallary/master/tunnel.jpg",
    tags: ["Web", "Gallery"],
    colors: { a: "#a3e635", b: "#c084fc" },
    links: [{ label: "Live", href: "https://fnassar.github.io/ArtGallary/" }],
  },
  {
    id: "find-your-destination",
    category: "art",
    title: "Find Your Destination",
    summary:
      "A website that tackles passport hierarchy: pick your passport and destination to see whether you can go and what kind of visa you need.",
    image: "https://fnassar.github.io/UIMP5/assets/images/maldives.jpg",
    tags: ["Web", "Data"],
    colors: { a: "#2dd4bf", b: "#fcd34d" },
    links: [{ label: "Live", href: "https://fnassar.github.io/UIMP5/" }],
  },
  {
    id: "mandala",
    category: "art",
    title: "Mandala with Prof. Aaron Sherwood",
    summary: "Assisted in building the physical structure of the mandala.",
    image: "/images/other/O-3-thumb.jpg",
    tags: ["assisted", "Installation", "Fabrication"],
    colors: { a: "#fda4af", b: "#a5b4fc" },
    links: [{ label: "Work", href: "https://aaron-sherwood.com/works/mandala/" }],
  },
  {
    id: "micro-pollen",
    category: "art",
    title: "MICRO: Pollen with Prof. Aaron Sherwood",
    // TODO: describe your role (this used to repeat the Mandala text)
    summary: "Assisted in building the installation.",
    image: "/images/other/O-4.jpeg",
    tags: ["assisted", "Installation", "Fabrication"],
    colors: { a: "#fde047", b: "#86efac" },
    links: [{ label: "Work", href: "https://aaron-sherwood.com/works/micropollen/" }],
  },
];

export const projectsByCategory = Object.groupBy(projects, (project) => project.category);
