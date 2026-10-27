// TODO: fill in roles, dates and bullets. Each entry becomes one node in the Experience section.
// Text fields are { en, ar } pairs; bullets is a list of pairs.
// type sets the node shape: "research" (diamond), "assisted" (dashed), "education" (circle)

export const experience = [
  {
    id: "camel-lab",
    org: { en: "CAMeL Lab, NYU", ar: "مختبر CAMeL، جامعة نيويورك" },
    role: { en: "Research", ar: "بحث" },
    period: "",
    type: "research",
    color: "#8b7cf6",
    summary: {
      en: "Building a multi-task model for Arabic (CODA) spelling correction and dialect identification.",
      ar: "بناء نموذج متعدد المهام للتصحيح الإملائي للعربية (CODA) وتحديد اللهجات.",
    },
    bullets: [],
    tags: ["NLP", "Python"],
  },
  {
    id: "aaron-sherwood",
    org: { en: "Aaron Sherwood Studio", ar: "استوديو آرون شيروود" },
    role: { en: "Fabrication Assistant", ar: "مساعدة في التصنيع" },
    period: "",
    type: "assisted",
    color: "#fda4af",
    summary: {
      en: "Helped build the physical structures for the Mandala and MICRO installations.",
      ar: "ساعدتُ في بناء الهياكل المادية لعملَي ماندالا وMICRO التركيبيين.",
    },
    bullets: [],
    tags: ["Installation", "Fabrication"],
  },
  {
    id: "nyu",
    org: { en: "New York University", ar: "جامعة نيويورك" },
    role: {
      en: "Computer Science & Interactive Media",
      ar: "علوم الحاسوب والوسائط التفاعلية",
    },
    period: "",
    type: "education",
    color: "#5eead4",
    summary: {
      en: "Undergraduate studies across computer science and interactive media.",
      ar: "دراسة جامعية تجمع بين علوم الحاسوب والوسائط التفاعلية.",
    },
    bullets: [],
    tags: [],
  },
];
