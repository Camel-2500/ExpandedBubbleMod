function RandomNumGen(length) {
    let random = (Math.floor(Math.random() * length)) + 1
    return random
}


//struggle sounds

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

KDSFXGroups["LatexRestrainEscape"] =
{
    sfx: "NoSound",
    sfxEscape:
    {
        Struggle: "NoSound",
        Cut: "NoSound",
        Remove: "NoSound",
    },
}

//struggle sounds for my latex restrain
KDEventMapInventory["struggle"]["StruggleLatexRestrain"] = (e, item, data) => {
    if (data.restraint && data.restraint.type === Restraint && data.restraint.name == item.name && data.struggleType !== "Cut") {
        if (data.struggleType === "Struggle" || data.struggleType === "Remove")
            if (KinkyDungeonPlayerTags.has("SeamlessStraitjackets")) {//このifいれないと、struggleしたときに毎回効果音流れる
                let random = (Math.floor(Math.random() * 7)) + 1
                let sfx = "LatexStruggle" + random
                console.log(sfx)
                if (KDToggles.Sound) { KinkyDungeonPlaySound(KinkyDungeonRootDirectory + "Audio/" + sfx + ".ogg"); }
            }
    }
}

let CEBMCurrentTime = 0;
KDEventMapInventory["postApply"]["TurnTimer"] = (e, item, data) => {
    //removeされたのが、PlugGagかを調べるfor文
    CEBMCurrentTime = KinkyDungeonCurrentTick;
    console.log("CEBMCurrentTime:" + CEBMCurrentTime);
    //let restrain = KinkyDungeonGetRestraintByName(item.name);
    //restrain.Model = "LatexPlugGag";

}

let plugGagRestrainSkins = ["", "", ""]
KDEventMapInventory["tick"]["CheckHole"] = (e, item, data) => {
    let restrain = KinkyDungeonGetRestraintByName(item.name)
    let CurrentTime = KinkyDungeonCurrentTick;
    console.log(CurrentTime)
    console.log(CurrentTime - CEBMCurrentTime)
    console.log("before " + item.name)
    if (item.name == "LatexPlugGag") {
        plugGagRestrainSkins[0] = "LatexPlugGag"
        plugGagRestrainSkins[1] = "BADLatexPlugGag"
        plugGagRestrainSkins[2] = "LatexPlugGagClosed"
    }

    else if (item.name == "MuzzlePlugGag") {
        plugGagRestrainSkins[0] = "MuzzlePlugGag"
        plugGagRestrainSkins[1] = "BADMuzzlePlugGag"
        plugGagRestrainSkins[2] = "MuzzlePlugGagClosed"
    }


    console.log("after" + plugGagRestrainSkins)

    if (CurrentTime - CEBMCurrentTime >= 28 && item.lock == "") {
        restrain.Model = plugGagRestrainSkins[1]
    }
    else {
        restrain.Model = plugGagRestrainSkins[0]
    }
    if (item.lock !== "") {
        restrain.Model = plugGagRestrainSkins[2]
    }
    else {
        if (restrain.Model == plugGagRestrainSkins[2]) {
            restrain.Model = plugGagRestrainSkins[0]
        }
    }
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//|                                                                                           Bubble and Mermaid                                                    |
//------------------------------------------------------------------------------------------------------------------------------------------------------------

let OrigiHhobble
let OrigiHeelpower

let CheckedBuff1 = false

//Bubble Function
KDEventMapInventory["tick"]["BubbleState"] = (e, item, data) => {
    console.log(KDGameData)
    console.log(data.chestType)
    if (KinkyDungeonPlayerTags.has("ModBubble")) {
        //ModBubbleMoving.move.movvve();
        let Zrandom = RandomNumGen(100)
        if (KinkyDungeonPlayerTags.has("SB")) {
            if (Zrandom == 17) {
                let point = KinkyDungeonGetNearbyPoint(KinkyDungeonPlayerEntity.x, KinkyDungeonPlayerEntity.y, true, undefined, true, true);

                if (point && !KinkyDungeonEnemyAt(point.x, point.y)) { KDMovePlayer(point.x, point.y, false, false, true, true); }

                KinkyDungeonSendTextMessage(10, TextGet("BubbleMoving"), "#ffffff", 1);
            }
        }
        else if (KinkyDungeonPlayerTags.has("MB")) {
            if (Zrandom == 33) {
                let point = KinkyDungeonGetNearbyPoint(KinkyDungeonPlayerEntity.x, KinkyDungeonPlayerEntity.y, true, undefined, true, true);

                if (point && !KinkyDungeonEnemyAt(point.x, point.y)) { KDMovePlayer(point.x, point.y, false, false, true, true); }

                KinkyDungeonSendTextMessage(10, TextGet("BubbleMoving"), "#ffffff", 1);
            }
        }
    }
    //debuff
    KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, {
        id: "InBubble",
        aura: "#2789cd",
        type: "Accuracy",
        power: -100,
        duration: 2,
        tags: ["debuff"],
    });
    KinkyDungeonPlayerDamageDefault.dmg = 0;
    console.log(KinkyDungeonPlayerDamageDefault)



    //mermaid tail buff
    let restrain = KinkyDungeonGetRestraintByName(item.name)
    OrigiHhobble = restrain.hobble
    OrigiHeelpower = restrain.heelpower
    if (KinkyDungeonPlayerTags.has("Mermaid")) {
        console.log(restrain)
        restrain.hobble = 0
        restrain.heelpower = 0
        console.log(restrain)
        CheckedBuff1 = true
    }
    else {
        restrain.hobble = OrigiHhobble
        restrain.heelpower = OrigiHeelpower
        CheckedBuff1 = false
    }

    //customDraw
    DrawCharacter(KinkyDungeonPlayer, 5000, 300 + 50 * Math.sin(2 * Math.PI * (CommonTime() % 3000)/3000), 1, undefined, undefined, undefined, undefined, KinkyDungeonDrawState == "Game" ? 0 : - 20, KDToggles.FlipPlayer);


}

KDEventMapInventory["postRemoval"]["BubbleState"] = (e, item, data) => {
    let restrain = KinkyDungeonGetRestraintByName(item.name)
    console.log(restrain)
    restrain.hobble = OrigiHhobble
    restrain.heelpower = OrigiHeelpower
    CheckedBuff1 = false
}


KDEventMapInventory["postApply"]["BubbleState"] = (e, item, data) => {
    let bubbled;
    bubbled++
    console.log("bubbled = " + bubbled)
}

let OrigiHobble2

let CheckedBuff2 = false

//Mermaid tail buff
KDEventMapInventory["tick"]["MearmaidTailBuff"] = (e, item, data) => {
    let restrain = KinkyDungeonGetRestraintByName(item.name)
    restrain.hobble = OrigiHobble2
    if (KinkyDungeonPlayerTags.has("ModBubble")) {
        restrain.hobble = 0
        CheckedBuff2 = true
    }
    else {
        restrain.hobble = OrigiHobble2
        CheckedBuff2 = false
    }
}

