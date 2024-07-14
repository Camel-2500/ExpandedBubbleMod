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
	Folder: "Inflatable",
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
	Name: "ClamTrap",
	Folder: "ClamTrap",
	TopLevel: true,
	Group: "Devices",
	Restraint: true,
	Categories: ["Restraints", "Furniture"],
	AddPose: [],
	Layers: ToLayerMap([

		{
			Name: "ClamBedTrapOpenFrontFront", Layer: "FurnitureFront", Pri: 40,
			Invariant: true,
			//EraseSprite: "Bubble",
			OffsetX: -100,
			OffsetY: 350,
		},
		{
			Name: "ClamBedTrapOpenFront", Layer: "FurnitureBack", Pri: -40.9,
			Invariant: true,
			//EraseSprite: "Bubble",
			OffsetX: -100,
			OffsetY: 350,
		},

		{
			Name: "ClamBedTrapOpenBack", Layer: "FurnitureBack", Pri: -41,
			Invariant: true,
			//EraseSprite: "Bubble",
			//EraseLayers: ToMap(["Bubble"]),
			OffsetX: -100,
			OffsetY: 350,
		},
	])
});


AddModel({
	Name: "ClamChest",
	Folder: "ClamTrap",
	TopLevel: true,
	Group: "Devices",
	Restraint: true,
	Categories: ["Restraints", "Furniture"],
	AddPose: [],
	Layers: ToLayerMap([

		{
			Name: "ClamChestTrapOpenFrontFront", Layer: "FurnitureFront", Pri: 40,
			Invariant: true,
			//EraseSprite: "Bubble",
			OffsetX: -100,
			OffsetY: 350,
		},
		{
			Name: "ClamChestTrapOpenFront", Layer: "FurnitureBack", Pri: -40.9,
			Invariant: true,
			//EraseSprite: "Bubble",
			OffsetX: -100,
			OffsetY: 350,
		},

		{
			Name: "ClamChestTrapOpenBack", Layer: "FurnitureBack", Pri: -41,
			Invariant: true,
			//EraseSprite: "Bubble",
			//EraseLayers: ToMap(["Bubble"]),
			OffsetX: -100,
			OffsetY: 350,
		},
	])
});

AddModel({
	Name: "ClamBedClosed",
	Folder: "ClamTrap",
	TopLevel: true,
	Group: "Devices",
	Restraint: true,
	Categories: ["Restraints", "Furniture"],
	AddPose: [],
	Layers: ToLayerMap([
		{
			Name: "ClamBedTrapCloseB", Layer: "FurnitureFront", Pri: 80,
			Invariant: true,
			EraseSprite: "ClamTrap",
			OffsetX: -100,
			OffsetY: 50,
			//HidePoses: ToMap(["Xray"]),
		}
	])
});

AddModel({
	Name: "ClamChestClosed",
	Folder: "ClamTrap",
	TopLevel: true,
	Group: "Devices",
	Restraint: true,
	Categories: ["Restraints", "Furniture"],
	AddPose: [],
	Layers: ToLayerMap([
		{
			Name: "ClamChestTrapCloseBB", Layer: "FurnitureFront", Pri: 80,
			Invariant: true,
			EraseSprite: "ClamTrap",
			OffsetX: -350,
			OffsetY: 325,
			//HidePoses: ToMap(["Xray"]),
		}
	])
});

AddModel({
	Name: "Pearl",
	Folder: "ClamTrap",
	TopLevel: false,
	Group: "Devices",
	Restraint: true,
	Categories: ["Restraints", "Furniture"],
	AddPose: ["UprightHogtie", "PreferKneel", "ShiftRight"],
	Layers: ToLayerMap([
		{
			Name: "PearlFront", Layer: "FurnitureFront", Pri: -40,
			Invariant: true,
			OffsetX: -150,
			OffsetY: 500,
			EraseSprite: "Bubble",
			EraseLayers: ToMap(["Bubble"]),
		},
		{
			Name: "PearlBack", Layer: "FurnitureBack", Pri: -40,
			Invariant: true,
			OffsetX: -150,
			OffsetY: 500,
			EraseSprite: "Bubble",
			EraseLayers: ToMap(["Bubble"]),
		},
	])
});


