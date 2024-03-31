
if (TranslationLanguage == "JP") {
	//JP

	//Restraint
	//KinkyDungeonAddRestraintText("BalloonString", "風船の紐", "風船を引っ張るための紐", "紐は風船のネックに括り付けられている\n風船の中からは、どうにもできない。")
	KinkyDungeonAddRestraintText("Balloon", "風船", "むぎゅむぎゅな大きいゴム風船。", "風船の結び目はきつく、中からはどうしようもできない。\nおそらく尖ったもので割れるかも？")
	KinkyDungeonAddRestraintText("MagicSoapBubble", "魔法のシャボン玉", "マナを感じるふにゅふにゅの魔法のシャボン玉、割れにくい！\n泡に包まれた状態では、まともに動けなくなる。", "石鹸魔法で作られたシャボン玉。\n辺りが虹色に見える...\nおそらく魔法な物があれば割ることができるだろう...")
	KinkyDungeonAddRestraintText("SoapBubble", "シャボン玉", "ふにゅふにゅのシャボン玉\n泡に包まれた状態では、まともに動けなくなる。", "石鹸魔法で作られたシャボン玉。\n辺りが虹色に見える...\nおそらく鋭利な物があれば割ることができるだろう...")
	KinkyDungeonAddRestraintText("SquishBubble", "ぐにゅぐにゅの圧搾された泡", "大小さまざまな泡が集まってできた泡", "バブルタレットから溢れた液体が泡立ったもの\n泡が中でいっぱいに広がっていて、全く動くことができない\nどうにかして、泡を減らすことができれば...")
	KinkyDungeonAddRestraintText("BalloonStuffingMachine", "バルーンラッピングマシーン", "人を風船に入れてしまう機械", "人を無理やり中に入れようと吸引してくる。\n蓋は自動でロックがかかる。\n蓋を取ると、風船のネックを自動で結び、結果的に風船の中に閉じ込められてしまう")
	//内側の風船が割ることができそうだが、機械の中の圧力が低く、風船の中にいたほうが脱出しやすそうだ。アルケミストの力作
	KinkyDungeonAddRestraintText("BubbleKronos1","Tiny bubble (feet)","Tiny bubble on feet.","They are firmly attached to the ankles, but could be popped or removed.")
	KinkyDungeonAddRestraintText("BubbleKronos2Boots","Tiny bubble (shoulder)","Tiny bubbles on the shoulder.","Will not affect anything for now...")
	KinkyDungeonAddRestraintText("BubbleKronos2Shoulder","Small bubble on shoulder","","Nothing will affect them for now... Maybe...")
	KinkyDungeonAddRestraintText("BubbleKronos3Boots","Bubbles stuck to feet","Hard to move my legs!","A lot of little bubbles wrapped around ankle...")
	KinkyDungeonAddRestraintText("BubbleKronos3Shoulder","Slightly larger bubble 2 (shoulder)","Small bubble on shoulder","Nothing will affect them for now... Maybe...")
	KinkyDungeonAddRestraintText("BubbleKronos4HandFront","Clinging bubbles (hands)","Can't use hands!","Combined with the bubbles on the shoulders, both hands and arms are covered with bubbles and the arms become useless")
	KinkyDungeonAddRestraintText("BubbleKronos4Crotch","Clinging bubbles (...)","Clinging to the crotch","Every time you walk, the foam in the center rubs against...")
	KinkyDungeonAddRestraintText("BubbleKronos4Boots","Clinging bubbles (feet)","Almost stuck to the ground","Half of my foot is covered with so many bubbles that I can hardly move it!")
	KinkyDungeonAddRestraintText("BubbleKronos5","Too many bubbles","Too late...","All the bubbles on my body have combined, and now my face is the only part of my body that's free.")
	KinkyDungeonAddRestraintText("BubbleGag","泡(口)","弾力性のある泡","大きな泡が口にあり、吐き出せない...")

	//Enemy
	addTextKey("NameBubbleTurret", "バブルタレット")
	addTextKey("AttackBubbleTurret", "バブルタレットは近距離用スタンガンを放った！ (DamageTaken)")
	addTextKey("KillBubbleTurret", "タレットから排出される圧縮空気により、辺りが高密度のシャボン玉の霧に覆われます！")

	addTextKey("NameBalloonStuffingMachine", "バルーンラッピングマシーン")
	addTextKey("AttackBalloonStuffingMachine", "あなたを吸い込もうとします！ (DamageTaken)")
	addTextKey("AttackBalloonStuffingMachineBind", "その機械はあなたを吸い込んだ後、あなたは風船の中にいることに気づき、蓋が閉まった！ (+RestraintAdded)")
	addTextKey("KillBalloonStuffingMachine", "バルーンラッピングマシーンのガラスが割れて、動作しなくなった。")

	//PlayerEffect
	addTextKey("SoapBubbleEngulf", "バブルタレットから放たれたシャボン玉があなたに当たり、あなたはシャボン玉に飲み込まれた！")

	addTextKey("TextBubbling", "シャボン玉の霧に覆われ、大小たくさんの泡に揉まれる押され、ぐにゅぐにゅの圧搾された泡に閉じ込められてしまった！")

	addTextKey("PullOuFromBalloonStuffingMachine", "風船のネックが自動的に結ばれ、ゴムのような音を立てながら風船が浮き上がる。")

	//failsfx(bubble) addon
	//KinkyDungeonStruggleCutImpossibleBubble("きつすぎる！なんとか外から力を与えないと...")

	addTextKey("BubbleMoving","風に揺られ、自然に動いた...")

	addTextKey("StruggleKronosBubble","泡を取り除こうとしたが、泡が広がった...")

	addTextKey("SpreadOtherKronosBubble","激しくもがいたため、泡が他の部位で泡立ってしまった！")

	addTextKey("SpreadKronosBubble4","無理にもがいたせいで、体全体に泡が広がった！")


	addTextKey("TickKronosBubble","Bubbles swelled, bubbles stuck together.")

	addTextKey("BubbleRefrection","泡の中で泡を吹いたので、泡に押し込められる...")

	addTextKey("SelfBubble","自分自身を泡で包み込んだ！")

	//weapon
	addTextKey("KinkyDungeonInventoryItemBubbleKatana", "水包")
	addTextKey("KinkyDungeonInventoryItemBubbleKatanaDesc", "忍耐強く、そして少量の泡石鹸が大いに役立ちます...")
	addTextKey("KinkyDungeonInventoryItemBubbleKatanaDesc2", "Waiting 10 turns will make the blade deal more damage and trap enemies in a bubble.")

	addTextKey("KinkyDungeonInventoryItemBubbleMachineGun", "Bubble Machine Gun")
	addTextKey("KinkyDungeonInventoryItemBubbleMachineGunDesc", "Bratatatatata...")
	addTextKey("KinkyDungeonInventoryItemBubbleMachineGunDesc2", "Deals crush damage.\nCan be spun up to fire a volley of bubbles!\nFire the weapon and cause a spray of bubbles to jet towards your opponent.")

	addTextKey("KinkyDungeonInventoryItemIMBubbleMachineGun", "IMBubbleMachineGun")
	addTextKey("KinkyDungeonInventoryItemIMBubbleMachineGunDesc", "Warranty sticker is off...")
	addTextKey("KinkyDungeonInventoryItemIMBubbleMachineGunDesc2", "Bubble machine gun, but doesn't need reloading.\nSeems like it leaks ammo every time I shoot it...")
	addTextKey("JamImBubbleMachineGun","Bubbles overflowed from near the handle and the hand was covered in bubbles!")

	addTextKey("KinkyDungeonInventoryItemGagedBubbleWand", "Bubble Wand")
	addTextKey("KinkyDungeonInventoryItemGagedBubbleWandDesc", "Comically large bubble wand")
	addTextKey("KinkyDungeonInventoryItemGagedBubbleWandDesc2", "Mmmph~\nCannot blow bubbles, \nso move the wand and consume ancient energy and mana \nto create bubbles.\nAn oversized bubble wand with a hole that you could easily climb through\nif you wanted to bubble yourself, \nbut you wouldn't do that... right..?")

	addTextKey("KinkyDungeonInventoryItemNoGagedBubbleWand", "Bubble Wand")
	addTextKey("KinkyDungeonInventoryItemNoGagedBubbleWandDesc", "Comically large bubble wand")
	addTextKey("KinkyDungeonInventoryItemNoGagedBubbleWandDesc2", "Deals arcane damage. Melee attacks cost cost a lot of stamina,\nbut will trap enemies inside bubbles,\nit can also be used to blow a bubble forwards.\nAn oversized bubble wand with a hole that you could easily climb through\nif you wanted to bubble yourself, \nbut you wouldn't do that... right..?")

}
else {

	//EN
	//restrain
	KinkyDungeonAddRestraintText("Balloon", "Balloon", "A squishy and elastic big rubber balloon.", "It's tied from the outside, making struggling ineffectual without help.\nMaybe something sharp can pop it?")
	//KinkyDungeonAddRestraintText("BalloonString", "Baloon String", "String for pulling balloons", "The string is tied to the neck of the balloon.\nThere is nothing you can do from inside the balloon.")
	KinkyDungeonAddRestraintText("MagicSoapBubble", "Magic Soap Bubble", "A squishy soap bubble laced with magic, making it nearly unpoppable!", "It will very slow you down severely.\nThe dungeon has a rainbow tint from the inside of your bubble...\nIt can be popped with magical weapons, better get comfortable if you don't have any...")
	KinkyDungeonAddRestraintText("SoapBubble", "Soap Bubble", "A squishy soap bubble that is surprisingly sturdy...", "It will very slow you down severely.\nThe dungeon has a faint rainbow tint from the inside of your bubble...\nYou can probably pop it if you have something sharp...")
	KinkyDungeonAddRestraintText("SquishBubble", "Squish Bubble", "A double layered bubble that keeps you snugly stuck in bubble trouble~", "The added lift from the interior bubbles keep you suspended midair!\nThere is barely any room to move, you can try cutting it, if you're careful...")
	KinkyDungeonAddRestraintText("BalloonStuffingMachine", "Balloon Stuffing Machine", "A machine that puts people into balloons.", "A balloon blowing machine that sucked you inside.\nThe balloon automatically ties itself when you are removed from inside it, and there's no way out on your own...")
	KinkyDungeonAddRestraintText("BubbleKronos1","Tiny bubble (feet)","Tiny bubble on feet.","They are firmly attached to the ankles, but could be popped or removed.")
	KinkyDungeonAddRestraintText("BubbleKronos2Boots","Slightly larger bubble (feet)","Tiny bubbles on the feet.","Will not affect anything for now...")
	KinkyDungeonAddRestraintText("BubbleKronos2Shoulder","Small bubble (shoulder)","Tiny bubbles on the shoulder.","Nothing will affect them for now... Maybe...")
	KinkyDungeonAddRestraintText("BubbleKronos3Boots","Bubbles stuck to feet","Hard to move my legs!","A lot of little bubbles wrapped around ankle...")
	KinkyDungeonAddRestraintText("BubbleKronos3Shoulder","Slightly larger bubble (shoulder)","Small bubble on shoulder","Nothing will affect them for now... Maybe...")
	KinkyDungeonAddRestraintText("BubbleKronos4HandFront","Clinging bubbles (hands)","Can't use hands!","Combined with the bubbles on the shoulders, both hands and arms are covered with bubbles and the arms become useless")
	KinkyDungeonAddRestraintText("BubbleKronos4HandFrontNonForce","Clinging bubbles (hands)","Can't use hands!","Combined with the bubbles on the shoulders, both hands and arms are covered with bubbles and the arms become useless")
	KinkyDungeonAddRestraintText("BubbleKronos4Crotch","Clinging bubbles (...)","Clinging to the crotch","Every time you walk, the foam in the center rubs against...")
	KinkyDungeonAddRestraintText("BubbleKronos4Boots","Clinging bubbles (feet)","Almost stuck to the ground","Half of foot is covered with so many bubbles that I can hardly move it!")
	KinkyDungeonAddRestraintText("BubbleKronos5","Many bubbles","Too late...","All the bubbles on body have combined, and now face is the only part of my body that's free.")
	KinkyDungeonAddRestraintText("BubbleGag","Bubble Gag","bubbles with elasticity","Big bubbles in the mouth and no matter how hard tried, can't spit them out...")

	//Enemy
	addTextKey("NameBubbleTurret", "Bubble Turret")
	addTextKey("AttackBubbleTurret", "The turret defends itself with a close-range electrocution attack! (DamageTaken)")
	addTextKey("KillBubbleTurret", "The soap bubbles in the turret rush outwards from the compressed air escaping the turret, covering the area in a dense, bubbly fog!")

	addTextKey("NameBalloonStuffingMachine", "Balloon Stuffing Machine")
	addTextKey("AttackBalloonStuffingMachine", "The machine tries to suck you into itself! (DamageTaken)")
	addTextKey("AttackBalloonStuffingMachineBind", "You tumble into the machine and the lid closes and locks with a loud click! You feel air begin to rush into the balloon... (+RestraintAdded)")
	addTextKey("KillBalloonStuffingMachine", "The balloon stuffing machine's glass shatters, rendering it unusable.")

	addTextKey("NameMaidforceBMG", "Maidforce Bubbly Gun")
	addTextKey("AttackMaidforceBMG", "The maid bonks you with her weapon! (DamageTaken)")
	addTextKey("AttackMaidforceBMGBind", "The maid bonks you with her weapon! (DamageTaken)")
	addTextKey("KillMaidforceBMG", "The maid drops her weapon and runs.")
	addTextKey("KinkyDungeonSpellMiniGun", "Bubble Bullet")

	addTextKey("NameWitchBubble", "Bubble Witch")
	addTextKey("AttackWitchBubbleBind", "The witch restrains you! (+RestraintAdded)")
	addTextKey("AttackWitchBubbleLock", "The witch dangles a lock in front of you before putting it on! (DamageTaken)")
	addTextKey("KillWitchBubble", "The bubble witch vanishes into a pile of ash.")

	addTextKey("NameBubblerZombie","Bubbler Zombie")
	addTextKey("KillBubblerZombie","The bubbler zombie yells and falls cinematically.")
	addTextKey("AttackBubblerZombieBind","The bubbler zombie uses a traditional binding technique (+RestraintAdded)")
	//addTextKey("AttacBubblerZombieStun","The bubbler zombie strikes you with her wooden sword! (+STUN)")
	addTextKey("AttackBubblerZombie","The bubbler zombie runs its fingers along your body! (DamageTaken)")
	addTextKey("AttackBubblerZombieLock", "The bubbler zombie fights using the way of Sword and Lock. (DamageTaken)")


	//PlayerEffect

	//bubble hit (from bubble turret)
	addTextKey("SoapBubbleEngulf", "A massive soap bubble hugs your body before you pass through, finding yourself trapped inside the bubble!")

	//when bubble turret defeat and plyaer hit bubble effect
	addTextKey("TextBubbling", "The bubbles jetting from the turret begin to cover you and squeeze, lifting you off the ground as they merge into your own personal bubble!")

	//when enemy pull you from balloon BalloonStuffingMachine
	addTextKey("PullOutFromBalloonStuffingMachine", "The neck of the balloon is automatically tied, making rubbery squeaks as it's lifted out of the machine.")
	//addTextKey("SoapBubble", "")

	addTextKey("HitBubbleBullet","The bubble bullets stick to your body and begin to swell...")
	addTextKey("completeHitBubbleBullet","The small bubbles coating your body completely immobilize you!")
	//failsfx(bubble) addon
	//addTextKey("KinkyDungeonStruggleCutImpossibleBubble","It’s Too tight!If we don't give some power from the outside somehow...")

	addTextKey("BubbleMoving","Swaying in the wind, it moved naturally.")

	addTextKey("StruggleKronosBubble","Attempted to remove the bubbles, but they became foamy and the bubbles spread!")

	addTextKey("SpreadOtherKronosBubble","Due to the violent struggle, it bubbled up in other parts of the body!")

	addTextKey("SpreadKronosBubble4","The bubbles spread over my entire body due to my forced struggles!")



	//addTextKey("TickKronosBubble","Bubbles swelled, bubbles stuck together.")

	addTextKey("BubbleRefrection","Because of blowing bubbles within bubbles, it turned into bubble")

	addTextKey("SelfBubble","You surrounded yorself in bubble")

	//weapon
	addTextKey("KinkyDungeonInventoryItemBubbleKatana", "Bubble katana")
	addTextKey("KinkyDungeonInventoryItemBubbleKatanaDesc", "Patience, and a little bubble soap goes a long way...")
	addTextKey("KinkyDungeonInventoryItemBubbleKatanaDesc2", "Waiting 10 turns will make the blade deal more damage and trap enemies in a bubble.")

	addTextKey("KinkyDungeonInventoryItemBubbleMachineGun", "Bubble Machine Gun")
	addTextKey("KinkyDungeonInventoryItemBubbleMachineGunDesc", "Bratatatatata...")
	addTextKey("KinkyDungeonInventoryItemBubbleMachineGunDesc2", "Deals crush damage.\nCan be spun up to fire a volley of bubbles!\nFire the weapon and cause a spray of bubbles to jet towards your opponent.")
	addTextKey("KinkyDungeonSpecialBubbleMachineGun", "40 charge to fire bubble bullets that trap in bubble a target.")
	addTextKey("KinkyDungeonSpellCastPlayerBubbleMinigun", "40 charge to fire bubble bullets that trap in bubble a target.")


	addTextKey("KinkyDungeonInventoryItemIMBubbleMachineGun", "Illegal modification Bubble Machine Gun")
	addTextKey("KinkyDungeonInventoryItemIMBubbleMachineGunDesc", "Warranty sticker is off...")
	addTextKey("KinkyDungeonInventoryItemIMBubbleMachineGunDesc2", "Bubble machine gun, but doesn't need reloading.\nSeems like it leaks ammo every time I shoot it...")
	addTextKey("JamIMBubbleMachineGun","Bubbles overflowed from near the handle and the hand was covered in bubbles!")
	addTextKey("KinkyDungeonSpecialIMBubbleMachineGun", "40 charge to fire bubble bullets that trap in bubble a target.")
	addTextKey("KinkyDungeonSpellCastPlayerBubbleMinigun", "40 charge to fire bubble bullets that trap in bubble a target.")


	/*
	addTextKey("KinkyDungeonInventoryItemGagedBubbleWand.", "Bubble　Wand")
	addTextKey("KinkyDungeonInventoryItemGagedBubbleWandDesc.", "Comically large bubble wand")
	addTextKey("KinkyDungeonInventoryItemGagedBubbleWandDesc2.", "Mmmph~\nCannot blow bubbles, \nso move the wand and consume ancient energy and mana \nto create bubbles.\nAn oversized bubble wand with a hole that you could easily climb through\nif you wanted to bubble yourself, \nbut you wouldn't do that... right..?")
	*/
	addTextKey("KinkyDungeonSpellCastPlayerBlowBubble", "Using a wand, created a bubble.")

	addTextKey("KinkyDungeonInventoryItemBubbleWand,", "Bubble Wand")
	addTextKey("KinkyDungeonInventoryItemBubbleWandDesc", "Comically large bubble wand\nDeals arcane damage\nIt can also be used to blow a bubble forwards.\n(need 1p 20mana)\nIf you are gaged, using arms\n(need 15p 20mana)")
	addTextKey("KinkyDungeonInventoryItemBubbleWandDesc2", "Melee attacks cost cost a lot of stamina,\nbut will trap enemies inside bubbles,\nAn oversized bubble wand with a hole that you could easily climb through\nif you wanted to bubble yourself, \nbut you wouldn't do that... right..?")
	addTextKey("KinkyDungeonSpellCastPlayerBubbleWand", "Using a wand, created a bubble.")
	//dmg
	addTextKey("KinkyDungeonDamageTypesoap", "Soap")

	//spellcast
}
