// Import necessary packages
import React from "react";
import 'preline';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Omeda from "./Components/Omeda/Omeda";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Home/Footer";
import Classico from "./Components/Classico/Classico";
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/omeda" element={<Omeda />} />
        <Route path="/classico" element={<Classico />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
