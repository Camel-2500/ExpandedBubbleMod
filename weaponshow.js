
if (!KDEventMapWeapon.dressRestraints) KDEventMapWeapon.dressRestraints = {};

KDEventMapWeapon.dressRestraints.drawBubbleWand = (e, weapon, data) => {
    if(!KinkyDungeonPlayerTags.get("Furniture") || !KinkyDungeonPlayerTags.get("ModBubble")) {
        KDInventoryWear(data.Character, "BubbleWand");
    }
}