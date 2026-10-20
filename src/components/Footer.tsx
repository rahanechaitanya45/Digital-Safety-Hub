import React from 'react';
import { Shield, Heart, ShieldAlert, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070D1A] text-slate-400 text-xs border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white tracking-tight">
                  Digital Safety Hub
                </span>
                <span className="text-[11px] text-blue-400 font-medium">
                  Think Before You Tap. Stay Safe in the Digital World.
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Empowering students, families, educators, and citizens worldwide with the tools, knowledge, and critical instincts to identify AI scams, resist smartphone manipulation, and safeguard digital privacy.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Public Cyber Education Initiative</span>
            </div>
          </div>

          {/* Quick Learning Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase text-white tracking-wider block">
              Educational Sections
            </span>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('overview')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Overview & Threat Spectrum
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('threats')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  10 Digital Threats Explorer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('interactive-demos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  UPI & AI Voice Lab
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('simulator')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  "Can You Spot the Scam?" Challenge
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('wellness')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Digital Wellness & Screen Time
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('emergency')}
                  className="hover:text-red-400 transition-colors cursor-pointer"
                >
                  Emergency Incident Playbook
                </button>
              </li>
            </ul>
          </div>

          {/* Golden Rules Summary */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase text-white tracking-wider block">
              Core Digital Safety Axioms
            </span>
            <div className="space-y-2 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-300">
              <p>
                <strong>1. UPI PIN Axiom:</strong> Entering a PIN always sends money. Receiving money never requires your PIN.
              </p>
              <p>
                <strong>2. AI Voice Axiom:</strong> Never send funds based solely on an emotional voice note. Always call back on a trusted phone number.
              </p>
              <p>
                <strong>3. APK Axiom:</strong> Never install an app downloaded via SMS links or external websites.
              </p>
            </div>
          </div>

        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p className="max-w-2xl leading-relaxed text-center sm:text-left">
            Disclaimer: Digital Safety Hub is an educational literacy platform. All message scenarios, audio waveforms, and phone screenshots are realistic fictional representations crafted strictly for safety training and fraud prevention awareness.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
