import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center" }}>
      <div className="container">
        <div className="eyebrow" style={{ justifyContent: "center" }}>404</div>
        <h1>Page not found</h1>
        <p style={{ marginBottom: 24 }}>The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  );
}
