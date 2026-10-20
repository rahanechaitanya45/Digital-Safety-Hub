import React, { useState } from 'react';
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
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { THREATS, ThreatDetail } from '../utils/threatData';

interface ThreatCardsGridProps {
  onSelectThreat: (threat: ThreatDetail) => void;
  onExploreAll: () => void;
}

export const ThreatCardsGrid: React.FC<ThreatCardsGridProps> = ({ onSelectThreat, onExploreAll }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getIcon = (iconName: string) => {
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

  const categories = [
    { id: 'all', label: 'All 10 Threats' },
    { id: 'financial', label: 'Financial & Payments' },
    { id: 'ai-cyber', label: 'AI & Extortion' },
    { id: 'social-psych', label: 'Social & Wellbeing' },
    { id: 'privacy', label: 'Privacy & Identity' },
    { id: 'device-security', label: 'Malware & Devices' },
  ];

  const filteredThreats = selectedCategory === 'all'
    ? THREATS
    : THREATS.filter((t) => t.category === selectedCategory);

  return (
    <section className="py-16 bg-[#0E172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
              <span>Threat Spectrum Analysis</span>
              <span aria-hidden="true">·</span>
              <span>10 Critical Vectors</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Major Digital Threats in Everyday Life
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Smartphones bring extraordinary convenience, but cybercriminals exploit cognitive vulnerabilities and software misconfigurations. Select any threat below to inspect prevention techniques.
            </p>
          </div>

          <button
            onClick={onExploreAll}
            className="self-start md:self-auto flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors shrink-0"
          >
            <span>Open Comprehensive Deep-Dive Explorer</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Threat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredThreats.map((threat) => {
            const isCritical = threat.riskLevel === 'Critical';
            const isHigh = threat.riskLevel === 'High';

            return (
              <div
                key={threat.id}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#131E35] border border-slate-800 hover:border-blue-500/50 hover:bg-[#16233F] transition-all duration-200 text-left shadow-lg hover:shadow-xl hover:shadow-blue-900/10"
              >
                <div>
                  {/* Top Header: Number and Risk Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      {threat.number}
                    </span>
                    
                    {/* Risk Indicator (Unboxed or Subtle Tag) */}
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                        isCritical
                          ? 'bg-red-950/60 text-red-300 border-red-800/60'
                          : isHigh
                          ? 'bg-amber-950/60 text-amber-300 border-amber-800/60'
                          : 'bg-blue-950/60 text-blue-300 border-blue-800/60'
                      }`}
                    >
                      {threat.riskLevel} Risk
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-900/40 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {getIcon(threat.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                        {threat.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                        {threat.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {threat.whatIsIt}
                  </p>

                  {/* Target Audience Metadata (Clean unboxed format per rules) */}
                  <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                    <span className="text-slate-500 font-medium">Common Targets: </span>
                    <span>{threat.targetAudience}</span>
                  </div>
                </div>

                {/* Bottom Action: Learn More */}
                <div className="pt-5 mt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">
                    8 Prevention Steps
                  </span>
                  <button
                    onClick={() => onSelectThreat(threat)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 hover:underline cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
