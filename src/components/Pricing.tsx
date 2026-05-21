import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const networkData = [
  {
    provider: 'MTN Ghana',
    color: 'from-yellow-400 to-amber-600',
    accent: '#FFD700',
    plans: [
      { size: '1GB', price: '4.9' },
      { size: '2GB', price: '9.5' },
      { size: '3GB', price: '16' },
      { size: '4GB', price: '21' },
      { size: '5GB', price: '29' },
      { size: '10GB', price: '45' },
    ]
  },
  {
    provider: 'Telecel (Vodafone)',
    color: 'from-red-500 to-rose-700',
    accent: '#ef4444',
    plans: [
      { size: '5GB', price: '29' },
      { size: '6GB', price: '35' },
      { size: '7GB', price: '41' },
      { size: '10GB', price: '59' },
    ],
    featured: true
  },
  {
    provider: 'AirtelTigo',
    color: 'from-blue-400 to-indigo-600',
    accent: '#3b82f6',
    plans: [
      { size: '1GB', price: '4.9' },
      { size: '2GB', price: '9.5' },
      { size: '3GB', price: '16' },
      { size: '4GB', price: '21' },
      { size: '5GB', price: '29' },
      { size: '10GB', price: '45' },
    ]
  }
];

const Pricing = () => {
  const handleOrderClick = (provider: string, size?: string, price?: string) => {
    const number = window.prompt(`Enter recipient number for ${provider} ${size || ''} bundle:`);
    if (number && number.trim() !== "") {
      let message = `🚀 *NEW ORDER - FRENZY DATA HUB* 🚀

`;
      message += `📡 *Network:* ${provider}
`;
      if (size && price) {
        message += `📦 *Package:* ${size}
`;
        message += `💰 *Price:* ${price}ghc
`;
      }
      message += `📱 *Recipient:* ${number}

`;
      message += `✅ *Customer is ready to purchase.*`;
      
      const whatsappUrl = `https://wa.me/233597222464?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section id="pricing" className="py-24 bg-mesh">
      <div className="container mx-auto px-6 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-4 text-white"
        >
          CHOOSE YOUR <span className="text-primary">BUNDLE</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Select from our range of affordable data packages tailored for your preferred network.
        </motion.p>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {networkData.map((network, idx) => (
          <motion.div
            key={network.provider}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className={`relative group rounded-3xl p-1 bg-gradient-to-br ${network.color} transition-all duration-300`}
          >
            <div className="bg-[#000b1d] rounded-[calc(1.5rem-4px)] p-8 h-full flex flex-col glass-morphism">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{network.provider}</h3>
                <div className={`h-1 w-20 bg-gradient-to-r ${network.color} rounded-full`} />
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {network.plans.map((plan) => (
                  <div 
                    key={plan.size} 
                    onClick={() => handleOrderClick(network.provider, plan.size, plan.price)}
                    className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 cursor-pointer group/plan"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" style={{ color: network.accent }} />
                      <span className="font-bold text-white group-hover/plan:text-primary transition-colors">{plan.size}</span>
                    </div>
                    <span className="text-primary font-black">{plan.price}ghc</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleOrderClick(network.provider)}
                className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all duration-300 ${
                  network.featured 
                    ? `bg-gradient-to-r ${network.color} text-white shadow-lg` 
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                }`}
              >
                Order {network.provider.split(' ')[0]}
              </button>
            </div>
            
            {network.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-rose-600 text-xs font-black rounded-full uppercase tracking-widest shadow-xl">
                Most Popular
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;