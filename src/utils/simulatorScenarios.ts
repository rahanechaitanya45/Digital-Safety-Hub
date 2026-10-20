export interface SimulatorScenario {
  id: string;
  category: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  threatType: string;
  senderName: string;
  senderHandleOrNumber: string;
  timestamp: string;
  channel: 'voice-call' | 'sms' | 'chat' | 'payment-qr' | 'email';
  messageBody: string;
  audioSimulatedText?: string;
  visualArtifact?: {
    type: 'qr-code' | 'payment-box' | 'sms-bubble' | 'voice-note' | 'apk-download' | 'chat';
    amount?: string;
    actionLabel?: string;
    url?: string;
  };
  isScam: boolean;
  clues: {
    id: string;
    text: string;
    explanation: string;
  }[];
  detailedAnalysis: {
    verdictTitle: string;
    explanation: string;
    goldenRule: string;
    realWorldImpact: string;
  };
}

export const SIMULATOR_SCENARIOS: SimulatorScenario[] = [
  {
    id: 'sim-ai-voice',
    category: 'AI & Deepfakes',
    title: 'Emergency Voice Call from "Family Member"',
    difficulty: 'Intermediate',
    threatType: 'AI Voice Cloning & Extortion',
    senderName: 'Supposed Grandson (Alex)',
    senderHandleOrNumber: '+1 (800) 555-0199 (Spoofed)',
    timestamp: 'Today, 2:15 PM',
    channel: 'voice-call',
    messageBody: 'Grandma! Please don\'t tell Mom! I was in a terrible car accident in upstate New York. The officer says I will be detained in holding unless I post a $950 emergency bail deposit within 45 minutes! I\'m handing the phone to the bail clerk right now—please wire the money to his account!',
    audioSimulatedText: 'Voice sounds exactly like Alex, but with unnatural breathing pauses and constant chaotic siren noise in the background.',
    visualArtifact: {
      type: 'voice-note',
      actionLabel: 'Listen to Voice Clip (Simulated AI Speech)',
    },
    isScam: true,
    clues: [
      {
        id: 'clue-urgency',
        text: 'Severe emotional panic & 45-minute deadline',
        explanation: 'Scammers deliberately trigger panic to disable your critical thinking and prevent you from consulting others.'
      },
      {
        id: 'clue-secrecy',
        text: 'Demands secrecy ("Please don\'t tell Mom")',
        explanation: 'Extortionists isolate victims so they cannot call the parents to verify where the person actually is.'
      },
      {
        id: 'clue-payment',
        text: 'Demands rapid peer-to-peer wire transfer for "bail"',
        explanation: 'Courts and police precincts do not accept wire transfers or gift cards over personal phone calls.'
      }
    ],
    detailedAnalysis: {
      verdictTitle: 'Dangerous AI Voice Cloning Scam',
      explanation: 'Criminals need only 3-5 seconds of clear voice audio scraped from social media or voicemails to train modern voice cloning models. The pitch and dialect sound authentic, but the urgent circumstance is fabricated.',
      goldenRule: 'Always hang up and call the family member back on their trusted, pre-saved phone number. Have a secret family safe-word ready.',
      realWorldImpact: 'Victims frequently lose thousands of dollars within minutes, only to find their loved one was safely sitting in class or at work.'
    }
  },
  {
    id: 'sim-upi-qr',
    category: 'Payment Scams',
    title: 'Marketplace "Buyer" Wants to Pay via QR Code',
    difficulty: 'Beginner',
    threatType: 'UPI Collect & QR Code Reversal',
    senderName: 'Bicycle Buyer (Rajesh Kumar)',
    senderHandleOrNumber: 'WhatsApp: +91 98201 44102',
    timestamp: 'Yesterday, 6:30 PM',
    channel: 'payment-qr',
    messageBody: 'I am buying your used study table for Rs. 3,500. My company pays through a corporate merchant account. I have generated a special QR code for you. Simply open Google Pay or PhonePe, scan this QR code, and enter your 6-digit UPI PIN to receive the Rs. 3,500 deposit into your bank account immediately.',
    visualArtifact: {
      type: 'payment-box',
      amount: 'Rs. 3,500',
      actionLabel: 'Pay / Authorize Debit (Collect Request)',
    },
    isScam: true,
    clues: [
      {
        id: 'clue-pin-to-receive',
        text: 'Entering UPI PIN to "receive" funds',
        explanation: 'The UPI architecture only requires a PIN when sending money from your account. You NEVER enter a PIN to receive payments.'
      },
      {
        id: 'clue-qr-to-receive',
        text: 'Scanning a QR code to credit your account',
        explanation: 'Scanning a merchant QR code always initiates an OUTBOUND payment from your bank account.'
      },
      {
        id: 'clue-corporate-story',
        text: 'Complex "corporate account" excuse',
        explanation: 'Scammers invent technical-sounding corporate rules to confuse everyday sellers into trusting irregular steps.'
      }
    ],
    detailedAnalysis: {
      verdictTitle: 'Classic QR Code & Collect Request Trap',
      explanation: 'Thousands of marketplace sellers are deceived every single day by this exact trick. The moment you enter your UPI PIN, Rs. 3,500 is immediately debited from YOUR account, not credited.',
      goldenRule: 'PIN is for PAYING. You NEVER need to scan a QR code or enter your secret PIN to receive money from anyone.',
      realWorldImpact: 'Once approved, UPI debits are instantaneous and nearly impossible to reverse through standard consumer banking channels.'
    }
  },
  {
    id: 'sim-bank-legit',
    category: 'Legitimate vs Phishing',
    title: 'Monthly Banking E-Statement Notification',
    difficulty: 'Advanced',
    threatType: 'Legitimate Financial Communication',
    senderName: 'State National Bank',
    senderHandleOrNumber: 'SMS Shortcode: AD-NATBNK (Official Sender ID)',
    timestamp: 'Today, 10:00 AM',
    channel: 'sms',
    messageBody: 'Dear Customer, your consolidated monthly e-statement for account ending in XX4019 for the period ending Sep 30 is now available. Log in securely to your NetBanking portal at https://www.nationalbank.com or via our official mobile app to review your statement. Bank never asks for your OTP or password.',
    visualArtifact: {
      type: 'sms-bubble',
      url: 'https://www.nationalbank.com',
      actionLabel: 'Review via Official Portal'
    },
    isScam: false,
    clues: [
      {
        id: 'clue-official-sender',
        text: 'Sent from registered banking shortcode (AD-NATBNK)',
        explanation: 'Legitimate commercial banks use regulated alpha-numeric telecom headers, not private 10-digit mobile numbers.'
      },
      {
        id: 'clue-no-threat',
        text: 'No panic, urgency, or account freeze threats',
        explanation: 'Phishing creates false emergencies; routine banking notices provide calm factual information.'
      },
      {
        id: 'clue-official-domain',
        text: 'Directs user to standard top-level bank website or app',
        explanation: 'The link matches the official domain with valid SSL and explicitly warns never to share OTPs.'
      }
    ],
    detailedAnalysis: {
      verdictTitle: 'Legitimate Bank Communication',
      explanation: 'This message displays all hallmarks of verified banking correspondence: no immediate demand for sensitive credentials, no clickable .apk download, official registered SMS sender ID, and a clear safety reminder.',
      goldenRule: 'Legitimate communications do not threaten immediate account suspension to force hasty clicks. When in doubt, navigate to the bank\'s website manually.',
      realWorldImpact: 'Recognizing legitimate notices prevents users from ignoring real security warnings or becoming unnecessarily fearful of genuine services.'
    }
  },
  {
    id: 'sim-apk-parcel',
    category: 'Malware & Links',
    title: 'Courier Address Correction with APK File',
    difficulty: 'Intermediate',
    threatType: 'Android Trojan (Smishing / APK Sideload)',
    senderName: 'Express Courier Logistics',
    senderHandleOrNumber: '+1 (415) 882-9011',
    timestamp: 'Today, 11:42 AM',
    channel: 'sms',
    messageBody: 'ALERT: Your package #US-77821 cannot be dispatched because your apartment number is missing from shipping documents. Download the carrier verification tool: http://express-tracking-portal.icu/ExpressDelivery_v2.apk to confirm your address and reschedule delivery for tomorrow.',
    visualArtifact: {
      type: 'apk-download',
      url: 'http://express-tracking-portal.icu/ExpressDelivery_v2.apk',
      actionLabel: 'Download & Install ExpressDelivery_v2.apk'
    },
    isScam: true,
    clues: [
      {
        id: 'clue-apk-extension',
        text: 'Direct `.apk` file download link in an SMS',
        explanation: 'Reputable shipping companies never distribute raw `.apk` installer packages over text messages.'
      },
      {
        id: 'clue-shady-domain',
        text: 'Suspicious domain name extension (`.icu`)',
        explanation: 'High-risk top level domains (`.icu`, `.top`, `.xyz`) are commonly used by criminal syndicates for throwaway phishing portals.'
      },
      {
        id: 'clue-generic-phone',
        text: 'Sent from standard unverified mobile number',
        explanation: 'Major logistics firms (FedEx, UPS, DHL, IndiaPost) utilize official corporate SMS headers.'
      }
    ],
    detailedAnalysis: {
      verdictTitle: 'Dangerous Banking Trojan Sideloading Attack',
      explanation: 'Installing this APK grants attackers Accessibility permissions. The malware runs silently in the background, reading incoming 2FA SMS codes, logging banking credentials, and locking your device with ransomware.',
      goldenRule: 'Never download or install `.apk` files from text messages, emails, or websites outside of Google Play or the Apple App Store.',
      realWorldImpact: 'Once granted accessibility permissions, modern mobile malware can drain accounts without displaying any alert on your phone screen.'
    }
  },
  {
    id: 'sim-screen-share',
    category: 'Remote Access Scams',
    title: '"Customer Support" Requesting Screen Sharing App',
    difficulty: 'Intermediate',
    threatType: 'Remote Access Trojan (AnyDesk / TeamViewer abuse)',
    senderName: 'Telecom "Senior Support Engineer"',
    senderHandleOrNumber: '+91 88401 22910',
    timestamp: '2 hours ago',
    channel: 'voice-call',
    messageBody: 'Hello sir, we detected a severe configuration glitch with your 5G SIM card that will terminate all incoming calls tonight. To assist you with remote server calibration, please go to the Play Store, install "QuickSupport" or "AnyDesk", and read me the 9-digit session code shown on your screen.',
    visualArtifact: {
      type: 'chat',
      actionLabel: 'Share 9-Digit Remote Session Code'
    },
    isScam: true,
    clues: [
      {
        id: 'clue-remote-access',
        text: 'Asking you to install remote desktop software (AnyDesk/QuickSupport)',
        explanation: 'Legitimate telecom and banking support teams will NEVER ask you to install remote desktop or screen-mirroring apps.'
      },
      {
        id: 'clue-session-code',
        text: 'Demanding the 9-digit session authorization code',
        explanation: 'Providing this code grants complete visual and touch control over your smartphone screen to an anonymous stranger.'
      },
      {
        id: 'clue-unsolicited-call',
        text: 'Unsolicited incoming technical support call',
        explanation: 'Telecom carriers do not call individual customers out of the blue to run remote smartphone calibrations.'
      }
    ],
    detailedAnalysis: {
      verdictTitle: 'Screen-Sharing Financial Theft Scheme',
      explanation: 'Once the remote session starts, the criminal asks you to open your banking or UPI app to "verify 5G sync". Because they can see your screen in real time, they watch you type your password, see your OTPs arrive, and seize full control.',
      goldenRule: 'Never install remote-access apps (AnyDesk, TeamViewer, RustDesk) at the request of an incoming caller, no matter what company they claim to represent.',
      realWorldImpact: 'Victims watch helplessly as their phone screen navigates automatically, sending funds to mule accounts in seconds.'
    }
  },
  {
    id: 'sim-telegram-job',
    category: 'Work From Home Scams',
    title: '"Like YouTube Videos and Earn $150/Day"',
    difficulty: 'Beginner',
    threatType: 'Prepaid Task / Advance Fee Scam',
    senderName: 'Global Media Recruitment',
    senderHandleOrNumber: 'WhatsApp / Telegram: @hr_recruit_global',
    timestamp: 'Yesterday, 4:15 PM',
    channel: 'chat',
    messageBody: 'Congratulations! Your profile has been selected for a part-time remote media analyst position. Earn $50 to $200 per day simply by liking 3 YouTube videos and writing 5-star Google Map reviews. To activate your merchant payment dashboard, complete the registration task by depositing a refundable security fee of $30 via crypto/UPI.',
    visualArtifact: {
      type: 'chat',
      actionLabel: 'Deposit $30 Refundable Security Fee'
    },
    isScam: true,
    clues: [
      {
        id: 'clue-pay-to-work',
        text: 'Requiring an upfront "refundable security deposit"',
        explanation: 'Legitimate employment pays YOU; a real employer will never ask an applicant to deposit money to unlock tasks.'
      },
      {
        id: 'clue-unrealistic-pay',
        text: 'Absurdly high pay ($150/day) for trivial work (liking videos)',
        explanation: 'Astronomical compensation for basic clicks is a classic trap to trigger greed and bypass common sense.'
      },
      {
        id: 'clue-telegram-hiring',
        text: 'Hiring conducted via Telegram or WhatsApp with no interview',
        explanation: 'Real corporations have structured hiring processes, contracts, and verified company email addresses.'
      }
    ],
    detailedAnalysis: {
      verdictTitle: 'Prepaid Task Investment Scam',
      explanation: 'The scammers may give you a tiny initial payout ($5) to gain your trust. Then they demand $200, $500, or $2,000 for "VIP Tier tasks", and lock your funds permanently behind fabricated "tax" demands.',
      goldenRule: 'If you have to pay money to get a job, it is not a job—it is a scam.',
      realWorldImpact: 'Students and jobseekers frequently lose their entire savings chasing promised commission withdrawals that never materialize.'
    }
  }
];

