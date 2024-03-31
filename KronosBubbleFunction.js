
KDEventMapInventory["tick"]["RemoveKronosBubble"] = (e, item, data) => {
    KinkyDungeonRemoveRestraintsWithShrine("KronosBubbles", undefined, true, false, true, false, true);
}


let KBResName = ["BubbleKronos1", "BubbleKronos2Shoulder", "BubbleKronos2Boots", "BubbleKronos3Boots", "BubbleKronos3Shoulder", "BubbleKronos4Crotch", "BubbleKronos4Boots", "BubbleKronos4HandFront", "BubbleKronos5", "SquishBubble"];


//struggle
KDEventMapInventory["struggle"]["StruggleKronosBoots"] = (e, item, data) => {
    let random = (Math.floor(Math.random() * 100)) + 1
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
    let random = (Math.floor(Math.random() * 100)) + 1
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
    let random = (Math.floor(Math.random() * 100)) + 1

    if (KinkyDungeonPlayerTags.has("KronosBubble4B") && KinkyDungeonPlayerTags.has("KronosBubble4H")) {
        if (random >= 10) {
            KinkyDungeonAddRestraintIfWeaker("BubbleKronos4Crotch", 11, false, undefined, false, false, undefined, undefined);
            KinkyDungeonSendTextMessage(10, TextGet("SpreadOtherKronosBubble"), "#60fafc", 1);
        }
    }
}

KDEventMapInventory["struggle"]["StruggleKronosBubble4All"] = (e, item, data) => {
    let random = (Math.floor(Math.random() * 100)) + 1
    if (random >= 25) {
        if (KinkyDungeonPlayerTags.has("KronosBubble4C") && KinkyDungeonPlayerTags.has("KronosBubble4B") && KinkyDungeonPlayerTags.has("KronosBubble4H")) {
            KinkyDungeonAddRestraintIfWeaker("BubbleKronos5", 6, false, undefined, false, false, undefined, item.faction);
            KinkyDungeonSendTextMessage(10, TextGet("Spread4KronosBubble"), "#60fafc", 1);
        }
    }
}

//tick spread
KDEventMapInventory["tick"]["B_KronosBubbleSpread"] = (e, item, data) => {
    let random = (Math.floor(Math.random() * 100)) + 1
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
    let random = (Math.floor(Math.random() * 100)) + 1
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
    if(n){
        KinkyDungeonRemoveRestraintsWithShrine("KronosBubble4H", undefined, true, false, true, false, true);
        KinkyDungeonAddRestraintIfWeaker("BubbleKronos4HandFrontNonForce", 20, false, undefined, false, false, undefined, item.faction);
    }
    else{

    }
}

KDEventMapInventory["tick"]["CheckPoseKB4H"] = (e, item, date) => {
    let n = KB4H_IsHandBind()
console.log(n)
    if(n = false){
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
