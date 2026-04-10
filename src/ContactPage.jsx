import { useState } from "react";
import RedPanda from "./assets/RedPanda.jpg";
import Youtube from "./assets/Youtube.png";
import Instagram from "./assets/Instagram.png";
import Facebook from "./assets/Facebook.avif";
import Logo from "./assets/Logo.png";
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "General Inquiry", message: "",
  });
  const [sent,       setSent]       = useState(false);
  const [nlEmail,    setNlEmail]    = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const setF   = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const submit = () => {
    if (form.name && form.email && form.message) setSent(true);
  };
  const subscribe = () => {
    if (nlEmail.includes("@")) setSubscribed(true);
  };

  return (
    <>
      <div className="ct-page">

        {/* ══ 1. HERO ══════════════════════════════════════════ */}
        <div className="ct-hero">
          <div className="ct-hero-body">
            <span className="ct-hero-tag">Connect With Nature</span>
            <h1 className="ct-hero-title">
              Let's start a <span>conversation</span>
            </h1>
            <p className="ct-hero-desc">
              Whether you're planning a visit, curious about wildlife conservation, or
              looking to volunteer, our team is here to guide your journey through the wild.
            </p>
          </div>
        </div>

        {/* ══ 2. MAIN CONTENT ══════════════════════════════════ */}
        <div className="ct-main">

          {/* ── LEFT: Info card + Map card ── */}
          <div className="ct-left-col">

            {/* Info Card */}
            <div className="ct-info-card">
              <div className="ct-info-card-title">
                <span className="ct-tree"><img src={Logo} height="25" width="25" alt="Logo" /></span>
                Visit The Wild
              </div>

              {/* Address */}
              <div className="ct-info-row">
                <div className="ct-info-icon">📍</div>
                <div>
                  <span className="ct-info-label">Our Sanctuary</span>
                  <div className="ct-info-value">
                    Near Mir Alam Tank, NH 44, Bahadurpura,<br />
                    Hyderabad – 500 004, Telangana, India
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="ct-info-row">
                <div className="ct-info-icon">🕐</div>
                <div>
                  <span className="ct-info-label">Opening Hours</span>
                  <div className="ct-info-value">Daily: 8:30 AM – 5:30 PM</div>
                  <div className="ct-info-value red">Closed on Mondays</div>
                </div>
              </div>

              {/* Phone buttons */}
              <div className="ct-phone-btns">
                <button className="ct-phone-btn">📞 040 2447 7355</button>
                <button className="ct-phone-btn">💬 9281007836</button>
              </div>

              {/* Social */}
              <div className="ct-social-row">
                <span className="ct-social-label">Follow The Migration</span>
                <div className="ct-social-icons">
                  <div className="ct-social-icon" title="Instagram">
                    <img src={Instagram} height="20" width="20" alt="Instagram" />
                  </div>
                  <div className="ct-social-icon" title="Facebook">
                    <img src={Facebook} height="20" width="20" alt="Facebook" />
                  </div>
                  <div className="ct-social-icon" title="YouTube">
                    <img src={Youtube} height="20" width="20" alt="YouTube" />
                  </div>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="ct-map-card">
              <div className="ct-map-overlay" />
              <button className="ct-map-btn">
                🗺 Get Directions
              </button>
            </div>

          </div>

          {/* ── RIGHT: Contact Form ── */}
          <div className="ct-form-card">
            {sent ? (
              <div className="ct-success">
                <div className="ct-success-icon">✅</div>
                <div className="ct-success-title">Message Sent!</div>
                <p className="ct-success-sub">
                  Thank you for reaching out. Our rangers will get back to<br />
                  you within 24 hours.
                </p>
                <button className="ct-back-btn" onClick={() => setSent(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="ct-form-title">Send a Message</div>
                <p className="ct-form-subtitle">
                  Have a specific inquiry? Fill out the form below and our rangers will
                  get back to you within 24 hours.
                </p>

                <div className="ct-form-grid">
                  {/* Your Name */}
                  <div className="ct-form-group">
                    <label className="ct-form-label">Your Name</label>
                    <input
                      className="ct-form-input"
                      type="text" placeholder="John Doe"
                      value={form.name}
                      onChange={e => setF("name", e.target.value)}
                    />
                  </div>

                  {/* Email */}
                  <div className="ct-form-group">
                    <label className="ct-form-label">Email Address</label>
                    <input
                      className="ct-form-input"
                      type="email" placeholder="john@example.com"
                      value={form.email}
                      onChange={e => setF("email", e.target.value)}
                    />
                  </div>

                  {/* Phone */}
                  <div className="ct-form-group">
                    <label className="ct-form-label">Phone Number</label>
                    <input
                      className="ct-form-input"
                      type="tel" placeholder="+91 00000 00000"
                      value={form.phone}
                      onChange={e => setF("phone", e.target.value)}
                    />
                  </div>

                  {/* Subject */}
                  <div className="ct-form-group">
                    <label className="ct-form-label">Subject</label>
                    <select
                      className="ct-form-select"
                      value={form.subject}
                      onChange={e => setF("subject", e.target.value)}
                    >
                      {["General Inquiry","Visit Planning","Volunteer","Conservation","Media","Feedback"].map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="ct-form-group full">
                    <label className="ct-form-label">How Can We Help?</label>
                    <textarea
                      className="ct-form-textarea"
                      placeholder="Tell us more about your inquiry…"
                      value={form.message}
                      onChange={e => setF("message", e.target.value)}
                    />
                  </div>
                </div>

                <button className="ct-submit-btn" onClick={submit}>
                  Send Message ➜
                </button>
                <p className="ct-form-privacy">
                  By submitting this form, you agree to our{" "}
                  <a>Privacy Policy</a> regarding the handling of your contact details.
                </p>
              </>
            )}
          </div>

        </div>

        {/* ══ 3. NEWSLETTER BANNER ══════════════════════════════ */}
        <div className="ct-newsletter">
          <div>
            <div className="ct-nl-title">Stay wild at heart</div>
            <p className="ct-nl-desc">
              Join our "Forest Friends" newsletter for exclusive animal updates, conservation
              success stories, and early access to park events.
            </p>
          </div>

          <div>
            {subscribed ? (
              <div style={{
                background: "rgba(255,255,255,0.2)", borderRadius: 12,
                padding: "14px 20px", color: "#fff", fontWeight: 700, fontSize: 14,
              }}>
                🎉 You're in! Welcome to the Forest Friends family.
              </div>
            ) : (
              <div className="ct-nl-form">
                <input
                  className="ct-nl-input"
                  type="email" placeholder="Enter your email"
                  value={nlEmail}
                  onChange={e => setNlEmail(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && subscribe()}
                />
                <button className="ct-nl-btn" onClick={subscribe}>Subscribe</button>
              </div>
            )}
          </div>

          {/* Red panda avatar */}
          <img
            className="ct-nl-avatar"
            src={RedPanda}
            alt="Red panda"
          />
        </div>

      </div>
    </>
  );
}