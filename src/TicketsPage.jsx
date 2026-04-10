import { useState } from "react";
import "./App.css";
const DAYS_OF_WEEK = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

const ACTIVITIES = [
  { id: "safari",   icon: "🚙", name: "Safari Vehicle",   sub: "Guided safari tour",       price: 50,  unit: "/Person" },
  { id: "battery",  icon: "🚌", name: "Battery Vehicle",  sub: "Eco-friendly transit",     price: 70,  unit: "/Trip"  },
  { id: "toy",      icon: "🚂", name: "Toy Train Ride",   sub: "Kids zone circuit",        price: 20,  unit: "/Ticket"},
  { id: "road",     icon: "🚃", name: "Road Train",       sub: "Park transport",           price: 30,  unit: "/Trip"  },
  { id: "camera",   icon: "📷", name: "Video Camera",     sub: "Personal use only",        price: 100, unit: "/Day"   },
  { id: "aquarium", icon: "🐠", name: "Fish Aquarium",    sub: "Marine life exhibit",      price: 15,  unit: "/Entry" },
  { id: "night",    icon: "🌙", name: "Nocturnal House",  sub: "Night creatures",          price: 25,  unit: "/Entry" },
  { id: "reptile",  icon: "🐍", name: "Reptile House",    sub: "Snakes & lizards",         price: 10,  unit: "/Entry" },
];

const TICKET_TYPES = [
  { id: "adult",  label: "Adult",  sub: "Ages 13 – 64", price: 100 },
  { id: "child",  label: "Child",  sub: "Ages 3 – 12",  price: 50  },
  { id: "senior", label: "Senior", sub: "Ages 65+",     price: 60  },
];

