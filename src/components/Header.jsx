import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV_GROUPS, TOP_LINKS } from "../data/nav";

const linkClass = ({ isActive }) => (isActive ? "active" : undefined);

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const { pathname } = useLocation();

  return (
    <header className="site-header">
      <nav className="nav">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark">K</span>KlarityIQ
        </Link>
        <div className={`nav-links${open ? " open" : ""}`}>
          {NAV_GROUPS.map((group) => (
            <div className="nav-dropdown" key={group.label}>
              <a
                href="#!"
                className={group.links.some((link) => link.to === pathname) ? "active" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  close();
                }}
              >
                {group.label} ▾
              </a>
              <div className="nav-dropdown-panel">
                {group.links.map((link) => (
                  <NavLink to={link.to} key={link.to} className={linkClass} onClick={close}>
                    {link.icon && <span className="nav-icon">{link.icon}</span>}
                    <span>{link.label}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
          {TOP_LINKS.map((link) => (
            <NavLink to={link.to} key={link.to} className={linkClass} onClick={close}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="nav-cta">
          <Link to="/contact" className="btn btn-outline">Log In</Link>
          <Link to="/contact" className="btn btn-primary">Book a Demo</Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>
    </header>
  );
}
