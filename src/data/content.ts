export const business = {
  name: 'S.ERIC ELEC',
  phone: '06 31 08 23 36',
  phoneHref: 'tel:+33631082336',
  address: 'Rue Bridier 5, 08200 Sedan',
  city: 'Sedan',
  region: 'Région Grand Est',
  postalCode: '08200',
  hours: 'Ouvert 24h/24',
  rating: 4.6,
  reviewCount: 12,
  experience: 13,
}

export const nav = {
  links: [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#a-propos' },
    { label: 'Services', href: '#services' },
    { label: 'Avis', href: '#avis' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: 'Dépannage Urgence',
}

export const hero = {
  title: 'Votre Électricien Expert à Sedan et ses environs',
  subtitle:
    "Fort de 13 ans d'expérience. Installations, mise aux normes, domotique et dépannage d'urgence 24h/24.",
  cta: 'Contactez-nous',
  ctaSub: '06 31 08 23 36',
  backgroundImage:
    'https://images.unsplash.com/photo-1635335874521-7987db781153?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}

export const about = {
  title: 'À propos de S.ERIC ELEC',
  subtitle: '13 ans d\'expertise au service de votre sécurité électrique',
  text: "Vous cherchez un électricien compétent à Sedan et ses environs ? Faites confiance à S.ERIC ELEC, fort de 13 ans d'expérience dans le domaine. Nous assurons des installations conformes, maintenances et rénovations électriques avec un grand sérieux et une rapidité d'exécution exemplaire. En plus des interventions intérieures, nous sommes experts dans les aménagements électriques extérieurs (éclairage de jardins et terrasses) ainsi que des solutions d'automatisation et de domotique pour embellir et sécuriser votre espace de vie.",
  image:
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
  stats: [
    { value: '13+', label: "Ans d'expérience" },
    { value: '24/7', label: 'Disponibilité' },
    { value: '4.6/5', label: 'Note Google' },
    { value: '1h', label: "Délai d'intervention" },
  ],
}

export const services = {
  title: 'Nos Services',
  subtitle: 'Des solutions électriques complètes pour tous vos besoins',
  items: [
    {
      icon: 'Zap' as const,
      title: 'Dépannage 24/24',
      description: "Disponibilité dans l'heure qui suit",
      image:
        'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=80',
    },
    {
      icon: 'Home' as const,
      title: 'Électricité Générale',
      description: 'Installation complète et mise aux normes',
      image:
        'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&q=80',
    },
    {
      icon: 'Lightbulb' as const,
      title: 'Éclairage Extérieur',
      description: 'Mise en valeur de jardins et terrasses',
      image:
        'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80',
    },
    {
      icon: 'ShieldCheck' as const,
      title: 'Domotique & Sécurité',
      description: 'Automatisation et bioélectricité',
      image:
        'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80',
    },
  ],
}

export const testimonials = {
  title: 'Ce que disent nos clients',
  subtitle: 'Note moyenne de 4.6/5 sur Google',
  reviews: [
    {
      name: 'Adel Keita',
      rating: 5,
      text: "Eric s'est engagé à faire le travail avant de partir en vacances et il a tenu parole. En une matinée, c'était terminé. Je n'ai plus de câbles au sol, l'installation est sécuritaire. Un grand merci !",
    },
    {
      name: 'Laurence MARS',
      rating: 5,
      text: "Intervenu pour problème compteur. Résolu en 24h, très professionnel et prix très correct. Disponible et en cas de panne présent dans l'heure qui suit.",
    },
    {
      name: 'Mathieu AUGEREAU',
      rating: 5,
      text: 'Très réactif, du bon boulot et prix correct. Vraiment merci pour le dépannage de ma maison !',
    },
  ],
}

export const contact = {
  title: 'Contactez-nous',
  subtitle: 'Disponible 24h/24, 7j/7 pour toutes vos urgences électriques',
  items: [
    {
      icon: 'Phone' as const,
      label: 'Téléphone',
      value: '06 31 08 23 36',
      href: 'tel:+33631082336',
    },
    {
      icon: 'Clock' as const,
      label: 'Horaires',
      value: 'Ouvert 24h/24 - 7j/7',
    },
    {
      icon: 'MapPin' as const,
      label: 'Adresse',
      value: 'Rue Bridier 5, 08200 Sedan',
      href: 'https://maps.google.com/?q=Rue+Bridier+5+08200+Sedan',
    },
  ],
}

export const seo = {
  title: 'S.ERIC ELEC | Électricien 24/24 et Domotique à Sedan',
  description:
    "S.ERIC ELEC, électricien à Sedan avec 13 ans d'expérience. Dépannage d'urgence 24h/24, intervention en 1h. Électricité générale, éclairage extérieur, domotique et mise aux normes. Appelez le 06 31 08 23 36.",
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'S.ERIC ELEC',
    description:
      "Électricien expert à Sedan - 13 ans d'expérience. Dépannage 24/24, électricité générale, éclairage extérieur et domotique.",
    telephone: '+33631082336',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rue Bridier 5',
      addressLocality: 'Sedan',
      postalCode: '08200',
      addressRegion: 'Grand Est',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '49.7019',
      longitude: '4.9428',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.6',
      reviewCount: '12',
    },
    priceRange: '€€',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    url: 'https://sericelec.fr',
  },
}
