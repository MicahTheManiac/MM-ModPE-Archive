/*
Gold Into Diamonds 3

Edition: 3.0
Version: 1.0 Dev
(v.1) Script Project Name: a-202_gid3
___

Creator: MICAHMINER
Expansion Packs: null;

Adds: Generators (From Old & a New Type), Wands (From Old) & Staffs, & Diamond Forging. (And some stuff from the Addon Diamond Overload)

*/

//Version Var
var betamode = 1
var vers = 0


/*Items*/

//From GID2 (Differend Ids)

ModPE.setItem(512, "dustgold-gid", 0, "Gold Dust");
ModPE.setItem(513, "g3-bucketgold", 0, "Bucket of " + ChatColor.YELLOW + "Gold Dust", 1);
ModPE.setItem(514, "g3-diamondshard", 0, "Diamond Shard", 16);
ModPE.setItem(821, "g3-diamonddust", 0, "Diamond Dust");
ModPE.setItem(516, "gid3_tranwand", 0, "Transforming_Wand", 1);
Item.setHandEquipped(516,1);
Item.setMaxDamage(516, 8);
ModPE.setItem(561, "gid3_tranwand2", 0, "Transforming_Wand_U", 1);
Item.setHandEquipped(561,1);
ModPE.langEdit("item.Transforming_Wand.name", "Philosopher's Wand");
ModPE.langEdit("item.Transforming_Wand_U.name", "Philosopher's Wand" + ChatColor.RED + " [UNCHARGED]");


//New
ModPE.setItem(517, "g3-dfrag", 0, "Diamond Fragment");
ModPE.setItem(518, "gid3_magic", 0, "Crystalized Gold Dust");
ModPE.setItem(520, "gid3_transtaff", 0, "Philosopher's Staff", 1);
ModPE.setItem(562, "gid3_transtaff2", 0, "Philosopher's Staff" + ChatColor.RED + " [UNCHARGED]", 1);
Item.setHandEquipped(520,1);
Item.setHandEquipped(562,1);
Item.setMaxDamage(520, 8);
ModPE.setItem(525, "g3-edust", 0, "Emerald Dust")
ModPE.setItem(526, "g3-edust", 1, "Energized Emerald Dust")
ModPE.setItem(527, "g3-bucketgold", 1, "Bucket of Emerald Dust", 1)

//Crafting

Item.addShapedRecipe(512, 3, 0, [
	"nnn",
	"rrr",
	"nnn"], [
	"n", 371, 0, "r", 331, 0]);
	
Item.addShapedRecipe(513, 1, 0, [
	"ddd",
	"dbd",
	"ddd"], [
	"d", 512, 0, "b", 325, 0]);
	
Item.addShapedRecipe(518, 1, 0, [
	"ddd",
	"dbd",
	"ddd"], [
	"d", 512, 0, "b", 821, 0]);

Item.addShapedRecipe(561, 1, 0, [
	"  d",
	"nsn",
	"g  "], [
	"d", 517, 0, "g", 512, 0, "n", 371, 0, "s", 280, 0]);

Item.addShapedRecipe(516, 1, 0, [
	" c ",
	" w ",
	"   "], [
	"c", 518, 0, "w", 561, 0]);

Item.addShapedRecipe(264, 1, 0, [
	"dd ",
	"dd ",
	"   "], [
	"d", 517, 0]);

Item.addShapedRecipe(264, 1, 0, [
	"ddd",
	"ddd",
	"ddd"], [
	"d", 514, 0]);

Item.addShapedRecipe(514, 1, 0, [
	"ddd",
	"ddd",
	"ddd"], [
	"d", 821, 0]);
	
Item.addShapedRecipe(516, 1, 0, [
	" nd",
	"csn",
	"g  "], [
	"d", 517, 0, "g", 512, 0, "n", 371, 0, "s", 280, 0, "c", 518, 0]);

