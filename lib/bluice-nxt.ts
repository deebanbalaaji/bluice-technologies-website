import { smartSearch, type SearchItem } from "./search-index";

export type NxtReply = { text: string; links: SearchItem[]; offerEnquiry?: boolean };

const enquirySignals = /\b(contact|proposal|quote|estimate|start a project|talk to|speak to|hire|engage|enquiry|inquiry)\b/i;
const careerSignals = /\b(job|career|role|hiring|vacancy|apply|work at)\b/i;
const responsibilitySignals = /\b(csr|responsib|sustainab|accessib|community|environment|ethical)\b/i;

function publicResults(query: string, limit: number) {
  return smartSearch(query).slice(0, limit).map((result) => {
    const item: SearchItem = { href: result.href, label: result.label, category: result.category, description: result.description, terms: result.terms };
    return item;
  });
}

export function answerWithBluiceKnowledge(input: string): NxtReply {
  const query = input.trim();
  if (!query) return { text: "Describe the operating problem, industry, or product decision you need to make clearer.", links: [] };
  if (/^(hi|hello|hey|good morning|good afternoon)[!. ]*$/i.test(query)) {
    return { text: "Hello. I can help you navigate Bluice services, industry capability, careers, and responsible technology. What are you trying to change?", links: [] };
  }

  const links = publicResults(query, 4);
  if (careerSignals.test(query)) {
    return { text: "Bluice builds teams around product strategy, design, engineering, and cloud or platform work. The careers page explains the current hiring status and how to send a considered introduction.", links: links.length ? links : publicResults("careers", 2) };
  }
  if (responsibilitySignals.test(query)) {
    return { text: "Bluice treats accessibility, data responsibility, environmental care, inclusive practice, and human accountability as part of product quality. The CSR material separates current commitments from future measured reporting.", links: links.length ? links : publicResults("corporate responsibility accessibility", 3) };
  }
  if (enquirySignals.test(query)) {
    return { text: "I can turn this conversation into a structured enquiry for the Bluice team. Review the suggested pages first, or open the enquiry panel and add the contact details needed for a response.", links, offerEnquiry: true };
  }
  if (links.length) {
    return { text: `I found ${links.length} relevant part${links.length === 1 ? "" : "s"} of the Bluice website. These are ranked against your wording and the operating context described on each page.`, links, offerEnquiry: true };
  }
  return { text: "I do not have a strong website-grounded answer yet. Add the industry, affected users, current system, or business outcome and I will narrow the route.", links: [], offerEnquiry: true };
}
