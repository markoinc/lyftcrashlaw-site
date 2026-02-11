export interface Resource {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
}

export const resources: Resource[] = [
  {
    slug: "what-to-do-after-Lyft-accident",
    title: "What to Do After a Lyft Accident",
    description: "Step-by-step guide on what to do immediately after being involved in an Uber or Lyft accident.",
    category: "Guides",
    readTime: "10 min"
  },
  {
    slug: "Lyft-insurance-coverage",
    title: "Complete Guide to Lyft Insurance Coverage",
    description: "Understanding Lyft's three-tier insurance system and how coverage changes during different ride phases.",
    category: "Guides",
    readTime: "12 min"
  },
  {
    slug: "passenger-rights",
    title: "Lyft Passenger Rights Guide",
    description: "Know your rights as a Lyft passenger before, during, and after a Lyft accident.",
    category: "Guides",
    readTime: "8 min"
  },
  {
    slug: "evidence-preservation",
    title: "Preserving Evidence After Lyft Accidents",
    description: "Critical evidence to collect and preserve to strengthen your Lyft accident claim.",
    category: "Guides",
    readTime: "9 min"
  },
  {
    slug: "lyft-vs-lyft-insurance",
    title: "Lyft vs. Lyft Insurance Comparison",
    description: "Side-by-side comparison of Uber and Lyft insurance coverage and claim processes.",
    category: "Comparisons",
    readTime: "8 min"
  },
  {
    slug: "Lyft-laws-by-state",
    title: "Lyft Laws by State",
    description: "State-by-state breakdown of Lyft regulations, insurance requirements, and consumer protections.",
    category: "Legal Info",
    readTime: "15 min"
  },
  {
    slug: "statute-of-limitations",
    title: "Lyft Accident Statute of Limitations",
    description: "Time limits for filing Lyft accident claims in all 50 states plus DC.",
    category: "Legal Info",
    readTime: "10 min"
  },
  {
    slug: "Lyft-accident-checklist",
    title: "Lyft Accident Checklist",
    description: "Printable checklist of everything to do after a Lyft accident to protect your rights.",
    category: "Checklists",
    readTime: "5 min"
  },
  {
    slug: "dealing-with-Lyft-insurance",
    title: "Dealing With Lyft Insurance Company",
    description: "Tips for communicating with James River Insurance and other Lyft insurers.",
    category: "Guides",
    readTime: "8 min"
  },
  {
    slug: "finding-Lyft-accident-lawyer",
    title: "How to Find a Lyft Accident Lawyer",
    description: "What to look for when hiring an attorney for your Lyft accident case.",
    category: "Guides",
    readTime: "7 min"
  },
  {
    slug: "lyft-settlement-guide",
    title: "Lyft Accident Settlement Guide",
    description: "Understanding the settlement process, typical values, and how to maximize your compensation.",
    category: "Guides",
    readTime: "12 min"
  },
  {
    slug: "medical-treatment-guide",
    title: "Medical Treatment After Lyft Accidents",
    description: "Guide to seeking and documenting medical treatment to support your accident claim.",
    category: "Guides",
    readTime: "9 min"
  },
  {
    slug: "Lyft-safety-tips",
    title: "Lyft Safety Tips",
    description: "How to stay safe when using Lyft services and what to do if something goes wrong.",
    category: "Safety",
    readTime: "6 min"
  },
  {
    slug: "comparative-negligence-guide",
    title: "Comparative Negligence in Lyft Claims",
    description: "How fault is divided in Lyft accidents and how it affects your compensation.",
    category: "Legal Info",
    readTime: "8 min"
  },
  {
    slug: "autonomous-Lyft-accidents",
    title: "Autonomous Lyft Vehicle Accidents",
    description: "Legal issues unique to accidents involving Lyft companies' self-driving vehicles.",
    category: "Legal Info",
    readTime: "10 min"
  }
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find(r => r.slug === slug);
}

export function getResourcesByCategory(category: string): Resource[] {
  return resources.filter(r => r.category === category);
}

export function getResourceCategories(): string[] {
  return [...new Set(resources.map(r => r.category))];
}
