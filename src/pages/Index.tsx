import ramzanBg from "@/assets/ramzan-bg.jpg";
import { Check, Shield, Truck, Zap } from "lucide-react";

const trustItems = [
  { icon: Shield, text: "Best Price Guaranteed" },
  { icon: Truck, text: "Free Doorstep Pickup" },
  { icon: Zap, text: "Instant Payment" },
];

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-ramzan-gradient" />

      {/* Device image – subtle behind content */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${ramzanBg})` }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Brand */}
        <div className="text-center mb-10">
          <h1 className="font-brand text-4xl md:text-6xl tracking-[0.3em] text-ramzan-cream">
            SELLKAR
          </h1>
          <div className="flex items-center justify-center gap-4 mt-1">
            <span className="w-12 h-[1px] bg-ramzan-gold/60" />
            <span className="font-brand text-sm tracking-[0.5em] text-ramzan-gold">
              INDIA
            </span>
            <span className="w-12 h-[1px] bg-ramzan-gold/60" />
          </div>
          <p className="text-ramzan-cream/60 text-xs tracking-widest mt-2 uppercase">
            India's Trusted Gadget Resale Platform
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-ramzan-cream/95 backdrop-blur-xl rounded-3xl shadow-ramzan-card p-8 md:p-14 max-w-2xl w-full text-center">
          {/* Crescent accent */}
          <span className="text-ramzan-gold text-3xl mb-4 inline-block">☪</span>

          <h2 className="font-display text-3xl md:text-[2.75rem] leading-tight text-ramzan-dark-green mb-4">
            Ramzan Mubarak 🌙
          </h2>
          <p className="font-display text-xl md:text-2xl text-ramzan-dark-green/90 mb-2">
            Turn Old Gadgets into Blessings
          </p>

          <p className="text-ramzan-dark-green/60 text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-8">
            Sell your unused phone, laptop, or tablet in minutes — get instant
            value and hassle-free pickup during the holy month.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
            {trustItems.map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-ramzan-green/10 flex items-center justify-center">
                  <item.icon className="w-3.5 h-3.5 text-ramzan-green" />
                </div>
                <span className="text-ramzan-dark-green/80 text-sm font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="bg-ramzan-green hover:bg-ramzan-gold text-ramzan-cream hover:text-ramzan-dark-green font-bold text-lg px-12 py-4 rounded-xl tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            Get My Best Price
          </button>
        </div>

        {/* Subtle bottom line */}
        <p className="mt-8 text-ramzan-cream/40 text-xs tracking-widest uppercase">
          ✦ Blessed Deals This Ramzan ✦
        </p>
      </div>
    </div>
  );
};

export default Index;
