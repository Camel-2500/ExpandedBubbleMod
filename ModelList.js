KinkyDungeonLoad()

KinkyDungeonLoadStats()

PIXI.Assets.load({
	src: "TextureAtlas/texture-0.json",
	loadParser: 'modAtlasLoader'
});

PIXI.Assets.load({
	src: "TextureAtlas/texture-1.json",
	loadParser: 'modAtlasLoader'
});

PIXI.Assets.load({
	src: "TextureAtlas/texture-2.json",
	loadParser: 'modAtlasLoader'
});

PIXI.Assets.load({
	src: "TextureAtlas/texture-3.json",
	loadParser: 'modAtlasLoader'
});

PIXI.Assets.load({
	src: "TextureAtlas/texture-4.json",
	loadParser: 'modAtlasLoader'
});

PIXI.Assets.load({
	src: "TextureAtlas/texture-5.json",
	loadParser: 'modAtlasLoader'
});

PIXI.Assets.load({
	src: "TextureAtlas/texture-6.json",
	loadParser: 'modAtlasLoader'
});





AddModel
	({
		Name: "Balloon",
		Folder: "Balloon",
		TopLevel: true,
		Restraint: true,
		Categories: ["Restraints",],
		AddPose: ["PreferKneel", "UprightHogtie"],
		Filters: {
			Balloon: { "gamma": 0.88, "saturation": 0, "contrast": 1.48, "brightness": 1.1, "red": 0.13, "green": 0.83, "blue": 1.2, "alpha": 1 },
			TransparentBalloon: { "gamma": 0.88, "saturation": 0, "contrast": 1.48, "brightness": 1.1, "red": 0.13, "green": 0.83, "blue": 1.2, "alpha": 0.85 },
		},
		Layers: ToLayerMap([
			{
				Name: "Balloon", Layer: "FurnitureFront", Pri: 20,
				Invariant: true,
				OffsetY: 160,
				Poses: { Menu: true },
				HidePoses: ToMap(["Xray"]),
			},
			{
				Name: "TransparentBalloon", Layer: "FurnitureFront", Pri: -40,
				Invariant: true,
				OffsetY: 160,
				EraseSprite: "Bubble",
				EraseLayers: ToMap(["Bubble"]),
			},
			{
				Name: "BalloonString", Layer: "FurnitureFront", Pri: 20.1,
				Invariant: true,
				OffsetY: 160,
				EraseSprite: "Bubble",
				EraseLayers: ToMap(["Bubble"]),
			},
		])
	});

/*
AddModel({
	Name: "Leash",
	Folder: "BalloonString",
	TopLevel: true,
	Restraint: true,
	Categories: ["Restraints"],
	Layers: ToLayerMap([
		{ Name: "Leash", Layer: "FurnitureDront", Pri: 20.1,
			Invariant: true,
			//HideWhenOverridden: true,
			//EraseSprite: "Bubble",
			//EraseLayers: ToMap(["Bubble"]),
			OffsetY: 153,

			//MorphPoses: {Kneel: "Kneel", KneelClosed: "Kneel", Hogtie: "Hogtie", HandsBound: "", Pulled: "", HandsBehind: "",
				//Free: "Free", Crossed: "Crossed", Front: "Front"},
			//AppendPose: {Pulled: "Pulled"},

		},
	])
});
*/

AddModel
	({
		Name: "BalloonStuffingMachine",
		Folder: "BalloonStuffingMachine",
		TopLevel: true,
		Group: "Devices",
		Restraint: true,
		Categories: ["Restraints", "Furniture", "Latex"],
		AddPose: ["UprightHogtie", "PreferKneel",],
		Layers: ToLayerMap([
			{
				Name: "1Front", Layer: "FurnitureFront", Pri: 70,
				Invariant: true,
				EraseSprite: "Bubble",
				EraseLayers: ToMap(["Bubble"]),
				OffsetX: -100,
			},

			{
				Name: "2Front", Layer: "FurnitureFront", Pri: 60,
				Invariant: true,
				EraseSprite: "Bubble",
				HidePoses: ToMap(["Xray"]),
				OffsetX: -100,


			},

			{
				Name: "3Front", Layer: "FurnitureFront", Pri: 50,
				Invariant: true,
				EraseSprite: "Bubble",
				EraseLayers: ToMap(["Bubble"]),
				HidePoses: ToMap(["Xray"]),
				OffsetX: -100,
			},

			{
				Name: "BalloonForstuffing", Layer: "FurnitureFront", Pri: 21,
				Invariant: true,
				Poses: { Menu: true },
				HidePoses: ToMap(["Xray"]),
				OffsetX: -100,
			},

			{
				Name: "4Front", Layer: "FurnitureFront", Pri: 40,
				Invariant: true,
				EraseSprite: "Bubble",
				OffsetX: -100,
			},

			{
				Name: "1Back", Layer: "FurnitureBack", Pri: -40,
				Invariant: true,
				EraseSprite: "Bubble",
				EraseLayers: ToMap(["Bubble"]),
				OffsetX: -100,
			},
		])
	});

