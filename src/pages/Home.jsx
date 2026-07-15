import { useEffect } from "react";
import { Link } from "react-router-dom";
import TabGroup from "../components/TabGroup";
import StatCounter from "../components/StatCounter";
import CTABanner from "../components/CTABanner";

const industryTabs = [
  {
    key: "mfg",
    label: "Discrete Manufacturing",
    panel: (
      <>
        <div>
          <span className="tag">Discrete Manufacturing</span>
          <h3>From line sensor to line decision</h3>
          <p>Connect PLCs, vibration and temperature sensors, and MES/ERP systems so agents can catch defects and equipment issues before they cascade.</p>
          <ul>
            <li>Predictive maintenance on critical equipment</li>
            <li>Automated quality/defect flagging on the line</li>
            <li>Electronic work orders triggered by sensor thresholds</li>
          </ul>
          <div className="cta-row" style={{ marginTop: 22 }}>
            <Link to="/discrete-manufacturing" className="btn btn-outline-dark">Explore Discrete Manufacturing</Link>
          </div>
        </div>
        <div className="pillar-visual">
          <div className="flow-chip"><div className="flow-label"><span className="dot" />Line 3 Vibration</div><div className="flow-val">Elevated</div></div>
          <div className="flow-chip"><div className="flow-label"><span className="dot" />Agent Action</div><div className="flow-val">Work Order Created</div></div>
          <div className="flow-chip"><div className="flow-label"><span className="dot" />Defect Rate</div><div className="flow-val">↓ this week</div></div>
        </div>
      </>
    ),
  },
  {
    key: "logistics",
    label: "Logistics & Warehouse",
    panel: (
      <>
        <div>
          <span className="tag">Logistics &amp; Warehouse</span>
          <h3>Visibility that turns into rerouted action</h3>
          <p>Track throughput and location data across facilities so agents can reroute freight and rebalance capacity without a human dispatcher on every call.</p>
          <ul>
            <li>Real-time throughput visibility across facilities</li>
            <li>Automated rerouting during demand or capacity shifts</li>
            <li>Exception-based alerts instead of constant manual tracking</li>
          </ul>
          <div className="cta-row" style={{ marginTop: 22 }}>
            <Link to="/logistics-warehouse" className="btn btn-outline-dark">Explore Logistics &amp; Warehouse</Link>
          </div>
        </div>
        <div className="pillar-visual">
          <div className="flow-chip"><div className="flow-label"><span className="dot" />Facility B Throughput</div><div className="flow-val">1,204/hr</div></div>
          <div className="flow-chip"><div className="flow-label"><span className="dot" />Agent Action</div><div className="flow-val">Reroute to Facility C</div></div>
          <div className="flow-chip"><div className="flow-label"><span className="dot" />On-Time Rate</div><div className="flow-val">↑ this month</div></div>
        </div>
      </>
    ),
  },
  {
    key: "pharma",
    label: "Pharmaceutical",
    panel: (
      <>
        <div>
          <span className="tag">Pharmaceutical</span>
          <h3>Connected equipment, governed autonomy</h3>
          <p>Monitor device fleets and facility conditions with agents that operate inside strict, auditable guardrails appropriate for regulated environments.</p>
          <ul>
            <li>Device fleet monitoring and preventive servicing</li>
            <li>Strict human-in-the-loop guardrails for regulated actions</li>
            <li>Full audit trail to support compliance reviews</li>
          </ul>
          <div className="cta-row" style={{ marginTop: 22 }}>
            <Link to="/pharmaceutical" className="btn btn-outline-dark">Explore Pharmaceutical</Link>
          </div>
        </div>
        <div className="pillar-visual">
          <div className="flow-chip"><div className="flow-label"><span className="dot" />Device Fleet Status</div><div className="flow-val">3 Flagged</div></div>
          <div className="flow-chip"><div className="flow-label"><span className="dot" />Agent Action</div><div className="flow-val">Routed to Technician</div></div>
          <div className="flow-chip"><div className="flow-label"><span className="dot" />Compliance Log</div><div className="flow-val">Recorded</div></div>
        </div>
      </>
    ),
  },
];

