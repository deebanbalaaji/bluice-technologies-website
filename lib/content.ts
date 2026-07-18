export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  industry: string;
  services: string[];
  summary: string;
  challenge: string;
  approach: string;
  shipped: string;
  metrics: { value: string; label: string }[];
  testimonial: string;
};

export const services = [
  {
    slug: "product-strategy",
    name: "Product strategy",
    summary: "Turn competing business needs into a product direction your team can execute.",
    outcomes: ["Opportunity framing", "Validated product roadmap", "Investment case"],
    deliverables: ["Stakeholder research", "Product brief", "Prioritised roadmap", "Success measures"],
    stage: "When the problem is important but the path is not yet clear.",
    engagement: "Focused discovery or direction sprint",
    duration: "Typically 3–6 weeks",
  },
  {
    slug: "ux-ui-design",
    name: "UX & UI design",
    summary: "Make complex workflows legible, efficient and ready for real operating conditions.",
    outcomes: ["Faster task completion", "Lower support demand", "Higher adoption"],
    deliverables: ["Service blueprint", "Prototypes", "Design system", "Usability evidence"],
    stage: "When users understand the value but struggle with the experience.",
    engagement: "Embedded design track or focused redesign",
    duration: "Typically 4–10 weeks",
  },
  {
    slug: "product-engineering",
    name: "Product engineering",
    summary: "Ship dependable web and mobile products with product, design and engineering in one team.",
    outcomes: ["Predictable releases", "Lower operating risk", "A maintainable product"],
    deliverables: ["Technical design", "Production software", "Quality automation", "Release operations"],
    stage: "When you need to move from validated direction to a resilient product.",
    engagement: "Product squad or phased build",
    duration: "Usually 12+ weeks",
  },
  {
    slug: "cloud-platform",
    name: "Cloud & platform",
    summary: "Build the foundations that let product teams release safely and scale deliberately.",
    outcomes: ["Stable operations", "Shorter release cycles", "Clear cost controls"],
    deliverables: ["Platform architecture", "Delivery pipelines", "Observability", "Security controls"],
    stage: "When product demand is outgrowing the current technical foundation.",
    engagement: "Platform assessment or implementation team",
    duration: "Typically 6–16 weeks",
  },
  {
    slug: "continuous-evolution",
    name: "Continuous evolution",
    summary: "Improve live products through measured changes rather than periodic rewrites.",
    outcomes: ["Compounding product gains", "Reduced technical debt", "Senior continuity"],
    deliverables: ["Product analytics", "Experiment backlog", "Incremental releases", "Operational reviews"],
    stage: "When a live product needs a steady senior team to keep improving it.",
    engagement: "Senior retained product squad",
    duration: "Quarterly delivery cadence",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "harbor-freight-operations",
    client: "Harbor",
    title: "One operating view for a fragmented freight network",
    industry: "Logistics",
    services: ["Product strategy", "UX & UI design", "Product engineering"],
    summary: "We replaced spreadsheet handoffs with a shared operations product used from booking through exception resolution.",
    challenge: "Dispatchers, finance teams and customers were working from different records. Every delay created manual reconciliation and avoidable calls.",
    approach: "We mapped the exception journey with frontline operators, defined a single shipment record and tested a thin workflow before expanding coverage.",
    shipped: "A role-aware web application, live event timeline, exception queue and customer status view connected to the existing transport systems.",
    metrics: [{ value: "41%", label: "fewer status calls" }, { value: "2.4×", label: "faster exception handling" }, { value: "12 wk", label: "to first live route" }],
    testimonial: "Bluice Technologies made the operational complexity visible, then removed it one decision at a time.",
  },
  {
    slug: "morrow-care-coordination",
    client: "Morrow Health",
    title: "Care coordination clinicians could trust at a glance",
    industry: "Healthcare",
    services: ["UX & UI design", "Product engineering", "Cloud & platform"],
    summary: "A calm clinical workspace that surfaces risk, ownership and next actions without adding administrative work.",
    challenge: "Care teams were using multiple systems to reconstruct a patient’s current state, delaying interventions and obscuring ownership.",
    approach: "We observed clinical reviews, designed around decisions rather than records, and validated information hierarchy with nurses and coordinators.",
    shipped: "A secure coordination workspace with risk flags, care-plan status, task ownership and auditable handoffs.",
    metrics: [{ value: "32%", label: "less review time" }, { value: "68", label: "NPS from clinicians" }, { value: "99.95%", label: "service availability" }],
    testimonial: "The team understood that clarity is a safety feature, not a visual preference.",
  },
  {
    slug: "relay-finance-platform",
    client: "Relay",
    title: "A lending platform rebuilt around confident decisions",
    industry: "Financial services",
    services: ["Product strategy", "Product engineering", "Continuous evolution"],
    summary: "We consolidated underwriting evidence and policy checks into a faster, explainable decision workflow.",
    challenge: "Analysts moved between documents, legacy screens and policy notes, creating slow decisions and inconsistent audit evidence.",
    approach: "We modelled the decision, separated evidence from policy, and released the workflow in stages alongside the existing platform.",
    shipped: "An explainable underwriting workspace, policy engine integration, document evidence view and complete decision history.",
    metrics: [{ value: "56%", label: "faster decisions" }, { value: "0", label: "critical migration incidents" }, { value: "3.1×", label: "release frequency" }],
    testimonial: "They improved the product without asking the business to pause while they did it.",
  },
];

export const principles = [
  ["Clarity before velocity", "A faster team moving in the wrong direction only creates more rework."],
  ["Evidence over theatre", "Decisions are tied to user behaviour, operating constraints and measurable outcomes."],
  ["Senior people stay close", "The people shaping the work remain accountable through delivery."],
];
