/*Mods:
Gold Into Diamonds 2,
MICAHMINER's Camping Mod,
and Super Staff Mod*/
/*Mod Pack put together by MICAHMINER*/
/*Mods & Map made by MICAHMINER*/
/*Although there are mods I have also coded in my own stuff*/
/*WHY U LOOKIN' AT THE CODE?!*/

function newLevel(){

clientMessage("Living in the Skies " + ChatColor.GREEN + "VERSION: 1");
clientMessage("Mods: Gold Into Diamonds, MICAHMINER's Camping Mod, and Super Staff Mod.");
clientMessage("I have combine the mods and added some more items");
clientMessage(ChatColor.RED + "<MICAHMINER> " + ChatColor.WHITE + "Plzz use the map I made for this.");

}

/*useItem function - ALL MODS*/

function useItem(x, y, z, itemId, blockId, side) {
if (itemId ==499&&blockId ==52) {
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 52, 1);

toolUse(3000, 499);

}

if (itemId ==499&&blockId ==56){
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 264, 3);

toolUse(3000, 499);

}

if (itemId ==499&&blockId ==79){
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 332, 2);
Level.dropItem(x, y, z, 0, 79, 1);

toolUse(3000, 499);

}

if (itemId ==499&&blockId ==20){
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 20, 1);

toolUse(3000, 499);

}

if (itemId ==499&&blockId ==46){
setTile(x, y, z, 0);
Level.explode(x, y, z, 5)

toolUse(3000, 499);

}

if (itemId ==499&&blockId ==14){
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 266, 2);

toolUse(3000, 499);

}

if (itemId ==499&&blockId ==15){
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 265, 2);

toolUse(3000, 499);

}

if (itemId ==499&&blockId ==243){
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 243, 1);

toolUse(3000, 499);

}

if (itemId ==499&&blockId ==110){
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 110, 1);

toolUse(3000, 499);

}

if (itemId ==499&&blockId ==2){
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 2, 1);

toolUse(3000, 499);
}

if (itemId ==499&&blockId ==49){
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 246, 1);

toolUse(3000, 499);

}

if (itemId ==499&&blockId ==73){
setTile(x, y, z, 4);
Level.dropItem(x, y, z, 0, 331, 9);

toolUse(3000, 499);
}

if (itemId ==499&&blockId ==74){
setTile(x, y, z, 4);
Level.dropItem(x, y, z, 0, 331, 12);

toolUse(3000, 499);
}

if (itemId ==499&&blockId ==4){
setTile(x, y, z, 13);

toolUse(3000, 499);
}

if (itemId ==499&&blockId ==12){
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 20, 1);

toolUse(3000, 499);
}

if (itemId ==499&&blockId ==82){
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 172, 1);

toolUse(3000, 499);
}

if (itemId ==499&&blockId ==13){
setTile(x, y, z, 4);

toolUse(3000, 499);
}

if (itemId ==510&&blockId ==202){
addItemInventory(325, 1);
Level.dropItem(x,y+1,z,0,264,3);
Entity.setCarriedItem(getPlayerEnt(),0,0,0);
}

if (itemId ==460){
setTile(x,y+1,z,200);
Entity.setCarriedItem(getPlayerEnt(),0,0,0);
}

if (itemId ==462&&blockId ==200){
setTile(x,y,z,201);
Entity.setCarriedItem(getPlayerEnt(),0,0,0);
}

if (itemId ==465&&blockId == 201){
Level.dropItem(x,y+1,z,0,280,1);
Level.dropItem(x,y+1,z,0,467,1);
Entity.setCarriedItem(getPlayerEnt(),0,0,0);
}

if (itemId ==471&&blockId ==201){
Level.dropItem(x,y+1,z,0,280,1);
Level.dropItem(x,y+1,z,0,472,1);
Entity.setCarriedItem(getPlayerEnt(),0,0,0);
}

if (itemId ==499&&blockId ==200){
toolUse(3000, 499);
setTile(x,y,z,201);
}

if (itemId ==508&&blockId ==203){
toolUse(100, 508);
setTile(x,y,z,204);
Level.dropItem(x,y+1,z,0,507,1);
}

if (itemId ==506&&blockId ==203){
setTile(x,y,z,204);
Player.setHealth(Entity.getHealth(Player.getEntity())-2);
}