const platformTabs = [
  {
    key: "iot",
    label: "Edge and Open Connectivity",
    panel: (
      <>
        <div>
          <span className="tag">We capture the signal</span>
          <h3>Edge and Open Connectivity</h3>
          <p>Sensor and device integration, real-time data pipelines, and infrastructure that scales with your operation — from a single line to a global footprint.</p>
          <ul>
            <li>Pre-built connectors for sensors, PLCs, and legacy equipment</li>
            <li>Real-time data pipelines with sub-second latency</li>
            <li>Edge processing for sites with limited connectivity</li>
          </ul>
          <div className="cta-row" style={{ marginTop: 22 }}>
            <Link to="/edge-open-connectivity" className="btn btn-outline-dark">Explore Edge and Open Connectivity</Link>
          </div>
        </div>
        <div className="pillar-visual">
          <div className="flow-chip"><div className="flow-label"><span className="dot" />Temperature Sensor #14</div><div className="flow-val">72.4°F</div></div>
          <div className="flow-chip"><div className="flow-label"><span className="dot" />Vibration Monitor #08</div><div className="flow-val">Normal</div></div>
          <div className="flow-chip"><div className="flow-label"><span className="dot" />Throughput Counter</div><div className="flow-val">1,204/hr</div></div>
        </div>
      </>
    ),
  },
  {
    key: "ai",
    label: "Custom Agents and Automation",
    panel: (
      <>
        <div>
          <span className="tag">We act on it</span>
          <h3>Custom Agents and Automation</h3>
          <p>AI agents that reason through multi-step decisions and execute them — with human oversight built in wherever it matters most.</p>
          <ul>
            <li>Autonomous, multi-step decisioning — not just alerts</li>
            <li>Configurable guardrails and human-in-the-loop approval</li>
            <li>Agents that learn from outcomes, not just historical data</li>
          </ul>
          <div className="cta-row" style={{ marginTop: 22 }}>
            <Link to="/custom-agents-automation" className="btn btn-outline-dark">Explore Custom Agents and Automation</Link>
          </div>
        </div>
        <div className="pillar-visual">
          <div className="flow-chip"><div className="flow-label"><span className="dot" />Anomaly Detected</div><div className="flow-val">Analyzing</div></div>
          <div className="flow-chip"><div className="flow-label"><span className="dot" />Agent Decision</div><div className="flow-val">Reroute Load</div></div>
          <div className="flow-chip"><div className="flow-label"><span className="dot" />Human Review</div><div className="flow-val">Auto-Approved</div></div>
        </div>
      </>
    ),
  },
  {
    key: "dx",
    label: "Scale, Governance and Insights",
    panel: (
      <>
        <div>
          <span className="tag">We make it stick</span>
          <h3>Scale, Governance and Insights</h3>
          <p>Roadmaps, change management, and measurable outcomes — because technology deployment alone doesn't change how a business runs.</p>
          <ul>
            <li>Digital maturity assessment and phased roadmap</li>
            <li>Change management support for frontline teams</li>
            <li>Outcome tracking tied to business KPIs, not just uptime</li>
          </ul>
          <div className="cta-row" style={{ marginTop: 22 }}>
            <Link to="/scale-governance-insights" className="btn btn-outline-dark">Explore Scale, Governance and Insights</Link>
          </div>
        </div>
        <div className="pillar-visual">
          <div className="flow-chip"><div className="flow-label"><span className="dot" />Maturity Assessment</div><div className="flow-val">Stage 2 of 4</div></div>
          <div className="flow-chip"><div className="flow-label"><span className="dot" />Roadmap Milestone</div><div className="flow-val">On Track</div></div>
          <div className="flow-chip"><div className="flow-label"><span className="dot" />Adoption Rate</div><div className="flow-val">Rising</div></div>
        </div>
      </>
    ),
  },
];

