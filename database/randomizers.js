/* exported loadRandomizers */

function loadRandomizers() {
	return {

		// Narrative
		randomShopKeeper:[
			"\"Thank you, stranger!\"",
			"The shopkeeper stares at you",
			"\"Here you are, {heroClass}.\"",
			"\"Thank you, {heroClass}.\"",
			"\"Thanks for the gold!\"",
			"\"Hope it helps!\"",
			"\"The best of the {placeName} for you!\"",
			"\"You take. Me thanks.\""
		],
		randomTeleportation:[
			"You disappear",
			"You vanish into thin air",
			"You feel dizzy"
		],
		randomMysteryHappens:[
			"You hear a click under your feets",
			"You hear a noise somewhere",
			"Everything rumbles around you"
		],
		randomTrap:[
			"A dart hits you on a leg",
			"You step on a spike",
			"A small red spider bites you"
		],
		randomSmallKey:[
			"a small key",
			"a rusty key",
			"a tiny key",
			"a copper key",
			"a wooden key"
		],
		randomBossEntrance:[
			"\"How you DARE to challenge the {villainName}! Now, die!\"",
			"\"You will die by the hand of the great {villainName}!\"",
			"\"This {placeName} will be your tomb, {heroClass}!\"",
			"\"This {placeName} will be the last thing you'll see!\"",
			"\"Now die, {heroClass}!\"",
			"\"You and your {goodGuyName} will die!\"",
			"\"I'll kill you first, then the {goodGuyName}!\"",
			"\"The {goodGuyName} will regret sending you here!\"",
			"\"A {heroClass} this time... very well! Bring it on!\""
		],

		// Loot
		randomGoodLoot:[
			"an Heart Shard, {gainHp:1}",
			"an Star Pin, {gainXp:1}",
			"a bag of gold, {gainGold:3}",
		],
		randomBadLoot:[
			"nothing",
			"a Mimic, {loseHp:1}"
		],

		// Fountains
		randomGoodFountain:[
			"a clean fountain, {gainHp:1}",
			"a fresh fountain, {gainHp:2}",
		],
		randomBadFountain:[
			"a muddy fountain, {loseHp:1}",
			"a black fountain, {loseHp:2}",
		],

		// Room effects
		randomGoodRoomEffect:[
			"This room is blessed, {gainHp:1}"
		],
		randomBadRoomEffect:[
			"Poisonous gas fills the room, {loseHp:1}"
		]
	}
}