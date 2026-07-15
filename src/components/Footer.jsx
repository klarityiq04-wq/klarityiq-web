import { Link } from "react-router-dom";
import { FOOTER_COLUMNS } from "../data/nav";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <span className="brand-mark">K</span>KlarityIQ
            </Link>
            <p>From connected data to autonomous action. IoT, agentic AI, and digital transformation on one platform.</p>
            <div className="footer-social" style={{ marginTop: 18 }}>
              <a href="#!" aria-label="LinkedIn">in</a>
              <a href="#!" aria-label="X">X</a>
              <a href="#!" aria-label="YouTube">▶</a>
            </div>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link, i) => (
                  <li key={`${link.label}-${i}`}>
                    {link.to === "#" ? (
                      <a href="#!">{link.label}</a>
                    ) : (
                      <Link to={link.to}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <div>© 2026 KlarityIQ. All rights reserved.</div>
          <div>Privacy Policy · Terms of Service</div>
        </div>
      </div>
    </footer>
  );
}
