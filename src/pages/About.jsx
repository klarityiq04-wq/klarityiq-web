import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";

export default function About() {
  return (
    <>
      <PageHero
        title="About | KlarityIQ"
        trail={["About"]}
        eyebrow="About KlarityIQ"
        heading="AI that doesn't just advise — it acts"
        lede="We built KlarityIQ because most &quot;AI for operations&quot; tools stop at the dashboard. We think the data should lead to action, not just another report."
      />

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="section-head left mt-0">
                <div className="eyebrow">Our Thesis</div>
                <h2>Agentic, not just AI-assisted</h2>
              </div>
              <p style={{ marginBottom: 16 }}>The term "AI" gets applied to everything from a chatbot to a fully autonomous decision system, and that ambiguity slows adoption. We're specific: KlarityIQ agents reason through multi-step decisions and execute them, with guardrails your team controls.</p>
              <p>That distinction — advisory AI versus agentic AI — is the difference between a dashboard nobody has time to check and a system that quietly keeps operations running.</p>
            </div>
            <div>
              <div className="section-head left mt-0">
                <div className="eyebrow">How We Work</div>
                <h2>Services, Industry, Solutions — one team</h2>
              </div>
              <p style={{ marginBottom: 16 }}>Most vendors specialize in one layer — connectivity, or AI, or change management — and leave you to stitch the rest together. We own the full stack, from bespoke applications down to governance, so the handoffs that usually slow transformation projects down don't exist.</p>
              <p>It also means we're accountable for the outcome, not just the uptime of one component.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" style={{ justifyContent: "center" }}>What We Value</div>
            <h2>Principles that shape how we build</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <div className="icon">◑</div>
              <h3>Human-in-the-loop by default</h3>
              <p>Autonomy is earned, not assumed. Every agent ships with configurable guardrails, not just an on/off switch.</p>
            </div>
            <div className="card">
              <div className="icon">⌗</div>
              <h3>Explainable decisions</h3>
              <p>If an agent takes an action, your team can see exactly why — full reasoning trail, not a black box.</p>
            </div>
            <div className="card">
              <div className="icon">↝</div>
              <h3>Adoption over deployment</h3>
              <p>Software that isn't adopted isn't transformation. We measure success by usage, not by go-live dates.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Want to see it in action?"
        body="We'll walk you through a live scenario relevant to your operation."
      />
    </>
  );
}
