/*
Project Hard+
by: MICAHMINER

Version: 1.0 Dev
(v.1) Script Project Name: a-202_ph+

Creator: MICAHMINER
Expansion Packs: Camping Tools (12/1/15 Expected Release)

Adds: New game mechanics; Hard to get wood, breaking Tall Grass & Ferns gives you Fiberous Root, etc.

 © Copyright 2015 Project ENHANCEMENT+
 © Copyright 2015 MICAHMINER
 © http://projectenhancementplus.weebly.com

*/

/*Items*/

ModPE.setItem(700, "bark-php", 0, "Bark");

ModPE.setFoodItem(701, "fiberousroot", 0, 3, "Fiberous Root", 16);

ModPE.setFoodItem(702, "rootstring", 0, 5, "Root Rope", 1);
Item.setHandEquipped(702,1);
Item.setMaxDamage(702, 8);

ModPE.setItem(710, "spear-wood", 0, "Wooden Spear", 1);
ModPE.setItem(711, "spear-stone", 0, "Stone Spear", 1);
ModPE.setItem(712, "spear-iron", 0, "Iron Spear", 1);
ModPE.setItem(713, "spear-gold", 0, "Gold Spear", 1);
ModPE.setItem(714, "spear-diamond", 0, "Diamond Spear", 1);

Item.setHandEquipped(710, 1);
Item.setHandEquipped(711, 1);
Item.setHandEquipped(712, 1);
 
Item.setHandEquipped(713, 1);
 
Item.setHandEquipped(714, 1);

Item.setCategory(710, ItemCategory.TOOL, 0); 
Item.setCategory(711, ItemCategory.TOOL, 0); 
Item.setCategory(712, ItemCategory.TOOL, 0); 
Item.setCategory(713, ItemCategory.TOOL, 0); 
Item.setCategory(714, ItemCategory.TOOL, 0);

Item.setMaxDamage(710, 30); 
Item.setMaxDamage(711, 66); 
Item.setMaxDamage(712, 125); 
Item.setMaxDamage(713, 16); 
Item.setMaxDamage(714, 781);

ModPE.setItem(1050, "spear-wood", 1, "Charred Wooden Spear", 1);
ModPE.setItem(1051, "spear-hotore", 0, "Glowing Stone Spear", 1);
ModPE.setItem(1052, "spear-hotmetal", 0, "Glowing Iron Spear", 1);
ModPE.setItem(1053, "spear-hotmetal", 0, "Glowing Gold Spear", 1);
ModPE.setItem(1054, "spear-hotore", 0, "Melting Carbon Spear", 1);
ModPE.setItem(1055, "spear-wood", 2, "Reinforced Wooden Spear", 1);
ModPE.setItem(1056, "spear-stone", 1, "Reinforced Stone Spear", 1);
ModPE.setItem(1057, "spear-iron", 1, "Reinforced Iron Spear", 1);
ModPE.setItem(1058, "spear-gold", 1, "Reinforced Gold Spear", 1);
ModPE.setItem(1059, "spear-diamond", 1, "Reinforced Diamond Spear", 1);

//Craft Recipes

Item.addShapedRecipe(710, 1, 0, ["fof ", " s ", " s "],  ["f", 288, 0, "s", 280, 0, "o", 5, 0]);
Item.addShapedRecipe(711, 1, 0, [ "fof ", " s ", " s "], ["f", 288, 0, "s", 280, 0, "o", 4, 0]);
Item.addShapedRecipe(712, 1, 0, [ "fof ", " s ", " s "], ["f", 288, 0, "s", 280, 0, "o", 265, 0]);
Item.addShapedRecipe(713, 1, 0, [ "fof ", " s ", " s "], ["f", 288, 0, "s", 280, 0, "o", 266, 0]);
Item.addShapedRecipe(714, 1, 0, [ "fof ", " s ", " s "], ["f", 288, 0, "s", 280, 0, "o", 264,0]);

/*Blocks*/

Block.defineBlock(225, "anvil-stone", [["stone", 0]],61,false,0);
Block.setDestroyTime(225, 1);
Block.setShape(225, 0, 0, 0, 1, 0.8, 1);


//Craft Recipes

/*New Level*/

function newLevel(){
clientMessage("© Project ENHANCEMENT+ (PE+)" + ChatColor.GREEN + " DEV-0.4 \n(Beta 0.1.1)");
clientMessage("By:" + ChatColor.BLUE + " MICAHMINER");

print("© Project ENHANCEMENT+ | projectenhancementplus.weebly.com");

}

