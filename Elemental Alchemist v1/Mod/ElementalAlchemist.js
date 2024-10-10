/*
This Mod is based off of The Iron Alchemist command block module for the Enchanted Engines Command ModPack Project by Jragon014

This mod allows you to place 8 of any ore down and get more in return along with some EXP.

©MicahTheManiac
MICAHMINER Modding™

micahthemaniac.weebly.com
*/


//Items
ModPE.setItem(850, "elal-redstone", 0, "Redstone Alchemist Orb", 16)
ModPE.setItem(851, "elal-coal", 0, "Coal Alchemist Orb", 16)
ModPE.setItem(852, "elal-iron", 0, "Iron Alchemist Orb", 16)
ModPE.setItem(853, "elal-gold", 0, "Gold Alchemist Orb", 16)
ModPE.setItem(854, "elal-diamond", 0, "Diamond Alchemist Orb", 16)
ModPE.setItem(855, "elal-emerald", 0, "Emerald Alchemist Orb", 16)

Block.defineBlock(220, "Elemental Alchemist Gateway", [["reactor_core", 1]],false,7);
Block.setDestroyTime(220, 1.5);

Item.addShapedRecipe(850, 1, 0, ["bfb", "fcf", "bfb"], ["c", 331, 0, "f", 377, 0, "b", 152, 0]);
Item.addShapedRecipe(851, 1, 0, ["bfb", "fcf", "bfb"], ["c", 850, 0, "f", 377, 0, "b", 173, 0]);
Item.addShapedRecipe(852, 1, 0, ["bfb", "fcf", "bfb"], ["c", 851, 0, "f", 377, 0, "b", 42, 0]);
Item.addShapedRecipe(853, 1, 0, ["bfb", "fcf", "bfb"], ["c", 852, 0, "f", 377, 0, "b", 41, 0]);
Item.addShapedRecipe(854, 1, 0, ["bfb", "fcf", "bfb"], ["c", 853, 0, "f", 377, 0, "b", 57, 0]);
Item.addShapedRecipe(855, 1, 0, ["bfb", "fcf", "bfb"], ["c", 854, 0, "f", 370, 0, "b", 388, 0]);
Item.addShapedRecipe(220, 1, 0, ["bfb", "fcf", "bfb"], ["c", 15, 0, "f", 76, 0, "b", 351, 4]);

//UseItem Function

function useItem(x, y, z, itemId, blockId, side) {
	//Redstone
if(itemId==850&&blockId==220&&
getTile(x-1,y,z)==73&&
getTile(x+1,y,z)==73&&
getTile(x,y,z+1)==73&&
getTile(x,y,z-1)==73&&
getTile(x+1,y,z+1)==73&&
getTile(x-1,y,z-1)==73&&
getTile(x-1,y,z+1)==73&&
getTile(x+1,y,z-1)==73){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 152);
setTile(x,y,z+1, 73);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 73);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}

if(itemId==851&&blockId==220&&
getTile(x-1,y,z)==73&&
getTile(x+1,y,z)==73&&
getTile(x,y,z+1)==73&&
getTile(x,y,z-1)==73&&
getTile(x+1,y,z+1)==73&&
getTile(x-1,y,z-1)==73&&
getTile(x-1,y,z+1)==73&&
getTile(x+1,y,z-1)==73){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 152);
setTile(x,y,z+1, 73);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 73);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}

if(itemId==852&&blockId==220&&
getTile(x-1,y,z)==73&&
getTile(x+1,y,z)==73&&
getTile(x,y,z+1)==73&&
getTile(x,y,z-1)==73&&
getTile(x+1,y,z+1)==73&&
getTile(x-1,y,z-1)==73&&
getTile(x-1,y,z+1)==73&&
getTile(x+1,y,z-1)==73){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 152);
setTile(x,y,z+1, 73);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 73);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}

if(itemId==853&&blockId==220&&
getTile(x-1,y,z)==73&&
getTile(x+1,y,z)==73&&
getTile(x,y,z+1)==73&&
getTile(x,y,z-1)==73&&
getTile(x+1,y,z+1)==73&&
getTile(x-1,y,z-1)==73&&
getTile(x-1,y,z+1)==73&&
getTile(x+1,y,z-1)==73){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 152);
setTile(x,y,z+1, 73);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 73);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}

