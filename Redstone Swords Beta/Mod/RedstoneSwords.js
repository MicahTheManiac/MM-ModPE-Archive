/*
Redstone Swords Mod - Light Saber Mod 2.0!

Creator: MICAHMINER

Version: 1.0 Dev
Script Project Name: 9X-202_rsm

*/

//Items

ModPE.setItem(710, "rsm-ironnugget", 0, "Iron Nugget")
ModPE.setItem(711, "rsm-crystal", 0, "Redstone Cluster")
ModPE.setItem(712, "rsm-saber_lens", 0, "Laser Focus", 16)
ModPE.setItem(713, "rsm-hilt", 0, "Hilt", 5)

ModPE.setItem(720, "rsm-sword", 0, "Redstone Sword", 1)
ModPE.setItem(721, "rsm-sword", 1, "§2Redstone Sword", 1)
ModPE.setItem(722, "rsm-sword", 2, "§1Redstone Sword", 1)
ModPE.setItem(723, "rsm-sword", 3, "§5Redstone Sword", 1)

Item.setHandEquipped(720, 1);
Item.setHandEquipped(721, 1);
Item.setHandEquipped(722, 1);
Item.setHandEquipped(723, 1);

Item.setMaxDamage(720, 500);
Item.setMaxDamage(721, 500);
Item.setMaxDamage(722, 500);
Item.setMaxDamage(723, 500);

//Crafting

Item.addCraftRecipe(710, 9, 0, [265, 1, 0]);
Item.addCraftRecipe(265, 1, 0, [710, 9, 0]);
Item.addShapedRecipe(711, 1, 0, ["ddd", "dbd", "ddd"], ["d", 331, 0, "b", 152, 0]);
Item.addShapedRecipe(712, 1, 0, ["ddd", "dbd", "ddd"], ["d", 710, 0, "b", 20, 0]);
Item.addShapedRecipe(713, 1, 0, ["lif", "iri", "rib"], ["l", 334, 0, "b", 77, 5, "i", 265, 0, "r", 331, 0, "f", 712, 0]);

Item.addShapedRecipe(720, 1, 0, ["  c", "   ", "h  "], ["h", 713, 0, "c", 711, 0]);
Item.addShapedRecipe(721, 1, 0, ["  c", " d ", "h  "], ["h", 713, 0, "c", 711, 0, "d", 351, 2]);
Item.addShapedRecipe(721, 1, 0, ["  c", " d ", "h  "], ["h", 713, 0, "c", 711, 0, "d", 351, 10]);
Item.addShapedRecipe(722, 1, 0, ["  c", " d ", "h  "], ["h", 713, 0, "c", 711, 0, "d", 351, 4]);
Item.addShapedRecipe(722, 1, 0, ["  c", " d ", "h  "], ["h", 713, 0, "c", 711, 0, "d", 351, 12]);
Item.addShapedRecipe(723, 1, 0, ["  c", " d ", "h  "], ["h", 713, 0, "c", 711, 0, "d", 351, 5]);
Item.addShapedRecipe(723, 1, 0, ["  c", " d ", "h  "], ["h", 713, 0, "c", 711, 0, "d", 351, 13]);

//Health Var. (Saber Damage)

function rsm_saberdam(maxDamage,id) {
var pcid=Player.getCarriedItemData();
if(pcid!==maxDamage){
Entity.setCarriedItem(getPlayerEnt(),id,1,pcid+1);
}else if(pcid==maxDamage) {
ModPE.showTipMessage("Your Saber Crystal has lost Energy!");
Entity.setCarriedItem(getPlayerEnt(),713,1,0);
}}

//Attack Hook

function attackHook(a,v){

var dmgS = 15

if(getCarriedItem()==720){
rsm_saberdam(500, 720)
Entity.setHealth(v, Entity.getHealth(v) -dmgS);
if (Entity.getHealth(v) <= 0) {
Entity.setHealth(v, 1)
Entity.setFireTicks(v, 19);
}}

if(getCarriedItem()==721){
rsm_saberdam(500, 721)
Entity.setHealth(v, Entity.getHealth(v) -dmgS);
if (Entity.getHealth(v) <= 0) {
Entity.setHealth(v, 1)
Entity.setFireTicks(v, 19);
}}

if(getCarriedItem()==722){
rsm_saberdam(500, 722)
Entity.setHealth(v, Entity.getHealth(v) -dmgS);
if (Entity.getHealth(v) <= 0) {
Entity.setHealth(v, 1)
Entity.setFireTicks(v, 19);
}}

if(getCarriedItem()==723){
rsm_saberdam(500, 723)
Entity.setHealth(v, Entity.getHealth(v) -dmgS);
if (Entity.getHealth(v) <= 0) {
Entity.setHealth(v, 1)
Entity.setFireTicks(v, 19);
}}}