if (itemId ==507&&blockId ==205){
setTile(x,y,z,206);
Entity.setCarriedItem(getPlayerEnt(),0,0,0);

}

if (itemId ==508&&blockId ==206){
Level.spawnMob(x+1,y,z,15);
Player.setHealth(Entity.getHealth(Player.getEntity())-4);
setTile(x,y,z,205);
toolUse(100, 508)
}

if (itemId ==506&&blockId ==205){
setTile(x,y,z,206);
Player.setHealth(Entity.getHealth(Player.getEntity())-2);
}

if (itemId ==504&&blockId ==204){
setTile(x,y,z,203);
Level.dropItem(x,y+1,z,0,505,1);
Entity.setCarriedItem(getPlayerEnt(),0,0,0);
}

if (itemId ==502){

setPosition(getPlayerEnt(),x+0.5,y+2.63,z+0.5);

Player.setHealth(Entity.getHealth(Player.getEntity())-1);

}

if (itemId ==500){

setPosition(getPlayerEnt(),x+0.5,y+2.63,z+0.5);

Player.setHealth(Entity.getHealth(Player.getEntity())-1);
}

if (itemId ==498&&blockId ==207){
Level.dropItem(x,y+1,z,0,15,1);
Level.dropItem(x,y+1,z,0,371,4);
Level.dropItem(x,y+1,z,0,331,2);
Entity.setCarriedItem(getPlayerEnt(),0,0,0);
}

if (itemId ==509&&blockId ==208){
addItemInventory(497, 1);
Entity.setCarriedItem(getPlayerEnt(),0,0,0);
}

if (itemId ==497&&blockId ==207){
Level.dropItem(x,y+1,z,0,496,1);
Entity.setCarriedItem(getPlayerEnt(),0,0,0);
}

if (itemId ==497&&blockId ==202){
Level.dropItem(x,y+1,z,0,496,1);
Level.dropItem(x,y+1,z,0,495,1);
Entity.setCarriedItem(getPlayerEnt(),0,0,0);
}

if (itemId ==499&&blockId ==3){
toolUse(3000, 499);
setTile(x,y,z,243);
}

if (itemId ==488&&blockId ==208){
setTile(x, y, z, 209);
setTile(x+1, y, z, 210);
setTile(x-1, 1, z, 210);
setTile(x, y, z+1, 210);
setTile(x, y, z-1, 210);
setTile(x+1, y, z+1, 210);
setTile(x-1, y, z-1, 210);
setTile(x+1, y, z-1, 210);
setTile(x-1, y, z+1, 210);
setTile(x+1, y, z, 210);
setTile(x-1, y, z, 210);
Entity.setCarriedItem(getPlayerEnt(),0,0,0);
Level.dropItem(x,y+1,z,0,208,1);
}

if (itemId ==491&&blockId ==203){
toolUse(200, 491);
setTile(x,y,z,204);
}

if (itemId ==491&&blockId ==205){
toolUse(200, 491);
setTile(x,y,z,206);
}

if (itemId ==491&&blockId ==209){
Entity.setCarriedItem(getPlayerEnt(),0,0,0);

ModPE.showTipMessage("This Heart is too weak.");

Level.dropItem(x,y+1,z,0,507,10);
}

if (itemId ==506&&blockId==209){
Player.setHealth(Entity.getHealth(Player.getEntity())-10000);
ModPE.showTipMessage("You are not an Enderman!");
}

if (itemId ==503&&blockId==209){
setTile(x, y, z, 211);
setTile(x+1, y, z, 212);
setTile(x-1, 1, z, 212);
setTile(x, y, z+1, 212);
setTile(x, y, z-1, 212);
setTile(x+1, y, z+1, 212);
setTile(x-1, y, z-1, 212);
setTile(x+1, y, z-1, 212);
setTile(x-1, y, z+1, 212);
setTile(x+1, y, z, 212);
setTile(x-1, y, z, 212);
toolUse(100, 503);

}

if (itemId ==490&&blockId ==209){
setTile(x, y, z, 211);
setTile(x+1, y, z, 212);
setTile(x-1, 1, z, 212);
setTile(x, y, z+1, 212);
setTile(x, y, z-1, 212);
setTile(x+1, y, z+1, 212);
setTile(x-1, y, z-1, 212);
setTile(x+1, y, z-1, 212);
setTile(x-1, y, z+1, 212);
setTile(x+1, y, z, 212);
setTile(x-1, y, z, 212);
toolUse(200, 490);

}}
       