if(itemId==854&&blockId==220&&
getTile(x-1,y,z)==73&&
getTile(x+1,y,z)==73&&
getTile(x,y,z+1)==73&&
getTile(x,y,z-1)==73&&
getTile(x+1,y,z+1)==73&&
getTile(x-1,y,z-1)==73&&
getTile(x-1,y,z+1)==73&&
getTile(x+1,y,z-1)==73){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 152);
setTile(x,y,z+1, 73);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 73);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}

if(itemId==855&&blockId==220&&
getTile(x-1,y,z)==73&&
getTile(x+1,y,z)==73&&
getTile(x,y,z+1)==73&&
getTile(x,y,z-1)==73&&
getTile(x+1,y,z+1)==73&&
getTile(x-1,y,z-1)==73&&
getTile(x-1,y,z+1)==73&&
getTile(x+1,y,z-1)==73){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 152);
setTile(x,y,z+1, 73);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 73);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}
    //Coal
if(itemId==850&&blockId==220&&
getTile(x-1,y,z)==16&&
getTile(x+1,y,z)==16&&
getTile(x,y,z+1)==16&&
getTile(x,y,z-1)==16&&
getTile(x+1,y,z+1)==16&&
getTile(x-1,y,z-1)==16&&
getTile(x-1,y,z+1)==16&&
getTile(x+1,y,z-1)==16){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 173);
setTile(x,y,z+1, 16);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 16);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}

if(itemId==851&&blockId==220&&
getTile(x-1,y,z)==16&&
getTile(x+1,y,z)==16&&
getTile(x,y,z+1)==16&&
getTile(x,y,z-1)==16&&
getTile(x+1,y,z+1)==16&&
getTile(x-1,y,z-1)==16&&
getTile(x-1,y,z+1)==16&&
getTile(x+1,y,z-1)==16){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 173);
setTile(x,y,z+1, 16);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 16);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}

if(itemId==852&&blockId==220&&
getTile(x-1,y,z)==16&&
getTile(x+1,y,z)==16&&
getTile(x,y,z+1)==16&&
getTile(x,y,z-1)==16&&
getTile(x+1,y,z+1)==16&&
getTile(x-1,y,z-1)==16&&
getTile(x-1,y,z+1)==16&&
getTile(x+1,y,z-1)==16){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 173);
setTile(x,y,z+1, 16);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 16);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}

if(itemId==853&&blockId==220&&
getTile(x-1,y,z)==16&&
getTile(x+1,y,z)==16&&
getTile(x,y,z+1)==16&&
getTile(x,y,z-1)==16&&
getTile(x+1,y,z+1)==16&&
getTile(x-1,y,z-1)==16&&
getTile(x-1,y,z+1)==16&&
getTile(x+1,y,z-1)==16){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 173);
setTile(x,y,z+1, 16);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 16);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}

if(itemId==854&&blockId==220&&
getTile(x-1,y,z)==16&&
getTile(x+1,y,z)==16&&
getTile(x,y,z+1)==16&&
getTile(x,y,z-1)==16&&
getTile(x+1,y,z+1)==16&&
getTile(x-1,y,z-1)==16&&
getTile(x-1,y,z+1)==16&&
getTile(x+1,y,z-1)==16){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 173);
setTile(x,y,z+1, 16);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 16);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}

if(itemId==855&&blockId==220&&
getTile(x-1,y,z)==16&&
getTile(x+1,y,z)==16&&
getTile(x,y,z+1)==16&&
getTile(x,y,z-1)==16&&
getTile(x+1,y,z+1)==16&&
getTile(x-1,y,z-1)==16&&
getTile(x-1,y,z+1)==16&&
getTile(x+1,y,z-1)==16){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 173);
setTile(x,y,z+1, 16);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 16);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}
    //Iron

if(itemId==851&&blockId==220&&
getTile(x-1,y,z)==15&&
getTile(x+1,y,z)==15&&
getTile(x,y,z+1)==15&&
getTile(x,y,z-1)==15&&
getTile(x+1,y,z+1)==15&&
getTile(x-1,y,z-1)==15&&
getTile(x-1,y,z+1)==15&&
getTile(x+1,y,z-1)==15){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 42);
setTile(x,y,z+1, 15);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 15);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}