Item.addShapedRecipe(562, 1, 0, [
	" se",
	"iws",
	"si "], [
	"e", 388, 0, "s", 280, 0, "i", 265, 0, "w", 561, 0]);

Item.addShapedRecipe(520, 1, 0, [
	"cse",
	"iws",
	"sic"], [
	"e", 388, 0, "s", 280, 0, "i", 265, 0, "w", 561, 0, "c", 518, 0]);

Item.addShapedRecipe(520, 1, 0, [
	"  c",
	" w ",
	"c  "], [
	"c", 518, 0, "w", 562, 0]);
	
Item.addShapedRecipe(526, 8, 0, [
	"nnn",
	"rrr",
	"nnn"], [
	"n", 525, 0, "r", 331, 0]);
	
Item.addShapedRecipe(527, 1, 0, [
	"ddd",
	"dbd",
	"ddd"], [
	"d", 526, 0, "b", 325, 0]);

/*Blocks*/

//From GID2 (Different Ids)

var oldId_202 = 208
Block.defineBlock(oldId_202, "blockId_202myluckynumber", [["iron_block", 0], ["g3-cloneb" , 1], ["iron_block" , 0], ["iron_block", 0], ["iron_block", 0], ["iron_block", 0]],61,false,0);
ModPE.langEdit("tile.blockId_202myluckynumber.name", "Diamond Generator: " + ChatColor.GREEN + "Iron");
Block.setDestroyTime(oldId_202, 1.5);
Block.setShape(oldId_202, 0, 0, 0, 1, 0.8, 1);

Block.defineBlock(209, "Diamond Generator: " + ChatColor.GREEN + "Wood", [["log", 0], ["g3ntop" , 0], ["log" , 0], ["log", 0], ["log", 0], ["log", 0]],5,false,0);
Block.setDestroyTime(209, 1.5);
Block.setShape(209, 0, 0, 0, 1, 0.7, 1);

Block.defineBlock(210, "Diamond Generator: " + ChatColor.GREEN + "Stone", [["stonebrick", 3], ["piston_inner" , 0], ["furnace" , 2], ["furnace", 2], ["furnace", 2], ["furnace", 2]],61,false,0);
Block.setDestroyTime(210, 1.5);
Block.setShape(210, 0, 0, 0, 1, 0.8, 1);

//New

Block.defineBlock(215, "Gold Plate", [["gold_block", 0]],41,false,0);
Block.setDestroyTime(215, 0.5);
Block.setShape(215, 0, 0, 0, 1, 0.2, 1);

Block.defineBlock(216, "Diamond Plate", [["diamond_block", 0]],41,false,0);
Block.setDestroyTime(216, 0.6);
Block.setShape(216, 0, 0, 0, 1, 0.2, 1);

Block.defineBlock(211, "Diamond Cloner", [["iron_block", 0], ["g3-cloneb" , 1], ["g3-cloneb" , 0], ["g3-cloneb", 0], ["g3-cloneb", 0], ["g3-cloneb", 0]],61,false,0);
Block.setDestroyTime(211, 1.5);

Block.defineBlock(239, "dc-active", [["iron_block", 0], ["g3-cloneb" , 1], ["g3-cloneb" , 2], ["g3-cloneb", 2], ["g3-cloneb", 2], ["g3-cloneb", 2]],61,false,0);
Block.setDestroyTime(239, 1.5);
Block.setLightLevel(239,8);

Block.defineBlock(212, "Beryl Ore", [["g3-ore", 0]],56,false,0);
Block.setDestroyTime(212, 2.5);

//Crafting

Item.addShapedRecipe(oldId_202, 1, 0, [
	"ccc",
	"igi",
	"ibi"], [
	"c", 4, 0, "i", 265, 0, "g", 210, 0, "b", 42, 0]);
	
Item.addShapedRecipe(oldId_202, 1, 0, [
	"ccc",
	"ioi",
	"ibi"], [
	"c", 4, 0, "i", 265, 0, "o", 49, 0, "b", 42, 0]);

