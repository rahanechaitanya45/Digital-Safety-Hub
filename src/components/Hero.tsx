import React from 'react';
import { ArrowRight, ShieldCheck, AlertTriangle, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreThreats: () => void;
  onStaySafe: () => void;
  onStartSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreThreats, onStaySafe, onStartSimulator }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1528] via-[#0D1B34] to-[#0A1324] text-white pt-12 pb-20 border-b border-slate-800">
      {/* Background Subtle Cyber Elements */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 20%, rgba(37, 99, 235, 0.4) 0%, transparent 60%)',
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-900/40 border border-blue-700/50 text-blue-300 text-xs font-semibold tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Public Digital Safety & Cyber Literacy Hub</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Your Smartphone Can Connect You to the World.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                But Can You Stay Safe in It?
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Discover how smartphones, artificial intelligence, social media, and online scams are being misused. Learn to recognize digital threats and protect yourself, your family, and your personal information.
            </p>

            {/* Prompt Requested Two Prominent Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreThreats}
                className="flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/25 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 whitespace-nowrap cursor-pointer"
              >
                <span>Explore Digital Threats</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onStaySafe}
                className="flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 whitespace-nowrap cursor-pointer"
              >
                <span>Learn How to Stay Safe</span>
              </button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white tabular-nums">10 Major</p>
                <p className="text-xs text-slate-400">Threat Types Analyzed</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-blue-400 tabular-nums">100% Free</p>
                <p className="text-xs text-slate-400">Public Education</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-emerald-400 tabular-nums">Real Demos</p>
                <p className="text-xs text-slate-400">Interactive Simulators</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Phone Safety Display */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-[36px] bg-slate-900 border-4 border-slate-700/80 p-3 shadow-2xl shadow-blue-900/30">
              
              {/* Phone Notch & Speaker */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-950 rounded-full flex items-center justify-center gap-2 z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                <div className="w-10 h-1 bg-slate-800 rounded-full" />
              </div>

              {/* Phone Screen Area */}
              <div className="rounded-[28px] bg-[#0A101D] border border-slate-800 p-4 pt-8 text-left space-y-4">
                
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono px-1">
                  <span>09:41</span>
                  <div className="flex items-center gap-1.5">
                    <span>5G</span>
                    <span className="text-emerald-400">100%</span>
                  </div>
                </div>

                {/* Threat Scanner Simulation Card 1: AI Alert */}
                <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-left space-y-2 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-red-400">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Incoming Audio Call Alert
                    </span>
                    <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-red-500/20 text-red-300">
                      High Risk
                    </span>
                  </div>
                  <p className="text-xs text-slate-200">
                    Caller voice pitch matches synthetic pattern. Spoofed caller ID.
                  </p>
                  <div className="p-2 rounded-lg bg-red-900/30 border border-red-500/20 text-[11px] text-red-200 font-medium">
                    ⚠️ Action: Hang up and verify via your Family Safe Word!
                  </div>
                </div>

                {/* Threat Scanner Simulation Card 2: UPI PIN Shield */}
                <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30 text-left space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-blue-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      UPI Payment Protection Rule
                    </span>
                    <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300">
                      Golden Rule
                    </span>
                  </div>
                  <p className="text-xs text-slate-200">
                    A seller or QR code cannot transfer money to you by requesting your PIN.
                  </p>
                  <div className="p-2 rounded-lg bg-blue-900/40 border border-blue-500/20 text-[11px] text-emerald-300 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                    <span>PIN is for PAYING. Receiving never requires a PIN.</span>
                  </div>
                </div>

                {/* Interactive Simulator CTA inside Phone */}
                <div className="pt-2">
                  <button
                    onClick={onStartSimulator}
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Launch "Can You Spot The Scam?" Test</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
