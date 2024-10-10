/*
Gold Into Diamonds 2!
MICAHMINER is bringing one of his old mods back to life!
DO NOT COPY OR POST AND SAY THIS MOD IS YOURS!!!
-----
UPDATE NOTE: Gold Into Diamonds 2 v.3 -

FIXES:
NONE! :)

TWEAKS:
•Diamond Gerneration in Generators

ADDS:
Wand (Chargable)
Diamond Reactor
*/

var countdown = 1200;
var diamond = 0;
var gid2addonmod = 1;

function newLevel(){

clientMessage("Gold Into Diamonds " + ChatColor.YELLOW + "2 " + ChatColor.GREEN + "ACTIVE!");
diamond = 0
gid2addonmod =1
}

ModPE.setItem(371, "gold_nugget", 0, "Gold Nugget");

Item.addShapedRecipe(371, 9, 0, [
	"   ",
	" i ",
	"   "], [
	"i", 266, 0]);

Item.addShapedRecipe(266, 1, 0, [
	"nnn",
	"nnn",
	"nnn"], [
	"n", 371, 0]);
	
ModPE.setItem(511, "blaze_powder", 0, "Gold Dust");

Item.addShapedRecipe(511, 3, 0, [
	"nnn",
	"rrr",
	"nnn"], [
	"n", 371, 0, "r", 331, 0]);

ModPE.setItem(510, "bucketgold", 0, "Bucket of " + ChatColor.YELLOW + "Gold Dust", 1);

Item.addShapedRecipe(510, 1, 0, [
	"ddd",
	"dbd",
	"ddd"], [
	"d", 511, 0, "b", 325, 0]);

Block.defineBlock(202, "Diamond Generator: " + ChatColor.GREEN + "Iron", [["iron_block", 0], ["piston_inner" , 0], ["iron_block" , 0], ["iron_block", 0], ["iron_block", 0], ["iron_block", 0]],61,false,0);
Block.setDestroyTime(202, 1.5);
Block.setShape(202, 0, 0, 0, 1, 0.8, 1);

function useItem(x, y, z, itemId, blockId, side){
if (itemId ==510&&blockId ==202){
Level.dropItem(x,y+1,z,0,264,3);
Level.dropItem(x,y+1,z,0,509,1);
Entity.setCarriedItem(getPlayerEnt(),325,1,0);
}

if (itemId ==510&&blockId ==203){
Level.dropItem(x,y+1,z,0,509,3);
Entity.setCarriedItem(getPlayerEnt(),325,1,0);
}

if (itemId ==510&&blockId ==204){
Level.dropItem(x,y+1,z,0,264,1);
Level.dropItem(x,y+1,z,0,509,3);
Entity.setCarriedItem(getPlayerEnt(),325,1,0);
}

if (itemId ==508&&blockId ==14){
wandUse(7, 508)
Level.dropItem(x,y+1,z,0,506,3);
setTile(x,y,z,0)
}

if (itemId ==508&&blockId==41){
wandUse(7, 508)
Level.dropItem(x,y+1,z,0,509,2);
Level.dropItem(x,y+1,z,0,506,3);
setTile(x,y,z,0);
}

if (itemId ==508&&blockId==202){
Entity.setCarriedItem(getPlayerEnt(),0,0,0);
Level.dropItem(x,y+3,z,0,509,3);
setTile(x,y,z,0)
Level.explode(x, y, z, 2)
Player.setHealth(Entity.getHealth(Player.getEntity())-4);
Entity.addEffect(getPlayerEnt(), MobEffect.confusion, 30*20, 0, false, true);
Entity.addEffect(getPlayerEnt(), MobEffect.poison, 30*20, 0, false, true);
ModPE.showTipMessage("THIS GENERATOR CONSUMES GOLD DUST!");
}

if (itemId==508&&blockId==203){
Level.dropItem(x,y+1,z,0,506,8);
Entity.addEffect(getPlayerEnt(), MobEffect.confusion, 30*20, 0, false, true);
ModPE.showTipMessage("THIS GENERATOR CONSUMES GOLD DUST!");
Entity.setCarriedItem(getPlayerEnt(),507,1,0);
}

if (itemId==508&&blockId==204){
Level.dropItem(x,y+1,z,0,506,8);
Level.dropItem(x,y+1,z,0,509,1);
Entity.addEffect(getPlayerEnt(), MobEffect.confusion, 30*20, 0, false, true);
Entity.addEffect(getPlayerEnt(), MobEffect.poison, 30*20, 0, false, true);
ModPE.showTipMessage("THIS GENERATOR CONSUMES GOLD DUST!");
Entity.setCarriedItem(getPlayerEnt(),0,0,0);
}

if (itemId ==505&&blockId ==202){
Level.dropItem(x,y+1,z,0,264,3);
Level.dropItem(x,y+1,z,0,509,1);
Entity.setCarriedItem(getPlayerEnt(),510,1,0);
}

if (itemId ==505&&blockId ==203){
Level.dropItem(x,y+1,z,0,509,3);
Entity.setCarriedItem(getPlayerEnt(),510,1,0);
}

if (itemId ==505&&blockId ==204){
Level.dropItem(x,y+1,z,0,264,1);
Level.dropItem(x,y+1,z,0,509,3);
Entity.setCarriedItem(getPlayerEnt(),510,1,0);
}

if (itemId ==505&&blockId ==205){
diamond = 1
ModPE.showTipMessage("Reactor Started!");
Entity.addEffect(getPlayerEnt(), MobEffect.confusion, 30*20, 0, false, true);
Entity.addEffect(getPlayerEnt(), MobEffect.poison, 15*20, 0, false, true);
Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, 30*20, 0, false, true);
Entity.setCarriedItem(getPlayerEnt(),325,1,0);
}

