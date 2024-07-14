//For traps
KinkyDungeonSpellListEnemies.push(
    {
        faction: "Trap",
        enemySpell: true,
        name: "SquishBubble",
        sfx: "Grope",
        manacost: 6,
        components: [],
        level: 1,
        type: "inert",
        onhit: "aoe",
        passthrough: true,
        noTerrainHit: true,
        time: 5,
        delay: 2,
        power: 4,
        range: 2,
        size: 3,
        aoe: 1.5,
        lifetime: 1,
        damage: "Soap",
        playerEffect: { name: "TrapBindings", text: "KinkyDungeonTrapBindingsLatexBubble", tags: ["latexSphere"],/*tagはenemytagのほう*/ power: 6, count: 1 }
    },
    {
        faction: "Trap",
        enemySpell: true,
        name: "",
        sfx: "Grope",
        manacost: 6,
        components: [],
        level: 1,
        type: "inert",
        onhit: "aoe",
        passthrough: true,
        noTerrainHit: true,
        time: 5,
        delay: 2,
        power: 4,
        range: 2,
        size: 3,
        aoe: 1.5,
        lifetime: 1,
        damage: "Soap",
        playerEffect: { name: "TrapBindings", text: "KinkyDungeonTrapBindingsLatexBubble", tags: ["latexSphere"],/*tagはenemytagのほう*/ power: 6, count: 1 }
    },
    {
        faction: "Trap",
        enemySpell: true,
        name: "TrapSwimsuit",
        sfx: "Grope",
        manacost: 6,
        components: [],
        level: 1,
        type: "inert",
        onhit: "aoe",
        passthrough: true,
        noTerrainHit: true,
        time: 5,
        delay: 2,
        power: 4,
        range: 2,
        size: 3,
        aoe: 1.5,
        lifetime: 1,
        damage: "Soap",
        playerEffect: { name: "TrapBindings", text: "KinkyDungeonTrapBindingsLatexBubble", tags: ["swimsuit"],/*tagはenemytagのほう*/ power: 6, count: 1 }
    },
)




KinkyDungeonMapParams.cst.traps = [

    {Name: "SpecificSpell", Spell: "TrapSwimsuit", Level: 0, Power: 3, Weight: 100},


    { Name: "SpecificSpell", Spell: "TrapLatexBubble", Level: 0, Power: 3, Weight: 100 },
    { Name: "SpecificSpell", Spell: "TrapLatexBall", Level: 0, Power: 3, Weight: 75 },

    {Name: "SpecificSpell", Spell: "TrapRopeWeak", Level: 0, Power: 3, Weight: 5},
    {Name: "SpecificSpell", Spell: "TrapRopeStrong", Level: 0, Power: 3, Weight: 5},
    {Name: "SpecificSpell", Spell: "TrapLeatherWeak", Level: 0, Power: 3, Weight: 5},
    {Name: "SpecificSpell", Spell: "TrapMagicChainsWeak", Level: 0, Power: 3, Weight: 5},

    //{ Name: "SpecificSpell", Spell: "SquishBubble", Level: 0, Power: 3, Weight: 50 },
]
/*
let KDSpecialChests = {
    "silver" : "ChestSilver",
    "shadow" : "ChestShadow",
    "lessershadow" : "ChestShadow",
    "kitty" : "Chests/Kitty",
    "robot" : "Chests/Robot",
};
*/

/*
KDTilePalette.ChestClam = {type: "tile", tile: 'C', special: {Type: "Chest", skin: "Clam"}}
KDTilePalette.ChestClam = {type: "tile", tile: 'c', special: {Type: "Chest", skin: "Clam"}}
*/



KDDialogue.Bed = {
    response: "Default",
    clickFunction: (gagged, player) => {
        KinkyDungeonSetFlag("nobed", 8);
        return false;
    },

    options: {
        "Sleep": {
            playertext: "Default",
            response: "Default",
            clickFunction: (gagged, player) => {
                KinkyDungeonSetFlag("slept", -1);

                if (KDMapData.Checkpoint == "cst") {
                    KinkyDungeonAddRestraintIfWeaker("Pearl", 100, false, undefined, false, false, undefined, undefined);
                    KinkyDungeonAddRestraintIfWeaker("ClamTrap", 100, false, undefined, false, false, undefined, undefined);
                    KinkyDungeonSendTextMessage(10, TextGet("BubbleMoving"), "#ffffff", 1);
                }
                if (KinkyDungeonPlayerInCell(true)) {
                    KinkyDungeonChangeRep("Ghost", KinkyDungeonIsArmsBound() ? 5 : 2);
                }
                // KinkyDungeonChangeWill(KinkyDungeonStatWillMax * KDSleepBedPercentage);
                KDGameData.SleepTurns = KinkyDungeonSleepTurnsMax;
                KinkyDungeonChangeMana(KinkyDungeonStatManaMax, false, 0, false, true);
                return false;
            },
            options: {
                "Leave": {
                    playertext: "Leave",
                    response: "Default",
                    exitDialogue: true,
                },
            }
        },
        "Leave": {
            playertext: "Leave",
            response: "Default",
            exitDialogue: true,
        },
    }
}

KDSpecialChests["clam"] = "ChestClam";

KDEventMapGeneric.beforeChest.clamchest = (e, data) => {
    console.log(data);
    console.log(e); //clamChestを取得
    if ((data.chestType == "clam")) {
        KinkyDungeonAddRestraintIfWeaker("Pearl", 100, false, undefined, false, false, undefined, undefined);
        KinkyDungeonAddRestraintIfWeaker("ClamChest", 100, false, undefined, false, false, undefined, undefined);
        KDMovePlayer(data.x, data.y, true, false, false, true);
        KinkyDungeonSendTextMessage(10, TextGet("BubbleMoving"), "#ffffff", 1);
    }
}

KinkyDungeonLootTable.clam = [
    { name: "spear", minLevel: 0, weight: 1, weapon: "Spear", noweapon: ["Spear"], message: "LootChestWeapon", messageColor: "lightblue", messageTime: 3, allFloors: true },
]

KinkyDungeonMapParams.cst.specialChests = {
    clam: 6,
}

KDSideRooms.Caldera.specialChests = {
    clam: 4,
}


/*
"RandomPathablePoints": {
    "41,24": {
        "x": 41,
        "y": 24,
        "tags": []
    },
    //他にもいっぱい
}
*/

