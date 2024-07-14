/*
KDTrapTypes.ClamTrap = (tile, entity, x, y) => {
    if (entity.player)
        KinkyDungeonAddRestraintIfWeaker(KinkyDungeonGetRestraintByName("CageTrap"), 0, true);
    if (KDToggles.Sound && entity == KinkyDungeonPlayerEntity) AudioPlayInstantSoundKD(KinkyDungeonRootDirectory + "Audio/Trap.ogg");
    tile.Trap = undefined;
    tile.Type = undefined;
    return {
        triggered: true,
        msg: TextGet("KDCageTrap"),
    };
}
*/

console.log(KDTrapTypes)
/*
let MYVar = {
    MyFunction: (a1, a2) => {
        const gh = a1 * a2 - a1 / 5
        return gh
    }
}

//この変数に別のアロー関数を追加する方法

MYVar.AnotherFunction = (x, y) => {x + y};
*/
/* 
マップへの配置
Dialogへの追加
*/

//タイル情報１
//KDTilePalette.push('Bed': {type: "tile", tile: 'B'})

//タイルジェネレータ？
/*
KDTileGen.Rubble = (x, y, tile, tileGenerator, data) => {
		let rubblechance = data.params.rubblechance || 0.5;
		if (KinkyDungeonStatsChoice.get("Pristine")) rubblechance *= 0.3;
		if (KDRandom() < rubblechance)
			KinkyDungeonMapSet(x, y, 'R');
		else if (KDRandom() < rubblechance * rubblechance - 0.01)
			KinkyDungeonMapSet(x, y, '/');
		else
			KinkyDungeonMapSet(x, y, 'r');
		return null;
	}
*/