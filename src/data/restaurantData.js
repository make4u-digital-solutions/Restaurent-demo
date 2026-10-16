export const restaurantData = {
  brand: {
    name: "AURELIA",
    tagline: "Dining & Wood-Fired Lounge",
    announcement: "Seasonal Spring-Summer Tasting Menu Now Available · Reserve For Special Evenings",
    statement:
      "An intimate culinary sanctuary dedicated to the poetry of seasonal ingredients, wood-fired gastronomy, and sincere hospitality.",
    established: "2018",
  },

  contact: {
    address: "428 Heritage Boulevard, Downtown Arts District, NY 10012",
    shortAddress: "428 Heritage Blvd, Arts District, NY",
    phone: "+1 (212) 555-0198",
    phoneRaw: "+12125550198",
    email: "reservations@aureliadining.com",
    googleMapsUrl: "https://maps.google.com/?q=428+Heritage+Boulevard+New+York",
    valet: "Complimentary valet parking available on 5th Avenue entrance",
  },

  hours: [
    { days: "Tuesday – Thursday", times: "5:00 PM – 10:30 PM" },
    { days: "Friday – Saturday", times: "5:00 PM – 11:30 PM" },
    { days: "Sunday", times: "4:30 PM – 10:00 PM" },
    { days: "Monday", times: "Closed for Private Sourcing" },
  ],

  quickInfo: [
    {
      label: "Cuisine Style",
      value: "Artisanal Mediterranean & Hearth Gastronomy",
      iconName: "UtensilsCrossed",
    },
    {
      label: "Opening Hours",
      value: "Tue – Sun: 5:00 PM – Late",
      subtext: "Closed Mondays",
      iconName: "Clock",
    },
    {
      label: "Location",
      value: "428 Heritage Blvd, Arts District",
      subtext: "Downtown Manhattan",
      iconName: "MapPin",
    },
    {
      label: "Experience",
      value: "Dine-in · Chef's Counter · Private Cellar",
      iconName: "Sparkles",
    },
  ],

  signatureDishes: [
    {
      id: "dish-1",
      name: "Pan-Seared Hokkaido Scallops",
      category: "First Course",
      price: "$38",
      description:
        "Silky cauliflower velouté, brown butter emulsion, Siberian Oscietra caviar, charred sea greens, and Meyer lemon oil.",
      image:
        "https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=1200&auto=format&fit=crop",
      badge: "Chef Signature",
      pairing: "Chablis Premier Cru 2020",
    },
    {
      id: "dish-2",
      name: "45-Day Dry-Aged Prime Ribeye",
      category: "Main Course",
      price: "$68",
      description:
        "Cooked over live oak embers, caramelized shallot jus, roasted bone marrow crust, smoked chanterelles, and whipped Yukon gold.",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
      badge: "Woodfire Special",
      pairing: "Barolo DOCG 2018",
    },
    {
      id: "dish-3",
      name: "Handcrafted Saffron Tagliolini",
      category: "Pasta",
      price: "$44",
      description:
        "Butter-poached Maine lobster medallions, Calabrian chili threads, sea urchin emulsion, crisp bottarga, and garden tarragon.",
      image:
        "https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=1200&auto=format&fit=crop",
      badge: "House Made",
      pairing: "Etna Bianco Superiore 2021",
    },
    {
      id: "dish-4",
      name: "Heritage Berkshire Pork Belly",
      category: "Main Course",
      price: "$42",
      description:
        "Slow-braised then wood-crisped with cider honey glaze, spiced quince purée, charred broccolini, and pickled mustard seeds.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
      badge: "Farm Selection",
      pairing: "Pinot Noir Willamette Valley 2021",
    },
    {
      id: "dish-5",
      name: "Smoked Valrhona Chocolate Silk",
      category: "Dessert",
      price: "$20",
      description:
        "70% dark single-origin ganache, roasted Bronte pistachio gelato, hand-harvested Maldon salt flakes, and cacao nib tuile.",
      image:
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop",
      badge: "Pastry Craft",
      pairing: "Tawny Port 20-Year",
    },
    {
      id: "dish-6",
      name: "Black Truffle & Wild Morels Risotto",
      category: "First Course",
      price: "$46",
      description:
        "Acquerello carnaroli rice simmered in 36-month Parmigiano Reggiano broth, shaved Norcia winter truffles, and cultured alpine butter.",
      image:
        "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=1200&auto=format&fit=crop",
      badge: "Seasonal Harvest",
      pairing: "Nebbiolo d'Alba 2020",
    },
  ],

  about: {
    eyebrow: "OUR PHILOSOPHY",
    title: "Rooted in Ancient Fire, Inspired by Seasonal Grace",
    p1: "Founded on the belief that dining is an art form of connection, AURELIA brings together timeless Mediterranean culinary heritage and contemporary wood-fired gastronomy. Every dish begins with daily shipments from regional organic farms, coastal line-fishermen, and heritage growers.",
    p2: "Our open kitchen centers around a custom 12-foot white oak hearth. The flicker of flame and aroma of smoking embers infuse our dining room with an intoxicating, comforting warmth—transforming dinner into an enduring memory.",
    pillars: [
      {
        number: "01",
        title: "Farm-to-Fork Provenance",
        description:
          "Zero shortcuts. 100% of our produce and meats are sourced within 90 miles from certified regenerative partners.",
      },
      {
        number: "02",
        title: "Live Fire Hearth Cooking",
        description:
          "Natural seasoned wood embers impart subtle smoky depth that cannot be replicated by modern stoves.",
      },
      {
        number: "03",
        title: "Sommelier-Curated Cellar",
        description:
          "Over 300 biodynamic, low-intervention labels celebrating the sun-drenched terraced hills of the Mediterranean.",
      },
    ],
    chefQuote:
      "Cooking with fire strips away pretension. It demands intuition, respect for the ingredient, and total presence.",
    chefName: "Julian Vance",
    chefTitle: "Executive Chef & Co-Founder",
    chefImage:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1200&auto=format&fit=crop",
    detailImage:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
  },

  whyChooseUs: [
    {
      id: "strength-1",
      title: "Artisanal Freshness",
      subtitle: "Harvested at Sunrise",
      description:
        "We print our menu adjustments daily to reflect the peak sweetness of morning harvests and immediate catches from regional boats.",
      tag: "Pure Seasonality",
    },
    {
      id: "strength-2",
      title: "Heritage Wood Hearth",
      subtitle: "The Mastery of Ember",
      description:
        "Every cut of meat, delicate scallop, and crusty loaf is finished over dried hickory and fragrant oak coals.",
      tag: "Signature Technique",
    },
    {
      id: "strength-3",
      title: "Attentive Hospitality",
      subtitle: "Unobtrusive & Genuine",
      description:
        "Our team anticipates needs with discreet warmth, ensuring your evening unfolds unhurried and effortlessly.",
      tag: "Guest Experience",
    },
    {
      id: "strength-4",
      title: "Architectural Ambiance",
      subtitle: "Warm Tonal Elegance",
      description:
        "Limestone plaster walls, velvet banquettes, low acoustic ceilings, and golden candlelight designed for intimate conversation.",
      tag: "Intimate Space",
    },
  ],

  gallery: [
    {
      id: "gal-1",
      title: "The Main Dining Room",
      category: "Ambiance",
      image:
        "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop",
      aspect: "wide",
      caption: "Warm candlelight and handcrafted walnut tables set for evening service.",
    },
    {
      id: "gal-2",
      title: "The Live Oak Hearth",
      category: "Kitchen",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
      aspect: "tall",
      caption: "Culinary artisans tending the flames at the open kitchen counter.",
    },
    {
      id: "gal-3",
      title: "Table Detail & Botanicals",
      category: "Details",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
      aspect: "square",
      caption: "Hand-thrown ceramic plateware and pressed linen napkins.",
    },
    {
      id: "gal-4",
      title: "Artisanal Cocktail Lounge",
      category: "Bar",
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop",
      aspect: "tall",
      caption: "Bespoke botanic infusions, smoked aperitifs, and vintage amari.",
    },
    {
      id: "gal-5",
      title: "The Courtyard Veranda",
      category: "Outdoor",
      image:
        "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=1200&auto=format&fit=crop",
      aspect: "wide",
      caption: "Secluded garden patio surrounded by fragrant lemon trees and jasmine.",
    },
    {
      id: "gal-6",
      title: "Morning Brioche & Starters",
      category: "Craft",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
      aspect: "square",
      caption: "Naturally leavened sourdough baked fresh twice daily in our stone oven.",
    },
  ],

  testimonials: [
    {
      id: "rev-1",
      quote:
        "A masterclass in modern dining. The dry-aged ribeye with bone marrow jus is perhaps the most transcendent plate of meat in New York this year.",
      author: "Evelyn Saint-Claire",
      role: "Culinary Editor, Epicurean Gazette",
      source: "Verified Editorial Review",
      stars: 5,
      date: "Spring 2026",
    },
    {
      id: "rev-2",
      quote:
        "Aurelia has mastered the elusive balance between culinary precision and heartfelt warmth. Sitting at the hearth counter feels like dining in a close friend's private villa.",
      author: "Marcus & Clara Lindqvist",
      role: "Dinner Guests",
      source: "OpenTable Diners' Choice",
      stars: 5,
      date: "February 2026",
    },
    {
      id: "rev-3",
      quote:
        "The saffron tagliolini paired with their sommelier's biodynamic Sicilian selection was nothing short of intoxicating. A truly unforgettable anniversary evening.",
      author: "Dr. Jonathan Hayes",
      role: "Private Member",
      source: "Google Local Review",
      stars: 5,
      date: "January 2026",
    },
  ],

  specialOffers: [
    {
      id: "exp-1",
      badge: "Seasonal Experience",
      title: "Chef Julian's 7-Course Hearth Tasting",
      description:
        "An intimate multi-course culinary journey showcasing the week's rare wild forage, prime cuts, and paired cellar selections.",
      details: "Available Tuesday through Saturday · Reservations required 48 hours in advance",
      price: "$165 per guest",
      ctaText: "Enquire About Tasting",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "exp-2",
      badge: "Private Dining",
      title: "The Sommelier's Cellar & Private Room",
      description:
        "Accommodates up to 18 guests in our historic subterranean wine cellar. Tailored menus, dedicated captain, and custom wine pairings.",
      details: "Ideal for intimate celebrations, milestones, and corporate entertaining",
      price: "Custom Menus Available",
      ctaText: "Enquire About Events",
      image:
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  faqs: [
    {
      question: "Do I need an advance reservation?",
      answer:
        "While we always hold a limited number of counter seats for walk-in guests each evening starting at 5:00 PM, we strongly recommend booking your table 2 to 4 weeks in advance for weekend evenings and larger parties.",
    },
    {
      question: "What is your dress code policy?",
      answer:
        "We welcome Smart Casual attire. We ask that guests refrain from athletic wear, beachwear, and flip-flops to preserve the elegant ambiance for all diners.",
    },
    {
      question: "Do you accommodate dietary preferences and allergies?",
      answer:
        "Yes, absolutely. Our kitchen team takes severe allergies and dietary requirements seriously. Please inform us when booking or let your server know upon arrival so our chef can curate suitable substitutes.",
    },
    {
      question: "Is parking or valet service available?",
      answer:
        "We offer complimentary curbside valet parking directly outside our main entrance on Heritage Boulevard beginning at 5:00 PM every evening. Street parking is also available on adjacent avenues.",
    },
    {
      question: "Can I host a private dinner or corporate celebration?",
      answer:
        "Our Private Cellar seats up to 18 guests, and full restaurant buyouts are available for gatherings up to 90 guests. Please contact our events team at events@aureliadining.com or submit an event inquiry.",
    },
    {
      question: "Do you offer takeaway or delivery?",
      answer:
        "To preserve the integrity, temperature, and presentation of our wood-fired dishes, Aurelia is primarily a dine-in establishment. Selected pastry items and sommelier-curated wine bottles may be purchased in person to take home.",
    },
  ],
};
