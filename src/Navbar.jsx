// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import Logo from "./assets/Logo.png";

const NAV_LINKS = [
  { label: "Home",    to: "/" },
  { label: "About",   to: "/AboutPage" },
  { label: "Animals", to: "/AnimalsPage" },
  { label: "Tickets", to: "/TicketsPage" },
  { label: "Events",  to: "/EventsPage" },
  { label: "Gallery", to: "/GalleryPage" },
];

export default function Navbar() {
  return (
    <nav className="navbar">

      {/* ── Logo (links back to Home) ── */}
      <NavLink to="/" className="navbar-logo" style={{ textDecoration: "none" }}>
        <div className="logo-icon">
          <img src={Logo} height="32" width="32" alt="Zoo Logo" />
        </div>
        <span>Nehru Zoological Park</span>
      </NavLink>

      {/* ── Nav Links ── */}
      <ul className="navbar-links">
        {NAV_LINKS.map(({ label, to }) => (
          <li key={label}>
            {/*
              NavLink automatically receives isActive = true when the
              current URL matches `to`. We use that to apply "active" class.
              `end` on "/" prevents it matching every route.
            */}
            <NavLink
              to={to}
              end={to === "/"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* ── Right Buttons ── */}
      <div className="navbar-right">
        <NavLink to="/TicketsPage" className="btn btn-green">
          Book Now
        </NavLink>
        <NavLink to="/ContactPage" className="btn btn-outline">
          Contact
        </NavLink>
      </div>

    </nav>
  );
}