/*New Mecahnics*/

//Use Item
function useItem(x, y, z, itemId, blockId, side){
//#Fiberous Root

if (blockId==31&&getTile(x-1,y-1,z)==2){
setTile(x,y-1,z,198)
setTile(x,y,z,0)
Level.dropItem(x,y,z,0,701,1);
}

if (blockId==31&&getTile(x-1,y-1,z)==243){
setTile(x,y-1,z,198)
setTile(x,y,z,0)
Level.dropItem(x,y,z,0,701,2);
}

if (itemId==702&&blockId==17){
setTile(x,y,z,5)
Level.dropItem(x,y,z,0,700,3);
toolUse(8, 702)
}

if (itemId==702&&blockId==162){
setTile(x,y,z,5)
Level.dropItem(x,y,z,0,700,3);
toolUse(8, 702)
}

//if(itemId==(spear)&&blockId==225&&getTile(x-1,y-1,z)==13&&getTile(x+1,y-1,z)==13&&getTile(x,y-1,z+1)==13&&getTile(x,y-1,z-1)==13&& getTile(x+1,y-1,z+1)==13&&getTile(x-1,y-1,z-1)==13&&getTile(x-1,y-1,z+1)==13&&getTile(x+1,y-1,z-1)==13&&getTile(x,y-1,z)==4){}

}


//Health Var.

function toolUse(maxDamage,id) {
var pcid=Player.getCarriedItemData();
if(pcid!==maxDamage){
Entity.setCarriedItem(getPlayerEnt(),id,1,pcid+1);
}else if(pcid==maxDamage) {
Entity.setCarriedItem(getPlayerEnt(),0,0,0);
}}

//Block Tweaks


//modTick

function modTick(){
if(Player.getCarriedItem()==271||Player.getCarriedItem()==275||Player.getCarriedItem()==286||Player.getCarriedItem()==258||Player.getCarriedItem()==279) {

Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 30*1, 19, false, true);

}

if(Player.getCarriedItem()==257||Player.getCarriedItem()==270||Player.getCarriedItem()==274||Player.getCarriedItem()==278||Player.getCarriedItem()==285) {

Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 30*1, 19, false, true);

}

if(Player.getCarriedItem()==256||Player.getCarriedItem()==269||Player.getCarriedItem()==273||Player.getCarriedItem()==277||Player.getCarriedItem()==284) {

Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 30*1, 19, false, true);

}

Entity.addEffect(getPlayerEnt(), MobEffect.digSlowdown, 30*20, 3, false, true);
Block.setDestroyTime(18, 0.0);
Block.setDestroyTime(161, 0.0);

}

//Attack Hook
function attackHook(a,v){

var dmgW = 7
var dmgS = 8
var dmgI = 9
var dmgG = 7
var dmgD = 10

if(getCarriedItem()==710){
toolUse(30, 710)
Entity.setHealth(v, Entity.getHealth(v) -dmgW);
if (Entity.getHealth(v) <= 0) {
Entity.setHealth(v, 1)
}}

if(getCarriedItem()==711){
toolUse(66, 711)
Entity.setHealth(v, Entity.getHealth(v) -dmgS);
if (Entity.getHealth(v) <= 0) {
Entity.setHealth(v, 1)
}}

if(getCarriedItem()==712){
toolUse(125, 712)
Entity.setHealth(v, Entity.getHealth(v) -dmgI);
if (Entity.getHealth(v) <= 0) {
Entity.setHealth(v, 1)
}}

if(getCarriedItem()==713){
toolUse(16, 713)
Entity.setHealth(v, Entity.getHealth(v) -dmgG);
if (Entity.getHealth(v) <= 0) {
Entity.setHealth(v, 1)
}}

if(getCarriedItem()==714){
toolUse(781, 714)
Entity.setHealth(v, Entity.getHealth(v) -dmgD);
if (Entity.getHealth(v) <= 0) {
Entity.setHealth(v, 1)
}}}

//Craft Recipes

Item.addCraftRecipe(280, 2, 0, [700, 2, 0]);

Item.addCraftRecipe(271, 1, 0, [700, 1, 0, 701, 1, 0, 280, 2, 0]);

Item.addCraftRecipe(702, 1, 0, [701, 3, 0]);

