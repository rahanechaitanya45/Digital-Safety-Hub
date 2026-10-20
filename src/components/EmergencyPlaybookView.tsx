import React, { useState } from 'react';
import { 
  EMERGENCY_PLAYBOOKS, 
  EmergencyScenario 
} from '../utils/emergencyPlaybook';
import { 
  AlertOctagon, 
  PhoneCall, 
  ShieldAlert, 
  CheckCircle2, 
  ExternalLink, 
  Copy, 
  Check, 
  Clock,
  ArrowRight
} from 'lucide-react';

export const EmergencyPlaybookView: React.FC = () => {
  const [selectedPlaybookId, setSelectedPlaybookId] = useState<string>(EMERGENCY_PLAYBOOKS[0].id);
  const [copiedContact, setCopiedContact] = useState<string | null>(null);

  const activePlaybook = EMERGENCY_PLAYBOOKS.find((p) => p.id === selectedPlaybookId) || EMERGENCY_PLAYBOOKS[0];

  const handleCopy = (contact: string) => {
    navigator.clipboard.writeText(contact);
    setCopiedContact(contact);
    setTimeout(() => setCopiedContact(null), 2500);
  };

  return (
    <section id="incident-response" className="py-16 bg-[#0B1222] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Alert Header */}
        <div className="text-left mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-950/80 border border-red-500/50 text-red-300 text-xs font-bold tracking-wide uppercase">
            <AlertOctagon className="w-4 h-4 text-red-400" />
            <span>Emergency Incident Response Center</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            What To Do If You Are Targeted Right Now
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
            In cyber incidents, speed is critical. Follow the precise step-by-step containment checklists below and access official national cybercrime reporting hotlines immediately.
          </p>
        </div>

        {/* Emergency Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 mb-8">
          {EMERGENCY_PLAYBOOKS.map((playbook) => {
            const isSelected = playbook.id === selectedPlaybookId;
            return (
              <button
                key={playbook.id}
                onClick={() => setSelectedPlaybookId(playbook.id)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-red-600 text-white font-bold border-red-500 shadow-lg shadow-red-900/30'
                    : 'bg-[#121B32] border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-mono uppercase ${isSelected ? 'text-red-200' : 'text-slate-400'}`}>
                    {playbook.severity}
                  </span>
                </div>
                <h4 className="text-xs font-bold leading-tight line-clamp-2">
                  {playbook.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Emergency Playbook Card */}
        <div className="bg-[#121D38] rounded-3xl border border-slate-800 p-6 sm:p-8 space-y-8 text-left">
          
          {/* Header & First Step Callout */}
          <div className="border-b border-slate-800 pb-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {activePlaybook.title}
              </h3>
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${activePlaybook.badgeColor}`}>
                {activePlaybook.severity}
              </span>
            </div>
            <p className="text-sm text-slate-300">
              {activePlaybook.shortDescription}
            </p>

            <div className="p-4 rounded-2xl bg-red-950/70 border-2 border-red-500/70 text-red-100 flex items-start gap-3">
              <Clock className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-extrabold text-xs uppercase tracking-wider block text-red-300 mb-0.5">
                  Immediate First Action:
                </span>
                <p className="text-sm font-semibold text-white">
                  {activePlaybook.firstStep}
                </p>
              </div>
            </div>
          </div>

          {/* Action Checklist */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Step-by-Step Containment Protocol:</span>
            </h4>
            <div className="space-y-2.5">
              {activePlaybook.checklist.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs sm:text-sm text-slate-200"
                >
                  <span className="w-6 h-6 rounded-lg bg-blue-600/30 text-blue-300 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Official Helplines Directory */}
          <div className="pt-4 border-t border-slate-800/80 space-y-4">
            <h4 className="text-sm font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2">
              <PhoneCall className="w-4 h-4" />
              <span>Official Emergency Helplines & Reporting Portals</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {activePlaybook.helplines.map((helpline, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between space-y-3"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span className="font-semibold text-slate-300">{helpline.region}</span>
                      <span className="text-[10px] text-blue-400 font-mono">Verified 24/7</span>
                    </div>
                    <p className="text-xs font-bold text-white leading-tight">
                      {helpline.agency}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {helpline.note}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-900 flex items-center justify-between">
                    <span className="font-mono font-bold text-xs text-emerald-400">
                      {helpline.contact}
                    </span>
                    <button
                      onClick={() => handleCopy(helpline.contact)}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                      title="Copy contact"
                    >
                      {copiedContact === helpline.contact ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
