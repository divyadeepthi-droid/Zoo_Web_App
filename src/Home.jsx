import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import FeaturedAnimals from "./Animals";
import Events from "./Events";
import CTABanner from "./CTA";

import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedAnimals />
        <Events />
        <CTABanner />
      </main>
    </>
  );
}