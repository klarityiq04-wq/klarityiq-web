import { Link } from "react-router-dom";

export default function CTABanner({ heading, body, ctaText = "Book a Demo", ctaTo = "/contact" }) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="cta-banner">
          <div>
            <h2>{heading}</h2>
            <p>{body}</p>
          </div>
          <Link to={ctaTo} className="btn btn-primary">{ctaText}</Link>
        </div>
      </div>
    </section>
  );
}