Item.addShapedRecipe(209, 1, 0, [
	"psp",
	"ltl",
	"lpl"], [
	"p", 5, 0, "s", 280, 0, "t", 50, 0, "l", 17, 0]);

Item.addShapedRecipe(210, 1, 0, [
	"ccc",
	"sgs",
	"bfb"], [
	"c", 4, 0, "s", 1, 0, "g", 209, 0, "f", 61, 0, "b", 98, 0]);

Item.addShapedRecipe(210, 1, 0, [
	"ccc",
	"sds",
	"bfb"], [
	"c", 4, 0, "s", 1, 0, "d", 264, 0, "f", 61, 0, "b", 98, 0]);
	
Item.addShapedRecipe(215, 1, 0, [
	"   ",
	"ooo",
	"   "], [
	"o", 266, 0]);

Item.addShapedRecipe(216, 1, 0, [
	"   ",
	"ooo",
	"   "], [
	"o", 264, 0]);

Item.addShapedRecipe(41, 3, 0, [
	"ooo",
	"ooo",
	"ooo"], [
	"o", 215, 0]);

Item.addShapedRecipe(57, 3, 0, [
	"ooo",
	"ooo",
	"ooo"], [
	"o", 216, 0]);
	
Item.addFurnaceRecipe(212, 388, 0)

Item.addShapedRecipe(211, 1, 0, [
	"cic",
	"gro",
	"bdb"], [
	"o", 49, 0, "i", 265, 0, "c", 4, 0, "g", 102, 0, "r", 331, 0, "b", 42, 0, "d", 208, 0]);

/*Use Item*/

function useItem(x, y, z, itemId, blockId, side){
//Generators
if (itemId ==513&&blockId ==oldId_202){
Level.dropItem(x,y+1,z,0,264,3);
Level.dropItem(x,y+1,z,0,517,1);
Level.dropItem(x,y+1,z,0,821,3);
Entity.setCarriedItem(getPlayerEnt(),325,1,0);
}

if (itemId ==513&&blockId ==209){
Level.dropItem(x,y+1,z,0,517,3);
Level.dropItem(x,y+1,z,0,821,3);
Entity.setCarriedItem(getPlayerEnt(),325,1,0);
}

if (itemId ==513&&blockId ==210){
Level.dropItem(x,y+1,z,0,264,1);
Level.dropItem(x,y+1,z,0,514,2);
Level.dropItem(x,y+1,z,0,517,1);
Level.dropItem(x,y+1,z,0,821,3);
Entity.setCarriedItem(getPlayerEnt(),325,1,0);
}

if (itemId ==527&&blockId ==oldId_202){
Level.dropItem(x,y+1,z,0,264,4);
Level.dropItem(x,y+1,z,0,517,3);
Entity.setCarriedItem(getPlayerEnt(),325,1,0);
}

if (itemId ==527&&blockId ==209){
Level.dropItem(x,y+1,z,0,517,3);
Level.dropItem(x,y+1,z,0,514,8);
Entity.setCarriedItem(getPlayerEnt(),325,1,0);
}

if (itemId ==527&&blockId ==210){
Level.dropItem(x,y+1,z,0,264,2);
Level.dropItem(x,y+1,z,0,514,7);
Level.dropItem(x,y+1,z,0,517,2);
Entity.setCarriedItem(getPlayerEnt(),325,1,0);
}

//Wands
if (itemId ==516&&blockId ==1){
setTile(x,y,z,0);
Level.dropItem(x,y,z,0,331,1);
gid3PLAYER_useWand(8, 516);
}

if (itemId ==516&&blockId ==14){
setTile(x,y,z,0);
Level.dropItem(x,y+1,z,0,514,2);
Level.dropItem(x,y+1,z,0,821,7);
gid3PLAYER_useWand(8, 516);
}

if (itemId ==516&&blockId ==41){
setTile(x,y,z,0);
Level.dropItem(x,y+1,z,0,514,2);
Level.dropItem(x,y+1,z,0,517,3);
Level.dropItem(x,y+1,z,0,821,5);
Level.dropItem(x,y+1,z,0,264,5);
gid3PLAYER_useWand(8, 516);
}

if (itemId ==516&&blockId ==215){
ModPE.showTipMessage("NOT ENOUGH POWER!");
Level.playSoundEnt(Player.getEntity(),"random.click",100);
setTile(x,y,z,0)
Level.dropItem(x,y+1,z,0,264,1);
gid3PLAYER_useWand(8, 516);
}

if (itemId ==520&&blockId ==215){
setTile(x,y,z,0)
Level.dropItem(x,y+1,z,0,216,1);
gid3PLAYER_useWand(8, 520);
}

if (itemId ==513&&blockId ==211){
Entity.setCarriedItem(getPlayerEnt(),325,1,0);
ModPE.showTipMessage("ACTIVE!")
setTile(x,y,z,239)
}

if (itemId ==216&&blockId ==239){
removeItem(216, 1, 0);
addItemInventory(216, 2, 0)
setTile(x,y,z,211)

}

if (itemId ==264&&blockId ==239){
removeItem(264, 1, 0);
addItemInventory(264, 2, 0)
setTile(x,y,z,211)
}

if (itemId ==57&&blockId ==239&&getTile(x,y+1,z)==0){
removeItem(57, 1, 0);
addItemInventory(57, 1, 0)
addItemInventory(212, 1, 0)
setTile(x,y,z,211)
setTile(x,y+1,z,51)
ModPE.showTipMessage("Created Beryl Ore! (Synthetic Emerald)")

}
}

