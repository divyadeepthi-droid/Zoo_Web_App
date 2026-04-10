import { useState } from "react";
import "./App.css";
const FILTERS = ["All Photos", "New Arrivals", "Daily Life", "Visitor Uhotos"];

// Row 1: Lion (wide) + Frog (tall)
const ROW1 = [
  { src: "https://i.pinimg.com/1200x/84/0c/6a/840c6a33bb7702a464dbabcca33715f2.jpg", alt: "Lion in grassland" },
  { src: "https://i.pinimg.com/1200x/0b/78/9c/0b789c74b3ba25a7bcd3f909bf1cf872.jpg",  alt: "Red-eyed tree frog" },
];

// Row 2: Snow Leopard + Giraffe + [Share Card]
const ROW2_IMGS = [
  { src: "https://images.unsplash.com/photo-1550853024-fae8cd4be47f?w=600&q=80", alt: "Snow leopard" },
  { src: "https://i.pinimg.com/736x/11/4f/ec/114fec19ad7e9881162958ae2488b3e3.jpg", alt: "Giraffe savanna" },
];

// Row 3: Red Panda + Panda (wide) + Leopard
const ROW3 = [
  { src: "https://i.pinimg.com/736x/fe/a4/fa/fea4fabc65a19e2fec85de6e37581ff6.jpg",  alt: "Red panda" },
  { src: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80", alt: "Giant pandas" },
  { src: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=600&q=80", alt: "Leopard on tree" },
];

const ALL_PHOTOS = [...ROW1, ...ROW2_IMGS, ...ROW3];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All Photos");
  const [lightbox,     setLightbox]     = useState(null); // index into ALL_PHOTOS
  const [email,        setEmail]        = useState("");
  const [subscribed,   setSubscribed]   = useState(false);

  const openLight  = (idx) => setLightbox(idx);
  const closeLight = ()    => setLightbox(null);
  const prevLight  = ()    => setLightbox(i => (i - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length);
  const nextLight  = ()    => setLightbox(i => (i + 1) % ALL_PHOTOS.length);

  const handleSubscribe = () => {
    if (email.includes("@")) setSubscribed(true);
  };

  return (
    <>
      <div className="gl-page">

        {/* ══ 1. HEADER ════════════════════════════════════════ */}
        <div className="gl-header">
          <div className="gl-header-left">
            <span className="gl-section-tag">Visual Chronicles</span>
            <h1 className="gl-header-title">
              Moments of the<br />
              <span>Wild</span>.
            </h1>
          </div>
          <div className="gl-filters">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`gl-filter-btn${activeFilter === f ? " gl-active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* ══ 2. PHOTO GRID ════════════════════════════════════ */}
        <div className="gl-grid-wrap">

          {/* ROW 1: Lion (wide) + Frog */}
          <div className="gl-row1">
            {ROW1.map((img, i) => (
              <div className="gl-img-wrap" key={img.alt} onClick={() => openLight(i)}>
                <img className="gl-row1-img" src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>

          {/* ROW 2: Snow Leopard + Giraffe + Share Card */}
          <div className="gl-row2">
            {ROW2_IMGS.map((img, i) => (
              <div className="gl-img-wrap" key={img.alt} onClick={() => openLight(ROW1.length + i)}>
                <img className="gl-row2-img" src={img.src} alt={img.alt} />
              </div>
            ))}
            {/* Share Your Perspective card */}
            <div className="gl-share-col">
              <div className="gl-share-card">
                <div className="gl-share-icon">📷</div>
                <div>
                  <div className="gl-share-title">Share Your Perspective</div>
                  <p className="gl-share-desc">
                    Tag your photos with #LivingConservatory for a chance to be
                    featured in our permanent visitor collection.
                  </p>
                  <button className="gl-share-btn">Upload Photo →</button>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 3: Red Panda + Pandas (wide) + Leopard */}
          <div className="gl-row3">
            {ROW3.map((img, i) => (
              <div className="gl-img-wrap" key={img.alt} onClick={() => openLight(ROW1.length + ROW2_IMGS.length + i)}>
                <img className="gl-row3-img" src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>

        </div>

        {/* ══ 3. NEWSLETTER ════════════════════════════════════ */}
        <div className="gl-newsletter">
          <div>
            <h2 className="gl-nl-title">
              Never Miss a<br />Moment.
            </h2>
            <p className="gl-nl-desc">
              Join our dispatch list for exclusive wildlife photography tips
              and updates on our newest inhabitants.
            </p>
          </div>
          <div>
            {subscribed ? (
              <div style={{
                background: "#f0faf0", border: "1.5px solid var(--green-light)",
                borderRadius: 12, padding: "18px 24px",
                color: "var(--green-dark)", fontWeight: 700, fontSize: 15,
              }}>
                🎉 You're subscribed! Watch your inbox for wildlife magic.
              </div>
            ) : (
              <div className="gl-nl-form">
                <input
                  className="gl-nl-input"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSubscribe()}
                />
                <button className="gl-nl-btn" onClick={handleSubscribe}>
                  Subscribe Now
                </button>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* ══ LIGHTBOX ══════════════════════════════════════════ */}
      {lightbox !== null && (
        <div className="gl-lightbox" onClick={closeLight}>
          <button className="gl-lightbox-close" onClick={closeLight}>✕</button>
          <button className="gl-lightbox-nav gl-lb-prev" onClick={e => { e.stopPropagation(); prevLight(); }}>‹</button>
          <img
            className="gl-lightbox-img"
            src={ALL_PHOTOS[lightbox].src}
            alt={ALL_PHOTOS[lightbox].alt}
            onClick={e => e.stopPropagation()}
          />
          <button className="gl-lightbox-nav gl-lb-next" onClick={e => { e.stopPropagation(); nextLight(); }}>›</button>
        </div>
      )}
    </>
  );
}
