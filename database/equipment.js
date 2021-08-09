/* exported loadEquipment */

function loadEquipment() {
	return [
		// [CODEX-Stuff] Equipment - Resurrection: Pay gold to resurrect once.
		{
			id:"resurrection",
			label:"Resurrection",
			action:"{heroDied}{and}{payGold:5}{then}{gainFullHp}, {moveOnStairs}"
		},
		// [CODEX-Stuff] Equipment - Fireball: Inflict 2 damage.
		{
			id:"fireball",
			label:"Fireball",
			action:"{afterHeroRollInFight}{then}{fightingEnemyLoseHp:1}"
		},
		// [CODEX-Stuff] Equipment - Taunt: Sacrifice XPs to weaken an enemy attack.
		{
			id:"taunt",
			label:"Taunt",
			action:"{afterEnemyRollInFight}{and}{payXp:2}{then}{setDieTo:1}"
		},
		// [CODEX-Stuff] Equipment - Rage: Sacrifice XPs to strike a critical hit.
		{
			id:"rage",
			label:"Rage",
			action:"{afterHeroRollInFight}{and}{payXp:2}{then}{setDieTo:6}"
		}
	];
}