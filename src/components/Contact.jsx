import { useState } from "react";
import { useInView } from "../hooks/useInView";
import config from "../data/config";
import "./Contact.css";

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("invalid-email");
      return;
    }

    setStatus("success");
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="section__container">
        <div className={`section__header ${isInView ? "section__header--visible" : ""}`}>
          <span className="section__label">Contact</span>
          <h2 className="section__title">Let&apos;s Build Something Together</h2>
        </div>

        <div className={`contact__content ${isInView ? "contact__content--visible" : ""}`}>
          <div className="contact__info">
            <p className="contact__text">
              Have a project in mind or looking for a frontend developer?
              I&apos;m always open to new opportunities and interesting conversations.
            </p>

            <div className="contact__methods">
              <a
                href={`mailto:${config.email}`}
                className="contact__method"
                aria-label={`Send email to ${config.email}`}
              >
                <div className="contact__method-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact__method-info">
                  <span className="contact__method-label">Email</span>
                  <span className="contact__method-value">{config.email}</span>
                </div>
              </a>

              <a
                href={`tel:${config.phone}`}
                className="contact__method"
                aria-label={`Call ${config.phoneFormatted}`}
              >
                <div className="contact__method-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div className="contact__method-info">
                  <span className="contact__method-label">Phone</span>
                  <span className="contact__method-value">{config.phoneFormatted}</span>
                </div>
              </a>

              <a
                href={config.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__method"
                aria-label="LinkedIn Profile"
              >
                <div className="contact__method-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="contact__method-info">
                  <span className="contact__method-label">LinkedIn</span>
                  <span className="contact__method-value">Connect with me</span>
                </div>
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__form-group">
              <label htmlFor="name" className="contact__label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact__input"
                placeholder="Your name"
                required
                autoComplete="name"
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="email" className="contact__label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact__input"
                placeholder="your@email.com"
                required
                autoComplete="email"
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="message" className="contact__label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact__input contact__textarea"
                placeholder="Tell me about your project..."
                rows="5"
                required
              ></textarea>
            </div>

            {status === "error" && (
              <p className="contact__status contact__status--error">
                Please fill in all fields.
              </p>
            )}
            {status === "invalid-email" && (
              <p className="contact__status contact__status--error">
                Please enter a valid email address.
              </p>
            )}
            {status === "success" && (
              <p className="contact__status contact__status--success">
                Thank you! Please reach out to me directly via email or phone.
              </p>
            )}

            <button type="submit" className="btn btn--primary contact__submit">
              Send Message
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M14 2L7 9M14 2l-4 12-3-5-5-3 12-4z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