export function calculateSimulatorScore(userAnswers: Record<string, { verdict: boolean; selectedClues: string[] }>): {
  totalScenarios: number;
  correctVerdicts: number;
  cluesIdentified: number;
  totalPossibleClues: number;
  scorePercentage: number;
  rankTitle: string;
} {
  const totalScenarios = SIMULATOR_SCENARIOS.length;
  let correctVerdicts = 0;
  let cluesIdentified = 0;
  let totalPossibleClues = 0;

  SIMULATOR_SCENARIOS.forEach((scenario) => {
    totalPossibleClues += scenario.clues.length;
    const answer = userAnswers[scenario.id];
    if (answer) {
      if (answer.verdict === scenario.isScam) {
        correctVerdicts += 1;
      }
      cluesIdentified += answer.selectedClues.length;
    }
  });

  // 70% weight on verdict, 30% weight on clue identification
  const verdictScore = (correctVerdicts / totalScenarios) * 70;
  const clueScore = totalPossibleClues > 0 ? (cluesIdentified / totalPossibleClues) * 30 : 0;
  const scorePercentage = Math.round(verdictScore + clueScore);

  let rankTitle = 'Digital Novice';
  if (scorePercentage >= 90) rankTitle = 'Cyber Guardian Elite';
  else if (scorePercentage >= 75) rankTitle = 'Vigilant Digital Defender';
  else if (scorePercentage >= 50) rankTitle = 'Aware Smartphone User';
  else rankTitle = 'High-Risk Explorer';

  return {
    totalScenarios,
    correctVerdicts,
    cluesIdentified,
    totalPossibleClues,
    scorePercentage,
    rankTitle,
  };
}
