import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Bluice Technologies products for tenant operations and AI-assisted business discovery.",
  alternates: { canonical: "/products" },
  openGraph: { title: "Bluice Technologies products", description: "Product systems built around clear operations, responsible data, and useful human decisions.", url: "/products" },
};

export default function ProductsPage() {
  return <main id="main" className="products-page">
    <header className="product-index-hero">
      <div className="shell product-index-hero-grid">
        <div><p className="eyebrow">Bluice products</p><h1>Products shaped around <em>operating clarity.</em></h1></div>
        <div className="product-index-intro"><p>We build focused products where records, decisions, and responsibility need to remain connected—not another layer of software people have to work around.</p><span className="label">Initial product portfolio / 02</span></div>
      </div>
    </header>

    <section className="product-position shell"><p className="eyebrow">Product point of view</p><div><h2>Useful software makes ownership easier to understand.</h2><p>Each Bluice product starts with a specific operating relationship. The interface, data model, automation, and safeguards are organised around the people who must act—not around a list of fashionable features.</p></div></section>

    <section className="product-catalog shell" aria-labelledby="product-catalog-title">
      <header><p className="eyebrow">Current portfolio</p><h2 id="product-catalog-title">Two products. Two clear jobs.</h2></header>
      <div>{products.map((product, index) => <Link className={`product-catalog-row product-tone-${product.slug}`} href={`/products/${product.slug}`} key={product.slug}>
        <span className="product-catalog-index">0{index + 1}</span>
        <div><p className="label">{product.descriptor}</p><h3>{product.name}</h3><p>{product.summary}</p></div>
        <div className="product-catalog-audience"><span className="label">Designed for</span><p>{product.audience.join(" / ")}</p></div>
        <span className="product-catalog-arrow" aria-hidden="true">↗</span>
      </Link>)}</div>
    </section>

    <section className="product-standards"><div className="shell"><header><p className="eyebrow">Shared product standard</p><h2>Clear scope before scale.</h2></header><div>
      <article><h3>Specific operating job</h3><p>Every product must make a recognisable workflow or decision materially clearer.</p></article>
      <article><h3>Responsible information</h3><p>Collection, access, retention, and human accountability are product decisions from the beginning.</p></article>
      <article><h3>Evidence-led evolution</h3><p>New capability should respond to observed needs, not inflate the interface or the product claim.</p></article>
    </div></div></section>
    <CTA title="A product should remove operating ambiguity, not relocate it." context="Explore the current products or talk with Bluice about the operational problem behind your own product." />
  </main>;
}
