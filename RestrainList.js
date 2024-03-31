
KinkyDungeonRestraints.push(
	{
        inventory: true,
        name: "LatexPlugGag",
        LinkableBy: [...KDFlatGagLink],
        renderWhenLinked: [...KDFlatGagLink],
        factionColor: [[0], [0], [0]],
        gag: 0.5,
        Color: ["#4EA1FF", "#4EA1FF", "#4EA1FF"],
        Group: "ItemMouth",
        power: 4, weight: -6,
        escapeChance: { "Struggle": -0.05, "Cut": 0.09, "Remove": 0.1, Pick: 0.0 },
        Model: "LatexPlugGag", //Model: "GagLatexMute",

        maxwill: 0.5, enemyTags: {/* "latexRestraints": 6, "latexgagSpell": 10 */}, playerTags: { "ItemMouthFull": 6 }, minLevel: 0, allFloors: true, shrine: ["Latex", "FlatGags", "Gags"]
    },

	{
        inventory: true,
        name: "LatexPlugGagClosed",
        LinkableBy: [...KDFlatGagLink],
        renderWhenLinked: [...KDFlatGagLink],
        factionColor: [[0], [0], [0]],
        gag: 0.5,
        Color: ["#4EA1FF", "#4EA1FF", "#4EA1FF"],
        Group: "ItemMouth",
        power: 4, weight: -6,
        escapeChance: { "Struggle": -0.05, "Cut": 0.09, "Remove": 0.1, Pick: 0.0 },
        Model: "LatexPlugGagClosed", //Model: "GagLatexMute",

        maxwill: 0.5, enemyTags: {/* "latexRestraints": 6, "latexgagSpell": 10 */}, playerTags: { "ItemMouthFull": 6 }, minLevel: 0, allFloors: true, shrine: ["Latex", "FlatGags", "Gags"]
    },

	{
        inventory: true,
        name: "LatexSeamlessTransportJacket",
        inaccessible: true,
        factionColor: [[0, 1, 2]],
        remove: ["Bra", "Tops"],
        Asset: "StraitLeotard",
        Modules: [1, 1, 1, 1],
        Color: ["#499ed6", "#499ed6", "#499ed6"],
        Group: "ItemArms",
        bindarms: true,
        bindhands: 1.33,
        power: 10,
        weight: 0,
        strictness: 0.3,
        LinkableBy: [...KDTransportLink],
        renderWhenLinked: [...KDJacketRender],
        Model: "LatexJacket",
        playerTagsMult: {
            "ItemArmsEmpty": 0.05,
            "More_Jackets": 3.5,
            "Less_Jackets": 0.1,
        },
        factionFilters: {
            Chest: { color: "DarkNeutral", override: true },
            Arms: { color: "DarkNeutral", override: true },
            LatexLower: { color: "DarkNeutral", override: false },
            LatexUpper: { color: "DarkNeutral", override: false },
        },
        escapeChance: { "Struggle": -0.275, "Cut": 0.1, "Remove": 0.1, "Pick": 0.15 },
        limitChance: { "Struggle": 0.12, "Cut": 0.1, "Remove": 0.15, "Unlock": 0.75 },
        maxwill: 0.1, enemyTags: {/* "latexRestraintsHeavy": -1 */}, playerTags: { "LatexStraitjacketWorn": 20, "posLatex": -1, "latexRage": 4 }, minLevel: 12, allFloors: true, shrine: ["Latex", "Straitjackets", "TransportJackets", "Block_ItemHands"]
    },

	{
		removePrison: true,
		forceRemovePrison: true,
		removeOnLeash: false,
		name: "Balloon",
		Color: ["#ff77ff"],
		Group: "ItemNeck",
		power: 1,
		weight: 1,
		alwaysStruggleable: true,
		Model: "Balloon",
		addTag: ["ForceStand", "ForceKneel", "NoHogtie"],

		//LinkableBy: [...BalloonAsCollarLink],
		//renderWhenLinked: [...BalloonAsCollarRender],

		//render mean up

		//link mean down

		//linkSize: 0.8,
		AlwaysLinkable: true,
		hobble: 3,
		heelpower: 7,
		sfxGroup: "BalloonEscape",
		failSuffix: { Remove: "Bubble", Struggle: "Bubble", Cut: "Bubble" },
		limitChance: { Cut: 0, Struggle: 0.4, Remove: 0.8, },
		affinity: { Struggle: ["Sharp"], },
		escapeChance: { "Struggle": -0.12, "Cut": 0.5, "Remove": -0.06 },
		helpChance: { "Struggle": 0.2, "Pick": 1.0, "Remove": .2 },

		events: [
			{ trigger: "afterPlayerDamage", type: "bubblePop", mult: 1.5, subMult: 0.5, count: 13, inheritLinked: true },
			{ trigger: "beforePlayerDamage", type: "bounce", chance: 0.2, sfx: "RubberBolt", inheritLinked: true },
			{ trigger: "tick", type: "FurnitureRemoveBalloon", inheritLinked: true },
			{ trigger: "tick", type: "JailRemovedBalloon", inheritLinked: true },
			//{trigger: "postRemoval", type: "BalloonRemoved", inheritLinked: true},
			//{trigger: "postRemoval", type: "RemovedInBalloon", inheritLinked: true}
		],
		enemyTags: {},
		playerTags: {},
		minLevel: 0,
		allFloors: true,
		shrine: ["Balloons", "Collars", "HighCollars", "ModBubble"]
	},
	/*
		//specail leash that for balloon. but couldn't
		{
		removePrison: true,
		name: "BalloonString",
		tether: 2.9,
		Asset: "VacCube",

		Group: "ItemNeckRestraints",
		leash: true,
		power: 2,
		weight: -99,
		harness: true,
		Model: "Leash",
		unlimited: true,

		events: [
			//{trigger: "tick", },
			{trigger: "postRemoval", type: "RequireBalloon"},
		],

			escapeChance: {"Struggle": -0.14, "Cut": -0.2, "Remove": -0.04},
			enemyTags: {},
			playerTags: {},
			helpChance: { "Struggle": 0.2, "Remove": .1},
			minLevel: 0,
			allFloors: true,

			shrine: []
		},
	*/


	{
		removePrison: true,
		removeOnLeash: true,
		name: "BalloonStuffingMachine",
		Asset: "VacCube",
		Group: "ItemDevices",
		power: 3,
		weight: 1,
		sfxGroup: "BalloonEscape",
		failSuffix: { Remove: "Bubble", Struggle: "Bubble", Cut: "Bubble" },
		alwaysStruggleable: true,
		Model: "BalloonStuffingMachine",
		addTag: ["ForceKneel", "NoHogtie"],
		immobile: true,
		DefaultLock: "Red",
		enemyTags: { "BalloonCage": 100 },
		playerTags: {},
		minLevel: 0,
		allFloors: true,
		shrine: ["Furniture", "BalloonStuffingMachines", "ModBubble"],
		ignoreSpells: true,
		removeOnLeash: true,
		escapeChance: { "Struggle": -0.11, "Cut": -0.9, "Remove": 0.35, "Pick": -0.2, "Unlock": -0.2 },
		helpChance: { "Remove": 0.5, "Pick": 0.5, "Unlock": 0.3 },
		events:
			[
				{ trigger: "tick", type: "cageDebuff", inheritLinked: true },
				{ trigger: "tick", type: "callGuardFurniture", inheritLinked: true },
				//{ trigger: "postApply",  type: "BalloonStuffingMachine", inheritLinked: true },
				{ trigger: "postRemoval", type: "BalloonStuffingChange", inheritLinked: true },
				//{trigger: "playerMove", type: "removeOnMove", inheritLinked: true},
				{ trigger: "postRemoval", type: "RemovedInBalloon", inheritLinked: true }
			]
	},

	//Folder of Latex

	{
		removePrison: true,
		name: "BallSuitHead",
		unlimited: true,
		inaccessible: true,
		Color: "#2277ee",
		Group: "ItemHead",
		power: 2,
		blindfold: 3,
		weight: 0,
		escapeChance: { "Struggle": -0.1, "Cut": 0.1, "Remove": -0.5 },
		Model: "BallSuitHead",
		events: [],
		enemyTags: {},
		playerTags: { "Furniture": -100 },
		minLevel: 0,
		allFloors: true,
		shrine: [ "Encase", "Block_ItemMouth", "Block_ItemEars"]
	},

	/*
	{
		unlimited: true,
		removePrison: true,
		name: "BalloonHarness",
		Asset: "LeatherStrapHarness",
		Model: "Harness",
		strictness: 0.05,
		immobile: true,
		accessible: true,
		harness: true,
		Group: "ItemTorso",
		Filters: {
			Hardware: {"gamma":0.11666666666666667,"saturation":1,"contrast":1.6166666666666665,"brightness":2.45,"red":1,"green":1,"blue":1,"alpha":1},
		},
		power: 2,
		weight: 2,
		escapeChance: {"Struggle": -0.15, "Cut": 0.1, "Remove": 0.5, "Pick": 0.25},
		playerTags: {}, minLevel: 0, allFloors: true, shrine: ["Latex", "Harnesses"]
	},
	*/

	{removePrison: true, name: "Bubble", Asset: "VacCube", Color: ["#ff77ff"], Group: "ItemDevices", power: 3, weight: 1, alwaysStruggleable: true,
	Model: "Bubble",
	addTag: ["ForceKneel", "NoHogtie"],
	hobble: 3,
	heelpower: 10,
	tightType: "Thick",
	failSuffix: {Remove: "Bubble", Struggle: "Bubble", Cut: "Bubble"},
	limitChance: {
		Cut: 0,
		Struggle: 0.4,
		Remove: 0.8,
	},
	affinity: {
		Struggle: ["Sharp"],
		Remove: ["Sharp"],
	},
	escapeChance: {"Struggle": 0, "Cut": 0.8, "Remove": 0.3},
	helpChance: {"Struggle": 0.2, "Pick": 1.0, "Remove": .2},
	events: [
		{trigger: "afterPlayerDamage", type: "bubblePop", mult: 1.5, subMult: 0.5, count: 13, inheritLinked: true},
		{trigger: "beforePlayerDamage", type: "bounce", chance: 0.2, sfx: "RubberBolt", inheritLinked: true},
	],
	enemyTags: {"bubble":100}, playerTags: {}, minLevel: 0, allFloors: true, shrine: ["Furniture", "Elements", "ModBubble"], removeOnLeash: true,
},


	{
		removePrison: true,
		name: "MagicSoapBubble",
		Asset: "VacCube",
		Color: ["#ff77ff"],
		Group: "ItemDevices", power: 5, weight: 1,
		alwaysStruggleable: true,
		Model: "MagicSoapBubble",
		addTag: ["ForceKneel", "NoHogtie"],
		sfxGroup: "BubbleEscape",
		hobble: 6,
		restriction: 1,
		heelpower: 10,
		magic: true,
		failSuffix: { Remove: "Bubble", Struggle: "Bubble", Cut: "Bubble" },
		escapeChance: { "Struggle": -0.09, "Cut": 0.075, "Remove": -0.9 },
		helpChance: { "Struggle": 0.1, "Pick": 0.5, "Remove": .1 },
		events: [
			{ trigger: "afterPlayerDamage", type: "bubblePop", mult: 1.5, subMult: 0.5, count: 13, inheritLinked: true },
			{ trigger: "beforePlayerDamage", type: "bounce", chance: 0.2, sfx: "RubberBolt", inheritLinked: true },
			{ trigger: "tick", type: "bubblemove" },
		],
		enemyTags: { "magicbubble": 100 }, playerTags: {}, minLevel: 0, allFloors: true, shrine: ["Furniture", "ModBubble",], removeOnLeash: true,
	},

	{
		removePrison: true,
		name: "SoapBubble",
		Asset: "VacCube",
		Color: ["#ff77ff"],
		Group: "ItemDevices", power: 4, weight: 1,
		alwaysStruggleable: true,
		Model: "MagicSoapBubble",
		addTag: ["ForceKneel", "NoHogtie"],
		sfxGroup: "BubbleEscape",
		hobble: 3,
		heelpower: 10,
		failSuffix: { Remove: "Bubble", Struggle: "Bubble", Cut: "Bubble" },
		limitChance: {
			Cut: 0,
			Struggle: 0.4,
			Remove: 0.8,
		},
		affinity: {
			Struggle: ["Sharp"],
			Remove: ["Sharp"],
		},
		escapeChance: { "Struggle": -0.03, "Cut": 0.05, "Remove": -0.5 },
		helpChance: { "Struggle": 0.1, "Pick": 0.5, "Remove": .1 },
		events: [
			{ trigger: "afterPlayerDamage", type: "bubblePop", mult: 1.5, subMult: 0.5, count: 13, inheritLinked: true },
			{ trigger: "beforePlayerDamage", type: "bounce", chance: 0.2, sfx: "RubberBolt", inheritLinked: true },
			{ trigger: "tick", type: "bubblemove" },
		],
		enemyTags: { "soapbubble": 100 }, playerTags: {}, minLevel: 0, allFloors: true, shrine: ["Furniture", "ModBubble", "MB"], removeOnLeash: true,
	},



	{
		removePrison: true,
		name: "SquishBubble",
		Asset: "VacCube",
		Color: ["#ff77ff"],
		Group: "ItemDevices",
		power: 11,
		weight: 1,
		alwaysStruggleable: true,
		//immobile: true,
		bindarms: true,
		ignoreSpells: false,
		Model: "BubbleSquishy",
		addTag: ["ForceKneel", "NoHogtie"],
		sfxGroup: "BubbleEscape",
		hobble: 15,
		heelpower: 10,
		restriction: 13,
		failSuffix: { Remove: "Bubble", Struggle: "Bubble", Cut: "Bubble" },
		affinity: {
			Struggle: ["Sharp"],
			Remove: ["Sharp"],
		},
		escapeChance: { "Struggle": -0.11, "Cut": 0.1, "Remove": -.5 },
		helpChance: { "Struggle": -0.1, "Remove": 0.5 },
		events: [
			{ trigger: "tick", type: "callGuardFurniture", inheritLinked: true },
			{ trigger: "afterPlayerDamage", type: "bubblePop", mult: 1.5, subMult: 0.5, count: 13, inheritLinked: true },
			{ trigger: "beforePlayerDamage", type: "bounce", chance: 0.2, sfx: "RubberBolt", inheritLinked: true },
			{ trigger: "tick", type: "bubblemove" },
			{ trigger: "tick", type: "RemoveKronosBubble", inheritLinked: true },
		],
		enemyTags: { "bubblesquish": 100, "KronosBubble6": 100, "KronosBubble": 100 }, playerTags: {},
		minLevel: 0,
		allFloors: true,
		shrine: ["Furniture", "ModBubble", "MaxKronosBubble", "SB"],
		removeOnLeash: true,
	},
























	/*
		//KronosBubble
		{
			unlimited: true,
			removePrison: true,
			name: "HardSlimeBoots",
			//debris: "Slime",
			linkCategory: "SlimeBoots",
			linkSize: 0.6,
			LinkableBy: [...KDRubberLink],
			renderWhenLinked: [...KDRubberLink],
			inaccessible: true,
			Asset: "ToeTape",
			Type: "Full",
			Color: "#9B49BD",
			Group: "ItemBoots",
			blockfeet: true,
			addTag: ["FeetLinked"],
			power: 5,
			weight: 0,
			escapeChance: { "Struggle": 0, "Cut": 0.1, "Remove": 0 },
			failSuffix: { "Remove": "SlimeHard" },
			affinity: { Struggle: ["Sharp",], Remove: ["Hook"], },
			factionColor: [[], [0]],
			factionFilters: {
				Rubber: { color: "DarkNeutral", override: true },
			},
			maxwill: 0.1,
			Model: "RubberBoots",
			addPoseIfTopLevel: ["ItemBootsRubberOver"],
			enemyTags: { "latexEncase": 100, "latexEncaseRandom": 103 }, playerTags: {},
			minLevel: 0, allFloors: true, shrine: ["Latex", "Encase", "SlimeHard", "Rubber"]
		},
	*/



	{
		removePrison: true,
		name: "BubbleGag",
		LinkableBy: [...KDBallGagLink],
		renderWhenLinked: [...KDBallGagLink],
		gag: 0.5,
		Type: "Tight",
		Group: "ItemMouth",
		power: 7,
		weight: 0,
		escapeChance: { "Struggle": -0.05, "Cut": 0.1, "Remove": -0.07 },
		Model: "BubbleGag",
		maxwill: 0.8,
		events: [
		],
		enemyTags: {},
		playerTags: {},
		minLevel: 0,
		maxLevel: 5,
		allFloors: true,
		shrine: ["KronosBubblesGag", "Gags"]
	},

	{
		name: "BubbleKronos1",
		//debris: "Chains",
		//alwaysRender: true,
		AlwaysLinkable: true,
		Model: "BubbleKronos1",
		sfxGroup: "BubbleEscape",

		//Asset: "BubbleKronos1",
		//LinkableBy: [...KDKronosBLink],
		//renderWhenLinked: [...KDTapeLink],
		Group: "ItemBoots",
		//Type: "CompleteFeet",
		//Type: "Full",
		power: 4.2,
		weight: 0,

		/*
		linkCategory: "AnkleCuffs",
		linkSize: 0.51,
		*/
		hobble: 0.1,
		escapeChance: { "Struggle": -0.05, "Cut": 0.5, "Remove": -0.05 },
		maxwill: 1.0,
		events: [
			{ trigger: "tick", type: "B_KronosBubbleSpread" },
			{ trigger: "struggle", type: "StruggleKronosBoots" },
		],
		enemyTags: {},
		playerTags: {},
		minLevel: 0,
		allFloors: true,
		shrine: ["KronosBubble1B", "KronosBubbles"],
		//events: [{ trigger: "remotePunish", type: "RemoteLinkItem", restraint: "AnkleLinkShort", sfx: "LightJingle", noLeash: true, enemyDialogue: "KDDialogueRemoteLinkCuffs", msg: "KDMsgRemoteLinkCuffs" },]
	},


	{
		name: "BubbleKronos2Boots",
		Group: "ItemBoots",
		Model: "BubbleKronos2Boots",
		sfxGroup: "BubbleEscape",

		hobble: 0.2,
		power: 5,
		weight: 0,
		//alwaysRender: true,
		AlwaysLinkable: true,
		escapeChance: { "Struggle": -0.055, "Cut": 0.5, "Remove": -0.055 },
		maxwill: 1.0,
		//LinkableBy: [...KronosBubbleLink],
		//renderWhenLinked: [...KDRubberLink],
		events: [
			//{ trigger: "tick", type: "T_KronosBubbleSpread"},
			{ trigger: "struggle", type: "StruggleKronosBoots" },
			{ trigger: "tick", type: "B_KronosBubbleSpread" },
			{ trigger: "postApply", type: "B_KronosBubbleSpreadDelete" },
		],
		enemyTags: {},
		playerTags: {},
		minLevel: 0,
		allFloors: true,
		shrine: ["KronosBubble2B", "KronosBubbles2", "KronosBubbles"],
	},

	{
		name: "BubbleKronos2Shoulder",
		Group: "ItemArms",
		Model: "BubbleKronos2Shoulder",
		sfxGroup: "BubbleEscape",

		power: 5,
		weight: 0,
		//alwaysRender: true,
		AlwaysLinkable: true,
		escapeChance: { "Struggle": -0.05, "Cut": 0.5, "Remove": -0.03 },
		maxwill: 1.0,
		//LinkableBy: [...KronosBubbleLink],
		//renderWhenLinked: [...KDRubberLink],
		//LinkAll: true,// NoLinkOver: true,
		minLevel: 0,
		events: [
			{ trigger: "struggle", type: "StruggleKronosUpperBody" },
			{ trigger: "tick", type: "H_KronosBubbleSpread" },
			//{ trigger: "tick", type: "T_KronosBubbleSpread"},
		],
		enemyTags: {},
		playerTags: {},
		minLevel: 0,
		allFloors: true,
		shrine: ["KronosBubble2S", "KronosBubbles2", "KronosBubbles"],
	},

	{
		name: "BubbleKronos3Boots",
		Group: "ItemBoots",
		Model: "BubbleKronos3Boots",
		sfxGroup: "BubbleEscape",

		hobble: 0.2,
		power: 6,
		weight: 0,
		blockfeet: true,
		inaccessible: true,
		AlwaysLinkable: true,
		escapeChance: {},
		maxwill: 1.0,
		//LinkableBy: [...KronosBubbleLink],
		//renderWhenLinked: [...KDRubberLink],
		events: [
			{ trigger: "struggle", type: "StruggleKronosBoots" },
			{ trigger: "tick", type: "B_KronosBubbleSpread" },
			{ trigger: "postApply", type: "B_KronosBubbleSpreadDelete" },
			//{ trigger: "tick", type: "T_KronosBubbleSpread"},
		],
		escapeChance: { "Struggle": -0.06, "Cut": 0.25, "Remove": -0.05 },
		enemyTags: {},
		playerTags: {},
		minLevel: 0,
		allFloors: true,
		shrine: ["KronosBubble3B", "KronosBubbles3", "KronosBubbles"],
	},

	{
		name: "BubbleKronos3Shoulder",
		Group: "ItemArms",
		Model: "BubbleKronos3Shoulder",
		sfxGroup: "BubbleEscape",

		power: 6,
		weight: 0,
		alwaysRender: true,
		AlwaysLinkable: true,
		escapeChance: { "Struggle": -0.05, "Cut": 0.1, "Remove": -0.03 },
		maxwill: 1.0,
		//LinkableBy: [...KronosBubbleLink],
		//renderWhenLinked: [...KDRubberLink],
		//LinkAll: true, NoLinkOver: true,
		minLevel: 0,
		events: [
			{ trigger: "struggle", type: "StruggleKronosUpperBody" },
			{ trigger: "tick", type: "H_KronosBubbleSpread" },
			{ trigger: "postApply", type: "SH_KronosBubbleSpreadDelete" },
			//{ trigger: "tick", type: "T_KronosBubbleSpread"},
		],
		enemyTags: {},
		playerTags: {},
		minLevel: 0,
		allFloors: true,
		shrine: ["KronosBubble3S", "KronosBubbles3", "KronosBubbles"],
	},

	{
		name: "BubbleKronos4Boots",
		Group: "ItemBoots",
		Model: "BubbleKronos4Boots",
		sfxGroup: "BubbleEscape",

		hobble: 8,
		power: 8,
		weight: 0,
		alwaysRender: true,
		AlwaysLinkable: true,
		escapeChance: { "Struggle": -0.09, "Cut": 0.1, "Remove": -0.09 },
		maxwill: 1.0,
		//LinkableBy: [...KronosBubbleLink],
		//renderWhenLinked: [...KDRubberLink],
		events: [
			{ trigger: "struggle", type: "StruggleKronosBubble4All" },
			{ trigger: "struggle", type: "StruggleKronosBubble4" },
			{ trigger: "struggle", type: "StruggleKronosBoots" },
			//{ trigger: "tick", type: "B_KronosBubbleSpread" },
			{ trigger: "postApply", type: "B_KronosBubbleSpreadDelete" },
			//{ trigger: "tick", type: "T_KronosBubbleSpread"},
		],
		enemyTags: {},
		playerTags: {},
		minLevel: 0,
		allFloors: true,
		shrine: ["KronosBubble4B", "KronosBubbles4", "KronosBubbles"],
	},


	{
		name: "BubbleKronos4HandFront",
		sfxGroup: "BubbleEscape",

		Model: "BubbleKronos4HandFront",
		Group: "ItemArms",
		bindarms: true,
		alwaysRender: true,
		AlwaysLinkable: true,
		bindhands: 0.8,
		AddPose: ["HandCuffed"],
		//LinkableBy: [...KronosBubbleLink],
		//renderWhenLinked: [...KDRubberLink],
		power: 7,
		weight: 0,
		maxwill: 1.0,
		minLevel: 0,
		allFloors: true,
		events: [
			{ trigger: "struggle", type: "StruggleKronosBubble4All" },
			{ trigger: "struggle", type: "StruggleKronosBubble4" },
			{ trigger: "struggle", type: "StruggleKronosUpperBody" },
			//{ trigger: "tick", type: "H_KronosBubbleSpread" },
			{ trigger: "postApply", type: "SH_KronosBubbleSpreadDelete" },
			{ trigger: "tick", type: "CheckPoseKB4H"},
			{ trigger: "postApply", type: "SetPoseKB4H" },


		],
		enemyTags: { "kronosbubble": 100 },
		escapeChance: { "Struggle": -0.09, "Cut": 0.1, "Remove": -0.08 },
		playerTags: {},
		playerTagsMult: {},
		shrine: ["HandsFrontAllowed", "KronosBubble4H", "KronosBubbles4", "KronosBubbles"],
	},

	{
		name: "BubbleKronos4HandFrontNonForce",
		sfxGroup: "Handcuffs",
		Model: "BubbleKronos4HandFront",
		Group: "ItemArms",
		sfxGroup: "BubbleEscape",

		bindarms: true,
		alwaysRender: true,
		AlwaysLinkable: true,
		bindhands: 0.8,
		//LinkableBy: [...KronosBubbleLink],
		//renderWhenLinked: [...KDRubberLink],
		power: 7,
		weight: 0,
		maxwill: 1.0,
		minLevel: 0,
		allFloors: true,
		events: [
			{ trigger: "struggle", type: "StruggleKronosBubble4All" },
			{ trigger: "struggle", type: "StruggleKronosBubble4" },
			{ trigger: "struggle", type: "StruggleKronosUpperBody" },
			//{ trigger: "tick", type: "H_KronosBubbleSpread" },
			{ trigger: "postApply", type: "SH_KronosBubbleSpreadDelete" },
			//{ trigger: "tick", type: "T_KronosBubbleSpread"},
			//{ trigger: "postApply", type: "SetPoseKB4H" },
		],
		enemyTags: { "kronosbubble": 100 },
		escapeChance: { "Struggle": -0.09, "Cut": 0.1, "Remove": -0.08 },
		playerTags: {},
		shrine: ["KronosBubble4H", "KronosBubbles4", "KronosBubbles"],
	},

	{
		removePrison: true,
		name: "BubbleKronos4Crotch",
		accessible: false,
		crotchrope: true,
		alwaysRender: true,
		AlwaysLinkable: true,
		strictness: 0.15,
		strictnessZones: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"],
		OverridePriority: 26.1,
		Group: "ItemPelvis",
		sfxGroup: "BubbleEscape",

		power: 7,
		weight: 0,
		Model: "BubbleKronos4Crotch",
		failSuffix: {},
		escapeChance: { "Struggle": -0.1, "Cut": 0.1, "Remove": -0.05 },
		enemyTags: {},
		playerTags: {},
		minLevel: 0,
		allFloors: true,
		shrine: ["KronosBubble4C", "KronosBubbles", "KronosBubbles4"],
		events: [
			{ trigger: "struggle", type: "StruggleKronosBubble4All" },
			{ trigger: "struggle", type: "StruggleKronosBubble4" },
			{ trigger: "struggle", type: "crotchrope" },
			//{ trigger: "struggle", type: "S_KronosBubbleSpread"},
			//{ trigger: "tick", type: "T_KronosBubbleSpread"},
		],
	},

	{
		removePrison: true,
		name: "BubbleKronos5",
		Group: "ItemDevices",
		power: 8,
		weight: 1,
		alwaysStruggleable: true,
		bindarms: true,
		bindhands:  1,
		Model: "BubbleKronos5",
		sfxGroup: "BubbleEscape",
		addTag: ["FeetLinked"],
		hobble: 9,
		restriction: 15,
		failSuffix: { Remove: "Bubble", Struggle: "Bubble", Cut: "Bubble" },
		affinity: {
			Struggle: ["Sharp"],
			Remove: ["Sharp"],
		},
		events: [
			{ trigger: "tick", type: "RemoveKronosBubble", inheritLinked: true },
			//{ trigger: "struggle", type: "S_KronosBubbleSpread" },
			//{ trigger: "tick", type: "T_KronosBubbleSpread"},
		],
		escapeChance: { "Struggle": -0.19, "Cut": 0.1, "Remove": -.5 },
		enemyTags: {},
		playerTags: {},
		minLevel: 0,
		allFloors: true,
		shrine: ["Furniture", "KronosBubble5", "KronosBubblesMax"],
	},

	/*
	{
		inventory: true,
		name: "BubbleMittens",
		Model: "BubbleMittens",
		LinkableBy: [...KDGlovesLink],
		renderWhenLinked: ["Mittens"],
		Group: "ItemHands",
		bindhands: 1.0, power: 10, weight: 0,
		escapeChance: { "Struggle": -0.05, "Cut": 0.04, "Remove": 0.4, "Pick": 0.25 },
		maxwill: 0.4,
		enemyTags: {},
		playerTags: {},
		minLevel: 0,
		allFloors: true,
		shrine: ["Mittens"]
	},
	*/




)



KDSFXGroups["BalloonEscape"] =
{
	sfx: "BalloonStruggle",
	sfxEscape:
	{
		Struggle: "BalloonStruggle",
		Remove: "BalloonRemove",
	},
}


KDSFXGroups["BubbleEscape"] =
{
	sfx: "BubbleStruggle",
	sfxEscape:
	{
		Struggle: "BubbleStruggle",
		Remove: "BalloonRemove",
	},
}