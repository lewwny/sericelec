// ============================================================
// CONTENT DATA — ECO ELEC 23
// All site text in French, centralized here for easy editing.
// ============================================================

export const siteConfig = {
  name: "Eco Elec 23",
  tagline: "Électricien Éco-Responsable en Creuse",
  phone: "06 36 47 07 78",
  phoneHref: "tel:+33636470778",
  hours: "Ouvert 24h/24 — Intervention rapide en 48h",
  location: "Saint-Léger-le-Guérétois (Proche Guéret)",
  region: "Creuse (23) et départements limitrophes",
  rating: "4.9/5",
  reviewCount: 16,
  reviewPlatform: "Google",

  seo: {
    title: "Eco Elec 23 | Électricien 24/24 à Guéret et en Creuse",
    description:
      "Eco Elec 23 — Votre électricien disponible 24h/24 à Guéret et dans toute la Creuse. Intervention rapide en 48h, solutions éco-responsables, installation, rénovation et dépannage. Note 4.9/5 sur Google.",
    keywords:
      "électricien Guéret, électricien Creuse, dépannage électrique 24h, Eco Elec 23, électricien éco-responsable, intervention rapide électricité Creuse",
    url: "https://ecoelec23.fr",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
  },
};

export const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Avis", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  badge: "Note 4.9/5 sur Google · 16 avis",
  headline: "Votre Électricien\n24/24 en Creuse",
  subheadline:
    "Des solutions électriques modernes, fiables et respectueuses de l'environnement.",
  ctaPrimary: {
    label: "Urgence Dépannage 24/7",
    href: "tel:+33636470778",
  },
  ctaSecondary: {
    label: "Devis Gratuit",
    href: "#contact",
  },
  backgroundImage:
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&q=85",
  stats: [
    { value: "24h/24", label: "Disponibilité" },
    { value: "48h", label: "Délai max." },
    { value: "4.9★", label: "Note Google" },
  ],
};

export const about = {
  sectionLabel: "À propos",
  title: "Électricien de Confiance,\nAncré dans la Creuse",
  body:
    "Eco Elec 23, l'entreprise à vos côtés pour tous vos projets électriques : neuf, rénovation, ou même dépannage. Nous sommes là 24h/24 pour vous dépanner. Basée sur la commune de Saint-Léger-le-Guérétois proche de Guéret, nous proposons des interventions rapides et efficaces. Nous intervenons dans un délai de 48h auprès des particuliers et nous nous déplaçons dans toute la Creuse et les départements limitrophes. Contactez-nous pour toute information supplémentaire ou obtenir un devis gratuit.",
  highlights: [
    { value: "24h/24", label: "Disponibles pour vous" },
    { value: "48h", label: "Délai d'intervention" },
    { value: "Creuse +", label: "Zone couverte" },
  ],
  image:
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80",
  imageAlt:
    "Paysage naturel de la Creuse, forêt verte et vallée — reflet des valeurs eco-responsables d'Eco Elec 23",
};

