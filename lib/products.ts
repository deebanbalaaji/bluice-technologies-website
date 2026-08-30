export type ProductCapability = {
  name: string;
  description: string;
};

export type BluiceProduct = {
  slug: "zutin" | "bluice-nxt";
  name: string;
  descriptor: string;
  status: string;
  headline: string;
  summary: string;
  audience: string[];
  currentScope: string;
  capabilities: ProductCapability[];
  operatingMap: ProductCapability[];
  principles: ProductCapability[];
};

export const products: BluiceProduct[] = [
  {
    slug: "zutin",
    name: "Zutin",
    descriptor: "Tenant and rental operations",
    status: "Version 1 product scope",
    headline: "Keep the rental relationship clear for everyone involved.",
    summary: "Zutin is Bluice Technologies’ tenant-management product for organising rental records, responsibilities, payments, receipts, documents, and maintenance activity in one accountable place.",
    audience: ["Property owners", "Rental operators", "Landlords", "Tenants"],
    currentScope: "Zutin version 1 is an operational record service. It helps landlords and tenants maintain shared rental information, while payment settlement remains with third-party applications and payment verification remains an accountable human action.",
    capabilities: [
      { name: "Properties and rentable spaces", description: "Organise properties, individual spaces, occupancy context, and the people responsible for each rental relationship." },
      { name: "Agreements and charges", description: "Keep agreement details, recurring charges, payment references, and supporting records connected." },
      { name: "Payment submissions and receipts", description: "Let tenants submit payment evidence and allow authorised landlords to verify it before a receipt is issued." },
      { name: "Maintenance workflows", description: "Capture requests, comments, photographs, status changes, and the operating history around an issue." },
      { name: "Documents and identity choices", description: "Support private documents and limited identity information with explicit consent and controlled access." },
      { name: "Account and audit controls", description: "Use role-based access, notification history, and account-deletion paths to make responsibility visible." },
    ],
    operatingMap: [
      { name: "Set up", description: "Create the property, rentable space, and authorised roles." },
      { name: "Connect", description: "Bring the landlord, tenant, agreement, and charge context together." },
      { name: "Operate", description: "Record payments, receipts, documents, and maintenance activity." },
      { name: "Review", description: "Keep history visible and resolve corrections, support, or deletion requests." },
    ],
    principles: [
      { name: "Records, not brokerage", description: "Zutin supports rental operations; it does not verify ownership, broker property, or provide legal, tax, or accounting advice." },
      { name: "No payment custody", description: "The product does not request banking credentials or hold and settle money in version 1." },
      { name: "Purposeful personal data", description: "Identity and rental information is limited to the purpose of administering the relevant relationship." },
    ],
  },
  {
    slug: "bluice-nxt",
    name: "Bluice NXT",
    descriptor: "AI knowledge and opportunity ecosystem",
    status: "Website assistant / evolving ecosystem",
    headline: "Move from a broad question to useful next context.",
    summary: "Bluice NXT is the AI-assisted knowledge layer for Bluice Technologies. It helps visitors navigate published expertise, clarify what they need, and prepare a more useful conversation with the team.",
    audience: ["Business leaders", "Product teams", "Technology leaders", "Prospective clients"],
    currentScope: "The current website assistant answers from published Bluice content, recommends relevant pages, stores optional recent searches on the visitor’s device, and can pass a visitor’s chosen enquiry context to Bluice. Critical decisions still require human confirmation.",
    capabilities: [
      { name: "Website knowledge", description: "Find relevant services, industries, sectors, products, company information, careers, and responsibility material." },
      { name: "Guided discovery", description: "Turn an initial business or operating question into clearer areas to explore without forcing visitors through a long menu." },
      { name: "Context preparation", description: "Help a prospective client organise the problem, operating environment, and desired outcome before contacting Bluice." },
      { name: "Relevant-page routing", description: "Return useful website destinations with enough context for a visitor to decide what to open next." },
      { name: "Consent-led handoff", description: "Send enquiry context only when the visitor chooses to provide their details and submit it." },
      { name: "Local recent searches", description: "Offer an optional history on the visitor’s device, with controls to remove individual searches or clear them all." },
    ],
    operatingMap: [
      { name: "Understand", description: "Interpret the visitor’s question within the published Bluice knowledge base." },
      { name: "Ground", description: "Connect the question to relevant services, industries, products, and company material." },
      { name: "Guide", description: "Suggest a useful next page, question, or way to make the need clearer." },
      { name: "Handoff", description: "Prepare an enquiry for human review only when the visitor explicitly asks to continue." },
    ],
    principles: [
      { name: "Published knowledge first", description: "Responses are constrained to information Bluice has chosen to publish rather than presenting unsupported company claims." },
      { name: "Human confirmation", description: "The assistant supports discovery; it does not replace commercial, technical, legal, or operational judgment." },
      { name: "Visible visitor control", description: "Recent searches can be deleted, enquiry sharing is optional, and critical limitations remain stated in the interface." },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