/*attackHook function*/

function attackHook(a,v){

if (getCarriedItem()==509){
if(Entity.getEntityTypeId(v) == 15){

setPositionRelative(v, 0, -5000, 0);

addItemInventory(508, 1);

Entity.setCarriedItem(getPlayerEnt(),0,0,0);

}}

if (getCarriedItem()==509){
if(Entity.getEntityTypeId(v) == 38){

setPositionRelative(v, 0, -5000, 0);

addItemInventory(503, 1);

Entity.setCarriedItem(getPlayerEnt(),0,0,0);
}}

if (getCarriedItem()==501){
Player.setHealth(Entity.getHealth(Player.getEntity())+1);
}

if (getCarriedItem()==500){
Player.setHealth(Entity.getHealth(Player.getEntity())+1);
}

if (getCarriedItem()==492){

var dmg = 2

Entity.setHealth(v, Entity.getHealth(v) -dmg);
toolUse(50, 492)

}

if (getCarriedItem()==492){
if(Entity.getEntityTypeId(v) == 15){

Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,491,1);
Entity.setHealth(v,1);

}}

if (getCarriedItem()==492){
if(Entity.getEntityTypeId(v) == 38){

Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,490,1);
Entity.setHealth(v,1);
}}

if (getCarriedItem()==493){

Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,511,1);
Entity.setHealth(v,1);
toolUse(10000, 493)
}

if (getCarriedItem()==493){
if(Entity.getEntityTypeId(v) == 15){

Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,491,1);
Entity.setHealth(v,1);
toolUse(10000, 493)
}}

if (getCarriedItem()==493){
if(Entity.getEntityTypeId(v) == 38){

Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,490,1);
Entity.setHealth(v,1);
toolUse(10000, 493)

}}}

/*Gold Into Diamonds 2*/

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
	
ModPE.setItem(511, "blaze_powder", 0, "Magic Dust");

Item.addShapedRecipe(511, 3, 0, [
	"n n",
	" r ",
	"rrr"], [
	"n", 371, 0, "r", 331, 0]);

ModPE.setItem(510, "bucket", 3, "Bucket of " + ChatColor.YELLOW + "Gold Dust", 1);

Item.addShapedRecipe(510, 1, 0, [
	"ddd",
	"ddd",
	" b "], [
	"d", 511, 0, "b", 325, 0]);

Block.defineBlock(202, "Diamond Generator", [["iron_block", 0], ["piston_inner" , 0], ["iron_block" , 0], ["iron_block", 0], ["iron_block", 0], ["iron_block", 0]],61,false,0);
Block.setDestroyTime(202, 1.5);
Block.setShape(202, 0, 0, 0, 1, 0.8, 1);

Item.addShapedRecipe(202, 1, 0, [
	"ccc",
	"wil",
	"iii"], [
	"c", 4, 0, "l", 325, 10, "w", 325, 8, "i", 265, 0]);

/*Super Staff Mod*/

ModPE.setItem(499, "blaze_rod", 0, "Super Staff", 1);

Item.addShapedRecipe(499, 1, 0, [
	" rg",
	" d ",
	"gr "], [
	"d", 264, 0, "g", 41, 0, "r", 331, 0]);

Item.setMaxDamage(499, 3000);

Player.addItemCreativeInv(499,1,2);

function toolUse(maxDamage,id) {
var pcid=Player.getCarriedItemData();
if(pcid!==maxDamage){
Entity.setCarriedItem(getPlayerEnt(),id,1,pcid+1);
}else if(pcid==maxDamage) {
Level.playSound(Player.getX(),Player.getY(),Player.getZ(),"random.break",2);
Entity.setCarriedItem(getPlayerEnt(),0,0,0);
}}

function procCmd(command){

var cmd = command.split(" ")

if (cmd[0] == "ss.cmds"){
clientMessage("Super Staff Commands");
clientMessage(" /ss.cmds " + ChatColor.GREEN + "The Page your on :P");
clientMessage(" /ss.info " + ChatColor.GREEN + "Info Page");
clientMessage(" /ss.modreview " + ChatColor.GREEN + "Gives you Mod Review Tools.");
}

if (cmd[0] == "ss.info"){
clientMessage("SS Mod - Info");
clientMessage(" Developed by " + ChatColor.GREEN + "MICAHMINER");
clientMessage(" (VERSION) You are running on " + ChatColor.GREEN + "V.5");
clientMessage(" Made durring " + ChatColor.GREEN + "MCPE Alpha 0.10.5");
}

if (cmd[0] == "ss.modreview"){
clientMessage("" + ChatColor.RED + "<MICAHMINER>" + ChatColor.WHITE + "I am watching you");

}}

