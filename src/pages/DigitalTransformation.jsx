import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";

// Orphan page from an earlier 3-pillar taxonomy — not linked from the current
// nav/footer, kept as a direct route for parity with the live site today.
export default function DigitalTransformation() {
  return (
    <>
      <PageHero
        title="Digital Transformation Advisory | KlarityIQ"
        trail={["Digital Transformation Advisory"]}
        eyebrow="Pillar 3 — We make it stick"
        heading="Digital Transformation Advisory"
        lede="Roadmaps, change management, and measurable outcomes — because technology deployment alone doesn't change how a business runs."
        ctaText="Take the Maturity Assessment"
        secondaryCta={{ text: "See the Process", href: "#learn-more" }}
      />

      <section className="section" id="learn-more">
        <div className="container">
          <div className="section-head left">
            <div className="eyebrow">Why This Pillar Exists</div>
            <h2>Technology adoption fails on change management, not code</h2>
            <p>Connecting sensors and deploying agents is the easy part. Getting frontline teams to trust and adopt a new way of working is where most transformation initiatives stall.</p>
          </div>
          <div className="process">
            <div className="process-step"><div className="step-num" /><h3>Assess</h3><p>A structured maturity assessment across people, process, and systems to establish a baseline.</p></div>
            <div className="process-step"><div className="step-num" /><h3>Roadmap</h3><p>A phased plan sequencing IoT connectivity, agent rollout, and process change to minimize disruption.</p></div>
            <div className="process-step"><div className="step-num" /><h3>Enable</h3><p>Training and change management support for the teams who will work alongside the new system daily.</p></div>
            <div className="process-step"><div className="step-num" /><h3>Measure</h3><p>Outcome tracking tied to business KPIs — cost, downtime, throughput — not just system uptime.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head left">
            <div className="eyebrow">What's Included</div>
            <h2>Advisory support at every stage</h2>
          </div>
          <div className="grid-3">
            <div className="card"><div className="icon">◫</div><h3>Digital Maturity Assessment</h3><p>A structured evaluation of where your operation stands today, benchmarked against comparable organizations.</p></div>
            <div className="card"><div className="icon">✎</div><h3>Transformation Roadmap</h3><p>A phased, prioritized plan — not a 100-page strategy deck that never gets executed.</p></div>
            <div className="card"><div className="icon">◔</div><h3>Change Management</h3><p>Structured onboarding and communication support so frontline teams adopt the new workflow, not route around it.</p></div>
            <div className="card"><div className="icon">✓</div><h3>Outcome Tracking</h3><p>Dashboards tied to the business metrics leadership actually cares about, reviewed on a regular cadence.</p></div>
            <div className="card"><div className="icon">⛭</div><h3>Governance &amp; Compliance</h3><p>Guardrails and audit trails that satisfy compliance requirements as autonomy increases.</p></div>
            <div className="card"><div className="icon">↝</div><h3>Ongoing Advisory</h3><p>Quarterly reviews to reassess maturity and adjust the roadmap as your operation evolves.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head left">
            <div className="eyebrow">The Other Two Pillars</div>
            <h2>See how it connects to the rest of the platform</h2>
          </div>
          <div className="grid-2">
            <div className="card">
              <span className="tag-pill" style={{ marginBottom: 12, display: "inline-block" }}>Pillar 1</span>
              <h3><Link to="/iot">IoT &amp; Connected Systems</Link></h3>
              <p>We capture the signal — sensor integration and real-time data pipelines.</p>
              <Link to="/iot" className="learn">Explore →</Link>
            </div>
            <div className="card">
              <span className="tag-pill" style={{ marginBottom: 12, display: "inline-block" }}>Pillar 2</span>
              <h3><Link to="/agentic-ai">Agentic AI &amp; Automation</Link></h3>
              <p>We act on it — autonomous, multi-step decisioning with human oversight.</p>
              <Link to="/agentic-ai" className="learn">Explore →</Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Start with a 5-minute maturity assessment"
        body="No commitment — just a clear picture of where to start."
        ctaText="Take the Assessment"
      />
    </>
  );
}
