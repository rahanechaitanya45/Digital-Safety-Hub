export interface EmergencyScenario {
  id: string;
  title: string;
  shortDescription: string;
  severity: 'Immediate Danger' | 'Urgent Action Required' | 'High Precaution';
  badgeColor: string;
  firstStep: string;
  checklist: string[];
  helplines: {
    region: string;
    agency: string;
    contact: string;
    note: string;
  }[];
}

export const EMERGENCY_PLAYBOOKS: EmergencyScenario[] = [
  {
    id: 'money-sent',
    title: 'I Sent Money to a Scammer / Approved a Fraudulent UPI Debit',
    shortDescription: 'Crucial actions within the "Golden 2 Hours" to freeze funds before mule cash-outs.',
    severity: 'Immediate Danger',
    badgeColor: 'text-red-700 bg-red-100 border-red-300',
    firstStep: 'Act immediately within 2 hours. Do NOT waste time arguing with the scammer.',
    checklist: [
      'Call your bank\'s 24x7 Fraud Emergency Helpline immediately to place a freeze/dispute on the transaction reference number.',
      'If in India: Dial 1930 immediately or visit cybercrime.gov.in to report the financial fraud to the National Cyber Crime Reporting Portal so bank tokens can be held in transit.',
      'If in the US/UK/EU: Contact your bank\'s wire fraud department and file an immediate report with IC3 (fbi.gov/ic3) or Action Fraud.',
      'Take clear full-screen screenshots of the transaction ID, UPI reference (UTR number), sender\'s phone number, and conversation logs.',
      'De-link your bank account from the payment app temporarily or block your UPI handle.'
    ],
    helplines: [
      { region: 'India', agency: 'National Cyber Financial Fraud Helpline', contact: 'Dial 1930', note: 'Operates 24/7 across all states' },
      { region: 'USA', agency: 'FBI Internet Crime Complaint Center', contact: 'ic3.gov & 1-877-FTC-HELP', note: 'Wire recall and fraud alert' },
      { region: 'UK', agency: 'Action Fraud & Bank Immediate Recall', contact: '0300 123 2040', note: 'Report unauthorized push payments' },
      { region: 'International', agency: 'Local Bank Hotline', contact: 'Check back of debit/credit card', note: 'Call the official fraud number directly' }
    ]
  },
  {
    id: 'credential-otp-leaked',
    title: 'I Shared an OTP or Entered My Password on a Suspicious Website',
    shortDescription: 'Stop account hijackers from taking over your primary email, banking, or social accounts.',
    severity: 'Immediate Danger',
    badgeColor: 'text-red-700 bg-red-100 border-red-300',
    firstStep: 'Log into your account from a clean device right now and terminate all other sessions.',
    checklist: [
      'Immediately change the password of the affected account to a strong 16-character unique passphrase.',
      'In security settings, click "Sign out of all sessions" or "Log out of all devices" to kick out the intruder.',
      'If you shared an email password, check the "Forwarding and POP/IMAP" filters immediately to ensure the hacker did not set up auto-forwarding of your incoming mail.',
      'Switch from SMS OTP to an Authenticator App (Google Authenticator, Aegis, 1Password) for two-factor authentication.',
      'Alert close friends and family that your account had a security event so they do not respond to messages asking for urgent cash.'
    ],
    helplines: [
      { region: 'Google / Gmail', agency: 'Google Security Checkup', contact: 'myaccount.google.com/security', note: 'Review third-party app access' },
      { region: 'Apple / iCloud', agency: 'Apple ID Device Management', contact: 'appleid.apple.com', note: 'Remove untrusted devices' },
      { region: 'Social Media', agency: 'Platform Account Recovery', contact: 'Official help center apps', note: 'Never use third-party "hack recovery" accounts' }
    ]
  },
  {
    id: 'malicious-apk-installed',
    title: 'I Installed a Suspicious APK File or Screen-Sharing App',
    shortDescription: 'Neutralize malware, trojans, or remote access tools before they intercept 2FA codes.',
    severity: 'Urgent Action Required',
    badgeColor: 'text-amber-800 bg-amber-100 border-amber-300',
    firstStep: 'Turn on Airplane Mode immediately or turn off Wi-Fi and Cellular data right now.',
    checklist: [
      'Enable Airplane Mode immediately to sever the remote attacker\'s live data connection.',
      'Reboot the smartphone into "Safe Mode" (this disables all third-party background applications).',
      'Go to Settings > Apps and locate the newly installed APK or unknown utility. Force stop and uninstall it.',
      'Check Settings > Accessibility and Settings > Device Administrator to revoke any elevated permissions granted to strange apps.',
      'If the malware resists uninstallation or has infected system partitions, back up personal photos and perform a clean Factory Data Reset.',
      'After the phone is reset, change all primary passwords from a different computer or device.'
    ],
    helplines: [
      { region: 'Android Help', agency: 'Google Play Protect Support', contact: 'support.google.com/googleplay', note: 'Scan device via Play Store' },
      { region: 'Apple iOS', agency: 'Apple Device Security', contact: 'support.apple.com', note: 'Remove unverified configuration profiles' }
    ]
  },
  {
    id: 'blackmail-sextortion',
    title: 'Someone is Blackmailing Me with Photos, Videos, or Intimate Threats',
    shortDescription: 'Critical protection protocol for victims of extortion. DO NOT pay ransom.',
    severity: 'Immediate Danger',
    badgeColor: 'text-red-700 bg-red-100 border-red-300',
    firstStep: 'DO NOT PAY. Paying never stops extortion—it only proves you have money to lose.',
    checklist: [
      'Under no circumstances send money. Blackmailers will demand double or triple the amount the moment you pay.',
      'Take full-screen screenshots of the blackmail demands, usernames, profile URLs, and payment accounts before blocking.',
      'If intimate imagery is involved: Submit the images to Take It Down (takeitdown.ncmec.org) or StopNCII.org. These free services create cryptographic digital fingerprints (hashes) so platforms automatically block the images from being uploaded anywhere.',
      'Block the harasser on every messaging app and social platform.',
      'Set your social media accounts to private or temporarily deactivate them for 1-2 weeks so the scammer loses your contact list.',
      'Report the incident to the police cybercrime unit. Remember: You are the victim of a crime, not the offender.'
    ],
    helplines: [
      { region: 'Global / Youth', agency: 'Take It Down (NCMEC)', contact: 'takeitdown.ncmec.org', note: 'Removes non-consensual youth imagery' },
      { region: 'Global / Adults', agency: 'StopNCII.org', contact: 'stopncii.org', note: 'Prevents non-consensual intimate image sharing' },
      { region: 'India', agency: 'Women & Child Cyber Helpline', contact: 'Dial 1930 / 112', note: 'Dedicated cyber extortion protection unit' },
      { region: 'Crisis Support', agency: 'Crisis Text Line / Befrienders', contact: 'Text HOME to 741741 (US/UK)', note: 'Confidential emotional support' }
    ]
  },
  {
    id: 'sim-swap-suspect',
    title: 'My Phone Suddenly Has "No Service" (Suspected SIM Swap)',
    shortDescription: 'Prevent attackers from redirecting your phone calls, text messages, and banking OTPs.',
    severity: 'Immediate Danger',
    badgeColor: 'text-red-700 bg-red-100 border-red-300',
    firstStep: 'If your phone suddenly loses signal in a familiar area, suspect an unauthorized SIM swap.',
    checklist: [
      'Borrow a phone or use a landline to immediately call your telecom operator\'s customer support line.',
      'Ask the customer service agent if an unauthorized replacement SIM card or eSIM profile was recently issued on your account.',
      'If yes: Order an immediate deactivation of the replacement SIM card.',
      'Call your primary bank immediately to freeze online banking access until your phone number is reclaimed.',
      'Ask your carrier to add a secondary verbal password or security PIN required for all future account changes.'
    ],
    helplines: [
      { region: 'Telecom Carriers', agency: 'Operator Customer Service', contact: 'Dial carrier shortcode (e.g., 198 / 611)', note: 'Report stolen or hijacked SIM' },
      { region: 'Banking', agency: 'Primary Bank Hotlisting', contact: 'Direct emergency number', note: 'Freeze debit card and internet banking' }
    ]
  }
];
