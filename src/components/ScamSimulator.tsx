import React, { useState } from 'react';
import { 
  SIMULATOR_SCENARIOS, 
  SimulatorScenario, 
  calculateSimulatorScore 
} from '../utils/simulatorScenarios';
import { 
  ShieldAlert, 
  ShieldCheck, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  RotateCcw, 
  Sparkles, 
  Award, 
  ChevronRight,
  HelpCircle,
  PhoneCall,
  MessageSquare,
  QrCode,
  Download
} from 'lucide-react';

export const ScamSimulator: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, { verdict: boolean; selectedClues: string[] }>>({});
  const [currentSelectedClues, setCurrentSelectedClues] = useState<string[]>([]);
  const [hasSubmittedCurrent, setHasSubmittedCurrent] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const scenario: SimulatorScenario = SIMULATOR_SCENARIOS[currentIndex];

  const handleToggleClue = (clueId: string) => {
    if (hasSubmittedCurrent) return;
    if (currentSelectedClues.includes(clueId)) {
      setCurrentSelectedClues(currentSelectedClues.filter((id) => id !== clueId));
    } else {
      setCurrentSelectedClues([...currentSelectedClues, clueId]);
    }
  };

  const handleSelectVerdict = (isScamChoice: boolean) => {
    setUserAnswers((prev) => ({
      ...prev,
      [scenario.id]: {
        verdict: isScamChoice,
        selectedClues: currentSelectedClues,
      },
    }));
    setHasSubmittedCurrent(true);
  };

  const handleNext = () => {
    if (currentIndex < SIMULATOR_SCENARIOS.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentSelectedClues([]);
      setHasSubmittedCurrent(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setUserAnswers({});
    setCurrentSelectedClues([]);
    setHasSubmittedCurrent(false);
    setIsCompleted(false);
  };

  const scoreResult = calculateSimulatorScore(userAnswers);

  return (
    <section id="scam-simulator" className="py-16 bg-[#0B1325] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-8 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
            <span>Hands-on Safety Challenge</span>
            <span aria-hidden="true">·</span>
            <span>Realistic Scenario Training</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Can You Spot the Scam?
          </h2>
          <p className="text-sm text-slate-300">
            Inspect the incoming communication below. Identify suspicious clues and decide whether it is a legitimate communication or a dangerous scam.
          </p>
        </div>

        {/* Completion Screen */}
        {isCompleted ? (
          <div className="p-8 sm:p-10 rounded-3xl bg-[#131F3B] border border-blue-500/40 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-blue-600/30 border border-blue-400 text-blue-300 flex items-center justify-center mx-auto shadow-inner">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
                Evaluation Complete
              </span>
              <h3 className="text-3xl font-extrabold text-white">
                {scoreResult.rankTitle}
              </h3>
              <p className="text-sm text-slate-300 max-w-lg mx-auto">
                You correctly evaluated {scoreResult.correctVerdicts} out of {scoreResult.totalScenarios} scenarios and spotted {scoreResult.cluesIdentified} critical threat indicators.
              </p>
            </div>

            {/* Score Ring / Bar */}
            <div className="max-w-xs mx-auto p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>Cyber Preparedness Score</span>
                <span className="text-blue-400 font-bold tabular-nums">{scoreResult.scorePercentage}%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 transition-all duration-500"
                  style={{ width: `${scoreResult.scorePercentage}%` }}
                />
              </div>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={handleRestart}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Simulator Challenge</span>
              </button>
            </div>
          </div>
        ) : (
          /* Active Scenario Card */
          <div className="bg-[#121E38] rounded-3xl border border-slate-800 shadow-xl overflow-hidden text-left">
            
            {/* Top Bar: Progress and Difficulty */}
            <div className="bg-[#0D162A] px-6 py-3 border-b border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono text-blue-400 font-bold">
                  Scenario {currentIndex + 1} of {SIMULATOR_SCENARIOS.length}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-300">{scenario.threatType}</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Difficulty: {scenario.difficulty}
              </span>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Simulated Device Screen */}
              <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 space-y-4">
                
                {/* Message Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-slate-800 text-blue-400 flex items-center justify-center font-bold text-xs">
                      {scenario.channel === 'voice-call' && <PhoneCall className="w-4 h-4" />}
                      {scenario.channel === 'payment-qr' && <QrCode className="w-4 h-4" />}
                      {scenario.channel === 'sms' && <MessageSquare className="w-4 h-4" />}
                      {scenario.channel === 'chat' && <MessageSquare className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {scenario.senderName}
                      </h4>
                      <p className="text-[11px] font-mono text-slate-400">
                        {scenario.senderHandleOrNumber}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    {scenario.timestamp}
                  </span>
                </div>

                {/* Message Content */}
                <div className="text-sm text-slate-200 leading-relaxed font-mono bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                  {scenario.messageBody}
                </div>

                {/* Visual Artifact (if any) */}
                {scenario.visualArtifact && (
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      {scenario.visualArtifact.type === 'apk-download' && <Download className="w-4 h-4 text-amber-400" />}
                      {scenario.visualArtifact.type === 'payment-box' && <QrCode className="w-4 h-4 text-blue-400" />}
                      <span>{scenario.visualArtifact.actionLabel}</span>
                    </span>
                    {scenario.visualArtifact.amount && (
                      <span className="font-bold text-white font-mono">{scenario.visualArtifact.amount}</span>
                    )}
                  </div>
                )}
              </div>

              {/* Clue Inspector */}
              {!hasSubmittedCurrent ? (
                <div className="space-y-3">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wide flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Select any suspicious indicators you noticed (Optional Bonus):</span>
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {scenario.clues.map((clue) => {
                      const isSelected = currentSelectedClues.includes(clue.id);
                      return (
                        <button
                          key={clue.id}
                          onClick={() => handleToggleClue(clue.id)}
                          className={`p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-blue-900/40 border-blue-500 text-blue-200'
                              : 'bg-slate-900/40 border-slate-800 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`w-4 h-4 rounded flex items-center justify-center text-[10px] font-bold ${
                              isSelected ? 'bg-blue-500 text-white' : 'border border-slate-600'
                            }`}>
                              {isSelected ? '✓' : ''}
                            </span>
                            <span>{clue.text}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : null}

              {/* Verdict Buttons / Submitted State */}
              {!hasSubmittedCurrent ? (
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                    What is your verdict on this message?
                  </span>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => handleSelectVerdict(true)}
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                    >
                      <ShieldAlert className="w-4 h-4" />
                      <span>It's a Scam / Threat</span>
                    </button>

                    <button
                      onClick={() => handleSelectVerdict(false)}
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>It's Safe / Legitimate</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Post-Submission Feedback Breakdown */
                <div className="space-y-4 pt-2">
                  <div
                    className={`p-5 rounded-2xl border ${
                      userAnswers[scenario.id]?.verdict === scenario.isScam
                        ? 'bg-emerald-950/60 border-emerald-500/80 text-emerald-100'
                        : 'bg-red-950/60 border-red-500/80 text-red-100'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold text-sm mb-2">
                      {userAnswers[scenario.id]?.verdict === scenario.isScam ? (
                        <>
                          <CheckCircle className="w-5 h-5 text-emerald-400" />
                          <span>Correct! You made the right call.</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5 text-red-400" />
                          <span>Incorrect Verdict. Here is why you were tricked:</span>
                        </>
                      )}
                    </div>

                    <h5 className="font-extrabold text-white text-base">
                      {scenario.detailedAnalysis.verdictTitle}
                    </h5>
                    <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                      {scenario.detailedAnalysis.explanation}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-700/60 space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-blue-200">
                        <span className="font-bold text-blue-300">Golden Rule: </span>
                        {scenario.detailedAnalysis.goldenRule}
                      </div>
                      <p className="text-slate-300 text-[11px]">
                        <strong>Real-World Consequence: </strong>
                        {scenario.detailedAnalysis.realWorldImpact}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={handleNext}
                      className="flex items-center gap-2 py-2.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors cursor-pointer"
                    >
                      <span>Next Scenario</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
