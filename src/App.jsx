import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
