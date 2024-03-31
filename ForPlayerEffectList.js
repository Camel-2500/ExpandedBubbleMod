


KDPlayerEffects["bubblehitted"] = (target, damage, playerEffect, spell, faction, bullet, entity) => {
	if (KDTestSpellHits(spell, 0.5, 0.0)) {
		let dmg = KinkyDungeonDealDamage({ damage: playerEffect?.power || spell?.power || 1, type: playerEffect?.damage || spell?.damage || damage }, bullet);

		if (!dmg.happened) return { sfx: "Shield", effect: false };

		if (KinkyDungeonPlayerBuffs.WaterBubble || KinkyDungeonPlayerBuffs.WaterBubble2 || playerEffect.power > 2) {
			// Add the sarcophagus
			let newAdd2 = KinkyDungeonGetRestraint({ tags: ["soapbubble"] }, 100);

			if (newAdd2) {

				KinkyDungeonAddRestraintIfWeaker(newAdd2, spell.power, false, undefined, false, false, undefined, faction);
				KinkyDungeonSendTextMessage(4, TextGet("SoapBubbleEngulf").KDReplaceOrAddDmg(dmg.string), "#2789cd", 1);
			}

			else {

				KinkyDungeonSendTextMessage(4, TextGet("KDWaterBubble").KDReplaceOrAddDmg(dmg.string), "#2789cd", 1);
			}
			KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, {
				id: "WaterBubble",
				aura: "#2789cd",
				aurasprite: "WaterBubble",
				noAuraColor: true,
				buffSprite: true,
				type: "Accuracy",
				power: -0.5,
				duration: playerEffect.time,
				tags: ["debuff"],
			});
			KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, {
				id: "WaterBubble2",
				type: "SlowLevel",
				power: 3,
				duration: playerEffect.time,
				tags: ["debuff", "slow"],
			});
		}
	}
	return { sfx: "BubbleHit", effect: true };
};


KDPlayerEffects["magicbubblehitted"] = (target, damage, playerEffect, spell, faction, bullet, entity) => {
	if (KDTestSpellHits(spell, 0.5, 0.0)) {
		let dmg = KinkyDungeonDealDamage({ damage: playerEffect?.power || spell?.power || 1, type: playerEffect?.damage || spell?.damage || damage }, bullet);

		if (!dmg.happened) return { sfx: "Shield", effect: false };

		if (KinkyDungeonPlayerBuffs.WaterBubble || KinkyDungeonPlayerBuffs.WaterBubble2 || playerEffect.power > 4) {
			// Add the sarcophagus
			let newAdd3 = KinkyDungeonGetRestraint({ tags: ["magicbubble"] }, 100);

			if (newAdd3) {
				console.log(KDSpecialBondage.Soap)
				KinkyDungeonAddRestraintIfWeaker(newAdd3, spell.power, false, undefined, false, false, undefined, faction);
				KinkyDungeonSendTextMessage(4, TextGet("SoapBubbleEngulf").KDReplaceOrAddDmg(dmg.string), "#2789cd", 1);
			}


			else {

				KinkyDungeonSendTextMessage(4, TextGet("KDWaterBubble").KDReplaceOrAddDmg(dmg.string), "#2789cd", 1);
			}
			KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, {
				id: "WaterBubble",
				aura: "#2789cd",
				aurasprite: "WaterBubble",
				noAuraColor: true,
				buffSprite: true,
				type: "Accuracy",
				power: -0.5,
				duration: playerEffect.time,
				tags: ["debuff"],
			});
			KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, {
				id: "WaterBubble2",
				type: "SlowLevel",
				power: 3,
				duration: playerEffect.time,
				tags: ["debuff", "slow"],
			});
		}
	}

	return { sfx: "BubbleHit", effect: true };
};


