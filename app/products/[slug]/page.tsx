import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { NxtLaunchButton } from "@/components/NxtLaunchButton";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const product = getProduct((await params).slug);
  return product ? {
    title: product.name,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { title: product.name, description: product.summary, url: `/products/${product.slug}` },
  } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const isNxt = product.slug === "bluice-nxt";

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: isNxt ? "BusinessApplication" : "PropertyManagementApplication",
    operatingSystem: "Web",
    description: product.summary,
    creator: { "@type": "Organization", name: "Bluice Technologies" },
  };

  return <main id="main" className={`product-detail product-detail-${product.slug}`}>
    <header className="product-detail-hero">
      <div className="shell product-detail-hero-grid">
        <div className="product-detail-copy"><Link className="product-breadcrumb" href="/products">Products <span>/</span> {product.name}</Link><p className="eyebrow">{product.descriptor}</p><h1>{product.name}</h1><p>{product.headline}</p></div>
        <aside className="product-hero-register"><span className="label">{product.status}</span><p>{product.summary}</p><div>{product.audience.map((item) => <span key={item}>{item}</span>)}</div></aside>
      </div>
      <div className="shell product-system-map" aria-label={`${product.name} operating model`}>{product.operatingMap.map((item, index) => <article key={item.name}><span>0{index + 1}</span><h2>{item.name}</h2><p>{item.description}</p></article>)}</div>
    </header>

    <section className="product-scope shell"><p className="eyebrow">Current product scope</p><div><h2>{isNxt ? "Useful guidance, with a visible boundary." : "A shared operational record, not a substitute for responsibility."}</h2><p>{product.currentScope}</p>{isNxt ? <NxtLaunchButton className="product-primary-action" /> : <Link className="product-primary-action" href="/rentops/privacy">Read the product privacy policy <span>↗</span></Link>}</div></section>

    <section className="product-capabilities"><div className="shell"><header><p className="eyebrow">Product capabilities</p><h2>What {product.name} brings together.</h2></header><div className="product-capability-grid">{product.capabilities.map((capability, index) => <article key={capability.name}><span>0{index + 1}</span><h3>{capability.name}</h3><p>{capability.description}</p></article>)}</div></div></section>

    <section className="product-principles shell"><header><p className="eyebrow">Product boundaries</p><h2>Trust depends on what the product refuses to blur.</h2></header><div>{product.principles.map((principle) => <article key={principle.name}><h3>{principle.name}</h3><p>{principle.description}</p></article>)}</div></section>

    {!isNxt && <nav className="product-legal shell" aria-label="Zutin product support and legal information"><p className="label">Zutin information</p><div><Link href="/rentops/privacy">Privacy Policy <span>↗</span></Link><Link href="/rentops/terms">Terms of Service <span>↗</span></Link><Link href="/rentops/delete-account">Delete an account <span>↗</span></Link></div></nav>}

    <nav className="product-switch" aria-label="Explore another product"><div className="shell"><p className="label">Explore another product</p>{products.filter(({ slug }) => slug !== product.slug).map((item) => <Link href={`/products/${item.slug}`} key={item.slug}>{item.name}<span>↗</span></Link>)}</div></nav>
    <CTA title={isNxt ? "Use AI to make the next conversation more useful." : "Make rental operations clearer for both sides of the relationship."} context={isNxt ? "Open Bluice NXT to explore the website, or contact the team when the question needs human judgment." : "Review the product scope and legal information, or contact Bluice Technologies with a product question."} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
  </main>;
}
