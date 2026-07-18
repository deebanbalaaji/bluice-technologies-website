import { services } from "./content";

type ServiceEnhancement = {
  positioning: string;
  problems: string[];
  subservices: { name: string; description: string; includes: string[] }[];
  process: { name: string; description: string }[];
};

const serviceEnhancements: Record<string, ServiceEnhancement> = {
  "product-strategy": {
    positioning: "We turn business ambition, customer evidence and operating constraints into a product direction that leaders can fund and delivery teams can act on.",
    problems: ["Stakeholders disagree on the priority", "The roadmap is a feature inventory", "Customer evidence is incomplete", "Investment decisions lack a clear case"],
    subservices: [
      { name: "Opportunity and market framing", description: "Define the business opportunity, the people affected and the constraints that shape a credible response.", includes: ["Stakeholder interviews", "Evidence review", "Opportunity map"] },
      { name: "Customer and operator research", description: "Understand real decisions, behaviours and workarounds before committing product investment.", includes: ["Research planning", "Field interviews", "Insight synthesis"] },
      { name: "Product vision and proposition", description: "Articulate who the product serves, what changes for them and why the direction is defensible.", includes: ["Value proposition", "Product principles", "Experience vision"] },
      { name: "Roadmap and prioritisation", description: "Sequence outcomes and product bets around evidence, dependencies and investment capacity.", includes: ["Prioritisation model", "Outcome roadmap", "Release hypotheses"] },
      { name: "Success measures and operating model", description: "Define how decisions will be made and how progress will be measured after release.", includes: ["Outcome measures", "Decision rights", "Review cadence"] },
    ],
    process: [
      { name: "Frame", description: "Align leaders on the decision, boundaries and evidence needed." },
      { name: "Investigate", description: "Gather customer, commercial and operational evidence." },
      { name: "Commit", description: "Resolve the direction, roadmap and measures for delivery." },
    ],
  },
  "ux-ui-design": {
    positioning: "We design complex digital products around the decisions people need to make, then validate the experience under real operating conditions.",
    problems: ["Critical workflows are slow or confusing", "Support demand is rising", "The interface has become inconsistent", "Teams debate design without user evidence"],
    subservices: [
      { name: "UX audit and workflow diagnosis", description: "Identify friction, accessibility gaps and structural issues across an existing product.", includes: ["Expert review", "Workflow analysis", "Prioritised findings"] },
      { name: "Service and journey design", description: "Connect front-stage interactions with the people, policies and systems behind the experience.", includes: ["Journey mapping", "Service blueprint", "Failure-point analysis"] },
      { name: "Interaction design and prototyping", description: "Turn complex requirements into testable workflows before engineering commits to them.", includes: ["User flows", "Interactive prototypes", "Decision-state design"] },
      { name: "Interface design and design systems", description: "Create a coherent visual language and reusable components that scale across the product.", includes: ["UI direction", "Component library", "Usage guidance"] },
      { name: "Usability and accessibility validation", description: "Test whether people can understand and complete important tasks across devices and access needs.", includes: ["Usability sessions", "Accessibility review", "Design revisions"] },
    ],
    process: [
      { name: "Observe", description: "Understand the task, environment and current points of failure." },
      { name: "Prototype", description: "Make the riskiest workflows tangible and testable." },
      { name: "Systemise", description: "Resolve the interface and reusable design rules for delivery." },
    ],
  },
  "product-engineering": {
    positioning: "We build and release dependable web and mobile products with architecture, experience and delivery decisions owned by one senior team.",
    problems: ["A validated product needs to reach production", "Release quality is unpredictable", "Legacy decisions slow every change", "Product and engineering work in separate queues"],
    subservices: [
      { name: "Technical discovery and architecture", description: "Resolve system boundaries, delivery risks and architecture decisions before they become expensive rework.", includes: ["Architecture assessment", "Technical plan", "Risk spikes"] },
      { name: "Web application engineering", description: "Build responsive, secure and maintainable web products for customers and operational teams.", includes: ["Frontend engineering", "Backend services", "Production release"] },
      { name: "Mobile product engineering", description: "Deliver native-feeling mobile experiences with resilient data, device and release behaviour.", includes: ["iOS and Android", "Cross-platform delivery", "Store releases"] },
      { name: "API and systems integration", description: "Connect products to business systems through clear contracts, reliable data movement and observable failure handling.", includes: ["API design", "System integration", "Data workflows"] },
      { name: "Quality and release engineering", description: "Build confidence into delivery through automation, review and controlled release practices.", includes: ["Test automation", "Delivery pipelines", "Release controls"] },
      { name: "Modernisation and product rescue", description: "Stabilise a struggling product and improve its foundations without forcing an avoidable rewrite.", includes: ["Codebase assessment", "Incremental modernisation", "Reliability recovery"] },
    ],
    process: [
      { name: "Resolve", description: "Make architecture, scope and operating risks explicit." },
      { name: "Build", description: "Deliver production slices with design and quality integrated." },
      { name: "Release", description: "Introduce the product safely and observe real usage." },
    ],
  },
  "cloud-platform": {
    positioning: "We create cloud and platform foundations that let product teams release safely, understand operations and control cost as demand grows.",
    problems: ["Infrastructure cannot support product growth", "Releases depend on manual intervention", "Incidents are difficult to diagnose", "Cloud cost and ownership are unclear"],
    subservices: [
      { name: "Cloud architecture and migration", description: "Design or evolve cloud environments around product demand, resilience and operational ownership.", includes: ["Target architecture", "Migration plan", "Workload transition"] },
      { name: "Platform engineering", description: "Create reusable foundations that reduce setup work and give teams a safe path to production.", includes: ["Platform services", "Environment patterns", "Developer workflows"] },
      { name: "CI/CD and infrastructure automation", description: "Replace manual release and environment work with repeatable, reviewable automation.", includes: ["Delivery pipelines", "Infrastructure as code", "Release strategies"] },
      { name: "Reliability and observability", description: "Make service health, failure and performance visible before customers report the problem.", includes: ["Service objectives", "Logs and metrics", "Incident readiness"] },
      { name: "Cloud security and compliance", description: "Build proportionate identity, data and operational controls into the platform foundation.", includes: ["Identity controls", "Security baselines", "Audit evidence"] },
      { name: "Cloud cost and performance", description: "Connect technical usage to cost and tune the platform around real product demand.", includes: ["Cost visibility", "Capacity analysis", "Performance tuning"] },
    ],
    process: [
      { name: "Assess", description: "Baseline architecture, operations, risk and cost." },
      { name: "Establish", description: "Build the smallest platform foundation that removes constraints." },
      { name: "Transfer", description: "Document, automate and hand operational confidence to the team." },
    ],
  },
  "continuous-evolution": {
    positioning: "We provide a stable senior team to improve live products through measured releases, operational learning and deliberate technical renewal.",
    problems: ["The product is live but progress has stalled", "Technical debt competes with customer needs", "Teams lack evidence for priorities", "Maintenance absorbs strategic capacity"],
    subservices: [
      { name: "Product analytics and measurement", description: "Define useful product signals and connect releases to customer and operating outcomes.", includes: ["Measurement plan", "Event design", "Outcome reviews"] },
      { name: "Experimentation and optimisation", description: "Improve adoption and task success through focused hypotheses and controlled product changes.", includes: ["Experiment backlog", "Product experiments", "Learning reports"] },
      { name: "Feature and workflow evolution", description: "Extend a live product without losing coherence across experience, architecture and operations.", includes: ["Feature discovery", "Design and build", "Incremental release"] },
      { name: "Performance and reliability improvement", description: "Remove recurring operational friction and strengthen the product where real usage creates pressure.", includes: ["Performance analysis", "Reliability work", "Operational measures"] },
      { name: "Technical debt and modernisation", description: "Reduce structural drag in controlled steps tied to product and operating value.", includes: ["Debt assessment", "Renewal roadmap", "Progressive upgrades"] },
      { name: "Managed product team", description: "Add sustained senior product, design and engineering capacity with clear ownership and review rhythms.", includes: ["Dedicated team", "Delivery cadence", "Quarterly direction review"] },
    ],
    process: [
      { name: "Measure", description: "Baseline customer behaviour, product health and delivery constraints." },
      { name: "Improve", description: "Release the highest-value change in controlled increments." },
      { name: "Learn", description: "Review evidence and resolve the next product decision." },
    ],
  },
};

export const serviceDetails = services.map((service) => ({ ...service, ...serviceEnhancements[service.slug] }));
export function getServiceDetail(slug: string) { return serviceDetails.find((service) => service.slug === slug); }
