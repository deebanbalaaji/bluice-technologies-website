import { defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy", title: "Case study", type: "document",
  fields: [
    defineField({ name: "client", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "industry", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "services", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "summary", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "challenge", type: "text", rows: 5 }),
    defineField({ name: "approach", type: "text", rows: 5 }),
    defineField({ name: "shipped", type: "text", rows: 5 }),
    defineField({ name: "metrics", type: "array", of: [{ type: "object", fields: [{ name: "value", type: "string" }, { name: "label", type: "string" }] }], validation: (rule) => rule.max(3) }),
    defineField({ name: "media", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "testimonial", type: "text", rows: 3 }),
    defineField({ name: "published", type: "boolean", initialValue: false }),
  ], preview: { select: { title: "title", subtitle: "client" } },
});
