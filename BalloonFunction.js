//Balloon to top layer
//let KDHighCollarLink =  ["Balloons", "HighCollars", "Collars", "Modules"]; // in [] need to add in shirine. [] need to add lower layer
//let BalloonAsCollarRender = ["Balloons", "Collars", "Modules"];

//when "balloon stuffing machine" remove, add restrain "balloon" and "BalloonString"
KDEventMapInventory["postRemoval"]["BalloonStuffingChange"] = (e, item, data) => {
    if (!KinkyDungeonPlayerTags.get("Balloons")) {
        KinkyDungeonAddRestraintIfWeaker(KinkyDungeonGetRestraintByName("Balloon"), 10, true, "", true);
        KinkyDungeonSendTextMessage(10, TextGet("PullOutFromBalloonStuffingMachine"), "#09c5e3", 1); //この関数の、値渡しは、（優先度、"文章"、色、表示時間？）
        if (KDToggles.Sound) {KinkyDungeonPlaySound(KinkyDungeonRootDirectory + "Audio/" + "PullOut" + ".ogg");}
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
