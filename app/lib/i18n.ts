export type Locale = "uz" | "ru" | "en";

export const localeOptions: Array<{ value: Locale; label: string }> = [
  { value: "uz", label: "UZ" },
  { value: "ru", label: "RU" },
  { value: "en", label: "EN" }
];

type TranslationShape = {
  nav: {
    problem: string;
    architecture: string;
    stakeholders: string;
    technology: string;
    governance: string;
    roadmap: string;
    partners: string;
    faq: string;
    startPartnership: string;
    languageLabel: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    annualLabel: string;
    annualUnits: string;
    dataPoints: Array<{ title: string; detail: string }>;
  };
  architecture: {
    eyebrow: string;
    title: string;
    stageLabel: string;
    flow: string[];
  };
  stakeholder: {
    eyebrow: string;
    title: string;
    columns: Array<{ title: string; bullets: string[] }>;
  };
  technology: {
    eyebrow: string;
    title: string;
    bullets: string[];
  };
  governance: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  roadmap: {
    eyebrow: string;
    title: string;
    phases: Array<{ year: string; title: string; description: string }>;
    kpis: Array<{ metric: string; label: string }>;
  };
  partners: {
    eyebrow: string;
    title: string;
    logos: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  footer: {
    newsletterTitle: string;
    newsletterDescription: string;
    emailPlaceholder: string;
    subscribe: string;
    company: string;
    technology: string;
    contacts: string;
    companyLinks: Array<{ href: string; label: string }>;
    technologyLinks: Array<{ href: string; label: string }>;
    emailLabel: string;
    phoneLabel: string;
    location: string;
    rights: string;
    terms: string;
    privacy: string;
  };
};

export const translations: Record<Locale, TranslationShape> = {
  uz: {
    nav: {
      problem: "Muammo",
      architecture: "Arxitektura",
      stakeholders: "Tomonlar",
      technology: "Texnologiya",
      governance: "Shaffoflik",
      roadmap: "Yo'l xaritasi",
      partners: "Hamkorlar",
      faq: "FAQ",
      startPartnership: "Hamkorlikni boshlash",
      languageLabel: "Til"
    },
    hero: {
      badge: "ESG infratuzilma platformasi",
      headline: "O'zbekiston uchun barqaror qayta ishlash infratuzilmasi",
      subheadline:
        "COBY plastik yig'ishni Korzinka va 365 mahsulotlari bilan integratsiyalangan xavfsiz EcoCoin rag'bat tizimi bilan birlashtiradi.",
      primaryCta: "Hamkorlikni boshlash",
      secondaryCta: "Texnologiyani ko'rish"
    },
    problem: {
      eyebrow: "Muammo va ma'lumotlar",
      title: "Shahar muammosini hal qilish uchun o'lchanadigan infratuzilma kerak",
      annualLabel: "Yillik hajm bahosi",
      annualUnits: "Yiliga plastik birliklar",
      dataPoints: [
        {
          title: "Qayta ishlash darajasi past",
          detail: "Materiallarni qayta tiklash ko'rsatkichi shahar chiqindisi o'sish sur'atidan ortda qolmoqda."
        },
        {
          title: "Shahar chiqindilariga ta'sir",
          detail: "Yig'ilmagan plastik transport nuqtalari va jamoat hududlarida bosimni oshiradi."
        }
      ]
    },
    architecture: {
      eyebrow: "Yechim arxitekturasi",
      title: "Integratsiyalashgan qayta ishlash ekotizimi",
      stageLabel: "Bosqich",
      flow: ["Qurilma", "Bulut platformasi", "Retail sodiqlik", "Foydalanuvchi mukofoti"]
    },
    stakeholder: {
      eyebrow: "Tomonlar uchun qiymat",
      title: "Ekotizim bo'ylab institutsional natijalar",
      columns: [
        {
          title: "Retail",
          bullets: ["Sodiqlik integratsiyasi", "Trafik oshishi", "ESG hisobotlarini qo'llab-quvvatlash"]
        },
        {
          title: "Brendlar",
          bullets: ["EPR mosligi", "O'lchanadigan ekologik ta'sir", "Obro'ni mustahkamlash"]
        },
        {
          title: "Hukumat",
          bullets: ["Shahar tozaligi KPI", "Ekologik shaffoflik", "Ma'lumotga asoslangan monitoring"]
        }
      ]
    },
    technology: {
      eyebrow: "Texnologiya",
      title: "Qurilma intellekti va xavfsiz operatsion nazorat",
      bullets: [
        "AI yordamida materialni aniqlash",
        "Bottle/Can ikki oqimli saralash",
        "QR asosidagi xavfsiz identifikatsiya",
        "Real vaqt monitoringi",
        "Anti-fraud logikasi"
      ]
    },
    governance: {
      eyebrow: "Boshqaruv va shaffoflik",
      title: "Ishonchli joriy etish uchun institutsional darajadagi nazorat",
      description:
        "COBY arxitekturasi o'lchanadigan natijalar, kuzatiladigan operatsiyalar va manfaatdor tomonlar uchun shaffoflikni ta'minlaydi.",
      items: [
        {
          title: "Real vaqt data kuzatuvi",
          description: "Har bir topshirish, material klassi va EcoCoin transaksiyasi vaqt tamg'asi bilan qayd etiladi."
        },
        {
          title: "Xavfsiz voqea validatsiyasi",
          description: "Mukofot berilishidan oldin sensor va platforma signallari o'zaro tekshiriladi."
        },
        {
          title: "Audit loglari",
          description: "O'zgarmas operatsion loglar compliance va uchinchi tomon tekshiruvlariga mos keladi."
        },
        {
          title: "Ta'sir hisobot paneli",
          description: "Institutional foydalanuvchilar ekologik va operatsion metrikalarni panel orqali oladi."
        }
      ]
    },
    roadmap: {
      eyebrow: "Masshtab yo'l xaritasi",
      title: "Operatsion KPI bilan bosqichma-bosqich joriy etish",
      phases: [
        { year: "2026", title: "Pilot", description: "Yuqori oqimli shahar nuqtalarida dastlabki joylashtirish." },
        { year: "2027", title: "Shahar kengayishi", description: "Retail va jamoat hududlarida tarmoqni kengaytirish." },
        { year: "2028", title: "Milliy joriy etish", description: "O'zbekiston bo'ylab integratsiyalangan tarmoq modeli." }
      ],
      kpis: [
        { metric: "1.2M+", label: "Oyiga validatsiya qilingan birlik target" },
        { metric: "98%", label: "Sensor klassifikatsiyasi ishonchliligi" },
        { metric: "24/7", label: "Operatsion monitoring qamrovi" }
      ]
    },
    partners: {
      eyebrow: "Hamkorlar",
      title: "Hamkorlarimiz",
      logos: ["Korzinka", "Havas", "Baraka", "Makro"]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Ko'p so'raladigan savollar",
      items: [
        {
          question: "EcoCoin konversiyasi qanday ishlaydi?",
          answer:
            "Validatsiyadan o'tgan birliklar EcoCoin ga aylanadi va Korzinka sodiqlik integratsiyasi orqali 365 mahsulotlarida chegirmaga ishlatiladi."
        },
        {
          question: "COBY qaysi materiallarni qabul qiladi?",
          answer: "Platforma PET plastik butilkalar va alyuminiy bankalarni AI va sensor orqali qabul qiladi."
        },
        {
          question: "Firibgarlik qanday oldi olinadi?",
          answer: "EcoCoin berilishidan oldin event validatsiya, takror tekshiruvi va sensor mosligi nazorati qo'llanadi."
        },
        {
          question: "Ta'sir ma'lumotlari mavjudmi?",
          answer: "Ha. Dashboard orqali yig'ish hajmi, throughput va rag'bat ishlatilishi bo'yicha auditga tayyor metrikalar beriladi."
        },
        {
          question: "COBY davlat va ESG hamkorligiga mosmi?",
          answer: "Ha. Platforma retail, brend va jamoat sektori uchun KPI yo'naltirilgan shaffof modelni qo'llaydi."
        },
        {
          question: "Joriy etish strategiyasi qanday?",
          answer: "Bosqichlar: 2026 pilot, 2027 shahar bo'ylab kengayish, 2028 milliy joriy etish."
        }
      ]
    },
    footer: {
      newsletterTitle: "Yangiliklar",
      newsletterDescription: "COBY bo'yicha joriy etish yangiliklari, ESG hisobotlari va hamkorlik e'lonlarini oling.",
      emailPlaceholder: "Ishchi emailingiz",
      subscribe: "Obuna bo'lish",
      company: "Kompaniya",
      technology: "Texnologiya",
      contacts: "Aloqa",
      companyLinks: [
        { href: "#problem-data", label: "Muammo va ma'lumotlar" },
        { href: "#stakeholder-value", label: "Tomonlar uchun qiymat" },
        { href: "#partners", label: "Hamkorlar" }
      ],
      technologyLinks: [
        { href: "#architecture", label: "Arxitektura" },
        { href: "#technology", label: "Texnologiya" },
        { href: "#governance", label: "Shaffoflik" },
        { href: "#roadmap", label: "Yo'l xaritasi" }
      ],
      emailLabel: "Email",
      phoneLabel: "Telefon",
      location: "Toshkent, O'zbekiston",
      rights: "Barcha huquqlar himoyalangan.",
      terms: "Shartlar",
      privacy: "Maxfiylik"
    }
  },
  ru: {
    nav: {
      problem: "Проблема",
      architecture: "Архитектура",
      stakeholders: "Стейкхолдеры",
      technology: "Технологии",
      governance: "Прозрачность",
      roadmap: "Масштаб",
      partners: "Партнеры",
      faq: "FAQ",
      startPartnership: "Начать партнерство",
      languageLabel: "Язык"
    },
    hero: {
      badge: "ESG инфраструктурная платформа",
      headline: "Устойчивая инфраструктура переработки для Узбекистана",
      subheadline:
        "COBY объединяет сбор пластика с безопасной системой стимулирования EcoCoin через интеграцию с Korzinka и брендом 365.",
      primaryCta: "Начать партнерство",
      secondaryCta: "Посмотреть технологии"
    },
    problem: {
      eyebrow: "Проблема и данные",
      title: "Городской вызов требует измеримой инфраструктуры",
      annualLabel: "Оценка годового объема",
      annualUnits: "Пластиковых единиц в год",
      dataPoints: [
        {
          title: "Низкий уровень переработки",
          detail: "Темпы возврата материалов отстают от роста городских отходов."
        },
        {
          title: "Влияние на городскую среду",
          detail: "Несобранный пластик увеличивает нагрузку на транспортные узлы и общественные пространства."
        }
      ]
    },
    architecture: {
      eyebrow: "Архитектура решения",
      title: "Интегрированная экосистема переработки",
      stageLabel: "Этап",
      flow: ["Устройство", "Облачная платформа", "Retail loyalty", "Награды пользователю"]
    },
    stakeholder: {
      eyebrow: "Ценность для сторон",
      title: "Институциональные результаты для всей экосистемы",
      columns: [
        {
          title: "Retail",
          bullets: ["Интеграция лояльности", "Рост трафика", "Поддержка ESG-отчетности"]
        },
        {
          title: "Бренды",
          bullets: ["Соответствие EPR", "Измеримый экологический эффект", "Укрепление репутации"]
        },
        {
          title: "Государство",
          bullets: ["KPI городской чистоты", "Экологическая прозрачность", "Мониторинг на основе данных"]
        }
      ]
    },
    technology: {
      eyebrow: "Технологии",
      title: "Интеллект устройства и безопасный операционный контроль",
      bullets: [
        "AI-определение материалов",
        "Двухпоточная сортировка Bottle/Can",
        "Безопасная идентификация по QR",
        "Мониторинг в реальном времени",
        "Anti-fraud логика"
      ]
    },
    governance: {
      eyebrow: "Управление и прозрачность",
      title: "Институциональный уровень контроля для надежного внедрения",
      description:
        "Архитектура COBY обеспечивает измеримые результаты, прослеживаемые операции и прозрачность для всех стейкхолдеров.",
      items: [
        {
          title: "Отслеживание данных в реальном времени",
          description: "Каждое событие сдачи, класс материала и транзакция EcoCoin фиксируются с меткой времени."
        },
        {
          title: "Безопасная валидация событий",
          description: "Перед начислением вознаграждений сигналы устройства и платформы проходят перекрестную проверку."
        },
        {
          title: "Аудит-логи",
          description: "Неизменяемые операционные логи поддерживают комплаенс и внешние проверки."
        },
        {
          title: "Панель отчетности по эффекту",
          description: "Институциональные участники получают экологические и операционные метрики в отчетном формате."
        }
      ]
    },
    roadmap: {
      eyebrow: "Дорожная карта масштаба",
      title: "Поэтапное развертывание с операционными KPI",
      phases: [
        { year: "2026", title: "Пилот", description: "Первый запуск в точках с высоким городским трафиком." },
        { year: "2027", title: "Расширение по городу", description: "Рост сети в retail и общественных зонах." },
        { year: "2028", title: "Национальное внедрение", description: "Масштабная сеть по Узбекистану с единой отчетностью." }
      ],
      kpis: [
        { metric: "1.2M+", label: "Целевой объем валидированных единиц в месяц" },
        { metric: "98%", label: "Точность сенсорной классификации" },
        { metric: "24/7", label: "Покрытие операционного мониторинга" }
      ]
    },
    partners: {
      eyebrow: "Партнеры",
      title: "Наши партнеры",
      logos: ["Korzinka", "Havas", "Baraka", "Makro"]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Часто задаваемые вопросы",
      items: [
        {
          question: "Как работает конвертация EcoCoin?",
          answer:
            "Валидированные единицы конвертируются в EcoCoin и используются через интеграцию лояльности Korzinka для скидок на продукты 365."
        },
        {
          question: "Какие материалы принимает COBY?",
          answer: "Платформа принимает PET-бутылки и алюминиевые банки с валидацией через AI и сенсоры."
        },
        {
          question: "Как предотвращается мошенничество?",
          answer: "Перед начислением EcoCoin применяются валидация событий, проверки дублей и контроль согласованности сенсоров."
        },
        {
          question: "Доступны ли данные об экологическом эффекте?",
          answer: "Да. В дашборде доступны аудит-готовые метрики по сбору, throughput и использованию стимулов."
        },
        {
          question: "Подходит ли COBY для госпроектов и ESG-инициатив?",
          answer: "Да. Платформа поддерживает прозрачную KPI-модель для retail, брендов и государственного сектора."
        },
        {
          question: "Какова стратегия масштабирования?",
          answer: "Этапы: пилот 2026, городское расширение 2027, национальное развертывание 2028."
        }
      ]
    },
    footer: {
      newsletterTitle: "Новости",
      newsletterDescription: "Получайте обновления по внедрению COBY, ESG-метрикам и партнерским анонсам.",
      emailPlaceholder: "Рабочий email",
      subscribe: "Подписаться",
      company: "Компания",
      technology: "Технологии",
      contacts: "Контакты",
      companyLinks: [
        { href: "#problem-data", label: "Проблема и данные" },
        { href: "#stakeholder-value", label: "Ценность для сторон" },
        { href: "#partners", label: "Партнеры" }
      ],
      technologyLinks: [
        { href: "#architecture", label: "Архитектура" },
        { href: "#technology", label: "Технологии" },
        { href: "#governance", label: "Прозрачность" },
        { href: "#roadmap", label: "Дорожная карта" }
      ],
      emailLabel: "Email",
      phoneLabel: "Телефон",
      location: "Ташкент, Узбекистан",
      rights: "Все права защищены.",
      terms: "Условия",
      privacy: "Конфиденциальность"
    }
  },
  en: {
    nav: {
      problem: "Problem",
      architecture: "Architecture",
      stakeholders: "Stakeholders",
      technology: "Technology",
      governance: "Governance",
      roadmap: "Roadmap",
      partners: "Partners",
      faq: "FAQ",
      startPartnership: "Start Partnership",
      languageLabel: "Language"
    },
    hero: {
      badge: "ESG Infrastructure Platform",
      headline: "Sustainable Recycling Infrastructure for Uzbekistan",
      subheadline:
        "COBY integrates plastic collection with secure EcoCoin retail incentives via Korzinka and 365 brand products.",
      primaryCta: "Start Partnership",
      secondaryCta: "View Technology"
    },
    problem: {
      eyebrow: "Problem & Data",
      title: "Measurable urban challenge requires infrastructure response",
      annualLabel: "Annual footprint estimate",
      annualUnits: "Plastic units annually",
      dataPoints: [
        {
          title: "Low recycling rate",
          detail: "Material recovery remains below urban waste generation growth rates."
        },
        {
          title: "Urban waste impact",
          detail: "Uncollected plastic burdens transport nodes, neighborhoods, and public spaces."
        }
      ]
    },
    architecture: {
      eyebrow: "Solution Architecture",
      title: "Integrated Recycling Ecosystem",
      stageLabel: "Stage",
      flow: ["Device", "Cloud Platform", "Retail Loyalty", "User Rewards"]
    },
    stakeholder: {
      eyebrow: "Stakeholder Value",
      title: "Institutional outcomes across the ecosystem",
      columns: [
        {
          title: "Retail",
          bullets: ["Loyalty integration", "Increased traffic", "ESG reporting support"]
        },
        {
          title: "Brands",
          bullets: ["EPR alignment", "Measurable environmental impact", "Reputation strengthening"]
        },
        {
          title: "Government",
          bullets: ["Urban cleanliness KPIs", "Environmental transparency", "Data-driven monitoring"]
        }
      ]
    },
    technology: {
      eyebrow: "Technology",
      title: "Device intelligence with secure operational controls",
      bullets: [
        "AI-assisted material detection",
        "Bottle/Can dual sorting",
        "QR-based secure identity",
        "Real-time monitoring",
        "Anti-fraud logic"
      ]
    },
    governance: {
      eyebrow: "Governance & Transparency",
      title: "Institutional-grade controls for trusted deployment",
      description:
        "COBY architecture is built for measurable outcomes, traceable operations, and governance visibility across stakeholders.",
      items: [
        {
          title: "Real-time data tracking",
          description: "Every deposit event, material class, and EcoCoin transaction is time-stamped and monitored continuously."
        },
        {
          title: "Secure event validation",
          description: "Device signals and identity events are validated across sensor and platform layers before rewards are issued."
        },
        {
          title: "Audit logs",
          description: "Immutable operational logs support compliance workflows and third-party review requirements."
        },
        {
          title: "Impact reporting dashboard",
          description: "Institutional stakeholders can access environmental and operational metrics in structured reporting views."
        }
      ]
    },
    roadmap: {
      eyebrow: "Scale Roadmap",
      title: "Phased deployment with operational KPIs",
      phases: [
        { year: "2026", title: "Pilot", description: "Initial deployment in selected high-density urban locations." },
        { year: "2027", title: "City Expansion", description: "Network growth across major retail and public traffic zones." },
        { year: "2028", title: "National Deployment", description: "Scaled coverage model across Uzbekistan with integrated reporting." }
      ],
      kpis: [
        { metric: "1.2M+", label: "Validated units / month target" },
        { metric: "98%", label: "Sensor classification confidence" },
        { metric: "24/7", label: "Operational monitoring coverage" }
      ]
    },
    partners: {
      eyebrow: "Partners",
      title: "Our Partners",
      logos: ["Korzinka", "Havas", "Baraka", "Makro"]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How does EcoCoin conversion work?",
          answer:
            "Validated deposits are converted to EcoCoin in user accounts and redeemed through Korzinka loyalty integration for 365 brand product discounts."
        },
        {
          question: "What materials are accepted by COBY devices?",
          answer:
            "The platform currently accepts PET plastic bottles and aluminum cans, validated through AI and sensor-based material classification."
        },
        {
          question: "How is fraud prevented in the reward flow?",
          answer:
            "COBY applies anti-fraud logic using event validation, duplicate checks, and sensor-level consistency controls before issuing EcoCoin."
        },
        {
          question: "Can stakeholders access environmental impact data?",
          answer:
            "Yes. Institutional dashboards provide audit-ready metrics including collection volume, operational throughput, and incentive utilization."
        },
        {
          question: "Is COBY designed for municipal and ESG collaboration?",
          answer:
            "Yes. The architecture supports retail, brand, and public-sector use cases with transparent KPI-oriented reporting."
        },
        {
          question: "What is the rollout strategy?",
          answer: "Deployment follows phased expansion: 2026 pilot, 2027 city-scale rollout, and 2028 national network deployment."
        }
      ]
    },
    footer: {
      newsletterTitle: "Newsletter",
      newsletterDescription: "Receive deployment updates, ESG reporting milestones, and partnership announcements from COBY.",
      emailPlaceholder: "Work email",
      subscribe: "Subscribe",
      company: "Company",
      technology: "Technology",
      contacts: "Contacts",
      companyLinks: [
        { href: "#problem-data", label: "Problem & Data" },
        { href: "#stakeholder-value", label: "Stakeholder Value" },
        { href: "#partners", label: "Partners" }
      ],
      technologyLinks: [
        { href: "#architecture", label: "Architecture" },
        { href: "#technology", label: "Technology" },
        { href: "#governance", label: "Governance" },
        { href: "#roadmap", label: "Roadmap" }
      ],
      emailLabel: "Email",
      phoneLabel: "Phone",
      location: "Tashkent, Uzbekistan",
      rights: "All rights reserved.",
      terms: "Terms",
      privacy: "Privacy"
    }
  }
};