if(itemId==852&&blockId==220&&
getTile(x-1,y,z)==15&&
getTile(x+1,y,z)==15&&
getTile(x,y,z+1)==15&&
getTile(x,y,z-1)==15&&
getTile(x+1,y,z+1)==15&&
getTile(x-1,y,z-1)==15&&
getTile(x-1,y,z+1)==15&&
getTile(x+1,y,z-1)==15){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 42);
setTile(x,y,z+1, 15);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 15);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}

if(itemId==853&&blockId==220&&
getTile(x-1,y,z)==15&&
getTile(x+1,y,z)==15&&
getTile(x,y,z+1)==15&&
getTile(x,y,z-1)==15&&
getTile(x+1,y,z+1)==15&&
getTile(x-1,y,z-1)==15&&
getTile(x-1,y,z+1)==15&&
getTile(x+1,y,z-1)==15){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 42);
setTile(x,y,z+1, 15);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 15);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}

if(itemId==854&&blockId==220&&
getTile(x-1,y,z)==15&&
getTile(x+1,y,z)==15&&
getTile(x,y,z+1)==15&&
getTile(x,y,z-1)==15&&
getTile(x+1,y,z+1)==15&&
getTile(x-1,y,z-1)==15&&
getTile(x-1,y,z+1)==15&&
getTile(x+1,y,z-1)==15){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 42);
setTile(x,y,z+1, 15);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 15);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}

if(itemId==855&&blockId==220&&
getTile(x-1,y,z)==15&&
getTile(x+1,y,z)==15&&
getTile(x,y,z+1)==15&&
getTile(x,y,z-1)==15&&
getTile(x+1,y,z+1)==15&&
getTile(x-1,y,z-1)==15&&
getTile(x-1,y,z+1)==15&&
getTile(x+1,y,z-1)==15){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 42);
setTile(x,y,z+1, 15);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 15);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}
    //Gold

if(itemId==852&&blockId==220&&
getTile(x-1,y,z)==14&&
getTile(x+1,y,z)==14&&
getTile(x,y,z+1)==14&&
getTile(x,y,z-1)==14&&
getTile(x+1,y,z+1)==14&&
getTile(x-1,y,z-1)==14&&
getTile(x-1,y,z+1)==14&&
getTile(x+1,y,z-1)==14){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 41);
setTile(x,y,z+1, 14);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 14);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}

if(itemId==853&&blockId==220&&
getTile(x-1,y,z)==14&&
getTile(x+1,y,z)==14&&
getTile(x,y,z+1)==14&&
getTile(x,y,z-1)==14&&
getTile(x+1,y,z+1)==14&&
getTile(x-1,y,z-1)==14&&
getTile(x-1,y,z+1)==14&&
getTile(x+1,y,z-1)==14){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 41);
setTile(x,y,z+1, 14);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 14);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}

if(itemId==854&&blockId==220&&
getTile(x-1,y,z)==14&&
getTile(x+1,y,z)==14&&
getTile(x,y,z+1)==14&&
getTile(x,y,z-1)==14&&
getTile(x+1,y,z+1)==14&&
getTile(x-1,y,z-1)==14&&
getTile(x-1,y,z+1)==14&&
getTile(x+1,y,z-1)==14){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 41);
setTile(x,y,z+1, 14);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 14);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}

if(itemId==855&&blockId==220&&
getTile(x-1,y,z)==14&&
getTile(x+1,y,z)==14&&
getTile(x,y,z+1)==14&&
getTile(x,y,z-1)==14&&
getTile(x+1,y,z+1)==14&&
getTile(x-1,y,z-1)==14&&
getTile(x-1,y,z+1)==14&&
getTile(x+1,y,z-1)==14){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 41);
setTile(x,y,z+1, 14);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 14);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}

//Diamond


