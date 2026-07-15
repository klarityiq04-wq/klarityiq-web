import { useState } from "react";

// Generic tab/panel switcher. Each instance owns its own active state,
// so a page can have multiple independent tab groups (mirrors script.js's
// per-.tab-group scoping in the original static site).
export default function TabGroup({ tabs }) {
  const [active, setActive] = useState(tabs[0]?.key);

  return (
    <div className="tab-group">
      <div className="pillar-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`pillar-tab${tab.key === active ? " active" : ""}`}
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="pillar-panels">
        {tabs.map((tab) => (
          <div key={tab.key} className={`pillar-panel${tab.key === active ? " active" : ""}`}>
            {tab.panel}
          </div>
        ))}
      </div>
    </div>
  );
}
