import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";

// Orphan page from an earlier 3-pillar taxonomy — not linked from the current
// nav/footer, kept as a direct route for parity with the live site today.
export default function AgenticAi() {
  return (
    <>
      <PageHero
        title="Agentic AI & Automation | KlarityIQ"
        trail={["Agentic AI & Automation"]}
        eyebrow="Pillar 2 — We act on it"
        heading="Agentic AI & Automation"
        lede="AI agents that reason through multi-step decisions and execute them — with human oversight built in wherever it matters most."
        secondaryCta={{ text: "How Agentic AI Differs", href: "#learn-more" }}
      />

      <section className="section" id="learn-more">
        <div className="container">
          <div className="section-head left">
            <div className="eyebrow">Agentic AI vs. AI-Assisted</div>
            <h2>Not another dashboard — a system that acts</h2>
            <p>Most "AI" tools summarize data and leave the decision to a person. Agentic AI reasons through the decision <em>and</em> takes the next step, inside guardrails your team defines.</p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>AI-Assisted (most tools)</h3>
              <p>Surfaces an alert or insight. A person interprets it, decides what to do, and manually executes the fix. Fast at reporting, slow at resolving.</p>
            </div>
            <div className="card" style={{ borderColor: "var(--teal)" }}>
              <h3>Agentic AI (KlarityIQ)</h3>
              <p>Detects the anomaly, reasons through the appropriate multi-step response, and executes it — routing to a human only when it's outside defined guardrails.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head left">
            <div className="eyebrow">Capabilities</div>
            <h2>What agents can do out of the box</h2>
          </div>
          <div className="grid-3">
            <div className="card"><div className="icon">◔</div><h3>Multi-Step Reasoning</h3><p>Agents chain multiple decisions together — diagnose, evaluate options, choose, and act — not single-rule triggers.</p></div>
            <div className="card"><div className="icon">⛭</div><h3>Configurable Guardrails</h3><p>Define exactly what an agent can decide autonomously versus what requires human sign-off, down to the action type.</p></div>
            <div className="card"><div className="icon">◑</div><h3>Human-in-the-Loop</h3><p>Route edge cases to the right person with full context, not just a raw alert — approve or override in one click.</p></div>
            <div className="card"><div className="icon">↝</div><h3>Continuous Learning</h3><p>Agents refine future decisions based on which past actions led to good outcomes, not just static rules.</p></div>
            <div className="card"><div className="icon">⌗</div><h3>Full Audit Trail</h3><p>Every decision an agent makes is logged with the reasoning behind it — critical for compliance-heavy environments.</p></div>
            <div className="card"><div className="icon">⇋</div><h3>Cross-System Actions</h3><p>Agents can act across connected systems — rerouting a line, adjusting a setpoint, opening a work order — not just inside one app.</p></div>
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
              <span className="tag-pill" style={{ marginBottom: 12, display: "inline-block" }}>Pillar 3</span>
              <h3><Link to="/digital-transformation">Digital Transformation Advisory</Link></h3>
              <p>We make it stick — roadmaps, change management, measurable outcomes.</p>
              <Link to="/digital-transformation" className="learn">Explore →</Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="See agentic AI reason through a real scenario"
        body="We'll walk through a live example using a workflow similar to yours."
      />
    </>
  );
}
