// src/App.jsx
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout components (always visible)
import Navbar   from "./Navbar";
import Footer   from "./Footer";

// Pages
import Home        from "./Home";
import AboutPage   from "./AboutPage";
import AnimalsPage from "./AnimalsPage";
import TicketsPage from "./TicketsPage";
import EventsPage  from "./EventsPage";
import GalleryPage from "./GalleryPage";
import ContactPage from "./ContactPage";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <BrowserRouter>

      {/* Fixed Navbar — always on top */}
      <Navbar />

      {/* Page content swaps here */}
      <main>
        <Routes>
          <Route path="/"        element={<Home onBookNow={() => setBookingOpen(true)} />} />
          <Route path="/AboutPage"   element={<AboutPage/>} />
          <Route path="/AnimalsPage" element={<AnimalsPage />} />
          <Route path="/TicketsPage" element={<TicketsPage />} />
          <Route path="/EventsPage"  element={<EventsPage />} />
          <Route path="/GalleryPage" element={<GalleryPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer — always visible */}
      <Footer />

      {/* Global booking modal — triggered from Home / Navbar */}
      {bookingOpen && (
        <Container onClose={() => setBookingOpen(false)} />
      )}
    </BrowserRouter>
  );
}
