// src/components/Events.jsx
const EVENT_DATA = [
  {
    num: "14 OCT",
    name: "Twilight Jungle Safari",
    meta: "Fri, 4:00 PM",
    desc: "Experience the nocturnal habits of our predators under moonlight.",
  },
  {
    num: "22 OCT",
    name: "Conservation Circle",
    meta: "Sat, 2:00 PM",
    desc: "A ceremony of tree-planting and fundraising for wild leopard habitats.",
  },
  {
    num: "05 NOV",
    name: "Junior Keepers Day",
    meta: "Sun, 10:00 AM",
    desc: "Hands-on learning for children about animal care and nutrition.",
  },
  {
    num: "12 NOV",
    name: "Avian Migration Talk",
    meta: "Tue, 3:00 PM",
    desc: "Live lecture by Dr. Sarah Fitch on global bird migration patterns.",
  },
];

function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-num">{event.num}</div>
      <div className="event-info">
        <p className="event-name">{event.name}</p>
        <p className="event-meta">{event.meta}</p>
        <p className="event-desc">{event.desc}</p>
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <section className="events-section">
      <div className="events-layout">
        {/* Left — heading */}
        <div>
          <p className="section-tag">Upcoming Events</p>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Upcoming in the{" "}
            <span style={{ color: "var(--green)" }}>Park</span>
          </h2>
          <p style={{ fontSize: 14, color: "var(--text-light)", lineHeight: 1.7 }}>
            From twilight tours to scientific lectures, there's always something
            evolving here.
          </p>
          <div className="view-cal">
            <span>📅</span> View Full Calendar
          </div>
        </div>

        {/* Right — event cards grid */}
        <div className="events-grid">
          {EVENT_DATA.map((e) => (
            <EventCard key={e.num} event={e} />
          ))}
        </div>
      </div>
    </section>
  );
}