export const services = [
  {
    id: "depannage",
    icon: "Zap",
    title: "Dépannage 24/24",
    subtitle: "Intervention rapide en 48h",
    description:
      "Panne électrique à toute heure ? Notre équipe intervient en urgence, 7j/7 et 24h/24, pour rétablir votre installation dans les meilleurs délais.",
    features: [
      "Disponible 24h/24, 7j/7",
      "Intervention sous 48h",
      "Diagnostic précis & rapide",
      "Devis transparent",
    ],
    color: "from-forest-600 to-forest-700",
    bgColor: "bg-forest-50",
    accentColor: "text-forest-600",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80",
    imageAlt: "Électricien en intervention de dépannage rapide",
  },
  {
    id: "installation",
    icon: "Sun",
    title: "Installation & Neuf",
    subtitle: "Solutions modernes & durables",
    description:
      "Construction neuve ou extension ? Nous concevons et installons des équipements électriques modernes, aux normes, pensés pour durer et respectueux de l'environnement.",
    features: [
      "Mise aux normes NF C 15-100",
      "Tableau électrique intelligent",
      "Domotique & éclairage LED",
      "Borne de recharge véhicule",
    ],
    color: "from-energy-500 to-energy-600",
    bgColor: "bg-energy-50",
    accentColor: "text-energy-600",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
    imageAlt: "Installation électrique moderne et éco-responsable",
  },
  {
    id: "renovation",
    icon: "Leaf",
    title: "Rénovation Écologique",
    subtitle: "Mise aux normes & efficacité énergétique",
    description:
      "Rénovez votre installation tout en réduisant votre empreinte carbone. Nous vous guidons vers les solutions les plus efficaces sur le plan énergétique.",
    features: [
      "Diagnostic & audit électrique",
      "Rénovation complète ou partielle",
      "Optimisation énergétique",
      "Éligibilité aux aides (MaPrimeRénov')",
    ],
    color: "from-sage-500 to-sage-600",
    bgColor: "bg-sage-50",
    accentColor: "text-sage-600",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80",
    imageAlt: "Rénovation écologique et mise aux normes électriques",
  },
];

export const reviews = [
  {
    id: 1,
    author: "MEYA",
    rating: 5,
    date: "2024",
    text: "Je recommande à 100%. Travail parfait, très professionnel. Merci",
    avatar: "M",
    avatarColor: "bg-forest-600",
  },
  {
    id: 2,
    author: "Blandine Michel",
    rating: 5,
    date: "2024",
    text: "Personne très sérieuse et compétente. Un projet électrique mis en place avec ce professionnel, tout s'est très bien passé même au-dessus de nos attentes.",
    avatar: "B",
    avatarColor: "bg-sage-500",
  },
  {
    id: 3,
    author: "Mimosa Fleury",
    rating: 5,
    date: "2024",
    text: "Chantier réalisé dans les plus brefs délais, prix très raisonnable, personne agréable et excellente communication je recommande à 100% 👍",
    avatar: "M",
    avatarColor: "bg-energy-500",
  },
];

export const contact = {
  sectionLabel: "Contact",
  title: "Parlons de Votre Projet",
  subtitle:
    "Besoin d'un devis gratuit ou d'une intervention urgente ? Nous répondons à toutes vos demandes, 24h/24.",
  items: [
    {
      icon: "Phone",
      label: "Téléphone",
      value: "06 36 47 07 78",
      href: "tel:+33636470778",
      description: "Disponible 24h/24, 7j/7",
    },
    {
      icon: "Clock",
      label: "Horaires",
      value: "Ouvert 24h/24",
      href: null,
      description: "Intervention rapide en 48h",
    },
    {
      icon: "MapPin",
      label: "Zone d'intervention",
      value: "Saint-Léger-le-Guérétois",
      href: null,
      description: "Toute la Creuse (23) et alentours",
    },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44052.94!2d1.8700!3d46.1720!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fac0e23cc84547%3A0x40c14484fbcbd30!2sGuéret!5e0!3m2!1sfr!2sfr!4v1700000000000",
  ctaLabel: "Appeler Maintenant",
  ctaHref: "tel:+33636470778",
};

export const footer = {
  tagline: "Électricien éco-responsable au cœur de la Creuse.",
  links: [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
  ],
  copyright: `© ${new Date().getFullYear()} Eco Elec 23 — Tous droits réservés.`,
};

// Schema.org JSON-LD for LocalBusiness / Electrician
export const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Electrician"],
  name: "Eco Elec 23",
  description:
    "Électricien éco-responsable disponible 24h/24 à Guéret et dans toute la Creuse. Dépannage, installation neuf, rénovation. Intervention rapide en 48h.",
  url: "https://ecoelec23.fr",
  telephone: "+33636470778",
  priceRange: "€€",
  image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saint-Léger-le-Guérétois",
    addressRegion: "Creuse",
    postalCode: "23000",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.172,
    longitude: 1.87,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Creuse (23) et départements limitrophes",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "16",
    bestRating: "5",
    worstRating: "1",
  },
};
