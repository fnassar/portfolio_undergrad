// Each entry becomes one node in the Experience section, ordered newest first by start date.
// Text fields are { en, ar } pairs; bullets is a list of pairs.
// type sets the node shape: "work" (square), "research" (diamond), "assisted" (dashed), "education" (circle)

export const experience = [
  {
    id: "san3a-tech",
    org: { en: "San3a Tech", ar: "صنعة تك" },
    role: { en: "Physical Computing Instructor", ar: "مدرّبة حوسبة فيزيائية" },
    period: "Jun 2026 – Present",
    type: "work",
    color: "#fbbf24",
    summary: {
      en: "Mentoring small groups through hands-on IoT activities.",
      ar: "إرشاد مجموعات صغيرة خلال أنشطة عملية في إنترنت الأشياء.",
    },
    bullets: [
      {
        en: "Mentor a group of 4–6 participants through hands-on IoT activities, delivering warm-ups, instructions and technical support to keep sessions engaging and on track.",
        ar: "أرشد مجموعة من 4 إلى 6 مشاركين خلال أنشطة عملية في إنترنت الأشياء، من خلال تمارين تمهيدية وتعليمات ودعم تقني يحافظ على تفاعل الجلسات وسيرها.",
      },
      {
        en: "Prepare session content, materials and equipment ahead of time, coordinating with the instructional team to align on delivery and report on progress.",
        ar: "أُعدّ محتوى الجلسات والمواد والمعدات مسبقًا، وأنسّق مع فريق التدريب لتوحيد طريقة التقديم ومتابعة التقدّم.",
      },
    ],
    tags: ["IoT", "Arduino", "Teaching"],
  },
  {
    id: "injaz-tech",
    org: { en: "Injaz-Tech", ar: "إنجاز تك" },
    role: { en: "Front End Engineer", ar: "مهندسة واجهات أمامية" },
    period: "Aug 2024 – Present",
    type: "work",
    color: "#60a5fa",
    summary: {
      en: "Building Angular Micro Frontend platforms for Tahakom (KSA): an intelligent dispatching system and an underground construction monitoring platform (RIPC).",
      ar: "بناء منصات Angular بمعمارية الواجهات الأمامية المصغّرة لصالح تحكّم (السعودية): نظام إرسال ذكي ومنصة لمراقبة الإنشاءات تحت الأرض (RIPC).",
    },
    bullets: [
      {
        en: "Lead the design and implementation of an Angular Micro Frontend architecture using single-spa, keeping front-end systems modular and scalable across client projects.",
        ar: "أقود تصميم وتنفيذ معمارية واجهات أمامية مصغّرة باستخدام Angular وsingle-spa، لتبقى الأنظمة قابلة للتوسع وسهلة الصيانة عبر مشاريع العملاء.",
      },
      {
        en: "Intelligent Dispatching System (Apr 2025 – Present): built core UI components, backend CRUD endpoints and cron jobs, with an urban vehicle monitoring system as the first use case.",
        ar: "نظام الإرسال الذكي (أبريل 2025 – الآن): بنيت مكونات الواجهة الأساسية ونقاط CRUD الخلفية والمهام المجدولة، وكان نظام مراقبة المركبات في المدن أول حالة استخدام.",
      },
      {
        en: "Built GIS features with the Google Maps API for map-based, client-facing interfaces.",
        ar: "طوّرت ميزات نظم المعلومات الجغرافية باستخدام Google Maps API لواجهات قائمة على الخرائط.",
      },
      {
        en: "RIPC (Sep 2024 – Apr 2025): automated testing with Selenium, JUnit and JMeter, then moved into Angular feature development after a major system update.",
        ar: "RIPC (سبتمبر 2024 – أبريل 2025): أتمتة الاختبارات باستخدام Selenium وJUnit وJMeter، ثم الانتقال إلى تطوير ميزات Angular بعد تحديث كبير للنظام.",
      },
      {
        en: "Extended and maintained Java/Spring Boot services, adding features, fixing defects and updating business logic.",
        ar: "طوّرت وصنت خدمات Java/Spring Boot بإضافة ميزات وإصلاح الأخطاء وتحديث منطق العمل.",
      },
    ],
    tags: ["Angular", "single-spa", "Java", "Node.js", "Selenium"],
  },
  {
    id: "camel-lab",
    org: { en: "CAMeL Lab, NYU", ar: "مختبر CAMeL، جامعة نيويورك" },
    role: { en: "Student Researcher", ar: "باحثة طالبة" },
    period: "Sep 2023 – May 2024",
    type: "research",
    color: "#8b7cf6",
    summary: {
      en: "Building a multi-task model for Arabic (CODA) spelling correction and dialect identification.",
      ar: "بناء نموذج متعدد المهام للتصحيح الإملائي للعربية (CODA) وتحديد اللهجات.",
    },
    bullets: [
      {
        en: "Built a Dialectal Arabic spelling correction model in PyTorch on AraBART, raising accuracy from 74% to 82% by adding dialect prediction and hallucination detection.",
        ar: "بنيت نموذجًا للتصحيح الإملائي للعربية العامية باستخدام PyTorch وAraBART، ورفعت الدقة من 74% إلى 82% بإضافة التنبؤ باللهجة واكتشاف الهلوسة.",
      },
      {
        en: 'Co-authored "Exploiting Dialect Identification in Automatic Dialectal Text Normalization" as my graduation capstone.',
        ar: 'شاركت في تأليف ورقة "Exploiting Dialect Identification in Automatic Dialectal Text Normalization" كمشروع تخرّجي.',
      },
      {
        en: "Wrote Bash scripts to automate data preprocessing and evaluation in a Linux environment.",
        ar: "كتبت سكربتات Bash لأتمتة معالجة البيانات والتقييم في بيئة Linux.",
      },
    ],
    tags: ["NLP", "Python", "PyTorch"],
  },
  {
    id: "michael-shiloh",
    org: { en: "Prof. Michael Shiloh, NYU", ar: "البروفيسور مايكل شيلوه، جامعة نيويورك" },
    role: { en: "Student Research Assistant", ar: "مساعدة بحث طلابية" },
    period: "Aug 2023 – Dec 2023",
    type: "assisted",
    color: "#a3e635",
    summary: {
      en: "Physical computing projects, including setting up a Raspberry Pi for a communication robot.",
      ar: "أعمال في الحوسبة الفيزيائية، منها إعداد Raspberry Pi لروبوت تواصل.",
    },
    bullets: [],
    tags: ["Raspberry Pi", "Robotics"],
  },
  {
    id: "rdi-eg",
    org: { en: "RDI-EG", ar: "RDI-EG" },
    role: { en: "ML Summer Intern", ar: "متدرّبة صيفية في تعلّم الآلة" },
    period: "Jun 2023 – Jul 2023",
    type: "work",
    color: "#f472b6",
    summary: {
      en: "Built an Arabic named-entity recognition model reaching an 80% F1 score.",
      ar: "بنيت نموذجًا للتعرّف على الكيانات المسمّاة في العربية بدرجة F1 بلغت 80%.",
    },
    bullets: [],
    tags: ["NLP", "Python"],
  },
  {
    id: "midor",
    org: {
      en: "Middle East Oil Refinery (MIDOR)",
      ar: "شركة الشرق الأوسط لتكرير البترول (ميدور)",
    },
    role: { en: "IT Summer Intern", ar: "متدرّبة صيفية في تقنية المعلومات" },
    period: "Jul 2022 – Aug 2022",
    type: "work",
    color: "#fb923c",
    summary: {
      en: "Windows systems administration: user accounts, groups, security policies and Active Directory.",
      ar: "إدارة أنظمة Windows: حسابات المستخدمين والمجموعات وسياسات الأمان وActive Directory.",
    },
    bullets: [
      {
        en: "Configured user accounts, groups and security policies, and set up a permission-controlled directory structure with Active Directory.",
        ar: "هيّأت حسابات المستخدمين والمجموعات وسياسات الأمان، وأعددت بنية مجلدات مضبوطة الصلاحيات باستخدام Active Directory.",
      },
      {
        en: "Practiced disk partitioning, file permissions and resource usage monitoring.",
        ar: "تدرّبت على تقسيم الأقراص وصلاحيات الملفات ومراقبة استهلاك الموارد.",
      },
    ],
    tags: ["Windows", "Active Directory"],
  },
  {
    id: "im-lab",
    org: {
      en: "Interactive Media Lab, NYU",
      ar: "مختبر الوسائط التفاعلية، جامعة نيويورك",
    },
    role: { en: "Lab Assistant", ar: "مساعدة مختبر" },
    period: "Jan 2022 – Dec 2023",
    type: "assisted",
    color: "#2dd4bf",
    summary: {
      en: "Ran the Interactive Media lab and built tools for students and staff.",
      ar: "أدرت مختبر الوسائط التفاعلية وبنيت أدوات للطلاب والموظفين.",
    },
    bullets: [
      {
        en: "Built tools with electronics and microcontrollers for students and staff across the lab.",
        ar: "بنيت أدوات بالإلكترونيات والمتحكّمات الدقيقة للطلاب والموظفين في المختبر.",
      },
      {
        en: "Managed and organized the lab 8–15 hours a week, supporting students with tools and projects.",
        ar: "أدرت المختبر ونظّمته بين 8 و15 ساعة أسبوعيًا، ودعمت الطلاب في أدواتهم ومشاريعهم.",
      },
    ],
    tags: ["Arduino", "Electronics"],
  },
  {
    id: "aaron-sherwood",
    org: { en: "Aaron Sherwood Studio", ar: "استوديو آرون شيروود" },
    role: { en: "Fabrication Assistant", ar: "مساعدة في التصنيع" },
    period: "Jan 2022 – Jun 2022",
    type: "assisted",
    color: "#fda4af",
    summary: {
      en: "Helped build the physical structures for the Mandala and MICRO installations.",
      ar: "ساعدتُ في بناء الهياكل المادية لعملَي ماندالا وMICRO التركيبيين.",
    },
    bullets: [
      {
        en: "Helped complete Wooden Mandala, using stepper motors that change direction with a breathing motion, and worked on recreating Micro Pollen.",
        ar: "ساعدت في إكمال عمل الماندالا الخشبية باستخدام محركات خطوية تغيّر اتجاهها بحركة تشبه التنفّس، وعملت على إعادة إنشاء Micro Pollen.",
      },
    ],
    tags: ["Installation", "Fabrication"],
  },
  {
    id: "nyu",
    org: { en: "New York University", ar: "جامعة نيويورك" },
    role: {
      en: "Computer Science & Interactive Media",
      ar: "علوم الحاسوب والوسائط التفاعلية",
    },
    period: "2020 – 2024",
    type: "education",
    color: "#5eead4",
    summary: {
      en: "B.Sc. in Computer Science and Interactive Media at NYU Abu Dhabi, GPA 3.69.",
      ar: "بكالوريوس في علوم الحاسوب والوسائط التفاعلية من جامعة نيويورك أبوظبي، بمعدل 3.69.",
    },
    bullets: [],
    tags: [],
  },
];
