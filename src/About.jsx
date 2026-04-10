import Parrots from "./assets/Parrots.png";
function About() {
  const pillars = [
    { icon: "🌿", label: "Conservation First" },
    { icon: "👥", label: "Community Driven" },
    { icon: "📚", label: "Educational Path" },
  ];
  return (
    <section className="about">
      <div className="about-img-wrap">
        <img
          className="about-img"
          src={Parrots}
          alt="Macaw parrot"
        />
        <div className="about-badge">
          <span className="num">1,200+</span>
          <span className="num-label">Protected species thriving in our<br />carefully curated balanced habitats.</span>
        </div>
      </div>
      <div className="about-text">
        <p className="about-tag">About Us</p>
        <h2 className="about-title">
          More than a sanctuary,<br />
          <em>it's a sanctuary for the soul.</em>
        </h2>
       <p className="about-desc">
  For over four decades, Nehru Zoological Park has pioneered organic habitat design,
  moving away from bars and glass to natural boundaries that foster healthy wildlife
  and immersive human connection.
  <br /><br />
  Our mission is simple: to inspire awe for the natural world and fund critical
  conservation projects across six continents through every ticket sold.
  <br /><br />
  We are committed to education, sustainability, and creating unforgettable experiences for every visitor.
</p>
        <div className="about-pillars">
          {pillars.map((p) => (
            <div className="pillar" key={p.label}>
              <div className="pillar-icon">{p.icon}</div>
              <span className="pillar-label">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;