import { useState } from "react";

// Demo-only "Book a Demo" form — no backend, mirrors script.js's fake-submit UX.
export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
    }, 3000);
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="fname">First Name</label>
          <input id="fname" type="text" required placeholder="Jane" />
        </div>
        <div className="field">
          <label htmlFor="lname">Last Name</label>
          <input id="lname" type="text" required placeholder="Doe" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="email">Work Email</label>
          <input id="email" type="email" required placeholder="jane@company.com" />
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" type="text" required placeholder="Company name" />
        </div>
      </div>
      <div className="form-row">
        <div className="field field-full">
          <label htmlFor="interest">Primary Interest</label>
          <select id="interest">
            <option>Services</option>
            <option>Industry Solutions</option>
            <option>Solutions</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="field field-full">
          <label htmlFor="msg">What are you trying to solve?</label>
          <textarea id="msg" rows={4} placeholder="Tell us a bit about your operation..." />
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
        {submitting ? "Thanks — we'll be in touch!" : "Request a Demo"}
      </button>
    </form>
  );
}
