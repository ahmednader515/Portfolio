const navLinks = [
  {
    name: "أعمالي",
    link: "#work",
  },
  {
    name: "خبرتي",
    link: "#experience",
  },
  {
    name: "مهاراتي",
    link: "#skills",
  },
  {
    name: "اراء العملاء",
    link: "#testimonials",
  },
];

const words = [
  { text: "أفكار", imgPath: "/images/ideas.svg" },
  { text: "مفاهيم", imgPath: "/images/concepts.svg" },
  { text: "تصاميم", imgPath: "/images/designs.svg" },
  { text: "أكواد", imgPath: "/images/code.svg" },
  { text: "أفكار", imgPath: "/images/ideas.svg" },
  { text: "مفاهيم", imgPath: "/images/concepts.svg" },
  { text: "تصاميم", imgPath: "/images/designs.svg" },
  { text: "أكواد", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "أعلي جودة",
    desc: "تقديم نتائج عالية الجودة مع الحفاظ على الاهتمام بكل التفاصيل.",
  },
  {
    imgPath: "/images/chat.png",
    title: "تواصل سهل",
    desc: "أبقيك على اطلاع في كل خطوة لضمان الشفافية والوضوح.",
  },
  {
    imgPath: "/images/time.png",
    title: "التسليم في الوقت المحدد",
    desc: "أضمن إنجاز المشاريع في الموعد المحدد، بجودة عالية واهتمام بأدق التفاصيل.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "مارس 2020 - الحاضر",
    responsibilities: [
      "قمت بتصميم وتطوير وصيانة الميزات الموجهة للمستخدمين على موقع استوديو مورديسو، مع الحرص على تحقيق تصميم متجاوب، وأداء عالي، وتجربة مستخدم سلسة.",
      "قمت بتصميم واجهات المستخدم وتجربة المستخدم بنفسي لضمان تقديم تجربة سلسة وسهلة للمستخدمين.",
      "قمت بتحسين تطبيقات الويب لتحقيق أقصى سرعة وقابلية للتوسع.",
    ],
  },
  {
    review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Back End Developer",
    date: "مايو 2022 - الحاضر",
    responsibilities: [
      "قمت بتطوير موقع تجارة إلكترونية متكامل يشمل الواجهة الأمامية والخلفية مع نظام إدارة منتجات ودفع إلكتروني",
      "عملت مع مهندسي الواجهة الخلفية على دمج واجهات برمجة التطبيقات (APIs) بسلاسة مع الواجهة الأمامية.",
      "ساهمت في مشاريع مفتوحة المصدر مرتبطة بتطوير مواقع التجارة الإلكترونية، مما ساعد في تحسين الأداء وتوسيع الوظائف ضمن هذا النوع من الأنظمة.",
    ],
  },
  {
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.svg",
    title: "Mern Stack Developer",
    date: "أبريل 2024 - الحاضر",
    responsibilities: [
      "قمت بتطوير موقع تجارة إلكترونية متكامل يشمل الواجهة الأمامية والخلفية مع نظام لإدارة المنتجات والدفع الإلكتروني",
      "صممت واجهات المستخدم وتجربة المستخدم لضمان تجربة سلسة وسهلة للمستخدمين",
      "طوّرت تطبيقات ويب باستخدام حزمة تتضمن قواعد بيانات غير علائقية وخوادم تطبيقات بلغة جافا سكريبت، مع دمج خدمات الواجهة الخلفية مفتوحة المصدر لإدارة المستخدمين والبيانات.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: " أحمد الزهراني، صاحب متجر إلكتروني",
    mentions: "",
    review:
      "أحمد قدّم شغل رائع بكل المقاييس! طوّر موقعنا بسرعة وبدقة، وخلّى تجربة المستخدم سلسة وسهلة جداً. ما كنت أتخيل النتيجة تكون بهذا الشكل الاحترافي.",
    imgPath: "/images/client1.png",
  },
  {
    name: "محمد سيد, مدير مشروع",
    mentions: "",
    review:
      "تعاملي مع أحمد كان ممتاز من البداية للنهاية. فهم متطلباتي من أول مرة، وسلّم الموقع بتصميم جميل ومتجاوب على كل الأجهزة. أنصح بالتعامل معه بدون تردد",
    imgPath: "/images/client3.png",
  },
  {
    name: "يوسف الخطيب، مطور محتوى",
    mentions: "",
    review:
      "أحمد مو بس مطور، هو شريك في النجاح. التزامه بالمواعيد وحرصه على التفاصيل خلاني أرتاح خلال كل مراحل العمل. الدعم بعد التسليم كان أكثر من رائع",
    imgPath: "/images/client2.png",
  },
  {
    name: "ماجد العتيبي، مدير مشروع",
    mentions: "",
    review:
      "أحمد عنده قدرة رائعة على ترجمة الأفكار إلى موقع واقعي ومميز. كان يسمعني باهتمام وينفذ بسرعة ومرونة. تجربة ممتازة وأكيد راح أكررها.",
    imgPath: "/images/client5.png",
  },
  {
    name: "خالد إبراهيم، رائد أعمال",
    mentions: "",
    review:
      "كنت أبحث عن شخص يفهم فكرتي ويحولها لموقع حقيقي بدون تعقيدات. أحمد كان الشخص المناسب تماماً. مبدع، منظم، وسهل في التعامل.",
    imgPath: "/images/client4.png",
  },
  {
    name: "خالد إبراهيم، رائد أعمال",
    mentions: "",
    review:
      "أحمد أبدع في تصميم وتطوير موقعي من الصفر. كان دائماً متجاوب مع التعديلات والأفكار، وخلّى كل خطوة في المشروع واضحة وسلسة. النتيجة كانت موقع أنيق وسريع وعملي",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