/*MICAHMINER's Camping Mod*/

ModPE.setItem(460, "empty_armor_slot_boots", 0, "Camp Fire", 1);

ModPE.setItem(461, "fireworks_charge_overlay", 0, "Rocks", 32);

Item.addShapedRecipe(461, 3, 0, [
	"   ",
	" d ",
	"   "], [
	"d", 13, 0]);

Item.addShapedRecipe(460, 1, 0, [
	"   ",
	"lfl",
	"sss"], [
	"s", 461, 0, "l", 280, 0, "f", 263, 1]);

Item.addShapedRecipe(460, 1, 0, [
	"   ",
	"lfl",
	"sss"], [
	"s", 461, 0, "l", 280, 0, "f", 5, 0]);
	
Block.defineBlock(200, "Campfire_off", [["furnace", 3], ["coal_block" , 0], ["furnace" , 0], ["furnace", 0], ["furnace", 0], ["furnace", 0]],61,false,0);
Block.setDestroyTime(200, 1.5);
Block.setShape(200, 0, 0, 0, 1, 0.5, 1);

function destroyBlock(x, y, z, side){

if (getTile(x,y,z) == 200){
setTile(x,y,z,0)
preventDefault()
Level.dropItem(x,y,z,0,460,1);
}
if (getTile(x,y,z) == 201){
setTile(x,y,z,0);
preventDefault()
Level.dropItem(x,y,z,0,460,1);
}}

ModPE.setItem(462, "skull_zombie", 0, "Fire Starter", 1);

Item.addShapedRecipe(462, 1, 0, [
	"s  ",
	"   ",
	"  s"], [
	"s", 280, 0]);

Block.defineBlock(201, "Campfire_on", [["furnace", 3], ["still_lava" , 0], ["furnace" , 1], ["furnace", 1], ["furnace", 1], ["furnace", 1]],61,false,0);
Block.setDestroyTime(201, 1.5);
Block.setLightLevel(201, 15);
Block.setShape(201, 0, 0, 0, 1, 0.5, 1);

Item.addShapedRecipe(351, 1, 3, [
	"   ",
	" t ",
	"   "], [
	"t", 6, 0]);

ModPE.setFoodItem(463, "potion_overlay", 0, 1, "Sugary Goo");

Item.addShapedRecipe(463, 8, 0, [
	" s ",
	" r ",
	" s "], [
	"s", 353, 0, "r", 338, 0]);

ModPE.setFoodItem(464, "skull_creeper", 0, 3, "Marshmallow");

Item.addShapedRecipe(464, 1, 0, [
	" s ",
	" g ",
	" s "], [
	"s", 353, 0, "g", 463, 0]);

ModPE.setItem(465, "skull_skeleton", 0, "Marshmallow on a Stick", 1);

Item.addShapedRecipe(465, 1, 0, [
	"   ",
	" m ",
	"s  "], [
	"s", 280, 0, "m", 464, 0]);

ModPE.setFoodItem(466, "skull_wither", 0, 1, "Burnt Marshmallow");

Item.addShapedRecipe(50, 4, 0, [
	" b ",
	" s ",
	"   "], [
	"b", 466, 0, "s", 280, 0]);

ModPE.setFoodItem(467, "skull_steve", 0, 5, "Roasted Marshmallow");

ModPE.setFoodItem(468, "empty_armor_slot_chestplate", 0, 3, "Graham Cracker");

Item.addShapedRecipe(468, 4, 0, [
	" w ",
	" s ",
	" w "], [
	"w", 296, 0, "s", 353, 0]);

ModPE.setFoodItem(469, "empty_armor_slot_helmet", 0, 14, "S'mores");

Item.addShapedRecipe(469, 1, 0, [
	" g ",
	"cmc",
	" g "], [
	"g", 468, 0, "c", 351, 3, "m", 467, 0]);

ModPE.setFoodItem(470, "empty_armor_slot_leggings", 0, 5, "Raw Hot Dog");