AddModel({
	Name: "MagicSoapBubble",
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
	Name: "NTBubble",
	Folder: "SoapBubble",
	TopLevel: true,
	Group: "Devices",
	Restraint: true,
	Categories: ["Restraints", "Furniture"],
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
	AddPose: ["FaceCoverGag", "StuffMouth"],
	AddPoseConditional: {
		Xray: ["HideMouth",],
	},
	Layers: ToLayerMap([
		{
			Name: "LatexMaskHole", Layer: "GagFlat", Pri: 4.8,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{
			Name: "Tongue", Layer: "GagFlat", Pri: 4.9,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{
			Name: "Tongue2", Layer: "Gag", Pri: 4,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{
			Name: "NoPluged", Layer: "Gag", Pri: 3.9,
			HidePoses: ToMap(["HideMouth"]),
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},

	])
});

AddModel(GetModelRestraintVersion("LatexPlugGag", true));

AddModel({
	Name: "BADLatexPlugGag",
	Folder: "Gags",
	TopLevel: false,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints", "Gags", "Latex"],
	AddPose: ["FaceCoverGag", "StuffMouth"],
	AddPoseConditional: {
		Xray: ["HideMouth",],
	},
	Layers: ToLayerMap([
		{
			Name: "LatexMaskHole", Layer: "GagFlat", Pri: 4.7,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{
			Name: "Tongue", Layer: "GagFlat", Pri: 4.8,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{
			Name: "Tongue2", Layer: "Gag", Pri: 4,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{
			Name: "NoPluged", Layer: "Gag", Pri: 3.9,
			HidePoses: ToMap(["HideMouth"]),
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{
			Name: "BreathAndDrool", Layer: "GagFlat", Pri: 4.9,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},

	])
});

AddModel(GetModelRestraintVersion("BADLatexPlugGag", true));

AddModel({
	Name: "LatexPlugGagClosed",
	Folder: "Gags",
	TopLevel: false,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints", "Gags", "Latex"],
	AddPose: ["FaceCoverGag", "StuffMouth"],
	AddPoseConditional: {
		Xray: ["HideMouth",],
	},
	Layers: ToLayerMap([
		{
			Name: "LatexMaskHole", Layer: "GagFlat", Pri: 4.8,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{
			Name: "Plug", Layer: "GagFlatStraps", Pri: 4.9,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{
			Name: "Pluged", Layer: "Gag", Pri: 4,
			HidePoses: ToMap(["HideMouth"]),
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},

	])
});

AddModel(GetModelRestraintVersion("LatexPlugGagClosed", true));

AddModel({
	Name: "MuzzlePlugGag",
	Folder: "Gags",
	TopLevel: false,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints", "Gags", "Latex"],
	AddPose: ["FaceCoverGag", "StuffMouth"],
	AddPoseConditional: {
		Xray: ["HideMouth",],
	},
	Layers: ToLayerMap([
		{
			Name: "MuzzleHole", Layer: "GagFlat", Pri: 4.8,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{
			Name: "Tongue", Layer: "GagFlat", Pri: 4.9,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{
			Name: "Tongue2", Layer: "Gag", Pri: 4,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{
			Name: "NoPluged", Layer: "Gag", Pri: 3.9,
			HidePoses: ToMap(["HideMouth"]),
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},

	])
});

AddModel({
	Name: "BADMuzzlePlugGag",
	Folder: "Gags",
	TopLevel: false,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints", "Gags", "Latex"],
	AddPose: ["FaceCoverGag", "StuffMouth"],
	AddPoseConditional: {
		Xray: ["HideMouth",],
	},
	Layers: ToLayerMap([
		{
			Name: "MuzzleHole", Layer: "GagFlat", Pri: 4.7,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{
			Name: "Tongue", Layer: "GagFlat", Pri: 4.8,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{
			Name: "Tongue2", Layer: "Gag", Pri: 4,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{
			Name: "NoPluged", Layer: "Gag", Pri: 3.9,
			HidePoses: ToMap(["HideMouth"]),

			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{
			Name: "BreathAndDrool", Layer: "GagFlat", Pri: 4.9,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},

	])
});

AddModel({
	Name: "MuzzlePlugGagClosed",
	Folder: "Gags",
	TopLevel: false,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints", "Gags", "Latex"],
	AddPose: ["FaceCoverGag", "StuffMouth"],
	AddPoseConditional: {
		Xray: ["HideMouth",],
	},
	Layers: ToLayerMap([
		{
			Name: "MuzzleHole", Layer: "GagFlat", Pri: 4.8,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{
			Name: "Plug", Layer: "GagFlatStraps", Pri: 4.9,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{
			Name: "Pluged", Layer: "Gag", Pri: 4,
			HidePoses: ToMap(["HideMouth"]),
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},

	])
});





//コルセットとかあると、表示おかしくなるきっと、元のやつでいうストラップ的なものが必要
AddModel({
	Name: "LatexJacket",
	Folder: "Straitjacket",
	TopLevel: true,
	Restraint: true,
	Categories: ["Restraints", "Jacket",],
	AddPose: ["EncaseTorsoUpper", "EncaseChest", "HideHands"],
	Layers: ToLayerMap([
		{
			Name: "Arms", Layer: "SleeveLeft", Pri: 90,
			HidePoses: ToMap(["WrapArms"]),
			SwapLayerPose: { Crossed: "SleevesCrossArms" },
			GlobalDefaultOverride: ToMap(["Crossed"]),
			//Poses: ToMap(["Wristtie", "Boxtie", "Crossed"]),
			SwapLayerPose: { Crossed: "SleevesCrossArms" },
			Invariant: true,
		},
		{
			Name: "Chest", Layer: "SuitChestOver", Pri: 80,
			HidePoses: ToMap(["WrapChest"]),
			GlobalDefaultOverride: ToMap(["Crossed"]),
			DisplacementSprite: "Jacket",
			//DisplaceAmount: 70,
			//DisplaceLayers: ToMap(["ArmsAll"]),
			GlobalDefaultOverride: ToMap(["Crossed"]),
			Invariant: true,
		},
		{
			Name: "BinderTorsoLowers",
			Layer: "Corset",
			Pri: 30,
			Invariant: true,
		},
		{
			Name: "BeltsChestCrossed2mm", Layer: "BindChest", Pri: -10,
			NoOverride: true,
			Poses: ToMap(["Wristtie", "Boxtie", "Crossed"]),
			GlobalDefaultOverride: ToMap(["Crossed"]),
			Invariant: true,
			HidePoses: ToMap(["WrapChest"]),
		},

	])
});
AddModel({
	Name: "LatexNoChestJacket",
	Folder: "StraitjacketNoChest",
	TopLevel: true,
	Restraint: true,
	Categories: ["Restraints", "Jacket",],
	AddPose: ["EncaseTorsoUpper", "EncaseChest", "HideHands"],
	Layers: ToLayerMap([
		{
			Name: "Arms", Layer: "SleeveLeft", Pri: 90,
			HidePoses: ToMap(["WrapArms"]),
			SwapLayerPose: { Crossed: "SleevesCrossArms" },
			GlobalDefaultOverride: ToMap(["Crossed"]),
			//Poses: ToMap(["Wristtie", "Boxtie", "Crossed"]),
			SwapLayerPose: { Crossed: "SleevesCrossArms" },
			Invariant: true,
		},
		{
			Name: "Chest", Layer: "SuitOver", Pri: 80,
			HidePoses: ToMap(["WrapChest"]),
			GlobalDefaultOverride: ToMap(["Crossed"]),
			DisplacementSprite: "Jacket",
			//DisplaceAmount: 70,
			//DisplaceLayers: ToMap(["ArmsAll"]),
			GlobalDefaultOverride: ToMap(["Crossed"]),
			Invariant: true,
		},
		{
			Name: "BinderTorsoLowers",
			Layer: "Corset",
			Pri: 30,
			Invariant: true,
		},
	])
});

AddModel({
	Name: "LatexLegbinder",
	Folder: "Rubber",
	Parent: "Rubber",
	TopLevel: true,
	Restraint: true,
	Categories: ["Restraints", "Rubber"],
	AddPose: ["FeetLinked", "EncaseTorsoLower", "EncaseLegs", "FeetLinked", "EncaseAnkles", "EncaseFeet"],
	Layers: ToLayerMap([
		...GetModelLayers("RubberThighs"),
		...GetModelLayers("RubberTorsoLower"),
		...GetModelLayers("RubberFeet"),
		...GetModelLayers("RubberBoots"),
	])
});

AddModel({
	Name: "BubbleKronos1",
	Folder: "BubbleKronos1",
	TopLevel: true,
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
			//GlobalDefaultOverride: ToMap(["KneelClosed"]),
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
			Name: "BubbleKronos4Boots", Layer: "InflatableLegs", Pri: 72,
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
	AddPose: [],
	Layers: ToLayerMap([
		{
			Name: "BubbleMittensLeft", Layer: "MittenLeft", Pri: 100,
			//Poses: ToMapSubtract([...ARMPOSES], ["Wristtie", "Boxtie", "Up"]),
			//GlobalDefaultOverride: ToMap(["Front", "Crossed"]),
			//SwapLayerPose: { Crossed: "CrossMittenLeft", Front: "ForeMittenLeft" },
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
	//AddPose: [],
	Layers: ToLayerMap([
		{
			Name: "BubbleMittensRight", Layer: "MittenRight", Pri: 100,
			//Poses: ToMap([...ARMPOSES]),
			//GlobalDefaultOverride: ToMap(["Front", "Crossed"]),
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
	AddPose: [],
	Layers: ToLayerMap([
		{
			Name: "BubbleMittensLeft", Layer: "MittenLeft", Pri: 100,
			Poses: ToMapSubtract([...ARMPOSES], ["Wristtie", "Boxtie", "Up"]),
			GlobalDefaultOverride: ToMap(["Front", "Crossed"]),
			//SwapLayerPose: { Crossed: "CrossMittenLeft", Front: "ForeMittenLeft" },
			Invariant: true,

			//EraseSprite: "Mitts",
			//EraseLayers: ToMap(["Mitts"]),
		},
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

//mermaid tail

//StrapsUnderbustにしてるが、透過されないレイヤーAnkleなんたらにしとく必要がある
//StrapsUnderbustにしてあるのは、Ankleなんたらだと、股あたりの表示が上手くいかないから
//つまり、股あたりで元画像を分割したほうがいいかも

//結論 
//つまり、nonuseを使用することで、元のポーズを活用することにした
//なので、nonuseを足隠せるよう工夫が必要
//他の方法としては、Erase機能を使って、特定の部位を消去する方法がある
AddModel({
	Name: "BubblyMermaidTail",
	Folder: "BubblyMermaidTail",
	TopLevel: true,
	Restraint: true,
	Categories: ["Restraints",],
	Layers: ToLayerMap([
		{
			Name: "BubblyMermaidTailCrotch", Layer: "WrappingTorsoLower", Pri: 100,
			//Poses: ToMap([...FOOTRIGHTPOSES]),
			Invariant: true,
			MorphPoses: { Hogtie: "Hogtie", Kneel: "Kneel", KneelClosed: "Kneel", },

			//DisplacementSprite: "AnkleCuffRight",
			//DisplaceLayers: ToMap(["LegCuffs"]),
		},
		{
			Name: "BubblyMermaidTailLeg", Layer: "WrappingLegsOver2", Pri: 100,
			//Poses: ToMap([...FOOTRIGHTPOSES]),
			Invariant: true,
			MorphPoses: { Hogtie: "Hogtie", Kneel: "Kneel", KneelClosed: "Kneel", },

			//DisplacementSprite: "AnkleCuffRight",
			//DisplaceLayers: ToMap(["LegCuffs"]),
		},
		{
			Name: "BubblyMermaidTailAnkle", Layer: "WrappingAnklesOver", Pri: 100,
			//Poses: ToMap([...FOOTRIGHTPOSES]),
			Invariant: true,
			MorphPoses: { Hogtie: "Hogtie", Kneel: "Kneel", KneelClosed: "Kneel", },
			EraseMorph: { Closed: "Closed" },
			EraseSprite: "BubbleTail",
			EraseAmount: 100,
			EraseLayers: ToMap(["BalletHeelRight"]),

			//HidePoses: ToMap(["HideFootRightKneel","HideFootLeftHogtie","HideLegRight","HideLegLeft" ]),
			//DisplacementSprite: "AnkleCuffRight",
			//DisplaceLayers: ToMap(["LegCuffs"]),
		},
	])
});

AddModel(GetModelRestraintVersion("BubblyMermaidTail", true));

AddModel({
	Name: "SwimsuitArmbinder",
	Folder: "SwimsuitArmbinder",
	Restraint: true,
	TopLevel: false,
	Parent: "Armbinder",
	AddPose: ["HideHands"],
	Categories: ["Restraints", "Latex", "Armbinders"],
	Layers: ToLayerMap([
		{ 
			Name: "Armbinder", Layer: "BindArmLeft", Pri: 30,
			HideWhenOverridden: true,
			Poses: ToMap(["Wristtie", "Boxtie"]),
			//InheritColor: "Binder",
			DisplacementSprite: "BinderLeft",
			//DisplaceLayers: ToMap(["Arms"]),
			//DisplaceAmount: 100,
			Invariant: true,
		},
		{
			Name: "Straps", Layer: "BindArms", Pri: 30,
		HideWhenOverridden: true,
		Poses: ToMap(["Wristtie", "Boxtie"]),
		//InheritColor: "Straps",
		Invariant: true,
		},
	])
});

/*
AddModel({
	Name: "BeltsFeet1",
	Folder: "Belts",
	Parent: "Belt",
	TopLevel: false,
	Restraint: true,
	Categories: ["Restraints", "Leather"],
	Layers: ToLayerMap([
		{ Name: "Feet1", Layer: "AnklesOver", Pri: 60,
			Invariant: true,
		},
	])
});
AddModel({
	Name: "BeltsLegs1",
	Folder: "Belts",
	Parent: "Belt",
	TopLevel: false,
	Restraint: true,
	Categories: ["Restraints", "Leather"],
	Layers: ToLayerMap([
		{ Name: "Legs1", Layer: "Thighs", Pri: 60,
			Poses: ToMapSubtract([...LEGPOSES], ["Spread"]),
			GlobalDefaultOverride: ToMap(["KneelClosed"]),
			InheritColor: "Belt",
			DisplacementMorph: {Hogtie: "Hogtie", KneelClosed: "KneelClosed"},
			DisplacementSprite: "BeltLegs1Squish",
			DisplaceAmount: 50,
			DisplaceLayers: ToMap(["RibbonThighs"]),
			NoOverride: true,
		},
	])
});

AddModel({
	Name: "BeltsArms1",
	Folder: "Belts",
	Parent: "Belt",
	TopLevel: false,
	Restraint: true,
	Categories: ["Restraints", "Leather"],
	Layers: ToLayerMap([
		{ Name: "Arms1", Layer: "BindChest", Pri: 50,
			InheritColor: "Belt",
			DisplacementSprite: "Arm2Squish",
			DisplacementMorph: {Boxtie: "Boxtie",Wristtie: "Wristtie",Front: "Boxtie",Crossed: "Boxtie",},
			DisplaceLayers: ToMap(["Ribbon1"]),
			Invariant: true,
			NoOverride: true,
		},
		{ Name: "LeftArm1", Layer: "BindArmLeft", Pri: 60,
			InheritColor: "Belt",
			Poses: ToMap(["Wristtie", "Boxtie"]),
			NoOverride: true,
		},
		{ Name: "RightArm1", Layer: "BindArmRight", Pri: 60,
			InheritColor: "Belt",
			Poses: ToMap(["Wristtie", "Boxtie"]),
			NoOverride: true,
		},
	])
});
*/

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