/*New Level*/

function newLevel(){
clientMessage("Gold Into Diamonds 3" + ChatColor.GREEN + " v.1 Beta 1.0");
clientMessage("By:" + ChatColor.BLUE + " MICAHMINER");

//Version Var
var betamode = 1;
var vers = 0;
}

/*Commands*/

function procCmd(command){

var cmd = command.split(" ")

if (cmd[0] == "gid3.cmd"){
if (cmd[1] == "debug-getv"){

clientMessage("Getting GID3 Version...");
if(betamode=1){
if(vers=0){
clientMessage("Version = " + ChatColor.GREEN + "DevVersion(Beta) 0.1");
}}

if(betamode=0){
if(vers=1){
clientMessage("Version = " + ChatColor.GREEN + "Version 1");
}}

if(betamode=0){
if(vers=2){
clientMessage("Version = " + ChatColor.GREEN + "Version 2");
}}
}
}
}

//Destroy Block

function destroyBlock(x, y, z, side){

if (getTile(x,y,z) == 239){
setTile(x,y,z,0)
preventDefault()
Level.dropItem(x,y,z,0,211,1);
Level.dropItem(x,y,z,0,512,8);
}}


/*Health Variables*/

function gid3PLAYER_useWand(maxDamage,id) {
var pcid=Player.getCarriedItemData();
if(pcid!==maxDamage){
Entity.setCarriedItem(getPlayerEnt(),id,1,pcid+1);
}else if(pcid==maxDamage) {
ModPE.showTipMessage("Recharge your Wand");
Entity.setCarriedItem(getPlayerEnt(),561,1,0);
}}

function gid3PLAYER_useStaff(maxDamage,id) {
var pcid=Player.getCarriedItemData();
if(pcid!==maxDamage){
Entity.setCarriedItem(getPlayerEnt(),id,1,pcid+1);
}else if(pcid==maxDamage) {
ModPE.showTipMessage("Recharge your Staff");
Entity.setCarriedItem(getPlayerEnt(),562,1,0);
}}

function removeItem(item, amount, data){
	var count = Player.getCarriedItemCount();
	var data = Player.getCarriedItemData();
	var newcount = count - amount;
	Entity.setCarriedItem(Player.getEntity(), parseInt(item), newcount, data);
}