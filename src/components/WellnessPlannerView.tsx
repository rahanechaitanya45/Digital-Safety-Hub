import React, { useState } from 'react';
import { 
  WellnessInputs, 
  calculateWellnessReport 
} from '../utils/wellnessPlanner';
import { 
  Smartphone, 
  Moon, 
  Clock, 
  Eye, 
  BellOff, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Smile, 
  Sliders 
} from 'lucide-react';

export const WellnessPlannerView: React.FC = () => {
  const [dailyHours, setDailyHours] = useState<number>(4.5);
  const [dailyPickups, setDailyPickups] = useState<number>(65);
  const [bedtimeUsageMinutes, setBedtimeUsageMinutes] = useState<number>(30);
  const [primaryUse, setPrimaryUse] = useState<WellnessInputs['primaryUse']>('short-videos');

  const report = calculateWellnessReport({
    dailyHours,
    dailyPickups,
    bedtimeUsageMinutes,
    primaryUse,
  });

  return (
    <section id="digital-wellness" className="py-16 bg-[#0E172A] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-10 space-y-2 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
            <span>Mindful Technology Habits</span>
            <span aria-hidden="true">·</span>
            <span>Digital Wellbeing & Sleep Hygiene</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Digital Wellness & Screen-Time Planner
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Smartphones are indispensable modern tools, but habit-forming algorithms can inadvertently compromise sleep, focus, and mental calm. Use this tool to build a healthy, judgment-free tech routine.
          </p>
        </div>

        {/* 2-Column Split: Inputs Deck vs Live Impact Assessment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-start">
          
          {/* Left Column: Interactive Sliders Deck */}
          <div className="lg:col-span-5 bg-[#131F3B] p-6 rounded-2xl border border-slate-800 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-800 text-xs font-bold text-blue-400 uppercase tracking-wide">
              <Sliders className="w-4 h-4" />
              <span>Your Daily Smartphone Profile</span>
            </div>

            {/* Slider 1: Daily Hours */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-medium text-slate-200">Average Screen Time / Day</span>
                <span className="font-bold font-mono text-blue-400 tabular-nums">{dailyHours} Hours</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="12"
                step="0.5"
                value={dailyHours}
                onChange={(e) => setDailyHours(parseFloat(e.target.value))}
                className="w-full accent-blue-500 bg-slate-900 rounded-lg cursor-pointer h-2"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>30 mins</span>
                <span>6 hrs (Global Avg)</span>
                <span>12+ hrs</span>
              </div>
            </div>

            {/* Slider 2: Pickups */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-medium text-slate-200">Daily Phone Pickups / Checks</span>
                <span className="font-bold font-mono text-blue-400 tabular-nums">{dailyPickups} Times</span>
              </div>
              <input
                type="range"
                min="10"
                max="200"
                step="5"
                value={dailyPickups}
                onChange={(e) => setDailyPickups(parseInt(e.target.value, 10))}
                className="w-full accent-blue-500 bg-slate-900 rounded-lg cursor-pointer h-2"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>10 checks</span>
                <span>80 (Average)</span>
                <span>200+</span>
              </div>
            </div>

            {/* Slider 3: Bedtime usage */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-medium text-slate-200">Screen Use in Bed Before Sleep</span>
                <span className="font-bold font-mono text-amber-400 tabular-nums">{bedtimeUsageMinutes} Minutes</span>
              </div>
              <input
                type="range"
                min="0"
                max="120"
                step="5"
                value={bedtimeUsageMinutes}
                onChange={(e) => setBedtimeUsageMinutes(parseInt(e.target.value, 10))}
                className="w-full accent-amber-500 bg-slate-900 rounded-lg cursor-pointer h-2"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>0 mins (Optimal)</span>
                <span>30 mins</span>
                <span>2 hrs</span>
              </div>
            </div>

            {/* Radio: Primary Consumption Type */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-medium text-slate-300 block">Primary Smartphone Activity:</span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'short-videos', label: 'Reels / Shorts' },
                  { id: 'social-media', label: 'Social Feeds' },
                  { id: 'gaming', label: 'Mobile Gaming' },
                  { id: 'work-study', label: 'Reading & Work' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setPrimaryUse(type.id as any)}
                    className={`p-2.5 rounded-xl border text-left transition-colors cursor-pointer ${
                      primaryUse === type.id
                        ? 'bg-blue-600/30 border-blue-500 text-blue-200 font-semibold'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Impact & Action Plan */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Real-Life Cumulative Impact Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#111C35] border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">Yearly Screen Time</span>
                <div className="text-2xl font-extrabold text-blue-400 tabular-nums">
                  {report.annualHours} <span className="text-xs text-slate-300 font-normal">hrs</span>
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  ≈ {report.annualWakingDaysLost} full waking days/yr
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#111C35] border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">Sleep Impact Factor</span>
                <div className={`text-2xl font-extrabold tabular-nums ${
                  report.sleepImpactRating === 'Severe' ? 'text-red-400' : report.sleepImpactRating === 'Moderate' ? 'text-amber-400' : 'text-emerald-400'
                }`}>
                  {report.sleepImpactRating}
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Circadian melatonin risk
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#111C35] border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">Dopamine Loop Load</span>
                <div className={`text-2xl font-extrabold tabular-nums ${
                  report.dopamineLoopRisk === 'High' ? 'text-red-400' : report.dopamineLoopRisk === 'Elevated' ? 'text-amber-400' : 'text-emerald-400'
                }`}>
                  {report.dopamineLoopRisk}
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Focus fragmentation
                </span>
              </div>
            </div>

            {/* Personalized Action Plan */}
            <div className="bg-[#111C35] p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>Your 5-Step Digital Wellness Protocol</span>
                </h3>
                <span className="text-[11px] text-slate-400 font-mono">
                  Evidence-Based Habits
                </span>
              </div>

              <div className="space-y-3">
                {report.recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-white flex items-center gap-2">
                        <span className="w-5 h-5 rounded-md bg-blue-600/30 text-blue-300 flex items-center justify-center text-[11px] font-mono font-bold">
                          {index + 1}
                        </span>
                        <span>{rec.title}</span>
                      </h4>
                      <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                        {rec.impact}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {rec.description}
                    </p>

                    <div className="pt-1.5 text-xs text-sky-300 font-medium flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{rec.actionableStep}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
