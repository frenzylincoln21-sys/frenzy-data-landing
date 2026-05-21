import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ShoppingBag } from 'lucide-react';

const Hero = () => {
  const handleBuyClick = () => {
    const number = window.prompt("Enter recipient number to receive data:");
    if (number && number.trim() !== "") {
      const message = encodeURIComponent(`Hello Frenzy Data Hub,

I want to purchase a data bundle.
📱 Recipient Number: ${number}

Please provide payment details so I can complete the order.`);
      window.open(`https://wa.me/233597222464?text=${message}`, '_blank');
    }
  };

  return (
    <section id="offers" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Animated Light Streaks Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="light-streak" 
            style={{ 
              left: `${i * 20}%`, 
              animationDelay: `${i * 1.5}s`,
              opacity: 0.1 + (i * 0.05)
            }} 
          />
        ))}
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-morphism mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Telecom Revolution</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-white">DATA BUNDLE</span><br />
            <span className="text-gradient-gold drop-shadow-lg">OFFERS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-lg leading-relaxed">
            Save Up To <span className="text-primary font-bold">60%</span> – Fast, Reliable & Instant Delivery to all networks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={handleBuyClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-background font-bold rounded-2xl neon-glow-gold transition-all"
            >
              <ShoppingBag className="w-5 h-5" />
              Buy Data Now
            </motion.button>
            
            <motion.a
              href="https://wa.me/233597222464"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-8 py-4 glass-morphism text-white font-bold rounded-2xl hover:bg-white/10 transition-all border-white/20"
            >
              <MessageCircle className="w-5 h-5 text-green-400" />
              Chat on WhatsApp
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Glowing Aura behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] rounded-full" />
          
          <div className="relative z-10 glass-morphism p-2 rounded-[2.5rem] overflow-hidden rotate-2">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/77028963-505a-406f-8e10-5c7f15cb3ffe/hero-model-898999f4-1779360421030.webp" 
              alt="Frenzy Data Hub Model" 
              className="w-full h-auto rounded-[2rem] object-cover"
            />
          </div>

          {/* Floating Element 1 */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass-morphism px-4 py-3 rounded-2xl z-20"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm font-bold">10GB Bundle Active</span>
            </div>
          </motion.div>

          {/* Floating Element 2 */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 glass-morphism px-4 py-3 rounded-2xl z-20"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">🔥</span>
              <span className="text-sm font-bold">4.9ghc Lowest Price</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;