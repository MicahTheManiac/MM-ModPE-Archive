/*
Super Staff v.6 (aka Super Staff 0.11)
A Complete remake of the Super Staff Mod
*/

/*Super Staff Item*/
ModPE.setItem(499, "superstaff", 0, "Super Staff", 1);

Item.setHandEquipped(499,1);

Item.setMaxDamage(499, 3000);

Item.addShapedRecipe(499, 1, 0, [
	"rgd",
	" gg",
	"g r"], [
	"g", 266, 0, "r", 331, 0, "d", 264, 0]);
	
/*When you join the game*/

function newLevel(){
clientMessage("<SuperStaff.js> Commands? Type /ss.cmds");
clientMessage("Version: " + ChatColor.GREEN + "5.0");
clientMessage("by: " + ChatColor.GREEN + "MICAHMINER");
}

/*When you tap stuffs*/
function useItem(x, y, z, itemId, blockId, side){
if (itemId ==499&&blockId ==56){
setTile(x,y,z,0)
Level.dropItem(x,y+1,z,0,264,3);
staffUse(3000, 499)
}

if (itemId ==499&&blockId ==79){
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 79, 1);

staffUse(3000, 499);

}

if (itemId ==499&&blockId ==20){
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 20, 1);

staffUse(3000, 499);

}

if (itemId ==499&&blockId ==46){
setTile(x, y, z, 0);
Level.explode(x, y, z, 5)

staffUse(3000, 499);

}

if (itemId ==499&&blockId ==14){
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 266, 2);

staffUse(3000, 499);

}

if (itemId ==499&&blockId ==15){
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 265, 2);

staffUse(3000, 499);

}

if (itemId ==499&&blockId ==243){
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 243, 1);

staffUse(3000, 499);

}

if (itemId ==499&&blockId ==110){
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 110, 1);

staffUse(3000, 499);

}

if (itemId ==499&&blockId ==2){
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 2, 1);

staffUse(3000, 499);
}

if (itemId ==499&&blockId ==49){
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 246, 1);

staffUse(3000, 499);

}

if (itemId ==499&&blockId ==73){
setTile(x, y, z, 4);
Level.dropItem(x, y, z, 0, 331, 9);

staffUse(3000, 499);
}

if (itemId ==499&&blockId ==74){
setTile(x, y, z, 4);
Level.dropItem(x, y, z, 0, 331, 12);

staffUse(3000, 499);
}

if (itemId ==499&&blockId ==255){
setTile(x,y,z,0);
Level.dropItem(x, y, z, 0, 1000, 1);
clientMessage("Error.53cr3t-@dd3d 1n v.6- ajs72nsis92ms8em27zmd82ms82md7dne8sjdmf83jsma93mdor83jd37sjr83jskw92ksmd");
//ni siht dedda i
}

if (itemId ==1000&&blockId==57){
Entity.setCarriedItem(getPlayerEnt(),57,1000,0);
clientMessage("Error.53cr3t-ni siht dedd a i- #micahmineriscool // abcdefghijklmnopqrstuvwxyz1234567890 //3.14");
setTile(x,y,z,0)
//ni siht dedda i
}

if (itemId ==499&&blockId ==4){
setTile(x, y, z, 13);

staffUse(3000, 499);
}

if (itemId ==499&&blockId ==12){
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 20, 1);

staffUse(3000, 499);
}

if (itemId ==499&&blockId ==82){
setTile(x, y, z, 0);
Level.dropItem(x, y, z, 0, 172, 1);

staffUse(3000, 499);
}

if (itemId ==499&&blockId ==13){
setTile(x, y, z, 4);

staffUse(3000, 499);
}

if (itemId ==499&&blockId ==16){
setTile(x,y,z,0);
Level.dropItem(x, y, z, 0, 263, 4);

staffUse(3000, 499);
//added in v.6
}

if (itemId ==499&&blockId ==129){
setTile(x,y,z,0);
Level.dropItem(x, y, z, 0, 388, 3);

staffUse(3000, 499)
//added in v.6
}}
/*Attack Mobs*/

function attackHook(a,v){

if(getCarriedItem()==499){

var dmg = 70

Entity.setHealth(v, Entity.getHealth(v) -dmg);

Entity.setFireTicks(v, 19);

staffUse(3000, 499);
//modified in v.6
}}

/*Cmds*/

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
clientMessage(" (VERSION) You are running on " + ChatColor.GREEN + "V.6");
clientMessage(" Made durring " + ChatColor.GREEN + "MCPE Alpha 0.11.1");
}

if (cmd[0] == "ss.modreview"){
clientMessage("Plz Dont use to Cheat. " + ChatColor.GREEN + "Unless your trolling :P");
}

if (cmd[0] == "ss.error-micahminermodding-mpm/youtube.com"){
if (cmd[1] == "ss.error+//ss+.error-abcdefghijklmnopqrstuvwxyz/nowiknowmyabcs"){
if (cmd[2] == "ss.error++//ss++.error-nexttimewillyousingwithme"){
addItemInventory(1000, 1)
addItemInventory(57, 1);
clientMessage("You know your ABCs: Awesome Big Command!");
}}}}


/*Staff Health*/
function staffUse(maxDamage,id) {
var pcid=Player.getCarriedItemData();
if(pcid!==maxDamage){
Entity.setCarriedItem(getPlayerEnt(),id,1,pcid+1);
}else if(pcid==maxDamage) {
ModPE.showTipMessage("Your Super Staff has broke.");
Entity.setCarriedItem(getPlayerEnt(),0,0,0);
}}
ModPE.setItem(1000, "error-image", 0, "item.Error-null.name", 1);