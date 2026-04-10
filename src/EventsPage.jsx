import { useState } from "react";
import "./App.css";
import Aquarium from "./assets/Aquarium.jpg";
import {Link} from "react-router-dom";
const DOW   = ["S","M","T","W","T","F","S"];
const MONTHS= ["January","February","March","April","May","June",
               "July","August","September","October","November","December"];

function getDays(y,m){ return new Date(y,m+1,0).getDate(); }
function getFirst(y,m){ return new Date(y,m,1).getDay(); }

const GALLERY = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80",
  "https://i.pinimg.com/1200x/5d/47/a2/5d47a29927a7dba362eaeded416ec0b5.jpg",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
];

const MINI_EVENTS = [
  {
    cat:"Photography", catColor:"#7b1fa2",
    title:"Wild Frame Workshop",
    desc:"Master wildlife photography with expert guidance in our tropical aviaries.",
    date:"April 12",
    img:"https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&q=80",
  },
];

const LIST_EVENTS = [
  {
    cat:"Wellness", catColor:"#2e7d32",
    title:"Morning Zen Yoga",
    desc:"Rejuvenate your spirit with a guided meditation session amidst the morning.",
    freq:"Weekly Fri",
    img:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80",
  },
  {
    cat:"Community", catColor:"#1565c0",
    title:"Eco-Fest 2024",
    desc:"A celebration of sustainability with local artisans, vegan food trucks, and music.",
    freq:"June 05",
    img:"https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=400&q=80",
  },
];

