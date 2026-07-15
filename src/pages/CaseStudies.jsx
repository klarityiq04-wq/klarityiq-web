import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";

export default function CaseStudies() {
  return (
    <>
      <PageHero
        title="Case Studies | KlarityIQ"
        trail={["Case Studies"]}
        eyebrow="Proof"
        heading="Sensor to decision, in the field"
        lede="Each case study follows the same arc: data captured, what the agent decided, the action taken, and the result."
      />

      <section className="section">
        <div className="container">
          <p className="placeholder-note" style={{ marginBottom: 30 }}>Placeholder case studies — replace with real client stories, metrics, and logos once available.</p>
          <div className="grid-3">
            <div className="card">
              <span className="tag-pill" style={{ marginBottom: 14, display: "inline-block" }}>Discrete Manufacturing</span>
              <h3>[Client Name]</h3>
              <p style={{ marginBottom: 16 }}>Sensor data flagged a degrading motor bearing three weeks before failure; the agent scheduled maintenance during planned downtime automatically.</p>
              <div className="stat-callouts" style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div className="stat-box"><div className="num">↓42%</div><div className="lbl">Unplanned downtime</div></div>
                <div className="stat-box"><div className="num">3.5x</div><div className="lbl">Faster response</div></div>
              </div>
            </div>
            <div className="card">
              <span className="tag-pill" style={{ marginBottom: 14, display: "inline-block" }}>Logistics &amp; Warehouse</span>
              <h3>[Client Name]</h3>
              <p style={{ marginBottom: 16 }}>Real-time throughput data let agents reroute load across three facilities automatically during a regional demand spike.</p>
              <div className="stat-callouts" style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div className="stat-box"><div className="num">↑28%</div><div className="lbl">Throughput</div></div>
                <div className="stat-box"><div className="num">90%</div><div className="lbl">Decisions automated</div></div>
              </div>
            </div>
            <div className="card">
              <span className="tag-pill" style={{ marginBottom: 14, display: "inline-block" }}>Pharmaceutical</span>
              <h3>[Client Name]</h3>
              <p style={{ marginBottom: 16 }}>A phased digital transformation roadmap took a legacy facility from spreadsheet reporting to largely autonomous, audit-ready operations in two quarters.</p>
              <div className="stat-callouts" style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div className="stat-box"><div className="num">↓28%</div><div className="lbl">Operational cost</div></div>
                <div className="stat-box"><div className="num">2</div><div className="lbl">Quarters to rollout</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Want to be our next case study?"
        body="Let's talk about what a pilot could look like for your operation."
      />
    </>
  );
}
