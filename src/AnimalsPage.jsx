import { useState } from "react";
import "./App.css";
import BengalTiger from "./assets/BengalTiger.jpg";
import Giraffe from "./assets/Girafee.jpg";
import Elephant from "./assets/Elephant.jpg";
import Cobra from "./assets/Cobra.jpg";
const FILTERS = ["All Species", "Mammals", "Birds", "Reptiles", "Primates", "Endangered"];

const FEATURED = {
  name: "Royal Bengal Tiger",
  badge: "Endangered", badgeClass: "badge-endangered",
  desc: "The pride of India, these apex predators thrive in our specialised dry deciduous forest enclosures. Our breeding program focuses on maintaining genetic diversity and health for future generations.",
  habitat: "Tropical Grasslands",
  status: "Population declining in wild",
  img: BengalTiger,
};

const ANIMALS = [
  {
    name: "African Giraffe",
    badge: "Vulnerable", badgeClass: "badge-vulnerable",
    desc: "Graceful giants of the savanna, these giraffes are part of our international exchange programs for species conservation.",
    img: Giraffe,
  },
  {
    name: "Asiatic Elephant",
    badge: "Success Story", badgeClass: "badge-success",
    desc: "Our elephant family has grown through successful captive breeding, showcasing our commitment to Indian wildlife heritage.",
    img: Elephant,
  },
  {
    name: "King Cobra",
    badge: "Dangerous", badgeClass: "badge-dangerous",
    desc: "The world's longest venomous snake. Housed in a climate-controlled reptile house mimicking the Western Ghats ecosystem.",
    img: Cobra,
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function AnimalsPage() {
  const [activeFilter, setActiveFilter] = useState("All Species");

  return (
    <>
      <div style={{ paddingTop: 62 }}>

        {/* ══ 1. HERO ══════════════════════════════════════════ */}
        <div className="an-hero">
          <div className="an-hero-content">
            <h1 className="an-hero-title">Meet Our Residents</h1>
            <p className="an-hero-desc">
              At Nehru Zoological Park, we are more than just a home to wildlife. We are a
              sanctuary dedicated to the conservation of endangered species and the
              preservation of global biodiversity.
            </p>
          </div>
        </div>

        {/* ══ 2. STATS BAR ════════════════════════════════════ */}
        <div className="an-stats-bar">
          {[
            { num: "160+",  label: "Species",  highlight: false },
            { num: "1500+", label: "Animals",  highlight: true  },
            { num: "380+",  label: "Acres",    highlight: false },
            { num: "2M+",   label: "Visitors", highlight: false },
          ].map((s) => (
            <div className={`an-stat-item${s.highlight ? " highlighted" : ""}`} key={s.label}>
              <span className="an-stat-num">{s.num}</span>
              <span className="an-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ══ 3. FILTER TABS ══════════════════════════════════ */}
        <div className="an-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`an-filter-btn ${
                activeFilter === f
                  ? f === "Endangered" ? "f-danger" : "f-active"
                  : ""
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ══ 4. FEATURED ANIMAL + SUPPORT CARD ══════════════ */}
        <div className="an-featured-row">
          {/* Featured card — image left, details right */}
          <div className="an-featured-card">
            <img className="an-featured-img" src={FEATURED.img} alt={FEATURED.name} />
            <div className="an-featured-body">
              <span className={`an-badge ${FEATURED.badgeClass}`}>
                🔴 {FEATURED.badge}
              </span>
              <h2 className="an-featured-name">{FEATURED.name}</h2>
              <p className="an-featured-desc">{FEATURED.desc}</p>
              <div className="an-featured-meta">
                <span>🏕 Habitat: {FEATURED.habitat}</span>
                <span>📊 Status: {FEATURED.status}</span>
              </div>
            </div>
          </div>

          {/* Support conservation card */}
          <div className="an-support-card">
            <div className="an-support-icon">🐾</div>
            <div className="an-support-title">
              Support Our Conservation Efforts
            </div>
            <p className="an-support-desc">
              Your contribution directly funds habitat enrichment, nutritional programs,
              and veterinary care for our animals.
            </p>
            <button className="an-support-btn">Adopt an Animal</button>
          </div>
        </div>

        {/* ══ 5. ANIMAL CARDS GRID ════════════════════════════ */}
        <div className="an-grid-section">
          <div className="an-cards-grid">
            {ANIMALS.map((a) => (
              <div className="an-card" key={a.name}>
                <div className="an-card-img-wrap">
                  <img className="an-card-img" src={a.img} alt={a.name} />
                  <div className="an-card-badge-pos">
                    <span className={`an-badge ${a.badgeClass}`}>{a.badge}</span>
                  </div>
                </div>
                <div className="an-card-body">
                  <h3 className="an-card-name">{a.name}</h3>
                  <p className="an-card-desc">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ 6. CTA BANNER ════════════════════════════════════ */}
        <div className="an-cta">
          <div>
            <h2 className="an-cta-title">
              Experience Nature Up<br />Close
            </h2>
            <p className="an-cta-desc">
              Plan your visit today and discover the wonders of the wild. Every
              ticket supports our animal care programs.
            </p>
          </div>
          <div className="an-cta-btns">
            <a href="/tickets" className="an-btn an-btn-green">Purchase Tickets</a>
            <a href="#"        className="an-btn an-btn-outline">View Map</a>
          </div>
        </div>

      </div>
    </>
  );
}
