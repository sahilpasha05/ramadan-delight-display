import ramzanBg from "@/assets/ramzan-bg.jpg";
import FallingElements from "@/components/FallingElements";
import FloatingIcons from "@/components/FloatingIcons";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ramzanBg})` }}
      />
      <div className="absolute inset-0 bg-ramzan-overlay" />

      {/* Falling elements */}
      <FallingElements />

      {/* Floating icons */}
      <FloatingIcons />

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center min-h-screen px-4 py-8">
        {/* Brand */}
        <div className="text-center mb-6">
          <h1 className="font-brand text-5xl md:text-7xl tracking-[0.3em] text-sellkar-brand">
            SELLKAR
          </h1>
          <div className="flex items-center justify-center gap-4 mt-1">
            <span className="w-16 h-[2px] bg-sellkar-brand" />
            <span className="font-brand text-lg tracking-[0.5em] text-sellkar-brand">
              INDIA
            </span>
            <span className="w-16 h-[2px] bg-sellkar-brand" />
          </div>
        </div>

        {/* Crescent decorations */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-ramzan-gold text-2xl">☪</span>
          <span className="text-ramzan-gold text-lg">✦</span>
          <span className="text-ramzan-gold text-2xl">☪</span>
        </div>

        {/* Main Card */}
        <div className="bg-card/85 backdrop-blur-md rounded-2xl shadow-ramzan p-8 md:p-12 max-w-2xl w-full text-center border border-ramzan-gold/20">
          <h2 className="font-display text-3xl md:text-5xl text-ramzan-green mb-3">
            Ramzan Mubarak 2026!
          </h2>

          <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            Celebrate the Holy Month – Sell Smart!
          </p>

          <div className="flex items-start gap-2 justify-center mb-6">
            <span className="text-ramzan-gold text-xl mt-1">☪</span>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
              This Ramzan, turn your old gadgets into instant cash! Get the best
              prices, hassle-free pickup, and celebrate the blessed month with
              extra blessings in your pocket.
            </p>
          </div>

          <button className="bg-sellkar-btn hover:bg-sellkar-btn-hover text-sellkar-btn-text font-bold text-lg px-10 py-4 rounded-lg tracking-wider transition-all duration-300 hover:shadow-lg hover:scale-105">
            SELL NOW
          </button>
        </div>

        {/* Bottom decoration */}
        <div className="mt-8 flex items-center gap-2 text-ramzan-gold/60 text-sm">
          <span>✦</span>
          <span>☪</span>
          <span>✦</span>
          <span className="mx-2 text-muted-foreground">Blessed Deals This Ramzan</span>
          <span>✦</span>
          <span>☪</span>
          <span>✦</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
