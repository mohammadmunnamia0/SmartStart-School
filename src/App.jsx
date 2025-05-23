import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import DevelopmentalBehaviorTherapyPage from "./pages/DevelopmentalBehaviorTherapyPage";
import HomePage from "./pages/HomePage";
import OccupationalTherapyPage from "./pages/OccupationalTherapyPage";
import SpeechTherapyPage from "./pages/SpeechTherapyPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/speech-therapy" element={<SpeechTherapyPage />} />
            <Route
              path="/occupational-therapy"
              element={<OccupationalTherapyPage />}
            />
            <Route
              path="/developmental-behavior-therapy"
              element={<DevelopmentalBehaviorTherapyPage />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