Item.addShapedRecipe(470, 2, 0, [
	"p  ",
	"   ",
	"  b"], [
	"p", 319, 0, "b", 363, 0]);

Item.addShapedRecipe(470, 2, 0, [
	"b  ",
	"   ",
	"  p"], [
	"p", 319, 0, "b", 363, 0]);

ModPE.setItem(471, "repeater", 0, "Hot Dog on a Stick", 1);

ModPE.setFoodItem(472, "potato_poisonous", 0, 8, "Cooked Hot Dog");

ModPE.setFoodItem(473, "comparator", 0, 18, "Hot Dog on a Bun " + ChatColor.RED + "(Yum!)");

Item.addShapedRecipe(473, 1, 0, [
	"   ",
	" h ",
	" b "], [
	"h", 472, 0, "b", 297, 0]);

Item.addShapedRecipe(471, 1, 0, [
	"   ",
	" h ",
	"s  "], [
	"h", 470, 0, "s", 280, 0]);

/*Modded Skyblock Coding*/

ModPE.setItem(509, "record_11", 0, "Trapping Net", 1);

Item.addShapedRecipe(509, 1, 0, [
	"ifi",
	"frf",
	"ifi"], [
	"i", 265, 0, "f", 85, 1, "r", 511, 0]);

Item.addShapedRecipe(509, 1, 0, [
	"ifi",
	"frf",
	"ifi"], [
	"i", 265, 0, "f", 85, 5, "r", 511, 0]);

ModPE.setItem(508, "record_13", 0, "Trapping Net: " + ChatColor.BLUE + "Villager", 1);
Item.setMaxDamage(508, 100);

ModPE.setItem(507, "nether_wart", 0, "Blood");

Block.defineBlock(203, "Ancient Magic Altar", [["stone", 0], ["stonebrick" , 3], ["repeater_off" , 0], ["repeater_off", 0], ["repeater_off", 0], ["repeater_off", 0]],61,false,0);
Block.setDestroyTime(203, 1.9);
Block.setShape(203, 0, 0, 0, 1, 0.8, 1);


 Block.defineBlock(204, "Ancient_Magic_Altar.on", [["stone", 0], ["redstone_block" , 0], ["repeater_on" , 0], ["repeater_on", 0], ["repeater_on", 0], ["repeater_on", 0]],61,false,0);
Block.setDestroyTime(204, 1.9);
Block.setShape(204, 0, 0, 0, 1, 0.8, 1);

Item.addShapedRecipe(203, 1, 0, [
	"sss",
	"iti",
	"rsr"], [
	"i", 265, 0, "s", 1, 0, "r", 331, 0, "t", 509, 0]);

ModPE.setItem(506, "record_blocks", 0, "Trapping Net - TAGLOCK: " + ChatColor.GREEN + "Player", 1);

Item.addShapedRecipe(506, 1, 0, [  
	" b ",
	"dgd",
	" t "], [
	"b", 507, 0, "t", 509, 0, "g", 463, 0, "d", 511, 0]);

Block.defineBlock(205, "Replication Altar", [["stone", 6], ["stonebrick" , 3], ["stone" , 6], ["stone", 6], ["stone", 6], ["stone", 6]],61,false,0);
Block.setDestroyTime(205, 1.9);
Block.setShape(205, 0, 0, 0, 1, 0.5, 1);

Block.defineBlock(206, "Replication_Altar.on", [["stone", 6], ["redstone_block" , 0], ["stone" , 6], ["stone", 6], ["stone", 6], ["stone", 6]],61,false,0);
Block.setDestroyTime(206, 1.9);
Block.setShape(206, 0, 0, 0, 1, 0.5, 1);

Item.addShapedRecipe(205, 1, 0, [
	"sas",
	"sts",
	"sss"], [
	"s", 1, 0, "t", 509, 0, "a", 203, 0]);

ModPE.setItem(505, "record_cat", 0, "Blood Wand", 1);

ModPE.setItem(504, "stick", 0, "Magic Infused Stick", 1);

Item.addShapedRecipe(504, 1, 0, [
	" d ",
	" s ",
	" d "], [
	"d", 511, 0, "s", 280, 0]);

Item.addShapedRecipe(504, 1, 0, [
	"   ",
	"dsd",
	"   "], [
	"d", 511, 0, "s", 280, 0]);

