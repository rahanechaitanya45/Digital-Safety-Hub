import React, { useState } from 'react';
import { 
  Bot, 
  CreditCard, 
  FileWarning, 
  Volume2, 
  VolumeX, 
  ShieldCheck, 
  AlertTriangle, 
  KeyRound, 
  Check, 
  X, 
  Info,
  HelpCircle
} from 'lucide-react';

export const InteractiveShowcases: React.FC = () => {
  const [activeShowcase, setActiveShowcase] = useState<'ai' | 'upi' | 'phishing'>('upi');

  // AI Voice Verification Phrase State
  const [familyPhraseInput, setFamilyPhraseInput] = useState('');
  const [phraseChecked, setPhraseChecked] = useState(false);
  const correctSecretPhrase = 'Blue Anchor 42';

  // UPI PIN Demonstration State
  const [enteredPin, setEnteredPin] = useState('');
  const [pinTriggered, setPinTriggered] = useState(false);

  // Phishing Hotspot Inspection State
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);

  return (
    <section className="py-16 bg-[#0E172A] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-10 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
            <span>Hands-on Interactive Lab</span>
            <span aria-hidden="true">·</span>
            <span>Key Threat Deep Dives</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Interactive Threat Demonstrations
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Experience realistic educational simulations of the three fastest-growing digital attack vectors: AI voice cloning, deceptive UPI payment traps, and SMS phishing APKs.
          </p>
        </div>

        {/* Showcase Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveShowcase('upi')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeShowcase === 'upi'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>UPI & Payment Trap Demonstration</span>
            </button>

            <button
              onClick={() => setActiveShowcase('ai')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeShowcase === 'ai'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>AI Voice Clone & Safe Word Challenge</span>
            </button>

            <button
              onClick={() => setActiveShowcase('phishing')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeShowcase === 'phishing'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <FileWarning className="w-4 h-4" />
              <span>Phishing SMS & Fake APK Inspector</span>
            </button>
          </div>
        </div>

        {/* 1. UPI & ONLINE PAYMENT DEMONSTRATION */}
        {activeShowcase === 'upi' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
            {/* Left: The Golden Rule & Passbook Comparison */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-5 rounded-2xl bg-[#131F3B] border border-blue-500/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4" />
                  <span>The Fundamental Rule of UPI Safety</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Receiving Money NEVER Requires Entering a UPI PIN
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Scammers routinely tell online sellers: <em>"To receive my advance payment of Rs. 5,000, please scan this QR code or approve the notification and enter your PIN."</em>
                </p>
                <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-200 font-medium">
                  ⚠️ Reality: Your UPI PIN is strictly an <strong>OUTBOUND AUTHORIZATION</strong> key. Entering your PIN instructs your bank to transfer money <strong>AWAY</strong> from your balance.
                </div>
              </div>

              {/* Passbook vs Screenshot Interactive Comparison */}
              <div className="p-5 rounded-2xl bg-[#111A2E] border border-slate-800 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Info className="w-4 h-4 text-sky-400" />
                  <span>Always Verify Passbook vs Buyer Screenshots</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-red-950/30 border border-red-800/40 space-y-1">
                    <span className="font-bold text-red-400">❌ Fake Screenshot (Easily Forged)</span>
                    <p className="text-slate-300">
                      Scammers use automated Telegram bots or web templates to generate fake "Payment Successful - Rs 5,000" slips in 5 seconds.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/40 space-y-1">
                    <span className="font-bold text-emerald-400">✅ Official Bank Statement</span>
                    <p className="text-slate-300">
                      Never dispatch goods or refund money until you open your official banking app and verify the updated ledger balance yourself.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive PIN Pad Simulation */}
            <div className="lg:col-span-6">
              <div className="p-6 rounded-2xl bg-[#0F172A] border-2 border-slate-700 space-y-4 max-w-md mx-auto">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-slate-400">SIMULATED UPI TRANSACTION</span>
                  <span className="text-[10px] font-bold uppercase bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800/50">
                    Collect Request
                  </span>
                </div>

                <div className="text-center py-2 space-y-1">
                  <span className="text-xs text-slate-400">Scammer claims: "Accept advance payment"</span>
                  <div className="text-3xl font-extrabold text-white">₹ 4,500.00</div>
                  <span className="text-[11px] text-red-400 font-medium">Request Type: DEBIT FROM YOUR ACCOUNT</span>
                </div>

                {/* PIN Input Dots */}
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-slate-300 text-center">
                    Enter your 4 or 6-digit UPI PIN to "Claim":
                  </label>
                  <div className="flex justify-center gap-3">
                    {[0, 1, 2, 3].map((idx) => (
                      <div
                        key={idx}
                        className={`w-10 h-12 rounded-lg border-2 flex items-center justify-center text-lg font-bold ${
                          enteredPin.length > idx
                            ? 'border-blue-500 bg-blue-950/40 text-blue-300'
                            : 'border-slate-700 bg-slate-900 text-slate-500'
                        }`}
                      >
                        {enteredPin.length > idx ? '●' : ''}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated Keypad */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <button
                      key={num}
                      onClick={() => {
                        if (enteredPin.length < 4) {
                          const next = enteredPin + num;
                          setEnteredPin(next);
                          if (next.length === 4) setPinTriggered(true);
                        }
                      }}
                      className="py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm font-bold text-white transition-colors cursor-pointer"
                    >
                      {num}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      setEnteredPin('');
                      setPinTriggered(false);
                    }}
                    className="py-3 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-xs font-semibold text-slate-400 cursor-pointer"
                  >
                    Clear
                  </button>
                  <button
                    onClick={() => {
                      if (enteredPin.length < 4) {
                        const next = enteredPin + '0';
                        setEnteredPin(next);
                        if (next.length === 4) setPinTriggered(true);
                      }
                    }}
                    className="py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm font-bold text-white cursor-pointer"
                  >
                    0
                  </button>
                  <button
                    onClick={() => {
                      setEnteredPin(enteredPin.slice(0, -1));
                      setPinTriggered(false);
                    }}
                    className="py-3 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-xs font-semibold text-slate-400 cursor-pointer"
                  >
                    ⌫
                  </button>
                </div>

                {/* Alarm Warning Callout when PIN is completed */}
                {pinTriggered && (
                  <div className="p-4 rounded-xl bg-red-950/80 border-2 border-red-500 text-left space-y-2 animate-bounce">
                    <div className="flex items-center gap-2 text-red-300 font-extrabold text-xs uppercase tracking-wide">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      <span>CRITICAL SECURITY WARNING!</span>
                    </div>
                    <p className="text-xs text-red-100 font-bold">
                      STOP! Entering your PIN would have transferred ₹ 4,500.00 OUT of your account directly to the criminal.
                    </p>
                    <p className="text-[11px] text-red-200">
                      Remember: Never enter a PIN to receive money! Decline any collect request.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 2. AI VOICE SCAMS & DEEPFAKE DEMONSTRATION */}
        {activeShowcase === 'ai' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
            <div className="lg:col-span-7 space-y-5">
              <div className="p-5 rounded-2xl bg-[#131F3B] border border-blue-500/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wide">
                  <Bot className="w-4 h-4" />
                  <span>How Generative AI Voice Cloning Operates</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  3 Seconds of Audio is All Modern AI Needs
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Criminals scrape audio from public social media reels or telephone voicemails. They feed the snippet into consumer neural voice synthesizers, clone the vocal timbre, and place a call claiming an emergency.
                </p>

                {/* Waveform Visualization Mockup */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono text-red-400">SIMULATED AUDIO CLONE (Incoming Call)</span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Volume2 className="w-3.5 h-3.5 text-blue-400" />
                      Synthetic Match: 98.4%
                    </span>
                  </div>
                  {/* Waveform Bars */}
                  <div className="flex items-center justify-center gap-1 h-12 pt-2">
                    {[12, 28, 45, 18, 55, 34, 70, 48, 22, 60, 85, 38, 50, 68, 30, 24, 78, 42, 16, 52].map((height, i) => (
                      <div
                        key={i}
                        className="w-1.5 bg-gradient-to-t from-blue-600 to-indigo-400 rounded-full"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 italic text-center pt-1">
                    "Dad, please don't be mad, I was arrested in a hit-and-run, I need bail money right now..."
                  </p>
                </div>
              </div>

              {/* Defense Protocol */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  The Two-Step Defense Protocol:
                </h4>
                <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-300">
                  <li><strong>Hang Up Immediately:</strong> Never make financial decisions during an incoming emergency call.</li>
                  <li><strong>Trusted Callback:</strong> Dial the family member back on their known, pre-saved phone number.</li>
                </ol>
              </div>
            </div>

            {/* Right: The Family Verification Safe Word Challenge */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-[#0F172A] border-2 border-blue-500/40 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                  <KeyRound className="w-4 h-4" />
                  <span>The Family Safe Word Challenge</span>
                </div>
                <h4 className="text-base font-bold text-white">
                  Test Your Verification Defense
                </h4>
                <p className="text-xs text-slate-300">
                  A <strong>Family Safe Word</strong> is an unwritten secret phrase agreed upon in person. AI algorithms cannot guess private offline memories.
                </p>

                <div className="p-3 bg-blue-950/60 rounded-xl border border-blue-800/40 text-xs text-blue-200">
                  Scenario: Your pre-agreed secret family safe word is <strong>"Blue Anchor 42"</strong>.
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-medium text-slate-300">
                    Ask the caller for the secret verification safe word:
                  </label>
                  <input
                    type="text"
                    value={familyPhraseInput}
                    onChange={(e) => {
                      setFamilyPhraseInput(e.target.value);
                      setPhraseChecked(false);
                    }}
                    placeholder='Type "Blue Anchor 42" or test an impostor reply...'
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  onClick={() => setPhraseChecked(true)}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Verify Caller Identity
                </button>

                {phraseChecked && (
                  <div
                    className={`p-4 rounded-xl border text-xs leading-relaxed ${
                      familyPhraseInput.trim().toLowerCase() === correctSecretPhrase.toLowerCase()
                        ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200'
                        : 'bg-red-950/80 border-red-500 text-red-200'
                    }`}
                  >
                    {familyPhraseInput.trim().toLowerCase() === correctSecretPhrase.toLowerCase() ? (
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 font-bold text-emerald-300">
                          <Check className="w-4 h-4" />
                          <span>Caller Verified! Genuine Family Emergency.</span>
                        </div>
                        <p>The caller knew the offline phrase. You can now coordinate legitimate legal assistance safely.</p>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 font-bold text-red-300">
                          <X className="w-4 h-4" />
                          <span>IMPOSTOR DETECTED! Hang Up Immediately.</span>
                        </div>
                        <p>The caller failed the secret phrase challenge! An AI voice clone cannot know private family memories. Block the number and call your relative directly.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 3. PHISHING SMS & FAKE APK INSPECTOR */}
        {activeShowcase === 'phishing' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
            <div className="lg:col-span-7 space-y-4">
              <div className="p-5 rounded-2xl bg-[#131F3B] border border-blue-500/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wide">
                  <FileWarning className="w-4 h-4" />
                  <span>Smishing & Sideloaded APK Breakdown</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Interactive SMS Threat Inspector
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Click on the highlighted red tags inside the simulated SMS message below to understand the exact anatomy of a mobile trojan attack.
                </p>

                {/* Simulated Interactive SMS Message */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-700 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                    <span className="text-red-400 font-bold">From: +1 (800) 912-4019</span>
                    <button
                      onClick={() => setSelectedHotspot('sender')}
                      className="text-[10px] bg-red-900/50 hover:bg-red-800 text-red-200 px-2 py-0.5 rounded border border-red-500/40 cursor-pointer"
                    >
                      [Inspect Sender ID]
                    </button>
                  </div>

                  <div className="space-y-3 text-slate-200 leading-relaxed">
                    <p>
                      USPS ALERT: Your parcel #9400-112 cannot be delivered.{' '}
                      <button
                        onClick={() => setSelectedHotspot('urgency')}
                        className="bg-amber-900/50 hover:bg-amber-800 text-amber-200 px-1.5 py-0.5 rounded border border-amber-500/40 cursor-pointer"
                      >
                        Action required within 12 hours or return to sender.
                      </button>
                    </p>

                    <p>
                      Confirm your street address by updating the official carrier utility at:{' '}
                      <button
                        onClick={() => setSelectedHotspot('url')}
                        className="text-blue-300 underline bg-blue-950/60 hover:bg-blue-900 px-1.5 py-0.5 rounded border border-blue-500/40 cursor-pointer"
                      >
                        http://usps-support-track.top/update.apk
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Inspection Inspector Output */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 min-h-[280px] flex flex-col justify-center">
                {!selectedHotspot && (
                  <div className="text-center space-y-2 p-4">
                    <HelpCircle className="w-8 h-8 text-slate-500 mx-auto" />
                    <p className="text-sm font-bold text-slate-300">
                      Tap any tag in the SMS to inspect the threat
                    </p>
                    <p className="text-xs text-slate-500">
                      Learn how hackers disguise dangerous software payloads in everyday delivery notices.
                    </p>
                  </div>
                )}

                {selectedHotspot === 'sender' && (
                  <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 space-y-2 text-left">
                    <span className="text-xs font-mono font-bold text-red-400 uppercase">
                      Analysis: Spoofed Sender Phone Number
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      Official postal services (USPS, FedEx, IndiaPost) utilize verified 5 or 6-digit corporate SMS shortcodes (e.g. 28777). They do not send official delivery tracking alerts from private 10-digit mobile numbers.
                    </p>
                  </div>
                )}

                {selectedHotspot === 'urgency' && (
                  <div className="p-4 rounded-xl bg-amber-950/60 border border-amber-500/40 space-y-2 text-left">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                      Analysis: Artificial Urgency Tactic
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      "12-hour return deadline" is psychological pressure designed to trigger fear of lost property, compelling you to tap without verifying the website domain or carrier policy.
                    </p>
                  </div>
                )}

                {selectedHotspot === 'url' && (
                  <div className="p-4 rounded-xl bg-red-950/80 border border-red-500/50 space-y-2 text-left">
                    <span className="text-xs font-mono font-bold text-red-400 uppercase">
                      Analysis: Malicious Sideloaded APK Payload
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      Notice two deadly red flags:
                    </p>
                    <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                      <li>The domain ends in <code>.top</code> instead of the official <code>usps.com</code>.</li>
                      <li>The link downloads an <code>.apk</code> file. Courier tracking only needs an address form, never an installed app on your smartphone!</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