if (itemId ==505&&blockId ==206){
Entity.setCarriedItem(getPlayerEnt(),325,1,0);
setTile(x,y,z,180);
Entity.addEffect(getPlayerEnt(), MobEffect.confusion, 10*20, 0, false, true);
}

if (itemId ==508&&blockId ==180){
wandUse(7, 508);
setTile(x,y,z,181);
}

if (itemId ==504&&blockId ==181){
setTile(x,y,z,206);
Level.dropItem(x,y+1,z,0,57,1);
}

if (itemId ==504&&blockId ==202){
setTile(x,y,z,0);
Level.dropItem(x,y+1,z,0,202,1);
}

if (itemId ==504&&blockId ==203){
setTile(x,y,z,0);
Level.dropItem(x,y+1,z,0,203,1);
}

if (itemId ==504&&blockId ==204){
setTile(x,y,z,0);
Level.dropItem(x,y+1,z,0,204,1);
}} 

Block.defineBlock(203, "Diamond Generator: " + ChatColor.GREEN + "Wood", [["planks", 0], ["jukebox_top" , 0], ["log" , 0], ["log", 0], ["log", 0], ["log", 0]],5,false,0);
Block.setDestroyTime(203, 1.5);
Block.setShape(203, 0, 0, 0, 1, 0.5, 1);

Block.defineBlock(204, "Diamond Generator: " + ChatColor.GREEN + "Stone", [["stonebrick", 3], ["piston_inner" , 0], ["furnace" , 2], ["furnace", 2], ["furnace", 2], ["furnace", 2]],61,false,0);
Block.setDestroyTime(204, 1.5);
Block.setShape(204, 0, 0, 0, 1, 0.8, 1);

Item.addShapedRecipe(203, 1, 0, [
	"psp",
	"ltl",
	"lpl"], [
	"p", 5, 0, "s", 280, 0, "t", 50, 0, "l", 17, 0]);

Item.addShapedRecipe(204, 1, 0, [
	"ccc",
	"sgs",
	"bfb"], [
	"c", 4, 0, "s", 1, 0, "g", 203, 0, "f", 61, 0, "b", 98, 0]);

Item.addShapedRecipe(204, 1, 0, [
	"ccc",
	"sds",
	"bfb"], [
	"c", 4, 0, "s", 1, 0, "d", 264, 0, "f", 61, 0, "b", 98, 0]);

Item.addShapedRecipe(202, 1, 0, [
	"ccc",
	"igi",
	"ibi"], [
	"c", 4, 0, "i", 265, 0, "g", 204, 0, "b", 42, 0]);

Item.addShapedRecipe(202, 1, 0, [
	"ccc",
	"ioi",
	"ibi"], [
	"c", 4, 0, "i", 265, 0, "o", 49, 0, "b", 42, 0]);

ModPE.setItem(509, "diamondshard", 0, "Diamond Shard", 16);

ModPE.setItem(508, "wand", 0, "Transforming Wand", 1);

