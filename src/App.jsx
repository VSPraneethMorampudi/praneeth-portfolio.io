import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const Home = () => {
  return (
    <div className="bh-hero-pattern bg-cover bg-no-repeat bg-center">
      <Hero />
      <About />
    </div>
  );
}

const Experiences = () => {
  return (
    <div>
      <Experience />
      <Tech />
      <Works />
    </div>
  );
}

const Contactus = () => {
  return (
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
  );
}

const App = () =>{
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experiences />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
export { Home, Experiences, Contactus };