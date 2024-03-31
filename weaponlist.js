KinkyDungeonWeapons["BubbleKatana"] = {
    name: "BubbleKatana",
    dmg: 1.0,
    bind: 1.5,
    bindEff: 0,
    bindType: "Soap",
    chance: 1.3,
    staminacost: 2.0,
    type: "slash",
    unarmed: false,
    rarity: 3,
    shop: true,
    tags: ["sword", "bondage"],
    sfx: "LightSwing",
    events: [
        { type: "Patience", trigger: "tick", power: 11, buffType: "KatanaCharge", color: "#ffffff" },
        { type: "BubbleKatanaBoost", trigger: "beforePlayerAttack", power: 0.25, sfx: "Fwoosh", duration: 12, damage: "stun" },
    ]
}

KinkyDungeonWeapons["BubbleMachineGun"] = {
    name: "BubbleMachineGun",
    dmg: 4.5,
    chance: 1.0,
    crit: 1.1,
    staminacost: 6.5,
    type: "crush",
    unarmed: false,
    rarity: 4,
    shop: false,
    sfx: "HeavySwing",
    tags: ["ranged", "Soap", "CanModel"],
    events: [
        { type: "Reload", trigger: "tick", requireEnergy: true, energyCost: 0.01, power: 3, color: "#ffffff", prereq: "HeavyLoad" },
        { type: "Unload", trigger: "playerCastSpecial", power: 0, mult: 0 },
        { type: "Knockback", trigger: "playerAttack", dist: 1, },
    ],
    special: { type: "spell", spell: "PlayerBubbleMinigun", prereq: "Loaded", requiresEnergy: true, energyCost: 0.03, range: 12 },
}

KinkyDungeonWeapons["IMBubbleMachineGun"] = {
    name: "IMBubbleMachineGun",
    dmg: 3.5,
    chance: 1.0,
    crit: 1.1,
    staminacost: 6.0,
    type: "crush",
    unarmed: false,
    rarity: 4,
    shop: false,
    sfx: "HeavySwing",
    tags: ["ranged", "Soap", "CanModel"],
    events: [
        { type: "BubblingWeapon", trigger: "playerCastSpecial", power: 0 },
        { type: "Knockback", trigger: "playerAttack", dist: 1, },
    ],

    special: { type: "spell", spell: "PlayerIMBubbleMinigun", requiresEnergy: true, energyCost: 0.04, range: 12 },
}

KDEventMapWeapon["playerCastSpecial"]["BubblingWeapon"] = (e, data) => {
    let random = Math.floor(Math.random() * 100) + 1
    console.log(random)
    if (random > 95) {//5% chance
        KinkyDungeonAddRestraintIfWeaker("BubbleKronos4HandFront", 12, false, undefined, false, false, undefined, undefined);
        KinkyDungeonSendTextMessage(5, TextGet("KinkyDungeonRubberBulletsAttach"), "#ff0000", 2);
    }
}

KinkyDungeonWeapons["BubbleWand"] = {
    name: "BubbleWand",
    dmg: 0.5,
    chance: 1.0,
    crit: 1.1,
    bind: 3.0,
    staminacost: 6.0,
    type: "crush",
    bindType: "Soap",
    unarmed: false,
    rarity: 4,
    shop: false,
    sfx: "Shock",
    tags: ["ranged", "Soap", "CanModel"],
    events: [
        { type: "IsGagged", trigger: "tick" },
        { type: "drawBubbleWand", trigger: "tick", },
    ],

    special: { type: "spell", spell: "PlayerBlowBubble", requiresEnergy: true, energyCost: 0.001, range: 12 },
}
KDEventMapWeapon["tick"]["IsGagged"] = (e, data) => {
    if (KinkyDungeonGagTotal() > 0.0) {
        KinkyDungeonWeapons["BubbleWand"] = {
            name: "BubbleWand",
            dmg: 0.5,
            chance: 1.0,
            crit: 1.1,
            bind: 3.0,
            staminacost: 6.0,
            type: "arcane",
            bindType: "Soap",
            unarmed: false,
            rarity: 4,
            shop: false,
            sfx: "HeavySwing",
            tags: ["ranged", /*"Soap"*/, "CanModel"],
            events: [
                { type: "drawBubbleWand", trigger: "dressRestraints" },
                { type: "ApplyBubble", trigger: "playerAttack", power: 1, duration: 10, damage: "stun" },
                { type: "Knockback", trigger: "playerAttack", dist: 1, },
                { type: "IsGagged", trigger: "tick" },
                { type: "BubbleReflection", trigger: "playerCastSpecial" },
                //if (KinkyDungeonGagTotal() > 0.9) {},
            ],
            special: { type: "spell", spell: "GaggedBlowBubble", requiresEnergy: true, energyCost: 0.015, range: 12 },
        }
    }
    else {
        KinkyDungeonWeapons["BubbleWand"] = {
            name: "BubbleWand",
            dmg: 0.5,
            chance: 1.0,
            crit: 1.1,
            bind: 3.0,
            staminacost: 6.0,
            type: "arcane",
            bindType: "Soap",
            unarmed: false,
            rarity: 4,
            shop: false,
            sfx: "HeavySwing",
            tags: ["ranged", /*"Soap",*/ "CanModel"],
            events: [
                { type: "drawBubbleWand", trigger: "dressRestraints" },
                { type: "ApplyBubble", trigger: "playerAttack", power: 1, duration: 10, damage: "stun" },
                { type: "Knockback", trigger: "playerAttack", dist: 1, },
                { type: "IsGagged", trigger: "tick" },
                { type: "BubbleReflection", trigger: "playerCastSpecial" },
            ],
            special: { type: "spell", spell: "PlayerBlowBubble", requiresEnergy: true, energyCost: 0.001, range: 12 },
        }
    }
}

KDEventMapWeapon["playerCastSpecial"]["BubbleReflection"] = (e, weapon, data) => {
    if (KinkyDungeonPlayerTags.get("ModBubble")) {
        KinkyDungeonAddRestraintIfWeaker("SquishBubble", 12, false, undefined, false, false, undefined, undefined);
        KinkyDungeonSendTextMessage(10, TextGet("BubbleRefrection"), "#ffffff", 1);
    }
}
