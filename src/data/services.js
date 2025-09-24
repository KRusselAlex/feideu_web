const services = [
    {
        id: 1,
        title: "Maintenance Informatique",
        icon: "🛠️",
        gradient: "from-blue-500 to-blue-600",
        description: "Assistance technique complète pour vos équipements informatiques avec intervention rapide et efficace",
        detailedDescription: "Nous assurons la maintenance préventive et corrective de votre parc informatique, afin de garantir la disponibilité et la performance de vos équipements. Notre équipe d'experts intervient rapidement sur site ou à distance.",
        features: [
            "Assistance sur site et à distance",
            "Diagnostic rapide",
            "Maintenance préventive",
            "Mises à jour logicielles",
            "Sauvegarde et restauration",
            "Protection antivirus et sécurité",
            "Optimisation des performances",
            "Support utilisateurs"
        ],
        technologies: ["Windows", "Linux", "Office 365", "VMware", "Antivirus Pro"],
        pricing: {
            starter: { name: "Starter", price: "500€ / mois", features: ["Support basique", "Mises à jour système", "Assistance à distance"] },
            professional: { name: "Professional", price: "1 200€ / mois", features: ["Support avancé", "Maintenance préventive", "Intervention sur site", "Sauvegarde régulière"] },
            enterprise: { name: "Enterprise", price: "Sur devis", features: ["Parc informatique complet", "Support dédié 24/7", "Solutions personnalisées", "Sécurité avancée"] }
        },
        testimonial: {
            name: "Jean Dupont",
            company: "BureauPlus",
            rating: 5,
            text: "Un service réactif et fiable qui a considérablement réduit nos temps d'arrêt informatiques."
        },
        gallery: [
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581090700227-4c4d3a51af3d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=800&h=600&fit=crop"
        ],
        deliveryTime: "24-48h",
        supportIncluded: "Support continu",
        clientsCount: "300+"
    },
    {
        id: 2,
        title: "Logiciels de Gestion d'École",
        icon: "📚",
        gradient: "from-indigo-500 to-indigo-600",
        description: "Solutions logicielles complètes pour optimiser la gestion de votre établissement scolaire",
        detailedDescription: "Nous développons et installons des solutions logicielles adaptées aux besoins des établissements scolaires pour simplifier la gestion académique, administrative et financière.",
        features: [
            "Gestion des étudiants et enseignants",
            "Suivi des absences et notes",
            "Portail parents et élèves",
            "Facturation et paiements",
            "Rapports automatisés",
            "Sécurité des données",
            "Application mobile intégrée",
            "Support multilingue"
        ],
        technologies: ["Django", "Laravel", "MySQL", "Flutter", "React"],
        pricing: {
            starter: { name: "Starter", price: "2 000€", features: ["Module de base", "Gestion des élèves", "Tableau de bord simple"] },
            professional: { name: "Professional", price: "5 500€", features: ["Modules avancés", "Portail en ligne", "Rapports détaillés", "Support 6 mois"] },
            enterprise: { name: "Enterprise", price: "Sur devis", features: ["Solution sur mesure", "Application mobile", "Intégrations externes", "Formation équipe"] }
        },
        testimonial: {
            name: "Fatou Ndiaye",
            company: "Collège Excellence",
            rating: 5,
            text: "Notre gestion scolaire est devenue fluide et transparente. Les parents adorent le portail en ligne !"
        },
        gallery: [
            "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop"
        ],
        deliveryTime: "4-8 semaines",
        supportIncluded: "6 mois",
        clientsCount: "100+"
    },
    {
        id: 3,
        title: "Réseaux Informatiques",
        icon: "🌐",
        gradient: "from-blue-600 to-blue-700",
        description: "Conception et installation de réseaux performants et sécurisés pour votre infrastructure",
        detailedDescription: "Nous concevons, installons et sécurisons vos réseaux informatiques, du câblage à la mise en place de solutions avancées, pour garantir une connectivité rapide et fiable.",
        features: [
            "Conception d’architecture réseau",
            "Câblage structuré",
            "Installation WiFi et LAN",
            "Configuration de routeurs et switchs",
            "Pare-feu et sécurité avancée",
            "Surveillance et monitoring",
            "Optimisation des performances",
            "Support technique continu"
        ],
        technologies: ["Cisco", "MikroTik", "Ubiquiti", "Fortinet", "AWS Networking"],
        pricing: {
            starter: { name: "Starter", price: "3 000€", features: ["Installation de base", "Configuration LAN", "Support initial"] },
            professional: { name: "Professional", price: "7 500€", features: ["Réseau avancé", "Sécurité renforcée", "Monitoring", "Support 1 an"] },
            enterprise: { name: "Enterprise", price: "Sur devis", features: ["Infrastructure complète", "Cloud hybride", "Support 24/7", "Solutions personnalisées"] }
        },
        testimonial: {
            name: "Olivier Kamga",
            company: "FinTech Africa",
            rating: 5,
            text: "Depuis leur intervention, notre réseau est stable et sécurisé. Une équipe très professionnelle."
        },
        gallery: [
            "https://images.unsplash.com/photo-1581091012184-5c2f2e06aa0d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581093588401-16e07b1a0b07?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1620912189865-8d7f647afd36?w=800&h=600&fit=crop"
        ],
        deliveryTime: "2-6 semaines",
        supportIncluded: "12 mois",
        clientsCount: "200+"
    },
    {
        id: 4,
        title: "Laboratoires de Sciences",
        icon: "🔬",
        gradient: "from-indigo-600 to-indigo-700",
        description: "Installation et maintenance d'équipements scientifiques de pointe pour l'enseignement",
        detailedDescription: "Nous équipons vos laboratoires scolaires et universitaires avec du matériel scientifique moderne, fiable et conforme aux normes de sécurité pour un enseignement pratique de qualité.",
        features: [
            "Installation de matériel scientifique",
            "Maintenance régulière",
            "Équipements de chimie et physique",
            "Laboratoires clé en main",
            "Formation des enseignants",
            "Normes de sécurité respectées",
            "Support technique",
            "Mise à jour équipements"
        ],
        technologies: ["Microscopes numériques", "Capteurs IoT", "Tableaux interactifs", "Logiciels éducatifs"],
        pricing: {
            starter: { name: "Starter", price: "10 000€", features: ["Laboratoire de base", "Installation matérielle", "Support initial"] },
            professional: { name: "Professional", price: "25 000€", features: ["Laboratoire complet", "Équipements modernes", "Formation équipe", "Support 1 an"] },
            enterprise: { name: "Enterprise", price: "Sur devis", features: ["Laboratoires spécialisés", "Solutions sur mesure", "Maintenance continue", "Support dédié"] }
        },
        testimonial: {
            name: "Dr. Awa Koné",
            company: "Université Lumière",
            rating: 5,
            text: "Nos étudiants bénéficient désormais de laboratoires modernes et sécurisés. Une vraie valeur ajoutée !"
        },
        gallery: [
            "https://images.unsplash.com/photo-1581090700227-4c4d3a51af3d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581092334655-f9d7fcae8c1f?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581091215367-1e7c63d86e61?w=800&h=600&fit=crop"
        ],
        deliveryTime: "6-12 semaines",
        supportIncluded: "12 mois",
        clientsCount: "50+"
    }
];
export default services;
