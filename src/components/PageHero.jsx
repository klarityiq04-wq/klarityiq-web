import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function PageHero({
  title,
  trail,
  eyebrow,
  heading,
  lede,
  ctaText = "Book a Demo",
  ctaTo = "/contact",
  ctaHref,
  secondaryCta,
}) {
  useEffect(() => {
    if (title) document.title = title;
  }, [title]);

  return (
    <section className="page-hero">
      <div className="container on-dark">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / {trail.join(" / ")}
        </div>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{heading}</h1>
        <p className="lede">{lede}</p>
        <div className="cta-row">
          {ctaHref ? (
            <a href={ctaHref} className="btn btn-primary">{ctaText}</a>
          ) : (
            <Link to={ctaTo} className="btn btn-primary">{ctaText}</Link>
          )}
          {secondaryCta && (
            <a href={secondaryCta.href} className="btn btn-outline">{secondaryCta.text}</a>
          )}
        </div>
      </div>
    </section>
  );
}
