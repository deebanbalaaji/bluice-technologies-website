import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { companyPages, getCompanyPage } from "@/lib/company-pages";

export function generateStaticParams() { return companyPages.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const page = getCompanyPage((await params).slug);
  return page ? { title: page.title, description: page.introduction, alternates: { canonical: `/about/${page.slug}` } } : {};
}

export default async function CompanyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const page = getCompanyPage((await params).slug);
  if (!page) notFound();
  return <main id="main" className="company-detail">
    <header className={`company-detail-hero contextual-hero contextual-hero-company company-detail-${page.slug} shell`}><nav aria-label="Breadcrumb"><Link href="/about">Who we are</Link><span>/</span><b>{page.title}</b></nav><h1>{page.headline}</h1><p>{page.introduction}</p></header>
    <section className="company-detail-ledger shell">{page.sections.map(([title, detail], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{title}</h2><p>{detail}</p></article>)}</section>
    <CTA />
  </main>;
}