KDEventMapInventory["postRemoval"]["MearmaidTailBuff"] = (e, item, data) => {
    let restrain = KinkyDungeonGetRestraintByName(item.name)
    console.log(restrain)
    restrain.hobble = OrigiHobble2
    CheckedBuff2 = false
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------
//|                                                                                           Bubble and Mermaid                                                    |
//------------------------------------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------------------------------------------------
//|                                                                                                  Clam                                                    |
//------------------------------------------------------------------------------------------------------------------------------------------------------------

let Completestruggled = false
KDEventMapInventory["struggle"]["StruggleClam"] = (e, item, data) => {
    if (data.restraint && data.restraint.type === Restraint && data.restraint.name == item.name && data.struggleType !== "Cut") {
        if (data.struggleType === "Struggle" || data.struggleType === "Remove") {
            let struggled
            console.log(Completestruggled)
            let num = RandomNumGen(10)
            if (num == 1) {
                Completestruggled = true
                console.log(Completestruggled)
                struggled++
            }
            else if (struggled == 12) {
                Completestruggled = true
                console.log(Completestruggled)
                struggled = 0
            }
        }
    }
}

KDEventMapInventory["postApply"]["ClamState"] = (e, item, data) => {
    let bubbled;
    bubbled++
    console.log("bubbled = " + bubbled)
}


KDEventMapInventory["tick"]["ClamState"] = (e, item, data) => {
    console.log(KDGameData)
    console.log(data.chestType)
    //debuff
    KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, {
        id: "InBubble",
        aura: "#2789cd",
        type: "Accuracy",
        power: -100,
        duration: 2,
        tags: ["debuff"],
    });
    KinkyDungeonPlayerDamageDefault.dmg = 0;
    let restrain = KinkyDungeonGetRestraintByName(item.name)
    console.log(Completestruggled)
    if (Completestruggled) {
        if (item.name == "ClamTrap") {
            restrain.Model = "ClamTrap"
            restrain.escapeChance = { "Struggle": 0.9, "Cut": -0.9, "Remove": 0.08 },
                restrain.inaccessible = false
        }
        else {
            restrain.Model = "ClamChest"
            restrain.escapeChance = { "Struggle": 0.9, "Cut": -0.9, "Remove": 0.08 },
                restrain.inaccessible = false
        }
    }
    console.log(restrain.escapeChance)

    DrawCharacter(KinkyDungeonPlayer, 0, 0, 1, undefined, undefined, undefined, undefined, undefined, KinkyDungeonPlayer == "KinkyDungeonPlayer" ? KDToggles.FlipPlayer : false);

}