// ─── CALENDAR HELPERS ─────────────────────────────────────────────────────────
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year, month) {
  // 0=Sun…6=Sat → convert to Mon-based (0=Mon)
  const d = new Date(year, month, 1).getDay();
  return (d + 6) % 7;
}
const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function TicketsPage() {
  const today = new Date();
  const [calYear,  setCalYear]  = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState(today.getDate());
  const [activities, setActivities]   = useState(["toy", "camera"]); // pre-selected like screenshot
  const [tickets, setTickets] = useState({ adult: 2, child: 1, senior: 0 });
  const [roundUp, setRoundUp] = useState(false);

  // Calendar navigation
  const prevMonth = () => {
    if (calMonth === 0) { setCalYear(y => y - 1); setCalMonth(11); }
    else setCalMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (calMonth === 11) { setCalYear(y => y + 1); setCalMonth(0); }
    else setCalMonth(m => m + 1);
  };

  const daysInMonth  = getDaysInMonth(calYear, calMonth);
  const firstDayOff  = getFirstDayOfMonth(calYear, calMonth);
  const calCells     = [...Array(firstDayOff).fill(null),
                        ...Array.from({length: daysInMonth}, (_,i) => i + 1)];
  const isPast = (d) => new Date(calYear, calMonth, d) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const isToday = (d) => d === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear();

  // Activities toggle
  const toggleActivity = (id) =>
    setActivities(a => a.includes(id) ? a.filter(x => x !== id) : [...a, id]);

  // Tickets counter
  const changeTicket = (id, delta) => {
    setTickets(t => ({ ...t, [id]: Math.max(0, t[id] + delta) }));
  };

  // Pricing
  const ticketTotal    = TICKET_TYPES.reduce((s, t) => s + tickets[t.id] * t.price, 0);
  const actTotal       = ACTIVITIES.filter(a => activities.includes(a.id)).reduce((s, a) => s + a.price, 0);
  const subtotal       = ticketTotal + actTotal;
  const serviceFee     = 4.50;
  const roundUpAmt     = roundUp ? (Math.ceil(subtotal + serviceFee) - (subtotal + serviceFee)) : 0;
  const total          = subtotal + serviceFee + roundUpAmt;

  const selectedDateStr = `${MONTH_NAMES[calMonth].slice(0,3)} ${selectedDay}, ${calYear}`;

  return (
    <>
      <div className="tp-page">

        {/* ── Page Header ── */}
        <div className="tp-header">
          <h1 className="tp-header-title">Plan Your Journey</h1>
          <p className="tp-header-desc">
            Experience the majesty of the wild. Reserve your tickets and select exclusive
            encounters to make your visit unforgettable.
          </p>
        </div>

        {/* ── Main Layout ── */}
        <div className="tp-layout">

          {/* ══ LEFT COLUMN ══════════════════════════════════ */}
          <div className="tp-left">

            {/* STEP 1 — Calendar */}
            <div className="tp-card">
              <div className="tp-card-title">
                <div className="tp-step-num">1</div>
                <span className="tp-card-heading">Choose Visit Date</span>
              </div>

              {/* Month nav */}
              <div className="tp-cal-nav">
                <span className="tp-cal-month">
                  {MONTH_NAMES[calMonth]} {calYear}
                </span>
                <div className="tp-cal-nav-arrows">
                  <button className="tp-cal-arrow" onClick={prevMonth}>‹</button>
                  <button className="tp-cal-arrow" onClick={nextMonth}>›</button>
                </div>
              </div>

              {/* Grid */}
              <div className="tp-cal-grid">
                {DAYS_OF_WEEK.map(d => (
                  <div className="tp-cal-dow" key={d}>{d}</div>
                ))}
                {calCells.map((day, i) => (
                  <button
                    key={i}
                    className={[
                      "tp-cal-day",
                      day === null   ? "empty"    : "",
                      day && isPast(day) ? "past" : "",
                      day && isToday(day) && day !== selectedDay ? "today" : "",
                      day === selectedDay && !isPast(day) ? "selected" : "",
                    ].join(" ")}
                    onClick={() => day && !isPast(day) && setSelectedDay(day)}
                  >
                    {day || ""}
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 3 — Activities (shown before step 2 like screenshot) */}
            <div className="tp-card">
              <div className="tp-act-header">
                <div className="tp-card-title" style={{ margin: 0 }}>
                  <div className="tp-step-num">3</div>
                  <span className="tp-card-heading">Select Activities</span>
                </div>
                <span className="tp-act-available">{ACTIVITIES.length} Available</span>
              </div>

              <div className="tp-act-grid">
                {ACTIVITIES.map(act => {
                  const sel = activities.includes(act.id);
                  return (
                    <div
                      key={act.id}
                      className={`tp-act-item${sel ? " selected" : ""}`}
                      onClick={() => toggleActivity(act.id)}
                    >
                      <div className="tp-act-icon">{act.icon}</div>
                      <div className="tp-act-info">
                        <div className="tp-act-name">{act.name}</div>
                        <div className="tp-act-sub">{act.sub}</div>
                        <div className="tp-act-price">₹{act.price}<span style={{fontWeight:400,color:"#999"}}>{act.unit}</span></div>
                      </div>
                      <div className="tp-act-check">
                        {sel ? "✓" : ""}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STEP 2 — Ticket types */}
            <div className="tp-card">
              <div className="tp-card-title">
                <div className="tp-step-num">2</div>
                <span className="tp-card-heading">Select Ticket Types</span>
              </div>

              {TICKET_TYPES.map(t => (
                <div className="tp-ticket-row" key={t.id}>
                  <div>
                    <div className="tp-ticket-label">{t.label}</div>
                    <div className="tp-ticket-sub">{t.sub}</div>
                  </div>
                  <div className="tp-ticket-right">
                    <div className="tp-ticket-price">Rs.: {t.price}.00</div>
                    <div className="tp-counter">
                      <button className="tp-counter-btn" onClick={() => changeTicket(t.id, -1)}>−</button>
                      <span className="tp-counter-val">{tickets[t.id]}</span>
                      <button className="tp-counter-btn" onClick={() => changeTicket(t.id, +1)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>{/* end left */}

          {/* ══ SIDEBAR ══════════════════════════════════════ */}
          <div className="tp-sidebar">

            {/* Booking Summary */}
            <div className="tp-summary-card">
              <div className="tp-summary-title">Booking Summary</div>

              {/* Date */}
              <div className="tp-summary-date">
                <div className="tp-summary-date-icon">📅</div>
                <div>
                  <div className="tp-summary-date-label">Visit Date</div>
                  <div className="tp-summary-date-val">{selectedDateStr}</div>
                </div>
              </div>

              {/* Tickets */}
              {TICKET_TYPES.filter(t => tickets[t.id] > 0).map(t => (
                <div className="tp-summary-row" key={t.id}>
                  <span>{tickets[t.id]} x {t.label} Ticket{tickets[t.id] > 1 ? "s" : ""}</span>
                  <span>Rs.:{tickets[t.id] * t.price}.00</span>
                </div>
              ))}

              {/* Selected activities */}
              {activities.length > 0 && (
                <>
                  <div className="tp-summary-section-label">Selected Activities</div>
                  {ACTIVITIES.filter(a => activities.includes(a.id)).map(a => (
                    <div className="tp-summary-row act" key={a.id}>
                      <span>1 x {a.name}</span>
                      <span>{a.price}.00</span>
                    </div>
                  ))}
                </>
              )}

              <div className="tp-summary-divider" />

              <div className="tp-summary-subtotal">
                <span>Subtotal</span>
                <span>₹{ticketTotal}.00 + ₹{actTotal}.00</span>
              </div>
              <div className="tp-summary-fee">
                <span>Service Fee</span>
                <span>₹{serviceFee.toFixed(2)}</span>
              </div>

              <div className="tp-summary-total">
                <span className="tp-summary-total-label">Total</span>
                <span className="tp-summary-total-val">₹{total.toFixed(2)}</span>
              </div>

              <button className="tp-pay-btn">
                Proceed to Payment →
              </button>
              <p className="tp-pay-secure">
                Secure checkout powered by ForestPay. Free cancellation up to 48 hours before visit.
              </p>
            </div>

            {/* Conservation card */}
            <div className="tp-conservation">
              <div className="tp-conservation-head">
                <div className="tp-conservation-icon">🌿</div>
                <span className="tp-conservation-title">Support Conservation</span>
              </div>
              <p className="tp-conservation-desc">
                15% of your ticket price goes directly to habitat restoration projects globally.
              </p>
              <label className="tp-conservation-check" style={{ cursor: "pointer" }}>
                <div
                  className={`tp-checkbox${roundUp ? " checked" : ""}`}
                  onClick={() => setRoundUp(r => !r)}
                >
                  {roundUp ? "✓" : ""}
                </div>
                <span>Round up my total for the Amazon Fund</span>
              </label>
            </div>

          </div>{/* end sidebar */}
        </div>{/* end layout */}
      </div>
    </>
  );
}