AddModel({
	Name: "BallSuitHead",
	Folder: "Latex",
	TopLevel: true,
	Restraint: true,
	Categories: ["Restraints", "Latex"],

	Layers: ToLayerMap([
		{
			Name: "BallSuitHead", Layer: "InflatableHead", Pri: 50.1,
			Invariant: true,
			EraseSprite: "BallSuitHead",
			EraseInvariant: true,
			EraseLayers: ToMap(["HairHelmet"]),
		},
	])
});

AddModel({
	Name: "MagicSoapBubble",
	Folder: "SoapBubble",
	TopLevel: true,
	Group: "Devices",
	Restraint: true,
	Categories: ["Restraints", "Furniture", "Latex"],
	AddPose: ["UprightHogtie", "PreferKneel", "ShiftRight"],
	Layers: ToLayerMap([
		{
			Name: "MagicSoapBubble", Layer: "FurnitureFront", Pri: -40,
			Invariant: true,
			OffsetY: 350,
			EraseSprite: "Bubble",
			EraseLayers: ToMap(["Bubble"]),
		},
	])
});

AddModel({
	Name: "NTBubble",
	Folder: "SoapBubble",
	TopLevel: true,
	Group: "Devices",
	Restraint: true,
	Categories: ["Restraints", "Furniture", "Latex"],
	AddPose: ["UprightHogtie", "PreferKneel", "ShiftRight"],
	Layers: ToLayerMap([
		{
			Name: "NTBubble", Layer: "FurnitureFront",
			Invariant: true,
			OffsetY: 350,
			EraseSprite: "Bubble",
			EraseLayers: ToMap(["Bubble"]),
		},
	])
});

AddModel({
	Name: "SoapBubble",
	Folder: "SoapBubble",
	TopLevel: true,
	Group: "Devices",
	Restraint: true,
	Categories: ["Restraints", "Furniture"],
	AddPose: ["UprightHogtie", "PreferKneel", "ShiftRight"],
	Layers: ToLayerMap([
		{
			Name: "MagicSoapBubble", Layer: "FurnitureFront", Pri: -40,
			Invariant: true,
			OffsetY: 350,
			EraseSprite: "Bubble",
			EraseLayers: ToMap(["Bubble"]),
		},
	])
});



