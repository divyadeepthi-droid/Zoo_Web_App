import RedPanda from "./assets/RedPanda.jpg";
import Elephant from "./assets/Elephant.jpg";
import Tiger from "./assets/Tiger.jpg";
const animals = [
  {
    name: "Red Panda",
    sci: "Ailurus fulgens",
    status: "Vulnerable",
    statusClass: "status-vulnerable",
    desc: "Elusive acrobats of the forest, red pandas are shy, solitary animals found in the eastern Himalayas.",
    img: RedPanda,
  },
  {
    name: "African Elephant",
    sci: "Loxodonta africana",
    status: "Endangered",
    statusClass: "status-endangered",
    desc: "The largest land animal on Earth, these majestic giants exhibit remarkable intelligence and social bonds.",
    img: Elephant,
  },
  {
    name: "Bengal Tiger",
    sci: "Panthera tigris tigris",
    status: "Critically Endangered",
    statusClass: "status-critical",
    desc: "India's national animal and apex predator — fewer than 2,500 remain in the wild. Each stripe pattern is unique.",
    img: Tiger,
  },
];

function AnimalCard({ animal }) {
  return (
    <div className="animal-card">
      <img className="animal-img" src={animal.img} alt={animal.name} />
      <div className="animal-body">
        <span className={`status-badge ${animal.statusClass}`}>{animal.status}</span>
        <h3 className="animal-name">{animal.name}</h3>
        <p className="animal-sci">{animal.sci}</p>
        <p className="animal-desc">{animal.desc}</p>
        <a className="learn-more" href="#">Learn More →</a>
      </div>
    </div>
  );
}

function Animals() {
  return (
    <section className="animals-section">
      <div className="section-header">
        <div>
          <p className="section-tag">Featured Wildlife</p>
          <h2 className="section-title">Meet our Residents</h2>
        </div>
        <div className="arrow-btns">
          <button className="arrow-btn">‹</button>
          <button className="arrow-btn active">›</button>
        </div>
      </div>
      <div className="animals-grid">
        {animals.map((a) => (
          <AnimalCard key={a.name} animal={a} />
        ))}
      </div>
    </section>
  );
}

export default Animals;