KDPlayerEffects["bubbling"] = (target, damage, playerEffect, spell, faction, bullet, entity) => {
	if (KDTestSpellHits(spell, 0.5, 0.0)) {
		let dmg = KinkyDungeonDealDamage({ damage: playerEffect?.power || spell?.power || 1, type: playerEffect?.damage || spell?.damage || damage }, bullet);

		if (!dmg.happened) return { sfx: "Shield", effect: false };

		if (KinkyDungeonPlayerBuffs.WaterBubble || KinkyDungeonPlayerBuffs.WaterBubble2 || playerEffect.power > 4) {
			// Add the sarcophagus

			let newAdd4 = KinkyDungeonGetRestraint({ tags: ["bubblesquish"] }, 100);

			if (newAdd4) {
				KinkyDungeonAddRestraintIfWeaker(newAdd4, spell.power, false, undefined, false, false, undefined, faction);
				KinkyDungeonSendTextMessage(4, TextGet("TextBubbling").KDReplaceOrAddDmg(dmg.string), "#2789cd", 1);
			}


			else {
				KinkyDungeonSendTextMessage(4, TextGet("KDWaterBubble").KDReplaceOrAddDmg(dmg.string), "#2789cd", 1);
			}

			KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, {
				id: "WaterBubble",
				aura: "#2789cd",
				aurasprite: "WaterBubble",
				noAuraColor: true,
				buffSprite: true,
				type: "Accuracy",
				power: -0.5,
				duration: playerEffect.time,
				tags: ["debuff"],
			});
			KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, {
				id: "WaterBubble2",
				type: "SlowLevel",
				power: 3,
				duration: playerEffect.time,
				tags: ["debuff", "slow"],
			});
		}
	}

	return { sfx: "Bubbling", effect: true };
};



KDPlayerEffects["bubblehitself"] = (target, damage, playerEffect, spell, faction, bullet, entity) => {
	if (KDTestSpellHits(spell, 0.5, 0.0)) {
		let dmg = KinkyDungeonDealDamage({ damage: playerEffect?.power || spell?.power || 1, type: playerEffect?.damage || spell?.damage || damage }, bullet);


		if (!dmg.happened) return { sfx: "Shield", effect: false };

		if (KinkyDungeonPlayerBuffs.WaterBubble || KinkyDungeonPlayerBuffs.WaterBubble2 || playerEffect.power > 2) {
			// Add the sarcophagus
			console.log(spell.power)
			let newAdd = KinkyDungeonGetRestraint({ tags: ["soapbubble"] }, 100);

			if (newAdd) {
				KinkyDungeonAddRestraintIfWeaker(newAdd, spell.power, false, undefined, false, false, undefined, faction);
				KinkyDungeonSendTextMessage(4, TextGet("SelfBubble"), "#2789cd", 1);
			}



			else {

				KinkyDungeonSendTextMessage(4, TextGet("KDWaterBubble").KDReplaceOrAddDmg(dmg.string), "#2789cd", 1);
			}
			KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, {
				id: "WaterBubble",
				aura: "#2789cd",
				aurasprite: "WaterBubble",
				noAuraColor: true,
				buffSprite: true,
				type: "Accuracy",
				power: -0.5,
				duration: playerEffect.time,
				tags: ["debuff"],
			});
			KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, {
				id: "WaterBubble2",
				type: "SlowLevel",
				power: 3,
				duration: playerEffect.time,
				tags: ["debuff", "slow"],
			});
		}
	}
	return { sfx: "BubbleHit", effect: true };
}
let KDDetergent = { id: "Detergent", type: "MoveSpeed", power: 0.1, player: true, duration: 10, /*aura: "#ffffff", noAuraColor: true, (enable this to show effect icon*/  enemy: true, events: [{ type: "RemoveDetergent", duration: 1, trigger: "tick" },] };

KDEventMapBuff["RemoveDetergent"] = (e, buff, entity, data) => {
	if (!KDDetergent(entity)) {
		if (entity.player) {
			delete KinkyDungeonPlayerBuffs.Detergent;
		} else {
			delete entity.buffs.Detergent;
		}
	}
}

