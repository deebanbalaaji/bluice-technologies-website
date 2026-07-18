import { TrackLink } from "./TrackLink";

export function CTA({ title = "Bring us the product problem that will not stay simple.", context = "A focused 30-minute conversation with a senior product lead." }) {
  return (
    <section className="cta-band">
      <div className="shell cta-grid"><div><p className="label">Start with the problem</p><h2>{title}</h2></div><div><p>{context}</p><TrackLink className="text-link" href="/contact" event="cta_clicked" eventLabel="section">Connect with us <span>↗</span></TrackLink></div></div>
    </section>
  );
}