Item.addShapedRecipe(264, 1, 0, [
	"ss ",
	"ss ",
	"   "], [
	"s", 509, 0]);

Item.addShapedRecipe(508, 1, 0, [
	"  d",
	"bgn",
	"s  "], [
	"s", 280, 0, "b", 510, 0, "g", 202, 0, "n", 371, 0, "d", 509, 0]);

ModPE.setItem(507, "wand2", 0, "Transforming Wand " + ChatColor.RED + "UNCHARGED", 1);

Item.setMaxDamage(508, 7);

ModPE.setItem(506, "diamonddust", 0, "Diamond Dust");

Item.addShapedRecipe(508, 1, 0, [
	"ddd",
	"dwd",
	"ddd"], [
	"d", 511, 0, "w", 507, 0]);

Item.addShapedRecipe(509, 1, 0, [
	"ddd",
	"ddd",
	"ddd"], [
	"d", 506, 0]);

Block.defineBlock(205, "Diamond Reactor Block", [["cauldron_inner", 0]],57, false, 0);
Block.setDestroyTime(205, 2.5);

Item.addShapedRecipe(205, 1, 0, [
	"bsg",
	"sis",
	"wsc"], [
	"b", 42, 0, "s", 509, 0, "i", 247, 0, "g", 202, 0, "w", 508, 0, "c", 54, 0]);
	
ModPE.setItem(505, "bucket18gd", 0, "Bucket of " + ChatColor.YELLOW + "Gold Dust " + ChatColor.GREEN + "[16 Dust]", 1);

Item.addShapedRecipe(505, 1, 0, [
	"ddd",
	"dbd",
	"ddd"], [
	"d", 511, 0, "b", 510, 0]);

Block.defineBlock(206, "Casting Base", [["stone", 6], ["stonebrick" , 3], ["repeater_off" , 0], ["repeater_off", 0], ["repeater_off", 0], ["repeater_off", 0]],61,false,0);
Block.setDestroyTime(206, 1.9);
Block.setShape(206, 0, 0, 0, 1, 0.8, 1);

Block.defineBlock(180, "DA_Gold", [["stone", 6], ["still_lava" , 0], ["repeater_off" , 0], ["repeater_off", 0], ["repeater_off", 0], ["repeater_off", 0]],61,false,0);
Block.setDestroyTime(180, 1.9);
Block.setShape(180, 0, 0, 0, 1, 0.8, 1);

Block.defineBlock(181, "DA_dBlock", [["stone", 6], ["diamond_block" , 0], ["repeater_off" , 0], ["repeater_off", 0], ["repeater_off", 0], ["repeater_off", 0]],61,false,0);
Block.setDestroyTime(181, 1.9);
Block.setShape(181, 0, 0, 0, 1, 0.8, 1);

Item.addShapedRecipe(206, 1, 0, [
	"scs",
	"bgb",
	"bwb"], [
	"s", 1, 0, "c", 4, 0, "b", 98, 0, "g", 202, 0, "w", 507, 0]);

ModPE.setItem(504, "blockgrab", 0, "Block Grabbing Claw", 1);

Item.addShapedRecipe(504, 1, 0, [
	" i ",
	" gi",
	"w  "], [
	"w", 507, 0, "g", 203, 0, "i", 265, 0]);

function destroyBlock(x, y, z, side){
if (getTile(x,y,z) == 180){
setTile(x,y,z,206)
preventDefault()
Level.dropItem(x,y+1,z,0,511,16);
}

if (getTile(x,y,z) == 181){
setTile(x,y,z,206)
preventDefault()
Level.dropItem(x,y+1,z,0,511,16);
}}

function modTick(){
if(diamond==1){
countdown--;
var fws = Math.floor ((Math.random() * 1) + 1);
}
if(countdown==0&&fws==1){
diamond = 0
ModPE.showTipMessage("Your Reactor has teleported the Diamonds to you!");
addItemInventory(264, 8);
addItemInventory(509, 3);
addItemInventory(506, 8);
}}

function wandUse(maxDamage,id) {
var pcid=Player.getCarriedItemData();
if(pcid!==maxDamage){
Entity.setCarriedItem(getPlayerEnt(),id,1,pcid+1);
}else if(pcid==maxDamage) {
ModPE.showTipMessage("Your Wand needs charged!");
Entity.setCarriedItem(getPlayerEnt(),507,1,0);
}}