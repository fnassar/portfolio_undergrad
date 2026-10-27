// `title` / `summary` are { en, ar } pairs.
// `colors.a` / `colors.b` tint the two rotating rectangles while the project is in view.
// `loadWriteup` is optional: projects without it show the summary layout in the popup.

export const projects = [
  {
    id: "coda-dialect-id",
    category: "code",
    title: {
      en: "Arabic (CODA) Spelling Correction and Dialect ID",
      ar: "التصحيح الإملائي للعربية (CODA) وتحديد اللهجة",
    },
    summary: {
      en: "A research project with the CAMeL Lab at New York University: a multi-task model that takes in a sentence and outputs its correct dialectal spelling along with the dialect it was written in.",
      ar: "مشروع بحثي مع مختبر CAMeL في جامعة نيويورك: نموذج متعدد المهام يستقبل جملة ويُخرج تهجئتها الصحيحة باللهجة نفسها، إلى جانب اللهجة التي كُتبت بها.",
    },
    image: "/images/CS/CS-1.png",
    tags: ["NLP", "Python", "Research"],
    colors: { a: "#8b7cf6", b: "#5eead4" },
    links: [],
  },
  {
    id: "draw-the-word",
    category: "code",
    title: {
      en: "Draw the Word",
      ar: "ارسم الكلمة",
    },
    summary: {
      en: "A drawing game packaged in a Docker image. It uses part of the QuickDraw dataset to check whether a player correctly draws the word that comes up.",
      ar: "لعبة رسم مُجمّعة في صورة Docker، تستخدم جزءًا من بيانات QuickDraw لتتحقق مما إذا كان اللاعب قد رسم الكلمة التي تظهر له بشكل صحيح.",
    },
    image: "/images/CS/CS-6.jpg",
    tags: ["ML", "Docker", "Python"],
    colors: { a: "#f472b6", b: "#fbbf24" },
    links: [{ label: "GitHub", href: "https://github.com/fnassar/Guess-drawing-ml" }],
  },
  {
    id: "feeding-nemo",
    category: "code",
    title: {
      en: "Feeding Nemo",
      ar: "إطعام نيمو",
    },
    summary: {
      en: "A game built with p5.js (Python mode), inspired by Feeding Frenzy: control a fish and eat as many fish as you can without getting eaten by the bigger ones.",
      ar: "لعبة مبنية بمكتبة p5.js (بلغة Python) ومستوحاة من لعبة Feeding Frenzy: تحكّم بسمكة وكُل أكبر عدد ممكن من الأسماك دون أن تأكلك الأسماك الأكبر.",
    },
    image: "/images/CS/CS-3-thumb.jpg",
    tags: ["Game", "p5.js", "Python"],
    colors: { a: "#38bdf8", b: "#fb923c" },
    links: [{ label: "GitHub", href: "https://github.com/fnassar/feeding-nemo-fork" }],
  },
  {
    id: "rise-app",
    category: "code",
    title: {
      en: "RISE: Product Application Design",
      ar: "RISE: تصميم تطبيق لمنتج",
    },
    summary: {
      en: "Using data collected from a New York startup (Rise New York, now Solstice), we prototyped an app that keeps the company in touch with its customers after purchase.",
      ar: "اعتمادًا على بيانات جمعناها من شركة ناشئة في نيويورك (Rise New York، واسمها الآن Solstice)، صمّمنا نموذجًا أوليًا لتطبيق يُبقي الشركة على تواصل مع عملائها بعد الشراء.",
    },
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
    title: {
      en: "Metric Calculator",
      ar: "حاسبة القياسات",
    },
    summary: {
      en: "A Python package that converts ages (days, seconds…), time zones, number systems and distance measures.",
      ar: "حزمة Python تحوّل الأعمار (بالأيام والثواني…) والمناطق الزمنية وأنظمة الأعداد ووحدات المسافة.",
    },
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
    title: {
      en: "Cookbook",
      ar: "كتاب الطبخ",
    },
    // TODO: replace placeholder summary
    summary: {
      en: "A containerised recipe app built with Docker.",
      ar: "تطبيق وصفات يعمل داخل حاويات Docker.",
    },
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
    title: {
      en: "Love is the Universal Language",
      ar: "الحب لغة عالمية",
    },
    summary: {
      en: "A journey through love, poetry and a century-old pottery bowl: a user's love story becomes a secret Morse code animation. The Latin text is forever deleted; the Morse code is forever remembered.",
      ar: "رحلة عبر الحب والشعر ووعاء فخاري عمره قرن من الزمان: تتحول قصة حب المستخدم إلى رسوم متحركة سرية بشفرة مورس. يُحذف النص اللاتيني إلى الأبد، وتبقى شفرة مورس محفوظة إلى الأبد.",
    },
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
    title: {
      en: "Digital Doodle",
      ar: "خربشة رقمية",
    },
    summary: {
      en: "An interactive drawing tool built with Processing and Arduino: draw on a screen with your hands using five generative brushes and a colour selector.",
      ar: "أداة رسم تفاعلية مبنية باستخدام Processing وArduino: ارسم على الشاشة بيديك باستخدام خمس فُرَش توليدية ومحدد للألوان.",
    },
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
    title: {
      en: "LiveCoding: Blur!",
      ar: "برمجة حية: ضبابية!",
    },
    summary: {
      en: "A live audio-visual performance using Hydra for visuals and TidalCycles for music on Flok, built around a series of blur effects controlled live.",
      ar: "عرض سمعي بصري حي يستخدم Hydra للمرئيات وTidalCycles للموسيقى على منصة Flok، ويقوم على سلسلة من تأثيرات الضبابية يُتحكم بها مباشرة.",
    },
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
    title: {
      en: "Slenderman's Scavenger Hunt",
      ar: "مطاردة كنز سلندرمان",
    },
    summary: {
      en: "A multiplayer scavenger hunt that revives memories of places around campus. Players use their phone camera and ml5.js object detection to find hidden pages.",
      ar: "لعبة بحث عن الكنز جماعية تُحيي ذكريات أماكن في الحرم الجامعي. يستخدم اللاعبون كاميرا الهاتف وخاصية التعرف على الأشياء في ml5.js للعثور على صفحات مخفية.",
    },
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
    title: {
      en: "Performing Robot: FIFI",
      ar: "الروبوت المؤدي: فيفي",
    },
    summary: {
      en: "A dancing, talking robot built for a theatrical performance, shaped by a collection of identities and memorable ideas.",
      ar: "روبوت يرقص ويتكلم صُنع لعرض مسرحي، وتشكّل من مجموعة من الهويات والأفكار التي لا تُنسى.",
    },
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
    title: {
      en: "World Map Search",
      ar: "البحث في خريطة العالم",
    },
    summary: {
      en: "A website for searching countries, seeing where they are on the map and learning a little about each one.",
      ar: "موقع للبحث عن الدول ورؤية مواقعها على الخريطة والتعرف على معلومات بسيطة عن كل منها.",
    },
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
    title: {
      en: "Howl Are You, Mr. Rabbit?",
      ar: "كيف حالك يا سيد أرنب؟",
    },
    // TODO: replace placeholder summary
    summary: {
      en: "An interactive web piece.",
      ar: "عمل تفاعلي على الويب.",
    },
    image: "/images/IM/display/IM-4.jpg",
    tags: ["Web"],
    colors: { a: "#fb7185", b: "#93c5fd" },
    links: [{ label: "Live", href: "https://howl-are-you-mr-rabbit.glitch.me/" }],
  },
  {
    id: "lost-found-reborn",
    category: "art",
    title: {
      en: "Lost, Found & Reborn",
      ar: "ضاع، وُجد، ووُلد من جديد",
    },
    summary: {
      en: "A proposed virtual gallery about the environment.",
      ar: "معرض افتراضي مقترح عن البيئة.",
    },
    image: "https://raw.githubusercontent.com/fnassar/ArtGallary/master/tunnel.jpg",
    tags: ["Web", "Gallery"],
    colors: { a: "#a3e635", b: "#c084fc" },
    links: [{ label: "Live", href: "https://fnassar.github.io/ArtGallary/" }],
  },
  {
    id: "find-your-destination",
    category: "art",
    title: {
      en: "Find Your Destination",
      ar: "اعثر على وجهتك",
    },
    summary: {
      en: "A website that tackles passport hierarchy: pick your passport and destination to see whether you can go and what kind of visa you need.",
      ar: "موقع يتناول تفاوت قوة جوازات السفر: اختر جوازك ووجهتك لتعرف إن كان بإمكانك السفر ونوع التأشيرة التي تحتاجها.",
    },
    image: "https://fnassar.github.io/UIMP5/assets/images/maldives.jpg",
    tags: ["Web", "Data"],
    colors: { a: "#2dd4bf", b: "#fcd34d" },
    links: [{ label: "Live", href: "https://fnassar.github.io/UIMP5/" }],
  },
  {
    id: "mandala",
    category: "art",
    title: {
      en: "Mandala with Prof. Aaron Sherwood",
      ar: "ماندالا مع البروفيسور آرون شيروود",
    },
    summary: {
      en: "Assisted in building the physical structure of the mandala.",
      ar: "ساعدتُ في بناء الهيكل المادي للماندالا.",
    },
    image: "/images/other/O-3-thumb.jpg",
    tags: ["assisted", "Installation", "Fabrication"],
    colors: { a: "#fda4af", b: "#a5b4fc" },
    links: [{ label: "Work", href: "https://aaron-sherwood.com/works/mandala/" }],
  },
  {
    id: "micro-pollen",
    category: "art",
    title: {
      en: "MICRO: Pollen with Prof. Aaron Sherwood",
      ar: "MICRO: حبوب اللقاح مع البروفيسور آرون شيروود",
    },
    // TODO: describe your role (this used to repeat the Mandala text)
    summary: {
      en: "Assisted in building the installation.",
      ar: "ساعدتُ في بناء العمل التركيبي.",
    },
    image: "/images/other/O-4.jpeg",
    tags: ["assisted", "Installation", "Fabrication"],
    colors: { a: "#fde047", b: "#86efac" },
    links: [{ label: "Work", href: "https://aaron-sherwood.com/works/micropollen/" }],
  },
];

export const projectsByCategory = Object.groupBy(projects, (project) => project.category);
