import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";

// Orphan page from an earlier 3-pillar taxonomy — not linked from the current
// nav/footer, kept as a direct route for parity with the live site today.
export default function Iot() {
  return (
    <>
      <PageHero
        title="IoT & Connected Systems | KlarityIQ"
        trail={["IoT & Connected Systems"]}
        eyebrow="Pillar 1 — We capture the signal"
        heading="IoT & Connected Systems"
        lede="Sensor and device integration, real-time data pipelines, and infrastructure that scales with your operation — from a single production line to a global footprint."
        secondaryCta={{ text: "See What We Connect To", href: "#learn-more" }}
      />

      <section className="section" id="learn-more">
        <div className="container">
          <div className="section-head left">
            <div className="eyebrow">What's Included</div>
            <h2>The connectivity layer everything else depends on</h2>
            <p>Agentic AI is only as good as the data it can see. This is where KlarityIQ starts.</p>
          </div>
          <div className="grid-3">
            <div className="card"><div className="icon">⚡</div><h3>Sensor &amp; Device Integration</h3><p>Pre-built connectors for PLCs, sensors, meters, and legacy equipment — no custom middleware required for most deployments.</p></div>
            <div className="card"><div className="icon">↻</div><h3>Real-Time Data Pipelines</h3><p>Sub-second latency from edge to platform, so agentic AI is always reasoning over current state, not yesterday's export.</p></div>
            <div className="card"><div className="icon">▣</div><h3>Edge Processing</h3><p>Local processing for sites with limited or unreliable connectivity, with sync-on-reconnect to keep the platform current.</p></div>
            <div className="card"><div className="icon">◫</div><h3>Unified Data Model</h3><p>Normalize data across equipment brands and protocols into one schema agents and dashboards can both use.</p></div>
            <div className="card"><div className="icon">⌁</div><h3>Historical + Live Views</h3><p>Query live telemetry and historical trends side by side without exporting to a separate analytics tool.</p></div>
            <div className="card"><div className="icon">⛨</div><h3>Secure by Design</h3><p>Encrypted transport, role-based access, and audit trails on every connected device and data stream.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head left">
            <div className="eyebrow">Why It Matters</div>
            <h2>Connectivity is the foundation, not the finish line</h2>
          </div>
          <div className="grid-2">
            <div className="card card-dark">
              <h3>Without unified IoT connectivity</h3>
              <p>Data lives in silos across equipment brands and legacy systems. Teams manually reconcile spreadsheets. Decisions lag hours or days behind what's actually happening on the floor.</p>
            </div>
            <div className="card" style={{ borderColor: "var(--teal)" }}>
              <h3>With KlarityIQ IoT &amp; Connected Systems</h3>
              <p>Every sensor, machine, and system reports into one live model — the same data agentic AI reasons over and your team sees on a dashboard, in real time.</p>
            </div>
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
              <span className="tag-pill" style={{ marginBottom: 12, display: "inline-block" }}>Pillar 2</span>
              <h3><Link to="/agentic-ai">Agentic AI &amp; Automation</Link></h3>
              <p>We act on it — autonomous, multi-step decisioning with human oversight.</p>
              <Link to="/agentic-ai" className="learn">Explore →</Link>
            </div>
            <div className="card">
              <span className="tag-pill" style={{ marginBottom: 12, display: "inline-block" }}>Pillar 3</span>
              <h3><Link to="/digital-transformation">Digital Transformation Advisory</Link></h3>
              <p>We make it stick — roadmaps, change management, measurable outcomes.</p>
              <Link to="/digital-transformation" className="learn">Explore →</Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to connect your operation?"
        body="Talk to us about the systems and sensors you already have — most integrate in days, not months."
      />
    </>
  );
}
