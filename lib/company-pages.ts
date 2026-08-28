export const companyPages = [
  {
    slug: "operating-model",
    title: "Operating model",
    headline: "One team from business question to live operation.",
    introduction: "Bluice keeps product direction, experience design, engineering, and platform decisions connected. The people shaping the work remain accountable for how it performs after release.",
    sections: [
      ["Start with the operating decision", "We identify what the organisation, customer, or frontline team must be able to decide or do differently. That becomes the basis for scope."],
      ["Prove the riskiest assumption", "Research and working product slices are used to resolve uncertainty before it becomes expensive engineering rework."],
      ["Release in useful increments", "We design the route to production around operational safety, adoption, and measurable learning rather than a single launch event."],
      ["Stay accountable after release", "Live product evidence informs the next decision. Senior product and engineering context does not disappear at handover."],
    ],
  },
  {
    slug: "leadership",
    title: "Leadership and accountability",
    headline: "Senior responsibility stays visible.",
    introduction: "Clients work directly with the people responsible for product direction, experience quality, technical integrity, and delivery decisions.",
    sections: [
      ["Product direction", "A senior product lead connects the business outcome, user evidence, constraints, priorities, and measures of success."],
      ["Experience quality", "Design leadership remains close to research, interaction detail, accessibility, content, and the realities of daily use."],
      ["Engineering integrity", "Engineering leadership owns architecture, software quality, security posture, release safety, and the health of the live product."],
      ["Delivery clarity", "Risks, decisions, progress, and trade-offs remain understandable to stakeholders without creating reporting theatre."],
    ],
  },
  {
    slug: "ways-of-working",
    title: "Ways of working",
    headline: "Clear decisions. Strong craft. Direct communication.",
    introduction: "Our working practices are designed for organisations where product decisions carry operational, commercial, or public consequences.",
    sections: [
      ["Context before activity", "Teams understand the reason for the work, the people affected, and the constraints before solutions are selected."],
      ["Evidence before certainty", "We make uncertainty explicit, test assumptions, and distinguish what is known from what still needs to be learned."],
      ["Together when it matters", "Focused collaboration is used for decisions, critique, and alignment. Deep work remains protected."],
      ["Progress people can inspect", "Working software, research evidence, operational readiness, and clear decisions make progress visible."],
    ],
  },
] as const;

export function getCompanyPage(slug: string) {
  return companyPages.find((page) => page.slug === slug);
}
