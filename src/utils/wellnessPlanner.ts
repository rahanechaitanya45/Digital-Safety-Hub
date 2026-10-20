export interface WellnessInputs {
  dailyHours: number;
  dailyPickups: number;
  bedtimeUsageMinutes: number;
  primaryUse: 'short-videos' | 'social-media' | 'gaming' | 'work-study' | 'mixed';
}

export interface WellnessReport {
  annualWakingDaysLost: number;
  annualHours: number;
  sleepImpactRating: 'Low' | 'Moderate' | 'Severe';
  dopamineLoopRisk: 'Low' | 'Elevated' | 'High';
  recommendations: {
    title: string;
    description: string;
    actionableStep: string;
    impact: string;
  }[];
}

export function calculateWellnessReport(inputs: WellnessInputs): WellnessReport {
  const annualHours = Math.round(inputs.dailyHours * 365);
  // Assuming 16 waking hours per day:
  const annualWakingDaysLost = Math.round(annualHours / 16);

  let sleepImpactRating: 'Low' | 'Moderate' | 'Severe' = 'Low';
  if (inputs.bedtimeUsageMinutes > 45) {
    sleepImpactRating = 'Severe';
  } else if (inputs.bedtimeUsageMinutes >= 20) {
    sleepImpactRating = 'Moderate';
  }

  let dopamineLoopRisk: 'Low' | 'Elevated' | 'High' = 'Low';
  if (inputs.dailyHours > 5 || inputs.dailyPickups > 80 || inputs.primaryUse === 'short-videos') {
    dopamineLoopRisk = 'High';
  } else if (inputs.dailyHours > 3 || inputs.dailyPickups > 45) {
    dopamineLoopRisk = 'Elevated';
  }

  const recommendations = [
    {
      title: 'Physical Phone-Free Sleep Sanctuary',
      description: 'Blue light from phone screens suppresses melatonin release, delaying REM sleep cycles and causing daytime fatigue.',
      actionableStep: 'Place your smartphone charger in another room (or at least 8 feet away from bed) 45 minutes before turning off lights.',
      impact: 'Restores natural melatonin production and improves morning alertness by up to 35%.'
    },
    {
      title: 'Monochrome (Grayscale) Screen Shift',
      description: 'App icons and infinite video feeds use bright red, gold, and saturated hues specifically designed to trigger dopamine hits in the brain.',
      actionableStep: 'Turn on Grayscale display in your phone\'s Accessibility settings (Settings > Accessibility > Color Filters > Grayscale).',
      impact: 'Reduces passive unconscious scrolling by an average of 40-50 minutes per day.'
    },
    {
      title: 'The 20-20-20 Ocular Reset Protocol',
      description: 'Continuous near-focus smartphone staring leads to "computer vision syndrome", dry eyes, and tension headaches.',
      actionableStep: 'Every 20 minutes of screen use, pause and gaze at an object 20 feet away for 20 seconds.',
      impact: 'Relieves ocular muscle spasm and reduces headaches.'
    },
    {
      title: 'Silent VIP Notification Triage',
      description: 'The average smartphone user receives over 65 non-urgent notifications daily, fragmenting deep work and cognitive focus.',
      actionableStep: 'Turn off notification banners and sounds for all shopping, gaming, and social recommendation feeds. Allow only direct calls from family.',
      impact: 'Eliminates chronic micro-distractions and cuts daily phone pickups in half.'
    },
    {
      title: 'The 5-Second "Think Before You Tap" Pause',
      description: 'Compulsive phone checking is an automatic motor reflex triggered by momentary boredom or anxiety.',
      actionableStep: 'Before unlocking your screen, pause for 5 seconds and ask yourself: "What specific task am I opening my phone to accomplish right now?"',
      impact: 'Transforms passive mindless consumption into conscious, deliberate tool usage.'
    }
  ];

  return {
    annualWakingDaysLost,
    annualHours,
    sleepImpactRating,
    dopamineLoopRisk,
    recommendations,
  };
}
