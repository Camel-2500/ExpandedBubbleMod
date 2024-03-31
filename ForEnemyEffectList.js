let KDEnemyDetergent = { id: "EnemyDetergent", type: "MoveSpeed", power: 0.5, duration: 7, enemy: true, aura: "#0bbfe3", events: [{ type: "RemoveEnemyDetergent", duration: 1, trigger: "tick" },], };
//let KDEnemyBubbled = {id: "Bubbled",power: 10,aura: "#ffffff",noAuraColor: true, aurasprite: "EnemyBubbled",type: "Bubbled",duration: e.duration,}

//function

function BubbleAnimFloat(enemy, time) {
    KinkyDungeonSetEnemyFlag(enemy, "flying", time);
}

KDEventMapBuff["RemoveEnemyDetergent"] = (e, buff, entity, data) => {
    if (!KDDetergent(entity)) {
        if (entity.player) {
            delete KinkyDungeonPlayerBuffs.Detergent;
        } else {
            delete entity.buffs.Detergent;
        }
    }
}

KDEventMapBuff["RemoveDetergent"] = (e, buff, entity, data) => {
    if (!KDDetergent(entity)) {
        if (entity.player) {
            delete KinkyDungeonPlayerBuffs.Detergent;
        } else {
            delete entity.buffs.Detergent;
        }
    }
}

KDEventMapWeapon["playerAttack"]["ApplyBubble"] = (e, weapon, data) => {
    if (data.enemy && !data.miss && !data.disarm)
    {

        if (!e.prereq || KDCheckPrereq(data.enemy, e.prereq))
        {

            if (data.enemy && data.enemy.hp > 0 && !KDHelpless(data.enemy)) {




                KinkyDungeonApplyBuffToEntity(data.enemy, { id: "Bubbled", power: 10, aura: "#ffffff", noAuraColor: true, aurasprite: "EnemyBubbled", type: "Bubbled", duration: e.duration, })

                BubbleAnimFloat(data.enemy, e.duration)

                KinkyDungeonDamageEnemy(data.enemy, {
                    type: e.damage,
                    crit: e.crit,
                    damage: 0,
                    time: e.duration,
                    bind: e.bind,
                    bindEff: e.bindEff,
                    distract: e.distract,
                    desireMult: e.desireMult,
                    distractEff: e.distractEff,
                    bindType: e.bindType,
                }, false, e.power < 0.5, undefined, undefined, KinkyDungeonPlayerEntity, undefined, undefined, data.vulnConsumed)
            }
        }
    }
}

KDEventMapBullet["bulletHitEnemy"]["ApplyBubble"] = (e, b, data) => {
    if (b && data.enemy && !KDHelpless(data.enemy) && data.enemy.hp > 0 && b.bullet?.damage) {
        KinkyDungeonApplyBuffToEntity(data.enemy, { id: "Bubbled", power: 10, aura: "#ffffff", noAuraColor: true, aurasprite: "EnemyBubbled", type: "Bubbled", duration: e.duration, })


        BubbleAnimFloat(data.enemy, e.duration)

        KinkyDungeonDamageEnemy(data.enemy, {
            type: e.damage,
            crit: e.crit,
            damage: 0,
            time: e.duration,
            bind: e.bind,
            bindEff: e.bindEff,
            distract: e.distract,
            desireMult: e.desireMult,
            distractEff: e.distractEff,
            bindType: e.bindType,
        }, false, e.power < 0.5, undefined, undefined, KinkyDungeonPlayerEntity, undefined, undefined, data.vulnConsumed)
    }
}


KDEventMapWeapon["beforePlayerAttack"]["BubbleKatanaBoost"] = (e, weapon, data) => {
    if (data.enemy && !data.miss && !data.disarm && data.Damage && data.Damage.damage) {
        if (data.enemy && data.enemy.hp > 0 && !KDHelpless(data.enemy)) {
            if (!e.chance || KDRandom() < e.chance) {
                let binddmgMult = e.power;
                let dmgMult = e.power;
                let charge = KinkyDungeonPlayerBuffs[weapon.name + "Charge"] ? KinkyDungeonPlayerBuffs[weapon.name + "Charge"].duration : 0;
                if (charge >= 9) {

                    dmgMult = dmgMult * 1.5
                    binddmgMult = dmgMult * 3.5;

                    data.Damage.damage = data.Damage.damage + dmgMult * charge;
                    data.Damage.bind = data.Damage.bind + binddmgMult * charge;

                    //enemy bubbled
                    KinkyDungeonApplyBuffToEntity(data.enemy, { id: "Bubbled", power: 10, aura: "#ffffff", noAuraColor: true, aurasprite: "EnemyBubbled", type: "Bubbled", duration: e.duration, })


                    BubbleAnimFloat(data.enemy, e.duration)

                    KinkyDungeonDamageEnemy(data.enemy, {
                        type: e.damage,
                        crit: e.crit,
                        damage: 0,
                        time: e.duration,
                        bind: e.bind,
                        bindEff: e.bindEff,
                        distract: e.distract,
                        desireMult: e.desireMult,
                        distractEff: e.distractEff,
                        bindType: e.bindType,
                    }, false, e.power < 0.5, undefined, undefined, KinkyDungeonPlayerEntity, undefined, undefined, data.vulnConsumed)

                    /*
                    KinkyDungeonApplyBuffToEntity(data.enemy,
                        {
                            id: "Slowed",
                            type: "MoveSpeed",
                            power: -1.0,
                            player: false,
                            enemies: true,
                            duration: e.duration,
                        });
                    */
                }
                if (KinkyDungeonPlayerBuffs[weapon.name + "Charge"]) KinkyDungeonPlayerBuffs[weapon.name + "Charge"].duration = 0;

                if (e.energyCost) KinkyDungeonChangeCharge(- e.energyCost * charge);
                if (charge > 9) {
                    KinkyDungeonPlaySound(KinkyDungeonRootDirectory + "Audio/" + "KatanaFullSwing" + ".ogg")
                };
            }
        }
    }
}

KDEventMapBullet["bulletHitEnemy"]["ApplyBubbleBullet"] = (e, b, data) => {
    if (b && data.enemy && !KDHelpless(data.enemy) && data.enemy.hp > 0 && b.bullet?.damage) {
        KinkyDungeonApplyBuffToEntity(data.enemy, KDEnemyDetergent)
        if (KDEntityHasBuff(data.enemy, "EnemyDetergent")) {
            KinkyDungeonApplyBuffToEntity(data.enemy, { id: "Bubbled", power: 10, aura: "#ffffff", noAuraColor: true, aurasprite: "EnemyBubbled", type: "Bubbled", duration: e.duration, })
            BubbleAnimFloat(data.enemy, e.duration)
            KinkyDungeonDamageEnemy(data.enemy, {
                type: e.damage,
                crit: e.crit,
                damage: e.power,
                time: 13,
                bind: e.bind,
                bindEff: e.bindEff,
                distract: e.distract,
                desireMult: e.desireMult,
                distractEff: e.distractEff,
                bindType: e.bindType,
            }, false, e.power < 0.5, undefined, undefined, KinkyDungeonPlayerEntity, undefined, undefined, data.vulnConsumed)
        }
    }
}