AddModel({
	Name: "BubbleGag",
	Folder: "BubbleGag",
	TopLevel: true,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints", "Gags"],
	AddPose: ["StuffMouth", "FaceGag"],
	Layers: ToLayerMap([
		{
			Name: "BubbleGag", Layer: "GagUnder", Pri: -100,
			HidePoses: ToMap(["HideMouth"]),
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
	])
});

AddModel({
	Name: "LatexPlugGag",
	Folder: "Gags",
	TopLevel: false,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints", "Gags", "Latex"],
	AddPose: ["FaceCoverGag"],
	AddPoseConditional: {
		Xray: ["HideMouth",],
	},
	Layers: ToLayerMap([
		{
			Name: "LatexHole", Layer: "GagFlat", Pri: 30,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{
			Name: "Mouth", Layer: "Gag", Pri: 29.1,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
	])
});


AddModel({
	Name: "LatexPlugGagClosed",
	Folder: "Gags",
	TopLevel: false,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints", "Gags", "Latex"],
	AddPose: ["FaceCoverGag"],
	AddPoseConditional: {
		Xray: ["HideMouth",],
	},
	Layers: ToLayerMap([
		{
			Name: "LatexHole", Layer: "GagFlat", Pri: 30,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{
			Name: "Closed", Layer: "GagMuzzle", Pri: 14.1,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{
			Name: "Mouth", Layer: "Gag", Pri: 14,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
	])
});

AddModel({
	Name: "LatexJacket",
	Folder: "Straitjacket",
	TopLevel: true,
	Restraint: true,
	Categories: ["Restraints", "Jacket", "Leather"],
	AddPose: ["EncaseTorsoUpper", "EncaseChest"],
	Layers: ToLayerMap([
		{
			Name: "Upeer", Layer: "SleeveLeft", Pri: 90,
			//Poses: ToMap(["Wristtie", "Boxtie", "Crossed"]),
			/*
			SwapLayerPose: {Crossed: "SleevesCrossArms"},
			HidePoses: ToMap(["WrapArms"]),
			GlobalDefaultOverride: ToMap(["Crossed"]),
			*/
			Invariant: true,

		},
		{
			Name: "Loweer", Layer: "SuitChestOver", Pri: 80,
			//Poses: ToMap(["Wristtie", "Boxtie", "Crossed"]),
			/*
			HidePoses: ToMap(["WrapChest"]),
			GlobalDefaultOverride: ToMap(["Crossed"]),
			*/
			//DisplacementSprite: "Jacket",
			//DisplaceAmount: 70,
			//DisplaceLayers: ToMap(["ArmsAll"]),
			Invariant: true,

		},
	])
});

//KronosBubble

/*
AddModel({
	Name: "BubbleKronos1",
	Folder: "BubbleKronos",
	TopLevel: false,
	Group: "Devices",
	Restraint: true,
	Categories: ["Restraints","Furniture"],
	AddPose: ["BubbleHogtie", "PreferKneel", "ShiftRight"],
	Layers: ToLayerMap([
		{ Name: "BubbleKronos1", Layer: "FurnitureFront", Pri: -40,
			Invariant: true,
			EraseSprite: "Bubble",
			EraseLayers: ToMap(["Bubble"]),
		},
	])
});
*/
AddModel({
	Name: "BubbleKronos1",
	Folder: "BubbleKronos1",
	TopLevel: false,
	Restraint: true,
	Categories: ["Restraints",],
	AddPose: [],
	Layers: ToLayerMap([
		{
			Name: "BubbleKronos1", Layer: "FurnitureFront", Pri: -39,
			//Poses: ToMap([...FOOTRIGHTPOSES]),
			Invariant: true,
			MorphPoses: { Hogtie: "Hogtie", Kneel: "Kneel", KneelClosed: "Kneel", },

			//DisplacementSprite: "AnkleCuffRight",
			//DisplaceLayers: ToMap(["LegCuffs"]),
		},
	])
});
/*
AddModel({
	Name: "BubbleKronos2",
	Folder: "BubbleKronos",
	TopLevel: false,
	Group: "Devices",
	Restraint: true,
	Categories: ["Restraints","Furniture"],
	AddPose: ["BubbleHogtie", "PreferKneel", "ShiftRight"],
	Layers: ToLayerMap([
		{ Name: "BubbleKronos2", Layer: "FurnitureFront", Pri: -40,
			Invariant: true,
			EraseSprite: "Bubble",
			EraseLayers: ToMap(["Bubble"]),
		},
	])
});
*/
AddModel({
	Name: "BubbleKronos2Boots",
	Folder: "BubbleKronos2",
	TopLevel: true,
	Restraint: true,
	Categories: ["Restraints",],
	AddPose: [],
	Layers: ToLayerMap([
		{
			Name: "BubbleKronos2Boots", Layer: "FurnitureFront", Pri: -39,
			//Poses: ToMap([...FOOTRIGHTPOSES]),
			Invariant: true,
			MorphPoses: { Hogtie: "Hogtie", Kneel: "Kneel", KneelClosed: "Kneel", },

			//透過関係
			//DisplacementSprite: "AnkleCuffRight",
			//DisplaceLayers: ToMap(["LegCuffs"]),
		},
	])
});
AddModel({
	Name: "BubbleKronos2Shoulder",
	Folder: "BubbleKronos2",
	Restraint: true,
	Categories: ["Restraints",],
	Layers: ToLayerMap([
		{
			Name: "BubbleKronos2Shoulder", Layer: "FurnitureFront", Pri: -37,
			//Poses: ToMapSubtract([...ARMPOSES], [...HIDEARMPOSES, "Up"], "Hogtie"),
			//MorphPoses: {Yoked: "Yoked", Hogtie: "Hogtie", Wristtie: "Free", Boxtie: "Free", Front: "Free", Crossed: "Free"},
			Invariant: true,
			MorphPoses: { Hogtie: "Hogtie", Kneel: "Kneel", KneelClosed: "Kneel", },

			//DisplacementSprite: "AnkleCuffRight",
			//DisplaceLayers: ToMap(["LegCuffs"]),
		},
	])
});
/*
AddModel({
	Name: "BubbleKronos3",
	Folder: "BubbleKronos",
	TopLevel: false,
	Group: "Devices",
	Restraint: true,
	Categories: ["Restraints","Furniture"],
	AddPose: ["BubbleHogtie", "PreferKneel", "ShiftRight"],
	Layers: ToLayerMap([
		{ Name: "BubbleKronos3", Layer: "FurnitureFront", Pri: -40,
			Invariant: true,
			EraseSprite: "Bubble",
			EraseLayers: ToMap(["Bubble"]),
		},
	])
});
*/








AddModel({
	Name: "BubbleKronos3Shoulder",
	Folder: "BubbleKronos3",
	Categories: ["Restraints"],
	Layers: ToLayerMap([
		{
			Name: "BubbleKronos3Shoulder", Layer: "FurnitureFront", Pri: -38,
			//Poses: ToMapSubtract([...ARMPOSES], [...HIDEARMPOSES, "Up"], "Hogtie"),
			//MorphPoses: {Yoked: "Yoked", Hogtie: "Hogtie", Wristtie: "Free", Boxtie: "Free", Front: "Free", Crossed: "Free"},
			Invariant: true,
			MorphPoses: { Hogtie: "Hogtie", Kneel: "Kneel", KneelClosed: "Kneel", },

			/*
			Name: "BubbleKronos3Shoulder", Layer: "Shoulders", Pri: 90,
			Poses: ToMapSubtract([...ARMPOSES], [...HIDEARMPOSES, "Up"], "Hogtie"),
			MorphPoses: { Yoked: "Yoked", Hogtie: "Hogtie", Wristtie: "Free", Boxtie: "Free", Front: "Free", Crossed: "Free" },
			HideWhenOverridden: true,
			*/
		},
	])
});

AddModel({
	Name: "BubbleKronos3Boots",
	Folder: "BubbleKronos3",
	TopLevel: false,
	Restraint: true,
	Categories: ["Restraints",],
	AddPose: ["PreferKneel", "FeetLinked"],
	Layers: ToLayerMap([
		{
			Name: "BubbleKronos3Boots", Layer: "FurnitureFront", Pri: -39,
			//Poses: ToMap(["Closed", "KneelClosed",]),
			GlobalDefaultOverride: ToMap(["KneelClosed"]),
			//DisplacementSprite: "TapeAnklesSquish",
			//DisplaceLayers: ToMap(["RopeCalf"]),
			Invariant: true,
			MorphPoses: { Hogtie: "Hogtie", Kneel: "Kneel", KneelClosed: "Kneel", },


		},
	])
});


AddModel({
	Name: "BubbleKronos4Crotch",
	Folder: "BubbleKronos4",
	TopLevel: false,
	Restraint: true,
	Categories: ["Restraints",],
	/*
	AddPoseConditional: {
		OptionCrotchRope: ["CrotchStrap"],
	},
	AddPoseIf: {
		//ChastityBelt: ["OptionCrotchRope"],
	},
	*/
	Layers: ToLayerMap([
		{
			Name: "BubbleKronos4Crotch", Layer: "FurnitureFront", Pri: -39,
			SwapLayerPose: { OptionCrotchRope: "CrotchRope" },
			Invariant: true,
			DisplacementInvariant: true,
			DisplacementSprite: "CrotchropeSquished",
			MorphPoses: { Hogtie: "Hogtie", Kneel: "Kneel", KneelClosed: "Kneel", },


		},
	])
});
AddModel({
	Name: "BubbleKronos4HandFront",
	Folder: "BubbleKronos4",
	TopLevel: true,
	Restraint: true,
	Categories: ["Restraints", "Cuffs", "Handcuffs"],
	Layers: ToLayerMap([
		{
			Name: "BubbleKronos4HandFront", Layer: "FurnitureFront", Pri: -39,
			MorphPoses: { Hogtie: "Hogtie", Kneel: "Kneel", KneelClosed: "Kneel", },

			Invariant: true,
		},
	])
});



AddModel({
	Name: "BubbleKronos4Boots",
	Folder: "BubbleKronos4",
	TopLevel: true,
	Restraint: true,
	Categories: ["Restraints",],
	AddPose: [/*"UprightHogtie",*/ "PreferKneel", "FeetLinked"],

	Layers: ToLayerMap([
		{
			Name: "BubbleKronos4Boots", Layer: "FurnitureFront", Pri: 72,
			//Poses: ToMap(["Closed", "KneelClosed",]),
			MorphPoses: { Hogtie: "Hogtie", Kneel: "Kneel", KneelClosed: "Kneel", },

			Invariant: true,
			//DisplacementSprite: "AnkleCuffRight",
			//DisplaceLayers: ToMap(["LegCuffs"]),
		},
	])
});

AddModel({
	Name: "BubbleKronos5",
	Folder: "BubbleKronos5",
	TopLevel: true,
	Group: "Devices",
	Restraint: true,
	Categories: ["Restraints", "Furniture"],
	AddPose: [/*"SuspendedHogtie",*/ /*"ForceStand",*/ /*"FeetLinked",*/ /*"BlockKneel"*/],
	Layers: ToLayerMap([
		{
			Name: "BubbleKronos5", Layer: "FurnitureFront", Pri: -40,
			Invariant: true,
			MorphPoses: { Hogtie: "Hogtie", Kneel: "Kneel", KneelClosed: "Kneel", },

		},
	])
});


//bubblemittens


AddModel({
	Name: "BubbleMittensLeft",
	Folder: "BubbleMitts",
	Categories: ["Gloves", "Mittens", "Restraints"],
	Restraint: true,
	AddPose: ["Mittens"],
	Layers: ToLayerMap([
		{
			Name: "BubbleMittensLeft", Layer: "MittenLeft", Pri: 100,
			Poses: ToMapSubtract([...ARMPOSES], ["Wristtie", "Boxtie", "Up"]),
			GlobalDefaultOverride: ToMap(["Front", "Crossed"]),
			SwapLayerPose: { Crossed: "CrossMittenLeft", Front: "ForeMittenLeft" },
			Invariant: true,

			//EraseSprite: "Mitts",
			//EraseLayers: ToMap(["Mitts"]),
		},
	])
});

AddModel({
	Name: "BubbleMittensRight",
	Folder: "BubbleMitts",
	Categories: ["Gloves", "Mittens", "Restraints"],
	Restraint: true,
	AddPose: ["Mittens"],
	Layers: ToLayerMap([
		{
			Name: "BubbleMittensRight", Layer: "MittenRight", Pri: 100,
			Poses: ToMap([...ARMPOSES]),
			GlobalDefaultOverride: ToMap(["Front", "Crossed"]),
			Invariant: true,

			//EraseSprite: "Mitts",
			//EraseLayers: ToMap(["Mitts"]),
		},
	])
});

AddModel({
	Name: "BubbleMittens",
	Folder: "BubbleMitts",
	TopLevel: true,
	Categories: ["Gloves", "Mittens", "Restraints"],
	Restraint: true,
	AddPose: ["Mittens"],
	Layers: ToLayerMap([
		...GetModelLayers("BubbleMittensLeft"),
		...GetModelLayers("BubbleMittensRight"),
	])

});


//accessoires

AddModel({
	Name: "BubbleHairOrnaments",
	Folder: "BubbleKronos",
	TopLevel: false,
	Protected: true,
	Categories: ["Restraints"],
	Layers: ToLayerMap([
		{
			Invariant: true,
			Name: "BubbleHairOrnaments",
			Layer: "HairFront",
			Pri: 20.5,
			NoOverride: true,
		},
	])
});

AddModel(GetModelRestraintVersion("BubbleHairOrnaments", true));

//WeaponModel

AddModel({
	Name: "BubbleWand",
	Folder: "Weapon",
	TopLevel: true,
	Protected: false,
	Categories: ["Weapon"],
	Layers: ToLayerMap([{
		Name: "BubbleWand",
		Layer: "Weapon",
		Pri: 0,
		NoOverride: true,
		Poses: {
			Free: true
		},
	},
	]),
})



