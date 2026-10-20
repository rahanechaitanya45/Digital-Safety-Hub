import test from 'node:test';
import assert from 'node:assert/strict';
import { THREATS } from './threatData.ts';
import { SIMULATOR_SCENARIOS, calculateSimulatorScore } from './simulatorScenarios.ts';
import { calculateWellnessReport } from './wellnessPlanner.ts';
import { EMERGENCY_PLAYBOOKS } from './emergencyPlaybook.ts';

test('threat dataset contains all 10 required digital threats with complete metadata', () => {
  assert.equal(THREATS.length, 10, 'Must have exactly 10 major digital threats');

  const expectedIds = [
    'ai-deepfakes',
    'upi-payment-scams',
    'social-media-cyberbullying',
    'smartphone-addiction',
    'privacy-data-theft',
    'fake-apps-malware',
    'sextortion-blackmail',
    'misinformation-fake-news',
    'identity-theft-hacking',
    'smartphone-misuse-children',
  ];

  expectedIds.forEach((id) => {
    const threat = THREATS.find((t) => t.id === id);
    assert.ok(threat, `Threat ${id} should exist`);
    assert.ok(threat.title.length > 5, `Title for ${id} should be non-trivial`);
    assert.ok(threat.whatIsIt.length > 30, `whatIsIt for ${id} should be detailed`);
    assert.ok(threat.howItHappens.length > 30, `howItHappens for ${id} should be detailed`);
    assert.ok(threat.whyPeopleFallVictim.length > 20, `whyPeopleFallVictim for ${id} should be detailed`);
    assert.ok(threat.whoIsTargeted.length > 10, `whoIsTargeted for ${id} should be detailed`);
    assert.ok(threat.warningSigns.length >= 3, `warningSigns for ${id} should have at least 3 items`);
    assert.ok(threat.consequences.length >= 2, `consequences for ${id} should have at least 2 items`);
    assert.ok(threat.howToPrevent.length >= 3, `howToPrevent for ${id} should have at least 3 items`);
    assert.ok(threat.whatToDoIfTargeted.length >= 3, `whatToDoIfTargeted for ${id} should have at least 3 items`);
    assert.ok(threat.educationalScenario, `educationalScenario for ${id} should exist`);
    assert.ok(threat.educationalScenario.warningFlags.length >= 2, `educationalScenario warningFlags for ${id} must have items`);
  });
});

test('simulator scenarios validate correctly and have distinct clue structures', () => {
  assert.ok(SIMULATOR_SCENARIOS.length >= 5, 'Should have at least 5 realistic scenarios');
  
  SIMULATOR_SCENARIOS.forEach((scenario) => {
    assert.ok(scenario.id, 'Scenario must have an id');
    assert.ok(scenario.title, 'Scenario must have a title');
    assert.ok(scenario.clues.length >= 2, 'Scenario must have at least 2 identifiable clues');
    assert.ok(scenario.detailedAnalysis.goldenRule, 'Scenario must have a golden rule takeaway');
  });
});

test('calculateSimulatorScore computes 100% for perfect score and ranks correctly', () => {
  const perfectAnswers: Record<string, { verdict: boolean; selectedClues: string[] }> = {};
  
  SIMULATOR_SCENARIOS.forEach((scenario) => {
    perfectAnswers[scenario.id] = {
      verdict: scenario.isScam,
      selectedClues: scenario.clues.map((c) => c.id),
    };
  });

  const result = calculateSimulatorScore(perfectAnswers);
  assert.equal(result.correctVerdicts, SIMULATOR_SCENARIOS.length);
  assert.equal(result.scorePercentage, 100);
  assert.equal(result.rankTitle, 'Cyber Guardian Elite');
});

test('calculateSimulatorScore handles partial and empty submissions gracefully', () => {
  const emptyResult = calculateSimulatorScore({});
  assert.equal(emptyResult.correctVerdicts, 0);
  assert.equal(emptyResult.cluesIdentified, 0);
  assert.equal(emptyResult.scorePercentage, 0);
  assert.equal(emptyResult.rankTitle, 'High-Risk Explorer');
});

test('wellness planner calculates waking days and sleep risks accurately', () => {
  const reportHigh = calculateWellnessReport({
    dailyHours: 6,
    dailyPickups: 90,
    bedtimeUsageMinutes: 60,
    primaryUse: 'short-videos',
  });

  assert.equal(reportHigh.annualHours, 6 * 365);
  assert.equal(reportHigh.annualWakingDaysLost, Math.round((6 * 365) / 16));
  assert.equal(reportHigh.sleepImpactRating, 'Severe');
  assert.equal(reportHigh.dopamineLoopRisk, 'High');
  assert.ok(reportHigh.recommendations.length >= 4);

  const reportLow = calculateWellnessReport({
    dailyHours: 2,
    dailyPickups: 30,
    bedtimeUsageMinutes: 10,
    primaryUse: 'work-study',
  });

  assert.equal(reportLow.sleepImpactRating, 'Low');
  assert.equal(reportLow.dopamineLoopRisk, 'Low');
});

test('emergency playbooks contain all primary crisis scenarios with actionable steps', () => {
  assert.ok(EMERGENCY_PLAYBOOKS.length >= 4, 'Must have at least 4 emergency playbooks');
  EMERGENCY_PLAYBOOKS.forEach((playbook) => {
    assert.ok(playbook.firstStep.length > 10, 'Must have clear initial firstStep');
    assert.ok(playbook.checklist.length >= 4, 'Must have at least 4 actionable checklist items');
    assert.ok(playbook.helplines.length >= 2, 'Must provide regional or trusted helplines');
  });
});
