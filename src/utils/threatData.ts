export interface ThreatDetail {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: 'financial' | 'ai-cyber' | 'social-psych' | 'privacy' | 'device-security';
  riskLevel: 'Critical' | 'High' | 'Moderate';
  riskColor: string;
  iconName: string;
  targetAudience: string;
  whatIsIt: string;
  howItHappens: string;
  whyPeopleFallVictim: string;
  whoIsTargeted: string;
  warningSigns: string[];
  consequences: string[];
  howToPrevent: string[];
  whatToDoIfTargeted: string[];
  educationalScenario: {
    title: string;
    description: string;
    mockType: 'chat' | 'sms' | 'call' | 'payment';
    sender: string;
    content: string;
    warningFlags: string[];
    safeAction: string;
  };
}

export const THREATS: ThreatDetail[] = [
  {
    id: 'ai-deepfakes',
    number: '01',
    title: 'AI Scams and Deepfake Fraud',
    tagline: 'Synthetic voice cloning and fabricated video emergencies',
    category: 'ai-cyber',
    riskLevel: 'Critical',
    riskColor: 'text-red-600 bg-red-50 border-red-200',
    iconName: 'Bot',
    targetAudience: 'Parents, Grandparents, Business Executives, General Public',
    whatIsIt: 'AI scams and deepfake fraud involve criminals using generative artificial intelligence to synthesize a person\'s voice, facial features, or likeness from short public video or audio clips (often harvested from social media or voicemails). They weaponize this synthetic media to impersonate loved ones, coworkers, or public figures in fraudulent distress scenarios.',
    howItHappens: 'Criminals extract 3 to 10 seconds of a target\'s clear voice from Instagram, YouTube, or voicemail greetings. Generative voice AI software clones the tone, pitch, cadence, and speech idiosyncrasies. The scammer then calls family members with a spoofed Caller ID, crying or claiming an emergency (car accident, arrest, kidnapping, or stranded traveler) and begging for immediate cash via crypto, wire transfer, or gift cards.',
    whyPeopleFallVictim: 'The attack leverages extreme emotional terror and cognitive overload. Hearing what sounds unmistakably like a child or grandchild in terror overrides critical thinking, causing victims to bypass their standard verification instincts.',
    whoIsTargeted: 'Elderly grandparents, working parents with college-age children, small business accountants, and individuals who share public video/audio content on social platforms.',
    warningSigns: [
      'Call comes from an unknown number or spoofed caller ID claiming to be a family member or attorney.',
      'Caller creates severe time pressure ("Send money now or I will be locked in jail").',
      'The speaker sounds emotional, background noise is chaotic, or they refuse to answer personal questions.',
      'Requests payment via non-reversible methods: cryptocurrency, wire transfer, UPI collect requests, or retail gift cards.',
      'The caller insists: "Do not call Mom or Dad, they cannot know!"'
    ],
    consequences: [
      'Catastrophic financial loss with near-zero recovery rate.',
      'Severe psychological trauma, guilt, and lingering paranoia.',
      'Secondary scams where perpetrators re-target the victim pretending to be recovery agents.'
    ],
    howToPrevent: [
      'Establish a confidential "Family Safe Word" or phrase known only to close relatives, to be asked whenever money or urgent help is requested.',
      'Never send funds based on a voice or video call alone; immediately hang up and call the loved one back on their known, pre-saved phone number.',
      'Set social media accounts to private and avoid posting unlisted voice notes or video clips with isolated, crystal-clear speech.',
      'Ask unexpected questions that only the real person could know: "What is the name of our childhood neighbor\'s pet?"'
    ],
    whatToDoIfTargeted: [
      'Hang up immediately. Do not engage or panic.',
      'Call the family member directly on their trusted regular number, or contact someone physically with them.',
      'If money was transferred, immediately notify your bank/payment provider to halt or recall the wire.',
      'File an official report with your national cybercrime portal (e.g. 1930 / cybercrime.gov.in in India, IC3 in the US).'
    ],
    educationalScenario: {
      title: 'Simulated AI Voice Emergency Call',
      description: 'Educational simulation of a voice clone extortion attempt targeting a parent.',
      mockType: 'call',
      sender: 'Unknown Number (Spoofed as "Local Police Precinct")',
      content: '"Mom! I crashed the car and the officer says my license will be canceled unless I pay $850 bail bond right now! He is giving you his UPI/wire details—please hurry, my phone battery is at 1%!"',
      warningFlags: [
        'Artificial voice cadence despite realistic pitch',
        'Artificial urgency preventing phone verification',
        'Requesting immediate digital payment instead of official courthouse paperwork'
      ],
      safeAction: 'Hang up immediately. Dial your child directly on their standard phone number. Verify via the family safe phrase.'
    }
  },
  {
    id: 'upi-payment-scams',
    number: '02',
    title: 'Online Payment and UPI Scams',
    tagline: 'Fake payment screenshots, QR code traps, and collect requests',
    category: 'financial',
    riskLevel: 'Critical',
    riskColor: 'text-red-600 bg-red-50 border-red-200',
    iconName: 'CreditCard',
    targetAudience: 'Online Sellers, Freelancers, Small Business Owners, Shoppers',
    whatIsIt: 'Payment scams trick users into approving outbound money transfers or scanning QR codes under the fraudulent pretext that they are "receiving" a payment, prize, refund, or marketplace deposit.',
    howItHappens: 'Perpetrators contact sellers on marketplace platforms (OLX, Facebook Marketplace, Quikr). They agree immediately to the listed price without bargaining. They send a generated fake payment screenshot showing a successful transfer or send a QR code/collect request claiming: "Scan this QR code and enter your UPI PIN to accept the advance payment."',
    whyPeopleFallVictim: 'Confusion regarding how payment systems work. Many users mistakenly believe that entering a PIN or scanning a QR code is required to receive incoming money into their bank account.',
    whoIsTargeted: 'Second-hand marketplace sellers, home-service providers, elderly banking customers, and college students selling textbooks or gadgets.',
    warningSigns: [
      'Anyone asking you to scan a QR code or enter your UPI PIN to "receive" money.',
      'A buyer who sends a screenshot showing "Payment Successful" before money reflects in your banking passbook.',
      'A "Collect Request" notification pop-up stating "Pay Rs. X" when you expected to be credited.',
      'Buyers claiming to be military personnel or government officials to build artificial trust.',
      'Overpayment claims ("I accidentally sent Rs. 5,000 instead of Rs. 500, please refund the difference").'
    ],
    consequences: [
      'Immediate debit from linked bank accounts.',
      'Repeated unauthorized debit requests if users panic and re-enter PINs.',
      'Loss of goods handed over to fake delivery agents based on counterfeit payment slips.'
    ],
    howToPrevent: [
      'Golden Rule: Receiving money NEVER requires entering your UPI PIN, password, or approving a payment notification.',
      'Never trust payment screenshots, SMS notifications from private phone numbers, or buyer receipts. Always open your official banking app and check your bank statement balance directly.',
      'Never scan any QR code sent via WhatsApp, chat apps, or email to receive funds.',
      'Decline any transaction where the buyer rushes you or refuses standard banking confirmation.'
    ],
    whatToDoIfTargeted: [
      'Immediately open your banking app and block/freeze your UPI handle or card.',
      'Call your bank\'s fraud dispute helpline immediately (golden hour response).',
      'Report the transaction ID and sender details to the national cybercrime portal.',
      'Take screenshots of the chat, phone number, and fake payment slip for legal evidence.'
    ],
    educationalScenario: {
      title: 'Marketplace QR Code Deception',
      description: 'Educational simulation of a fraudulent collect request masked as an advance deposit.',
      mockType: 'payment',
      sender: 'Purported Buyer (OLX / Marketplace)',
      content: '"Hi, I have sent Rs. 4,500 advance for your bicycle via UPI. Scan this QR code and input your UPI PIN to claim and credit it to your bank account immediately."',
      warningFlags: [
        'QR codes are only for paying money, never for receiving funds',
        'Entering a UPI PIN will debit your account, not credit it',
        'The app screen will clearly say "DEBIT" or "PAY", not "RECEIVE"'
      ],
      safeAction: 'Decline the request. Block the buyer. Check bank balance exclusively in your official banking application.'
    }
  },
  {
    id: 'social-media-cyberbullying',
    number: '03',
    title: 'Social Media Misuse and Cyberbullying',
    tagline: 'Impersonation profiles, harassment, oversharing, and online grooming',
    category: 'social-psych',
    riskLevel: 'High',
    riskColor: 'text-amber-600 bg-amber-50 border-amber-200',
    iconName: 'Users',
    targetAudience: 'School Students, Teenagers, Young Adults, Creators',
    whatIsIt: 'The deliberate misuse of social media platforms to demean, harass, manipulate, stalk, or impersonate individuals. It encompasses public trolling, creating fake profiles using a victim\'s private photos, non-consensual image distribution, and deceptive grooming.',
    howItHappens: 'Harassers harvest photos, locations, and personal routine updates from public profiles. They may create fake clone accounts to send derogatory messages to mutual friends, coordinate hateful comment brigading, or lure victims into sending private photos through romance baiting.',
    whyPeopleFallVictim: 'Social media environments incentivize oversharing for social validation. Young users frequently underestimate how easily private details can be weaponized against them.',
    whoIsTargeted: 'High school and university students, teenage girls, outspoken public commentators, and children using unmonitored devices.',
    warningSigns: [
      'Sudden surge of hateful, anonymous messages, comments, or direct messages.',
      'New profile created using your exact photos, name, and bio, requesting your followers.',
      'Online acquaintances rapidly demanding private photos, intimate secrets, or isolation from friends.',
      'Unsolicited group invites where members mock or post defamatory claims about someone.'
    ],
    consequences: [
      'Depression, chronic anxiety, insomnia, and academic decline.',
      'Severe damage to personal, academic, or professional reputation.',
      'In extreme cases, self-harm or social withdrawal.'
    ],
    howToPrevent: [
      'Keep social media profiles private; only accept follow requests from people you have verified in real life.',
      'Disable location tagging on posts and never upload photos showing house numbers, school uniforms, or travel itineraries in real-time.',
      'Use platform privacy tools to restrict direct messages, hide friend lists, and enable comment keyword filters.',
      'Never share intimate or sensitive photographs digitally, even with close romantic partners.'
    ],
    whatToDoIfTargeted: [
      'Preserve evidence immediately: Take full-screen screenshots showing handles, timestamps, and specific URLs before content is deleted.',
      'Do not engage, argue, or retaliate publicly; this fuels the harasser\'s behavior.',
      'Block the perpetrators and submit abuse reports through the platform\'s safety reporting center.',
      'Confide in a trusted adult, school counselor, or cyber cell legal helpline.'
    ],
    educationalScenario: {
      title: 'Clone Account and Defamation Attack',
      description: 'Educational simulation of an impersonation profile created to harass a student.',
      mockType: 'chat',
      sender: '@alex_student_official (Clone Account)',
      content: '"Hey! Follow my new private backup account! Check out what I just posted about the class exam results on my story!"',
      warningFlags: [
        'Created just hours ago with 3 followers',
        'Using stolen profile picture from the victim\'s primary account',
        'Directing followers to malicious links in bio'
      ],
      safeAction: 'Report the profile directly to Instagram/platform for impersonation. Alert mutual friends not to interact with it.'
    }
  },
  {
    id: 'smartphone-addiction',
    number: '04',
    title: 'Smartphone Addiction and Excessive Screen Time',
    tagline: 'Doomscrolling, sleep disruption, reduced attention span, and comparison fatigue',
    category: 'social-psych',
    riskLevel: 'Moderate',
    riskColor: 'text-blue-600 bg-blue-50 border-blue-200',
    iconName: 'Smartphone',
    targetAudience: 'Teenagers, Working Professionals, Remote Workers, Students',
    whatIsIt: 'A compulsive, habit-forming behavioral pattern where individuals spend excessive, uncontrolled hours on smartphones, prioritizing endless short-form video feeds and notifications over rest, relationships, learning, and physical health.',
    howItHappens: 'Social media algorithms employ variable-ratio reinforcement schedules (the same behavioral psychology behind slot machines). Infinite scrolling, autoplay videos, push notification alerts, and streak metrics keep the brain\'s dopamine loops continuously activated.',
    whyPeopleFallVictim: 'Smartphones are engineered to be hyper-stimulating. When people experience stress, boredom, or loneliness, the phone provides an effortless, frictionless distraction.',
    whoIsTargeted: 'Individuals experiencing high stress, students studying online, adolescents with unmonitored devices, and late-night workers.',
    warningSigns: [
      'Reaching for the phone immediately upon waking and keeping it in bed late at night.',
      'Feeling restless, irritable, or anxious when away from the smartphone.',
      'Loss of track of time: intending to check one message and spending 2 hours scrolling reels.',
      'Declining academic grades, eye strain, neck pain ("text neck"), and chronic sleep deprivation.'
    ],
    consequences: [
      'Suppression of melatonin due to evening blue-light exposure, leading to chronic insomnia.',
      'Fragmented attention span and reduced deep-work cognitive capability.',
      'Sedentary lifestyle contributing to metabolic and posture issues.',
      'Heightened feelings of inadequacy and envy from algorithmic life comparisons.'
    ],
    howToPrevent: [
      'Create physical boundaries: Keep chargers outside the bedroom and establish a 60-minute screen-free buffer before sleep.',
      'Turn on grayscale (monochrome) display mode in accessibility settings; stripping vibrant colors dramatically reduces dopamine urges.',
      'Audit notifications: Silence all non-human notifications (turn off shopping, gaming, and app recommendation alerts).',
      'Apply the 20-20-20 rule for eye health: Every 20 minutes, look at an object 20 feet away for 20 seconds.'
    ],
    whatToDoIfTargeted: [
      'Track honest baseline usage using built-in Digital Wellbeing / Screen Time statistics.',
      'Set app limiters with password protection managed by a supportive partner or parent.',
      'Replace idle scrolling with tangible tactile habits (reading physical books, walking, drawing).',
      'Seek counseling or behavioral coaching if compulsive usage impairs daily functioning.'
    ],
    educationalScenario: {
      title: 'Midnight Dopamine Loop',
      description: 'Educational scenario tracking nighttime compulsive short-video consumption.',
      mockType: 'chat',
      sender: 'App Notification System',
      content: '"🔥 Your friend posted a new video! You are on a 42-day streak! Don\'t lose it now—tap to view!" (Received at 1:45 AM)',
      warningFlags: [
        'Algorithmic notifications scheduled during circadian rest hours',
        'Gamification triggers (streaks) designed to trigger fear of missing out',
        'Infinite scroll feeds with no natural stopping cues'
      ],
      safeAction: 'Turn on Scheduled Do Not Disturb / Sleep Mode from 10:00 PM to 7:00 AM. Charge phone away from the bedside.'
    }
  },
  {
    id: 'privacy-data-theft',
    number: '05',
    title: 'Privacy Violations and Personal Data Theft',
    tagline: 'Invasive app permissions, public Wi-Fi eavesdropping, and OTP leakage',
    category: 'privacy',
    riskLevel: 'Critical',
    riskColor: 'text-red-600 bg-red-50 border-red-200',
    iconName: 'ShieldAlert',
    targetAudience: 'Every Smartphone User, Remote Workers, Online Banking Users',
    whatIsIt: 'The unauthorized extraction, harvesting, and exploitation of private data from a smartphone—including location coordinates, contacts, camera/microphone streams, text messages, and one-time passwords (OTPs).',
    howItHappens: 'Common vectors include flashlight or simple calculator apps demanding access to your full contact list and background location; connecting to unencrypted airport/cafe public Wi-Fi where malicious actors run packet sniffing tools; or social engineering calls tricking victims into reading SMS verification codes.',
    whyPeopleFallVictim: 'EULA fatigue (agreeing to permissions without reading) and trusting convenient free apps without realizing that user data is the product being monetized or stolen.',
    whoIsTargeted: 'Users downloading obscure utility apps, frequent travelers using public Wi-Fi, and consumers without multi-factor security.',
    warningSigns: [
      'A simple utility app (e.g. wallpaper or torch app) asking for Contact, SMS, Camera, or Microphone permissions.',
      'Battery draining unusually quickly or phone feeling warm while in standby mode.',
      'Spike in background cellular data consumption.',
      'Receiving unexpected SMS OTP verification codes when you are not trying to log into any service.'
    ],
    consequences: [
      'Account takeover across email, social media, and banking services.',
      'Personal identity theft and fraudulent loans taken in your name.',
      'Doxxing and extortion using private photos or location patterns.'
    ],
    howToPrevent: [
      'Audit App Permissions regularly: Revoke location, microphone, and contacts from apps that do not genuinely require them.',
      'Never read, forward, or enter an OTP requested over a voice call or message. Real bank officials will NEVER ask for your OTP.',
      'Use a trusted VPN or cellular data instead of public, password-free open Wi-Fi networks.',
      'Switch to hardware security keys or authenticator apps (Google Authenticator, Aegis) instead of plain SMS for 2FA.'
    ],
    whatToDoIfTargeted: [
      'Immediately change primary passwords for Google/Apple accounts, email, and banking.',
      'Revoke all active sessions via account security settings ("Sign out of all devices").',
      'Uninstall suspicious applications immediately and run a scan with a reputable mobile antivirus.',
      'Contact your mobile carrier to place a SIM-swap protection lock on your number.'
    ],
    educationalScenario: {
      title: 'Fake Utility App Permission Trap',
      description: 'Educational simulation of a harmless-looking flashlight app requesting invasive privileges.',
      mockType: 'chat',
      sender: 'System Permission Dialog',
      content: '"BrightTorch Pro requires the following permissions to function: [Read All Contacts], [Read and Send SMS Messages], [Continuous Background Location], [Access Microphone]"',
      warningFlags: [
        'A flashlight app needs only camera flash hardware permission',
        'Reading SMS enables interception of banking OTPs and password resets',
        'Accessing contacts facilitates extortion and spam network expansion'
      ],
      safeAction: 'Deny all permissions immediately and uninstall the application. Download utilities only from verified publishers.'
    }
  },
  {
    id: 'fake-apps-malware',
    number: '06',
    title: 'Fake Apps, Malicious Links, and Malware',
    tagline: 'Sideloaded APK Trojans, malicious delivery alerts, and phishing traps',
    category: 'device-security',
    riskLevel: 'Critical',
    riskColor: 'text-red-600 bg-red-50 border-red-200',
    iconName: 'FileWarning',
    targetAudience: 'Android Users, Online Shoppers, Banking Customers',
    whatIsIt: 'Malicious applications (trojans, spyware, keyloggers) and phishing links designed to infiltrate mobile operating systems, log keystrokes, steal credentials, and seize remote device control.',
    howItHappens: 'Attackers distribute malicious Android package files (.APK) via SMS or WhatsApp pretending to be courier tracking updates (e.g., "IndiaPost_Delivery.apk"), government subsidy portals, or cracked premium streaming apps. Once sideloaded, the app requests "Accessibility Services" permission to intercept keystrokes and bypass security controls.',
    whyPeopleFallVictim: 'Fear of missing an urgent parcel or desire for free software, coupled with messages that disguise APK files as innocent documents or updates.',
    whoIsTargeted: 'Android smartphone owners who enable "Install from Unknown Sources", online delivery customers, and users seeking pirated apps.',
    warningSigns: [
      'Messages prompting you to download a file ending in `.apk` from a link instead of the official Google Play Store or Apple App Store.',
      'Links with misspelled domain names (e.g., `fedx-tracking-portal.top` instead of `fedex.com`).',
      'An app demanding "Accessibility Service" or "Device Administrator" permissions upon first launch.',
      'Sudden pop-ups claiming "Your phone has 17 viruses! Click here to clean it immediately!"'
    ],
    consequences: [
      'Total remote control of the phone by cybercriminals.',
      'Quiet interception and forwarding of banking OTPs without showing notifications.',
      'Device locked by ransomware demanding extortion money.'
    ],
    howToPrevent: [
      'Never enable "Install from Unknown Sources" or sideload `.apk` files received via SMS, WhatsApp, or Telegram.',
      'Only download software from the official Google Play Store or Apple App Store; verify developer name and review count.',
      'Inspect URLs carefully before clicking: verify the true domain name and look for official SSL encryption.',
      'Keep your smartphone operating system and security patches up to date.'
    ],
    whatToDoIfTargeted: [
      'Turn on Airplane mode or power off the device immediately to halt data transmission.',
      'Boot the phone into "Safe Mode" to disable third-party background malware and uninstall the malicious application.',
      'Perform a full factory reset if the malware requested Device Administrator or Accessibility privileges.',
      'Change all account passwords from a separate, clean computer or device.'
    ],
    educationalScenario: {
      title: 'Courier Address Update Smishing Trap',
      description: 'Educational simulation of a fake parcel notification leading to a banking trojan APK.',
      mockType: 'sms',
      sender: '+1-800-PARCEL-ALERT (Spoofed)',
      content: '"URGENT: Your parcel #US-88219 could not be delivered due to an incorrect street number. Download our official carrier update app at http://speedy-parcel-help.xyz/courier.apk to confirm your address within 24 hours."',
      warningFlags: [
        'Legitimate couriers never send raw `.apk` download links via SMS',
        'Suspicious, unregistered domain name (`speedy-parcel-help.xyz`)',
        'High urgency deadline designed to prevent rational fact-checking'
      ],
      safeAction: 'Do not click the link. Visit the official courier website directly and enter the tracking number into their official search bar.'
    }
  },
  {
    id: 'sextortion-blackmail',
    number: '07',
    title: 'Sextortion, Online Harassment, and Blackmail',
    tagline: 'Deceptive video calls, webcam traps, intimacy baiting, and financial extortion',
    category: 'ai-cyber',
    riskLevel: 'Critical',
    riskColor: 'text-red-600 bg-red-50 border-red-200',
    iconName: 'AlertTriangle',
    targetAudience: 'Teenage Boys, Young Men, Working Professionals, Vulnerable Adults',
    whatIsIt: 'A severe criminal extortion scheme where victims are coerced, lured, or tricked into compromising situations on video calls or direct messaging, after which criminals threaten to distribute recordings or deepfaked images to the victim\'s friends, family, and employers unless ransom is paid.',
    howItHappens: 'Perpetrators pose as attractive individuals on Instagram, Dating Apps, or Snapchat. They escalate conversation rapidly into video calls, where they display pre-recorded nude footage and encourage the victim to undress. Within seconds of the camera turning on, the call ends and the criminal sends a montage of the victim\'s face alongside a screenshot of their Instagram followers list, demanding immediate money.',
    whyPeopleFallVictim: 'Intense psychological shame, fear of social ruin, and rapid emotional escalation designed to prevent calm reflection.',
    whoIsTargeted: 'Adolescent boys, college students, and middle-aged professionals seeking companionship online.',
    warningSigns: [
      'A stranger on social media quickly moves conversation to a private video messaging app.',
      'The caller insists on turning on your camera while their own video appears slightly desynchronized or looped.',
      'Immediate blackmail demands with threats: "Pay Rs. 50,000 or this video will be sent to all 450 of your followers!"',
      'The blackmailer shows screenshots of your follower list to demonstrate leverage.'
    ],
    consequences: [
      'Devastating psychological trauma and suicidal ideation.',
      'Continuous extortion demands; paying never stops the blackmailer, it only invites demands for more money.',
      'Leakage of fabricated or genuine private media online.'
    ],
    howToPrevent: [
      'Golden Rule: NEVER pay blackmailers. Paying money confirms you are vulnerable and guarantees further demands.',
      'Never accept video calls from unknown contacts on WhatsApp, Instagram, or Telegram.',
      'Keep social media friend and follower lists private so criminals cannot scrape your personal contacts.',
      'Be skeptical of attractive strangers moving conversations into intimate territory unusually quickly.'
    ],
    whatToDoIfTargeted: [
      'Do NOT pay any money. Block the perpetrator immediately on all channels.',
      'Preserve screenshots of the extortion messages, usernames, and payment accounts for police records.',
      'Set all personal social media profiles to strict private or temporarily deactivate them.',
      'Contact specialized support services immediately (e.g., TakeItDown.ncmec.org to hash and block media, or local cyber police).'
    ],
    educationalScenario: {
      title: 'Video Call Extortion Trap',
      description: 'Educational simulation of a sudden video call trap followed by aggressive blackmail demands.',
      mockType: 'chat',
      sender: 'Extortionist (@stranger_direct)',
      content: '"I have recorded your face on the video call. Here is a screenshot of your family members on Facebook. Send $500 via crypto within 15 minutes or I will blast this video to everyone!"',
      warningFlags: [
        'Threats of immediate public exposure if money is not sent within minutes',
        'Criminal operates using throwaway accounts and digital currency',
        'Any money sent will result in a demand for twice the amount'
      ],
      safeAction: 'Do NOT pay. Take screenshots of the messages. Deactivate your social profile temporarily and file an emergency cybercrime report.'
    }
  },
  {
    id: 'misinformation-fake-news',
    number: '08',
    title: 'Misinformation and Fake News Propagation',
    tagline: 'Forwarded chain hoaxes, sensational rage bait, and synthetic political clips',
    category: 'social-psych',
    riskLevel: 'Moderate',
    riskColor: 'text-amber-600 bg-amber-50 border-amber-200',
    iconName: 'HelpCircle',
    targetAudience: 'Older Adults, Family Chat Group Members, Voters, Community Groups',
    whatIsIt: 'The rapid viral dissemination of false, unverified, or manipulated information, health hoaxes, fabricated government notices, and deceptive political propaganda across messaging apps and social feeds.',
    howItHappens: 'Disinformation mills create sensational clickbait articles or out-of-context video snippets designed to evoke strong anger, fear, or tribal loyalty. Users forward these messages through WhatsApp family groups, Telegram channels, and Facebook without verifying authenticity.',
    whyPeopleFallVictim: 'Confirmation bias (believing claims that support preexisting beliefs) and the emotional impulse to "warn" loved ones before checking credible sources.',
    whoIsTargeted: 'Senior citizens less familiar with digital editing techniques, political partisans, and local community message boards.',
    warningSigns: [
      'Messages flagged with "Forwarded many times" badges.',
      'Headlines written in ALL CAPS with excessive exclamation marks and words like "SHOCKING TRUTH" or "MEDIA IS HIDING THIS".',
      'No verifiable author, date, or link to a recognized, accredited scientific or journalistic outlet.',
      'Demands to "Forward to at least 10 groups immediately or face bad luck / government penalty".'
    ],
    consequences: [
      'Dangerous medical choices (e.g., false miracle cures or avoiding critical healthcare).',
      'Communal tension, ethnic violence, and mob panic.',
      'Erosion of public trust in science, democratic institutions, and community harmony.'
    ],
    howToPrevent: [
      'Apply the "Pause Before You Share" rule: Never forward any message that evokes sudden extreme anger or fear without checking.',
      'Check claim veracity using independent fact-checking organizations (e.g. Snopes, AltNews, FactCheck.org).',
      'Use reverse image search (Google Lens) to verify whether viral photos or videos are recycled from older, unrelated events.',
      'Look for the official press releases on verified government portals rather than relying on forwarded WhatsApp screenshots.'
    ],
    whatToDoIfTargeted: [
      'Gently inform the sender in private that the information has been proven false, sharing the link to a verified fact-check.',
      'Report viral fake news to platform administrators or fact-checking tip lines.',
      'Mute or leave groups that habitually distribute conspiracy theories and panic-inducing rumors.'
    ],
    educationalScenario: {
      title: 'Viral Health Hoax Forward',
      description: 'Educational simulation of a fabricated medical panic circulating in community groups.',
      mockType: 'chat',
      sender: 'Family Group Chat (Forwarded many times)',
      content: '"🚨 EMERGENCY NOTICE FROM WHO: Drinking boiled garlic water completely cures the new virus strain in 12 hours! Doctors are hiding this to sell costly medicines! Forward this to everyone you care about right now!"',
      warningFlags: [
        '"Forwarded many times" tag indicates an unverified chain letter',
        'Conspiracy framing ("Doctors are hiding this to profit")',
        'Absence of any official citation or link to reputable health authorities'
      ],
      safeAction: 'Do not forward the message. Search the claim on WHO/CDC official portals or Snopes. Politely reply with a fact-check link.'
    }
  },
  {
    id: 'identity-theft-hacking',
    number: '09',
    title: 'Identity Theft and Account Hacking',
    tagline: 'SIM swap exploits, credential stuffing, fake login portals, and session hijacking',
    category: 'privacy',
    riskLevel: 'Critical',
    riskColor: 'text-red-600 bg-red-50 border-red-200',
    iconName: 'KeyRound',
    targetAudience: 'Executives, Crypto Holders, High-Profile Creators, General Consumers',
    whatIsIt: 'Criminals acquiring an individual\'s personally identifiable information (Social Security / Aadhaar numbers, birth dates, phone numbers) to impersonate them, hijack their telecom number, drain bank accounts, or take over digital lives.',
    howItHappens: 'Attackers harvest passwords from historical corporate database breaches. If a user reuses passwords across services, hackers gain access via credential stuffing. In SIM-swap fraud, attackers impersonate the victim at a mobile carrier store using forged ID to issue a replacement SIM card, transferring all calls and SMS OTPs to the attacker\'s phone.',
    whyPeopleFallVictim: 'Password reuse across multiple websites and relying solely on SMS for two-factor authentication.',
    whoIsTargeted: 'High-net-worth individuals, cryptocurrency investors, social media influencers, and consumers using weak passwords.',
    warningSigns: [
      'Your mobile phone suddenly displays "No Service" or "Emergency Calls Only" in an area where you normally have strong signal.',
      'Receiving notification emails stating your password or recovery email was successfully changed from an unknown location.',
      'Calls from people asking why you messaged them asking for emergency loan money.',
      'Unauthorized debit alerts or credit score inquiries for loans you did not request.'
    ],
    consequences: [
      'Depletion of life savings and investment portfolios.',
      'Severe damage to credit ratings that can take years of legal work to rectify.',
      'Permanent loss of critical personal photo archives, email records, and online identities.'
    ],
    howToPrevent: [
      'Use a dedicated Password Manager (e.g. Bitwarden, 1Password) to generate unique, 16+ character passwords for every single website.',
      'Eliminate SMS-based 2FA where possible; migrate to app-based authenticators (TOTP) or hardware security keys (YubiKey).',
      'Contact your mobile provider to set up a secondary PIN or verbal passcode required for any SIM replacement requests.',
      'Freeze your credit reports with credit bureaus to prevent unauthorized credit lines.'
    ],
    whatToDoIfTargeted: [
      'If your phone abruptly loses service, call your carrier immediately from another phone to check if an unauthorized SIM swap occurred.',
      'Notify your bank to lock accounts and cancel credit/debit cards.',
      'File an identity theft report with government authorities and police.',
      'Notify credit bureaus to place a fraud alert on your credit profile.'
    ],
    educationalScenario: {
      title: 'Credential Harvesting Phishing Portal',
      description: 'Educational simulation of a fake email warning prompting a password reset on a cloned login page.',
      mockType: 'sms',
      sender: 'security@acc0unt-verify-support.com',
      content: '"Security Warning: Unusual login detected from Moscow, Russia. Your account will be suspended within 2 hours. Log in here to secure your credentials: https://myaccount.g00gle-security.net/reset"',
      warningFlags: [
        'Spoofed domain name with zero digits (`g00gle-security.net`) instead of legitimate domain (`google.com`)',
        'Suspicious sender email address using numbers in the domain name',
        'Artificial urgency threatening account closure'
      ],
      safeAction: 'Do not click the link. Open your browser, type the official service address manually, and review security events under account settings.'
    }
  },
  {
    id: 'smartphone-misuse-children',
    number: '10',
    title: 'Smartphone Misuse Among Children and Teenagers',
    tagline: 'Predatory contacts, unvetted in-game spending, peer pressure, and algorithmic rabbit holes',
    category: 'social-psych',
    riskLevel: 'High',
    riskColor: 'text-amber-600 bg-amber-50 border-amber-200',
    iconName: 'Baby',
    targetAudience: 'Parents, Guardians, Educators, School Students',
    whatIsIt: 'The unique vulnerabilities faced by minors using smartphones without digital safety education or appropriate parental boundaries, including exposure to adult content, predatory online actors, excessive in-app microtransactions, and algorithmic self-harm rabbit holes.',
    howItHappens: 'Children are introduced to online multiplayer games (Roblox, Free Fire) and video platforms. Strangers use in-game gifts or voice chats to build artificial rapport. Algorithms on video platforms detect vulnerabilities (body image distress, depression) and serve increasingly extreme content to keep young users hooked.',
    whyPeopleFallVictim: 'Children lack adult cognitive risk-assessment faculties. The natural desire for peer acceptance makes them susceptible to manipulation and secretive behaviors.',
    whoIsTargeted: 'Children between ages 7 and 17 with unmonitored access to internet-connected devices.',
    warningSigns: [
      'A child becomes unusually secretive about their phone screen, tilting it away or locking it abruptly when adults enter.',
      'Significant personality shifts: withdrawal from family activities, sudden bursts of anger, or school refusal.',
      'Unexplained charges on parents\' credit cards linked to app stores or gaming microtransactions.',
      'Receiving packages or gifts in the mail from unknown "online friends".'
    ],
    consequences: [
      'Psychological manipulation, trauma, and grooming by predatory adults.',
      'Thousands of dollars in unauthorized in-game microtransaction charges.',
      'Exposure to age-inappropriate violence, explicit pornography, or dangerous viral stunts.'
    ],
    howToPrevent: [
      'Build an open, judgment-free communication climate: Ensure children know they can come to you if they see something distressing without losing their device.',
      'Disable in-app purchases and require biometric/password approval for every single app store download.',
      'Establish a "Family Media Agreement" specifying screen-free zones (dining table, bedrooms) and device curfew hours.',
      'Use native parental controls (Google Family Link, Apple Screen Time) to restrict age-inappropriate content and monitor screen time.'
    ],
    whatToDoIfTargeted: [
      'Respond with empathy and calm; do not shout or confiscate the phone immediately, which drives behavior underground.',
      'Preserve all chat logs, gamer tags, and screenshots if illegal or predatory interactions occurred.',
      'Report predatory behavior immediately to law enforcement and child safety hotlines (e.g. NCMEC / Childline).',
      'Seek professional adolescent psychological support if the child shows signs of trauma or depression.'
    ],
    educationalScenario: {
      title: 'Predatory In-Game Currency Exchange',
      description: 'Educational simulation of a stranger in an online gaming chat offering free currency in exchange for private photos.',
      mockType: 'chat',
      sender: 'Gamer_VIP_Club (In-Game Chat)',
      content: '"Hey! If you want 10,000 free gems for your character, add me on Snapchat (@secret_vip) and send me a quick selfie video! Don\'t tell your parents, it\'s an exclusive secret bonus!"',
      warningFlags: [
        'Attempting to move child communication off the monitored game platform onto ephemeral messaging (Snapchat)',
        'Bribing child with virtual currencies in exchange for personal imagery',
        'Coercing the child into secrecy ("Don\'t tell your parents")'
      ],
      safeAction: 'Immediately block and report the player in the game menu. Show the message to a parent or trusted teacher.'
    }
  }
];