console.log(KDMapData)
/*
{
    "Checkpoint": "grv",
    "Title": "",
    "Labels": {
        "Patrol": [
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 20,
                "y": 3,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 16,
                "y": 5,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 16,
                "y": 3,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 20,
                "y": 5,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 18,
                "y": 22,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 18,
                "y": 28,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 11,
                "y": 22,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 11,
                "y": 28,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 25,
                "y": 22,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 25,
                "y": 28,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 32,
                "y": 22,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 32,
                "y": 28,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 29,
                "y": 32,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 32,
                "y": 29,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 24,
                "y": 12,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 33,
                "y": 12,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 32,
                "y": 18,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 3,
                "y": 11,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 6,
                "y": 17,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 2,
                "y": 19,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 2,
                "y": 17,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 6,
                "y": 19,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 39,
                "y": 25,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 10,
                "y": 33,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 19,
                "y": 33,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 23,
                "y": 31,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 27,
                "y": 31,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 27,
                "y": 33,
                "guard": true,
                "interesting": true
            },
            {
                "name": "Guard",
                "type": "Patrol",
                "assigned": -1,
                "x": 23,
                "y": 33,
                "guard": true,
                "interesting": true
            }
        ]
    },
    "PrisonState": "",
    "PrisonStateStack": [],
    "PrisonType": "",
    "data": {},
    "RoomType": "",
    "MapMod": "",
    "RandomPathablePoints": {
        "41,24": {
            "x": 41,
            "y": 24,
            "tags": []
        },
        "41,25": {
            "x": 41,
            "y": 25,
            "tags": []
        },
        "41,26": {
            "x": 41,
            "y": 26,
            "tags": []
        },
        "40,23": {
            "x": 40,
            "y": 23,
            "tags": []
        },
        "40,24": {
            "x": 40,
            "y": 24,
            "tags": []
        },
        "40,25": {
            "x": 40,
            "y": 25,
            "tags": []
        },
        "41,23": {
            "x": 41,
            "y": 23,
            "tags": []
        },
        "42,25": {
            "x": 42,
            "y": 25,
            "tags": []
        },
        "40,26": {
            "x": 40,
            "y": 26,
            "tags": []
        },
        "40,27": {
            "x": 40,
            "y": 27,
            "tags": []
        },
        "41,27": {
            "x": 41,
            "y": 27,
            "tags": []
        },
        "39,22": {
            "x": 39,
            "y": 22,
            "tags": []
        },
        "39,23": {
            "x": 39,
            "y": 23,
            "tags": []
        },
        "39,24": {
            "x": 39,
            "y": 24,
            "tags": []
        },
        "39,25": {
            "x": 39,
            "y": 25,
            "tags": []
        },
        "39,26": {
            "x": 39,
            "y": 26,
            "tags": []
        },
        "39,27": {
            "x": 39,
            "y": 27,
            "tags": []
        },
        "39,28": {
            "x": 39,
            "y": 28,
            "tags": []
        },
        "38,21": {
            "x": 38,
            "y": 21,
            "tags": []
        },
        "38,23": {
            "x": 38,
            "y": 23,
            "tags": []
        },
        "39,21": {
            "x": 39,
            "y": 21,
            "tags": []
        },
        "38,24": {
            "x": 38,
            "y": 24,
            "tags": []
        },
        "38,25": {
            "x": 38,
            "y": 25,
            "tags": []
        },
        "38,26": {
            "x": 38,
            "y": 26,
            "tags": []
        },
        "38,27": {
            "x": 38,
            "y": 27,
            "tags": []
        },
        "38,29": {
            "x": 38,
            "y": 29,
            "tags": []
        },
        "39,29": {
            "x": 39,
            "y": 29,
            "tags": []
        },
        "38,20": {
            "x": 38,
            "y": 20,
            "tags": []
        },
        "39,20": {
            "x": 39,
            "y": 20,
            "tags": []
        },
        "37,23": {
            "x": 37,
            "y": 23,
            "tags": []
        },
        "37,24": {
            "x": 37,
            "y": 24,
            "tags": []
        },
        "37,25": {
            "x": 37,
            "y": 25,
            "tags": []
        },
        "37,26": {
            "x": 37,
            "y": 26,
            "tags": []
        },
        "37,27": {
            "x": 37,
            "y": 27,
            "tags": []
        },
        "38,30": {
            "x": 38,
            "y": 30,
            "tags": []
        },
        "39,30": {
            "x": 39,
            "y": 30,
            "tags": []
        },
        "37,19": {
            "x": 37,
            "y": 19,
            "tags": []
        },
        "38,19": {
            "x": 38,
            "y": 19,
            "tags": []
        },
        "39,19": {
            "x": 39,
            "y": 19,
            "tags": []
        },
        "38,31": {
            "x": 38,
            "y": 31,
            "tags": []
        },
        "39,31": {
            "x": 39,
            "y": 31,
            "tags": []
        },
        "36,18": {
            "x": 36,
            "y": 18,
            "tags": []
        },
        "36,19": {
            "x": 36,
            "y": 19,
            "tags": []
        },
        "37,18": {
            "x": 37,
            "y": 18,
            "tags": []
        },
        "38,18": {
            "x": 38,
            "y": 18,
            "tags": []
        },
        "39,18": {
            "x": 39,
            "y": 18,
            "tags": []
        },
        "40,18": {
            "x": 40,
            "y": 18,
            "tags": []
        },
        "38,32": {
            "x": 38,
            "y": 32,
            "tags": []
        },
        "39,32": {
            "x": 39,
            "y": 32,
            "tags": []
        },
        "35,18": {
            "x": 35,
            "y": 18,
            "tags": []
        },
        "39,17": {
            "x": 39,
            "y": 17,
            "tags": []
        },
        "38,33": {
            "x": 38,
            "y": 33,
            "tags": []
        },
        "39,33": {
            "x": 39,
            "y": 33,
            "tags": []
        },
        "34,17": {
            "x": 34,
            "y": 17,
            "tags": []
        },
        "34,18": {
            "x": 34,
            "y": 18,
            "tags": []
        },
        "34,19": {
            "x": 34,
            "y": 19,
            "tags": []
        },
        "38,34": {
            "x": 38,
            "y": 34,
            "tags": []
        },
        "33,16": {
            "x": 33,
            "y": 16,
            "tags": []
        },
        "33,17": {
            "x": 33,
            "y": 17,
            "tags": []
        },
        "33,18": {
            "x": 33,
            "y": 18,
            "tags": []
        },
        "34,16": {
            "x": 34,
            "y": 16,
            "tags": []
        },
        "33,19": {
            "x": 33,
            "y": 19,
            "tags": []
        },
        "33,20": {
            "x": 33,
            "y": 20,
            "tags": []
        },
        "34,20": {
            "x": 34,
            "y": 20,
            "tags": []
        },
        "32,15": {
            "x": 32,
            "y": 15,
            "tags": []
        },
        "32,16": {
            "x": 32,
            "y": 16,
            "tags": []
        },
        "32,17": {
            "x": 32,
            "y": 17,
            "tags": []
        },
        "32,18": {
            "x": 32,
            "y": 18,
            "tags": []
        },
        "32,19": {
            "x": 32,
            "y": 19,
            "tags": []
        },
        "32,20": {
            "x": 32,
            "y": 20,
            "tags": []
        },
        "31,14": {
            "x": 31,
            "y": 14,
            "tags": []
        },
        "31,16": {
            "x": 31,
            "y": 16,
            "tags": []
        },
        "32,14": {
            "x": 32,
            "y": 14,
            "tags": []
        },
        "33,14": {
            "x": 33,
            "y": 14,
            "tags": []
        },
        "31,17": {
            "x": 31,
            "y": 17,
            "tags": []
        },
        "31,18": {
            "x": 31,
            "y": 18,
            "tags": []
        },
        "31,19": {
            "x": 31,
            "y": 19,
            "tags": []
        },
        "31,20": {
            "x": 31,
            "y": 20,
            "tags": []
        },
        "30,14": {
            "x": 30,
            "y": 14,
            "tags": []
        },
        "32,13": {
            "x": 32,
            "y": 13,
            "tags": []
        },
        "30,16": {
            "x": 30,
            "y": 16,
            "tags": []
        },
        "30,17": {
            "x": 30,
            "y": 17,
            "tags": []
        },
        "33,13": {
            "x": 33,
            "y": 13,
            "tags": []
        },
        "34,13": {
            "x": 34,
            "y": 13,
            "tags": []
        },
        "30,18": {
            "x": 30,
            "y": 18,
            "tags": []
        },
        "30,19": {
            "x": 30,
            "y": 19,
            "tags": []
        },
        "30,20": {
            "x": 30,
            "y": 20,
            "tags": []
        },
        "29,13": {
            "x": 29,
            "y": 13,
            "tags": []
        },
        "29,14": {
            "x": 29,
            "y": 14,
            "tags": []
        },
        "32,12": {
            "x": 32,
            "y": 12,
            "tags": []
        },
        "33,12": {
            "x": 33,
            "y": 12,
            "tags": []
        },
        "29,18": {
            "x": 29,
            "y": 18,
            "tags": []
        },
        "34,12": {
            "x": 34,
            "y": 12,
            "tags": []
        },
        "35,12": {
            "x": 35,
            "y": 12,
            "tags": []
        },
        "28,13": {
            "x": 28,
            "y": 13,
            "tags": []
        },
        "28,14": {
            "x": 28,
            "y": 14,
            "tags": []
        },
        "28,15": {
            "x": 28,
            "y": 15,
            "tags": []
        },
        "32,11": {
            "x": 32,
            "y": 11,
            "tags": []
        },
        "33,11": {
            "x": 33,
            "y": 11,
            "tags": []
        },
        "34,11": {
            "x": 34,
            "y": 11,
            "tags": []
        },
        "28,17": {
            "x": 28,
            "y": 17,
            "tags": []
        },
        "28,18": {
            "x": 28,
            "y": 18,
            "tags": []
        },
        "28,19": {
            "x": 28,
            "y": 19,
            "tags": []
        },
        "35,11": {
            "x": 35,
            "y": 11,
            "tags": []
        },
        "36,11": {
            "x": 36,
            "y": 11,
            "tags": []
        },
        "36,12": {
            "x": 36,
            "y": 12,
            "tags": []
        },
        "27,14": {
            "x": 27,
            "y": 14,
            "tags": []
        },
        "27,15": {
            "x": 27,
            "y": 15,
            "tags": []
        },
        "28,16": {
            "x": 28,
            "y": 16,
            "tags": []
        },
        "34,10": {
            "x": 34,
            "y": 10,
            "tags": []
        },
        "35,10": {
            "x": 35,
            "y": 10,
            "tags": []
        },
        "28,20": {
            "x": 28,
            "y": 20,
            "tags": []
        },
        "37,11": {
            "x": 37,
            "y": 11,
            "tags": []
        },
        "37,12": {
            "x": 37,
            "y": 12,
            "tags": []
        },
        "26,14": {
            "x": 26,
            "y": 14,
            "tags": []
        },
        "26,15": {
            "x": 26,
            "y": 15,
            "tags": []
        },
        "29,9": {
            "x": 29,
            "y": 9,
            "tags": []
        },
        "34,9": {
            "x": 34,
            "y": 9,
            "tags": []
        },
        "27,21": {
            "x": 27,
            "y": 21,
            "tags": []
        },
        "28,21": {
            "x": 28,
            "y": 21,
            "tags": []
        },
        "38,10": {
            "x": 38,
            "y": 10,
            "tags": []
        },
        "38,11": {
            "x": 38,
            "y": 11,
            "tags": []
        },
        "38,12": {
            "x": 38,
            "y": 12,
            "tags": []
        },
        "25,13": {
            "x": 25,
            "y": 13,
            "tags": []
        },
        "25,14": {
            "x": 25,
            "y": 14,
            "tags": []
        },
        "25,15": {
            "x": 25,
            "y": 15,
            "tags": []
        },
        "28,9": {
            "x": 28,
            "y": 9,
            "tags": []
        },
        "26,21": {
            "x": 26,
            "y": 21,
            "tags": []
        },
        "26,22": {
            "x": 26,
            "y": 22,
            "tags": []
        },
        "38,9": {
            "x": 38,
            "y": 9,
            "tags": []
        },
        "39,9": {
            "x": 39,
            "y": 9,
            "tags": []
        },
        "39,10": {
            "x": 39,
            "y": 10,
            "tags": []
        },
        "39,11": {
            "x": 39,
            "y": 11,
            "tags": []
        },
        "39,12": {
            "x": 39,
            "y": 12,
            "tags": []
        },
        "39,13": {
            "x": 39,
            "y": 13,
            "tags": []
        },
        "24,12": {
            "x": 24,
            "y": 12,
            "tags": []
        },
        "24,13": {
            "x": 24,
            "y": 13,
            "tags": []
        },
        "24,14": {
            "x": 24,
            "y": 14,
            "tags": []
        },
        "25,12": {
            "x": 25,
            "y": 12,
            "tags": []
        },
        "24,15": {
            "x": 24,
            "y": 15,
            "tags": []
        },
        "25,21": {
            "x": 25,
            "y": 21,
            "tags": []
        },
        "25,22": {
            "x": 25,
            "y": 22,
            "tags": []
        },
        "25,23": {
            "x": 25,
            "y": 23,
            "tags": []
        },
        "26,23": {
            "x": 26,
            "y": 23,
            "tags": []
        },
        "38,8": {
            "x": 38,
            "y": 8,
            "tags": []
        },
        "39,8": {
            "x": 39,
            "y": 8,
            "tags": []
        },
        "40,12": {
            "x": 40,
            "y": 12,
            "tags": []
        },
        "23,11": {
            "x": 23,
            "y": 11,
            "tags": []
        },
        "23,12": {
            "x": 23,
            "y": 12,
            "tags": []
        },
        "23,13": {
            "x": 23,
            "y": 13,
            "tags": []
        },
        "24,11": {
            "x": 24,
            "y": 11,
            "tags": []
        },
        "25,11": {
            "x": 25,
            "y": 11,
            "tags": []
        },
        "23,15": {
            "x": 23,
            "y": 15,
            "tags": []
        },
        "24,21": {
            "x": 24,
            "y": 21,
            "tags": []
        },
        "24,22": {
            "x": 24,
            "y": 22,
            "tags": []
        },
        "24,23": {
            "x": 24,
            "y": 23,
            "tags": []
        },
        "24,24": {
            "x": 24,
            "y": 24,
            "tags": []
        },
        "25,24": {
            "x": 25,
            "y": 24,
            "tags": []
        },
        "26,24": {
            "x": 26,
            "y": 24,
            "tags": []
        },
        "27,24": {
            "x": 27,
            "y": 24,
            "tags": []
        },
        "38,7": {
            "x": 38,
            "y": 7,
            "tags": []
        },
        "39,7": {
            "x": 39,
            "y": 7,
            "tags": []
        },
        "22,10": {
            "x": 22,
            "y": 10,
            "tags": []
        },
        "22,11": {
            "x": 22,
            "y": 11,
            "tags": []
        },
        "22,12": {
            "x": 22,
            "y": 12,
            "tags": []
        },
        "23,10": {
            "x": 23,
            "y": 10,
            "tags": []
        },
        "22,15": {
            "x": 22,
            "y": 15,
            "tags": []
        },
        "22,16": {
            "x": 22,
            "y": 16,
            "tags": []
        },
        "23,21": {
            "x": 23,
            "y": 21,
            "tags": []
        },
        "23,24": {
            "x": 23,
            "y": 24,
            "tags": []
        },
        "23,25": {
            "x": 23,
            "y": 25,
            "tags": []
        },
        "24,25": {
            "x": 24,
            "y": 25,
            "tags": []
        },
        "25,25": {
            "x": 25,
            "y": 25,
            "tags": []
        },
        "26,25": {
            "x": 26,
            "y": 25,
            "tags": []
        },
        "27,25": {
            "x": 27,
            "y": 25,
            "tags": []
        },
        "28,24": {
            "x": 28,
            "y": 24,
            "tags": []
        },
        "28,25": {
            "x": 28,
            "y": 25,
            "tags": []
        },
        "38,6": {
            "x": 38,
            "y": 6,
            "tags": []
        },
        "39,6": {
            "x": 39,
            "y": 6,
            "tags": []
        },
        "21,11": {
            "x": 21,
            "y": 11,
            "tags": []
        },
        "23,9": {
            "x": 23,
            "y": 9,
            "tags": []
        },
        "22,17": {
            "x": 22,
            "y": 17,
            "tags": []
        },
        "22,20": {
            "x": 22,
            "y": 20,
            "tags": []
        },
        "22,21": {
            "x": 22,
            "y": 21,
            "tags": []
        },
        "22,24": {
            "x": 22,
            "y": 24,
            "tags": []
        },
        "22,25": {
            "x": 22,
            "y": 25,
            "tags": []
        },
        "22,26": {
            "x": 22,
            "y": 26,
            "tags": []
        },
        "23,26": {
            "x": 23,
            "y": 26,
            "tags": []
        },
        "24,26": {
            "x": 24,
            "y": 26,
            "tags": []
        },
        "25,26": {
            "x": 25,
            "y": 26,
            "tags": []
        },
        "26,26": {
            "x": 26,
            "y": 26,
            "tags": []
        },
        "27,26": {
            "x": 27,
            "y": 26,
            "tags": []
        },
        "28,26": {
            "x": 28,
            "y": 26,
            "tags": []
        },
        "29,24": {
            "x": 29,
            "y": 24,
            "tags": []
        },
        "29,25": {
            "x": 29,
            "y": 25,
            "tags": []
        },
        "29,26": {
            "x": 29,
            "y": 26,
            "tags": []
        },
        "37,5": {
            "x": 37,
            "y": 5,
            "tags": []
        },
        "38,5": {
            "x": 38,
            "y": 5,
            "tags": []
        },
        "39,5": {
            "x": 39,
            "y": 5,
            "tags": []
        },
        "20,10": {
            "x": 20,
            "y": 10,
            "tags": []
        },
        "20,11": {
            "x": 20,
            "y": 11,
            "tags": []
        },
        "20,12": {
            "x": 20,
            "y": 12,
            "tags": []
        },
        "21,18": {
            "x": 21,
            "y": 18,
            "tags": []
        },
        "22,18": {
            "x": 22,
            "y": 18,
            "tags": []
        },
        "22,19": {
            "x": 22,
            "y": 19,
            "tags": []
        },
        "21,24": {
            "x": 21,
            "y": 24,
            "tags": []
        },
        "21,25": {
            "x": 21,
            "y": 25,
            "tags": []
        },
        "21,26": {
            "x": 21,
            "y": 26,
            "tags": []
        },
        "24,27": {
            "x": 24,
            "y": 27,
            "tags": []
        },
        "25,27": {
            "x": 25,
            "y": 27,
            "tags": []
        },
        "26,27": {
            "x": 26,
            "y": 27,
            "tags": []
        },
        "30,24": {
            "x": 30,
            "y": 24,
            "tags": []
        },
        "30,25": {
            "x": 30,
            "y": 25,
            "tags": []
        },
        "30,26": {
            "x": 30,
            "y": 26,
            "tags": []
        },
        "36,4": {
            "x": 36,
            "y": 4,
            "tags": []
        },
        "36,5": {
            "x": 36,
            "y": 5,
            "tags": []
        },
        "37,4": {
            "x": 37,
            "y": 4,
            "tags": []
        },
        "38,4": {
            "x": 38,
            "y": 4,
            "tags": []
        },
        "39,4": {
            "x": 39,
            "y": 4,
            "tags": []
        },
        "40,4": {
            "x": 40,
            "y": 4,
            "tags": []
        },
        "19,11": {
            "x": 19,
            "y": 11,
            "tags": []
        },
        "20,13": {
            "x": 20,
            "y": 13,
            "tags": []
        },
        "20,17": {
            "x": 20,
            "y": 17,
            "tags": []
        },
        "20,18": {
            "x": 20,
            "y": 18,
            "tags": []
        },
        "20,19": {
            "x": 20,
            "y": 19,
            "tags": []
        },
        "20,24": {
            "x": 20,
            "y": 24,
            "tags": []
        },
        "20,25": {
            "x": 20,
            "y": 25,
            "tags": []
        },
        "20,26": {
            "x": 20,
            "y": 26,
            "tags": []
        },
        "24,28": {
            "x": 24,
            "y": 28,
            "tags": []
        },
        "25,28": {
            "x": 25,
            "y": 28,
            "tags": []
        },
        "26,28": {
            "x": 26,
            "y": 28,
            "tags": []
        },
        "31,23": {
            "x": 31,
            "y": 23,
            "tags": []
        },
        "31,24": {
            "x": 31,
            "y": 24,
            "tags": []
        },
        "31,25": {
            "x": 31,
            "y": 25,
            "tags": []
        },
        "31,26": {
            "x": 31,
            "y": 26,
            "tags": []
        },
        "31,27": {
            "x": 31,
            "y": 27,
            "tags": []
        },
        "35,4": {
            "x": 35,
            "y": 4,
            "tags": []
        },
        "35,5": {
            "x": 35,
            "y": 5,
            "tags": []
        },
        "39,3": {
            "x": 39,
            "y": 3,
            "tags": []
        },
        "40,3": {
            "x": 40,
            "y": 3,
            "tags": []
        },
        "18,10": {
            "x": 18,
            "y": 10,
            "tags": []
        },
        "18,11": {
            "x": 18,
            "y": 11,
            "tags": []
        },
        "18,12": {
            "x": 18,
            "y": 12,
            "tags": []
        },
        "20,14": {
            "x": 20,
            "y": 14,
            "tags": []
        },
        "20,16": {
            "x": 20,
            "y": 16,
            "tags": []
        },
        "19,23": {
            "x": 19,
            "y": 23,
            "tags": []
        },
        "19,24": {
            "x": 19,
            "y": 24,
            "tags": []
        },
        "19,25": {
            "x": 19,
            "y": 25,
            "tags": []
        },
        "19,26": {
            "x": 19,
            "y": 26,
            "tags": []
        },
        "19,27": {
            "x": 19,
            "y": 27,
            "tags": []
        },
        "25,29": {
            "x": 25,
            "y": 29,
            "tags": []
        },
        "27,29": {
            "x": 27,
            "y": 29,
            "tags": []
        },
        "31,22": {
            "x": 31,
            "y": 22,
            "tags": []
        },
        "32,22": {
            "x": 32,
            "y": 22,
            "tags": []
        },
        "32,23": {
            "x": 32,
            "y": 23,
            "tags": []
        },
        "32,24": {
            "x": 32,
            "y": 24,
            "tags": []
        },
        "32,25": {
            "x": 32,
            "y": 25,
            "tags": []
        },
        "32,26": {
            "x": 32,
            "y": 26,
            "tags": []
        },
        "32,27": {
            "x": 32,
            "y": 27,
            "tags": []
        },
        "32,28": {
            "x": 32,
            "y": 28,
            "tags": []
        },
        "34,3": {
            "x": 34,
            "y": 3,
            "tags": []
        },
        "34,4": {
            "x": 34,
            "y": 4,
            "tags": []
        },
        "34,5": {
            "x": 34,
            "y": 5,
            "tags": []
        },
        "34,6": {
            "x": 34,
            "y": 6,
            "tags": []
        },
        "17,11": {
            "x": 17,
            "y": 11,
            "tags": []
        },
        "18,9": {
            "x": 18,
            "y": 9,
            "tags": []
        },
        "18,13": {
            "x": 18,
            "y": 13,
            "tags": []
        },
        "19,15": {
            "x": 19,
            "y": 15,
            "tags": []
        },
        "20,15": {
            "x": 20,
            "y": 15,
            "tags": []
        },
        "18,22": {
            "x": 18,
            "y": 22,
            "tags": []
        },
        "18,23": {
            "x": 18,
            "y": 23,
            "tags": []
        },
        "18,24": {
            "x": 18,
            "y": 24,
            "tags": []
        },
        "19,22": {
            "x": 19,
            "y": 22,
            "tags": []
        },
        "18,25": {
            "x": 18,
            "y": 25,
            "tags": []
        },
        "18,26": {
            "x": 18,
            "y": 26,
            "tags": []
        },
        "18,27": {
            "x": 18,
            "y": 27,
            "tags": []
        },
        "18,28": {
            "x": 18,
            "y": 28,
            "tags": []
        },
        "19,28": {
            "x": 19,
            "y": 28,
            "tags": []
        },
        "24,30": {
            "x": 24,
            "y": 30,
            "tags": []
        },
        "25,30": {
            "x": 25,
            "y": 30,
            "tags": []
        },
        "26,30": {
            "x": 26,
            "y": 30,
            "tags": []
        },
        "27,30": {
            "x": 27,
            "y": 30,
            "tags": []
        },
        "33,22": {
            "x": 33,
            "y": 22,
            "tags": []
        },
        "33,23": {
            "x": 33,
            "y": 23,
            "tags": []
        },
        "33,25": {
            "x": 33,
            "y": 25,
            "tags": []
        },
        "33,26": {
            "x": 33,
            "y": 26,
            "tags": []
        },
        "33,27": {
            "x": 33,
            "y": 27,
            "tags": []
        },
        "33,28": {
            "x": 33,
            "y": 28,
            "tags": []
        },
        "32,29": {
            "x": 32,
            "y": 29,
            "tags": []
        },
        "33,2": {
            "x": 33,
            "y": 2,
            "tags": []
        },
        "33,3": {
            "x": 33,
            "y": 3,
            "tags": []
        },
        "34,2": {
            "x": 34,
            "y": 2,
            "tags": []
        },
        "33,5": {
            "x": 33,
            "y": 5,
            "tags": []
        },
        "33,6": {
            "x": 33,
            "y": 6,
            "tags": []
        },
        "16,10": {
            "x": 16,
            "y": 10,
            "tags": []
        },
        "16,11": {
            "x": 16,
            "y": 11,
            "tags": []
        },
        "18,8": {
            "x": 18,
            "y": 8,
            "tags": []
        },
        "18,14": {
            "x": 18,
            "y": 14,
            "tags": []
        },
        "18,15": {
            "x": 18,
            "y": 15,
            "tags": []
        },
        "18,16": {
            "x": 18,
            "y": 16,
            "tags": []
        },
        "17,21": {
            "x": 17,
            "y": 21,
            "tags": []
        },
        "17,22": {
            "x": 17,
            "y": 22,
            "tags": []
        },
        "17,23": {
            "x": 17,
            "y": 23,
            "tags": []
        },
        "18,21": {
            "x": 18,
            "y": 21,
            "tags": []
        },
        "17,24": {
            "x": 17,
            "y": 24,
            "tags": []
        },
        "17,25": {
            "x": 17,
            "y": 25,
            "tags": []
        },
        "17,26": {
            "x": 17,
            "y": 26,
            "tags": []
        },
        "17,27": {
            "x": 17,
            "y": 27,
            "tags": []
        },
        "17,28": {
            "x": 17,
            "y": 28,
            "tags": []
        },
        "23,30": {
            "x": 23,
            "y": 30,
            "tags": []
        },
        "23,31": {
            "x": 23,
            "y": 31,
            "tags": []
        },
        "24,31": {
            "x": 24,
            "y": 31,
            "tags": []
        },
        "25,31": {
            "x": 25,
            "y": 31,
            "tags": []
        },
        "26,31": {
            "x": 26,
            "y": 31,
            "tags": []
        },
        "27,31": {
            "x": 27,
            "y": 31,
            "tags": []
        },
        "34,23": {
            "x": 34,
            "y": 23,
            "tags": []
        },
        "34,24": {
            "x": 34,
            "y": 24,
            "tags": []
        },
        "34,25": {
            "x": 34,
            "y": 25,
            "tags": []
        },
        "34,26": {
            "x": 34,
            "y": 26,
            "tags": []
        },
        "34,27": {
            "x": 34,
            "y": 27,
            "tags": []
        },
        "31,30": {
            "x": 31,
            "y": 30,
            "tags": []
        },
        "32,30": {
            "x": 32,
            "y": 30,
            "tags": []
        },
        "33,30": {
            "x": 33,
            "y": 30,
            "tags": []
        },
        "32,2": {
            "x": 32,
            "y": 2,
            "tags": []
        },
        "32,3": {
            "x": 32,
            "y": 3,
            "tags": []
        },
        "35,1": {
            "x": 35,
            "y": 1,
            "tags": []
        },
        "32,5": {
            "x": 32,
            "y": 5,
            "tags": []
        },
        "32,6": {
            "x": 32,
            "y": 6,
            "tags": []
        },
        "15,9": {
            "x": 15,
            "y": 9,
            "tags": []
        },
        "16,9": {
            "x": 16,
            "y": 9,
            "tags": []
        },
        "18,7": {
            "x": 18,
            "y": 7,
            "tags": []
        },
        "17,15": {
            "x": 17,
            "y": 15,
            "tags": []
        },
        "18,17": {
            "x": 18,
            "y": 17,
            "tags": []
        },
        "16,20": {
            "x": 16,
            "y": 20,
            "tags": []
        },
        "17,20": {
            "x": 17,
            "y": 20,
            "tags": []
        },
        "18,20": {
            "x": 18,
            "y": 20,
            "tags": []
        },
        "16,24": {
            "x": 16,
            "y": 24,
            "tags": []
        },
        "16,25": {
            "x": 16,
            "y": 25,
            "tags": []
        },
        "16,26": {
            "x": 16,
            "y": 26,
            "tags": []
        },
        "22,32": {
            "x": 22,
            "y": 32,
            "tags": []
        },
        "23,32": {
            "x": 23,
            "y": 32,
            "tags": []
        },
        "24,32": {
            "x": 24,
            "y": 32,
            "tags": []
        },
        "25,32": {
            "x": 25,
            "y": 32,
            "tags": []
        },
        "26,32": {
            "x": 26,
            "y": 32,
            "tags": []
        },
        "27,32": {
            "x": 27,
            "y": 32,
            "tags": []
        },
        "28,32": {
            "x": 28,
            "y": 32,
            "tags": []
        },
        "35,24": {
            "x": 35,
            "y": 24,
            "tags": []
        },
        "35,25": {
            "x": 35,
            "y": 25,
            "tags": []
        },
        "35,26": {
            "x": 35,
            "y": 26,
            "tags": []
        },
        "30,30": {
            "x": 30,
            "y": 30,
            "tags": []
        },
        "30,31": {
            "x": 30,
            "y": 31,
            "tags": []
        },
        "32,31": {
            "x": 32,
            "y": 31,
            "tags": []
        },
        "33,31": {
            "x": 33,
            "y": 31,
            "tags": []
        },
        "34,30": {
            "x": 34,
            "y": 30,
            "tags": []
        },
        "34,31": {
            "x": 34,
            "y": 31,
            "tags": []
        },
        "31,2": {
            "x": 31,
            "y": 2,
            "tags": []
        },
        "31,3": {
            "x": 31,
            "y": 3,
            "tags": []
        },
        "31,5": {
            "x": 31,
            "y": 5,
            "tags": []
        },
        "31,6": {
            "x": 31,
            "y": 6,
            "tags": []
        },
        "14,9": {
            "x": 14,
            "y": 9,
            "tags": []
        },
        "17,6": {
            "x": 17,
            "y": 6,
            "tags": []
        },
        "18,6": {
            "x": 18,
            "y": 6,
            "tags": []
        },
        "19,6": {
            "x": 19,
            "y": 6,
            "tags": []
        },
        "18,18": {
            "x": 18,
            "y": 18,
            "tags": []
        },
        "15,20": {
            "x": 15,
            "y": 20,
            "tags": []
        },
        "17,19": {
            "x": 17,
            "y": 19,
            "tags": []
        },
        "18,19": {
            "x": 18,
            "y": 19,
            "tags": []
        },
        "15,24": {
            "x": 15,
            "y": 24,
            "tags": []
        },
        "15,25": {
            "x": 15,
            "y": 25,
            "tags": []
        },
        "15,26": {
            "x": 15,
            "y": 26,
            "tags": []
        },
        "21,31": {
            "x": 21,
            "y": 31,
            "tags": []
        },
        "21,32": {
            "x": 21,
            "y": 32,
            "tags": []
        },
        "21,33": {
            "x": 21,
            "y": 33,
            "tags": []
        },
        "23,33": {
            "x": 23,
            "y": 33,
            "tags": []
        },
        "24,33": {
            "x": 24,
            "y": 33,
            "tags": []
        },
        "25,33": {
            "x": 25,
            "y": 33,
            "tags": []
        },
        "26,33": {
            "x": 26,
            "y": 33,
            "tags": []
        },
        "27,33": {
            "x": 27,
            "y": 33,
            "tags": []
        },
        "29,32": {
            "x": 29,
            "y": 32,
            "tags": []
        },
        "30,32": {
            "x": 30,
            "y": 32,
            "tags": []
        },
        "31,32": {
            "x": 31,
            "y": 32,
            "tags": []
        },
        "32,32": {
            "x": 32,
            "y": 32,
            "tags": []
        },
        "33,32": {
            "x": 33,
            "y": 32,
            "tags": []
        },
        "34,32": {
            "x": 34,
            "y": 32,
            "tags": []
        },
        "30,2": {
            "x": 30,
            "y": 2,
            "tags": []
        },
        "30,3": {
            "x": 30,
            "y": 3,
            "tags": []
        },
        "30,5": {
            "x": 30,
            "y": 5,
            "tags": []
        },
        "30,6": {
            "x": 30,
            "y": 6,
            "tags": []
        },
        "13,9": {
            "x": 13,
            "y": 9,
            "tags": []
        },
        "13,10": {
            "x": 13,
            "y": 10,
            "tags": []
        },
        "16,5": {
            "x": 16,
            "y": 5,
            "tags": []
        },
        "16,6": {
            "x": 16,
            "y": 6,
            "tags": []
        },
        "17,5": {
            "x": 17,
            "y": 5,
            "tags": []
        },
        "18,5": {
            "x": 18,
            "y": 5,
            "tags": []
        },
        "19,5": {
            "x": 19,
            "y": 5,
            "tags": []
        },
        "20,5": {
            "x": 20,
            "y": 5,
            "tags": []
        },
        "20,6": {
            "x": 20,
            "y": 6,
            "tags": []
        },
        "20,7": {
            "x": 20,
            "y": 7,
            "tags": []
        },
        "14,24": {
            "x": 14,
            "y": 24,
            "tags": []
        },
        "14,25": {
            "x": 14,
            "y": 25,
            "tags": []
        },
        "14,26": {
            "x": 14,
            "y": 26,
            "tags": []
        },
        "20,30": {
            "x": 20,
            "y": 30,
            "tags": []
        },
        "20,31": {
            "x": 20,
            "y": 31,
            "tags": []
        },
        "20,32": {
            "x": 20,
            "y": 32,
            "tags": []
        },
        "20,33": {
            "x": 20,
            "y": 33,
            "tags": []
        },
        "20,34": {
            "x": 20,
            "y": 34,
            "tags": []
        },
        "23,34": {
            "x": 23,
            "y": 34,
            "tags": []
        },
        "24,34": {
            "x": 24,
            "y": 34,
            "tags": []
        },
        "25,34": {
            "x": 25,
            "y": 34,
            "tags": []
        },
        "26,34": {
            "x": 26,
            "y": 34,
            "tags": []
        },
        "27,34": {
            "x": 27,
            "y": 34,
            "tags": []
        },
        "30,33": {
            "x": 30,
            "y": 33,
            "tags": []
        },
        "32,33": {
            "x": 32,
            "y": 33,
            "tags": []
        },
        "33,33": {
            "x": 33,
            "y": 33,
            "tags": []
        },
        "34,33": {
            "x": 34,
            "y": 33,
            "tags": []
        },
        "29,2": {
            "x": 29,
            "y": 2,
            "tags": []
        },
        "29,3": {
            "x": 29,
            "y": 3,
            "tags": []
        },
        "29,5": {
            "x": 29,
            "y": 5,
            "tags": []
        },
        "29,6": {
            "x": 29,
            "y": 6,
            "tags": []
        },
        "12,11": {
            "x": 12,
            "y": 11,
            "tags": []
        },
        "13,11": {
            "x": 13,
            "y": 11,
            "tags": []
        },
        "14,11": {
            "x": 14,
            "y": 11,
            "tags": []
        },
        "15,4": {
            "x": 15,
            "y": 4,
            "tags": []
        },
        "16,4": {
            "x": 16,
            "y": 4,
            "tags": []
        },
        "17,4": {
            "x": 17,
            "y": 4,
            "tags": []
        },
        "18,4": {
            "x": 18,
            "y": 4,
            "tags": []
        },
        "19,4": {
            "x": 19,
            "y": 4,
            "tags": []
        },
        "20,4": {
            "x": 20,
            "y": 4,
            "tags": []
        },
        "21,4": {
            "x": 21,
            "y": 4,
            "tags": []
        },
        "21,6": {
            "x": 21,
            "y": 6,
            "tags": []
        },
        "13,24": {
            "x": 13,
            "y": 24,
            "tags": []
        },
        "13,25": {
            "x": 13,
            "y": 25,
            "tags": []
        },
        "13,26": {
            "x": 13,
            "y": 26,
            "tags": []
        },
        "19,32": {
            "x": 19,
            "y": 32,
            "tags": []
        },
        "19,33": {
            "x": 19,
            "y": 33,
            "tags": []
        },
        "19,34": {
            "x": 19,
            "y": 34,
            "tags": []
        },
        "19,35": {
            "x": 19,
            "y": 35,
            "tags": []
        },
        "23,35": {
            "x": 23,
            "y": 35,
            "tags": []
        },
        "25,35": {
            "x": 25,
            "y": 35,
            "tags": []
        },
        "30,34": {
            "x": 30,
            "y": 34,
            "tags": []
        },
        "31,34": {
            "x": 31,
            "y": 34,
            "tags": []
        },
        "32,34": {
            "x": 32,
            "y": 34,
            "tags": []
        },
        "33,34": {
            "x": 33,
            "y": 34,
            "tags": []
        },
        "34,34": {
            "x": 34,
            "y": 34,
            "tags": []
        },
        "28,2": {
            "x": 28,
            "y": 2,
            "tags": []
        },
        "28,3": {
            "x": 28,
            "y": 3,
            "tags": []
        },
        "28,5": {
            "x": 28,
            "y": 5,
            "tags": []
        },
        "28,6": {
            "x": 28,
            "y": 6,
            "tags": []
        },
        "11,10": {
            "x": 11,
            "y": 10,
            "tags": []
        },
        "11,11": {
            "x": 11,
            "y": 11,
            "tags": []
        },
        "12,12": {
            "x": 12,
            "y": 12,
            "tags": []
        },
        "14,12": {
            "x": 14,
            "y": 12,
            "tags": []
        },
        "14,3": {
            "x": 14,
            "y": 3,
            "tags": []
        },
        "14,4": {
            "x": 14,
            "y": 4,
            "tags": []
        },
        "14,5": {
            "x": 14,
            "y": 5,
            "tags": []
        },
        "16,3": {
            "x": 16,
            "y": 3,
            "tags": []
        },
        "17,3": {
            "x": 17,
            "y": 3,
            "tags": []
        },
        "18,3": {
            "x": 18,
            "y": 3,
            "tags": []
        },
        "19,3": {
            "x": 19,
            "y": 3,
            "tags": []
        },
        "20,3": {
            "x": 20,
            "y": 3,
            "tags": []
        },
        "22,4": {
            "x": 22,
            "y": 4,
            "tags": []
        },
        "22,5": {
            "x": 22,
            "y": 5,
            "tags": []
        },
        "12,23": {
            "x": 12,
            "y": 23,
            "tags": []
        },
        "12,24": {
            "x": 12,
            "y": 24,
            "tags": []
        },
        "12,25": {
            "x": 12,
            "y": 25,
            "tags": []
        },
        "12,26": {
            "x": 12,
            "y": 26,
            "tags": []
        },
        "12,27": {
            "x": 12,
            "y": 27,
            "tags": []
        },
        "18,32": {
            "x": 18,
            "y": 32,
            "tags": []
        },
        "18,33": {
            "x": 18,
            "y": 33,
            "tags": []
        },
        "18,34": {
            "x": 18,
            "y": 34,
            "tags": []
        },
        "18,35": {
            "x": 18,
            "y": 35,
            "tags": []
        },
        "27,2": {
            "x": 27,
            "y": 2,
            "tags": []
        },
        "27,3": {
            "x": 27,
            "y": 3,
            "tags": []
        },
        "27,5": {
            "x": 27,
            "y": 5,
            "tags": []
        },
        "27,6": {
            "x": 27,
            "y": 6,
            "tags": []
        },
        "10,9": {
            "x": 10,
            "y": 9,
            "tags": []
        },
        "10,11": {
            "x": 10,
            "y": 11,
            "tags": []
        },
        "11,9": {
            "x": 11,
            "y": 9,
            "tags": []
        },
        "10,12": {
            "x": 10,
            "y": 12,
            "tags": []
        },
        "12,13": {
            "x": 12,
            "y": 13,
            "tags": []
        },
        "14,13": {
            "x": 14,
            "y": 13,
            "tags": []
        },
        "15,13": {
            "x": 15,
            "y": 13,
            "tags": []
        },
        "13,3": {
            "x": 13,
            "y": 3,
            "tags": []
        },
        "13,4": {
            "x": 13,
            "y": 4,
            "tags": []
        },
        "13,5": {
            "x": 13,
            "y": 5,
            "tags": []
        },
        "16,2": {
            "x": 16,
            "y": 2,
            "tags": []
        },
        "17,2": {
            "x": 17,
            "y": 2,
            "tags": []
        },
        "18,2": {
            "x": 18,
            "y": 2,
            "tags": []
        },
        "19,2": {
            "x": 19,
            "y": 2,
            "tags": []
        },
        "20,2": {
            "x": 20,
            "y": 2,
            "tags": []
        },
        "21,2": {
            "x": 21,
            "y": 2,
            "tags": []
        },
        "23,3": {
            "x": 23,
            "y": 3,
            "tags": []
        },
        "23,4": {
            "x": 23,
            "y": 4,
            "tags": []
        },
        "23,5": {
            "x": 23,
            "y": 5,
            "tags": []
        },
        "23,6": {
            "x": 23,
            "y": 6,
            "tags": []
        },
        "11,22": {
            "x": 11,
            "y": 22,
            "tags": []
        },
        "11,23": {
            "x": 11,
            "y": 23,
            "tags": []
        },
        "11,24": {
            "x": 11,
            "y": 24,
            "tags": []
        },
        "12,22": {
            "x": 12,
            "y": 22,
            "tags": []
        },
        "11,25": {
            "x": 11,
            "y": 25,
            "tags": []
        },
        "11,26": {
            "x": 11,
            "y": 26,
            "tags": []
        },
        "11,27": {
            "x": 11,
            "y": 27,
            "tags": []
        },
        "11,28": {
            "x": 11,
            "y": 28,
            "tags": []
        },
        "12,28": {
            "x": 12,
            "y": 28,
            "tags": []
        },
        "17,35": {
            "x": 17,
            "y": 35,
            "tags": []
        },
        "26,2": {
            "x": 26,
            "y": 2,
            "tags": []
        },
        "26,3": {
            "x": 26,
            "y": 3,
            "tags": []
        },
        "26,5": {
            "x": 26,
            "y": 5,
            "tags": []
        },
        "26,6": {
            "x": 26,
            "y": 6,
            "tags": []
        },
        "9,9": {
            "x": 9,
            "y": 9,
            "tags": []
        },
        "9,10": {
            "x": 9,
            "y": 10,
            "tags": []
        },
        "11,8": {
            "x": 11,
            "y": 8,
            "tags": []
        },
        "9,11": {
            "x": 9,
            "y": 11,
            "tags": []
        },
        "9,13": {
            "x": 9,
            "y": 13,
            "tags": []
        },
        "10,13": {
            "x": 10,
            "y": 13,
            "tags": []
        },
        "11,14": {
            "x": 11,
            "y": 14,
            "tags": []
        },
        "12,14": {
            "x": 12,
            "y": 14,
            "tags": []
        },
        "12,3": {
            "x": 12,
            "y": 3,
            "tags": []
        },
        "12,4": {
            "x": 12,
            "y": 4,
            "tags": []
        },
        "12,5": {
            "x": 12,
            "y": 5,
            "tags": []
        },
        "16,1": {
            "x": 16,
            "y": 1,
            "tags": []
        },
        "18,1": {
            "x": 18,
            "y": 1,
            "tags": []
        },
        "23,2": {
            "x": 23,
            "y": 2,
            "tags": []
        },
        "24,2": {
            "x": 24,
            "y": 2,
            "tags": []
        },
        "24,3": {
            "x": 24,
            "y": 3,
            "tags": []
        },
        "24,5": {
            "x": 24,
            "y": 5,
            "tags": []
        },
        "24,6": {
            "x": 24,
            "y": 6,
            "tags": []
        },
        "10,22": {
            "x": 10,
            "y": 22,
            "tags": []
        },
        "10,23": {
            "x": 10,
            "y": 23,
            "tags": []
        },
        "11,21": {
            "x": 11,
            "y": 21,
            "tags": []
        },
        "10,25": {
            "x": 10,
            "y": 25,
            "tags": []
        },
        "10,26": {
            "x": 10,
            "y": 26,
            "tags": []
        },
        "10,27": {
            "x": 10,
            "y": 27,
            "tags": []
        },
        "10,28": {
            "x": 10,
            "y": 28,
            "tags": []
        },
        "16,35": {
            "x": 16,
            "y": 35,
            "tags": []
        },
        "25,2": {
            "x": 25,
            "y": 2,
            "tags": []
        },
        "25,3": {
            "x": 25,
            "y": 3,
            "tags": []
        },
        "25,5": {
            "x": 25,
            "y": 5,
            "tags": []
        },
        "25,6": {
            "x": 25,
            "y": 6,
            "tags": []
        },
        "8,11": {
            "x": 8,
            "y": 11,
            "tags": []
        },
        "10,14": {
            "x": 10,
            "y": 14,
            "tags": []
        },
        "10,15": {
            "x": 10,
            "y": 15,
            "tags": []
        },
        "12,15": {
            "x": 12,
            "y": 15,
            "tags": []
        },
        "13,15": {
            "x": 13,
            "y": 15,
            "tags": []
        },
        "11,3": {
            "x": 11,
            "y": 3,
            "tags": []
        },
        "11,4": {
            "x": 11,
            "y": 4,
            "tags": []
        },
        "11,5": {
            "x": 11,
            "y": 5,
            "tags": []
        },
        "9,23": {
            "x": 9,
            "y": 23,
            "tags": []
        },
        "9,24": {
            "x": 9,
            "y": 24,
            "tags": []
        },
        "11,20": {
            "x": 11,
            "y": 20,
            "tags": []
        },
        "9,25": {
            "x": 9,
            "y": 25,
            "tags": []
        },
        "9,26": {
            "x": 9,
            "y": 26,
            "tags": []
        },
        "9,27": {
            "x": 9,
            "y": 27,
            "tags": []
        },
        "15,30": {
            "x": 15,
            "y": 30,
            "tags": []
        },
        "15,34": {
            "x": 15,
            "y": 34,
            "tags": []
        },
        "15,35": {
            "x": 15,
            "y": 35,
            "tags": []
        },
        "7,11": {
            "x": 7,
            "y": 11,
            "tags": []
        },
        "9,16": {
            "x": 9,
            "y": 16,
            "tags": []
        },
        "10,16": {
            "x": 10,
            "y": 16,
            "tags": []
        },
        "11,16": {
            "x": 11,
            "y": 16,
            "tags": []
        },
        "12,16": {
            "x": 12,
            "y": 16,
            "tags": []
        },
        "14,15": {
            "x": 14,
            "y": 15,
            "tags": []
        },
        "10,3": {
            "x": 10,
            "y": 3,
            "tags": []
        },
        "10,4": {
            "x": 10,
            "y": 4,
            "tags": []
        },
        "10,5": {
            "x": 10,
            "y": 5,
            "tags": []
        },
        "8,24": {
            "x": 8,
            "y": 24,
            "tags": []
        },
        "8,25": {
            "x": 8,
            "y": 25,
            "tags": []
        },
        "10,19": {
            "x": 10,
            "y": 19,
            "tags": []
        },
        "11,19": {
            "x": 11,
            "y": 19,
            "tags": []
        },
        "12,19": {
            "x": 12,
            "y": 19,
            "tags": []
        },
        "8,26": {
            "x": 8,
            "y": 26,
            "tags": []
        },
        "14,30": {
            "x": 14,
            "y": 30,
            "tags": []
        },
        "14,34": {
            "x": 14,
            "y": 34,
            "tags": []
        },
        "14,35": {
            "x": 14,
            "y": 35,
            "tags": []
        },
        "6,11": {
            "x": 6,
            "y": 11,
            "tags": []
        },
        "11,17": {
            "x": 11,
            "y": 17,
            "tags": []
        },
        "12,17": {
            "x": 12,
            "y": 17,
            "tags": []
        },
        "15,15": {
            "x": 15,
            "y": 15,
            "tags": []
        },
        "15,16": {
            "x": 15,
            "y": 16,
            "tags": []
        },
        "9,3": {
            "x": 9,
            "y": 3,
            "tags": []
        },
        "9,4": {
            "x": 9,
            "y": 4,
            "tags": []
        },
        "9,5": {
            "x": 9,
            "y": 5,
            "tags": []
        },
        "7,25": {
            "x": 7,
            "y": 25,
            "tags": []
        },
        "9,18": {
            "x": 9,
            "y": 18,
            "tags": []
        },
        "9,19": {
            "x": 9,
            "y": 19,
            "tags": []
        },
        "9,20": {
            "x": 9,
            "y": 20,
            "tags": []
        },
        "12,18": {
            "x": 12,
            "y": 18,
            "tags": []
        },
        "13,35": {
            "x": 13,
            "y": 35,
            "tags": []
        },
        "5,10": {
            "x": 5,
            "y": 10,
            "tags": []
        },
        "5,11": {
            "x": 5,
            "y": 11,
            "tags": []
        },
        "5,12": {
            "x": 5,
            "y": 12,
            "tags": []
        },
        "14,17": {
            "x": 14,
            "y": 17,
            "tags": []
        },
        "15,17": {
            "x": 15,
            "y": 17,
            "tags": []
        },
        "8,3": {
            "x": 8,
            "y": 3,
            "tags": []
        },
        "8,4": {
            "x": 8,
            "y": 4,
            "tags": []
        },
        "8,5": {
            "x": 8,
            "y": 5,
            "tags": []
        },
        "6,24": {
            "x": 6,
            "y": 24,
            "tags": []
        },
        "6,25": {
            "x": 6,
            "y": 25,
            "tags": []
        },
        "6,26": {
            "x": 6,
            "y": 26,
            "tags": []
        },
        "8,18": {
            "x": 8,
            "y": 18,
            "tags": []
        },
        "12,35": {
            "x": 12,
            "y": 35,
            "tags": []
        },
        "4,11": {
            "x": 4,
            "y": 11,
            "tags": []
        },
        "5,9": {
            "x": 5,
            "y": 9,
            "tags": []
        },
        "5,13": {
            "x": 5,
            "y": 13,
            "tags": []
        },
        "14,18": {
            "x": 14,
            "y": 18,
            "tags": []
        },
        "15,18": {
            "x": 15,
            "y": 18,
            "tags": []
        },
        "7,4": {
            "x": 7,
            "y": 4,
            "tags": []
        },
        "7,5": {
            "x": 7,
            "y": 5,
            "tags": []
        },
        "5,24": {
            "x": 5,
            "y": 24,
            "tags": []
        },
        "5,25": {
            "x": 5,
            "y": 25,
            "tags": []
        },
        "5,26": {
            "x": 5,
            "y": 26,
            "tags": []
        },
        "7,18": {
            "x": 7,
            "y": 18,
            "tags": []
        },
        "11,31": {
            "x": 11,
            "y": 31,
            "tags": []
        },
        "11,32": {
            "x": 11,
            "y": 32,
            "tags": []
        },
        "11,33": {
            "x": 11,
            "y": 33,
            "tags": []
        },
        "11,34": {
            "x": 11,
            "y": 34,
            "tags": []
        },
        "11,35": {
            "x": 11,
            "y": 35,
            "tags": []
        },
        "3,10": {
            "x": 3,
            "y": 10,
            "tags": []
        },
        "3,11": {
            "x": 3,
            "y": 11,
            "tags": []
        },
        "3,12": {
            "x": 3,
            "y": 12,
            "tags": []
        },
        "4,8": {
            "x": 4,
            "y": 8,
            "tags": []
        },
        "5,8": {
            "x": 5,
            "y": 8,
            "tags": []
        },
        "4,14": {
            "x": 4,
            "y": 14,
            "tags": []
        },
        "5,14": {
            "x": 5,
            "y": 14,
            "tags": []
        },
        "6,4": {
            "x": 6,
            "y": 4,
            "tags": []
        },
        "6,5": {
            "x": 6,
            "y": 5,
            "tags": []
        },
        "4,23": {
            "x": 4,
            "y": 23,
            "tags": []
        },
        "4,24": {
            "x": 4,
            "y": 24,
            "tags": []
        },
        "4,25": {
            "x": 4,
            "y": 25,
            "tags": []
        },
        "4,26": {
            "x": 4,
            "y": 26,
            "tags": []
        },
        "4,27": {
            "x": 4,
            "y": 27,
            "tags": []
        },
        "6,17": {
            "x": 6,
            "y": 17,
            "tags": []
        },
        "6,18": {
            "x": 6,
            "y": 18,
            "tags": []
        },
        "6,19": {
            "x": 6,
            "y": 19,
            "tags": []
        },
        "10,32": {
            "x": 10,
            "y": 32,
            "tags": []
        },
        "10,33": {
            "x": 10,
            "y": 33,
            "tags": []
        },
        "10,34": {
            "x": 10,
            "y": 34,
            "tags": []
        },
        "10,35": {
            "x": 10,
            "y": 35,
            "tags": []
        },
        "2,10": {
            "x": 2,
            "y": 10,
            "tags": []
        },
        "2,11": {
            "x": 2,
            "y": 11,
            "tags": []
        },
        "2,12": {
            "x": 2,
            "y": 12,
            "tags": []
        },
        "3,7": {
            "x": 3,
            "y": 7,
            "tags": []
        },
        "4,7": {
            "x": 4,
            "y": 7,
            "tags": []
        },
        "4,15": {
            "x": 4,
            "y": 15,
            "tags": []
        },
        "6,15": {
            "x": 6,
            "y": 15,
            "tags": []
        },
        "5,4": {
            "x": 5,
            "y": 4,
            "tags": []
        },
        "5,5": {
            "x": 5,
            "y": 5,
            "tags": []
        },
        "3,24": {
            "x": 3,
            "y": 24,
            "tags": []
        },
        "4,22": {
            "x": 4,
            "y": 22,
            "tags": []
        },
        "3,25": {
            "x": 3,
            "y": 25,
            "tags": []
        },
        "3,26": {
            "x": 3,
            "y": 26,
            "tags": []
        },
        "4,28": {
            "x": 4,
            "y": 28,
            "tags": []
        },
        "5,16": {
            "x": 5,
            "y": 16,
            "tags": []
        },
        "5,17": {
            "x": 5,
            "y": 17,
            "tags": []
        },
        "5,18": {
            "x": 5,
            "y": 18,
            "tags": []
        },
        "6,16": {
            "x": 6,
            "y": 16,
            "tags": []
        },
        "5,19": {
            "x": 5,
            "y": 19,
            "tags": []
        },
        "5,20": {
            "x": 5,
            "y": 20,
            "tags": []
        },
        "6,20": {
            "x": 6,
            "y": 20,
            "tags": []
        },
        "9,31": {
            "x": 9,
            "y": 31,
            "tags": []
        },
        "9,32": {
            "x": 9,
            "y": 32,
            "tags": []
        },
        "9,33": {
            "x": 9,
            "y": 33,
            "tags": []
        },
        "9,34": {
            "x": 9,
            "y": 34,
            "tags": []
        },
        "3,6": {
            "x": 3,
            "y": 6,
            "tags": []
        },
        "4,6": {
            "x": 4,
            "y": 6,
            "tags": []
        },
        "3,16": {
            "x": 3,
            "y": 16,
            "tags": []
        },
        "4,16": {
            "x": 4,
            "y": 16,
            "tags": []
        },
        "4,4": {
            "x": 4,
            "y": 4,
            "tags": []
        },
        "4,5": {
            "x": 4,
            "y": 5,
            "tags": []
        },
        "4,21": {
            "x": 4,
            "y": 21,
            "tags": []
        },
        "3,29": {
            "x": 3,
            "y": 29,
            "tags": []
        },
        "4,29": {
            "x": 4,
            "y": 29,
            "tags": []
        },
        "4,17": {
            "x": 4,
            "y": 17,
            "tags": []
        },
        "4,18": {
            "x": 4,
            "y": 18,
            "tags": []
        },
        "4,19": {
            "x": 4,
            "y": 19,
            "tags": []
        },
        "4,20": {
            "x": 4,
            "y": 20,
            "tags": []
        },
        "6,21": {
            "x": 6,
            "y": 21,
            "tags": []
        },
        "8,31": {
            "x": 8,
            "y": 31,
            "tags": []
        },
        "8,32": {
            "x": 8,
            "y": 32,
            "tags": []
        },
        "9,30": {
            "x": 9,
            "y": 30,
            "tags": []
        },
        "8,33": {
            "x": 8,
            "y": 33,
            "tags": []
        },
        "3,5": {
            "x": 3,
            "y": 5,
            "tags": []
        },
        "2,16": {
            "x": 2,
            "y": 16,
            "tags": []
        },
        "2,17": {
            "x": 2,
            "y": 17,
            "tags": []
        },
        "3,17": {
            "x": 3,
            "y": 17,
            "tags": []
        },
        "3,3": {
            "x": 3,
            "y": 3,
            "tags": []
        },
        "3,4": {
            "x": 3,
            "y": 4,
            "tags": []
        },
        "3,20": {
            "x": 3,
            "y": 20,
            "tags": []
        },
        "3,30": {
            "x": 3,
            "y": 30,
            "tags": []
        },
        "4,30": {
            "x": 4,
            "y": 30,
            "tags": []
        },
        "3,18": {
            "x": 3,
            "y": 18,
            "tags": []
        },
        "3,19": {
            "x": 3,
            "y": 19,
            "tags": []
        },
        "7,32": {
            "x": 7,
            "y": 32,
            "tags": []
        },
        "7,33": {
            "x": 7,
            "y": 33,
            "tags": []
        },
        "2,4": {
            "x": 2,
            "y": 4,
            "tags": []
        },
        "1,16": {
            "x": 1,
            "y": 16,
            "tags": []
        },
        "1,18": {
            "x": 1,
            "y": 18,
            "tags": []
        },
        "2,18": {
            "x": 2,
            "y": 18,
            "tags": []
        },
        "2,3": {
            "x": 2,
            "y": 3,
            "tags": []
        },
        "2,19": {
            "x": 2,
            "y": 19,
            "tags": []
        },
        "2,20": {
            "x": 2,
            "y": 20,
            "tags": []
        },
        "3,31": {
            "x": 3,
            "y": 31,
            "tags": []
        },
        "4,31": {
            "x": 4,
            "y": 31,
            "tags": []
        },
        "6,32": {
            "x": 6,
            "y": 32,
            "tags": []
        },
        "6,33": {
            "x": 6,
            "y": 33,
            "tags": []
        },
        "1,20": {
            "x": 1,
            "y": 20,
            "tags": []
        },
        "3,32": {
            "x": 3,
            "y": 32,
            "tags": []
        },
        "4,32": {
            "x": 4,
            "y": 32,
            "tags": []
        },
        "5,32": {
            "x": 5,
            "y": 32,
            "tags": []
        },
        "5,33": {
            "x": 5,
            "y": 33,
            "tags": []
        },
        "2,33": {
            "x": 2,
            "y": 33,
            "tags": []
        },
        "3,33": {
            "x": 3,
            "y": 33,
            "tags": []
        },
        "4,33": {
            "x": 4,
            "y": 33,
            "tags": []
        },
        "3,34": {
            "x": 3,
            "y": 34,
            "tags": []
        }
    },
    "Tiles": {
        "14,17": {
            "Loot": "silver",
            "Roll": 0.6627803663723171,
            "Special": false,
            "lootTrap": {
                "trap": "leatherTrap",
                "mult": 1.2,
                "time": 2
            }
        },
        "28,24": {
            "Furniture": "Cage"
        },
        "29,24": {
            "Furniture": "Cage"
        },
        "28,9": {
            "Loot": "silver",
            "Roll": 0.786382389254868,
            "Special": false,
            "lootTrap": {
                "trap": "ropeTrap",
                "mult": 1.4,
                "time": 2
            }
        },
        "31,11": {
            "OL": true
        },
        "26,11": {
            "OL": true
        },
        "27,11": {
            "OL": true,
            "x": 27,
            "y": 11
        },
        "27,10": {
            "OL": true,
            "x": 27,
            "y": 10,
            "lootTrapEnemy": "Gag",
            "lootTrapTime": 2
        },
        "28,10": {
            "Type": "Trap",
            "Trap": "SpecificSpell",
            "Spell": "TrapRopeWeak",
            "Power": 3,
            "OL": true
        },
        "29,10": {
            "OL": true,
            "x": 29,
            "y": 10
        },
        "30,10": {
            "OL": true,
            "x": 30,
            "y": 10
        },
        "30,11": {
            "OL": true,
            "x": 30,
            "y": 11
        },
        "29,11": {
            "OL": true,
            "x": 29,
            "y": 11
        },
        "28,11": {
            "OL": true,
            "x": 28,
            "y": 11,
            "lootTrapEnemy": "RopeSnake",
            "lootTrapTime": 2
        },
        "33,15": {},
        "31,15": {},
        "5,12": {
            "Type": "Trap",
            "Trap": "SpecificSpell",
            "Spell": "TrapLustCloud",
            "Power": 3
        },
        "5,10": {
            "Type": "Door"
        },
        "6,10": {},
        "4,10": {},
        "40,22": {},
        "38,22": {},
        "14,30": {
            "Loot": "silver",
            "Roll": 0.22107759746722877,
            "Special": false,
            "lootTrap": {
                "trap": "ropeTrap",
                "mult": 1.4,
                "time": 2
            }
        },
        "17,32": {
            "OL": true
        },
        "12,32": {
            "OL": true
        },
        "13,32": {
            "OL": true,
            "x": 13,
            "y": 32,
            "lootTrapEnemy": "RopeSnake",
            "lootTrapTime": 2
        },
        "13,31": {
            "OL": true,
            "x": 13,
            "y": 31
        },
        "14,31": {
            "OL": true,
            "x": 14,
            "y": 31
        },
        "15,31": {
            "OL": true,
            "x": 15,
            "y": 31
        },
        "16,31": {
            "OL": true,
            "x": 16,
            "y": 31
        },
        "16,32": {
            "OL": true,
            "x": 16,
            "y": 32
        },
        "15,32": {
            "OL": true,
            "x": 15,
            "y": 32,
            "lootTrapEnemy": "Gag",
            "lootTrapTime": 2
        },
        "14,32": {
            "OL": true,
            "x": 14,
            "y": 32,
            "lootTrapEnemy": "RopeSnake",
            "lootTrapTime": 2
        },
        "10,2": {},
        "12,2": {},
        "1,18": {
            "RoomType": "ShopStart"
        },
        "25,35": {
            "Skin": "CollapsedStairs"
        },
        "18,1": {
            "Skin": "CollapsedStairs"
        },
        "23,16": {
            "OL": true,
            "NW": true
        },
        "23,17": {
            "OL": true,
            "NW": true
        },
        "23,18": {
            "OL": true,
            "NW": true
        },
        "23,19": {
            "OL": true,
            "NW": true
        },
        "23,20": {
            "OL": true,
            "NW": true
        },
        "24,16": {
            "OL": true,
            "NW": true
        },
        "24,17": {
            "OL": true,
            "NW": true
        },
        "24,18": {
            "OL": true,
            "NW": true
        },
        "24,19": {
            "OL": true,
            "NW": true
        },
        "24,20": {
            "OL": true,
            "NW": true
        },
        "25,16": {
            "OL": true,
            "NW": true
        },
        "25,17": {
            "OL": true,
            "NW": true
        },
        "25,18": {
            "OL": true,
            "NW": true
        },
        "25,19": {
            "OL": true,
            "NW": true
        },
        "25,20": {
            "OL": true,
            "NW": true
        },
        "26,16": {
            "OL": true,
            "NW": true
        },
        "26,17": {
            "OL": true,
            "NW": true
        },
        "26,18": {
            "OL": true,
            "NW": true
        },
        "26,19": {
            "OL": true,
            "NW": true
        },
        "26,20": {
            "OL": true,
            "NW": true
        },
        "27,16": {
            "OL": true,
            "NW": true
        },
        "27,17": {
            "OL": true,
            "NW": true
        },
        "27,18": {
            "Type": "Door",
            "NoTrap": true,
            "Jail": true,
            "ReLock": true,
            "OL": true,
            "OGLock": "Red"
        },
        "27,19": {
            "OL": true,
            "NW": true
        },
        "27,20": {
            "OL": true,
            "NW": true
        },
        "19,35": {
            "Loot": "silver",
            "Roll": 0.24426614958792925,
            "Faction": "Bandit"
        },
        "31,28": {
            "Loot": "blue",
            "Roll": 0.8119102721102536,
            "Faction": "Bandit",
            "Type": "Lock",
            "Lock": "Blue",
            "Special": true,
            "RedSpecial": false
        },
        "35,1": {
            "Loot": "chest",
            "Roll": 0.32725221989676356,
            "lootTrap": {
                "trap": "zombieTrap",
                "mult": 1.5
            }
        },
        "10,35": {
            "Loot": "chest",
            "Roll": 0.6836846109945327,
            "lootTrap": {
                "trap": "zombieTrap",
                "mult": 1.5
            }
        },
        "38,34": {
            "Loot": "chest",
            "Roll": 0.7600415470078588,
            "lootTrap": {
                "trap": "zombieTrap",
                "mult": 1.5
            }
        },
        "15,18": {
            "lootTrapEnemy": "Lock",
            "lootTrapTime": 2
        },
        "14,18": {
            "lootTrapEnemy": "Gag",
            "lootTrapTime": 2
        },
        "15,17": {
            "Type": "Trap",
            "Trap": "SpecificSpell",
            "Spell": "TrapLeatherWeak",
            "Power": 3
        },
        "25,11": {
            "lootTrapEnemy": "RopeSnake",
            "lootTrapTime": 2
        },
        "38,25": {
            "Type": "Orb",
            "Light": 5,
            "lightColor": 2667775
        },
        "2,11": {
            "Type": "Orb",
            "Light": 5,
            "lightColor": 2667775
        },
        "32,19": {
            "Type": "Shrine",
            "Name": "Will",
            "drunk": false,
            "Quest": "WillQuest"
        },
        "9,13": {
            "Type": "Shrine",
            "Name": "Metal",
            "drunk": true,
            "Quest": "MetalQuest"
        },
        "33,31": {
            "Type": "Shrine",
            "Name": "Rope",
            "drunk": true,
            "Quest": "RopeQuest"
        },
        "9,20": {
            "Type": "Shrine",
            "Name": "Will",
            "drunk": true
        },
        "1,16": {
            "Type": "Shrine",
            "Name": "Will",
            "drunk": true
        },
        "27,29": {
            "Type": "Shrine",
            "Name": "Metal",
            "drunk": true
        },
        "6,21": {
            "Type": "Shrine",
            "Name": "Elements",
            "drunk": true
        },
        "20,19": {
            "Type": "Shrine",
            "Name": "Will",
            "drunk": true
        },
        "1,20": {
            "Type": "Shrine",
            "Name": "Illusion",
            "drunk": true
        },
        "23,35": {
            "Type": "Shrine",
            "Name": "Conjure",
            "drunk": false
        },
        "33,33": {
            "Type": "Shrine",
            "Name": "Will",
            "drunk": true
        },
        "21,6": {
            "Type": "Shrine",
            "Name": "Conjure",
            "drunk": true
        },
        "16,1": {
            "Type": "Shrine",
            "Name": "Leather",
            "drunk": true
        },
        "20,7": {
            "Type": "Ghost",
            "GhostDecision": 0
        },
        "6,15": {
            "Type": "Tablet",
            "Name": "Determination",
            "Light": 3,
            "lightColor": 8947967
        },
        "11,31": {
            "Type": "Tablet",
            "Name": "Determination",
            "Light": 3,
            "lightColor": 8947967
        },
        "40,3": {
            "Type": "Tablet",
            "Name": "Determination",
            "Light": 3,
            "lightColor": 8947967
        },
        "21,2": {
            "Type": "Tablet",
            "Name": "Heart",
            "Light": 3,
            "lightColor": 8947967
        },
        "2,3": {
            "Type": "Tablet",
            "Name": "Heart",
            "Light": 3,
            "lightColor": 8947967
        },
        "27,24": {
            "Type": "Charger",
            "NoRemove": false,
            "lightColor": 16772739
        },
        "2,10": {
            "Type": "Charger",
            "NoRemove": false,
            "lightColor": 16772739
        },
        "27,6": {
            "Type": "Charger",
            "NoRemove": false,
            "lightColor": 16772739
        },
        "15,30": {
            "Type": "Charger",
            "NoRemove": false,
            "lightColor": 16772739
        },
        "17,24": {
            "Type": "Trap",
            "Trap": "SpecificSpell",
            "Spell": "TrapRopeWeak",
            "Power": 3
        },
        "24,24": {
            "Type": "Trap",
            "Trap": "SpawnEnemies",
            "Enemy": "AnimBlindfold",
            "FilterTag": "ItemHeadFull",
            "FilterBackup": "SummonedZombie",
            "Power": 1
        },
        "19,26": {
            "Type": "Trap",
            "Trap": "SpecificSpell",
            "Spell": "TrapRopeWeak",
            "Power": 3
        },
        "17,26": {
            "Type": "Trap",
            "Trap": "SpawnEnemies",
            "Enemy": "Gag",
            "FilterTag": "ItemMouthFull",
            "FilterBackup": "SummonedZombie",
            "Power": 1
        },
        "20,25": {
            "Type": "Trap",
            "Trap": "SpawnEnemies",
            "Enemy": "AnimHarness",
            "FilterTag": "ItemTorsoFull",
            "FilterBackup": "SummonedZombie",
            "Power": 1
        },
        "27,25": {
            "Type": "Trap",
            "Trap": "SpawnEnemies",
            "Enemy": "AnimStraitjacket",
            "FilterTag": "ItemArmsFull",
            "FilterBackup": "SummonedZombie",
            "Power": 1
        },
        "29,26": {
            "Type": "Trap",
            "Trap": "SpawnEnemies",
            "Enemy": "AnimYoke",
            "FilterTag": "ItemArmsFull",
            "FilterBackup": "SummonedZombie",
            "Power": 1
        },
        "5,19": {
            "Type": "Trap",
            "Trap": "SpawnEnemies",
            "Enemy": "AnimBlindfold",
            "FilterTag": "ItemHeadFull",
            "FilterBackup": "SummonedZombie",
            "Power": 1
        },
        "34,2": {
            "Type": "Trap",
            "Trap": "SpecificSpell",
            "Spell": "TrapLeatherWeak",
            "Power": 3
        }
    },
    "EffectTiles": {
        "33,16": {
            "Torch": {
                "x": 33,
                "y": 16,
                "name": "Torch",
                "duration": 9999,
                "infinite": true,
                "priority": 5,
                "brightness": 6,
                "lightColor": 16746803,
                "yoffset": -1,
                "affinitiesStanding": [
                    "Fire",
                    "Hot"
                ],
                "tags": [
                    "hot",
                    "snuffable"
                ]
            }
        },
        "31,16": {
            "Torch": {
                "x": 31,
                "y": 16,
                "name": "Torch",
                "duration": 9999,
                "infinite": true,
                "priority": 5,
                "brightness": 6,
                "lightColor": 16746803,
                "yoffset": -1,
                "affinitiesStanding": [
                    "Fire",
                    "Hot"
                ],
                "tags": [
                    "hot",
                    "snuffable"
                ]
            }
        },
        "6,11": {
            "TorchUnlit": {
                "x": 6,
                "y": 11,
                "name": "TorchUnlit",
                "duration": 9999,
                "infinite": true,
                "priority": 5,
                "yoffset": -1,
                "tags": [
                    "sackable"
                ]
            }
        },
        "4,11": {
            "TorchUnlit": {
                "x": 4,
                "y": 11,
                "name": "TorchUnlit",
                "duration": 9999,
                "infinite": true,
                "priority": 5,
                "yoffset": -1,
                "tags": [
                    "sackable"
                ]
            }
        },
        "40,23": {
            "TorchUnlit": {
                "x": 40,
                "y": 23,
                "name": "TorchUnlit",
                "duration": 9999,
                "infinite": true,
                "priority": 5,
                "yoffset": -1,
                "tags": [
                    "sackable"
                ]
            }
        },
        "38,23": {
            "Torch": {
                "x": 38,
                "y": 23,
                "name": "Torch",
                "duration": 9999,
                "infinite": true,
                "priority": 5,
                "brightness": 6,
                "lightColor": 16746803,
                "yoffset": -1,
                "affinitiesStanding": [
                    "Fire",
                    "Hot"
                ],
                "tags": [
                    "hot",
                    "snuffable"
                ]
            }
        },
        "10,3": {
            "TorchUnlit": {
                "x": 10,
                "y": 3,
                "name": "TorchUnlit",
                "duration": 9999,
                "infinite": true,
                "priority": 5,
                "yoffset": -1,
                "tags": [
                    "sackable"
                ]
            }
        },
        "12,3": {
            "Torch": {
                "x": 12,
                "y": 3,
                "name": "Torch",
                "duration": 9999,
                "infinite": true,
                "priority": 5,
                "brightness": 6,
                "lightColor": 16746803,
                "yoffset": -1,
                "affinitiesStanding": [
                    "Fire",
                    "Hot"
                ],
                "tags": [
                    "hot",
                    "snuffable"
                ]
            }
        },
        "25,17": {
            "Torch": {
                "x": 25,
                "y": 17,
                "name": "Torch",
                "duration": 9999,
                "infinite": true,
                "priority": 5,
                "brightness": 6,
                "lightColor": 16746803,
                "yoffset": -1,
                "affinitiesStanding": [
                    "Fire",
                    "Hot"
                ],
                "tags": [
                    "hot",
                    "snuffable"
                ]
            }
        },
        "15,18": {
            "Runes": {
                "x": 15,
                "y": 18,
                "name": "Runes",
                "duration": 9999,
                "infinite": true,
                "priority": 10,
                "tags": [
                    "runesummon",
                    "rune",
                    "hiddenmagic"
                ]
            }
        },
        "14,18": {
            "Runes": {
                "x": 14,
                "y": 18,
                "name": "Runes",
                "duration": 9999,
                "infinite": true,
                "priority": 10,
                "tags": [
                    "runesummon",
                    "rune",
                    "hiddenmagic"
                ]
            }
        },
        "15,17": {
            "Runes": {
                "x": 15,
                "y": 17,
                "name": "Runes",
                "duration": 9999,
                "infinite": true,
                "priority": 10,
                "tags": [
                    "runesummon",
                    "rune",
                    "hiddenmagic"
                ]
            },
            "RunesTrap": {
                "x": 15,
                "y": 17,
                "name": "RunesTrap",
                "duration": 9999,
                "infinite": true,
                "priority": 10,
                "tags": [
                    "magic",
                    "runetrap",
                    "rune",
                    "hiddenmagic"
                ]
            }
        },
        "27,10": {
            "Runes": {
                "x": 27,
                "y": 10,
                "name": "Runes",
                "duration": 9999,
                "infinite": true,
                "priority": 10,
                "tags": [
                    "runesummon",
                    "rune",
                    "hiddenmagic"
                ]
            }
        },
        "28,11": {
            "Runes": {
                "x": 28,
                "y": 11,
                "name": "Runes",
                "duration": 9999,
                "infinite": true,
                "priority": 10,
                "tags": [
                    "runesummon",
                    "rune",
                    "hiddenmagic"
                ]
            }
        },
        "25,11": {
            "Runes": {
                "x": 25,
                "y": 11,
                "name": "Runes",
                "duration": 9999,
                "infinite": true,
                "priority": 10,
                "tags": [
                    "runesummon",
                    "rune",
                    "hiddenmagic"
                ]
            }
        },
        "14,32": {
            "Runes": {
                "x": 14,
                "y": 32,
                "name": "Runes",
                "duration": 9999,
                "infinite": true,
                "priority": 10,
                "tags": [
                    "runesummon",
                    "rune",
                    "hiddenmagic"
                ]
            }
        },
        "13,32": {
            "Runes": {
                "x": 13,
                "y": 32,
                "name": "Runes",
                "duration": 9999,
                "infinite": true,
                "priority": 10,
                "tags": [
                    "runesummon",
                    "rune",
                    "hiddenmagic"
                ]
            }
        },
        "15,32": {
            "Runes": {
                "x": 15,
                "y": 32,
                "name": "Runes",
                "duration": 9999,
                "infinite": true,
                "priority": 10,
                "tags": [
                    "runesummon",
                    "rune",
                    "hiddenmagic"
                ]
            }
        },
        "17,24": {
            "RunesTrap": {
                "x": 17,
                "y": 24,
                "name": "RunesTrap",
                "duration": 9999,
                "infinite": true,
                "priority": 10,
                "tags": [
                    "magic",
                    "runetrap",
                    "rune",
                    "hiddenmagic"
                ]
            }
        },
        "19,26": {
            "RunesTrap": {
                "x": 19,
                "y": 26,
                "name": "RunesTrap",
                "duration": 9999,
                "infinite": true,
                "priority": 10,
                "tags": [
                    "magic",
                    "runetrap",
                    "rune",
                    "hiddenmagic"
                ]
            }
        },
        "5,12": {
            "RunesTrap": {
                "x": 5,
                "y": 12,
                "name": "RunesTrap",
                "duration": 9999,
                "infinite": true,
                "priority": 10,
                "tags": [
                    "magic",
                    "runetrap",
                    "rune",
                    "hiddenmagic"
                ]
            }
        },
        "28,10": {
            "RunesTrap": {
                "x": 28,
                "y": 10,
                "name": "RunesTrap",
                "duration": 9999,
                "infinite": true,
                "priority": 10,
                "tags": [
                    "magic",
                    "runetrap",
                    "rune",
                    "hiddenmagic"
                ]
            }
        },
        "34,2": {
            "RunesTrap": {
                "x": 34,
                "y": 2,
                "name": "RunesTrap",
                "duration": 9999,
                "infinite": true,
                "priority": 10,
                "tags": [
                    "magic",
                    "runetrap",
                    "rune",
                    "hiddenmagic"
                ]
            }
        },
        "20,15": {
            "Gunpowder": {
                "x": 20,
                "y": 15,
                "name": "Gunpowder",
                "duration": 3,
                "priority": 2,
                "tags": [
                    "flammable"
                ]
            }
        },
        "24,31": {
            "Gunpowder": {
                "x": 24,
                "y": 31,
                "name": "Gunpowder",
                "duration": 1,
                "priority": 2,
                "tags": [
                    "flammable"
                ]
            }
        },
        "30,30": {
            "Gunpowder": {
                "x": 30,
                "y": 30,
                "name": "Gunpowder",
                "duration": 2,
                "priority": 2,
                "tags": [
                    "flammable"
                ]
            }
        },
        "18,24": {
            "Gunpowder": {
                "x": 18,
                "y": 24,
                "name": "Gunpowder",
                "duration": 3,
                "priority": 2,
                "tags": [
                    "flammable"
                ]
            }
        },
        "15,25": {
            "LatexThin": {
                "x": 15,
                "y": 25,
                "name": "LatexThin",
                "functionName": "Latex",
                "duration": 24,
                "priority": -2.01,
                "affinities": [
                    "Latex"
                ],
                "tags": [
                    "latex",
                    "insulator",
                    "terrain"
                ]
            }
        }
    },
    "TilesMemory": {},
    "TilesSkin": {},
    "Bullets": [],
    "ConstantX": false,
    "GroundItems": [
        {
            "x": 41,
            "y": 26,
            "name": "Lore"
        },
        {
            "x": 3,
            "y": 30,
            "name": "Lore"
        },
        {
            "x": 3,
            "y": 34,
            "name": "Keyring"
        },
        {
            "x": 17,
            "y": 23,
            "name": "Keyring"
        }
    ],
    "Entities": [
        {
            "summoned": true,
            "Enemy": {
                "name": "StoneDoor",
                "faction": "Door",
                "blockVision": true,
                "lowpriority": true,
                "cueSfx": {
                    "Block": "Clang",
                    "Resist": "Clang",
                    "Damage": "ArmorHit"
                },
                "Sound": {
                    "baseAmount": 0
                },
                "GFX": {
                    "lighting": true
                },
                "tags": {
                    "obstacledoor": true,
                    "scenery": true,
                    "minor": true,
                    "inactive": true,
                    "nonvulnerable": true,
                    "unstoppable": true,
                    "immobile": true,
                    "nobrain": true,
                    "nosignal": true,
                    "poisonimmune": true,
                    "harmless": true,
                    "soulimmune": true,
                    "slashresist": true,
                    "pierceresist": true,
                    "electricresist": true,
                    "crushweakness": true,
                    "unarmedresist": true,
                    "chainimmune": true,
                    "glueresist": true,
                    "soapresist": true,
                    "tickleresist": true,
                    "groperesist": true,
                    "painresist": true,
                    "charmimmune": true
                },
                "spellResist": 0,
                "sneakthreshold": 0.6,
                "evasion": -9,
                "ignorechance": 1,
                "armor": 3,
                "followRange": 1,
                "AI": "ambush",
                "ambushRadius": 0,
                "difficulty": -0.05,
                "immobile": true,
                "visionRadius": 0,
                "maxhp": 10,
                "minLevel": 0,
                "weight": -4,
                "movePoints": 99999,
                "attackPoints": 4,
                "attack": "",
                "attackWidth": 8,
                "attackRange": 3,
                "power": 1,
                "dmgType": "souldrain",
                "terrainTags": {
                    "obstacle": 10,
                    "obstacletile": 50
                },
                "allFloors": true,
                "shrines": [],
                "events": [
                    {
                        "trigger": "duringDamageEnemy",
                        "type": "damageThreshold",
                        "power": 1,
                        "chance": 1
                    }
                ]
            },
            "id": 267,
            "x": 31,
            "y": 11,
            "hp": 10,
            "movePoints": 0,
            "attackPoints": 0,
            "buffs": {},
            "flags": {
                "fidget": 7,
                "targ_player": 1
            },
            "castCooldown": 0,
            "castCooldownSpecial": 0,
            "playWithPlayer": 0,
            "vulnerable": 0,
            "warningTiles": [],
            "personality": "NoBrain",
            "gxx": 31,
            "gyy": 11,
            "gx": 31,
            "gy": 11,
            "moved": false,
            "idle": true,
            "action": "",
            "flip": true,
            "sound": 0,
            "exertion": 0,
            "sprinted": false
        },
        {
            "summoned": true,
            "Enemy": {
                "name": "StoneDoor",
                "faction": "Door",
                "blockVision": true,
                "lowpriority": true,
                "cueSfx": {
                    "Block": "Clang",
                    "Resist": "Clang",
                    "Damage": "ArmorHit"
                },
                "Sound": {
                    "baseAmount": 0
                },
                "GFX": {
                    "lighting": true
                },
                "tags": {
                    "obstacledoor": true,
                    "scenery": true,
                    "minor": true,
                    "inactive": true,
                    "nonvulnerable": true,
                    "unstoppable": true,
                    "immobile": true,
                    "nobrain": true,
                    "nosignal": true,
                    "poisonimmune": true,
                    "harmless": true,
                    "soulimmune": true,
                    "slashresist": true,
                    "pierceresist": true,
                    "electricresist": true,
                    "crushweakness": true,
                    "unarmedresist": true,
                    "chainimmune": true,
                    "glueresist": true,
                    "soapresist": true,
                    "tickleresist": true,
                    "groperesist": true,
                    "painresist": true,
                    "charmimmune": true
                },
                "spellResist": 0,
                "sneakthreshold": 0.6,
                "evasion": -9,
                "ignorechance": 1,
                "armor": 3,
                "followRange": 1,
                "AI": "ambush",
                "ambushRadius": 0,
                "difficulty": -0.05,
                "immobile": true,
                "visionRadius": 0,
                "maxhp": 10,
                "minLevel": 0,
                "weight": -4,
                "movePoints": 99999,
                "attackPoints": 4,
                "attack": "",
                "attackWidth": 8,
                "attackRange": 3,
                "power": 1,
                "dmgType": "souldrain",
                "terrainTags": {
                    "obstacle": 10,
                    "obstacletile": 50
                },
                "allFloors": true,
                "shrines": [],
                "events": [
                    {
                        "trigger": "duringDamageEnemy",
                        "type": "damageThreshold",
                        "power": 1,
                        "chance": 1
                    }
                ]
            },
            "id": 268,
            "x": 26,
            "y": 11,
            "hp": 10,
            "movePoints": 0,
            "attackPoints": 0,
            "buffs": {},
            "flags": {
                "fidget": 7,
                "targ_player": 1
            },
            "castCooldown": 0,
            "castCooldownSpecial": 0,
            "playWithPlayer": 0,
            "vulnerable": 0,
            "warningTiles": [],
            "personality": "NoBrain",
            "gxx": 26,
            "gyy": 11,
            "gx": 26,
            "gy": 11,
            "moved": false,
            "idle": true,
            "action": "",
            "flip": true,
            "sound": 0,
            "exertion": 0,
            "sprinted": false
        },
        {
            "summoned": true,
            "Enemy": {
                "name": "StoneDoor",
                "faction": "Door",
                "blockVision": true,
                "lowpriority": true,
                "cueSfx": {
                    "Block": "Clang",
                    "Resist": "Clang",
                    "Damage": "ArmorHit"
                },
                "Sound": {
                    "baseAmount": 0
                },
                "GFX": {
                    "lighting": true
                },
                "tags": {
                    "obstacledoor": true,
                    "scenery": true,
                    "minor": true,
                    "inactive": true,
                    "nonvulnerable": true,
                    "unstoppable": true,
                    "immobile": true,
                    "nobrain": true,
                    "nosignal": true,
                    "poisonimmune": true,
                    "harmless": true,
                    "soulimmune": true,
                    "slashresist": true,
                    "pierceresist": true,
                    "electricresist": true,
                    "crushweakness": true,
                    "unarmedresist": true,
                    "chainimmune": true,
                    "glueresist": true,
                    "soapresist": true,
                    "tickleresist": true,
                    "groperesist": true,
                    "painresist": true,
                    "charmimmune": true
                },
                "spellResist": 0,
                "sneakthreshold": 0.6,
                "evasion": -9,
                "ignorechance": 1,
                "armor": 3,
                "followRange": 1,
                "AI": "ambush",
                "ambushRadius": 0,
                "difficulty": -0.05,
                "immobile": true,
                "visionRadius": 0,
                "maxhp": 10,
                "minLevel": 0,
                "weight": -4,
                "movePoints": 99999,
                "attackPoints": 4,
                "attack": "",
                "attackWidth": 8,
                "attackRange": 3,
                "power": 1,
                "dmgType": "souldrain",
                "terrainTags": {
                    "obstacle": 10,
                    "obstacletile": 50
                },
                "allFloors": true,
                "shrines": [],
                "events": [
                    {
                        "trigger": "duringDamageEnemy",
                        "type": "damageThreshold",
                        "power": 1,
                        "chance": 1
                    }
                ]
            },
            "id": 269,
            "x": 17,
            "y": 32,
            "hp": 10,
            "movePoints": 0,
            "attackPoints": 0,
            "buffs": {},
            "flags": {
                "fidget": 7,
                "targ_player": 1
            },
            "castCooldown": 0,
            "castCooldownSpecial": 0,
            "playWithPlayer": 0,
            "vulnerable": 0,
            "warningTiles": [],
            "personality": "NoBrain",
            "gxx": 17,
            "gyy": 32,
            "gx": 17,
            "gy": 32,
            "moved": false,
            "idle": true,
            "action": "",
            "flip": true,
            "sound": 0,
            "exertion": 0,
            "sprinted": false
        },
        {
            "summoned": true,
            "Enemy": {
                "name": "StoneDoor",
                "faction": "Door",
                "blockVision": true,
                "lowpriority": true,
                "cueSfx": {
                    "Block": "Clang",
                    "Resist": "Clang",
                    "Damage": "ArmorHit"
                },
                "Sound": {
                    "baseAmount": 0
                },
                "GFX": {
                    "lighting": true
                },
                "tags": {
                    "obstacledoor": true,
                    "scenery": true,
                    "minor": true,
                    "inactive": true,
                    "nonvulnerable": true,
                    "unstoppable": true,
                    "immobile": true,
                    "nobrain": true,
                    "nosignal": true,
                    "poisonimmune": true,
                    "harmless": true,
                    "soulimmune": true,
                    "slashresist": true,
                    "pierceresist": true,
                    "electricresist": true,
                    "crushweakness": true,
                    "unarmedresist": true,
                    "chainimmune": true,
                    "glueresist": true,
                    "soapresist": true,
                    "tickleresist": true,
                    "groperesist": true,
                    "painresist": true,
                    "charmimmune": true
                },
                "spellResist": 0,
                "sneakthreshold": 0.6,
                "evasion": -9,
                "ignorechance": 1,
                "armor": 3,
                "followRange": 1,
                "AI": "ambush",
                "ambushRadius": 0,
                "difficulty": -0.05,
                "immobile": true,
                "visionRadius": 0,
                "maxhp": 10,
                "minLevel": 0,
                "weight": -4,
                "movePoints": 99999,
                "attackPoints": 4,
                "attack": "",
                "attackWidth": 8,
                "attackRange": 3,
                "power": 1,
                "dmgType": "souldrain",
                "terrainTags": {
                    "obstacle": 10,
                    "obstacletile": 50
                },
                "allFloors": true,
                "shrines": [],
                "events": [
                    {
                        "trigger": "duringDamageEnemy",
                        "type": "damageThreshold",
                        "power": 1,
                        "chance": 1
                    }
                ]
            },
            "id": 270,
            "x": 12,
            "y": 32,
            "hp": 10,
            "movePoints": 0,
            "attackPoints": 0,
            "buffs": {},
            "flags": {
                "fidget": 7,
                "targ_player": 1
            },
            "castCooldown": 0,
            "castCooldownSpecial": 0,
            "playWithPlayer": 0,
            "vulnerable": 0,
            "warningTiles": [],
            "personality": "NoBrain",
            "gxx": 12,
            "gyy": 32,
            "gx": 12,
            "gy": 32,
            "moved": false,
            "idle": true,
            "action": "",
            "flip": true,
            "sound": 0,
            "exertion": 0,
            "sprinted": false
        },
        {
            "summoned": true,
            "Enemy": {
                "name": "Apprentice",
                "nameList": "witch",
                "outfit": "ApprenticeBlue",
                "style": "Air",
                "faction": "Apprentice",
                "color": "#9563ff",
                "spellWhileParole": true,
                "bound": "Apprentice",
                "playLine": "Apprentice",
                "tags": {
                    "leashing": true,
                    "mage": true,
                    "opendoors": true,
                    "rope": true,
                    "binding": true,
                    "human": true,
                    "imprisonable": true,
                    "shadowclan": true,
                    "closedoors": true,
                    "apprentice": true,
                    "ropeRestraints": true,
                    "antiMagic": true,
                    "ranged": true,
                    "glueweakness": true,
                    "chainweakness": true,
                    "tickleweakness": true,
                    "search": true,
                    "jailer": true,
                    "jail": true
                },
                "followRange": 2,
                "castWhileMoving": true,
                "spells": [
                    "RopeEngulfWeak",
                    "EnemyEnchantRope",
                    "EnemyCM1"
                ],
                "unlockCommandLevel": 1,
                "unlockCommandCD": 90,
                "stopToCast": true,
                "spellRdy": true,
                "kite": 1.5,
                "kiteChance": 0.9,
                "cohesion": 1,
                "followLeashedOnly": true,
                "spellCooldownMult": 1,
                "spellCooldownMod": 0,
                "AI": "hunt",
                "guardChance": 0.6,
                "visionRadius": 5,
                "maxhp": 8,
                "minLevel": 2,
                "weight": 10,
                "movePoints": 2,
                "attackPoints": 3,
                "attack": "SpellMeleeBindLock",
                "attackWidth": 1,
                "attackRange": 1,
                "power": 1,
                "dmgType": "grope",
                "fullBoundBonus": 1,
                "terrainTags": {
                    "secondhalf": 3,
                    "lastthird": 3,
                    "increasingWeight": -1,
                    "apprentice": 4,
                    "rope": 4,
                    "magical": 4
                },
                "allFloors": true,
                "shrines": [
                    "Elements"
                ],
                "attackLock": "White",
                "stamina": 2,
                "maxblock": 0,
                "maxdodge": 0,
                "dropTable": [
                    {
                        "name": "RedKey",
                        "weight": 1
                    },
                    {
                        "name": "Nothing",
                        "weight": 29
                    }
                ]
            },
            "id": 271,
            "x": 24,
            "y": 19,
            "hp": 8,
            "movePoints": 0,
            "attackPoints": 0,
            "items": [],
            "faction": "Prisoner",
            "boundLevel": 88,
            "specialdialogue": "PrisonerJail",
            "flags": {
                "noswap": -1,
                "imprisoned": -1,
                "targ_player": 1
            },
            "buffs": {},
            "castCooldown": 0,
            "castCooldownSpecial": 0,
            "specialBoundLevel": {},
            "playWithPlayer": 0,
            "vulnerable": 0,
            "disarmflag": 0,
            "warningTiles": [],
            "sound": 2,
            "exertion": 0,
            "sprinted": false
        },
        {
            "Enemy": {
                "name": "AquaSlime",
                "clusterWith": "water",
                "faction": "Slime",
                "color": "#2277ee",
                "tags": {
                    "ignoretiedup": true,
                    "disarmimmune": true,
                    "blindimmune": true,
                    "elementsTrap": true,
                    "minor": true,
                    "water": true,
                    "melee": true,
                    "aquaRestraints": true,
                    "pierceweakness": true,
                    "electricweakness": true,
                    "acidresist": true,
                    "iceweakness": true
                },
                "squeeze": true,
                "ignorechance": 0.75,
                "followRange": 1,
                "AI": "hunt",
                "sneakThreshold": 1,
                "visionRadius": 4.5,
                "blindSight": 2.5,
                "maxhp": 7,
                "minLevel": 0,
                "weight": 8,
                "movePoints": 1.5,
                "attackPoints": 2,
                "attack": "MeleeBindSuicideWill",
                "suicideOnAdd": true,
                "attackWidth": 1,
                "attackRange": 1,
                "power": 1,
                "dmgType": "soap",
                "fullBoundBonus": 2,
                "Animations": [
                    "squishy"
                ],
                "Sound": {
                    "baseAmount": 0
                },
                "nopickpocket": true,
                "terrainTags": {
                    "water": 4,
                    "bubbleOptout": -3,
                    "bubblePref": 6,
                    "jungle": 20,
                    "temple": 4,
                    "elements": 4
                },
                "allFloors": true,
                "shrines": [
                    "Elements"
                ],
                "events": [
                    {
                        "trigger": "afterDamageEnemy",
                        "type": "bleedEffectTile",
                        "kind": "Water",
                        "aoe": 1.5,
                        "power": 1,
                        "chance": 1,
                        "duration": 20
                    }
                ]
            },
            "id": 272,
            "x": 18,
            "y": 27,
            "hp": 7,
            "movePoints": 0,
            "attackPoints": 0,
            "AI": "hunt",
            "spawnX": 19,
            "spawnY": 25,
            "items": [],
            "flags": {
                "NoFollow": -1,
                "wander": 25,
                "fidget": 7,
                "nofidget": 3,
                "targ_player": 1
            },
            "buffs": {},
            "castCooldown": 0,
            "castCooldownSpecial": 0,
            "playWithPlayer": 0,
            "vulnerable": 0,
            "warningTiles": [],
            "personality": "Brat",
            "gx": 17,
            "gy": 27,
            "moved": true,
            "idle": false,
            "fx": 17,
            "fy": 26,
            "action": "",
            "sound": 6,
            "exertion": 0,
            "sprinted": false,
            "aware": false,
            "lastx": 18,
            "lasty": 26
        },
        {
            "Enemy": {
                "name": "ExplosiveBarrel",
                "tags": {
                    "poisonmmune": true,
                    "soulimmune": true,
                    "noknockback": true,
                    "melee": true,
                    "minor": true,
                    "scenery": true,
                    "explosiveBarrel": true,
                    "notalk": true,
                    "nonvulnerable": true,
                    "nobrain": true,
                    "nosignal": true,
                    "immobile": true,
                    "fireweakness": true,
                    "stunweakness": true
                },
                "faction": "Barrel",
                "immobile": true,
                "lowpriority": true,
                "evasion": -100,
                "armor": 1,
                "followRange": 100,
                "AI": "wander",
                "difficulty": 0.01,
                "visionRadius": 0,
                "maxhp": 6,
                "minLevel": 0,
                "weight": -10,
                "movePoints": 1000,
                "attackPoints": 0,
                "attack": "",
                "attackRange": 0,
                "dropTable": [
                    {
                        "name": "Gunpowder",
                        "amount": 3,
                        "weight": 10,
                        "noSummon": true
                    }
                ],
                "Sound": {
                    "baseAmount": 0,
                    "moveAmount": 0
                },
                "events": [
                    {
                        "trigger": "afterDamageEnemy",
                        "type": "ExplosiveBarrel",
                        "chance": 0.5,
                        "power": 3,
                        "spell": "ExplosiveBarrel"
                    },
                    {
                        "trigger": "afterEnemyTick",
                        "type": "createEffectTile",
                        "kind": "Gunpowder",
                        "time": 4,
                        "power": 2,
                        "chance": 0.5,
                        "aoe": 0.5
                    }
                ],
                "terrainTags": {
                    "explosiveBarrel": 40,
                    "open": -16,
                    "passage": -30
                },
                "allFloors": true
            },
            "id": 273,
            "x": 18,
            "y": 24,
            "hp": 6,
            "movePoints": 0,
            "attackPoints": 0,
            "AI": "wander",
            "spawnX": 18,
            "spawnY": 24,
            "flags": {
                "NoFollow": -1,
                "fidget": 7,
                "targ_player": 1
            },
            "buffs": {},
            "castCooldown": 0,
            "castCooldownSpecial": 0,
            "playWithPlayer": 0,
            "vulnerable": 0,
            "warningTiles": [],
            "personality": "NoBrain",
            "gx": 18,
            "gy": 24,
            "moved": false,
            "idle": true,
            "action": "",
            "flip": true,
            "sound": 0,
            "exertion": 0,
            "sprinted": false
        },
        {
            "Enemy": {
                "name": "LatexCubeSmall",
                "faction": "Latex",
                "color": "#aa00cc",
                "tags": {
                    "ignoretiedup": true,
                    "unflinching": true,
                    "slime": true,
                    "latex": true,
                    "latexTrap": true,
                    "minor": true,
                    "melee": true,
                    "disarmimmune": true,
                    "chainimmune": true,
                    "glueresist": true,
                    "coldweakness": true,
                    "electricresist": true,
                    "pierceweakness": true,
                    "latexRestraints": true,
                    "latexEncaseRandom": true
                },
                "Animations": [
                    "squishyAmbush"
                ],
                "GFX": {
                    "AmbushSprite": "LatexCubeSmallHidden"
                },
                "stamina": 3,
                "nonDirectional": true,
                "RestraintFilter": {
                    "unlimitedRestraints": true
                },
                "nopickpocket": true,
                "Sound": {
                    "baseAmount": 0,
                    "moveAmount": 2
                },
                "difficulty": 0.3,
                "squeeze": true,
                "evasion": -0.5,
                "followRange": 1,
                "AI": "ambush",
                "sneakThreshold": 3,
                "ambushRadius": 1.5,
                "visionRadius": 7,
                "blindSight": 2.5,
                "maxhp": 7,
                "minLevel": 0,
                "weight": 1,
                "movePoints": 2,
                "attackPoints": 3,
                "attack": "MeleeBindSuicide",
                "attackWidth": 1,
                "attackRange": 1,
                "power": 2,
                "dmgType": "glue",
                "fullBoundBonus": 1,
                "disarm": 0.2,
                "suicideOnAdd": true,
                "focusPlayer": true,
                "multiBind": 3,
                "terrainTags": {
                    "slime": 3.5,
                    "plant": 3,
                    "passage": 30,
                    "open": -10,
                    "slimeOptOut": -1,
                    "slimePref": 1
                },
                "allFloors": true,
                "shrines": [
                    "Latex"
                ],
                "events": [
                    {
                        "trigger": "afterDamageEnemy",
                        "type": "bleedEffectTile",
                        "kind": "Slime",
                        "aoe": 1.5,
                        "power": 3,
                        "chance": 1,
                        "duration": 20
                    },
                    {
                        "trigger": "afterEnemyTick",
                        "type": "createEffectTile",
                        "kind": "LatexThin",
                        "time": 25,
                        "power": 2,
                        "chance": 0.5,
                        "aoe": 0.5
                    }
                ],
                "dropTable": [
                    {
                        "name": "Nothing",
                        "weight": 10
                    },
                    {
                        "name": "StaffGlue",
                        "weight": 3,
                        "ignoreInInventory": true
                    }
                ]
            },
            "id": 274,
            "x": 15,
            "y": 25,
            "hp": 7,
            "movePoints": 0,
            "attackPoints": 0,
            "AI": "ambush",
            "spawnX": 15,
            "spawnY": 25,
            "flags": {
                "NoFollow": -1,
                "targ_player": 1
            },
            "buffs": {},
            "castCooldown": 0,
            "castCooldownSpecial": 0,
            "playWithPlayer": 0,
            "vulnerable": 0,
            "warningTiles": [],
            "personality": "Brat",
            "gxx": 15,
            "gyy": 25,
            "gx": 15,
            "gy": 25,
            "moved": false,
            "idle": true,
            "action": "",
            "sound": 0,
            "exertion": 0,
            "sprinted": false
        },
        {
            "Enemy": {
                "name": "Scarves",
                "faction": "KinkyConstruct",
                "clusterWith": "construct",
                "tags": {
                    "ignoreharmless": true,
                    "construct": true,
                    "nosignal": true,
                    "flying": true,
                    "poisonresist": true,
                    "soulimmune": true,
                    "melee": true,
                    "scarfRestraints": true,
                    "minor": true,
                    "firesevereweakness": true,
                    "acidweakness": true,
                    "soapweakness": true,
                    "slashweakness": true,
                    "meleeresist": true,
                    "doortrap": true
                },
                "ignorechance": 0.75,
                "armor": 0,
                "followRange": 1,
                "AI": "hunt",
                "ignoreflag": [
                    "scarves"
                ],
                "failAttackflag": [
                    "scarves"
                ],
                "squeeze": true,
                "visionRadius": 3,
                "visionSummoned": 12,
                "maxhp": 1,
                "minLevel": 0,
                "maxLevel": 3,
                "weight": 1,
                "movePoints": 1.5,
                "attackPoints": 2,
                "attack": "MeleeBind",
                "attackWidth": 1,
                "attackRange": 1,
                "power": 1,
                "dmgType": "plush",
                "fullBoundBonus": 1,
                "Attack": {
                    "mustBindorFail": true
                },
                "Resistance": {
                    "profile": [
                        "construct"
                    ]
                },
                "nopickpocket": true,
                "maxblock": 0,
                "maxdodge": 1,
                "stamina": 6,
                "nonDirectional": true,
                "terrainTags": {
                    "secondhalf": -1,
                    "lastthird": -2,
                    "increasingLevel": -2,
                    "revenge": 12,
                    "doortrap": 6,
                    "ribbon": 3
                },
                "allFloors": true,
                "shrines": [],
                "difficulty": 0.4
            },
            "id": 275,
            "x": 29,
            "y": 25,
            "hp": 1,
            "movePoints": 0,
            "attackPoints": 0,
            "AI": "guard",
            "spawnX": 29,
            "spawnY": 25,
            "items": [],
            "flags": {
                "NoFollow": -1,
                "restocked": 199,
                "targ_player": 1
            },
            "buffs": {},
            "castCooldown": 0,
            "castCooldownSpecial": 0,
            "playWithPlayer": 0,
            "vulnerable": 0,
            "warningTiles": [],
            "personality": "Brat",
            "gxx": 29,
            "gyy": 25,
            "gx": 29,
            "gy": 25,
            "moved": false,
            "idle": true,
            "action": "",
            "sound": 2,
            "exertion": 0,
            "sprinted": false
        },
        {
            "Enemy": {
                "name": "BlindZombie",
                "bound": "Zombie",
                "playLine": "Zombie",
                "clusterWith": "zombie",
                "tags": {
                    "ignoretiedup": true,
                    "nocapture": true,
                    "minor": true,
                    "zombie": true,
                    "melee": true,
                    "fireweakness": true,
                    "ribbonRestraints": true,
                    "meleeweakness": true
                },
                "evasion": -1,
                "ignorechance": 0.33,
                "armor": 0,
                "followRange": 1,
                "AI": "wander",
                "visionRadius": 2.5,
                "maxhp": 8,
                "minLevel": 0,
                "weight": 14,
                "movePoints": 3,
                "attackPoints": 4,
                "attack": "MeleeBind",
                "attackWidth": 1,
                "attackRange": 1,
                "power": 1,
                "dmgType": "grope",
                "fullBoundBonus": 1,
                "terrainTags": {
                    "increasingWeight": -1.5
                },
                "floors": {
                    "grv": true
                },
                "dropTable": [],
                "difficulty": 0.9
            },
            "id": 276,
            "x": 22,
            "y": 24,
            "hp": 8,
            "movePoints": 2,
            "attackPoints": 0,
            "AI": "wander",
            "spawnX": 22,
            "spawnY": 24,
            "items": [],
            "flags": {
                "NoFollow": -1,
                "wander": 48,
                "fidget": 7,
                "genpath": 26,
                "forcepath": 2,
                "targ_player": 1
            },
            "buffs": {},
            "castCooldown": 0,
            "castCooldownSpecial": 0,
            "playWithPlayer": 0,
            "vulnerable": 0,
            "warningTiles": [],
            "personality": "",
            "gx": 5,
            "gy": 13,
            "moved": true,
            "idle": false,
            "fx": 21,
            "fy": 24,
            "action": "",
            "sound": 6,
            "exertion": 0,
            "sprinted": false,
            "aware": false
        },
        {
            "Enemy": {
                "name": "Bandit",
                "style": "Earth",
                "outfit": "Bandit",
                "faction": "Bandit",
                "clusterWith": "bandit",
                "playLine": "Bandit",
                "bound": "Bandit",
                "tags": {
                    "opendoors": true,
                    "closedoors": true,
                    "leashing": true,
                    "cacheguard": true,
                    "imprisonable": true,
                    "bandit": true,
                    "minor": true,
                    "melee": true,
                    "leatherRestraints": true,
                    "leatherRestraintsHeavy": true,
                    "clothRestraints": true,
                    "chainweakness": true,
                    "glueweakness": true,
                    "jail": true,
                    "jailer": true,
                    "search": true
                },
                "cohesion": 0.9,
                "armor": 0,
                "followRange": 1,
                "AI": "hunt",
                "spells": [
                    "BanditBola"
                ],
                "spellCooldownMult": 1,
                "spellCooldownMod": 8,
                "noSpellLeashing": true,
                "difficulty": 0.9,
                "miscastmsg": "KDBanditMiscast",
                "miscastsfx": "Miss",
                "visionRadius": 6,
                "maxhp": 9,
                "minLevel": 0,
                "maxLevel": 9,
                "weight": 23,
                "movePoints": 2,
                "attackPoints": 3,
                "attack": "SpellMeleeBindLock",
                "attackWidth": 1,
                "attackRange": 1,
                "power": 1,
                "dmgType": "grope",
                "fullBoundBonus": 2,
                "terrainTags": {
                    "thirdhalf": -4,
                    "increasingWeight": -1,
                    "BanditEnemy": -7,
                    "BanditWanted": -6,
                    "BanditHated": -5
                },
                "shrines": [
                    "Leather"
                ],
                "floors": {
                    "jng": true,
                    "cry": true
                },
                "attackLock": "White",
                "stamina": 3,
                "maxblock": 1,
                "maxdodge": 1,
                "dropTable": [
                    {
                        "name": "Gold",
                        "amountMin": 5,
                        "amountMax": 15,
                        "weight": 24
                    },
                    {
                        "name": "Rope",
                        "weight": 3.5,
                        "ignoreInInventory": true
                    }
                ]
            },
            "id": 277,
            "x": 28,
            "y": 17,
            "hp": 9,
            "movePoints": 0,
            "attackPoints": 0,
            "AI": "guard",
            "faction": "Bandit",
            "spawnX": 28,
            "spawnY": 17,
            "keys": true,
            "items": [
                "HighsecLegbinder",
                "HarnessGag"
            ],
            "flags": {
                "NoFollow": -1,
                "Shop": -1,
                "GunSell": -1,
                "fidget": 7,
                "targ_player": 1
            },
            "gold": 200,
            "buffs": {},
            "castCooldown": 0,
            "castCooldownSpecial": 0,
            "playWithPlayer": 0,
            "vulnerable": 0,
            "warningTiles": [],
            "personality": "Brat",
            "gxx": 28,
            "gyy": 17,
            "gx": 28,
            "gy": 17,
            "moved": false,
            "idle": true,
            "action": "",
            "flip": true,
            "sound": 2,
            "exertion": 0,
            "sprinted": false
        },
        {
            "Enemy": {
                "name": "Bandit",
                "style": "Earth",
                "outfit": "Bandit",
                "faction": "Bandit",
                "clusterWith": "bandit",
                "playLine": "Bandit",
                "bound": "Bandit",
                "tags": {
                    "opendoors": true,
                    "closedoors": true,
                    "leashing": true,
                    "cacheguard": true,
                    "imprisonable": true,
                    "bandit": true,
                    "minor": true,
                    "melee": true,
                    "leatherRestraints": true,
                    "leatherRestraintsHeavy": true,
                    "clothRestraints": true,
                    "chainweakness": true,
                    "glueweakness": true,
                    "jail": true,
                    "jailer": true,
                    "search": true
                },
                "cohesion": 0.9,
                "armor": 0,
                "followRange": 1,
                "AI": "hunt",
                "spells": [
                    "BanditBola"
                ],
                "spellCooldownMult": 1,
                "spellCooldownMod": 8,
                "noSpellLeashing": true,
                "difficulty": 0.9,
                "miscastmsg": "KDBanditMiscast",
                "miscastsfx": "Miss",
                "visionRadius": 6,
                "maxhp": 9,
                "minLevel": 0,
                "maxLevel": 9,
                "weight": 23,
                "movePoints": 2,
                "attackPoints": 3,
                "attack": "SpellMeleeBindLock",
                "attackWidth": 1,
                "attackRange": 1,
                "power": 1,
                "dmgType": "grope",
                "fullBoundBonus": 2,
                "terrainTags": {
                    "thirdhalf": -4,
                    "increasingWeight": -1,
                    "BanditEnemy": -7,
                    "BanditWanted": -6,
                    "BanditHated": -5
                },
                "shrines": [
                    "Leather"
                ],
                "floors": {
                    "jng": true,
                    "cry": true
                },
                "attackLock": "White",
                "stamina": 3,
                "maxblock": 1,
                "maxdodge": 1,
                "dropTable": [
                    {
                        "name": "Gold",
                        "amountMin": 5,
                        "amountMax": 15,
                        "weight": 24
                    },
                    {
                        "name": "Rope",
                        "weight": 3.5,
                        "ignoreInInventory": true
                    }
                ]
            },
            "id": 278,
            "x": 28,
            "y": 19,
            "hp": 9,
            "movePoints": 0,
            "attackPoints": 0,
            "AI": "guard",
            "faction": "Bandit",
            "spawnX": 28,
            "spawnY": 19,
            "keys": true,
            "items": [
                "PanelGag",
                "LeatherAnkleCuffs"
            ],
            "flags": {
                "NoFollow": -1,
                "Shop": -1,
                "BombSell": -1,
                "fidget": 7,
                "targ_player": 1
            },
            "gold": 200,
            "buffs": {},
            "castCooldown": 0,
            "castCooldownSpecial": 0,
            "playWithPlayer": 0,
            "vulnerable": 0,
            "warningTiles": [],
            "personality": "Sub",
            "gxx": 28,
            "gyy": 19,
            "gx": 28,
            "gy": 19,
            "moved": false,
            "idle": true,
            "action": "",
            "flip": true,
            "sound": 2,
            "exertion": 0,
            "sprinted": false
        },
        {
            "Enemy": {
                "name": "ExplosiveBarrel",
                "tags": {
                    "poisonmmune": true,
                    "soulimmune": true,
                    "noknockback": true,
                    "melee": true,
                    "minor": true,
                    "scenery": true,
                    "explosiveBarrel": true,
                    "notalk": true,
                    "nonvulnerable": true,
                    "nobrain": true,
                    "nosignal": true,
                    "immobile": true,
                    "fireweakness": true,
                    "stunweakness": true
                },
                "faction": "Barrel",
                "immobile": true,
                "lowpriority": true,
                "evasion": -100,
                "armor": 1,
                "followRange": 100,
                "AI": "wander",
                "difficulty": 0.01,
                "visionRadius": 0,
                "maxhp": 6,
                "minLevel": 0,
                "weight": -10,
                "movePoints": 1000,
                "attackPoints": 0,
                "attack": "",
                "attackRange": 0,
                "dropTable": [
                    {
                        "name": "Gunpowder",
                        "amount": 3,
                        "weight": 10,
                        "noSummon": true
                    }
                ],
                "Sound": {
                    "baseAmount": 0,
                    "moveAmount": 0
                },
                "events": [
                    {
                        "trigger": "afterDamageEnemy",
                        "type": "ExplosiveBarrel",
                        "chance": 0.5,
                        "power": 3,
                        "spell": "ExplosiveBarrel"
                    },
                    {
                        "trigger": "afterEnemyTick",
                        "type": "createEffectTile",
                        "kind": "Gunpowder",
                        "time": 4,
                        "power": 2,
                        "chance": 0.5,
                        "aoe": 0.5
                    }
                ],
                "terrainTags": {
                    "explosiveBarrel": 40,
                    "open": -16,
                    "passage": -30
                },
                "allFloors": true
            },
            "id": 279,
            "x": 20,
            "y": 15,
            "hp": 6,
            "movePoints": 0,
            "attackPoints": 0,
            "AI": "wander",
            "flags": {
                "NoFollow": -1,
                "fidget": 7,
                "targ_player": 1
            },
            "buffs": {},
            "castCooldown": 0,
            "castCooldownSpecial": 0,
            "playWithPlayer": 0,
            "vulnerable": 0,
            "warningTiles": [],
            "personality": "NoBrain",
            "gx": 20,
            "gy": 15,
            "moved": false,
            "idle": true,
            "action": "",
            "flip": true,
            "sound": 0,
            "exertion": 0,
            "sprinted": false
        },
        {
            "Enemy": {
                "name": "WolfApprentice",
                "style": "Nevermere",
                "outfit": "Wolfgirl",
                "faction": "Nevermere",
                "clusterWith": "nevermere",
                "bound": "Wolfgirl",
                "color": "#00EFAB",
                "playLine": "Wolfgirl",
                "tags": {
                    "leashing": true,
                    "imprisonable": true,
                    "nevermere": true,
                    "trainer": true,
                    "wolfgirl": true,
                    "jailer": true,
                    "opendoors": true,
                    "unflinching": true,
                    "closedoors": true,
                    "wolfRestraints": true,
                    "melee": true,
                    "elite": true,
                    "glueweakness": true,
                    "ticklesevereweakness": true,
                    "iceresist": true,
                    "electricresist": true,
                    "charmweakness": true,
                    "stunweakness": true,
                    "jail": true,
                    "hunter": true
                },
                "spells": [
                    "SummonWolfDrone"
                ],
                "spellCooldownMult": 1,
                "spellCooldownMod": 0,
                "AI": "hunt",
                "visionRadius": 10,
                "maxhp": 9,
                "minLevel": 0,
                "weight": 1,
                "movePoints": 2.5,
                "events": [
                    {
                        "trigger": "tick",
                        "type": "secretToy"
                    }
                ],
                "maxblock": 1,
                "maxdodge": 1,
                "armor": 0.5,
                "RemoteControl": {
                    "punishRemote": 3,
                    "punishRemoteChance": 0.15
                },
                "stamina": 2,
                "attackLock": "White",
                "followRange": 1,
                "kite": 2.5,
                "dontKiteWhenDisabled": true,
                "castWhileMoving": true,
                "attackPoints": 3,
                "attack": "MeleeBindLockWillSpell",
                "attackWidth": 1,
                "attackRange": 1,
                "tilesMinRange": 1,
                "power": 2,
                "dmgType": "grope",
                "sneakThreshold": 2.5,
                "terrainTags": {
                    "secondhalf": 1,
                    "lastthird": 2,
                    "metalAnger": 12,
                    "metalRage": 6,
                    "metalPleased": 5,
                    "metalFriendly": 10,
                    "nevermere": 15
                },
                "allFloors": true,
                "shrines": [
                    "Metal"
                ],
                "dropTable": [
                    {
                        "name": "Gold",
                        "amountMin": 15,
                        "amountMax": 20,
                        "weight": 10
                    },
                    {
                        "name": "EscortDrone",
                        "weight": 0.25,
                        "ignoreInInventory": true
                    }
                ]
            },
            "id": 280,
            "x": 16,
            "y": 20,
            "hp": 9,
            "movePoints": 0.5,
            "attackPoints": 0,
            "AI": "hunt",
            "items": [
                "AncientPowerSource",
                "WolfAnkleCuffs",
                "ShockModule",
                "WolfPanties"
            ],
            "flags": {
                "NoFollow": -1,
                "Shop": -1,
                "WolfgirlSell": -1,
                "wander": 15,
                "targ_player": 1,
                "nofidget": 3
            },
            "gold": 360,
            "buffs": {
                "Toy": {
                    "id": "Toy",
                    "type": "Plug",
                    "power": 0.1,
                    "duration": 9999,
                    "infinite": true,
                    "range": 0.5,
                    "tags": [
                        "toy"
                    ]
                }
            },
            "castCooldown": 0,
            "castCooldownSpecial": 0,
            "playWithPlayer": 0,
            "vulnerable": 0,
            "domVariance": -0.0013449418125674128,
            "warningTiles": [],
            "personality": "Dom",
            "gx": 18,
            "gy": 20,
            "moved": true,
            "idle": false,
            "fx": 17,
            "fy": 20,
            "action": "",
            "sound": 6,
            "exertion": 0,
            "sprinted": false,
            "aware": false,
            "flip": true,
            "lastx": 15,
            "lasty": 20
        },
        {
            "Enemy": {
                "name": "WitchWater",
                "nameList": "witch",
                "outfit": "WitchWater",
                "style": "Water",
                "faction": "Witch",
                "clusterWith": "elemental",
                "bound": "WitchWater",
                "playLine": "Witch",
                "color": "#4572e3",
                "tags": {
                    "leashing": true,
                    "mage": true,
                    "guardCall": true,
                    "jailer": true,
                    "opendoors": true,
                    "imprisonable": true,
                    "handcuffer": true,
                    "water": true,
                    "closedoors": true,
                    "human": true,
                    "witch": true,
                    "ranged": true,
                    "elite": true,
                    "unflinching": true,
                    "fireresist": true,
                    "acidresist": true,
                    "soapresist": true,
                    "electricsevereweakness": true,
                    "pierceresist": true,
                    "hunter": true,
                    "latexRestraints": true
                },
                "followRange": 1,
                "castWhileMoving": true,
                "spells": [
                    "WitchWaterBall",
                    "EnemyCM1"
                ],
                "unlockCommandLevel": 1,
                "unlockCommandCD": 30,
                "stopToCast": true,
                "spellRdy": true,
                "evasion": 0.25,
                "spellCooldownMult": 1,
                "spellCooldownMod": 0,
                "AI": "hunt",
                "guardChance": 0.6,
                "visionRadius": 7,
                "maxhp": 11,
                "minLevel": 0,
                "weight": 2,
                "movePoints": 3,
                "attackPoints": 4,
                "attack": "SpellMeleeBindLock",
                "attackWidth": 1,
                "attackRange": 1,
                "power": 2,
                "dmgType": "grope",
                "fullBoundBonus": 3,
                "terrainTags": {
                    "secondhalf": 1,
                    "lastthird": 2,
                    "elementsAnger": 6,
                    "tech": -6,
                    "water": 6,
                    "ice": 2
                },
                "allFloors": true,
                "shrines": [],
                "followLeashedOnly": true,
                "attackLock": "White",
                "stamina": 2,
                "maxblock": 0,
                "maxdodge": 2,
                "dropTable": [
                    {
                        "name": "Gold",
                        "amountMin": 10,
                        "amountMax": 20,
                        "weight": 14,
                        "noSummon": true
                    }
                ]
            },
            "id": 281,
            "x": 34,
            "y": 10,
            "hp": 11,
            "movePoints": 0,
            "attackPoints": 0,
            "AI": "hunt",
            "items": [
                "RedKey",
                "BasicLeash",
                "LatexCorset",
                "LatexArmbinder",
                "LatexBallGag"
            ],
            "CustomName": "Marine",
            "CustomNameColor": "#4fa4b8",
            "CustomSprite": "",
            "flags": {
                "NoFollow": -1,
                "Shop": -1,
                "CookieSell": -1,
                "wander": 37,
                "targ_player": 1
            },
            "gold": 360,
            "buffs": {},
            "castCooldown": 0,
            "castCooldownSpecial": 0,
            "playWithPlayer": 0,
            "vulnerable": 0,
            "warningTiles": [],
            "personality": "Dom",
            "gx": 34,
            "gy": 10,
            "moved": false,
            "idle": true,
            "action": "",
            "sound": 2,
            "exertion": 0,
            "sprinted": false
        },
        {
            "Enemy": {
                "name": "ExplosiveBarrel",
                "tags": {
                    "poisonmmune": true,
                    "soulimmune": true,
                    "noknockback": true,
                    "melee": true,
                    "minor": true,
                    "scenery": true,
                    "explosiveBarrel": true,
                    "notalk": true,
                    "nonvulnerable": true,
                    "nobrain": true,
                    "nosignal": true,
                    "immobile": true,
                    "fireweakness": true,
                    "stunweakness": true
                },
                "faction": "Barrel",
                "immobile": true,
                "lowpriority": true,
                "evasion": -100,
                "armor": 1,
                "followRange": 100,
                "AI": "wander",
                "difficulty": 0.01,
                "visionRadius": 0,
                "maxhp": 6,
                "minLevel": 0,
                "weight": -10,
                "movePoints": 1000,
                "attackPoints": 0,
                "attack": "",
                "attackRange": 0,
                "dropTable": [
                    {
                        "name": "Gunpowder",
                        "amount": 3,
                        "weight": 10,
                        "noSummon": true
                    }
                ],
                "Sound": {
                    "baseAmount": 0,
                    "moveAmount": 0
                },
                "events": [
                    {
                        "trigger": "afterDamageEnemy",
                        "type": "ExplosiveBarrel",
                        "chance": 0.5,
                        "power": 3,
                        "spell": "ExplosiveBarrel"
                    },
                    {
                        "trigger": "afterEnemyTick",
                        "type": "createEffectTile",
                        "kind": "Gunpowder",
                        "time": 4,
                        "power": 2,
                        "chance": 0.5,
                        "aoe": 0.5
                    }
                ],
                "terrainTags": {
                    "explosiveBarrel": 40,
                    "open": -16,
                    "passage": -30
                },
                "allFloors": true
            },
            "id": 282,
            "x": 24,
            "y": 31,
            "hp": 6,
            "movePoints": 0,
            "attackPoints": 0,
            "AI": "wander",
            "flags": {
                "NoFollow": -1,
                "targ_player": 1
            },
            "buffs": {},
            "castCooldown": 0,
            "castCooldownSpecial": 0,
            "playWithPlayer": 0,
            "vulnerable": 0,
            "warningTiles": [],
            "personality": "NoBrain",
            "gx": 24,
            "gy": 31,
            "moved": false,
            "idle": true,
            "action": "",
            "sound": 0,
            "exertion": 0,
            "sprinted": false
        },
        {
            "Enemy": {
                "name": "WitchRope",
                "nameList": "witch",
                "outfit": "WitchRope",
                "style": "Earth",
                "color": "#ffae70",
                "faction": "Witch",
                "clusterWith": "apprentice",
                "bound": "WitchRope",
                "playLine": "Witch",
                "tags": {
                    "leashing": true,
                    "mage": true,
                    "guardCall": true,
                    "jail": true,
                    "rope": true,
                    "jailer": true,
                    "imprisonable": true,
                    "opendoors": true,
                    "ropeRestraints": true,
                    "closedoors": true,
                    "human": true,
                    "witch": true,
                    "ranged": true,
                    "elite": true,
                    "hunter": true
                },
                "followRange": 2,
                "castWhileMoving": true,
                "spells": [
                    "WitchRope",
                    "EnemyEnchantRope",
                    "RopeEngulfWeak",
                    "EnemyCM1"
                ],
                "unlockCommandLevel": 1,
                "unlockCommandCD": 30,
                "stopToCast": true,
                "spellRdy": true,
                "kite": 1.5,
                "kiteChance": 0.9,
                "spellCooldownMult": 1,
                "spellCooldownMod": 0,
                "AI": "hunt",
                "guardChance": 0.6,
                "visionRadius": 7,
                "maxhp": 10,
                "minLevel": 0,
                "weight": 4,
                "movePoints": 3,
                "attackPoints": 2,
                "attack": "SpellMeleeBind",
                "attackWidth": 1,
                "attackRange": 1,
                "power": 2,
                "dmgType": "grope",
                "fullBoundBonus": 3,
                "terrainTags": {
                    "secondhalf": 1,
                    "lastthird": 2,
                    "increasingWeight": -1,
                    "ropeAnger": 6,
                    "tech": -6,
                    "rope": 6
                },
                "allFloors": true,
                "shrines": [
                    "Rope"
                ],
                "followLeashedOnly": true,
                "stamina": 2,
                "maxblock": 1,
                "maxdodge": 1,
                "Magic": {
                    "castCooldownUnique": {
                        "EnemyEnchantRope": 6
                    },
                    "priority": {
                        "EnemyEnchantRope": 8
                    }
                },
                "dropTable": [
                    {
                        "name": "Gold",
                        "amountMin": 5,
                        "amountMax": 15,
                        "weight": 14,
                        "noSummon": true
                    },
                    {
                        "name": "RopeRune",
                        "weight": 1,
                        "noSummon": true
                    }
                ]
            },
            "id": 283,
            "x": 28,
            "y": 16,
            "hp": 10,
            "movePoints": 0,
            "attackPoints": 0,
            "AI": "looseguard",
            "items": [
                "RopeRune"
            ],
            "flags": {
                "NoFollow": -1,
                "wander": 18,
                "fidget": 7,
                "targ_player": 1,
                "nofidget": 3
            },
            "buffs": {},
            "castCooldown": 0,
            "castCooldownSpecial": 0,
            "playWithPlayer": 0,
            "vulnerable": 0,
            "warningTiles": [],
            "personality": "",
            "gxx": 28,
            "gyy": 16,
            "gx": 28,
            "gy": 16,
            "moved": true,
            "idle": false,
            "action": "",
            "flip": true,
            "sound": 6,
            "exertion": 0,
            "sprinted": false,
            "aware": false,
            "lastx": 28,
            "lasty": 15
        },
        {
            "Enemy": {
                "name": "ExplosiveBarrel",
                "tags": {
                    "poisonmmune": true,
                    "soulimmune": true,
                    "noknockback": true,
                    "melee": true,
                    "minor": true,
                    "scenery": true,
                    "explosiveBarrel": true,
                    "notalk": true,
                    "nonvulnerable": true,
                    "nobrain": true,
                    "nosignal": true,
                    "immobile": true,
                    "fireweakness": true,
                    "stunweakness": true
                },
                "faction": "Barrel",
                "immobile": true,
                "lowpriority": true,
                "evasion": -100,
                "armor": 1,
                "followRange": 100,
                "AI": "wander",
                "difficulty": 0.01,
                "visionRadius": 0,
                "maxhp": 6,
                "minLevel": 0,
                "weight": -10,
                "movePoints": 1000,
                "attackPoints": 0,
                "attack": "",
                "attackRange": 0,
                "dropTable": [
                    {
                        "name": "Gunpowder",
                        "amount": 3,
                        "weight": 10,
                        "noSummon": true
                    }
                ],
                "Sound": {
                    "baseAmount": 0,
                    "moveAmount": 0
                },
                "events": [
                    {
                        "trigger": "afterDamageEnemy",
                        "type": "ExplosiveBarrel",
                        "chance": 0.5,
                        "power": 3,
                        "spell": "ExplosiveBarrel"
                    },
                    {
                        "trigger": "afterEnemyTick",
                        "type": "createEffectTile",
                        "kind": "Gunpowder",
                        "time": 4,
                        "power": 2,
                        "chance": 0.5,
                        "aoe": 0.5
                    }
                ],
                "terrainTags": {
                    "explosiveBarrel": 40,
                    "open": -16,
                    "passage": -30
                },
                "allFloors": true
            },
            "id": 284,
            "x": 30,
            "y": 30,
            "hp": 6,
            "movePoints": 0,
            "attackPoints": 0,
            "AI": "wander",
            "flags": {
                "NoFollow": -1,
                "targ_player": 1
            },
            "buffs": {},
            "castCooldown": 0,
            "castCooldownSpecial": 0,
            "playWithPlayer": 0,
            "vulnerable": 0,
            "warningTiles": [],
            "personality": "NoBrain",
            "gx": 30,
            "gy": 30,
            "moved": false,
            "idle": true,
            "action": "",
            "sound": 0,
            "exertion": 0,
            "sprinted": false
        },
        {
            "Enemy": {
                "name": "Ribbons",
                "faction": "KinkyConstruct",
                "color": "#f135a4",
                "clusterWith": "dressmaker",
                "tags": {
                    "ropeTrap": true,
                    "ignoreharmless": true,
                    "construct": true,
                    "ribbon": true,
                    "nosignal": true,
                    "melee": true,
                    "magicRibbons": true,
                    "minor": true,
                    "meleeresist": true,
                    "doortrap": true,
                    "flying": true
                },
                "ignorechance": 0.75,
                "armor": 0,
                "followRange": 1,
                "AI": "hunt",
                "ignoreflag": [
                    "ribbons"
                ],
                "failAttackflag": [
                    "ribbons"
                ],
                "squeeze": true,
                "visionRadius": 5,
                "visionSummoned": 12,
                "maxhp": 6,
                "minLevel": 0,
                "weight": 0,
                "movePoints": 1.25,
                "attackPoints": 3,
                "attack": "MeleeBind",
                "attackWidth": 1,
                "attackRange": 1,
                "power": 1,
                "dmgType": "chain",
                "fullBoundBonus": 1,
                "Resistance": {
                    "profile": [
                        "rope",
                        "construct"
                    ]
                },
                "nopickpocket": true,
                "maxblock": 0,
                "maxdodge": 1,
                "nonDirectional": true,
                "Attack": {
                    "mustBindorFail": true
                },
                "terrainTags": {
                    "dressmaker": 7,
                    "conjureAnger": 4,
                    "ribbon": 3,
                    "revenge": 4
                },
                "allFloors": true,
                "shrines": [
                    "Conjure",
                    "Rope"
                ],
                "difficulty": 0.2,
                "ondeath": [
                    {
                        "type": "spellOnSelf",
                        "spell": "RibbonBurst"
                    }
                ]
            },
            "id": 285,
            "x": 32,
            "y": 25,
            "hp": 6,
            "movePoints": 0.5,
            "attackPoints": 0,
            "AI": "hunt",
            "items": [],
            "flags": {
                "NoFollow": -1,
                "wander": 19,
                "genpath": 17,
                "nofidget": 3,
                "targ_player": 1,
                "restocked": 200
            },
            "buffs": {},
            "castCooldown": 0,
            "castCooldownSpecial": 0,
            "playWithPlayer": 0,
            "vulnerable": 0,
            "warningTiles": [],
            "personality": "Sub",
            "gx": 33,
            "gy": 26,
            "moved": true,
            "idle": false,
            "fx": 33,
            "fy": 26,
            "action": "",
            "sound": 6,
            "exertion": 0,
            "sprinted": false,
            "aware": false,
            "path": [
                {
                    "x": 33,
                    "y": 26
                }
            ],
            "lastx": 32,
            "lasty": 24,
            "flip": true
        },
        {
            "Enemy": {
                "name": "Rat",
                "faction": "Beast",
                "tags": {
                    "ignorenoSP": true,
                    "beast": true,
                    "darkvision": true,
                    "melee": true,
                    "minor": true
                },
                "followRange": 1,
                "AI": "guard",
                "squeeze": true,
                "visionRadius": 4,
                "maxhp": 1,
                "evasion": 0.5,
                "minLevel": 0,
                "weight": 8,
                "movePoints": 1.5,
                "attackPoints": 2,
                "attack": "MeleeWill",
                "attackWidth": 1,
                "attackRange": 1,
                "power": 1,
                "dmgType": "pain",
                "terrainTags": {
                    "rubble": 20,
                    "increasingWeight": -5
                },
                "floors": {
                    "grv": true
                }
            },
            "id": 286,
            "x": 30,
            "y": 3,
            "hp": 1,
            "movePoints": 0,
            "attackPoints": 0,
            "AI": "guard",
            "flags": {
                "NoFollow": -1,
                "fidget": 7,
                "targ_player": 1
            },
            "buffs": {},
            "castCooldown": 0,
            "castCooldownSpecial": 0,
            "playWithPlayer": 0,
            "vulnerable": 0,
            "warningTiles": [],
            "personality": "Sub",
            "gxx": 30,
            "gyy": 3,
            "gx": 30,
            "gy": 3,
            "moved": false,
            "idle": true,
            "action": "",
            "flip": true,
            "sound": 2,
            "exertion": 0,
            "sprinted": false
        },
        {
            "Enemy": {
                "name": "AquaSlime",
                "clusterWith": "water",
                "faction": "Slime",
                "color": "#2277ee",
                "tags": {
                    "ignoretiedup": true,
                    "disarmimmune": true,
                    "blindimmune": true,
                    "elementsTrap": true,
                    "minor": true,
                    "water": true,
                    "melee": true,
                    "aquaRestraints": true,
                    "pierceweakness": true,
                    "electricweakness": true,
                    "acidresist": true,
                    "iceweakness": true
                },
                "squeeze": true,
                "ignorechance": 0.75,
                "followRange": 1,
                "AI": "hunt",
                "sneakThreshold": 1,
                "visionRadius": 4.5,
                "blindSight": 2.5,
                "maxhp": 7,
                "minLevel": 0,
                "weight": 8,
                "movePoints": 1.5,
                "attackPoints": 2,
                "attack": "MeleeBindSuicideWill",
                "suicideOnAdd": true,
                "attackWidth": 1,
                "attackRange": 1,
                "power": 1,
                "dmgType": "soap",
                "fullBoundBonus": 2,
                "Animations": [
                    "squishy"
                ],
                "Sound": {
                    "baseAmount": 0
                },
                "nopickpocket": true,
                "terrainTags": {
                    "water": 4,
                    "bubbleOptout": -3,
                    "bubblePref": 6,
                    "jungle": 20,
                    "temple": 4,
                    "elements": 4
                },
                "allFloors": true,
                "shrines": [
                    "Elements"
                ],
                "events": [
                    {
                        "trigger": "afterDamageEnemy",
                        "type": "bleedEffectTile",
                        "kind": "Water",
                        "aoe": 1.5,
                        "power": 1,
                        "chance": 1,
                        "duration": 20
                    }
                ]
            },
            "id": 287,
            "x": 39,
            "y": 28,
            "hp": 7,
            "movePoints": 0,
            "attackPoints": 0,
            "AI": "hunt",
            "items": [],
            "flags": {
                "NoFollow": -1,
                "wander": 14,
                "restocked": 198,
                "nofidget": 3,
                "targ_player": 1
            },
            "buffs": {},
            "castCooldown": 0,
            "castCooldownSpecial": 0,
            "playWithPlayer": 0,
            "vulnerable": 0,
            "warningTiles": [],
            "personality": "Brat",
            "gx": 40,
            "gy": 27,
            "moved": true,
            "idle": false,
            "fx": 40,
            "fy": 27,
            "action": "",
            "sound": 6,
            "exertion": 0,
            "sprinted": false,
            "aware": false,
            "flip": true,
            "lastx": 38,
            "lasty": 27
        }
    ],
    "FogGrid": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        3,
        0,
        2,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3,
        3,
        3,
        3,
        3,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3,
        3,
        3,
        3,
        3,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3,
        3,
        3,
        3,
        3,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3,
        3,
        3,
        3,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3,
        3,
        3,
        3,
        3,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    "Grid": "11111111111111111111111111111111111111111111\n114411111114111XA1r1aX1111111111411C11111111\n111111111111111a22222M10-02-00-02-T111111141\n11M21X11/r0r0r01200021122222222222241X12M111\n112200000000000020-02002X11X14X11X2200022111\n1410000020r0r0242020212222222222222000001111\n11X021111111111a22222A12-00+00-00-011100X111\n111R01111111414Xa104GX1111111141111111001111\n11110011111211111104111411111411111111001111\n111110111-0012gg2401a11r4111C-4411r111001111\n11+01D1112101g11g10124001a10T201a1001100X111\n11O00020020002010200020222002200220002201111\n11-01T11110X01g111g1010022111111200000022141\n111110141A21g12/1121011000Xo00oX00211X12a141\n11112011112g214111g4041100000000001111111111\n1Xa101MX41g12g001-20010000000111011114111111\n1A22222a4200011g11g1010111b1042000/111441111\n112000211b1221CT11210101000b210000011X12a141\n1S20-0200011g10011g122010B0D0000220000022111\n11202T241020211b1-21A101200b010-A-0120001111\n1A22222a1A101112200111011111010022011400X111\n1Xa101AX141011111021410000000144411111001111\n11110111112004111002111100041110001111101111\n11110111100004bb40201bb40001bb40000410200/11\n1110002100X00-Rr-T00-r0-TR0+LL-20X0010-00011\n111000000000020020r0TR22002Tr020200012O200s1\n141202010r000-2r-T0T-0/-00r-0T-2000012-02011\n11110111120001441000411400041410000140000/11\n11110111110004111R2011112021111C001411101111\n1110011111411111111111Xa121AX111211111001111\n114204111/1111C+1111r1a22222a122222111001141\n11X00111001M102201a102420002112a2A2411001141\n11100002000200220222002202020022222111001111\n1422000002021111112002122022112a2A2111rR1111\n11a21X111000Xo00oX2201a22222a422222111C11111\n1111111111C00220200C11XA4r1aX111111111111111\n11111111111111111111111111111111111111111111\n",
    "Traffic": [
        [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            0,
            3,
            3,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            0,
            0,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            0,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            0,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            0,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            0,
            0,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            0,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            3,
            3,
            0,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            0,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            0,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            0,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            0,
            0,
            0,
            3,
            3,
            3,
            0,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            0,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            0,
            0,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            3,
            3,
            3,
            3,
            3,
            3,
            0,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ],
        [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ]
    ],
    "GridWidth": 44,
    "GridHeight": 37,
    "MapBrightness": 7,
    "PatrolPoints": [
        {
            "x": 28,
            "y": 18
        },
        {
            "x": 16,
            "y": 11
        },
        {
            "x": 18,
            "y": 17
        },
        {
            "x": 27,
            "y": 32
        }
    ],
    "StartPosition": {
        "x": 1,
        "y": 18
    },
    "EndPosition": {
        "x": 42,
        "y": 25
    },
    "ShortcutPositions": [
        {
            "x": 25,
            "y": 35
        },
        {
            "x": 18,
            "y": 1
        }
    ],
    "JailPoints": [
        {
            "x": 28,
            "y": 24,
            "type": "furniture",
            "radius": 1
        },
        {
            "x": 29,
            "y": 24,
            "type": "furniture",
            "radius": 1
        },
        {
            "x": 25,
            "y": 18,
            "type": "jail",
            "radius": 1
        }
    ],
    "ShopItems": [
        {
            "name": "Rock",
            "shoptype": "weapon",
            "rarity": 0
        },
        {
            "name": "PotionMana",
            "shoptype": "consumable",
            "rarity": 0
        },
        {
            "name": "Cookie",
            "shoptype": "consumable",
            "rarity": 0
        },
        {
            "name": "Lockpick",
            "shoptype": "basic",
            "rarity": 0
        },
        {
            "name": "CookieJailer",
            "shoptype": "consumable",
            "rarity": 0
        },
        {
            "name": "RedKey",
            "shoptype": "basic",
            "rarity": 0
        },
        {
            "name": "3Bola",
            "shoptype": "basic",
            "consumable": "Bola",
            "quantity": 3,
            "rarity": 0
        },
        {
            "name": "Bow",
            "shoptype": "weapon",
            "rarity": 2
        },
        {
            "name": "SlimeWalkers",
            "shoptype": "looserestraint",
            "rarity": 2
        },
        {
            "name": "ScrollArms",
            "shoptype": "consumable",
            "rarity": 2
        }
    ],
    "PoolUses": 0,
    "PoolUsesGrace": 3,
    "CategoryIndex": {
        "2,2": {
            "category": "temple",
            "tags": [
                "temple",
                "hall",
                "narrow"
            ]
        },
        "2,3": {
            "category": "temple",
            "tags": [
                "temple",
                "hall",
                "narrow"
            ]
        },
        "3,2": {
            "category": "temple",
            "tags": [
                "temple",
                "hall",
                "narrow"
            ]
        },
        "3,3": {
            "category": "temple",
            "tags": [
                "temple",
                "hall",
                "narrow"
            ]
        },
        "3,1": {
            "category": "temple",
            "tags": [
                "temple",
                "hall",
                "wide"
            ]
        },
        "2,4": {
            "category": "temple",
            "tags": [
                "temple",
                "long",
                "hall"
            ]
        },
        "3,4": {
            "category": "temple",
            "tags": [
                "temple",
                "long",
                "hall"
            ]
        },
        "4,4": {
            "category": "temple",
            "tags": [
                "temple",
                "long",
                "hall"
            ]
        },
        "5,4": {
            "category": "temple",
            "tags": [
                "temple",
                "long",
                "hall"
            ]
        },
        "4,3": {
            "category": "urban",
            "tags": [
                "urban",
                "narrow"
            ]
        },
        "5,5": {
            "category": "temple",
            "tags": [
                "temple",
                "hall",
                "wide"
            ]
        },
        "4,2": {
            "category": "temple",
            "tags": [
                "temple",
                "hall",
                "wide"
            ]
        },
        "5,2": {
            "category": "temple",
            "tags": [
                "temple",
                "hall",
                "wide"
            ]
        },
        "5,3": {
            "category": "urban",
            "tags": [
                "urban",
                "wide"
            ]
        },
        "4,1": {
            "category": "temple",
            "tags": [
                "temple",
                "2wide"
            ]
        },
        "5,1": {
            "category": "temple",
            "tags": [
                "temple",
                "2wide"
            ]
        },
        "1,4": {
            "category": "urban",
            "tags": [
                "urban",
                "narrow"
            ]
        },
        "1,2": {
            "category": "urban",
            "tags": [
                "urban",
                "narrow"
            ]
        },
        "6,2": {
            "category": "temple",
            "tags": [
                "temple",
                "2wide"
            ]
        },
        "1,1": {
            "category": "temple",
            "tags": [
                "temple",
                "2wide"
            ]
        },
        "1,5": {
            "category": "temple",
            "tags": [
                "temple",
                "2wide"
            ]
        },
        "6,1": {
            "category": "temple",
            "tags": [
                "temple",
                "2wide"
            ]
        },
        "6,3": {
            "category": "temple",
            "tags": [
                "temple",
                "2wide"
            ]
        },
        "1,3": {
            "category": "temple",
            "tags": [
                "temple",
                "hall",
                "wide"
            ]
        },
        "6,4": {
            "category": "urban",
            "tags": [
                "urban",
                "wide"
            ]
        },
        "6,5": {
            "category": "urban",
            "tags": [
                "urban",
                "2wide"
            ]
        },
        "2,5": {
            "category": "temple",
            "tags": [
                "temple",
                "hall",
                "wide"
            ]
        },
        "3,5": {
            "category": "temple",
            "tags": [
                "temple",
                "hall",
                "wide"
            ]
        },
        "2,1": {
            "category": "urban",
            "tags": [
                "urban",
                "wide"
            ]
        },
        "4,5": {
            "category": "temple",
            "tags": [
                "temple",
                "hall",
                "wide"
            ]
        }
    },
    "JailFaction": [
        "Bandit"
    ],
    "GuardFaction": [
        "Bandit",
        "Bandit"
    ],
    "MapFaction": "",
    "EscapeMethod": "Key",
    "KillTarget": "",
    "KillQuota": -1,
    "TrapQuota": -1,
    "TrapsTriggered": 0,
    "ChestQuota": -1,
    "ChestsOpened": 0,
    "QuestQuota": -1,
    "QuestsAccepted": 0,
    "KeyQuota": 1,
    "KeysHeld": 0,
    "flags": [
        "WillQuest",
        "MetalQuest",
        "RopeQuest"
    ]
}
*/