import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Mehdi Ait Mouh — développeur full-stack",
  author: "Mehdi Ait Mouh",
  description:
    "Développeur web basé a Marrakech. Je suis spécialisé dans la conception d'interfaces utilisateur, le développement et la maintenance d'applications web et des outils et agents IA.",
  lang: "fr",
  siteLogo: "/mehdi-small.jpg",
  navLinks: [
    { text: "Expérience", href: "#experience" },
    { text: "Projets", href: "#projects" },
    { text: "A propos", href: "#about" },
  ],
  socialLinks: [
    { text: "X", href: "https://x.com/MehdiAitMouh1" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/mehdi-ait-mouh-1376b81ab" },
    { text: "Github", href: "https://github.com/medeng97" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Mehdi Ait Mouh",
    specialty: "Développeur full-stack",
    summary:
      "Développeur web basé a Marrakech. Je suis spécialisé dans la conception d'interfaces utilisateur, le développement et la maintenance d'applications web et des outils et agents IA.",
    email: "mehdi.aitmouh.dev@gmail.com",
  },
  experience: [
    {
      company: "Marrakech opportunity - Marrakech",
      position: "Web master",
      startDate: "FÉVRIER 2018",
      endDate: "MARS 2018",
      summary: [
        "J'ai fait un mois de stage comme web master dans l'agenceimmobilière Marrakech opportunité mon rôle était d'ajouter desfonctionnalité sur leur site est de faire la maintenance en cas de chute.",
      ],
    },
    {
      company: "Amsoft",
      position: "Développeur front-end",
      startDate: "MAI 2018",
      endDate: "MAI 2018",
      summary: [
        "1 mois de stage chargé de développer des interfaces web pour les sas proposés par la société.",
      ],
    },
    {
      company: "Hb web",
      position: "Développeur full-stack",
      startDate: "JUIN 2019",
      endDate: "SEPTEMBRE 2019",
      summary:
        "4 mois de stage dans l'agence web et communication digitale Hb web, durent ses mois j'étais amenée à développer des sites web en different secteur d'activité et surtout le secteur touristique et aussi réaliser une application web destinée à gérer les hôtelleries.",
    },
    {
      company: "Engagia communication",
      position: "Développeur full-stack",
      startDate: "SEPTEMBRE 2019",
      endDate: "JUILLET 2025",
      summary:
        "6 ans de travail chez l'agence web et communication digitale Engagia, j'ai était chargé de développer des sites à de nombreux secteurs et aussi des applications web et création des Agent et outils IA et l’intégrer dans les projets web.",
    },
  ],
  projects: [
    {
      name: "Flyrehla",
      summary: "Plateforme de réservation de vols et d'hôtels qui utilise l'IA pour proposer des offres personnalisées aux voyageurs.",
      linkPreview: "https://flyrehla.pro/",
      image: "/flyrehla.png",
    },
    {
      name: "Villa city",
      summary: "Plateforme des projets Villa et lot de villa au Maroc qui utilise la puissance de l'intelligence artificielle pour offrir une expérience client optimale.",
      linkPreview: "https://villa-marrakech.ma/",
      image: "/villa-city.png",
    },
    {
      name: "Store publicitaire",
      summary: "Site de e-commerce dédié à la vente et à la personnalisation d'objets publicitaire au Maroc.",
      linkPreview: "https://store-publicitaire.ma/",
      image: "/store.png",
    },
    {
      name: "Meridianis AI",
      summary: "Agent IA WhatsApp pour gérer les réservations de leurs clients pour le pèlerinage à La Mecque (Umrah) et à Jérusalem (Hajj).",
      image: "/meridianis-ai.png",
    },
    {
      name: "Meridianis",
      summary: "Site web de Méridianis agence de voyage agréée pour le pèlerinage.",
      image: "/meridianis.png",
      linkPreview: "https://hajjomra.com",
    },
    {
      name: "Contemplate morocco travel",
      summary: "Site web pour une agence de voyage.",
      image: "/cmt.png",
      linkPreview: "https://contemplatemoroccotravel.com/",
    },
    {
      name: "Morthai SPA",
      summary: "Site web: Mor Thaï Spa, votre salon de massages Traditionnel Thaïlandais à Marrakech.",
      image: "/morthai.png",
      linkPreview: "https://morthai-marrakech.com/",
    },
    {
      name: "ENITA",
      summary: "Site web: Ecole privé de bâtiment.",
      image: "/enita.png",
      linkPreview: "https://www.enita.ma/",
    },
    {
      name: "Pub industrie",
      summary: "Site web: pour une agence spécialiste de la publicité et pour l’industrie publicitaire.",
      image: "/pub.png",
      linkPreview: "https://pub-industrie.com",
    },
    {
      name: "Thecrazykidsshow",
      summary: "Site web: spectacle enfants comité d’entreprises France.",
      image: "/tksh.png",
      linkPreview: "https://thecrazykidsshow.fr/",
    },
  ],
  about: {
    description: `https://thecrazykidsshow.fr/
      Bonjour, je suis <strong>Mehdi Ait Mouh</strong>, un développeur mobile et web passionné, animé par la volonté de créer des expériences numériques fluides et innovantes. Fort d’une solide expertise dans le développement d’applications web et mobiles, d’outils basés sur l’intelligence artificielle, ainsi que dans les technologies frontend, je m'épanouis à l'intersection de la créativité et de la technologie.
      <br>
      <br>
      Au fil des années, j’ai élargi mon champ de compétences pour inclure le développement WordPress sur mesure, notamment la création de thèmes et de plugins personnalisés, ainsi que le développement d’applications robustes avec Laravel et React. Mes projets vont des plateformes web dynamiques aux sites vitrines réactifs, toujours pensés pour offrir performance, sécurité et évolutivité. Mon objectif est de concevoir des solutions techniques qui répondent aux besoins des utilisateurs tout en dépassant les standards du possible.
    `,
    image: "/mehdi-big.jpg",
  },
};

// #5755ff
