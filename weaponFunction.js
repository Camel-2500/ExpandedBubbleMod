//code by ada18980. draw bubble wand function
if (!KDEventMapWeapon.dressRestraints) KDEventMapWeapon.dressRestraints = {};

KDEventMapWeapon.dressRestraints.drawBubbleWand = (e, weapon, data) => {
    if(!KinkyDungeonPlayerTags.get("Furniture") || !KinkyDungeonPlayerTags.get("ModBubble")) {
        KDInventoryWear(data.Character, "BubbleWand");
    }
}

//Jam system for IMBubbleMachineGun
KDEventMapWeapon["playerCastSpecial"]["BubblingWeapon"] = (e, data) => {
    let random = Math.floor(Math.random() * 100) + 1
    console.log(random)
    if (random > 95) {//5% chance
        KinkyDungeonAddRestraintIfWeaker("BubbleKronos4HandFront", 12, false, undefined, false, false, undefined, undefined);
        KinkyDungeonSendTextMessage(5, TextGet("KinkyDungeonRubberBulletsAttach"), "#ff0000", 2);
    }
}

//check gag when using bubble wand
KDEventMapWeapon["tick"]["IsGagged"] = (e, data) => {
    if (KinkyDungeonGagTotal() > 0.0) {
        KinkyDungeonWeapons.BubbleWand.special = { type: "spell", spell: "GaggedBlowBubble", requiresEnergy: true, energyCost: 0.015, range: 12 }
    }
    else {
        KinkyDungeonWeapons.BubbleWand.special = { type: "spell", spell: "PlayerBlowBubble", requiresEnergy: true, energyCost: 0.001, range: 12 }
    }
    console.log(KinkyDungeonWeapons.BubbleWand.special)
}

//BubbleReflection
KDEventMapWeapon["playerCastSpecial"]["BubbleReflection"] = (e, weapon, data) => {
    if (KinkyDungeonPlayerTags.get("ModBubble")) {
        KinkyDungeonAddRestraintIfWeaker("SquishBubble", 12, false, undefined, false, false, undefined, undefined);
        KinkyDungeonSendTextMessage(10, TextGet("BubbleRefrection"), "#ffffff", 1);
    }
}


