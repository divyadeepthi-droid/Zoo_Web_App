import { useState } from "react";
import "./App.css";
import WhiteTiger from "./assets/whiteTiger.jpg";
import elephant14 from "./assets/elephant14.jpg";
import macaw from "./assets/macaw.jpg";
const TIMELINE = [
  {
    year: "1963",
    side: "right",
    title: "The Foundation",
    desc: "The Nehru Zoological Park was established and opened to the public on 6th October 1963, named after the first Prime Minister of India.",
  },
  {
    year: "1974",
    side: "left",
    title: "Safari Innovation",
    desc: "Introduction of the first Lion Safari in India, pioneering the concept of open-moated enclosures that mimic natural habitats.",
  },
  {
    year: "1992",
    side: "right",
    title: "Conservation Focus",
    desc: "Expansion of natural enclosures and specialized breeding centers for endangered Indian species like the Royal Bengal Tiger.",
  },
  {
    year: "2024",
    side: "left",
    title: "Digital Transformation",
    desc: "Modernisation of ticketing and education centers, integrating VR experiences and mobile-guided tours for an immersive experience.",
  },
];

const CONSERVATION = [
  {
    img: WhiteTiger,
    title: "Tiger Breeding",
    desc: "Successful population growth for the Royal Bengal Tiger through international programs.",
  },
  {
    img: elephant14,
    title: "Rescue Operations",
    desc: "Rehabilitating injured wildlife and returning them to the wild where possible.",
  },
  {
    img: macaw,
    title: "Avian Sanctuary",
    desc: "Protecting rare and species through carefully managed aviaries and nest tracking.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>

      <div style={{ paddingTop: 62 }}>

        {/* ══ 1. HERO ══════════════════════════════════════════ */}
        <div className="ab-hero" />

        {/* ══ 2. MISSION + STATS ══════════════════════════════ */}
        <div className="ab-mission">

          {/* Left — mission text */}
          <div>
            <span className="ab-mission-tag">Our Mission</span>
            <h1 className="ab-mission-title">
              To inspire conservation through<br />
              education and engagement.
            </h1>
            <p className="ab-mission-desc">
              We are committed to providing a natural habitat for endangered species while
              fostering a deep connection between our visitors and the natural world. Our
              facility serves as a critical hub for research, breeding programs, and
              environmental awareness.
            </p>
            <div className="ab-tags">
              <span className="ab-tag">🌿 Sustainable Practices</span>
              <span className="ab-tag">🔬 Global Research</span>
            </div>
          </div>

          {/* Right — stats card */}
          <div className="ab-stats-card">
            <span className="ab-stats-label">Quick Stats</span>

            <div>
              <div className="ab-stat-num">1,500+</div>
              <div className="ab-stat-sub">Animal Residents</div>
            </div>

            <div className="ab-stat-divider" />

            <div>
              <div className="ab-stat-num">160+</div>
              <div className="ab-stat-sub">Unique Species</div>
            </div>

            <div className="ab-stat-divider" />

            <div>
              <div className="ab-stat-num">380</div>
              <div className="ab-stat-sub">Acres of Wilderness</div>
            </div>
          </div>
        </div>

        {/* ══ 3. TIMELINE ══════════════════════════════════════ */}
        <div className="ab-timeline-section">
          <h2 className="ab-section-heading">A Legacy of Growth</h2>
          <span className="ab-section-rule" />

          <div className="ab-timeline">
            {TIMELINE.map((item, i) => {
              const isRight = item.side === "right";
              return (
                <div className="ab-tl-row" key={item.year}>
                  {/* Left column */}
                  {isRight ? (
                    <div className="ab-tl-empty" />
                  ) : (
                    <div className="ab-tl-left">
                      <div className="ab-tl-card">
                        <div className="ab-tl-card-title">{item.title}</div>
                        <div className="ab-tl-card-desc">{item.desc}</div>
                      </div>
                    </div>
                  )}

                  {/* Center — year dot + vertical line */}
                  <div className="ab-tl-center">
                    <div className="ab-tl-year">{item.year}</div>
                  </div>

                  {/* Right column */}
                  {isRight ? (
                    <div className="ab-tl-right">
                      <div className="ab-tl-card">
                        <div className="ab-tl-card-title">{item.title}</div>
                        <div className="ab-tl-card-desc">{item.desc}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="ab-tl-empty" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ══ 4. BEYOND THE ENCLOSURES ════════════════════════ */}
        <div className="ab-beyond">
          <div className="ab-beyond-header">
            <div>
              <h2 className="ab-beyond-title">Beyond the Enclosures</h2>
            </div>
            <a href="#" className="ab-research-link">
              View Research Papers →
            </a>
          </div>
          <p className="ab-beyond-sub">
            Our work extends beyond our gates, impacting wildlife conservation across the
            subcontinent through dedicated research and rehabilitation.
          </p>

          <div className="ab-conservation-grid">
            {CONSERVATION.map((c) => (
              <div className="ab-con-card" key={c.title}>
                <img src={c.img} alt={c.title} />
                <div className="ab-con-overlay" />
                <div className="ab-con-body">
                  <div className="ab-con-title">{c.title}</div>
                  <div className="ab-con-desc">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ 5. CTA BANNER ════════════════════════════════════ */}
        <div className="ab-cta">
          <h2>Experience the Wonder Today</h2>
          <p>
            Join thousands of daily visitors in exploring the magic of wildlife. Every
            ticket supports our global conservation efforts.
          </p>
          <div className="ab-cta-btns">
            <a href="/TicketsPage" className="ab-btn ab-btn-white">Book My Visit</a>
            <a href="#"        className="ab-btn ab-btn-outline">Support Our Mission</a>
          </div>
        </div>

      </div>
    </>
  );
}