ModPE.setItem(503, "record_mellohi", 0, "Trapping Net: " + ChatColor.RED + "Enderman", 1);
Item.setMaxDamage(503, 100);

ModPE.setItem(368, "ender_pearl", 0, "Ender Pearl", 16);

ModPE.setItem(502, "record_chirp", 0, "Blood Wand: " + ChatColor.YELLOW + "Teleportation", 1);

Item.addShapedRecipe(502, 1, 0, [
	"  p",
	" d ",
	"w  "], [
	"p", 368, 0, "d", 511, 0, "w", 505, 0]);

ModPE.setItem(501, "record_mall", 0, "Blood Wand: " + ChatColor.YELLOW + "Blood-steal", 1);

Item.addShapedRecipe(501, 1, 0, [
	"  t",
	" d ",
	"w  "], [
	"d", 511, 0, "t", 509, 0, "w", 505, 0]);

ModPE.setItem(500, "record_far", 0, "Blood Wand: " + ChatColor.YELLOW + "Combo", 1);

Item.addShapedRecipe(500, 1, 0, [
	"  d",
	"tm ",
	" e "], [
	"d", 264, 0, "m", 511, 0, "t", 501, 0, "e", 502, 0]);

ModPE.setItem(498, "fireworks_charge", 0, "Rock", 1);

Item.addShapedRecipe(498, 1, 0, [
	"sss",
	"sss",
	"sss"], [
	"s", 461, 0]);

Block.defineBlock(207, "Iron & Gold Generator", [["cobblestone", 0], ["piston_inner" , 0], ["cobblestone" , 0], ["cobblestone", 0], ["cobblestone", 0], ["cobblestone", 0]],61,false,0);
Block.setDestroyTime(207, 1.5);
Block.setShape(207, 0, 0, 0, 1, 0.8, 1);

Item.addShapedRecipe(207, 1, 0, [
	"cfc",
	"cic",
	"ccc"], [
	"c", 4, 0, "f", 61, 0, "i", 460, 0]);

Item.addShapedRecipe(13, 1, 0, [
	"   ",
	" c ",
	"   "], [
	"c", 4, 0]);

Block.defineBlock(208, "Island Core", [["enchanting_table_top", 0]],false,0);
Block.setDestroyTime(208, 1.5);
Block.setLightLevel(208, 15);

ModPE.setItem(497, "record_stal", 0, "Trapping Net - " + ChatColor.GREEN + "Magic", 1);

ModPE.setItem(496, "record_strad", 0, "Magic Crystal", 16);

ModPE.setItem(495, "record_wait", 0, "Trapping Net Frame");

Item.addShapedRecipe(509, 1, 0, [
	"  r",
	" s ",
	"f  "], [
	"f", 495, 0, "s", 287, 0, "r", 511, 0]);

ModPE.setItem(494, "record_ward", 0, "Diamond Sword Blade", 1);

ModPE.setItem(493, "diamond_horse_armor", 0, "Excalibur", 1);
Item.setMaxDamage(493, 10000);

ModPE.setItem(492, "gold_horse_armor", 0, "Blood Sword", 1);
Item.setMaxDamage(492, 50);

ModPE.setItem(491, "iron_horse_armor", 0, "Heart", 1);
ModPE.setItem(490, "minecart_chest", 0, "Heart - " + ChatColor.RED + "Enderman", 1);
Item.setMaxDamage(491, 200);
Item.setMaxDamage(490, 200);

Item.addShapedRecipe(202, 1, 0, [
	"ccc",
	"iri",
	"igi"], [
	"c", 4, 0, "r", 331, 0, "g", 207, 0, "i", 265, 0]);

Item.addShapedRecipe(494, 1, 0, [
	" d ",
	" d ",
	"   "], [
	"d", 264, 0]);

Item.addShapedRecipe(492, 1, 0, [
	"blb",
	"bcb",
	"bwb"], [
	"b", 507, 0, "c", 496, 0, "w", 505, 0, "l", 494, 0]);
	
ModPE.setItem(489, "ruby", 0, "Magic Gem")

Item.addShapedRecipe(489, 1, 0, [
	"mmm",
	"mmm",
	"mmm"], [
	"m", 496, 0]);
	
Item.addShapedRecipe(493, 1, 0, [
	"gbg",
	"gsg",
	"gtg"], [
	"g", 489, 0, "b", 57, 0, "s", 492, 0, "t", 499, 0]);
	
