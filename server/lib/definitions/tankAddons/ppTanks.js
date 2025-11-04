// An addon is guaranteed to run only after all groups are loaded.
// This is helpful, if your group relies on all other definitions already being loaded.
// Addons that are dependant on other addons should be named something like
// "[PARENT ADDON NAME]-[EXTENSION NAME].js", to make sure that it would run after that addon ran.
const { menu, combineStats, addAura, makeAuto, weaponArray, dereference } = require('../facilitators.js');
const { smshskl, base } = require('../constants.js');
const g = require('../gunvals.js');


Class.ppTanks = menu("Prophecy Paradox Tanks")
Class.pptanks.UPGRADES_TIER_0 = []
Class.addons.UPGRADES_TIER_0.push("ppTanks");
