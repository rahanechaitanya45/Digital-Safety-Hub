import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ThreatCardsGrid } from './components/ThreatCardsGrid';
import { ThreatExplorer } from './components/ThreatExplorer';
import { InteractiveShowcases } from './components/InteractiveShowcases';
import { ScamSimulator } from './components/ScamSimulator';
import { WellnessPlannerView } from './components/WellnessPlannerView';
import { EmergencyPlaybookView } from './components/EmergencyPlaybookView';
import { Footer } from './components/Footer';
import { ThreatDetail } from './utils/threatData';
import { ShieldCheck, PhoneCall, ArrowRight, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [selectedThreatId, setSelectedThreatId] = useState<string>('ai-deepfakes');

  const handleSelectThreatFromCard = (threat: ThreatDetail) => {
    setSelectedThreatId(threat.id);
    setActiveTab('threats');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreAllThreats = () => {
    setActiveTab('threats');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEmergencyClick = () => {
    setActiveTab('emergency');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B1528] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onEmergencyClick={handleEmergencyClick}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'overview' && (
          <div>
            {/* 1. Hero Section */}
            <Hero
              onExploreThreats={handleExploreAllThreats}
              onStaySafe={() => {
                setActiveTab('interactive-demos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onStartSimulator={() => {
                setActiveTab('simulator');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 2. Overview of 10 Major Threats Grid */}
            <ThreatCardsGrid
              onSelectThreat={handleSelectThreatFromCard}
              onExploreAll={handleExploreAllThreats}
            />

            {/* 3. Deep-Dive Interactive Lab Preview */}
            <InteractiveShowcases />

            {/* 4. Quick Challenge Callout */}
            <section className="py-16 bg-gradient-to-r from-blue-950/80 via-[#0E1A36] to-indigo-950/80 border-y border-slate-800 text-center">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span>Interactive Threat Assessment</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white text-balance">
                  Think You Can Spot an AI Impostor or a Fraudulent QR Code?
                </h3>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
                  Over 78% of people fail to identify cloned voice audio or fraudulent UPI collect requests on their first attempt. Test your instincts safely in our simulator.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <button
                    onClick={() => {
                      setActiveTab('simulator');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                  >
                    <span>Launch "Can You Spot The Scam?"</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('wellness');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 transition-all cursor-pointer"
                  >
                    <span>Digital Wellness Calculator</span>
                  </button>
                </div>
              </div>
            </section>

            {/* 5. Emergency Quick Bar */}
            <section className="py-10 bg-red-950/30 border-b border-red-900/40 text-center">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left space-y-1">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-red-400" />
                    <span>Have you or a loved one been targeted today?</span>
                  </h4>
                  <p className="text-xs text-slate-300">
                    Access our step-by-step containment checklists and official national helplines immediately.
                  </p>
                </div>
                <button
                  onClick={handleEmergencyClick}
                  className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md transition-all whitespace-nowrap cursor-pointer shrink-0"
                >
                  View Incident Response Playbook
                </button>
              </div>
            </section>
          </div>
        )}

        {/* Threats Explorer View */}
        {activeTab === 'threats' && (
          <ThreatExplorer
            initialThreatId={selectedThreatId}
            onJumpToSimulator={() => {
              setActiveTab('simulator');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* Deep Dives & Interactive Lab */}
        {activeTab === 'interactive-demos' && (
          <div>
            <InteractiveShowcases />
          </div>
        )}

        {/* Scam Simulator View */}
        {activeTab === 'simulator' && (
          <ScamSimulator />
        )}

        {/* Digital Wellness View */}
        {activeTab === 'wellness' && (
          <WellnessPlannerView />
        )}

        {/* Emergency Playbook View */}
        {activeTab === 'emergency' && (
          <EmergencyPlaybookView />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={(tab) => {
        setActiveTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />
    </div>
  );
}
