function GetRes(ResName) {
    let index = KinkyDungeonRestraints.findIndex(element => element.name === ResName);
    return (index)
}
KinkyDungeonRestraints[GetRes("Bubble")] = {
    removePrison: true, name: "Bubble", Asset: "VacCube", Color: ["#ff77ff"], Group: "ItemDevices", power: 3, weight: 1, alwaysStruggleable: true,
    Model: "MagicSoapBubble",
    addTag: ["ForceKneel", "NoHogtie"],
    hobble: 3,
    heelpower: 10,
    tightType: "Thick",
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
    escapeChance: { "Struggle": 0, "Cut": 0.8, "Remove": 0.3 },
    helpChance: { "Struggle": 0.2, "Pick": 1.0, "Remove": .2 },
    events: [
        { trigger: "afterPlayerDamage", type: "bubblePop", mult: 1.5, subMult: 0.5, count: 13, inheritLinked: true },
        { trigger: "beforePlayerDamage", type: "bounce", chance: 0.2, sfx: "RubberBolt", inheritLinked: true },
    ],
    enemyTags: { "bubble": 100 }, playerTags: {}, minLevel: 0, allFloors: true, shrine: ["Furniture", "Elements", "ModBubble"], removeOnLeash: true,
}