// Event dates to highlight on calendar
const EVENT_DAYS = [5, 12, 19, 26];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function EventsPage() {
  const today = new Date();
  const [calYear,  setCalYear]  = useState(2024);
  const [calMonth, setCalMonth] = useState(2); // March
  const [selDay,   setSelDay]   = useState(14);
  const [tab,      setTab]      = useState("Upcoming");
  const [email,    setEmail]    = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const daysInMonth = getDays(calYear, calMonth);
  const firstDay    = getFirst(calYear, calMonth);
  const calCells    = [...Array(firstDay).fill(null),
                       ...Array.from({length: daysInMonth}, (_,i) => i+1)];

  const prevMonth = () => {
    if(calMonth===0){setCalYear(y=>y-1);setCalMonth(11);}
    else setCalMonth(m=>m-1);
  };
  const nextMonth = () => {
    if(calMonth===11){setCalYear(y=>y+1);setCalMonth(0);}
    else setCalMonth(m=>m+1);
  };

  return (
    <>
      <div style={{ paddingTop: 62 }}>

        {/* ══ 1. HERO ══════════════════════════════════════════ */}
        <div className="ev-hero">
          <div className="ev-hero-body">
            <div className="ev-hero-tags">
              <span className="ev-hero-tag ev-tag-sale">Annual Gala</span>
              <span className="ev-hero-tag ev-tag-date">June 24, 2024</span>
            </div>
            <h1 className="ev-hero-title">
              Midnight at the Safari: A Conservation Evening
            </h1>
            <p className="ev-hero-desc">
              Join us for an exclusive black-tie event celebrating wildlife
              conservation. An evening of gourmet dining, live music, and a private
              night tour of the sanctuary.
            </p>
            <div className="ev-hero-btns">
              <Link to="/TicketsPage" className="ev-btn ev-btn-green">Purchase Tickets →</Link>
              <a href="#"        className="ev-btn ev-btn-ghost">View Details</a>
            </div>
          </div>
        </div>

        {/* ══ 2. UPCOMING ZOO EXPERIENCES ══════════════════════ */}
        <div className="ev-upcoming">
          <div className="ev-upcoming-header">
            <div>
              <span className="ev-section-tag">Discover More</span>
              <h2 className="ev-section-title">Upcoming Zoo Experiences</h2>
            </div>
            <div className="ev-toggle">
              {["Upcoming","Past Events"].map(t=>(
                <button
                  key={t}
                  className={`ev-toggle-btn${tab===t?" active":""}`}
                  onClick={()=>setTab(t)}
                >{t}</button>
              ))}
            </div>
          </div>

          <div className="ev-upcoming-grid">

            {/* ── Left: Featured card ── */}
            <div className="ev-feat-card">
              <div className="ev-feat-img-wrap">
                <img
                  className="ev-feat-img"
                  src={Aquarium}
                  alt="Young Explorers Academy"
                />
                <span className="ev-feat-badge">Featured Experience</span>
              </div>
              <div className="ev-feat-body">
                <div className="ev-feat-meta">
                  <span className="ev-feat-meta-item">📅 Every Weekend</span>
                  <span className="ev-feat-meta-item">🕐 10:00 AM – 4:00 PM</span>
                </div>
                <h3 className="ev-feat-title">Young Explorers Academy</h3>
                <p className="ev-feat-desc">
                  A hands-on educational program designed for children ages 6–12 to
                  learn about marine biology and habitat preservation.
                </p>
                <a href="#" className="ev-learn-more">Learn more →</a>
              </div>
            </div>

            {/* ── Middle: Calendar + happening strip ── */}
            <div>
              <div className="ev-cal-card">
                <div className="ev-cal-header">
                  <span className="ev-cal-month-label">
                    {MONTHS[calMonth]} {calYear}
                  </span>
                  <div className="ev-cal-arrows">
                    <button className="ev-cal-arr" onClick={prevMonth}>‹</button>
                    <button className="ev-cal-arr" onClick={nextMonth}>›</button>
                  </div>
                </div>
                <div className="ev-cal-grid">
                  {DOW.map(d=>(
                    <div className="ev-cal-dow" key={d}>{d}</div>
                  ))}
                  {calCells.map((day,i)=>{
                    const hasEv  = day && EVENT_DAYS.includes(day);
                    const isSel  = day===selDay;
                    const isNow  = day===today.getDate() && calMonth===today.getMonth() && calYear===today.getFullYear();
                    return (
                      <button
                        key={i}
                        className={[
                          "ev-cal-day",
                          !day ? "ec-empty" : "",
                          isSel ? "ec-selected" : "",
                          !isSel && isNow ? "ec-today" : "",
                          !isSel && hasEv && !isNow ? "ec-event" : "",
                        ].join(" ")}
                        onClick={()=>day && setSelDay(day)}
                      >{day||""}</button>
                    );
                  })}
                </div>
                <div className="ev-happening">
                  <div className="ev-happening-dot"/>
                  <span className="ev-happening-text">Happening Today: Bird Matching Expedition</span>
                </div>
              </div>

              {/* List events below calendar */}
              <div className="ev-list-events">
                {LIST_EVENTS.map(e=>(
                  <div className="ev-list-item" key={e.title}>
                    <img className="ev-list-img" src={e.img} alt={e.title}/>
                    <div className="ev-list-body">
                      <span className="ev-list-cat" style={{color:e.catColor}}>{e.cat}</span>
                      <div className="ev-list-title">{e.title}</div>
                      <div className="ev-list-desc">{e.desc}</div>
                    </div>
                    <div className="ev-list-footer">
                      <span className="ev-list-freq">{e.freq}</span>
                      <div className="ev-mini-plus">+</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Mini event cards ── */}
            <div className="ev-mini-cards">
              {MINI_EVENTS.map(e=>(
                <div className="ev-mini-card" key={e.title}>
                  <img className="ev-mini-img" src={e.img} alt={e.title}/>
                  <div className="ev-mini-body">
                    <span className="ev-mini-cat" style={{color:e.catColor}}>{e.cat}</span>
                    <div className="ev-mini-title">{e.title}</div>
                    <div className="ev-mini-desc">{e.desc}</div>
                  </div>
                  <div className="ev-mini-footer">
                    <span className="ev-mini-date">{e.date}</span>
                    <div className="ev-mini-plus">+</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ══ 3. MOMENTS OF WONDER ════════════════════════════ */}
        <div className="ev-moments">
          <div className="ev-moments-header">
            <h2 className="ev-moments-title">Moments of Wonder</h2>
          </div>
          <p className="ev-moments-sub">
            Relive the magic of our previous events through our curated collection of memories.
          </p>
          <div className="ev-gallery-grid">
            {GALLERY.map((src,i)=>(
              <img
                key={i}
                className="ev-gallery-img"
                src={src}
                alt={`Memory ${i+1}`}
              />
            ))}
          </div>
          <div className="ev-gallery-center">
            <button className="ev-gallery-btn">View Full Gallery</button>
          </div>
        </div>

        {/* ══ 4. NEWSLETTER ════════════════════════════════════ */}
        <div className="ev-newsletter">
          <h2>Never Miss a Moment</h2>
          <p>
            Subscribe to our newsletter and be the first to know about upcoming gala
            events, workshop releases, and seasonal festivals.
          </p>
          {subscribed ? (
            <div style={{background:"rgba(255,255,255,0.2)",borderRadius:10,padding:"14px 24px",display:"inline-block",fontWeight:700,fontSize:15}}>
              🎉 You're subscribed! We'll be in touch.
            </div>
          ) : (
            <div className="ev-newsletter-form">
              <input
                className="ev-newsletter-input"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e=>setEmail(e.target.value)}
              />
              <button
                className="ev-newsletter-submit"
                onClick={()=>{ if(email.includes("@")) setSubscribed(true); }}
              >
                Subscribe
              </button>
            </div>
          )}
        </div>

      </div>
    </>
  );
}