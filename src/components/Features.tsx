import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Headphones, Globe } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Instant Delivery",
    desc: "Your data is delivered immediately after payment confirmation."
  },
  {
    icon: <Headphones className="w-8 h-8 text-accent" />,
    title: "24/7 Support",
    desc: "Our dedicated team is always available to help you with any issues."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Secure Payment",
    desc: "Pay safely via MoMo or Bank Transfer with full transaction security."
  },
  {
    icon: <Globe className="w-8 h-8 text-accent" />,
    title: "Fast Internet",
    desc: "Enjoy high-speed data bundles that never throttle your connection."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass-morphism hover:bg-white/10 transition-all border border-white/5 group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;