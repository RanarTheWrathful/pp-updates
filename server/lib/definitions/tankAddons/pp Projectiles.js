// An addon is guaranteed to run only after all groups are loaded.
// This is helpful, if your group relies on all other definitions already being loaded.
// Addons that are dependant on other addons should be named something like
// "[PARENT ADDON NAME]-[EXTENSION NAME].js", to make sure that it would run after that addon ran.
//THIS IS THE ADDON FOR PROPHECY PARADOX PROJECTILES.
const { makeRarities, makePresent, makeRelic, makeCrasher, makeLaby, menu, combineStats, skillSet, addAura, makeDeco, makeAuto, makeGuard, makeBird, makeHybrid, makeOver, makeTurret, weaponArray, dereference, LayeredBoss, newWeapon, makeRadialAuto, setTurretProjectileRecoil, makeMulti } = require('../facilitators.js');
const { smshskl, base, gunCalcNames, basePolygonDamage, basePolygonHealth, dfltskl, statnames} = require('../constants.js');
const g = require('../gunvals.js');



Class.ppProjectiles = menu("Prophecy Paradox Projectiles");
Class.ppProjectiles.UPGRADES_TIER_0 = [];
Class.addons.UPGRADES_TIER_0.push("ppProjectiles");
