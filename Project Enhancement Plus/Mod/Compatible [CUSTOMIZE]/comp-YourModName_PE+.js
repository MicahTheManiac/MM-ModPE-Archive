/*
THIS IS A PE+ COMPATIBLILTY FILE!

This allows Project ENHANCEMENT+ and YourModName to be compatible!

 © Copyright 2015 Project ENHANCEMENT+
 © Copyright 2015 MICAHMINER
 © http://projectenhancementplus.weebly.com
*/

/*IMPORTANT: Add the TOOL items from your mod here so NO ERRORS happen. THIS IS REQUIRED!


/*Must Need Tool Code*/
function modTick(){
//Add more by putting in "||Player.getCarriedItem()==ToolID"
if(Player.getCarriedItem()==ID1||Player.getCarriedItem()==ID2||Player.getCarriedItem()==ID3||Player.getCarriedItem()==ID4||Player.getCarriedItem()==ID5) {

Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 30*1, 19, false, true);

}
}

/*Information*/

function procCmd(command){
var cmd = command.split(" ")

if (cmd[0] == "pe+.comp-YourModName"){

//Add in info about this Compatibility Script

clientMessage("Mod: " + ChatColor.GREEN + "YourModName");
clientMessage("Creator: " + ChatColor.GREEN + "ModCreator");
clientMessage("CS Creator: " + ChatColor.GREEN + "YourName");
//clientMessage("Additional Text");

}

}