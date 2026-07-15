import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact | KlarityIQ"
        trail={["Contact"]}
        eyebrow="Get Started"
        heading="Let's talk about your operation"
        lede="Book a demo, start the digital transformation maturity assessment, or just ask a question — we'll route it to the right person."
        ctaText="Scroll to Form"
        ctaHref="#book-a-demo"
      />

      <section className="section" id="book-a-demo">
        <div className="container grid-2" style={{ alignItems: "flex-start" }}>
          <div className="form-card">
            <h3 style={{ marginBottom: 6 }}>Book a Demo</h3>
            <p style={{ marginBottom: 24, fontSize: "0.9rem" }}>Tell us a bit about your operation and we'll follow up within one business day.</p>
            <ContactForm />
          </div>
          <div>
            <div className="section-head left mt-0">
              <div className="eyebrow">Other Ways to Start</div>
              <h2>Not ready for a call?</h2>
            </div>
            <div className="card" style={{ marginBottom: 18 }}>
              <h3>Digital Transformation Maturity Assessment</h3>
              <p>A 5-minute self-assessment that benchmarks your operation and suggests where to start.</p>
            </div>
            <div className="card" style={{ marginBottom: 18 }}>
              <h3>Explore the Platform</h3>
              <p>
                Read through{" "}
                <Link to="/custom-agents-automation" style={{ color: "var(--teal-dark)", fontWeight: 700 }}>Custom Agents and Automation</Link>,{" "}
                <Link to="/edge-open-connectivity" style={{ color: "var(--teal-dark)", fontWeight: 700 }}>Edge and Open Connectivity</Link>, or{" "}
                <Link to="/scale-governance-insights" style={{ color: "var(--teal-dark)", fontWeight: 700 }}>Scale, Governance and Insights</Link> at your own pace.
              </p>
            </div>
            <div className="card">
              <h3>General Inquiries</h3>
              <p>
                hello@klarityiq.ai
                <br />
                Response within 1 business day
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
