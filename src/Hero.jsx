import {Link} from "react-router-dom";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Where<br />
          Nature<br />
          <span className="accent">Breathes</span>
        </h1>
        <p className="hero-desc">
          Experience an immersive journey through the world's most diverse
          ecosystems. Nehru Zoological Park is more than a zoo — it's a living,
          breathing biotope dedicated to conservation.
        </p>
        <div className="hero-buttons">
          <Link to="/TicketsPage" className="btn btn-green">Plan Your Visit →</Link>
          <Link to="/ContactPage" className="btn btn-outline">Explore Species</Link>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-dot" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
export default Hero;