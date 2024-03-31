
KDEventMapInventory["tick"]["bubblemove"] = (e, item, data) => {
    if (KinkyDungeonPlayerTags.has("ModBubble")) {
        //ModBubbleMoving.move.movvve();
        let Zrandom = (Math.floor(Math.random() * 100)) + 1
        if (KinkyDungeonPlayerTags.has("SB") || KinkyDungeonPlayerTags.has("MB") ) {
            if (Zrandom == 17) {
                let point = KinkyDungeonGetNearbyPoint(KinkyDungeonPlayerEntity.x, KinkyDungeonPlayerEntity.y, true, undefined, true, true);

                if (point && !KinkyDungeonEnemyAt(point.x, point.y)) { KDMovePlayer(point.x, point.y, false, false, true, true); }

                KinkyDungeonSendTextMessage(10, TextGet("BubbleMoving"), "#ffffff", 1);
            }
        }
        else {
            if (Zrandom == 33) {
                let point = KinkyDungeonGetNearbyPoint(KinkyDungeonPlayerEntity.x, KinkyDungeonPlayerEntity.y, true, undefined, true, true);

                if (point && !KinkyDungeonEnemyAt(point.x, point.y)) { KDMovePlayer(point.x, point.y, false, false, true, true); }

                KinkyDungeonSendTextMessage(10, TextGet("BubbleMoving"), "#ffffff", 1);
            }
        }
    }
}




