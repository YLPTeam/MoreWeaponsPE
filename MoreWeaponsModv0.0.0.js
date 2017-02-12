//More Weapons Mod by Saccy
//Original mod post can be found at: https://github.com/YLPTeam/MoreWeaponsPE.git
//Do not redistribute this mod without consent of at least one of the creators of this mod or members of the YLPTeam including but not limited to Saccy and CoolBoyT.

//Copyright: ©YLPTeam
//Mod was first created on 12th February 2017 by Saccy

//This mod is for public use but not for public redistribution unless permission was granted to a person or organisation.

//All people are granted to review this mod to others via websites e.g.YouTube and/or physically displaying it but any sharing of the mod must always lead to the original Github repository associated with this mod or to the Thread displayed on Minecraft Forums at: 

const MOD_VERSION = "0.0.1";

var newWeapons = [];

function newItem(id, texture, name, stacksize, mxDmg, isTool) {
	ModPE.setItem(id, texture, 0, name, stacksize);
	if (isTool != 'undefined') {
		Item.setHandEquipped(id, isTool);
	}
	if (mxDmg != 'undefined') {
		Item.setMaxDamage(id, mxDmg);
	}
}

function newMeleeWeapon(id, texture, name, mxDmg, dmgDealt) {
	newItem(id, texture, name, 1, mxDmg, true);
	this.id = id;
	this.name = name;
	this.durability = mxDmg;
	this.damage = dmgDealt;
	newWeapons.push(this);
}

