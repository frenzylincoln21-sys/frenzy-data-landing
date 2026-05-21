import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-mesh selection:bg-primary selection:text-background">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <Features />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster position="top-center" expand={false} richColors />
    </div>
  );
}

export default App;