function UpRandom(num) {
	if (KDEntityHasBuff(KinkyDungeonPlayerEntity, "Detergent") && KDEntityHasBuff(KinkyDungeonPlayerEntity, "Drenched")) {
		num += 20
	}

	else if (KDEntityHasBuff(KinkyDungeonPlayerEntity, "Detergent")) {
		num += 16
	}

	else if (KDEntityHasBuff(KinkyDungeonPlayerEntity, "Drenched")) {
		num += 10
	}

	if (num > 100) {
		num = 100
	}
	return num
}


KDBuffSprites["Detergent"] = true;

KDPlayerEffects["BubbleBullet"] = (target, damage, playerEffect, spell, faction, bullet, entity) => {
	if (KDTestSpellHits(spell, 0.5, 0.0)) {

		let dmg = KinkyDungeonDealDamage({ damage: playerEffect?.power || spell?.power || 1, type: playerEffect?.damage || spell?.damage || damage }, bullet);

		if (!dmg.happened) return { sfx: "Shield", effect: false };

		if (KinkyDungeonPlayerTags.has("KronosBubble5") && KinkyDungeonPlayerTags.has("KronosBubblesGag")) {
			KinkyDungeonAddRestraintIfWeaker("SquishBubble", 13, false, undefined, false, false, undefined, faction);
			KinkyDungeonSendTextMessage(5, TextGet("completeHitBubbleBullet").KDReplaceOrAddDmg(dmg.string), "#ff0000", 2);
			KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, KDDetergent);
		}

		if (KinkyDungeonPlayerTags.has("KronosBubble5") && !KinkyDungeonPlayerTags.has("KronosBubblesGag")) {
			KinkyDungeonAddRestraintIfWeaker("BubbleGag", 12, false, undefined, false, false, undefined, faction);
			KinkyDungeonSendTextMessage(5, TextGet("HitBubbleBullet").KDReplaceOrAddDmg(dmg.string), "#ff0000", 2);
			KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, KDDetergent);
			if(KinkyDungeonPlayerTags.has("Stuffing") || KinkyDungeonPlayerTags.has("Gags")){
				KinkyDungeonAddRestraintIfWeaker("SquishBubble", 13, false, undefined, false, false, undefined, faction);
				KinkyDungeonSendTextMessage(5, TextGet("completeHitBubbleBullet").KDReplaceOrAddDmg(dmg.string), "#ff0000", 2);
				KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, KDDetergent);
			}
		}

		if (KinkyDungeonPlayerTags.has("KronosBubble4B") && KinkyDungeonPlayerTags.has("KronosBubble4C") && KinkyDungeonPlayerTags.get("KronosBubble4H")) {
			KinkyDungeonAddRestraintIfWeaker("BubbleKronos5", 11, false, undefined, false, false, undefined, faction);
			KinkyDungeonSendTextMessage(5, TextGet("HitBubbleBullet").KDReplaceOrAddDmg(dmg.string), "#ff0000", 2);
			KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, KDDetergent);
		}

		if (!KinkyDungeonPlayerTags.has("MaxKronosBubble")) {
			if (KinkyDungeonPlayerTags.has("KronosBubble4B")) {
				let random = UpRandom(Math.floor(Math.random() * 100)) + 1
				if (random >= 1) {
					KinkyDungeonAddRestraintIfWeaker("BubbleKronos4HandFront", 10, false, undefined, false, false, undefined, faction);
					KinkyDungeonSendTextMessage(5, TextGet("HitBubbleBullet").KDReplaceOrAddDmg(dmg.string), "#ff0000", 2);
					KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, KDDetergent);
				}
			}

			if (KinkyDungeonPlayerTags.has("KronosBubble4C")) {
				let random = UpRandom(Math.floor(Math.random() * 100)) + 1
				if (random >= 2) {
					KinkyDungeonAddRestraintIfWeaker("BubbleKronos4Boots", 9, false, undefined, false, false, undefined, faction);
					KinkyDungeonSendTextMessage(5, TextGet("HitBubbleBullet").KDReplaceOrAddDmg(dmg.string), "#ff0000", 2);
					KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, KDDetergent);
				}
			}

			if (KinkyDungeonPlayerTags.has("KronosBubble3S")) {
				let random = UpRandom(Math.floor(Math.random() * 100)) + 1
				if (random >= 3) {
					KinkyDungeonAddRestraintIfWeaker("BubbleKronos4Crotch", 8, false, undefined, false, false, undefined, faction);
					KinkyDungeonSendTextMessage(5, TextGet("HitBubbleBullet").KDReplaceOrAddDmg(dmg.string), "#ff0000", 2);
					KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, KDDetergent);
				}
			}

			if (KinkyDungeonPlayerTags.has("KronosBubble3B")) {
				let random = UpRandom(Math.floor(Math.random() * 100)) + 1
				if (random >= 5) {
					KinkyDungeonAddRestraintIfWeaker("BubbleKronos3Shoulder", 7, false, undefined, false, false, undefined, faction);
					KinkyDungeonSendTextMessage(5, TextGet("HitBubbleBullet").KDReplaceOrAddDmg(dmg.string), "#ff0000", 2);
					KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, KDDetergent);
				}
			}

			if (KinkyDungeonPlayerTags.has("KronosBubble2B")) {
				console.log(KinkyDungeonPlayerTags.get("KronosBubble1"));
				let random = UpRandom(Math.floor(Math.random() * 100)) + 1
				if (random >= 10) {
					KinkyDungeonAddRestraintIfWeaker("BubbleKronos3Boots", 6, false, undefined, false, false, undefined, faction);
					KinkyDungeonSendTextMessage(5, TextGet("HitBubbleBullet").KDReplaceOrAddDmg(dmg.string), "#ff0000", 2);
					KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, KDDetergent);
				}
			}

			//second step
			if (KinkyDungeonPlayerTags.has("KronosBubble2S")) {
				let random = UpRandom(Math.floor(Math.random() * 100)) + 1
				if (random >= 15) {
					KinkyDungeonAddRestraintIfWeaker("BubbleKronos2Boots", 5, false, undefined, false, false, undefined, faction);
					KinkyDungeonSendTextMessage(5, TextGet("HitBubbleBullet").KDReplaceOrAddDmg(dmg.string), "#ff0000", 2);
					KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, KDDetergent);
				}
			}
			//let restraintType = KinkyDungeonPlayerTags.get("KronosBubble2S") ? "BubbleKronos2Boots" : "BubbleKronos2Shoulder";

			//second step
			if (KinkyDungeonPlayerTags.has("KronosBubble1B")) {
				let random = (Math.floor(Math.random() * 100)) + 1
				random = UpRandom(random)
				if (random >= 30) {
					KinkyDungeonAddRestraintIfWeaker("BubbleKronos2Shoulder", 4, false, undefined, false, false, undefined, faction);
					KinkyDungeonSendTextMessage(5, TextGet("HitBubbleBullet").KDReplaceOrAddDmg(dmg.string), "#ff0000", 2);
					KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, KDDetergent);
				}
			}

			//first step
			if (!KinkyDungeonPlayerTags.has("KronosBubbles")) {
				let random = Math.floor(Math.random() * 100) + 1
				console.log(random)
				random = UpRandom(random)
				if (random >= 55) {
					KinkyDungeonAddRestraintIfWeaker("BubbleKronos1", 3, false, undefined, false, false, undefined, faction);
					KinkyDungeonApplyBuffToEntity(KinkyDungeonPlayerEntity, KDDetergent);
					KinkyDungeonSendTextMessage(5, TextGet("HitBubbleBullet").KDReplaceOrAddDmg(dmg.string), "#ff0000", 2);
				}
			}
		}
		return { sfx: "BubbleHit", effect: true };
	}
	return { sfx: "BubbleHit", effect: true };
}