const commonCareerPractices = ["Product strategy", "Product design", "Product engineering", "Cloud and platform"] as const;

export const regions = {
  IN: {
    name: "India", currency: "INR", symbol: "₹", marketLine: "India delivery / Global product teams", footerLine: "India / Global delivery",
    image: "/media/regions/in-main-v2.jpg", imageAlt: "Professionals collaborating over a laptop in an Ahmedabad office",
    marketHeadline: "Build for scale, access, and operational diversity.",
    marketIntroduction: "In India, we design for multilingual journeys, mixed device conditions, high-volume services, and operations that connect metro, tier-two, and distributed teams.",
    cultureNote: "Local context means respecting language, accessibility, regional difference, and the many ways people access essential and commercial services. We do not reduce that diversity to a single cultural assumption.",
    marketPriorities: [
      { title: "Inclusive reach", detail: "Accessible, multilingual-ready journeys for varied devices, connectivity, and levels of digital confidence." },
      { title: "Operational scale", detail: "Products designed for high-volume services, partner networks, and distributed operations." },
      { title: "Data responsibility", detail: "Clear consent, governance, and security decisions aligned with applicable Indian requirements." },
    ],
    industryFocus: [
      { slug: "financial-services", label: "Financial services", context: "Digital lending, payments, service operations, and explainable decision workflows built for broad access." },
      { slug: "healthcare-life-sciences", label: "Healthcare", context: "Care access, coordination, and operational products that work across complex provider networks." },
      { slug: "manufacturing-field-operations", label: "Manufacturing", context: "Production, quality, field service, and supply workflows connected across distributed operations." },
      { slug: "public-services", label: "Public services", context: "Accessible citizen journeys and accountable casework at meaningful scale." },
    ],
    career: { headline: "Build from India. Work with global operating context.", introduction: "Our India-based team combines strong individual craft with direct responsibility for product outcomes across markets.", practices: commonCareerPractices, workingContext: ["Remote collaboration with deliberate team time", "English for shared delivery, with regional language awareness", "Respect for faith, identity, family, and individual working needs"], inclusion: "Hiring decisions are based on role evidence and working judgment. We design interviews to support different communication styles and access needs." },
    terms: "Visitors in India retain any mandatory rights available under Indian law. Website enquiries and proposals remain subject to a separate written services agreement.",
    privacy: "For people in India, our handling of digital personal data is informed by the Digital Personal Data Protection Act, 2023, as its provisions apply.", authority: "Ministry of Electronics and Information Technology", authorityUrl: "https://www.meity.gov.in/static/uploads/2024/02/Digital-Personal-Data-Protection-Act-2023.pdf",
  },
  US: {
    name: "United States", currency: "USD", symbol: "$", marketLine: "United States market / Global delivery", footerLine: "United States / Global delivery",
    image: "/media/regions/us-main-v2.jpg", imageAlt: "Professionals collaborating with a laptop in a San Francisco workspace",
    marketHeadline: "Modernise critical systems without slowing the business.",
    marketIntroduction: "For United States organisations, we focus on incremental platform modernisation, state-aware privacy, accessibility, and product operations across complex enterprise environments.",
    cultureNote: "Regional context includes accessibility, varied state requirements, diverse workforces, and service expectations across a large market. Products should make room for that difference without profiling people by belief or identity.",
    marketPriorities: [
      { title: "Modernisation", detail: "Incremental routes away from fragmented platforms and manual operational work." },
      { title: "Accessibility", detail: "Inclusive customer and employee products designed around recognised accessibility expectations." },
      { title: "State-aware privacy", detail: "Product and consent decisions that account for applicable federal and state requirements." },
    ],
    industryFocus: [
      { slug: "enterprise-platforms", label: "Enterprise platforms", context: "Modernisation, internal workflows, developer platforms, and integration across established technology estates." },
      { slug: "financial-services", label: "Financial services", context: "Customer journeys and decision systems shaped around controls, evidence, and state-aware obligations." },
      { slug: "healthcare-life-sciences", label: "Healthcare", context: "Accessible patient and workforce products connected to clinical and administrative operations." },
      { slug: "retail-commerce", label: "Retail and commerce", context: "Commerce, fulfilment, inventory, and service products operating at national scale." },
    ],
    career: { headline: "Work across time zones without losing ownership.", introduction: "We welcome experienced practitioners who can collaborate directly with United States product and operating teams while remaining part of one Bluice practice.", practices: commonCareerPractices, workingContext: ["Distributed delivery with explicit overlap windows", "Accessible remote collaboration", "Respect for varied identities, beliefs, and working circumstances"], inclusion: "Introductions are assessed on relevant work and judgment. Interview accommodations are available and location expectations are stated before a process begins." },
    terms: "Visitors in the United States retain mandatory rights available under applicable federal and state law. A signed services agreement defines the governing terms for client work.", privacy: "For people in the United States, rights can vary by state. Where applicable, requests may include access, correction, deletion, or opting out of certain sharing; California residents may have rights under the CCPA as amended by the CPRA.", authority: "Federal Trade Commission privacy guidance", authorityUrl: "https://www.ftc.gov/business-guidance/privacy-security",
  },
  GB: {
    name: "United Kingdom", currency: "GBP", symbol: "£", marketLine: "United Kingdom market / Global delivery", footerLine: "United Kingdom / Global delivery",
    image: "/media/regions/gb-main-v2.jpg", imageAlt: "Business professionals discussing ideas in a London office",
    marketHeadline: "Design dependable services around regulation and public trust.",
    marketIntroduction: "For United Kingdom organisations, we focus on accessible service design, regulated decisions, measured modernisation, and the connection between digital and assisted channels.",
    cultureNote: "Local relevance means accounting for the nations and communities of the UK, public-service expectations, accessibility, and a diverse workforce without treating any group as a visual motif.",
    marketPriorities: [
      { title: "Service accessibility", detail: "Clear journeys that consider assisted channels and recognised accessibility standards." },
      { title: "Regulated decisions", detail: "Evidence, consent, and accountability built into product and operational workflows." },
      { title: "Practical modernisation", detail: "Measured change that works alongside existing platforms and service obligations." },
    ],
    industryFocus: [
      { slug: "public-services", label: "Public services", context: "Citizen journeys, case management, and operational services designed for digital and assisted access." },
      { slug: "financial-services", label: "Financial services", context: "Explainable decisions, accessible journeys, and operational controls for regulated products." },
      { slug: "energy-utilities", label: "Energy and utilities", context: "Customer, field, and asset services balancing reliability with infrastructure transition." },
      { slug: "enterprise-platforms", label: "Enterprise platforms", context: "Practical modernisation that respects established systems and service commitments." },
    ],
    career: { headline: "Bring service judgment to consequential products.", introduction: "UK collaboration centres on accessible services, careful modernisation, and clear accountability across client and delivery teams.", practices: commonCareerPractices, workingContext: ["Remote-first collaboration with planned overlap", "Accessibility built into working sessions", "Respect for faith, identity, caring responsibilities, and individual needs"], inclusion: "Selection focuses on evidence and decisions, with reasonable adjustments available throughout the process." },
    terms: "Visitors in the United Kingdom retain mandatory rights available under UK law. Nothing in these website terms limits rights that cannot lawfully be excluded.", privacy: "For people in the United Kingdom, applicable rights may include access, correction, erasure, restriction, objection, and data portability under the UK GDPR and Data Protection Act 2018.", authority: "Information Commissioner’s Office", authorityUrl: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/",
  },
  AE: {
    name: "United Arab Emirates", currency: "AED", symbol: "AED", marketLine: "UAE market / Global delivery", footerLine: "United Arab Emirates / Global delivery",
    image: "/media/regions/ae-main-v2.jpg", imageAlt: "A multicultural team holding a hybrid meeting in a Dubai office",
    marketHeadline: "Connect ambitious digital services to real operations.",
    marketIntroduction: "For organisations in the UAE, we focus on Arabic and English service structures, smart operations, regional platforms, and high-growth customer experiences.",
    cultureNote: "Local delivery respects Arabic language, Islamic cultural context, a multinational workforce, and the different service expectations of residents, citizens, and visitors. Product decisions remain inclusive rather than assuming one user profile.",
    marketPriorities: [
      { title: "Bilingual service", detail: "Product structures supporting Arabic and English, including right-to-left experience quality." },
      { title: "Smart operations", detail: "Connected workflows for service, logistics, commerce, and infrastructure operations." },
      { title: "Regional growth", detail: "Platforms prepared for varied markets, partners, currencies, and regulatory conditions." },
    ],
    industryFocus: [
      { slug: "logistics-mobility", label: "Logistics and mobility", context: "Operational visibility across ports, freight, mobility, and fast-moving service networks." },
      { slug: "retail-commerce", label: "Retail and commerce", context: "Bilingual commerce and service journeys connected to fulfilment and customer operations." },
      { slug: "energy-utilities", label: "Energy and utilities", context: "Digital customer, field, and asset products for essential and evolving infrastructure." },
      { slug: "public-services", label: "Public services", context: "High-quality bilingual resident and business services connected to accountable operations." },
    ],
    career: { headline: "Design for a bilingual, international operating environment.", introduction: "UAE work combines regional service expectations with global product standards and direct attention to Arabic experience quality.", practices: commonCareerPractices, workingContext: ["Arabic and English product awareness", "Collaboration across a multinational workforce", "Respect for Islamic practice, other faiths, identity, and individual needs"], inclusion: "Candidates are assessed on craft and judgment. Location, schedule, language, and access expectations are discussed before interviews progress." },
    terms: "Visitors in the United Arab Emirates retain mandatory rights available under UAE law. Client engagements are governed by their signed services agreement.", privacy: "For people in the UAE, applicable rights may include access, correction, deletion, restriction, objection, and data portability under Federal Decree-Law No. 45 of 2021, subject to its scope and exceptions.", authority: "UAE Legislation platform", authorityUrl: "https://uaelegislation.gov.ae/en/legislations/1972",
  },
  SG: {
    name: "Singapore", currency: "SGD", symbol: "S$", marketLine: "Singapore market / Global delivery", footerLine: "Singapore / Global delivery",
    image: "/media/regions/sg-main-v2.jpg", imageAlt: "Operations specialists monitoring digital systems in Singapore",
    marketHeadline: "Build regional platforms with clear governance.",
    marketIntroduction: "For organisations in Singapore, we focus on cross-border operations, data responsibility, dependable services, and products prepared for Southeast Asian markets.",
    cultureNote: "Local context includes a multicultural and multi-faith society, four official languages, regional business connections, and strong expectations around service reliability. We design for inclusion without turning identity into targeting.",
    marketPriorities: [
      { title: "Regional platforms", detail: "Products designed for multiple markets, operating models, languages, and partner ecosystems." },
      { title: "Data governance", detail: "Clear collection, access, retention, and accountability decisions within product workflows." },
      { title: "Service reliability", detail: "Operational and platform foundations designed for dependable regional delivery." },
    ],
    industryFocus: [
      { slug: "financial-services", label: "Financial services", context: "Regional finance and decision products with clear governance and cross-border operating awareness." },
      { slug: "logistics-mobility", label: "Logistics and mobility", context: "Port, freight, fulfilment, and mobility products connecting regional networks." },
      { slug: "enterprise-platforms", label: "Enterprise platforms", context: "Multi-market workflows and software platforms built for dependable regional operation." },
      { slug: "healthcare-life-sciences", label: "Healthcare", context: "Service and coordination products designed around reliable access and operational clarity." },
    ],
    career: { headline: "Build products for Southeast Asian operating complexity.", introduction: "Singapore collaboration combines regional platform thinking, dependable delivery, and respect for multicultural service environments.", practices: commonCareerPractices, workingContext: ["Cross-border collaboration across Southeast Asia", "English for shared delivery with multilingual awareness", "Respect for different faiths, identities, cultures, and working needs"], inclusion: "Selection is evidence-led and access needs can be raised at any stage. Regional availability and working overlap are explained clearly." },
    terms: "Visitors in Singapore retain mandatory rights available under Singapore law. A separate signed agreement governs the scope and terms of client services.", privacy: "For people in Singapore, personal data is handled with reference to the Personal Data Protection Act 2012, including its rules for collection, use, disclosure, access, correction, protection, and retention.", authority: "Personal Data Protection Commission", authorityUrl: "https://www.pdpc.gov.sg/overview-of-pdpa/the-legislation/personal-data-protection-act",
  },
} as const;

export type RegionCode = keyof typeof regions;
