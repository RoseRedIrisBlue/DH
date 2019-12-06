'use strict';

/**@type {{[k: string]: ItemData}} */
let BattleItems = {
	"persianiumz": {
		id: "persianiumz",
		name: "Persianium Z",
		spritenum: 658,
		onTakeItem: false,
		zMove: "Lingering Surround",
		zMoveFrom: "Lingering Blast",
		zMoveUser: ["Persian"],
		num: -2,
		gen: 7,
		desc: "If held by a Persian with Lingering Blast, it can use Lingering Surround.",
	},
	"simisagiumz": {
		id: "simisagiumz",
		name: "Simisagium Z",
		spritenum: 658,
		onTakeItem: false,
		zMove: "Nature's Guardian",
		zMoveFrom: "Leaf Storm",
		zMoveUser: ["Simisage"],
		num: -2,
		gen: 7,
		desc: "If held by a Simisage with Leaf Storm, it can use Nature's Guardian.",
	},
	"politoediumz": {
		id: "politoediumz",
		name: "Politoedium Z",
		spritenum: 658,
		onTakeItem: false,
		zMove: "Lily Pad Launch",
		zMoveFrom: "Lily Pad Leap",
		zMoveUser: ["Politoed"],
		num: -2,
		gen: 7,
		desc: "If held by a Simisage with Leaf Storm, it can use Nature's Guardian.",
	},
	"tropiumz": {
		id: "tropiumz",
		name: "Tropium Z",
		spritenum: 658,
		onTakeItem: false,
		zMove: "Nature's Guardian",
		zMoveFrom: "Leaf Storm",
		zMoveUser: ["Tropius"],
		num: -2,
		gen: 7,
		desc: "If held by a Simisage with Leaf Storm, it can use Nature's Guardian.",
	},
	"poliwrathiumz": {
		id: "poliwrathiumz",
		name: "Poliwrathium Z",
		spritenum: 658,
		onTakeItem: false,
		zMove: "Tidal Plow",
		zMoveFrom: "Tsunami Punch",
		zMoveUser: ["Poliwrath"],
		num: -2,
		gen: 7,
		desc: "If held by a Simisage with Leaf Storm, it can use Nature's Guardian.",
	},
	"waterlily": {
		id: "waterlily",
		name: "Water Lily",
		spritenum: 5,
		fling: {
			basePower: 10,
		},
		num: -2,
		gen: 7,
		desc: "Holder's use of Rain Dance and Grassy Terrain lasts 8 turns instead of 5.",
	},
	"roomkey": {
		id: "roomkey",
		name: "Room Key",
		spritenum: 662,
		fling: {
			basePower: 20,
		},
		num: -2,
		gen: 7,
		desc: "Holder's use of Magic/Wonder/Trick Room lasts 8 turns instead of 5.",
	},
};

exports.BattleItems = BattleItems;