Item.addShapedRecipe(276, 1, 0, [
	" b ",
	" r ",
	" s "], [
	"b", 494, 0, "r", 461, 0, "s", 280, 0]);

Item.addShapedRecipe(121, 4, 0, [
	"rcr",
	"cpc",
	"rcr"], [
	"c", 1, 3, "r", 461, 0, "p", 368, 0]);

Block.defineBlock(209, "Ender.Altar_center", [["end_stone", 0], ["stonebrick" , 3], ["stone" , 0], ["stone", 0], ["stone", 0], ["stone", 0]],61,false,0);
Block.setDestroyTime(209, 1.5);
Block.setShape(209, 0, 0, 0, 1, 0.8, 1);

Block.defineBlock(210, "Ender.Altar_out", [["end_stone", 0], ["endframee" , 2], ["repeater_off" , 0], ["repeater_off", 0], ["repeater_off", 0], ["repeater_off", 0]],61,false,0);
Block.setDestroyTime(210, 31556926);
Block.setShape(210, 0, 0, 0, 1, 0.8, 1);

Block.defineBlock(211, "Ender.Altar_center.on", [["end_stone", 0], ["stained_clay" , 14], ["stone" , 0], ["stone", 0], ["stone", 0], ["stone", 0]],61,false,0);
Block.setDestroyTime(211, 1.5);
Block.setShape(211, 0, 0, 0, 1, 0.8, 1);

Block.defineBlock(212, "Ender.Altar_out.on", [["end_stone", 0], ["stained_clay" , 14], ["repeater_on" , 0], ["repeater_on", 0], ["repeater_on", 0], ["repeater_on", 0]],61,false,0);
Block.setDestroyTime(212, 31556926);
Block.setShape(212, 0, 0, 0, 1, 0.8, 1);

ModPE.setItem(488, "minecart_furnace", 0, "Ender Magic Altar", 1);

Block.setLightLevel(209, 2);
Block.setLightLevel(211, 2);

Item.addShapedRecipe(488, 1, 0, [
	"ede",
	"pap",
	"ene"], [
	"a", 203, 0, "e", 121, 0, "p", 368, 0, "d", 57, 0, "n", 509, 0]);
	
/*destroyBlock function*/

function destroyBlock(x, y, z, side){

if (getTile(x,y,z) == 200){
setTile(x,y,z,0)
preventDefault()
Level.dropItem(x,y,z,0,460,1);
}
if (getTile(x,y,z) == 201){
setTile(x,y,z,0);
preventDefault()
Level.dropItem(x,y,z,0,460,1);
}

if (getTile(x,y,z) == 204){
setTile(x,y,z,0);
preventDefault()
Level.dropItem(x,y,z,0,203,1);
}

if (getTile(x,y,z) == 206){
setTile(x,y,z,0);
preventDefault()
Level.dropItem(x,y,z,0,205,1);
}

if (getTile(x,y,z) == 209){
preventDefault()
setTile(x, y, z, 0);
setTile(x+1, y, z, 0);
setTile(x-1, 1, z, 0);
setTile(x, y, z+1, 0);
setTile(x, y, z-1, 0);
setTile(x+1, y, z+1, 0);
setTile(x-1, y, z-1, 0);
setTile(x+1, y, z-1, 0);
setTile(x-1, y, z+1, 0);
setTile(x+1, y, z, 0);
setTile(x-1, y, z, 0);
Level.dropItem(x,y,z,0,488,1);
}

if (getTile(x,y,z) == 211){
preventDefault()
setTile(x, y, z, 0);
setTile(x+1, y, z, 0);
setTile(x-1, 1, z, 0);
setTile(x, y, z+1, 0);
setTile(x, y, z-1, 0);
setTile(x+1, y, z+1, 0);
setTile(x-1, y, z-1, 0);
setTile(x+1, y, z-1, 0);
setTile(x-1, y, z+1, 0);
setTile(x+1, y, z, 0);
setTile(x-1, y, z, 0);
Level.dropItem(x,y,z,0,488,1);

}}

/*Death hook function*/

function deathHook(m, v){

if(Entity.getEntityTypeId(v) == 38){

Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),0,368,1);
}}

/*ModTick function*/

function modTick(){
if (getCarriedItem()==488){

ModPE.showTipMessage("WARNING: This clears a 3x3 area!")
}}