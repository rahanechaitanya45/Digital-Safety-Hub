import React, { useState } from 'react';
import { 
  THREATS, 
  ThreatDetail 
} from '../utils/threatData';
import { 
  Bot, 
  CreditCard, 
  Users, 
  Smartphone, 
  ShieldAlert, 
  FileWarning, 
  AlertTriangle, 
  HelpCircle, 
  KeyRound, 
  Baby, 
  Search, 
  CheckCircle2, 
  AlertOctagon, 
  ShieldCheck, 
  LifeBuoy, 
  Eye,
  ArrowRight
} from 'lucide-react';

interface ThreatExplorerProps {
  initialThreatId?: string;
  onJumpToSimulator?: () => void;
}

export const ThreatExplorer: React.FC<ThreatExplorerProps> = ({ initialThreatId, onJumpToSimulator }) => {
  const [selectedThreatId, setSelectedThreatId] = useState<string>(initialThreatId || THREATS[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'prevention' | 'response' | 'scenario'>('overview');

  const selectedThreat = THREATS.find((t) => t.id === selectedThreatId) || THREATS[0];

  const filteredThreats = THREATS.filter((t) => {
    const q = searchQuery.toLowerCase();
    return (
      t.title.toLowerCase().includes(q) ||
      t.whatIsIt.toLowerCase().includes(q) ||
      t.targetAudience.toLowerCase().includes(q)
    );
  });

  const getThreatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot className="w-5 h-5" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'FileWarning': return <FileWarning className="w-5 h-5" />;
      case 'AlertTriangle': return <AlertTriangle className="w-5 h-5" />;
      case 'HelpCircle': return <HelpCircle className="w-5 h-5" />;
      case 'KeyRound': return <KeyRound className="w-5 h-5" />;
      case 'Baby': return <Baby className="w-5 h-5" />;
      default: return <ShieldAlert className="w-5 h-5" />;
    }
  };

  return (
    <section id="threats-explorer" className="py-12 bg-[#0B1325] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-8 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
            <span>Interactive Educational Encyclopedia</span>
            <span aria-hidden="true">·</span>
            <span>Digital Threats & Misuse</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Explore Digital Threats in Depth
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
            Detailed breakdowns written in accessible language for students, parents, and older adults. Learn what each threat is, why people fall victim, critical warning signs, prevention, and immediate emergency steps.
          </p>
        </div>

        {/* Master Layout: Left Sidebar List + Right Deep-Dive Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar: Threat Selector & Search */}
          <div className="lg:col-span-4 bg-[#111C35] rounded-2xl border border-slate-800 p-4 space-y-4">
            
            {/* Search Box */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search threats, keywords, scams..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* List of 10 Threats */}
            <div className="space-y-1.5 max-h-[600px] overflow-y-auto pr-1">
              {filteredThreats.map((threat) => {
                const isSelected = threat.id === selectedThreatId;
                return (
                  <button
                    key={threat.id}
                    onClick={() => {
                      setSelectedThreatId(threat.id);
                      setActiveTab('overview');
                    }}
                    className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-slate-900/50 hover:bg-slate-800 text-slate-200 border border-slate-800/80'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-800 text-blue-400'
                      }`}
                    >
                      {getThreatIcon(threat.iconName)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className={`text-[10px] font-mono ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                          {threat.number}
                        </span>
                        <span
                          className={`text-[9px] font-semibold px-1.5 py-0.2 rounded ${
                            threat.riskLevel === 'Critical'
                              ? isSelected ? 'bg-red-900/60 text-red-200' : 'text-red-400 bg-red-950/60'
                              : isSelected ? 'bg-amber-900/60 text-amber-200' : 'text-amber-400 bg-amber-950/60'
                          }`}
                        >
                          {threat.riskLevel}
                        </span>
                      </div>
                      <p className="text-xs font-bold truncate mt-0.5">
                        {threat.title}
                      </p>
                      <p className={`text-[11px] truncate ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                        {threat.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}

              {filteredThreats.length === 0 && (
                <div className="p-6 text-center text-xs text-slate-400">
                  No threats found matching "{searchQuery}".
                </div>
              )}
            </div>

            {/* Quick Helper Badge */}
            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 text-left">
              Tip: Test your instincts on this threat in our interactive simulator.
            </div>
          </div>

          {/* Right Column: Deep-Dive Presentation */}
          <div className="lg:col-span-8 bg-[#131F3B] rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 text-left">
            
            {/* Header Lockup */}
            <div className="border-b border-slate-800/80 pb-6 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/60">
                    THREAT #{selectedThreat.number}
                  </span>
                  <span className="text-xs text-slate-400">
                    Category: <span className="text-slate-200 capitalize">{selectedThreat.category.replace('-', ' ')}</span>
                  </span>
                </div>

                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                  selectedThreat.riskLevel === 'Critical'
                    ? 'bg-red-950/80 text-red-300 border-red-700/80'
                    : 'bg-amber-950/80 text-amber-300 border-amber-700/80'
                }`}>
                  {selectedThreat.riskLevel} Risk Level
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedThreat.title}
              </h3>
              <p className="text-sm text-blue-200/90 font-medium">
                {selectedThreat.tagline}
              </p>
            </div>

            {/* Internal Navigation Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 rounded-xl border border-slate-800 overflow-x-auto scrollbar-none">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                1. What & How It Happens
              </button>
              <button
                onClick={() => setActiveTab('prevention')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'prevention'
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                2. Warnings & Prevention
              </button>
              <button
                onClick={() => setActiveTab('response')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'response'
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                3. Consequences & Action
              </button>
              <button
                onClick={() => setActiveTab('scenario')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'scenario'
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                4. Educational Scenario
              </button>
            </div>

            {/* TAB 1: What is it, How it happens, Why victims fall for it, Who is targeted */}
            {activeTab === 'overview' && (
              <div className="space-y-6 pt-2">
                {/* 1. What is it? */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-blue-400 flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>What is it?</span>
                  </h4>
                  <p className="text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    {selectedThreat.whatIsIt}
                  </p>
                </div>

                {/* 2. How does it happen? */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-sky-400">
                    How does it happen in practice?
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/80">
                    {selectedThreat.howItHappens}
                  </p>
                </div>

                {/* 3 & 4: Why people fall victim + Who is commonly targeted */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                    <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                      Why do people fall victim?
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {selectedThreat.whyPeopleFallVictim}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                    <h5 className="text-xs font-bold text-purple-400 uppercase tracking-wide">
                      Who is commonly targeted?
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {selectedThreat.whoIsTargeted}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: Warning Signs & Prevention */}
            {activeTab === 'prevention' && (
              <div className="space-y-6 pt-2">
                {/* Warning Signs */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2">
                    <AlertOctagon className="w-4 h-4" />
                    <span>What warning signs should you recognize?</span>
                  </h4>
                  <div className="space-y-2">
                    {selectedThreat.warningSigns.map((sign, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-xl bg-amber-950/20 border border-amber-900/40 text-left"
                      >
                        <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          !
                        </span>
                        <p className="text-xs sm:text-sm text-slate-200 leading-normal">
                          {sign}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prevention Steps */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>How can someone prevent it?</span>
                  </h4>
                  <div className="space-y-2">
                    {selectedThreat.howToPrevent.map((step, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-xl bg-emerald-950/20 border border-emerald-900/40 text-left"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-slate-200 leading-normal">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Consequences & Action If Targeted */}
            {activeTab === 'response' && (
              <div className="space-y-6 pt-2">
                {/* Consequences */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-red-400 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Possible Consequences</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {selectedThreat.consequences.map((consequence, index) => (
                      <div
                        key={index}
                        className="p-3.5 rounded-xl bg-red-950/30 border border-red-900/50 text-xs sm:text-sm text-red-200"
                      >
                        • {consequence}
                      </div>
                    ))}
                  </div>
                </div>

                {/* What should someone do if it happens to them? */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-blue-400 flex items-center gap-2">
                    <LifeBuoy className="w-4 h-4" />
                    <span>What should you do if this happens to you?</span>
                  </h4>
                  <div className="space-y-2">
                    {selectedThreat.whatToDoIfTargeted.map((action, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-950/30 border border-blue-900/50 text-left"
                      >
                        <span className="w-5 h-5 rounded-md bg-blue-600/30 text-blue-300 text-xs font-bold flex items-center justify-center shrink-0">
                          {index + 1}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                          {action}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: Educational Scenario */}
            {activeTab === 'scenario' && (
              <div className="space-y-5 pt-2">
                <div className="p-3 bg-blue-900/30 border border-blue-500/30 rounded-xl text-xs text-blue-200">
                  <span className="font-bold text-blue-300">EDUCATIONAL SCENARIO: </span>
                  This is a fictional simulation designed for risk recognition and safety training.
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-700/80 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div>
                      <span className="text-xs text-slate-400">Simulated Sender: </span>
                      <span className="text-xs font-mono font-bold text-red-300">
                        {selectedThreat.educationalScenario.sender}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono uppercase bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                      {selectedThreat.educationalScenario.mockType} Format
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm font-mono text-slate-200 leading-relaxed">
                    {selectedThreat.educationalScenario.content}
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      ⚠️ Critical Warning Flags in this Scenario:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {selectedThreat.educationalScenario.warningFlags.map((flag, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span>{flag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs sm:text-sm text-emerald-200">
                    <span className="font-bold text-emerald-300">Recommended Safe Action: </span>
                    {selectedThreat.educationalScenario.safeAction}
                  </div>
                </div>

                {onJumpToSimulator && (
                  <div className="pt-2 text-right">
                    <button
                      onClick={onJumpToSimulator}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
                    >
                      <span>Test yourself in the interactive Scam Simulator</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