KDEventMapInventory["postRemoval"]["Clam"] = (e, item, data) => {
    if (item.name == "ClamTrap" || item.name == "ClamChest") {
        let restrain = KinkyDungeonGetRestraintByName(item.name)
        console.log(restrain)
        if (item.name == "ClamTrap") {
            restrain.Model = "ClamTrapClosed"
            restrain.inaccessible = true
            restrain.escapeChance = { "Struggle": -0.11, "Cut": -0.9, "Remove": -0.08 }

            Completestruggled = false
        }
        else if (item.name == "ClamChest") {
            restrain.Model = "ClamChestClosed"
            restrain.inaccessible = true
            restrain.escapeChance = { "Struggle": -0.11, "Cut": -0.9, "Remove": -0.08 }
            Completestruggled = false
        }
        console.log(restrain.escapeChance)
    }
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//|                                                                                                  Clam                                                    |
//------------------------------------------------------------------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------------------------------------------------------------------
//|                                                                                           Balloon Function                                                   |
//------------------------------------------------------------------------------------------------------------------------------------------------------------
//Balloon to top layer
//let KDHighCollarLink =  ["Balloons", "HighCollars", "Collars", "Modules"]; // in [] need to add in shirine. [] need to add lower layer
//let BalloonAsCollarRender = ["Balloons", "Collars", "Modules"];

//when "balloon stuffing machine" remove, add restrain "balloon" and "BalloonString"
KDEventMapInventory["postRemoval"]["BalloonStuffingChange"] = (e, item, data) => {
    if (!KinkyDungeonPlayerTags.get("Balloons")) {

        console.log(KinkyDungeonStatStaminaRegenWait)
        KinkyDungeonAddRestraintIfWeaker(KinkyDungeonGetRestraintByName("Balloon"), 10, true, "", true);
        KinkyDungeonSendTextMessage(10, TextGet("PullOutFromBalloonStuffingMachine"), "#09c5e3", 1); //この関数の、値渡しは、（優先度、"文章"、色、表示時間？）
        if (KDToggles.Sound) { KinkyDungeonPlaySound(KinkyDungeonRootDirectory + "Audio/" + "PullOut" + ".ogg"); }
    }
}

//Balloon will removed when you putted Furniture
KDEventMapInventory["tick"]["FurnitureRemoveBalloon"] = (e, item, data) => {

    if (KinkyDungeonPlayerTags.get("Furniture")) {

        KinkyDungeonRemoveRestraintSpecific(item, false, false, false);
    }
}

KDEventMapInventory["tick"]["JailRemovedBalloon"] = (e, item, data) => {

    if (KDGameData.PrisonerState == "jail") {
        KinkyDungeonRemoveRestraintSpecific(item, false, false, false);
    }
}

KDEventMapInventory["tick"]["RemovedInBalloon"] = (e, item, data) => {
    if (KinkyDungeonPlayerTags.get("Balloons")) {
        KinkyDungeonRemoveRestraintSpecific(item, false, false, false);
    }
}

KDIntentEvents.TempLeash = {
    aggressive: false,
    nonaggressive: true,
    noplay: true,
    // This is the basic leash to jail mechanic
    weight: (enemy, AIData, allied, hostile, aggressive) => {
        return (AIData?.playerDist > 2.99
            && KinkyDungeonPlayerTags.get("Collars") && KinkyDungeonGetRestraintItem("ItemNeckRestraints") /*|| KinkyDungeonGetRestraintByName("Balloon")*/
            && !KinkyDungeonFlags.has("TempLeashCD")
            && (KDGameData.PrisonerState == 'parole' || KinkyDungeonGoddessRep.Ghost > 0 || KDEnemyHasFlag(enemy, "allowLeashWalk"))
            //&& KDStrictPersonalities.includes(KDJailPersonality(enemy))
            && KDEnemyCanTalk(enemy)
            && !KDIsPlayerTethered(KinkyDungeonPlayerEntity)) ?
            ((KDStrictPersonalities.includes(KDJailPersonality(enemy)) || KDJailPersonality(enemy) == "Robot") ? 100 : 10)
            : 0;
    },
    trigger: (enemy, AIData) => {
        let duration = 60 + Math.round(KDRandom() * 40);
        KinkyDungeonSetFlag("TempLeash", duration);
        KinkyDungeonSetFlag("TempLeashCD", duration * 2);
        KinkyDungeonSetFlag("noResetIntent", 12);
        KinkyDungeonSetFlag("nojailbreak", 12);

        enemy.playWithPlayer = 12;
        enemy.playWithPlayerCD = 40;
        enemy.IntentAction = 'TempLeash';
        KDTickTraining("Heels", KDGameData.HeelPower > 0,
            KDGameData.HeelPower <= 0, 4, 25);
        KinkyDungeonSendDialogue(enemy,
            TextGet("KinkyDungeonJailer" + (KDEnemyCanTalk(enemy) ? KDJailPersonality(enemy) : "Gagged") + "LeashTime").replace("EnemyName", TextGet("Name" + enemy.Enemy.name)),
            KDGetColor(enemy), 14, 10);
        KDAddThought(enemy.id, "Play", 7, enemy.playWithPlayer);

    },
    maintain: (enemy, delta, AIData) => {
        if (!KinkyDungeonFlags.has("TempLeash") || !(KinkyDungeonPlayerTags.get("Collars") && KinkyDungeonGetRestraintItem("ItemNeckRestraints") || KinkyDungeonPlayerTags.has("Balloons"))) {
            if (!(KinkyDungeonPlayerTags.get("Collars") && KinkyDungeonGetRestraintItem("ItemNeckRestraints") || KinkyDungeonPlayerTags.has("Balloons")) || KDGameData.PrisonerState != 'jail') {
                enemy.IntentAction = '';
                enemy.IntentLeashPoint = null;

                if (KDIsPlayerTetheredToLocation(KinkyDungeonPlayerEntity, enemy.x, enemy.y, enemy)) {
                    if (!KinkyDungeonFlags.has("TempLeash"))
                        KDTickTraining("Heels", KDGameData.HeelPower > 0,
                            KDGameData.HeelPower <= 0, 6, 25);
                    KDBreakTether(KinkyDungeonPlayerEntity);
                    enemy.playWithPlayer = 0;
                    enemy.playWithPlayerCD = 30;
                    KinkyDungeonSendDialogue(enemy,
                        TextGet("KinkyDungeonJailer" + KDJailPersonality(enemy) + "LeashEndNow").replace("EnemyName", TextGet("Name" + enemy.Enemy.name)),
                        KDGetColor(enemy), 7, 10);
                }
            } else {
                // Bring back!
                if (AIData?.playerDist < 7.5) {
                    if (enemy.playWithPlayer < 10 && !KDIsPlayerTethered(KinkyDungeonPlayerEntity)) {
                        enemy.playWithPlayer = 10;
                        KinkyDungeonSetFlag("nojailbreak", 2);
                    }// else enemy.playWithPlayer += delta;
                    KinkyDungeonSetFlag("noResetIntentFull", 10);
                }

                // Enemies will still be able to play with you!
                KinkyDungeonSetFlag("overrideleashprotection", 2);

                if (!KinkyDungeonFlags.get("TempLeashReturn")) {
                    KinkyDungeonSetFlag("TempLeashReturn", 40);
                    KinkyDungeonSendDialogue(enemy,
                        TextGet("KinkyDungeonJailer" + KDJailPersonality(enemy) + "LeashEndReturn").replace("EnemyName", TextGet("Name" + enemy.Enemy.name)),
                        KDGetColor(enemy), 7, 7);
                }
                if (!KDIsPlayerTethered(KinkyDungeonPlayerEntity)) {
                    enemy.gx = KinkyDungeonPlayerEntity.x;
                    enemy.gy = KinkyDungeonPlayerEntity.y;
                    if (KDistChebyshev(enemy.x - KinkyDungeonPlayerEntity.x, enemy.y - KinkyDungeonPlayerEntity.y) < 1.5) {
                        // Leash the player if they are close
                        KinkyDungeonAttachTetherToEntity(4.5, enemy);
                        if (KinkyDungeonGetRestraintItem("ItemDevices")) {
                            KinkyDungeonRemoveRestraint("ItemDevices", false, false, false);
                        }
                        KinkyDungeonSendDialogue(enemy,
                            TextGet("KinkyDungeonJailer" + KDJailPersonality(enemy) + "Leashed").replace("EnemyName", TextGet("Name" + enemy.Enemy.name)),
                            KDGetColor(enemy), 5, 10);

                        KDAddThought(enemy.id, "Happy", 6, enemy.playWithPlayer);
                    }
                } else {
                    // We will wander more than usual
                    KinkyDungeonSetEnemyFlag(enemy, "wander", 2);
                    KinkyDungeonSetEnemyFlag(enemy, "genpath", 0);
                    if (enemy.idle || (KDistChebyshev(enemy.x - enemy.gx, enemy.y - enemy.gy) < 4)) {
                        KDResetGuardSpawnTimer();
                        let furn = KinkyDungeonNearestJailPoint(enemy.x, enemy.y, ["furniture"]);
                        let jail = KinkyDungeonNearestJailPoint(enemy.x, enemy.y, ["jail"]);
                        let newPoint = furn || jail;
                        if (newPoint) {
                            enemy.keys = true;
                            enemy.gx = newPoint.x;
                            enemy.gy = newPoint.y;
                            if ((furn && KDistChebyshev(enemy.x - furn.x, enemy.y - furn.y) < 1.5)
                                || (jail && KDistChebyshev(enemy.x - jail.x, enemy.y - jail.y) < 1.5)) {
                                if (newPoint == KinkyDungeonNearestJailPoint(enemy.x, enemy.y, ["furniture"])) {
                                    KDSettlePlayerInFurniture(enemy, AIData);
                                } else {
                                    let nearestJail = KinkyDungeonNearestJailPoint(enemy.x, enemy.y);
                                    let jailRadius = (nearestJail && nearestJail.radius) ? nearestJail.radius : 1.5;
                                    let playerInCell = nearestJail ? (Math.abs(KinkyDungeonPlayerEntity.x - nearestJail.x) < jailRadius - 1 && Math.abs(KinkyDungeonPlayerEntity.y - nearestJail.y) <= jailRadius)
                                        : null;
                                    if (!playerInCell) {
                                        let point = { x: nearestJail.x, y: nearestJail.y };//KinkyDungeonGetNearbyPoint(nearestJail.x, nearestJail.y, true, undefined, true);
                                        if (point) {
                                            let lastx = KinkyDungeonPlayerEntity.x;
                                            let lasty = KinkyDungeonPlayerEntity.y;
                                            KDMovePlayer(point.x, point.y, false);
                                            KDMoveEntity(enemy, lastx, lasty, true);
                                            let newPoint2 = KinkyDungeonGetRandomEnemyPoint(true,
                                                false, enemy);
                                            if (newPoint2) {
                                                enemy.path = undefined;
                                                KinkyDungeonSetEnemyFlag(enemy, "blocked", 24);
                                                KinkyDungeonSetEnemyFlag(enemy, "genpath", 0);
                                                enemy.gx = newPoint2.x;
                                                enemy.gy = newPoint2.y;
                                            } else {
                                                enemy.path = undefined;
                                                KinkyDungeonSetEnemyFlag(enemy, "blocked", 24);
                                                KinkyDungeonSetEnemyFlag(enemy, "genpath", 0);
                                                enemy.gx = KDMapData.EndPosition.x;
                                                enemy.gy = KDMapData.EndPosition.y;
                                            }
                                        }
                                    }
                                    KDBreakTether(KinkyDungeonPlayerEntity);
                                }
                                enemy.IntentAction = '';
                                enemy.IntentLeashPoint = null;
                            }
                        } else {
                            enemy.IntentAction = '';
                            enemy.IntentLeashPoint = null;
                        }

                    }
                }
            }

        } else {
            if (AIData?.playerDist < 5.5) {
                if (enemy.playWithPlayer < 10 && !KDIsPlayerTethered(KinkyDungeonPlayerEntity)) {
                    enemy.playWithPlayer = 10;
                }// else enemy.playWithPlayer += delta;
                KinkyDungeonSetFlag("noResetIntentFull", 10);
            }

            // Enemies will still be able to play with you!
            KinkyDungeonSetFlag("overrideleashprotection", 2);

            if (KinkyDungeonFlags.get("TempLeash") == 10 && KDGameData.PrisonerState == 'jail') {
                KinkyDungeonSendDialogue(enemy,
                    TextGet("KinkyDungeonJailer" + KDJailPersonality(enemy) + "LeashEndReturn").replace("EnemyName", TextGet("Name" + enemy.Enemy.name)),
                    KDGetColor(enemy), 7, 7);
            }
            if (!KDIsPlayerTethered(KinkyDungeonPlayerEntity)) {
                enemy.gx = KinkyDungeonPlayerEntity.x;
                enemy.gy = KinkyDungeonPlayerEntity.y;
                if (KDistChebyshev(enemy.x - KinkyDungeonPlayerEntity.x, enemy.y - KinkyDungeonPlayerEntity.y) < 1.5) {
                    // Leash the player if they are close
                    KinkyDungeonAttachTetherToEntity(4.5, enemy);
                    if (KinkyDungeonGetRestraintItem("ItemDevices")) {
                        KinkyDungeonRemoveRestraint("ItemDevices", false, false, false);
                    }
                    KinkyDungeonSendDialogue(enemy,
                        TextGet("KinkyDungeonJailer" + KDJailPersonality(enemy) + "Leashed").replace("EnemyName", TextGet("Name" + enemy.Enemy.name)),
                        KDGetColor(enemy), 5, 10);

                    KDAddThought(enemy.id, "Happy", 6, enemy.playWithPlayer);
                }
            } else {
                // We will wander more than usual
                KinkyDungeonSetEnemyFlag(enemy, "wander", 0);
                KinkyDungeonSetEnemyFlag(enemy, "genpath", 0);
                if (enemy.idle) {
                    KDResetGuardSpawnTimer();
                    if (KDRandom() < 0.33) {
                        let newPoint = KinkyDungeonGetRandomEnemyPoint(false,
                            enemy.tracking && KinkyDungeonHuntDownPlayer && KDGameData.PrisonerState != "parole" && KDGameData.PrisonerState != "jail");
                        if (newPoint) {
                            enemy.gx = newPoint.x;
                            enemy.gy = newPoint.y;
                        }
                    } else {
                        let newPoint = KinkyDungeonGetNearbyPoint(enemy.x, enemy.y, false);
                        if (newPoint) {
                            enemy.gx = newPoint.x;
                            enemy.gy = newPoint.y;
                        }
                    }

                }
            }

        }
        return false;
    },
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------
//|                                                                                           Balloon Function                                                   |
//------------------------------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//|                                                                                 Bubble functions (pick up item, etc)                                                  |
//------------------------------------------------------------------------------------------------------------------------------------------------------------
// pick up
KinkyDungeonDropItem = function (Item, Origin, PreferOrigin, noMsg, allowEnemies) {
    let slots = [];
    for (let X = -Math.ceil(1); X <= Math.ceil(1); X++)
        for (let Y = -Math.ceil(1); Y <= Math.ceil(1); Y++) {
            if ((X != 0 || Y != 0))
                slots.push({ x: X, y: Y });
        }

    let foundslot = PreferOrigin ? { x: Origin.x, y: Origin.y } : null;
    if (!(Origin == KinkyDungeonPlayerEntity && PreferOrigin && KinkyDungeonPlayer.IsEnclose())) {
        if (!foundslot || !(KinkyDungeonMovableTilesEnemy.includes(KinkyDungeonMapGet(foundslot.x, foundslot.y))
            && (allowEnemies || KinkyDungeonNoEnemy(foundslot.x, foundslot.y, true))))
            for (let C = 0; C < 100; C++) {
                let slot = slots[Math.floor(KDRandom() * slots.length)];
                if (KinkyDungeonMovableTilesEnemy.includes(KinkyDungeonMapGet(Origin.x + slot.x, Origin.y + slot.y))
                    && (allowEnemies || KinkyDungeonNoEnemy(Origin.x + slot.x, Origin.y + slot.y, true))) {
                    foundslot = { x: Origin.x + slot.x, y: Origin.y + slot.y };

                    C = 100;
                } else slots.splice(C, 1);
            }
    }


    if (foundslot) {

        let dropped = { x: foundslot.x, y: foundslot.y, name: Item.name };
        if (Item.amountMin && Item.amountMax) {
            dropped.amount = Item.amountMin + Math.floor(KDRandom() * Item.amountMax);
        } else if (Item.amount) {
            dropped.amount = Item.amount;
        }
        if (!KinkyDungeonPlayerTags.has("ModBubble")) {
            KDMapData.GroundItems.push(dropped);
            if (!noMsg)
                KinkyDungeonSendActionMessage(10, TextGet("KinkyDungeonDrop" + Item.name), "#ff0000", 2);
        }
        return true;
    }

    return false;
}


//modify for pick up from bubble
KinkyDungeonItemEvent = function (Item, nomsg) {
    if (KinkyDungeonPlayerTags.has("ModBubble")) {
        KinkyDungeonSendTextMessage(10, TextGet("NoPickUp"), "#60fafc", 1);
        console.log("S!!!!!!!!")
    }

    else {
        let color = "white";
        let priority = 1;
        let sfx = "Coins";
        let name = Item.name;
        let replace = "";
        if (Item.amount == undefined && Item.quantity) {
            Item.amount = Item.quantity;
        }
        if (KDCustomItems[name]) {
            let ret = KDCustomItems[name](Item);
            if (ret.sfx != undefined) sfx = ret.sfx;
            if (ret.replace != undefined) replace = ret.replace;
            if (ret.priority != undefined) priority = ret.priority;
            if (ret.color != undefined) color = ret.color;
            if (ret.name != undefined) name = ret.name;
        } else if (Item.name == "Gold") {
            color = "yellow";
            KinkyDungeonAddGold(Item.amount);
        } else if (Item.name == "Lore") {
            return KinkyDungeonNewLore();
        } else if (Item.name == "Pick") {
            priority = 2;
            color = "lightgreen";
            KinkyDungeonLockpicks += 1;
        } else if (Item.name == "MagicSword") {
            priority = 8;
            color = "orange";
            KinkyDungeonInventoryAddWeapon("MagicSword");
        } else if (Item.name == "Scrolls") {
            priority = 4;
            color = "lightgreen";
            KinkyDungeonChangeConsumable(KinkyDungeonConsumables.ScrollArms, 1);
            KinkyDungeonChangeConsumable(KinkyDungeonConsumables.ScrollLegs, 1);
            KinkyDungeonChangeConsumable(KinkyDungeonConsumables.ScrollVerbal, 1);
        } else if (Item.name == "Knife") {
            priority = 2;
            color = "lightgreen";
            KinkyDungeonInventoryAddWeapon("Knife");
        } else if (Item.name == "Knives") {
            priority = 3;
            color = "lightgreen";
            KinkyDungeonInventoryAddWeapon("Knife");
            if (!KinkyDungeonPlayerDamage || KinkyDungeonPlayerDamage.unarmed) {
                KDSetWeapon("Knife");
                KinkyDungeonGetPlayerWeaponDamage(KinkyDungeonCanUseWeapon());
            }
        } else if (Item.name == "EnchKnife") {
            priority = 2;
            color = "lightgreen";
            KinkyDungeonInventoryAddWeapon("EnchKnife");
            if (!KinkyDungeonPlayerDamage || KinkyDungeonPlayerDamage.unarmed) {
                KDSetWeapon("EnchKnife");
                KinkyDungeonGetPlayerWeaponDamage(KinkyDungeonCanUseWeapon());
            }
        } else if (Item.name == "RedKey") {
            priority = 2;
            color = "lightgreen";
            KinkyDungeonRedKeys += 1;
        } else if (Item.name == "BlueKey") {
            priority = 2;
            color = "lightgreen";
            KinkyDungeonBlueKeys += 1;
        } else if (KDConsumable(Item)) {
            if (KinkyDungeonWeaponVariants[Item.name]) {
                KDGiveConsumableVariant(KinkyDungeonConsumableVariants[Item.name], undefined, Item.name, undefined, Item.amount);
                color = "#aaaaff";
                name = "Generic";
                replace = TextGet("KinkyDungeonInventoryItem" + KinkyDungeonConsumableVariants[Item.name].template);
            } else {
                let item = KinkyDungeonFindConsumable(Item.name);
                priority = item.rarity;
                if (item.potion) sfx = "PotionDrink";
                color = "white";
                KinkyDungeonChangeConsumable(item, Item.amount || 1);
            }
        } else if (KDWeapon(Item)) {
            if (KinkyDungeonWeaponVariants[Item.name]) {
                KDGiveWeaponVariant(KinkyDungeonWeaponVariants[Item.name], undefined, Item.name);
                color = "#aaaaff";
                name = "Generic";
                replace = TextGet("KinkyDungeonInventoryItem" + KinkyDungeonWeaponVariants[Item.name].template);
            } else {
                let item = KinkyDungeonFindWeapon(Item.name);
                priority = Math.min(8, item.rarity + 4);
                color = "orange";
                KinkyDungeonInventoryAddWeapon(Item.name);
            }

        } else if (KDOutfit(Item)) {
            priority = 1;
            color = "white";
            KinkyDungeonInventoryAddOutfit(Item.name);
        } else if (Item.name == "Heart") {
            if (KinkyDungeonStatDistractionMax >= KDMaxStat && KinkyDungeonStatStaminaMax >= KDMaxStat && KinkyDungeonStatManaMax >= KDMaxStat && KinkyDungeonStatWillMax >= KDMaxStat) {
                KinkyDungeonDrawState = "Game";
                KinkyDungeonChangeStamina(10);
                KinkyDungeonChangeMana(5);
                KinkyDungeonChangeWill(5.0);
                KDGameData.HeartTaken = true;
            } else if (KinkyDungeonIsPlayer()) {
                KinkyDungeonDrawState = "Heart";
                KinkyDungeonInterruptSleep();
                KinkyDungeonDialogueTimer = CommonTime() + 700;
                KinkyDungeonSetFlag("NoDialogue", 3);
            }
        } else if (Item.name == "Keyring") {
            KDMapData.KeysHeld++;
            KinkyDungeonAggroAction('key', {});
        } else if (KDRestraint(Item)) {
            if (KinkyDungeonRestraintVariants[Item.name]) {
                KDGiveInventoryVariant(KinkyDungeonRestraintVariants[Item.name], undefined, KinkyDungeonRestraintVariants[Item.name].curse, "", Item.name);
                color = "#aaaaff";
                name = "Generic";
                replace = TextGet("Restraint" + KinkyDungeonRestraintVariants[Item.name].template);
            } else {
                if (!KinkyDungeonInventoryGetLoose(Item.name)) {
                    KinkyDungeonInventoryAdd({ name: Item.name, id: KinkyDungeonGetItemID(), type: LooseRestraint, events: Item.events || KDGetEventsForRestraint(Item.name), quantity: 1 });
                } else {
                    if (!KinkyDungeonInventoryGetLoose(Item.name).quantity) KinkyDungeonInventoryGetLoose(Item.name).quantity = 0;
                    KinkyDungeonInventoryGetLoose(Item.name).quantity += 1;
                }
                color = "#ffffff";
                name = "Generic";
                replace = TextGet("Restraint" + Item.name);
            }

        }
        if (KDToggles.Sound) AudioPlayInstantSoundKD(KinkyDungeonRootDirectory + "Audio/" + sfx + ".ogg");
        if (!nomsg) {
            KinkyDungeonSendActionMessage(priority, TextGet("ItemPickup" + name).replace("XXX", Item.amount).replace("ReplaceValue", replace), color, 1);
            if (!KDCanSeeDroppedItem(Item))
                KinkyDungeonSendActionMessage(priority + 1, TextGet("ItemFoundHidden").replace("XXX", Item.amount).replace("ReplaceValue", replace), color, 1);
            console.log("SEG!!!!")
        }
    }
}

KinkyDungeonItemCheck = function (x, y, Index, autoEquip) {
    let allowManip = KDAllowUseItems(false, x, y);
    let msg = false;
    let pickedone = false;
    for (let I = 0; I < KDMapData.GroundItems.length; I++) {
        let item = KDMapData.GroundItems[I];
        if (x == item.x && y == item.y) {
            if (allowManip || (item.name == "Keyring" && "SsH".includes(KinkyDungeonMapGet(item.x, item.y))) || (!pickedone && KinkyDungeonStatsChoice.get("Psychic") && x && y && KDistChebyshev(KinkyDungeonPlayerEntity.x - x, KinkyDungeonPlayerEntity.y - y) < 1.5)) {
                if (KinkyDungeonPlayerTags.has("ModBubble")) {
                    KinkyDungeonSendTextMessage(10, TextGet("NoPickUp"), "#60fafc", 1);
                    console.log("KinkyDungeonItemCheck!")
                }
                else {
                    KDMapData.GroundItems.splice(I, 1);
                    I -= 1;
                    pickedone = true;
                    KinkyDungeonItemEvent(item);
                    if (autoEquip && KDWeapon(item) && KinkyDungeonPlayerWeapon == "Unarmed") {
                        KDSetWeapon(item.name);
                    }
                }
            }
            else {
                let point = null;
                if (KinkyDungeonLastAction == "Move" && (KinkyDungeonPlayerEntity.lastx != KinkyDungeonPlayerEntity.x || KinkyDungeonPlayerEntity.lasty != KinkyDungeonPlayerEntity.y)) {
                    point = {
                        x: KinkyDungeonPlayerEntity.x * 2 - KinkyDungeonPlayerEntity.lastx,
                        y: KinkyDungeonPlayerEntity.y * 2 - KinkyDungeonPlayerEntity.lasty,
                    };
                    if (!KinkyDungeonMovableTilesSmartEnemy.includes(KinkyDungeonMapGet(point.x, point.y))) point = null;
                }
                if (!point)
                    point = KinkyDungeonGetNearbyPoint(KinkyDungeonPlayerEntity.x, KinkyDungeonPlayerEntity.y, true, undefined, true, true);
                if (point) {
                    item.x = point.x;
                    item.y = point.y;
                }
                msg = true;
            }

        }
    }
    if (msg) {
        KinkyDungeonSendTextMessage(6, TextGet("KDCantTouchThat"), "#ff8800", 1, false, true);
    }
}


//modify for attack from bubble
KinkyDungeonGetEvasion = function (Enemy, NoOverride, IsSpell, IsMagic, cost) {
    let flags = {
        KDEvasionHands: true,
        KDEvasionSight: true,
        KDEvasionDeaf: true,
        KDEvasionSlow: true,
    };
    let data = {
        enemy: Enemy,
        isSpell: IsSpell,
        isMagic: IsMagic,
        flags: flags,
        cost: cost,
        hitmult: 1.0,
    };

    if (!NoOverride)
        KinkyDungeonSendEvent("calcEvasion", data);
    let hitChance = (Enemy && Enemy.buffs) ? KinkyDungeonMultiplicativeStat(KinkyDungeonGetBuffedStat(Enemy.buffs, "Evasion")) : 1.0;
    hitChance *= data.hitmult;

    if (KinkyDungeonStatsChoice.get("Clumsy")) hitChance *= KDClumsyAmount;
    //if () hitChance *= 0;
    if (KinkyDungeonStatsChoice.get("Unfocused")) {
        let amount = 1;
        let dist = KinkyDungeonStatDistraction / KinkyDungeonStatDistractionMax;
        if (dist >= KDUnfocusedParams.ThreshMin) {
            amount = KDUnfocusedParams.AmountMin + (KDUnfocusedParams.AmountMax - KDUnfocusedParams.AmountMin) * (dist - KDUnfocusedParams.ThreshMin) / (KDUnfocusedParams.ThreshMax - KDUnfocusedParams.ThreshMin);
        }
        if (amount != 1) hitChance *= amount;
    }

    if (Enemy && Enemy.Enemy && Enemy.Enemy.evasion && ((!(Enemy.stun > 0) && !(Enemy.freeze > 0)) || Enemy.Enemy.alwaysEvade || Enemy.Enemy.evasion < 0)) hitChance *= Math.max(0,
        (Enemy.aware ? KinkyDungeonMultiplicativeStat(Enemy.Enemy.evasion) : Math.max(1, KinkyDungeonMultiplicativeStat(Enemy.Enemy.evasion))));
    if (Enemy && Enemy.Enemy && Enemy.Enemy.tags.ghost && (IsMagic || (KinkyDungeonPlayerDamage && KDWeaponIsMagic({ name: KinkyDungeonPlayerWeapon })))) hitChance = Math.max(hitChance, 1.0);
    if (Enemy && Enemy.Enemy && Enemy.Enemy.Resistance?.alwaysHitByMagic && (IsMagic || (KinkyDungeonPlayerDamage && KDWeaponIsMagic({ name: KinkyDungeonPlayerWeapon })))) hitChance = Math.max(hitChance, 1.0);

    if (KinkyDungeonGetBuffedStat(KinkyDungeonPlayerBuffs, "Accuracy")) {
        hitChance *= KinkyDungeonMultiplicativeStat(-KinkyDungeonGetBuffedStat(KinkyDungeonPlayerBuffs, "Accuracy"));
    }

    if (!IsSpell) hitChance *= KinkyDungeonPlayerDamage.chance;
    if (Enemy && Enemy.bind > 0) hitChance *= 3;
    else if (Enemy && Enemy.slow > 0) hitChance *= 2;
    if (Enemy && (Enemy.stun > 0 || Enemy.freeze > 0)) hitChance *= 5;
    else {
        if (Enemy && Enemy.distraction > 0) hitChance *= 1 + 2 * Math.min(1, Enemy.distraction / Enemy.Enemy.maxhp);
        if (Enemy) hitChance *= 1 + 0.25 * KDBoundEffects(Enemy);
    }
    if (Enemy && Enemy.vulnerable) hitChance *= KDVulnerableHitMult;

    if (!IsSpell) {
        if (flags.KDEvasionSight)
            hitChance = Math.min(hitChance, Math.max(0.1, hitChance - Math.min(3, KinkyDungeonBlindLevel) * KinkyDungeonMissChancePerBlind));
        if (flags.KDEvasionSlow && KinkyDungeonPlayerDamage && !KinkyDungeonPlayerDamage.name && KinkyDungeonSlowLevel > 0) hitChance *= 1.0 - Math.max(0.5, KinkyDungeonMissChancePerSlow * KinkyDungeonSlowLevel);
    }
    return hitChance;
}


//modify for meamaid tail

KinkyDungeonCalculateSlowLevel = function (delta) {
    KinkyDungeonSlowLevel = 0;
    if (KinkyDungeonAllRestraint().some((r) => { return KDRestraint(r).immobile; })) { KinkyDungeonSlowLevel += 100; }

    else {
        for (let inv2 of KinkyDungeonAllRestraintDynamic()) {
            let inv = inv2.item;
            if ((KDRestraint(inv).blockfeet || KDRestraint(inv).hobble || (KinkyDungeonStatsChoice.get("ClassicHeels") && KDRestraint(inv).heelpower))) {
                let hobbleAmount = KDRestraint(inv).hobble || (KinkyDungeonStatsChoice.get("ClassicHeels") ? Math.round(KDRestraint(inv).heelpower + 0.1) : 1) || 1;
                KinkyDungeonSlowLevel = Math.min(Math.max(3, hobbleAmount), KinkyDungeonSlowLevel + hobbleAmount);
            }
        }
        for (let inv2 of KinkyDungeonAllRestraintDynamic()) {
            let inv = inv2.item;
            if (KDRestraint(inv).blockfeet) {
                KinkyDungeonSlowLevel = Math.max(KinkyDungeonSlowLevel, 2);
                break;
            }
        }
        // If your hands are free you are faster
        if (!KinkyDungeonCanStand() || KDForcedToGround()) {
            KinkyDungeonSlowLevel = Math.max(KinkyDungeonIsArmsBound() ? 3 : 2, KinkyDungeonSlowLevel + 1);
            if (delta > 0 && KDForcedToGround())
                KDGameData.KneelTurns = Math.max(KDGameData.KneelTurns, delta);
        }
        if (KDIsHogtied()) KinkyDungeonSlowLevel = Math.max(KinkyDungeonIsArmsBound() ? 4 : 3, KinkyDungeonSlowLevel + 1);
        for (let inv of KinkyDungeonAllRestraint()) {
            if (KDRestraint(inv).freeze) KinkyDungeonSlowLevel = Math.max(2, KinkyDungeonSlowLevel);
        }
        if (!KinkyDungeonHasStamina(0.01)) KinkyDungeonSlowLevel = Math.max(1, KinkyDungeonSlowLevel);
    }
    if (KinkyDungeonStatsChoice.get("PoorForm") && KinkyDungeonSlowLevel > 0) KinkyDungeonSlowLevel += 1;
    let origSlowLevel = KinkyDungeonSlowLevel;
    if (KinkyDungeonGetBuffedStat(KinkyDungeonPlayerBuffs, "SlowLevel")) KinkyDungeonSlowLevel += KinkyDungeonGetBuffedStat(KinkyDungeonPlayerBuffs, "SlowLevel");
    if (KinkyDungeonGetBuffedStat(KinkyDungeonPlayerBuffs, "MoveSpeed")) KinkyDungeonSlowLevel = Math.max(0, KinkyDungeonSlowLevel - KinkyDungeonGetBuffedStat(KinkyDungeonPlayerBuffs, "MoveSpeed"));
    KinkyDungeonSlowLevel = Math.max(0, KinkyDungeonSlowLevel);
    if (KinkyDungeonStatsChoice.get("PoorForm") && KinkyDungeonSlowLevel > 0) KinkyDungeonSlowLevel = Math.max(2, KinkyDungeonSlowLevel);

    if (KDGameData.Crouch) {
        // Force slowness when crouching
        if (KinkyDungeonSlowLevel < 2 && delta > 0 && KinkyDungeonLastAction == "Move") {
            KinkyDungeonSendActionMessage(9, TextGet("KDPetsuitCrawl"), "#ffffff", 1, true);
        }
        KinkyDungeonSlowLevel = Math.max(2, KinkyDungeonSlowLevel);
    }
    if (delta > 0 && KinkyDungeonGetBuffedStat(KinkyDungeonPlayerBuffs, "SlowLevelEnergyDrain")) KDGameData.AncientEnergyLevel =
        Math.max(0, KDGameData.AncientEnergyLevel - Math.max(0, origSlowLevel - KinkyDungeonSlowLevel) * KinkyDungeonGetBuffedStat(KinkyDungeonPlayerBuffs, "SlowLevelEnergyDrain"));

    if (KinkyDungeonSlowLevel > 9) {
        KDGameData.MovePoints = Math.min(-1, KDGameData.MovePoints);
    }

    if (KinkyDungeonPlayerTags.has("ModBubble") && KinkyDungeonPlayerTags.has("Mermaid")) {
        KinkyDungeonSlowLevel -= 3
    }
    /*
    else if (!KinkyDungeonPlayerTags.has("ModBubble") && !KinkyDungeonPlayerTags.has("Mermaid") && CheckedBuff3){
    }
    */

    console.log(CheckedBuff1)
    console.log(CheckedBuff2)
    console.log(KinkyDungeonSlowLevel)
    if (KinkyDungeonSlowLevel < 0) {
        KinkyDungeonSlowLevel += 3
    }
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//|                                                                                 Bubble functions (pick up item, etc)                                                  |
//------------------------------------------------------------------------------------------------------------------------------------------------------------




KDEventMapInventory["tick"]["RemoveKronosBubble"] = (e, item, data) => {
    KinkyDungeonRemoveRestraintsWithShrine("KronosBubbles", undefined, true, false, true, false, true);
}


let KBResName = ["BubbleKronos1", "BubbleKronos2Shoulder", "BubbleKronos2Boots", "BubbleKronos3Boots", "BubbleKronos3Shoulder", "BubbleKronos4Crotch", "BubbleKronos4Boots", "BubbleKronos4HandFront", "BubbleKronos5", "SquishBubble"];


//struggle
KDEventMapInventory["struggle"]["StruggleKronosBoots"] = (e, item, data) => {
    let random = RandomNumGen(100)
    let RastrainName = data.restraint.name
    console.log(RastrainName)
    if (RastrainName == "BubbleKronos1") {
        console.log("Boots= " + random)
        if (random >= 66) {
            console.log(random)
            KinkyDungeonAddRestraintIfWeaker("BubbleKronos2Boots", 6, false, undefined, false, false, undefined, item.faction);
            KinkyDungeonSendTextMessage(10, TextGet("StruggleKronosBubble"), "#60fafc", 1);
        }
    }
    else if (RastrainName == "BubbleKronos2Boots" || RastrainName == "BubbleKronos3Boots") {
        console.log("Boots= " + random)
        if (random >= 60) {
            console.log(random)
            if (data.restraint.name == "BubbleKronos2Boots") {
                KinkyDungeonAddRestraintIfWeaker("BubbleKronos3Boots", 7, false, undefined, false, false, undefined, item.faction);
            }
            else {
                KinkyDungeonAddRestraintIfWeaker("BubbleKronos4Boots", 11, false, undefined, false, false, undefined, item.faction);
                /*
                if (random >= 90) {
                    KinkyDungeonAddRestraintIfWeaker("BubbleKronos4Crotch", 11, false, undefined, false, false, undefined, item.faction);
                    KinkyDungeonSendTextMessage(10, TextGet("SpreadSpecialKronosBubble"), "#ffffff", 1);
                }
                */
            }
            KinkyDungeonSendTextMessage(10, TextGet("StruggleKronosBubble"), "#60fafc", 1);
        }
    }
    else if (RastrainName == "BubbleKronos4Boots") {
        if (random >= 20) {
            KinkyDungeonAddRestraintIfWeaker("BubbleKronos2Shoulder", 6, false, undefined, false, false, undefined, item.faction);
            KinkyDungeonSendTextMessage(10, TextGet("SpreadOtherKronosBubble"), "#60fafc", 1);
        }
    }
}

KDEventMapInventory["struggle"]["StruggleKronosUpperBody"] = (e, item, data) => {
    let random = RandomNumGen(100)
    //35% chance
    console.log("UpperBody= " + random)
    if (data.restraint.name == "BubbleKronos2Shoulder") {
        if (random >= 80) {
            KinkyDungeonAddRestraintIfWeaker("BubbleKronos3Shoulder", 6, false, undefined, false, false, undefined, item.faction);
            KinkyDungeonSendTextMessage(10, TextGet("StruggleKronosBubble"), "#60fafc", 1);
        }
    }
    else if (data.restraint.name == "BubbleKronos3Shoulder") {
        if (random >= 55) {
            KinkyDungeonAddRestraintIfWeaker("BubbleKronos4HandFront", 6, false, undefined, false, false, undefined, item.faction);
            KinkyDungeonSendTextMessage(10, TextGet("StruggleKronosBubble"), "#60fafc", 1);
        }
    }
    else if (data.restraint.name == "BubbleKronos4HandFront" || data.restraint.name == "BubbleKronos4HandFrontNonForce") {
        if (random >= 20) {
            KinkyDungeonAddRestraintIfWeaker("BubbleKronos1", 6, false, undefined, false, false, undefined, item.faction);
            KinkyDungeonSendTextMessage(10, TextGet("SpreadOtherKronosBubble"), "#60fafc", 1);
        }
    }
}


KDEventMapInventory["struggle"]["StruggleKronosBubble4"] = (e, item, data) => {
    let random = RandomNumGen(100)

    if (KinkyDungeonPlayerTags.has("KronosBubble4B") && KinkyDungeonPlayerTags.has("KronosBubble4H")) {
        if (random >= 10) {
            KinkyDungeonAddRestraintIfWeaker("BubbleKronos4Crotch", 11, false, undefined, false, false, undefined, undefined);
            KinkyDungeonSendTextMessage(10, TextGet("SpreadOtherKronosBubble"), "#60fafc", 1);
        }
    }
}

KDEventMapInventory["struggle"]["StruggleKronosBubble4All"] = (e, item, data) => {
    let random = RandomNumGen(100)
    if (random >= 25) {
        if (KinkyDungeonPlayerTags.has("KronosBubble4C") && KinkyDungeonPlayerTags.has("KronosBubble4B") && KinkyDungeonPlayerTags.has("KronosBubble4H")) {
            KinkyDungeonAddRestraintIfWeaker("BubbleKronos5", 6, false, undefined, false, false, undefined, item.faction);
            KinkyDungeonSendTextMessage(10, TextGet("Spread4KronosBubble"), "#60fafc", 1);
        }
    }
}

//tick spread
KDEventMapInventory["tick"]["B_KronosBubbleSpread"] = (e, item, data) => {
    let random = RandomNumGen(100)
    let S_KronosBubbleSpread_T_ResName = ["BubbleKronos1", "BubbleKronos2Boots", "BubbleKronos3Boots", "BubbleKronos4Boots",];
    //90 chance
    if (random >= 90) {
        for (let i = 0; i < S_KronosBubbleSpread_T_ResName.length; i++) {
            if (KinkyDungeonPlayerTags.has(S_KronosBubbleSpread_T_ResName[i])) {
                KinkyDungeonAddRestraintIfWeaker(S_KronosBubbleSpread_T_ResName[i + 1], i + 3, false, undefined, false, false, undefined, item.faction);
                KinkyDungeonSendTextMessage(10, TextGet("TickKronosBubble"), "#60fafc", 1);
                i += 4
            }
        }
    }
}


KDEventMapInventory["tick"]["H_KronosBubbleSpread"] = (e, item, data) => {
    let S_KronosBubbleSpread_T_ResName = ["BubbleKronos2Shoulder", "BubbleKronos3Shoulder", "BubbleKronos4HandFront"];
    let random = RandomNumGen(100)
    //35% chance
    if (random >= 90) {
        for (let i = 0; i < S_KronosBubbleSpread_T_ResName.length; i++) {
            if (KinkyDungeonPlayerTags.has(S_KronosBubbleSpread_T_ResName[i])) {
                KinkyDungeonAddRestraintIfWeaker(S_KronosBubbleSpread_T_ResName[i + 1], i + 3, false, undefined, false, false, undefined, item.faction);
                KinkyDungeonSendTextMessage(10, TextGet("TickKronosBubble"), "#60fafc", 1);
                i += 4
            }
        }
    }
}

//delete under
KDEventMapInventory["postApply"]["B_KronosBubbleSpreadDelete"] = (e, item, data) => {
    if (KinkyDungeonPlayerTags.has("KronosBubble2B")) {
        KinkyDungeonRemoveRestraintsWithShrine("KronosBubble1B", undefined, true, false, true, false, true);
    }
    if (KinkyDungeonPlayerTags.has("KronosBubble3B")) {
        KinkyDungeonRemoveRestraintsWithShrine("KronosBubble1B", undefined, true, false, true, false, true);
        KinkyDungeonRemoveRestraintsWithShrine("KronosBubble2B", undefined, true, false, true, false, true);
    }
    if (KinkyDungeonPlayerTags.has("KronosBubble4B")) {
        KinkyDungeonRemoveRestraintsWithShrine("KronosBubble1B", undefined, true, false, true, false, true);
        KinkyDungeonRemoveRestraintsWithShrine("KronosBubble2B", undefined, true, false, true, false, true);
        KinkyDungeonRemoveRestraintsWithShrine("KronosBubble3B", undefined, true, false, true, false, true);
    }
}

KDEventMapInventory["postApply"]["SH_KronosBubbleSpreadDelete"] = (e, item, data) => {
    if (KinkyDungeonPlayerTags.has("KronosBubble3S")) {
        KinkyDungeonRemoveRestraintsWithShrine("KronosBubble2S", undefined, true, false, true, false, true);
    }
    if (KinkyDungeonPlayerTags.has("KronosBubble4H")) {
        KinkyDungeonRemoveRestraintsWithShrine("KronosBubble2S", undefined, true, false, true, false, true);
        KinkyDungeonRemoveRestraintsWithShrine("KronosBubble3S", undefined, true, false, true, false, true);
    }
}

//KronosBubble4Hand,Option
KDEventMapInventory["postApply"]["SetPoseKB4H"] = (e, item, date) => {
    let n = KB4H_IsHandBind()
    console.log(n)
    if (n) {
        KinkyDungeonRemoveRestraintsWithShrine("KronosBubble4H", undefined, true, false, true, false, true);
        KinkyDungeonAddRestraintIfWeaker("BubbleKronos4HandFrontNonForce", 20, false, undefined, false, false, undefined, item.faction);
    }
    else {

    }
}

KDEventMapInventory["tick"]["CheckPoseKB4H"] = (e, item, date) => {
    let n = KB4H_IsHandBind()
    console.log(n)
    if (n = false) {
        KinkyDungeonRemoveRestraintsWithShrine("KronosBubble4H", undefined, true, false, true, false, true);
        KinkyDungeonAddRestraintIfWeaker("BubbleKronos4HandFront", 20, false, undefined, false, false, undefined, item.faction);
    }
}
//KDIsKneeling(KinkyDungeonPlayer);
function KB4H_IsHandBind(C) {
    if (!C) C = KinkyDungeonPlayer;
    let currentModel = KDCurrentModels.get(C)
    let Y
    if (currentModel.Poses.HandsBehind || currentModel.Poses.Boxtie || currentModel.Poses.HandsBound || currentModel.Poses.Hogtie) {
        Y = true
    }
    else {
        Y = false
    }
    //console.log(KinkyDungeonPlayer)
    console.log(Y)
    return Y
}