if(itemId==853&&blockId==220&&
getTile(x-1,y,z)==56&&
getTile(x+1,y,z)==56&&
getTile(x,y,z+1)==56&&
getTile(x,y,z-1)==56&&
getTile(x+1,y,z+1)==56&&
getTile(x-1,y,z-1)==56&&
getTile(x-1,y,z+1)==56&&
getTile(x+1,y,z-1)==56){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 57);
setTile(x,y,z+1, 56);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 56);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}

if(itemId==854&&blockId==220&&
getTile(x-1,y,z)==56&&
getTile(x+1,y,z)==56&&
getTile(x,y,z+1)==56&&
getTile(x,y,z-1)==56&&
getTile(x+1,y,z+1)==56&&
getTile(x-1,y,z-1)==56&&
getTile(x-1,y,z+1)==56&&
getTile(x+1,y,z-1)==56){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 57);
setTile(x,y,z+1, 56);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 56);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}

if(itemId==855&&blockId==220&&
getTile(x-1,y,z)==56&&
getTile(x+1,y,z)==56&&
getTile(x,y,z+1)==56&&
getTile(x,y,z-1)==56&&
getTile(x+1,y,z+1)==56&&
getTile(x-1,y,z-1)==56&&
getTile(x-1,y,z+1)==56&&
getTile(x+1,y,z-1)==56){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 57);
setTile(x,y,z+1, 56);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 56);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}
//Emerald


if(itemId==854&&blockId==220&&
getTile(x-1,y,z)==129&&
getTile(x+1,y,z)==129&&
getTile(x,y,z+1)==129&&
getTile(x,y,z-1)==129&&
getTile(x+1,y,z+1)==129&&
getTile(x-1,y,z-1)==129&&
getTile(x-1,y,z+1)==129&&
getTile(x+1,y,z-1)==129){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 133);
setTile(x,y,z+1, 129);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 129);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}

if(itemId==855&&blockId==220&&
getTile(x-1,y,z)==129&&
getTile(x+1,y,z)==129&&
getTile(x,y,z+1)==129&&
getTile(x,y,z-1)==129&&
getTile(x+1,y,z+1)==129&&
getTile(x-1,y,z-1)==129&&
getTile(x-1,y,z+1)==129&&
getTile(x+1,y,z-1)==129){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 133);
setTile(x,y,z+1, 129);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 129);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}
//Emerald Al ONLY!


if(itemId==855&&blockId==220&&
getTile(x-1,y,z)==21&&
getTile(x+1,y,z)==21&&
getTile(x,y,z+1)==21&&
getTile(x,y,z-1)==21&&
getTile(x+1,y,z+1)==21&&
getTile(x-1,y,z-1)==21&&
getTile(x-1,y,z+1)==21&&
getTile(x+1,y,z-1)==21){ 

setTile(x-1,y,z, 1, 5);
setTile(x+1,y,z, 1, 5);
setTile(x,y,z-1, 22);
setTile(x,y,z+1, 21);
setTile(x+1,y,z+1, 1);
setTile(x-1,y,z-1, 21);
setTile(x+1,y,z-1, 1, 5);
setTile(x-1,y,z+1, 1);

}


if(itemId==855&&blockId==220&&
getTile(x-1,y,z)==153&&
getTile(x+1,y,z)==153&&
getTile(x,y,z+1)==153&&
getTile(x,y,z-1)==153&&
getTile(x+1,y,z+1)==153&&
getTile(x-1,y,z-1)==153&&
getTile(x-1,y,z+1)==153&&
getTile(x+1,y,z-1)==153){ 

setTile(x-1,y,z, 87);
setTile(x+1,y,z, 87);
setTile(x,y,z-1, 155);
setTile(x,y,z+1, 153);
setTile(x+1,y,z+1, 87);
setTile(x-1,y,z-1, 153);
setTile(x+1,y,z-1, 87);
setTile(x-1,y,z+1, 87);

}

}

function newLevel(){

print("Elemental Alchemist (PE) by MICAHMINER. \n Youtube: MicahTheManiac")
clientMessage("|==| Elemental Alchemist Mod |==|")
clientMessage("Verion: " + ChatColor.GREEN + "1.0.0 [OFFICIAL RELEASE]")
clientMessage("By: " + ChatColor.BLUE + "MICAHMINER/MicahTheManiac")

}