import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PaymentGateway from './components/PaymentGateway';

function App() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const handlePaymentClick = () => {
    setIsPaymentOpen(true);
  };

  const handlePaymentClose = () => {
    setIsPaymentOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header onPaymentClick={handlePaymentClick} />
      <Hero />
      <About />
      <Services />
      {/* <Projects /> */}
      <Contact/>
      <Footer />
      <PaymentGateway isOpen={isPaymentOpen} onClose={handlePaymentClose} />
    </div>
  );
}

export default App;