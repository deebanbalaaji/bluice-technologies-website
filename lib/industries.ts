export type Sector = {
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  need: string;
  systems: string[];
  scenario: {
    title: string;
    problem: string;
    response: string;
    outcome: string;
  };
};

export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  summary: string;
  operatingReality: string;
  image: string;
  imageAlt: string;
  priorities: string[];
  capabilities: string[];
  sectors: Sector[];
};

export const industries: Industry[] = [
  {
    slug: "financial-services",
    name: "Financial services",
    shortName: "Finance",
    headline: "Faster decisions without weaker controls.",
    summary: "We help financial organisations modernise decision workflows, customer journeys, and regulated platforms while keeping evidence and accountability visible.",
    operatingReality: "Every product decision must balance customer speed, operational control, explainability, security, and regulatory change.",
    image: "/media/industries/financial-services-20260828.jpg",
    imageAlt: "Financial services team collaborating around digital workstations",
    priorities: ["Explainable decisions", "Secure customer journeys", "Operational resilience"],
    capabilities: ["Digital lending", "Payments and fintech", "Insurance operations", "Risk and compliance platforms"],
    sectors: [
      {
        slug: "lending-credit",
        name: "Lending and credit",
        image: "/media/industries/sectors/lending-credit.jpg",
        imageAlt: "Financial advisers reviewing a lending decision with a customer",
        need: "Connect applications, evidence, policy, and human review in one traceable decision flow.",
        systems: ["Application journeys", "Underwriting workspaces", "Policy integrations", "Decision histories"],
        scenario: {
          title: "A clearer route from application to decision",
          problem: "Analysts move between documents, policy notes, and legacy tools. Applicants receive little clarity while reviews slow down.",
          response: "Map the decision, separate evidence from policy, and introduce an explainable workspace alongside existing systems.",
          outcome: "A faster, auditable process with clearer ownership and fewer manual handoffs.",
        },
      },
      {
        slug: "payments-fintech",
        name: "Payments and fintech",
        image: "/media/industries/sectors/payments-fintech.jpg",
        imageAlt: "Fintech operations specialist monitoring digital financial activity",
        need: "Design dependable money movement products that remain clear during failure, review, and reconciliation.",
        systems: ["Payment orchestration", "Merchant operations", "Reconciliation workflows", "Dispute management"],
        scenario: {
          title: "Operations that explain where money moved",
          problem: "Support and finance teams reconstruct payment states across providers, exports, and internal notes.",
          response: "Create a single operational timeline with clear states, exceptions, and accountable next actions.",
          outcome: "Faster resolution, clearer customer communication, and less reconciliation effort.",
        },
      },
      {
        slug: "insurance-wealth",
        name: "Insurance and wealth",
        image: "/media/industries/sectors/insurance-wealth.jpg",
        imageAlt: "Adviser in a planning conversation with a client",
        need: "Make complex products, servicing tasks, and regulated advice easier to understand and operate.",
        systems: ["Policy servicing", "Claims journeys", "Advisor platforms", "Customer self-service"],
        scenario: {
          title: "A service journey built around the customer event",
          problem: "Customers and advisors navigate product language and disconnected service steps during high-stress moments.",
          response: "Reframe the journey around real events, surface evidence requirements early, and connect advisor and customer views.",
          outcome: "A more understandable experience with fewer avoidable contacts and clearer service ownership.",
        },
      },
    ],
  },
  {
    slug: "healthcare-life-sciences",
    name: "Healthcare and life sciences",
    shortName: "Healthcare",
    headline: "Digital systems that respect clinical reality.",
    summary: "We design healthcare products around safe decisions, clear ownership, privacy, and the working conditions of patients, clinicians, and operational teams.",
    operatingReality: "Clarity is a safety requirement. New technology must reduce cognitive and administrative load rather than add another system to manage.",
    image: "/media/industries/healthcare-20260828.jpg",
    imageAlt: "Clinician using a tablet in a healthcare setting",
    priorities: ["Clinical safety", "Privacy by design", "Workflow clarity"],
    capabilities: ["Care coordination", "Patient services", "Digital health products", "Life sciences operations"],
    sectors: [
      {
        slug: "care-delivery",
        name: "Care delivery",
        image: "/media/industries/sectors/care-delivery.jpg",
        imageAlt: "Healthcare professional discussing care with a patient",
        need: "Surface risk, ownership, and next actions without increasing documentation effort.",
        systems: ["Care coordination", "Referral workflows", "Clinical tasking", "Operational command views"],
        scenario: {
          title: "A shared view of the next safe action",
          problem: "Care teams reconstruct patient status across multiple systems and informal handoffs.",
          response: "Design around clinical decisions, validate information hierarchy with care teams, and preserve an auditable history.",
          outcome: "Clearer ownership, faster reviews, and safer coordination across roles.",
        },
      },
      {
        slug: "digital-health",
        name: "Digital health",
        image: "/media/industries/sectors/digital-health.jpg",
        imageAlt: "Clinician using a tablet for a digital health workflow",
        need: "Turn a promising health service into a reliable product that people can understand and trust.",
        systems: ["Patient applications", "Remote monitoring", "Care team portals", "Secure messaging"],
        scenario: {
          title: "A remote service that stays connected to care",
          problem: "Data reaches the platform, but patients and teams lack clear guidance on what requires attention.",
          response: "Define escalation rules, simplify patient tasks, and design a shared operational model for follow-up.",
          outcome: "A more usable service with explicit clinical ownership and safer exception handling.",
        },
      },
      {
        slug: "life-sciences",
        name: "Life sciences",
        image: "/media/industries/sectors/life-sciences.jpg",
        imageAlt: "Life sciences researcher working with laboratory samples",
        need: "Improve evidence, research, and operational workflows while preserving traceability.",
        systems: ["Research operations", "Trial support", "Evidence platforms", "Quality workflows"],
        scenario: {
          title: "Operational evidence that remains usable",
          problem: "Teams spend time consolidating records and checking versions before they can act on evidence.",
          response: "Model provenance, roles, approvals, and exceptions before designing the working interface.",
          outcome: "More consistent reviews and a traceable route from source evidence to action.",
        },
      },
    ],
  },
  {
    slug: "manufacturing-field-operations",
    name: "Manufacturing and field operations",
    shortName: "Manufacturing",
    headline: "Operational software built for the real environment.",
    summary: "We connect production, quality, maintenance, and field work through products designed for reliability, traceability, and constrained operating conditions.",
    operatingReality: "Software must work around equipment, shifts, safety procedures, intermittent connectivity, and the cost of operational interruption.",
    image: "/media/industries/manufacturing-20260828.jpg",
    imageAlt: "Finished vehicles prepared for delivery from a manufacturing operation",
    priorities: ["Uptime", "Traceability", "Frontline usability"],
    capabilities: ["Production operations", "Quality systems", "Maintenance products", "Field service platforms"],
    sectors: [
      {
        slug: "smart-manufacturing",
        name: "Smart manufacturing",
        image: "/media/industries/sectors/smart-manufacturing.jpg",
        imageAlt: "Manufacturing specialist working with industrial equipment",
        need: "Turn machine and production data into clear operating decisions for plant teams.",
        systems: ["Production visibility", "Work instructions", "Exception management", "Planning tools"],
        scenario: {
          title: "A production view organised around intervention",
          problem: "Teams see data from many sources but cannot quickly identify which issue requires action.",
          response: "Define actionable production states, connect source systems, and test workflows on the floor.",
          outcome: "Faster issue recognition and a clearer link between signals, owners, and action.",
        },
      },
      {
        slug: "quality-traceability",
        name: "Quality and traceability",
        image: "/media/industries/sectors/quality-traceability.jpg",
        imageAlt: "Production environment prepared for quality and traceability checks",
        need: "Make evidence capture and quality decisions consistent from source to release.",
        systems: ["Inspection workflows", "Non-conformance management", "Audit evidence", "Material traceability"],
        scenario: {
          title: "Quality evidence captured where work happens",
          problem: "Inspection records arrive late or require manual reconciliation across paper and spreadsheets.",
          response: "Design a low-friction capture flow with explicit standards, exceptions, and review ownership.",
          outcome: "More complete evidence, faster review, and better traceability across the process.",
        },
      },
      {
        slug: "field-service",
        name: "Field service",
        image: "/media/industries/sectors/field-service.jpg",
        imageAlt: "Industrial service environment designed for field operations",
        need: "Support technicians with dependable workflows, usable offline, and connected to central operations.",
        systems: ["Technician applications", "Scheduling", "Asset histories", "Service evidence"],
        scenario: {
          title: "A field workflow that survives weak connectivity",
          problem: "Technicians repeat data entry or lose context when sites have limited network coverage.",
          response: "Prioritise offline-first tasks, local validation, synchronisation states, and clear recovery paths.",
          outcome: "More dependable visits and cleaner operational records without extra technician effort.",
        },
      },
    ],
  },
  {
    slug: "retail-commerce",
    name: "Retail and commerce",
    shortName: "Retail",
    headline: "Commerce products connected to operations.",
    summary: "We improve digital buying, fulfilment, inventory, and service journeys by connecting customer experience with the systems that must deliver it.",
    operatingReality: "A polished storefront is not enough. Inventory, fulfilment, payments, service, and peak demand determine the customer experience.",
    image: "/media/industries/retail-20260828.jpg",
    imageAlt: "Contemporary retail environment with merchandise and customers",
    priorities: ["Conversion clarity", "Inventory confidence", "Peak resilience"],
    capabilities: ["Digital commerce", "Fulfilment operations", "Customer platforms", "Retail workforce tools"],
    sectors: [
      {
        slug: "digital-commerce",
        name: "Digital commerce",
        image: "/media/industries/sectors/digital-commerce.jpg",
        imageAlt: "Shopping cart representing a digital commerce journey",
        need: "Remove uncertainty from discovery, purchase, payment, and post-purchase journeys.",
        systems: ["Commerce experiences", "Checkout", "Account journeys", "Order management"],
        scenario: {
          title: "A buying journey that explains the promise",
          problem: "Customers discover delivery, availability, or service constraints too late in the purchase journey.",
          response: "Connect operational truth to the interface and surface important conditions at the decision point.",
          outcome: "Clearer customer expectations and fewer avoidable service contacts.",
        },
      },
      {
        slug: "fulfilment-operations",
        name: "Fulfilment operations",
        image: "/media/industries/sectors/fulfilment-operations.jpg",
        imageAlt: "Warehouse aisle supporting fulfilment and inventory operations",
        need: "Give operations teams a shared view of orders, inventory, exceptions, and recovery.",
        systems: ["Fulfilment control", "Inventory operations", "Returns", "Exception queues"],
        scenario: {
          title: "One queue for fulfilment exceptions",
          problem: "Teams discover order problems through separate systems and customer contacts.",
          response: "Unify exception states, define ownership, and connect customer communication to operational resolution.",
          outcome: "Faster recovery and more consistent customer updates.",
        },
      },
      {
        slug: "customer-platforms",
        name: "Customer and loyalty platforms",
        image: "/media/industries/sectors/customer-platforms.jpg",
        imageAlt: "Customer and business team beginning a service relationship",
        need: "Create useful customer relationships without adding fragmented campaigns and service tools.",
        systems: ["Customer profiles", "Loyalty products", "Service workspaces", "Personalisation controls"],
        scenario: {
          title: "A customer view that improves service decisions",
          problem: "Customer context is scattered, while staff rely on generic campaigns and incomplete service histories.",
          response: "Define the minimum useful customer record, consent rules, and role-based actions.",
          outcome: "More relevant service with clearer privacy and operational boundaries.",
        },
      },
    ],
  },
  {
    slug: "logistics-mobility",
    name: "Logistics and mobility",
    shortName: "Logistics",
    headline: "One operational picture across moving systems.",
    summary: "We help logistics and mobility organisations connect planning, tracking, exceptions, customer communication, and field execution.",
    operatingReality: "Plans change continuously. Useful software must make deviations visible, assign action, and preserve a reliable operational record.",
    image: "/media/industries/logistics-20260828.jpg",
    imageAlt: "Logistics warehouse with shipping containers and operational equipment",
    priorities: ["Real-time visibility", "Exception ownership", "Operational resilience"],
    capabilities: ["Freight operations", "Warehousing and fulfilment", "Fleet products", "Mobility services"],
    sectors: [
      {
        slug: "freight-logistics",
        name: "Freight and logistics",
        image: "/media/industries/sectors/freight-logistics.jpg",
        imageAlt: "Logistics worker loading parcels into a delivery vehicle",
        need: "Connect bookings, milestones, exceptions, partners, and customer communication.",
        systems: ["Shipment operations", "Track and trace", "Partner integrations", "Customer visibility"],
        scenario: {
          title: "A shared operating view for every shipment",
          problem: "Dispatch, finance, and service teams reconstruct status from different records and partner messages.",
          response: "Define one shipment record, model exceptions, and connect each state to an owner and next action.",
          outcome: "Clearer operations and faster exception resolution across teams.",
        },
      },
      {
        slug: "warehousing-fulfilment",
        name: "Warehousing and fulfilment",
        image: "/media/industries/sectors/warehousing-fulfilment.jpg",
        imageAlt: "Organised distribution warehouse with stocked aisles",
        need: "Improve throughput and accuracy with workflows designed around frontline decisions.",
        systems: ["Warehouse operations", "Picking and packing", "Labour workflows", "Inventory exceptions"],
        scenario: {
          title: "Exception handling at the point of work",
          problem: "Frontline teams leave their workflow to report shortages, damage, or location errors.",
          response: "Embed fast evidence capture and guided resolution inside the operational task.",
          outcome: "Cleaner inventory records and less interruption during fulfilment.",
        },
      },
      {
        slug: "fleet-mobility",
        name: "Fleet and mobility",
        image: "/media/industries/sectors/fleet-mobility.jpg",
        imageAlt: "Large-scale operations environment supporting fleet movement",
        need: "Coordinate vehicles, operators, customers, maintenance, and live service conditions.",
        systems: ["Fleet operations", "Driver applications", "Maintenance planning", "Mobility journeys"],
        scenario: {
          title: "A live service plan that operators can recover",
          problem: "Disruptions create separate decisions across dispatch, drivers, and customer channels.",
          response: "Model disruption types, define recovery playbooks, and share one live plan across roles.",
          outcome: "Faster coordinated recovery and clearer customer information.",
        },
      },
    ],
  },
  {
    slug: "energy-utilities",
    name: "Energy and utilities",
    shortName: "Energy",
    headline: "Modern services for essential infrastructure.",
    summary: "We design customer, field, and operational products for organisations balancing reliability, regulation, sustainability, and infrastructure change.",
    operatingReality: "Digital products sit alongside physical infrastructure, regulated processes, field work, and services that customers depend on every day.",
    image: "/media/industries/energy-20260828.jpg",
    imageAlt: "Renewable energy infrastructure across a wide landscape",
    priorities: ["Service continuity", "Field coordination", "Regulatory clarity"],
    capabilities: ["Customer services", "Field operations", "Asset workflows", "Energy data products"],
    sectors: [
      {
        slug: "customer-energy-services",
        name: "Customer energy services",
        image: "/media/industries/sectors/customer-energy-services.jpg",
        imageAlt: "Energy technician installing solar infrastructure",
        need: "Make billing, usage, support, and service changes understandable across channels.",
        systems: ["Customer portals", "Billing journeys", "Usage insights", "Support workspaces"],
        scenario: {
          title: "A service journey that explains cost and action",
          problem: "Customers contact support because account changes and usage information are difficult to interpret.",
          response: "Organise information around customer questions and connect guidance to account context.",
          outcome: "Clearer self-service and more focused support conversations.",
        },
      },
      {
        slug: "grid-asset-operations",
        name: "Grid and asset operations",
        image: "/media/industries/sectors/grid-asset-operations.jpg",
        imageAlt: "Technician maintaining a distributed energy asset",
        need: "Connect asset condition, planned work, incidents, and operational decisions.",
        systems: ["Asset operations", "Inspection workflows", "Incident coordination", "Maintenance planning"],
        scenario: {
          title: "A common view of asset risk and planned work",
          problem: "Condition data and work plans sit in separate systems with inconsistent prioritisation.",
          response: "Define risk states, connect evidence to work, and make prioritisation decisions traceable.",
          outcome: "Clearer maintenance decisions and more consistent operational planning.",
        },
      },
      {
        slug: "energy-transition",
        name: "Energy transition products",
        image: "/media/industries/sectors/energy-transition.jpg",
        imageAlt: "Utility-scale solar generation supporting the energy transition",
        need: "Build digital services for distributed energy, electrification, and changing customer roles.",
        systems: ["Distributed energy", "EV services", "Partner platforms", "Carbon data products"],
        scenario: {
          title: "A partner journey for distributed assets",
          problem: "Customers, installers, and operators work through fragmented onboarding and approval steps.",
          response: "Create one transparent workflow with evidence, status, decisions, and partner handoffs.",
          outcome: "A more predictable route from application to active service.",
        },
      },
    ],
  },
  {
    slug: "public-services",
    name: "Public services",
    shortName: "Public services",
    headline: "Public digital services people can complete.",
    summary: "We design accessible citizen journeys and dependable casework systems that connect policy intent with the reality of service delivery.",
    operatingReality: "Public services must work for diverse needs, older devices, assisted channels, regulatory duties, and complex organisational boundaries.",
    image: "/media/industries/public-services-20260828.jpg",
    imageAlt: "Public-service team mapping an operational workflow across digital and paper tools",
    priorities: ["Accessibility", "Accountable decisions", "Inclusive service delivery"],
    capabilities: ["Citizen services", "Case management", "Public data products", "Internal operations"],
    sectors: [
      {
        slug: "citizen-services",
        name: "Citizen services",
        image: "/media/industries/sectors/citizen-services.jpg",
        imageAlt: "Public service team planning a citizen-centred programme",
        need: "Make complex eligibility, evidence, and application journeys easier to complete.",
        systems: ["Digital applications", "Eligibility guidance", "Status tracking", "Assisted service tools"],
        scenario: {
          title: "A service that explains what happens next",
          problem: "People abandon applications because requirements and decisions are difficult to understand.",
          response: "Test content and flow with diverse users, surface requirements early, and connect digital and assisted channels.",
          outcome: "A more inclusive journey with fewer incomplete applications and clearer expectations.",
        },
      },
      {
        slug: "case-management",
        name: "Case management",
        image: "/media/industries/sectors/case-management.jpg",
        imageAlt: "Multidisciplinary team collaborating around a case review",
        need: "Help teams make consistent decisions while keeping evidence, policy, and communication connected.",
        systems: ["Casework platforms", "Decision support", "Evidence management", "Team coordination"],
        scenario: {
          title: "Casework organised around the decision",
          problem: "Staff navigate records and notes without a clear view of the current decision or missing evidence.",
          response: "Model the decision, evidence, policy, and next action as separate but connected elements.",
          outcome: "More consistent case handling and clearer accountability.",
        },
      },
      {
        slug: "public-data",
        name: "Public data and operations",
        image: "/media/industries/sectors/public-data.jpg",
        imageAlt: "Data specialist working with secure digital information",
        need: "Turn operational and public data into useful, accessible information products.",
        systems: ["Public information", "Operational reporting", "Data services", "Internal planning"],
        scenario: {
          title: "Information designed around public questions",
          problem: "Published data is accurate but difficult for non-specialists to interpret or act on.",
          response: "Research user questions, establish accessible representations, and retain source context.",
          outcome: "A clearer public product that remains connected to authoritative data.",
        },
      },
    ],
  },
  {
    slug: "enterprise-platforms",
    name: "Enterprise and software platforms",
    shortName: "Platforms",
    headline: "Platforms people can adopt and teams can evolve.",
    summary: "We help software organisations and enterprise teams improve complex products, internal platforms, and the systems that support continuous delivery.",
    operatingReality: "Platform value depends on adoption, maintainability, integration, and a product model that supports many roles without becoming incoherent.",
    image: "/media/industries/enterprise-platforms-20260828.jpg",
    imageAlt: "Product and engineering team collaborating in a modern workspace",
    priorities: ["Adoption", "Maintainability", "Platform coherence"],
    capabilities: ["B2B software", "Enterprise workflows", "Developer platforms", "Product modernisation"],
    sectors: [
      {
        slug: "b2b-software",
        name: "B2B software",
        image: "/media/industries/sectors/b2b-software.jpg",
        imageAlt: "Software engineer building a business application",
        need: "Make complex products easier to understand, configure, and adopt across customer roles.",
        systems: ["Core product workflows", "Administration", "Onboarding", "Design systems"],
        scenario: {
          title: "A product model that grows without confusing users",
          problem: "New features accumulate across disconnected navigation and configuration patterns.",
          response: "Reframe the information architecture, define common interaction rules, and validate priority workflows.",
          outcome: "A more coherent platform with a clearer route to adoption.",
        },
      },
      {
        slug: "enterprise-workflows",
        name: "Enterprise workflows",
        image: "/media/industries/sectors/enterprise-workflows.jpg",
        imageAlt: "Enterprise team collaborating around connected workflows",
        need: "Replace fragmented internal processes with dependable products connected to existing systems.",
        systems: ["Operational workspaces", "Approvals", "Knowledge workflows", "System integrations"],
        scenario: {
          title: "One workflow across organisational boundaries",
          problem: "Teams coordinate through forms, spreadsheets, email, and system-specific queues.",
          response: "Map ownership and evidence, then introduce a shared workflow without forcing a full system replacement.",
          outcome: "Clearer coordination and a maintainable route away from manual handoffs.",
        },
      },
      {
        slug: "developer-platforms",
        name: "Developer platforms",
        image: "/media/industries/sectors/developer-platforms.jpg",
        imageAlt: "Developer working with source code on a platform product",
        need: "Improve delivery speed by treating internal platform capabilities as a product.",
        systems: ["Developer portals", "Delivery pipelines", "Observability", "Cloud foundations"],
        scenario: {
          title: "A paved road teams choose to use",
          problem: "Platform tooling exists, but product teams work around it because the path is unclear or rigid.",
          response: "Research developer journeys, define service boundaries, and improve the highest-friction delivery tasks.",
          outcome: "Stronger adoption and a more consistent release experience.",
        },
      },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

export function getSector(industrySlug: string, sectorSlug: string) {
  const industry = getIndustry(industrySlug);
  const sector = industry?.sectors.find((item) => item.slug === sectorSlug);
  return industry && sector ? { industry, sector } : undefined;
}
