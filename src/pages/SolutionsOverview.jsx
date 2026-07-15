import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";

// Orphan page from an earlier 3-pillar taxonomy — not linked from the current
// nav/footer, kept as a direct route for parity with the live site today.
export default function SolutionsOverview() {
  return (
    <>
      <PageHero
        title="Solutions by Outcome | KlarityIQ"
        trail={["Solutions by Outcome"]}
        eyebrow="Solutions by Outcome"
        heading="Built around the problem you're solving"
        lede="Most teams don't search for &quot;IoT platform&quot; — they search for the problem it solves. Here's where KlarityIQ fits, mapped to outcomes."
      />

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="card">
              <div className="icon">◎</div>
              <h3>Predictive Maintenance</h3>
              <p>Catch equipment issues before they cause downtime, using live sensor data and agentic reasoning that flags degrading conditions early and schedules intervention automatically.</p>
              <div className="tag-list"><span className="tag-pill">IoT</span><span className="tag-pill">Agentic AI</span></div>
            </div>
            <div className="card">
              <div className="icon">⇄</div>
              <h3>Autonomous Operations</h3>
              <p>Let agents handle routine operational decisions end-to-end — load balancing, setpoint adjustment, work order creation — with escalation only when it falls outside guardrails.</p>
              <div className="tag-list"><span className="tag-pill">Agentic AI</span></div>
            </div>
            <div className="card">
              <div className="icon">◈</div>
              <h3>Real-Time Visibility</h3>
              <p>A single live view across sites, systems, and teams, replacing manual spreadsheet reconciliation with one unified operational picture.</p>
              <div className="tag-list"><span className="tag-pill">IoT</span></div>
            </div>
            <div className="card">
              <div className="icon">↓</div>
              <h3>Cost Reduction</h3>
              <p>Reduce waste, rework, and manual intervention by automating the decisions that used to sit in someone's inbox for hours or days.</p>
              <div className="tag-list"><span className="tag-pill">Agentic AI</span><span className="tag-pill">Digital Transformation</span></div>
            </div>
            <div className="card">
              <div className="icon">⛨</div>
              <h3>Compliance &amp; Audit Readiness</h3>
              <p>Full audit trails on every automated decision, with governance controls that scale as autonomy increases across your operation.</p>
              <div className="tag-list"><span className="tag-pill">Agentic AI</span><span className="tag-pill">Digital Transformation</span></div>
            </div>
            <div className="card">
              <div className="icon">✎</div>
              <h3>Operational Maturity Growth</h3>
              <p>A phased roadmap that takes a team from manual, reactive processes to a connected, largely autonomous operation.</p>
              <div className="tag-list"><span className="tag-pill">Digital Transformation</span></div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Not sure which solution fits?"
        body="Tell us what you're trying to solve and we'll map it to the right starting point."
        ctaText="Talk to Us"
      />
    </>
  );
}