export default function Home() {
  useEffect(() => {
    document.title = "KlarityIQ | From Connected Data to Autonomous Action";
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="on-dark">
            <h1>
              From connected data
              <br />
              to <span className="text-gradient">autonomous action.</span>
            </h1>
            <p className="lede">KlarityIQ connects your IoT infrastructure, deploys agentic AI to act on it in real time, and delivers the digital transformation outcomes your business needs — without waiting on a person to interpret every signal.</p>
            <div className="cta-row">
              <Link to="/contact" className="btn btn-primary">Book a Demo</Link>
              <a href="#pillars" className="btn btn-outline">See How It Works</a>
            </div>
            <div className="stat-strip">
              <div>
                <div className="stat-num"><StatCounter value={24} suffix="/7" /></div>
                <div className="stat-label">Autonomous monitoring</div>
              </div>
              <div>
                <div className="stat-num"><StatCounter value={3} /></div>
                <div className="stat-label">Connected pillars, one platform</div>
              </div>
              <div>
                <div className="stat-num"><StatCounter value={0} suffix="-code" /></div>
                <div className="stat-label">Agent configuration for ops teams</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="flow-chip"><div className="flow-label"><span className="dot" />Sensor Signal</div><div className="flow-val">Live</div></div>
            <div className="flow-arrow">↓</div>
            <div className="flow-chip"><div className="flow-label"><span className="dot" />Agentic AI Reasoning</div><div className="flow-val">Deciding…</div></div>
            <div className="flow-arrow">↓</div>
            <div className="flow-chip"><div className="flow-label"><span className="dot" />Automated Action</div><div className="flow-val">Executed</div></div>
            <div className="flow-arrow">↓</div>
            <div className="flow-chip"><div className="flow-label"><span className="dot" />Business Outcome</div><div className="flow-val">Tracked</div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: "50px 0" }}>
        <div className="container">
          <p className="center" style={{ fontSize: "0.82rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--grey-600)", marginBottom: 24 }}>
            Trusted by operations teams across manufacturing, logistics &amp; pharma
          </p>
          <div className="logo-strip">
            <div className="logo-chip">Client Logo</div>
            <div className="logo-chip">Client Logo</div>
            <div className="logo-chip">Client Logo</div>
            <div className="logo-chip">Client Logo</div>
            <div className="logo-chip">Client Logo</div>
          </div>
        </div>
      </section>

      <section className="section" id="industries">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Choose Your Industry</div>
            <h2>Built for how your operation actually runs</h2>
            <p>The platform is the same everywhere — the sensors, agents, and workflows are configured to your industry's specific decisions.</p>
          </div>
          <TabGroup tabs={industryTabs} />
        </div>
      </section>

      <section className="section section-alt" id="pillars">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" style={{ justifyContent: "center" }}>The Platform</div>
            <h2>One platform, three connected layers</h2>
            <p>Sense what's happening, decide what to do about it, and turn that into lasting operational change — without three different vendors.</p>
          </div>
          <TabGroup tabs={platformTabs} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Services</div>
            <h2>Every capability your operation needs to scale</h2>
            <p>Give every site, team, and system a single place to connect, decide, and improve — governed for the enterprise, flexible enough for every operation.</p>
          </div>
          <div className="grid-3">
            <div className="card capability-card">
              <div className="cap-num">1</div>
              <h3>Bespoke Applications (Mobile/Web)</h3>
              <p>Custom mobile and web apps designed around how your operation actually works, not a generic template.</p>
              <Link to="/bespoke-applications" className="learn">Learn more →</Link>
            </div>
            <div className="card capability-card">
              <div className="cap-num">2</div>
              <h3>Custom Agents and Automation</h3>
              <p>Agents built around your SOPs and edge cases — no custom code required to start.</p>
              <Link to="/custom-agents-automation" className="learn">Learn more →</Link>
            </div>
            <div className="card capability-card">
              <div className="cap-num">3</div>
              <h3>Native AI and Machine Learning</h3>
              <p>Built-in models for anomaly detection, forecasting, and natural-language querying — no separate ML stack to manage.</p>
              <Link to="/native-ai-ml" className="learn">Learn more →</Link>
            </div>
            <div className="card capability-card">
              <div className="cap-num">4</div>
              <h3>Edge and Open Connectivity</h3>
              <p>Pre-built connectors and drivers for hundreds of sensors, PLCs, and enterprise systems.</p>
              <Link to="/edge-open-connectivity" className="learn">Learn more →</Link>
            </div>
            <div className="card capability-card">
              <div className="cap-num">5</div>
              <h3>Scale, Governance and Insights</h3>
              <p>Role-based permissions, version tracking, and a live view of what's running across every site.</p>
              <Link to="/scale-governance-insights" className="learn">Learn more →</Link>
            </div>
            <div className="card capability-card">
              <div className="cap-num">6</div>
              <h3>Security and Compliance</h3>
              <p>Encrypted data, full audit trails, and support for the compliance frameworks regulated industries require.</p>
              <Link to="/security-compliance" className="learn">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Solutions</div>
            <h2>Built around the problem you're solving</h2>
            <p>Most buyers search by outcome, not technology. Here's where KlarityIQ fits.</p>
          </div>
          <div className="grid-4">
            <div className="card">
              <div className="icon">⇋</div>
              <h3>Complex Digital Workflows</h3>
              <p>Turn multi-step, cross-system processes into workflows agents can execute end-to-end.</p>
              <Link to="/complex-digital-workflows" className="learn">Learn more →</Link>
            </div>
            <div className="card">
              <div className="icon">◈</div>
              <h3>Production Management</h3>
              <p>Real-time visibility into throughput, quality, and equipment status, with agents that act on what they see.</p>
              <Link to="/production-management" className="learn">Learn more →</Link>
            </div>
            <div className="card">
              <div className="icon">▤</div>
              <h3>Inventory Management</h3>
              <p>Real-time stock visibility and agents that flag replenishment needs before a stockout happens.</p>
              <Link to="/inventory-management" className="learn">Learn more →</Link>
            </div>
            <div className="card">
              <div className="icon">⌁</div>
              <h3>Traceability &amp; Predictability</h3>
              <p>Full genealogy on every batch or unit, plus forecasting models that make outcomes predictable.</p>
              <Link to="/traceability-predictability" className="learn">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Open Ecosystem</div>
            <h2>Flexibility to build the stack you need</h2>
            <p>Connect the systems you already run — KlarityIQ layers on top, it doesn't replace what's working.</p>
          </div>
          <div className="integration-block">
            <div className="cat-label center">Enterprise &amp; ERP</div>
            <div className="logo-strip">
              <div className="logo-chip">SAP</div>
              <div className="logo-chip">Oracle NetSuite</div>
              <div className="logo-chip">Microsoft Dynamics</div>
              <div className="logo-chip">Snowflake</div>
            </div>
          </div>
          <div className="integration-block">
            <div className="cat-label center">Historian, SCADA &amp; Edge</div>
            <div className="logo-strip">
              <div className="logo-chip">OPC-UA</div>
              <div className="logo-chip">Modbus</div>
              <div className="logo-chip">MQTT</div>
              <div className="logo-chip">Ignition</div>
            </div>
          </div>
          <div className="integration-block" style={{ marginBottom: 0 }}>
            <div className="cat-label center">Analytics &amp; Cloud</div>
            <div className="logo-strip">
              <div className="logo-chip">AWS</div>
              <div className="logo-chip">Azure</div>
              <div className="logo-chip">Power BI</div>
              <div className="logo-chip">Tableau</div>
            </div>
          </div>
          <p className="center placeholder-note" style={{ marginTop: 20, display: "block", textAlign: "center" }}>
            Placeholder integration list — confirm real, supported connectors before publishing.
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head on-dark">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Impact</div>
            <h2>What changes when data drives action</h2>
            <p className="placeholder-note">Sample metrics — replace with real client results once case studies are finalized.</p>
          </div>
          <div className="stat-callouts">
            <div className="stat-box"><div className="num"><StatCounter value={42} suffix="%" /></div><div className="lbl">Reduction in unplanned downtime</div></div>
            <div className="stat-box"><div className="num"><StatCounter value={3.5} suffix="x" /></div><div className="lbl">Faster issue response time</div></div>
            <div className="stat-box"><div className="num"><StatCounter value={28} suffix="%" /></div><div className="lbl">Lower operational cost</div></div>
            <div className="stat-box"><div className="num"><StatCounter value={90} suffix="%" /></div><div className="lbl">Decisions handled without manual review</div></div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" style={{ justifyContent: "center" }}>What Teams Say</div>
            <h2>Proof, from the people running operations</h2>
          </div>
          <div className="grid-3">
            <div className="quote-card">
              <span className="placeholder-note">Placeholder — swap in real client quote</span>
              <blockquote>&quot;We went from reacting to problems after the fact to having the system handle them before anyone noticed.&quot;</blockquote>
              <div>
                <div className="who">[Client Name]</div>
                <div className="role">[Title, Discrete Manufacturing]</div>
              </div>
              <div className="mini-stats">
                <div className="mini-stat"><div className="mini-num">↓42%</div><div className="mini-lbl">Downtime</div></div>
                <div className="mini-stat"><div className="mini-num">3.5x</div><div className="mini-lbl">Response Time</div></div>
              </div>
            </div>
            <div className="quote-card">
              <span className="placeholder-note">Placeholder — swap in real client quote</span>
              <blockquote>&quot;The agentic layer is what sold us — it's not another dashboard we have to remember to check.&quot;</blockquote>
              <div>
                <div className="who">[Client Name]</div>
                <div className="role">[Title, Logistics &amp; Warehouse]</div>
              </div>
              <div className="mini-stats">
                <div className="mini-stat"><div className="mini-num">↑28%</div><div className="mini-lbl">Throughput</div></div>
                <div className="mini-stat"><div className="mini-num">90%</div><div className="mini-lbl">Auto-Resolved</div></div>
              </div>
            </div>
            <div className="quote-card">
              <span className="placeholder-note">Placeholder — swap in real client quote</span>
              <blockquote>&quot;KlarityIQ's team didn't just deploy software — they helped our floor teams actually adopt it.&quot;</blockquote>
              <div>
                <div className="who">[Client Name]</div>
                <div className="role">[Title, Pharmaceutical]</div>
              </div>
              <div className="mini-stats">
                <div className="mini-stat"><div className="mini-num">↓28%</div><div className="mini-lbl">Op. Cost</div></div>
                <div className="mini-stat"><div className="mini-num">2 Qtrs</div><div className="mini-lbl">To Rollout</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" style={{ justifyContent: "center" }}>How It Works</div>
            <h2>From first sensor to full autonomy</h2>
          </div>
          <div className="process">
            <div className="process-step"><div className="step-num" /><h3>Connect</h3><p>Integrate sensors, devices, and existing systems through pre-built connectors.</p></div>
            <div className="process-step"><div className="step-num" /><h3>Configure Agents</h3><p>Define the decisions agents are allowed to make, and where human review is required.</p></div>
            <div className="process-step"><div className="step-num" /><h3>Act &amp; Learn</h3><p>Agents execute, track outcomes, and refine decisions over time.</p></div>
            <div className="process-step"><div className="step-num" /><h3>Transform</h3><p>Roll changes into standard operating procedure with roadmap and change support.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Resources</div>
            <h2>Go deeper before you talk to sales</h2>
          </div>
          <div className="grid-3">
            <div className="card resource-card">
              <div className="kicker">Case Study</div>
              <h3>Sensor to Decision, in the Field</h3>
              <p>See how the "sense → decide → act" loop plays out in real deployments across manufacturing, logistics, and pharma.</p>
              <Link to="/case-studies" className="arrow-link">Read case studies →</Link>
            </div>
            <div className="card resource-card">
              <div className="kicker">Assessment</div>
              <h3>Digital Transformation Maturity Assessment</h3>
              <p>A 5-minute self-assessment that benchmarks your operation and points to where to start.</p>
              <Link to="/contact" className="arrow-link">Start the assessment →</Link>
            </div>
            <div className="card resource-card">
              <div className="kicker">Guide</div>
              <h3>Agentic AI vs. AI-Assisted: What's Actually Different</h3>
              <p>A plain-language breakdown of the distinction — useful for briefing your own leadership team.</p>
              <Link to="/custom-agents-automation" className="arrow-link">Read the breakdown →</Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="See where your operations stand"
        body="Take the digital transformation maturity assessment — 5 minutes, no commitment."
        ctaText="Start the Assessment"
      />
    </>
  );
}