KinkyDungeonDamageEnemy = function(Enemy, Damage, Ranged, NoMsg, Spell, bullet, attacker, Delay, noAlreadyHit, noVuln, Critical) {
	if (bullet && !noAlreadyHit) {
		if (!bullet.alreadyHit) bullet.alreadyHit = [];
		// A bullet can only damage an enemy once per turn
		if (bullet.alreadyHit.includes(Enemy.id)) return 0;
		bullet.alreadyHit.push(Enemy.id);
	}

	let predata = {
		shieldBlocked: false,
		aggro: false,
		faction: "Enemy",
		enemy: Enemy,
		spell: Spell,
		bullet: bullet,
		attacker: attacker,
		nocrit: Spell?.nocrit || Enemy?.Enemy.tags?.nocrit || Damage?.nocrit,
		crit: KDDefaultCrit,
		bindcrit: KDDefaultBindCrit,
		type: (Damage) ? Damage.type : 0,
		bufftype: (Damage) ? Damage.type : 0,
		time: (Damage) ? Damage.time : 0,
		dmg: (Damage) ? Damage.damage : 0,
		bind: (Damage) ? Damage.bind : 0,
		bindType: (Damage) ? Damage.bindType : 0,
		flags: (Damage) ? Damage.flags : undefined,
		boundBonus: (Damage) ? Damage.boundBonus : 0,
		bindEff: (Damage) ? (Damage.bindEff || 1) : 1,
		distract: (Damage) ? Damage.distract : 0,
		distractEff: (Damage) ? Damage.distractEff : 0,
		desireMult: (Damage) ? Damage.desireMult : 0,
		incomingDamage: Damage,
		dmgDealt: 0,
		freezebroke: false,
		froze: 0,
		vulnerable: (Enemy.vulnerable || (KDHostile(Enemy) && !Enemy.aware)) && Damage && !Damage.novulnerable && (!Enemy.Enemy.tags || !Enemy.Enemy.tags.nonvulnerable),
		vulnConsumed: false,
		critical: Critical,
		forceCrit: false,
		customCrit: false,
		noblock: !Damage || Damage.noblock,
		blocked: false,
		Delay: Delay,
		ignoreshield: (Damage?.ignoreshield != undefined) ? Damage.ignoreshield : KinkyDungeonIgnoreShieldTypes.includes(Damage?.type || ""),
		shield_crit: Damage?.shield_crit, // Crit thru shield
		shield_stun: Damage?.shield_stun, // stun thru shield
		shield_freeze: Damage?.shield_freeze, // freeze thru shield
		shield_bind: Damage?.shield_bind, // bind thru shield
		shield_snare: Damage?.shield_snare, // snare thru shield
		shield_slow: Damage?.shield_slow, // slow thru shield
		shield_distract: Damage?.shield_distract, // Distract thru shield
		shield_vuln: Damage?.shield_vuln, // Vuln thru shield
		tease: Damage?.tease,
		stunResist: 0,
	};

	if (KDDamageEquivalencies[predata.type]) predata.bufftype = KDDamageEquivalencies[predata.type];

	if (attacker) {
		if (attacker.player) predata.faction = "Player";
		else if (attacker.Enemy) predata.faction = KDGetFaction(attacker);
	} else if (bullet) {
		if (bullet.bullet.faction) predata.faction = bullet.bullet.faction;
		else if (bullet.bullet.spell && bullet.bullet.spell.enemySpell) predata.faction = "Enemy";
		else predata.faction = "Player";
	} else if (Spell) {
		if (Spell.enemySpell) predata.faction = "Enemy";
		else predata.faction = "Player";
	}

	KinkyDungeonSendEvent("beforeCrit", predata);

	// Only player can crit on spells

	if (!predata.blocked)
		if (!Enemy.shield || predata.ignoreshield || predata.shield_crit)
			if (!predata.nocrit && (predata.faction == "Player" || predata.forceCrit) && predata.type != 'heal') {
				if ((predata.vulnerable && (predata.dmg > 0.5 || predata.bind > 1)) || predata.forceCrit) {
					predata.crit = KinkyDungeonGetCrit(KDGetSpellAccuracy(), Damage, Enemy) || KDDefaultCrit;
					if (KDToughArmor(Enemy) && predata.crit > 1) predata.crit = 1 + (predata.crit - 1)*0.5; // TOUGH armor
					predata.bindcrit = KinkyDungeonGetBindCrit(KDGetSpellAccuracy(), Damage, Enemy) || KDDefaultBindCrit;

					predata.critical = true;
					if (!predata.forceCrit && (predata.dmg > 0 || predata.bind > 0)) {
						predata.vulnConsumed = true;
					}

					KinkyDungeonSendEvent("duringCrit", predata);
					let dmgBonus = predata.dmg * (predata.crit - 1);
					predata.dmg = Math.max(0, predata.dmg + dmgBonus);
					predata.bindEff *= predata.bindcrit;
					if (!NoMsg)
						KinkyDungeonSendTextMessage(4, TextGet((Enemy.vulnerable || Enemy.distraction > Enemy.Enemy.maxhp) ? "KinkyDungeonVulnerable" : "KinkyDungeonUnseen")
							.replace("AMOUNT", "" + Math.round(10 * dmgBonus))
							.replace("EnemyName", TextGet("Name" + Enemy.Enemy.name)), "lightgreen", 2,
						undefined, undefined, undefined, "Combat");



					KinkyDungeonSendEvent("afterCrit", predata);

					if (predata.critical && Enemy.buffs) KinkyDungeonTickBuffTag(Enemy, "crit");
				}
			}

	KinkyDungeonSendEvent("beforeDamageEnemy", predata);

	if (!predata.dmg) predata.dmg = 0;
	//let type = (Damage) ? Damage.type : "";
	let effect = false;
	let resistStun = 0;
	let resistSlow = 0;
	let resistDamage = 0;
	let spellResist = (Damage && Enemy.Enemy.spellResist && !KinkyDungeonMeleeDamageTypes.includes(predata.type)) ? Enemy.Enemy.spellResist : 0;
	if (KinkyDungeonGetBuffedStat(Enemy.buffs, "SpellResist")) spellResist += KinkyDungeonGetBuffedStat(Enemy.buffs, "SpellResist");
	let armor = (Damage && Enemy.Enemy.armor && KinkyDungeonMeleeDamageTypes.includes(predata.type)) ? Enemy.Enemy.armor : 0;
	if (KinkyDungeonGetBuffedStat(Enemy.buffs, "Armor")) armor += KinkyDungeonGetBuffedStat(Enemy.buffs, "Armor");

	predata.stunResist += KinkyDungeonGetBuffedStat(Enemy.buffs, "StunResist");

	if (!predata.critical && !KinkyDungeonIsDisabled(Enemy)) {
		let block_phys = (Enemy.Enemy.Resistance?.block_phys || 0) + KinkyDungeonGetBuffedStat(Enemy.buffs, "BlockPhys");
		let block_magic = (Enemy.Enemy.Resistance?.block_magic || 0) + KinkyDungeonGetBuffedStat(Enemy.buffs, "BlockMagic");
		if (block_phys) armor += block_phys;
		if (block_magic) spellResist += block_magic;
	}


	if (KinkyDungeonGetBuffedStat(Enemy.buffs, "ArmorBreak")) armor -= Math.min(Math.max(0, armor), KinkyDungeonGetBuffedStat(Enemy.buffs, "ArmorBreak"));
	if (KinkyDungeonGetBuffedStat(Enemy.buffs, "SpellResistBreak")) spellResist -= Math.min(Math.max(0, spellResist), KinkyDungeonGetBuffedStat(Enemy.buffs, "SpellResistBreak"));

	if (Enemy.freeze > 0 && Damage && KinkyDungeonShatterDamageTypes.includes(predata.type)) {
		predata.dmg *= KDFightParams.KDFreezeShatterMult;
	} else if (Enemy.freeze > 0 && Damage && KinkyDungeonMeleeDamageTypes.includes(predata.type)) {
		predata.dmg *= KDFightParams.KDFreezeMeleeMult;
	}


	let miss = !(!Damage || !Damage.evadeable || KinkyDungeonEvasion(Enemy, (true && Spell), !KinkyDungeonMeleeDamageTypes.includes(predata.type), attacker));
	if (Damage && !miss) {
		if (predata.faction == "Player") {
			if (KinkyDungeonStatsChoice.get("Pacifist") && Enemy.Enemy.bound && !Enemy.Enemy.nonHumanoid && !KinkyDungeonPacifistDamageTypes.includes(predata.type)) {
				predata.dmg *= KDPacifistReduction;
			}
			if (KinkyDungeonStatsChoice.get("EnemyArmor")) {
				armor += KDPerkParams.KDEnemyArmorBoost;
				spellResist += KDPerkParams.KDEnemyArmorBoost;
			}
		}
		KDUpdatePerksBonus();
		let DamageAmpBonusPerks = KDDamageAmpPerks
			+ (KinkyDungeonMeleeDamageTypes.includes(predata.type) ? KDDamageAmpPerksMelee : KDDamageAmpPerksMagic)
			+ (Spell && !Spell.allySpell && !Spell.enemySpell ? KDDamageAmpPerksSpell : 0);
		let damageAmp = KinkyDungeonMultiplicativeStat(-KinkyDungeonGetBuffedStat(Enemy.buffs, "DamageAmp") - (KDHostile(Enemy) && (!attacker || attacker.player) ? (DamageAmpBonusPerks) : 0));
		let buffreduction = KinkyDungeonGetBuffedStat(Enemy.buffs, "DamageReduction");
		let buffresist = KinkyDungeonMultiplicativeStat(KinkyDungeonGetBuffedStat(Enemy.buffs, predata.bufftype + "DamageResist"));
		buffresist *= KinkyDungeonMeleeDamageTypes.includes(predata.type) ?
			KinkyDungeonMultiplicativeStat(KinkyDungeonGetBuffedStat(Enemy.buffs, "meleeDamageResist"))
			: KinkyDungeonMultiplicativeStat(KinkyDungeonGetBuffedStat(Enemy.buffs, "magicDamageResist"));
		let buffType = predata.bufftype + "DamageBuff";
		let buffAmount = 1 + (KDHostile(Enemy) ? KinkyDungeonGetBuffedStat(KinkyDungeonPlayerBuffs, buffType) : 0);
		predata.dmg *= buffAmount;
		predata.dmg *= buffresist;

		if (KinkyDungeonMeltDamageTypes.includes(predata.type) && Enemy.freeze > 0) {
			predata.dmg *= 1.4;
		}

		if (damageAmp) predata.dmg *= damageAmp;



		if (Enemy.Enemy.tags) {
			if (KinkyDungeonGetImmunity(Enemy.Enemy.tags, Enemy.Enemy.Resistance?.profile, predata.type, "severeweakness")) resistDamage = -2;
			else if (KinkyDungeonGetImmunity(Enemy.Enemy.tags, Enemy.Enemy.Resistance?.profile, predata.type, "weakness")) resistDamage = -1;
			else if (KinkyDungeonGetImmunity(Enemy.Enemy.tags, Enemy.Enemy.Resistance?.profile, predata.type, "immune")) resistDamage = 2;
			else if (KinkyDungeonGetImmunity(Enemy.Enemy.tags, Enemy.Enemy.Resistance?.profile, predata.type, "resist")) resistDamage = 1;

			if (Enemy.Enemy.tags.unstoppable) resistStun = 2;
			else if (Enemy.Enemy.tags.unflinching) resistStun = 1;
			if (Enemy.Enemy.tags.unslowable) resistSlow = 2;
			else if (Enemy.Enemy.tags.slowresist) resistSlow = 1;

		}

		if (Enemy.boundLevel > 0 && (KinkyDungeonTeaseDamageTypes.includes(predata.type) || KDIsTeasing(Damage))) {
			let eff = KDBoundEffects(Enemy);
			let mult = 1.0;
			if (eff > 0) {
				mult += 0.5;
			}
			if (eff > 3) {
				mult += 0.5;
			}

			if (KinkyDungeonGetBuffedStat(Enemy.buffs, "TeaseVuln")) mult += KinkyDungeonGetBuffedStat(Enemy.buffs, "TeaseVuln");
			if (attacker?.player && KDEntityBuffedStat(attacker, "TeaseBuff")) mult += KDEntityBuffedStat(attacker, "TeaseBuff");
			predata.dmg *= mult;
		}
		if (Enemy.boundLevel > 0 && Damage && Damage.boundBonus) {
			let eff = KDBoundEffects(Enemy);
			predata.dmg += Damage.boundBonus * eff;
		}

		let killed = Enemy.hp > 0;
		let forceKill = false;


		let time = predata.time ? predata.time : 0;
		if (!KinkyDungeonMeleeDamageTypes.includes(predata.type)) {
			if (time && spellResist)
				time = Math.max(0, Math.ceil(time * KDArmorFormula(predata.dmg, spellResist)));
			//predata.dmg = Math.max(0, predata.dmg * KDArmorFormula(predata.dmg, spellResist));
			armor = spellResist || 0;
		}

		if (time > 0 && predata.stunResist) {
			time = Math.max(0, Math.min(time - predata.stunResist, time * KDArmorFormula(time, predata.stunResist)));
		}

		if (predata.type != "inert" && resistDamage < 2) {
			if (resistDamage == 1) {
				predata.dmgDealt = Math.max(predata.dmg * KDArmorFormula(predata.dmg, armor), 0); // Armor goes before resistance
				predata.dmgDealt = predata.dmgDealt*0.5; // Enemies that are vulnerable take either dmg+0.5 or 1.5x damage, whichever is greater
			} else if (resistDamage == -1) {
				if (predata.dmg > 0)
					predata.dmgDealt = Math.max(predata.dmg+0.5, predata.dmg*1.5); // Enemies that are vulnerable take either dmg+1 or 1.5x damage, whichever is greater
				else predata.dmgDealt = 0;
				predata.dmgDealt = Math.max(predata.dmgDealt * KDArmorFormula(predata.dmg, armor), 0); // Armor comes after vulnerability
			} else if (resistDamage == -2) {
				predata.dmgDealt = Math.max(predata.dmg+1, predata.dmg*2); // Enemies that are severely vulnerable take either dmg+1 or 2x damage, whichever is greater
				predata.dmgDealt = Math.max(predata.dmgDealt * KDArmorFormula(predata.dmg, armor), 0); // Armor comes after vulnerability
			} else {
				predata.dmgDealt = Math.max(predata.dmg * KDArmorFormula(predata.dmg, armor), 0);
			}

			if (Enemy.Enemy.tags && Enemy.Enemy.tags.playerinstakill && attacker && attacker.player) predata.dmgDealt = Enemy.hp;
			else if (buffreduction && predata.dmgDealt > 0) {
				predata.dmgDealt = Math.max(predata.dmgDealt - buffreduction, 0);
				KinkyDungeonTickBuffTag(Enemy, "damageTaken", 1);
				KinkyDungeonPlaySound(KinkyDungeonRootDirectory + "Audio/Shield.ogg");
			}

			if (!predata.blocked)
				if (!Enemy.shield || predata.ignoreshield)
					if (Enemy.freeze > 0 && predata.dmgDealt > 0) {
						if ((KinkyDungeonShatterDamageTypes.includes(predata.type)) || (KinkyDungeonMeleeDamageTypes.includes(predata.type))) {
							Enemy.freeze = 0;
						} else if (!["ice", "frost"].includes(predata.type)) {
							Enemy.freeze = Math.max(0, Enemy.freeze - predata.dmgDealt * (predata.type == "fire" ? 0.75 : 0.25));
						}
						if (Enemy.freeze == 0) {
							predata.freezebroke = true;
						}
					}

			KinkyDungeonSendEvent("duringDamageEnemy", predata);

			if (Spell && Spell.hitsfx) KinkyDungeonPlaySound(KinkyDungeonRootDirectory + "Audio/" + Spell.hitsfx + ".ogg");
			else if (!(Spell && Spell.hitsfx) && predata.dmgDealt > 0 && bullet) KinkyDungeonPlaySound(KinkyDungeonRootDirectory + "Audio/DealDamage.ogg");
			if (!predata.blocked && !KinkyDungeonIgnoreBlockTypes.includes(predata.type) && predata.dmgDealt >= 1 && !predata.noblock && Enemy.blocks >= 1 && KDCanBlock(Enemy)) {
				let blockCount = 1;
				Enemy.blocks -= 1;
				Enemy.blockedordodged = (Enemy.blockedordodged || 0) + 1;
				let amount = KDGetBlockAmount(Enemy);
				let orig = predata.dmgDealt;
				predata.dmgDealt -= Math.max(0, amount);

				while (predata.dmgDealt > 0 && Enemy.blocks >= 1 && (predata.dmgDealt > Enemy.hp * 0.1 || predata.dmgDealt > Enemy.Enemy.maxhp*0.5)) {
					blockCount += 1;
					Enemy.blocks -= 1;
					Enemy.blockedordodged = (Enemy.blockedordodged || 0) + 1;
					amount = KDGetBlockAmount(Enemy);
					predata.dmgDealt -= Math.max(0, amount);
				}

				let knockback = () => {
					if (blockCount > 1 && Enemy.Enemy.tags.noknockback && !KDIsImmobile(Enemy)) {
						if (bullet && (bullet.vx || bullet.vy)) {
							// Gets pushed back by the projectile
							let dist = blockCount - 1;
							let speed = KDistEuclidean(bullet.vx, bullet.vy);
							for (let i = dist; i > 0; i--) {
								let newX = Enemy.x + Math.round(i * bullet.vx/speed);
								let newY = Enemy.y + Math.round(i * bullet.vy/speed);
								if (KinkyDungeonMovableTilesEnemy.includes(KinkyDungeonMapGet(newX, newY)) && KinkyDungeonNoEnemy(newX, newY, true)
								&& (i == 1 || KinkyDungeonCheckProjectileClearance(Enemy.x, Enemy.y, newX, newY))) {
									KDMoveEntity(Enemy, newX, newY, false);
								}
							}
						} else if (bullet && (Enemy.x != bullet.x || Enemy.y != bullet.y)) {
							// Gets knocked away from the explosion
							let dist = blockCount - 1;
							let speed = KDistEuclidean(Enemy.x - bullet.x, Enemy.y - bullet.y);
							for (let i = dist; i > 0; i--) {
								let newX = Enemy.x + Math.round(-i * (Enemy.x - bullet.x)/speed);
								let newY = Enemy.y + Math.round(-i * (Enemy.y - bullet.y)/speed);
								if (KinkyDungeonMovableTilesEnemy.includes(KinkyDungeonMapGet(newX, newY)) && KinkyDungeonNoEnemy(newX, newY, true)
								&& (i == 1 || KinkyDungeonCheckProjectileClearance(Enemy.x, Enemy.y, newX, newY))) {
									KDMoveEntity(Enemy, newX, newY, false);
								}
							}
						} else if (!bullet && attacker && !Spell) {
							// Gets knocked away from the explosion
							let dist = blockCount - 1;
							let speed = KDistEuclidean(Enemy.x - attacker.x, Enemy.y - attacker.y);
							for (let i = dist; i > 0; i--) {
								let newX = Enemy.x + Math.round(-i * (Enemy.x - attacker.x)/speed);
								let newY = Enemy.y + Math.round(-i * (Enemy.y - attacker.y)/speed);
								if (KinkyDungeonMovableTilesEnemy.includes(KinkyDungeonMapGet(newX, newY)) && KinkyDungeonNoEnemy(newX, newY, true)
								&& (i == 1 || KinkyDungeonCheckProjectileClearance(Enemy.x, Enemy.y, newX, newY))) {
									KDMoveEntity(Enemy, newX, newY, false);
								}
							}
						}
					}
				};

				if (predata.dmgDealt <= 0) {
					predata.dmgDealt = 0;
					predata.blocked = true;
					if (!NoMsg && predata.faction == "Player") {
						KinkyDungeonSendTextMessage(4, TextGet(blockCount == 1 ? "KDEnemyBlockSuccess" : "KDEnemyBlockSuccessMulti")
							.replace("ENMY", TextGet("Name" + Enemy.Enemy.name)), "orange", 2, undefined, undefined, undefined, "Combat");
					}

					knockback();
				} else {
					if (!NoMsg && predata.faction == "Player") {
						KinkyDungeonSendTextMessage(4, TextGet(blockCount == 1 ? "KDEnemyBlockPartial" : "KDEnemyBlockPartialMulti")
							.replace("PCNT", "" + Math.round(100 * amount/orig))
							.replace("ENMY", TextGet("Name" + Enemy.Enemy.name)), "orange", 2, undefined, undefined, undefined, "Combat");
					}

					knockback();
				}
			}

			if (Damage && Damage.damage) {
				if (predata.faction == "Player" || KinkyDungeonVisionGet(Enemy.x, Enemy.y) > 0) {
					if (predata.critical && !predata.customCrit) KDDamageQueue.push({floater: TextGet("KDCritical"), Entity: Enemy, Color: "#e7cf1a", Delay: Delay});
					KDDamageQueue.push({floater: Math.round(predata.dmgDealt*10) + ` ${TextGet("KinkyDungeonDamageType" + KinkyDungeonDamageTypes[predata.type]?.name)} ${TextGet("KDdmg")}`,
						Entity: Enemy, Color: "#ff4444", Delay: Delay, });
				}
			}

			if (Enemy.shield > 0 && predata.dmgDealt > 0) {
				let orig = predata.dmgDealt;
				Enemy.shield -= predata.dmgDealt;
				if (Enemy.shield <= 0) {
					predata.dmgDealt = -Enemy.shield;
					delete Enemy.shield;
				} else {
					Enemy.playerdmg = (Enemy.playerdmg || 0) + orig;
					predata.dmgDealt = 0;
					predata.shieldBlocked = true;
				}
			}
			if (predata.dmgDealt > 0) {
				Enemy.hp -= predata.dmgDealt;
			}
			if (Enemy.hp > 0 && Enemy.hp <= 0.51 && predata.dmgDealt > 0.51 && !forceKill && KDBoundEffects(Enemy) < 4) {
				Enemy.hp = 0;
			}
			if (predata.dmgDealt > 0) Enemy.revealed = true;
		}


		if (!predata.blocked)
			if (!Enemy.shield || predata.ignoreshield || predata.shield_stun)
				if ((KinkyDungeonStunDamageTypes.includes(predata.type))) { // Being immune to the damage stops the stun as well
					effect = true;
					if (!Enemy.stun) KDAddThought(Enemy.id, "Status", 5, 1);
					if (!Enemy.stun) Enemy.stun = 0;
					let origStun = Enemy.stun;
					if (resistStun == 2 || resistDamage == 2)
						Enemy.stun = Math.max(Enemy.stun, Math.min(Math.floor(time/3), time-2));
						// Unstoppable have stuns reduced to 1/3, and anything that stuns them for 2 turns doesn't affect them
					else if (resistStun == 1 || resistDamage == 1)
						Enemy.stun = Math.max(Enemy.stun, Math.min(Math.floor(time/2), time-1));
						// Enemies with stun resistance have stuns reduced to 1/2, and anything that stuns them for one turn doesn't affect them
					else Enemy.stun = Math.max(Enemy.stun, time);

					if (Enemy.stun > origStun) {
						KinkyDungeonSendEvent("stun", predata);
					}
				}

		if (!predata.blocked)
			if (!Enemy.shield || predata.ignoreshield || predata.shield_freeze)
				if ((KinkyDungeonFreezeDamageTypes.includes(predata.type))) { // Being immune to the damage stops the stun as well
					effect = true;
					if (!Enemy.freeze) KDAddThought(Enemy.id, "Freeze", 5, 1);
					if (!(Enemy.freeze > 0)) Enemy.freeze = 0;
					let preFreeze = Enemy.freeze > 0;
					let origStun = Enemy.freeze;
					if (resistDamage == 2 || resistStun == 2)
						Enemy.freeze = Math.max(Enemy.freeze, Math.min(Math.floor(time/3), time-2));
					else if (resistDamage == 1 || resistStun == 1)
						Enemy.freeze = Math.max(Enemy.freeze, Math.min(Math.floor(time/2), time-1));
						// Enemies with ice resistance have freeze reduced to 1/2, and anything that freezes them for one turn doesn't affect them
					else Enemy.freeze = Math.max(Enemy.freeze, time);
					predata.froze = (Enemy.freeze > 0 && !preFreeze) ? Enemy.freeze : 0;

					if (Enemy.freeze > origStun) {
						KinkyDungeonSendEvent("freeze", predata);
					}
				}
		if (!predata.blocked)
			if (!Enemy.shield || predata.ignoreshield || predata.shield_snare)
				if ((KinkyDungeonBindDamageTypes.includes(predata.type))) { // Being immune to the damage stops the bind
					effect = true;
					if (!Enemy.bind) Enemy.bind = 0;
					let origStun = Enemy.bind;
					if (resistDamage == 2 || resistStun == 2)
						Enemy.bind = Math.max(Enemy.bind, Math.min(Math.floor(time/3), time-2));
					else if (resistDamage == 1 || resistStun == 1)
						Enemy.bind = Math.max(Enemy.bind, Math.min(Math.floor(time/2), time-1));
						// Enemies with resistance have bind reduced to 1/2, and anything that binds them for one turn doesn't affect them
					else Enemy.bind = Math.max(Enemy.bind, time);

					if (Enemy.bind > origStun) {
						KinkyDungeonSendEvent("bind", predata);
					}
				}
		if (!predata.blocked)
			if (!Enemy.shield || predata.ignoreshield || predata.shield_bind)
				if ((predata.dmg || predata.bind) && Enemy.Enemy.bound && (resistDamage < 2) && (predata.bind || predata.bindType || KinkyDungeonBindingDamageTypes.includes(predata.type))) {
					effect = true;
					if (!Enemy.boundLevel) Enemy.boundLevel = 0;

					let effmult = 1;
					if (resistStun == -2) {
						predata.bindEff *= 2;
					} else if (resistStun == -1) {
						predata.bindEff *= 1.5;
					}
					if (resistDamage == 1 || resistStun == 1) {
						predata.bindEff *= 0.75;
						effmult *= 0.75;
					}
					if (resistDamage == 2 || resistStun == 2) {
						predata.bindEff *= 0.5;
						effmult *= 0.5;
					}
					if (KinkyDungeonIsDisabled(Enemy)) {
						predata.bindEff *= 2;
						effmult *= 2;
					} else if (KinkyDungeonIsSlowed(Enemy)) {
						predata.bindEff *= 1.5;
						effmult *= 1.5;
					}

					if (predata.faction == "Player") {
						let bindAmpModBase = KinkyDungeonMultiplicativeStat(-KinkyDungeonGetBuffedStat(KinkyDungeonPlayerBuffs, "BindAmp"));
						let amp = KDGetBindAmp(Enemy, bindAmpModBase);
						predata.bindEff *= amp;
					}

					if (!(Enemy.boundLevel > 0)) {
						let Thought = "Annoyed";
						if (KDStrictPersonalities.includes(Enemy.personality)) Thought = "Struggle";
						else if (KDLoosePersonalities.includes(Enemy.personality)) Thought = "Embarrassed";
						KDAddThought(Enemy.id, Thought, 5, 2);
					}


					let amt = predata.bindEff * (predata.bind ? predata.bind : predata.dmg);
					/*if (predata.vulnerable && predata.bindEff * (predata.bind ? predata.bind : predata.dmg) > 0.01 && Enemy.boundLevel < Enemy.Enemy.maxhp * 0.4) {
						amt += Enemy.Enemy.maxhp * 0.2;
					}*/
					// Determine binding type based on damage and spell -- best guess
					if (amt > 0 && !predata.bindType) {
						if (KDDamageBinds[predata.type]) predata.bindType = KDDamageBinds[predata.type];
						else if (Spell) {
							if (Spell.tags) {
								for (let t of Spell.tags) {
									if (KDSpellTagBinds[t]) {
										predata.bindType = KDSpellTagBinds[t];
										break;
									}
								}
							}
						}
					}
					// Do the deed
					KDTieUpEnemy(Enemy, amt, predata.bindType, predata.dmg, predata.faction == "Player", Delay);

					if (!NoMsg && predata.faction == "Player") {
						KinkyDungeonSendTextMessage(4, TextGet(effmult == 1 ? "KDIsBound" : (effmult > 1 ? "KDDisabledBonus" : "KDUnflinchingPenalty"))
							.replace("AMNT", "" + Math.round(10 * amt))
							.replace("TargetEnemy", TextGet("Name" + Enemy.Enemy.name)), "lightgreen", 2, undefined, undefined, undefined, "Combat");
					}
                    if(KDEnemyHasFlag(Enemy, "flying")){
                        resistStun = 1;
                    }

				}
                
		if (!predata.blocked)
			if (!Enemy.shield || predata.ignoreshield || predata.shield_distract)
				if ((predata.dmg || predata.distract) && Enemy.Enemy.bound && (resistDamage < 2)
					&& (predata.distract || KinkyDungeonDistractDamageTypes.includes(predata.type) || (KDLoosePersonalities.includes(Enemy.personality) && KinkyDungeonMasochistDamageTypes.includes(predata.type)))) {
					if (!Enemy.distraction) Enemy.distraction = 0;
					if (Enemy.distraction < Enemy.Enemy.maxhp) {
						effect = true;

						let efficiency = predata.distractEff ? predata.distractEff : 1.0;
						efficiency *= 1; // Always multiply by 2
						if (resistDamage == 1) {
							efficiency *= 0.75;
						}
						if (resistDamage == 2) {
							efficiency *= 0.5;
						}
						if (predata.vulnerable || Enemy.boundLevel > 0) {
							efficiency *= 1 + Math.min(1, predata.vulnerable ? 1 : Enemy.boundLevel / Enemy.Enemy.maxhp);
						}

						if (!(Enemy.distraction > 0)) {
							let Thought = "Embarrassed";
							if (KDStrictPersonalities.includes(Enemy.personality)) Thought = "Angry";
							else if (KDLoosePersonalities.includes(Enemy.personality)) Thought = "Play";
							KDAddThought(Enemy.id, Thought, 5, 2);
						}

						KDAddDistraction(Enemy, efficiency * (predata.distract ? predata.distract : predata.dmg), predata.distractMult != undefined ? predata.distractMult : 0.25);
						if (predata.vulnerable && efficiency * (predata.distract ? predata.distract : predata.dmg) > 0.01 && Enemy.distraction < Enemy.Enemy.maxhp * 0.5) {
							KDAddDistraction(Enemy, Enemy.Enemy.maxhp*0.35, 0.1);
						}
						if (Enemy.distraction >= Enemy.Enemy.maxhp && (predata.tease || KDIsTeasing(Damage)) && !predata.flags?.includes("BurningDamage")) {
							let damageData = KDGetEnemyReleaseDamage(Enemy);
							KinkyDungeonDamageEnemy(Enemy, damageData, true, true, undefined, undefined, undefined, 0.99, undefined, true, false);
							if (KinkyDungeonVisionGet(Enemy.x, Enemy.y)) {
								KinkyDungeonSendTextMessage(1, TextGet("KDEnemyLetGo")
									.replace("ENMY", TextGet("Name" + Enemy.Enemy.name))
									.replace("AMNT", "" + Math.round(10*damageData.damage)),
								"#e7cf1a", 2, undefined, undefined, undefined, "Combat");
							}
							Enemy.distraction = 0;
							Enemy.desire = 0;
							KDAddThought(Enemy.id, "Embarrassed", 10, 5);
						}
					}
				}

		if (!forceKill && (KDBoundEffects(Enemy) > 3 || KDIsInParty(Enemy)) && (Enemy.hp <= 0 || (KDBoundEffects(Enemy) > 3 && Enemy.hp <= Enemy.Enemy.maxhp * 0.1))) {
			if (!(Enemy.boundLevel > 0) && KDIsInParty(Enemy)) {
				KDTieUpEnemy(Enemy, 2*Enemy.Enemy.maxhp, "Null");
			}
			if ((predata.faction == "Player" || KinkyDungeonVisionGet(Enemy.x, Enemy.y) > 0) && Enemy.hp > 0.001) {
				let Thought = "GiveUp";
				if (KDStrictPersonalities.includes(Enemy.personality)) Thought = "Fire";
				else if (KDLoosePersonalities.includes(Enemy.personality)) Thought = "Play";
				if (!(Enemy.boundLevel > 0)) KDAddThought(Enemy.id, Thought, 6, 3);
				KDAddThought(Enemy.id, Thought, 6, 3);
				KDDamageQueue.push({floater: TextGet("KDHelpless"), Entity: Enemy, Color: "#ff5555", Time: 2, Delay: Delay});
			}
			if (killed)
				Enemy.hp = 0.001;
		}

		if (!predata.blocked)
			if (!Enemy.shield || predata.ignoreshield || predata.shield_slow)
				if ((resistSlow < 2 && resistDamage < 2) && (KinkyDungeonSlowDamageTypes.includes(predata.type))) { // Being immune to the damage stops the stun as well
					effect = true;
					if (!Enemy.slow) KDAddThought(Enemy.id, "Annoyed", 5, 1);
					if (!Enemy.slow) Enemy.slow = 0;
					let origStun = Enemy.slow;
					if (resistSlow == 1 || resistDamage == 1)
						Enemy.slow = Math.max(Enemy.slow, Math.min(Math.floor(time/2), time-1)); // Enemies with stun resistance have stuns reduced to 1/2, and anything that stuns them for one turn doesn't affect them
					else Enemy.slow = Math.max(Enemy.slow, time);


					if (Enemy.slow > origStun) {
						KinkyDungeonSendEvent("slow", predata);
					}

				}

		if (predata.vulnConsumed && !noVuln) {
			KinkyDungeonSetEnemyFlag(Enemy, "removeVuln", 1);
			//Enemy.vulnerable = 0;
		}
		if (!predata.blocked)
			if (!Enemy.shield || predata.ignoreshield || predata.shield_vuln)
				if ((resistDamage < 2) && (KinkyDungeonVulnerableDamageTypes.includes(predata.type))) { // Being immune to the damage stops the stun as well
					effect = true;
					if (!Enemy.vulnerable) KDAddThought(Enemy.id, "Status", 4, 1);
					if (!Enemy.vulnerable && predata.dmg > 0) Enemy.vulnerable = 0;
					let origStun = Enemy.vulnerable;
					if (resistDamage == 1)
						Enemy.vulnerable = Math.max(Enemy.vulnerable, Math.min(Math.floor(time/2), time-1)); // Enemies with stun resistance have stuns reduced to 1/2, and anything that stuns them for one turn doesn't affect them
					else Enemy.vulnerable = Math.max(Enemy.vulnerable, time);


					if (Enemy.vulnerable > origStun) {
						KinkyDungeonSendEvent("vulnerable", predata);
					}
				}
	} else {
		predata.vulnConsumed = false;
	}

	if (KDBoundEffects(Enemy) > 3) {
		if (!Enemy.vulnerable && predata.dmg > 0) Enemy.vulnerable = 0;
		Enemy.vulnerable = Math.max(Enemy.vulnerable, 1);
	}

	predata.aggro = (Enemy.lifetime > 9000 || !Enemy.maxlifetime) && predata.type != "heal" && predata.type != "inert" && (!Spell || !Spell.allySpell) && (!bullet || !bullet.spell || !bullet.spell.allySpell);

	KinkyDungeonSendEvent("afterDamageEnemy", predata);

	let atkname = (Spell) ? TextGet("KinkyDungeonSpell" + Spell.name) : TextGet("KinkyDungeonBasicAttack");
	let damageName = TextGet("KinkyDungeonDamageType" + predata.type);
	if (!NoMsg && !Spell) atkname = TextGet("KinkyDungeonBasicDamage");

	if (Enemy.hp <= 0) {
		KinkyDungeonKilledEnemy = Enemy;
	}
	let mod = "";
	if (resistDamage == 1) mod = "Weak";
	if (resistDamage == 2) mod = "Immune";
	if (resistDamage == -1) mod = "Strong";
	if (resistDamage == -2) mod = "VeryStrong";
	if (Damage && !mod && spellResist > 0 && !KinkyDungeonMeleeDamageTypes.includes(predata.type)) mod = "SpellResist";

	if (predata.faction == "Player" || predata.faction == "Rage") {
		if (!Enemy.playerdmg) Enemy.playerdmg = 0.01;
		Enemy.playerdmg += predata.dmgDealt;
	}

	if (!NoMsg && (!predata.blocked) && (predata.dmgDealt > 0 || !Spell || effect) && (!Damage || Damage.damage > 0)) {KinkyDungeonSendActionMessage(4 + predata.dmgDealt * 0.01, (Damage && predata.dmgDealt > 0) ?
		TextGet((Ranged) ? "PlayerRanged" + mod : "PlayerAttack" + mod).replace("TargetEnemy", TextGet("Name" + Enemy.Enemy.name)).replace("AttackName", atkname).replace("DamageDealt", "" + Math.round(predata.dmgDealt * 10)).replace("DamageType", ("" + damageName).toLowerCase())
		: TextGet("PlayerMiss" + ((Damage && !miss) ? (predata.shieldBlocked ? "Shield" : "Armor") : "")).replace("TargetEnemy", TextGet("Name" + Enemy.Enemy.name)),
			(Damage && (predata.dmg > 0 || effect)) ? "orange" : "#ff5277", 2, undefined, undefined, Enemy, "Combat");
	}

	if (Enemy && Enemy.Enemy && KDAmbushAI(Enemy) && Spell) {
		Enemy.ambushtrigger = true;
	}


	if (!Damage && predata.type != "inert" && predata.dmgDealt <= 0) {
		KDAddThought(Enemy.id, "Laugh", 4, 1);

		if (Enemy.playerdmg || KinkyDungeonVisionGet(Enemy.x, Enemy.y)) {
			KDDamageQueue.push({floater: TextGet("KDMissed"), Entity: Enemy, Color: "#ff5555", Time: 0.5, Delay: Delay});
			if (KDRandom() < actionDialogueChanceIntense)
				KinkyDungeonSendDialogue(Enemy, TextGet("KinkyDungeonRemindJail" + (KDGetEnemyPlayLine(Enemy) ? KDGetEnemyPlayLine(Enemy) : "") + "MissedMe").replace("EnemyName", TextGet("Name" + Enemy.Enemy.name)), KDGetColor(Enemy), 4, 5, false, true);
		}

		let vol = KDCanHearSound(KinkyDungeonPlayerEntity, Math.max(KDMINDAMAGENOISE, KDDMGSOUNDMULT * Math.max(predata.dmg, predata.dmgDealt)), Enemy.x, Enemy.y, 1.0);
		if (vol > 0) {
			if (KDToggles.Sound && Enemy.Enemy.cueSfx && Enemy.Enemy.cueSfx.Miss) {
				KinkyDungeonPlaySound(KinkyDungeonRootDirectory + "Audio/" + Enemy.Enemy.cueSfx.Miss + ".ogg", undefined, Math.min(1, vol));
			}
		}
	} else if (Damage && Damage.damage > 0 && predata.type != "inert" && predata.dmgDealt <= 0 && !miss) {
		if (KinkyDungeonVisionGet(Enemy.x, Enemy.y) > 0) {
			KDAddThought(Enemy.id, "Laugh", 5, 3);
			if (KDRandom() < actionDialogueChanceIntense)
				KinkyDungeonSendDialogue(Enemy, TextGet("KinkyDungeonRemindJail" + (KDGetEnemyPlayLine(Enemy) ? KDGetEnemyPlayLine(Enemy) : "") + "BlockedMe").replace("EnemyName", TextGet("Name" + Enemy.Enemy.name)), KDGetColor(Enemy), 4, 5, false, true);
			KDDamageQueue.push({floater: TextGet("KDBlocked"), Entity: Enemy, Color: "#ff5555", Time: 0.5, Delay: Delay});
		}

		let type = KinkyDungeonMeleeDamageTypes.includes(predata.type) ? "Block" : "Resist";
		let vol = KDCanHearSound(KinkyDungeonPlayerEntity, Math.max(KDMINDAMAGENOISE, KDDMGSOUNDMULT * Math.max(predata.dmg, predata.dmgDealt)), Enemy.x, Enemy.y, 1.0);
		if (vol > 0) {
			if (KDToggles.Sound && Enemy.Enemy.cueSfx && Enemy.Enemy.cueSfx[type]) {
				KinkyDungeonPlaySound(KinkyDungeonRootDirectory + "Audio/" + Enemy.Enemy.cueSfx[type] + ".ogg", undefined, Math.min(1, vol));
			}
		}
		//KinkyDungeonSendFloater({x: Enemy.x - 0.5 + Math.random(), y: Enemy.y - 0.5 + Math.random()}, TextGet("KDBlocked"), "white", 2);
	} else if (predata.dmgDealt > 0 && KDToggles.Sound && Enemy.Enemy.cueSfx && Enemy.Enemy.cueSfx.Damage) {
		let vol = KDCanHearSound(KinkyDungeonPlayerEntity, Math.max(KDMINDAMAGENOISE, KDDMGSOUNDMULT * Math.max(predata.dmg, predata.dmgDealt)), Enemy.x, Enemy.y, 1.0);
		if (vol > 0) {
			KinkyDungeonPlaySound(KinkyDungeonRootDirectory + "Audio/" + Enemy.Enemy.cueSfx.Damage + ".ogg", undefined, Math.min(1, vol));
		}
		if (KDRandom() < actionDialogueChance)
			KinkyDungeonSendDialogue(Enemy, TextGet("KinkyDungeonRemindJail" + (KDGetEnemyPlayLine(Enemy) ? KDGetEnemyPlayLine(Enemy) : "") + "Hit").replace("EnemyName", TextGet("Name" + Enemy.Enemy.name)), KDGetColor(Enemy), 4, 5);
	}

	if (predata.aggro)
		KinkyDungeonAggro(Enemy, Spell, attacker, predata.faction);

	if (predata.dmg > 0) {
		KinkyDungeonTickBuffTag(Enemy, "takeDamage", 1);
		KinkyDungeonSetEnemyFlag(Enemy, "wander", 0);
		KinkyDungeonSetEnemyFlag(Enemy, "blocked", 0);
		KinkyDungeonSetEnemyFlag(Enemy, "genpath", 0);
		KinkyDungeonSetEnemyFlag(Enemy, "failpath", 0);
	}

	return predata.dmg;
}