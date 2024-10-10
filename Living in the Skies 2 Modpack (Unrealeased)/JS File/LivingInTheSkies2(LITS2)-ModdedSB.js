/* Living in the Skies 2 -- Develeoper Edition

by MICAHMINER

©MICAHMINER
©MICAHMINER Modding™
©MicahTheManiac
/==\
TAMPERING WITH THE SOURCE CODE IS NOT ALLOWED UNLESS IT IS FOR PERSONAL USE AND IS NOT RELEASED TO THE PUBLIC!

DO NOT STEAL/REPOST THIS MODPACK OR THE SOURCE CODE TO ANYONE!

Thank you;
-Micah Thompson

©MICAHMINER
©MICAHMINER Modding™
©MicahTheManiac
\==/

All Mods used with permission from creator.
Mods: (Mods marked with a "×" are officially part of this pack)
× Elemental Alchemist Mod - by MICAHMINER ×
× Easy Tool Coding API - by TaQultO | OPEN SOURCE FOR ALL MODDERS ×
  Gold Into Diamonds 3 - by MICAHMINER (been modified WITH permission)
*/

/**ETCA**/
///* - Easy Tools Coding API - *///
///* ------ Version 2.0 ------ *///
///* ---- By:@TaQuItO_988 ---- *///


///# Random Functions #///
function modTick(){
		Sword.modTick();
		Pickaxe.modTick();
		Shovel.modTick();
		Axe.modTick();
}
function destroyBlock(x,y,z,s){
		if(Item.isSword(Player.getCarriedItem())===true){
				Sword.destroyBlock(x,y,z,s);
		}
		else if(Item.isPickaxe(Player.getCarriedItem())===true){
				Pickaxe.destroyBlock(x,y,z,s);
		}
		else if(Item.isShovel(Player.getCarriedItem())===true){
				Shovel.destroyBlock(x,y,z,s);
		}
		else if(Item.isAxe(Player.getCarriedItem())===true){
				Axe.destroyBlock(x,y,z,s);
		}
}
function attackHook(a,v){
		if(Item.isSword(Player.getCarriedItem())===true){
				Sword.attackHook(a,v);
		}
		else if(Item.isPickaxe(Player.getCarriedItem())===true){
				Pickaxe.attackHook(a,v);
		}
		else if(Item.isShovel(Player.getCarriedItem())===true){
				Shovel.attackHook(a,v);
		}
		else if(Item.isAxe(Player.getCarriedItem())===true){
				Axe.attackHook(a,v);
		}
}
function useItem(x,y,z,i,b,s,iD,bD){
		if(Item.isShovel(i)===true){
				Shovel.useItem(x,y,z,i,b,s,iD,bD);
		}
		else if(Item.isHoe(i)===true){
				Hoe.useItem(x,y,z,i,b,s,iD,bD);
		}
}
Item.setDamage = function(id,maxDamage,damageAmount){
		if(id===Player.getCarriedItem()&&maxDamage>Player.getCarriedItemData()&&Level.getGameMode()===0){
				Entity.setCarriedItem(Player.getEntity(),Player.getCarriedItem(),Player.getCarriedItemCount(),Player.getCarriedItemData()+1);
		}
		else if(id===Player.getCarriedItem()&&maxDamage<=Player.getCarriedItemData()&&Level.getGameMode()===0){
				Entity.setCarriedItem(Player.getEntity(),Player.getCarriedItem(),Player.getCarriedItemCount()-1,0);
				Level.playSoundEnt(Player.getEntity(),"random.break",16);
		}
}


///# Swords System #///
var Sword = {
		itemsData:{itemId:[],durability:[],damage:[]},
		currentData:{itemId:null,durability:null,damage:null},	
		setDestroyTimes:function(){
				Block.setDestroyTime(18,0.2/1.5);Block.setDestroyTime(30,4/3.3/15);Block.setDestroyTime(86,1/1.5);Block.setDestroyTime(91,1/1.5);Block.setDestroyTime(103,1/1.5);Block.setDestroyTime(106,0.2/1.5);Block.setDestroyTime(127,0.2/1.5);
		},
		resetDestroyTimes:function(){
				Block.setDestroyTime(18,0.2);Block.setDestroyTime(30,4);Block.setDestroyTime(86,1);Block.setDestroyTime(91,1);Block.setDestroyTime(103,1);Block.setDestroyTime(106,0.2);Block.setDestroyTime(127,0.2);
		},
		modTick:function(){
				if(Item.isSword(Player.getCarriedItem())===true&&this.currentData.itemId!==Player.getCarriedItem()){
						this.currentData.itemId = Player.getCarriedItem();
						this.currentData.durability = this.getDurability(Player.getCarriedItem());
						this.currentData.damage = this.getDamage(Player.getCarriedItem());
						this.setDestroyTimes();
				}
				else if(Item.isSword(Player.getCarriedItem())===false&&this.currentData.itemId!==null){
						this.currentData.itemId = null;
						this.currentData.durability = null;
						this.currentData.damage = null;
						this.resetDestroyTimes();
				}			
		},
		destroyBlock:function(x,y,z,s){
				Item.setDamage(this.currentData.itemId,this.currentData.durability);
				switch(getTile(x,y,z)){
						case 30:Level.dropItem(x+0.5,y,z+0.5,0,287,1,0);break;
						case 127:Level.dropItem(x+0.5,y,z+0.5,0,351,3,3);break;
				}
		},
		attackHook:function(a,v){
				if(Entity.getHealth(v)>this.currentData.damage&&Entity.getHealth(v)>0){
						Entity.setHealth(v,Entity.getHealth(v)-this.currentData.damage);
						Item.setDamage(this.currentData.itemId,this.currentData.durability);
				}
				else if(Entity.getHealth(v)<=this.currentData.damage&&Entity.getHealth(v)>0){
						Entity.setHealth(v,1);
						Item.setDamage(this.currentData.itemId,this.currentData.durability);
				}
		},	
		getDurability:function(id){
				return this.itemsData.durability[this.itemsData.itemId.indexOf(id)];
		},
		getDamage:function(id){
				return this.itemsData.damage[this.itemsData.itemId.indexOf(id)];
		},
};
Item.defineSword = function(id,texture,textureData,name,durability,damage){
		ModPE.setItem(id,texture,textureData,name,1);
		Item.setCategory(id,ItemCategory.TOOL);
		Item.setMaxDamage(id,durability);
		Item.setHandEquipped(id,true);
		Sword.itemsData.itemId.push(id);
		Sword.itemsData.durability.push(durability);
		Sword.itemsData.damage.push(damage-2);
}
Item.isSword = function(id){
		if(Sword.itemsData.itemId.indexOf(id)!==-1){
				return true;
		}
		else{
				return false;
		}
}


///# Pickaxes System #///
var Pickaxe = {
		blocksData:[{id:1,dTime:1.5,mLevel:1,drop:[1,1,-1]},{id:4,dTime:2,mLevel:1,drop:[4,1,0]},{id:14,dTime:3,mLevel:2,drop:[14,1,0]},{id:15,dTime:3,mLevel:3,drop:[15,1,0]},{id:16,dTime:3,mLevel:1,drop:[263,1,0]},{id:21,dTime:3,mLevel:2,drop:[351,4,4]},{id:22,dTime:3,mLevel:2,drop:[22,1,0]},{id:24,dTime:0.8,mLevel:1,drop:[24,1,-1]},{id:41,dTime:5,mLevel:2,drop:[41,1,0]},{id:42,dTime:3,mLevel:3,drop:[42,1,0]},{id:43,dTime:2,mLevel:1,drop:[43,2,-1]},{id:44,dTime:2,mLevel:1,drop:[44,1,-1]},{id:45,dTime:2,mLevel:1,drop:[45,1,0]},{id:48,dTime:2,mLevel:1,drop:[48,1,0]},{id:49,dTime:50,mLevel:4,drop:[49,1,0]},{id:52,dTime:5,mLevel:1,drop:[0,0,0]},{id:56,dTime:3,mLevel:3,drop:[56,1,0]},{id:57,dTime:5,mLevel:4,drop:[57,1,0]},{id:61,dTime:3.5,mLevel:1,drop:[61,1,0]},{id:62,dTime:3.5,mLevel:1,drop:[61,1,0]},{id:67,dTime:2,mLevel:1,drop:[67,1,0]},{id:71,dTime:5,mLevel:2,drop:[330,1,0]},{id:73,dTime:3,mLevel:3,drop:[331,4,0]},{id:74,dTime:4,mLevel:3,drop:[331,4,0]},{id:87,dTime:0.4,mLevel:1,drop:[87,1,0]},{id:98,dTime:1.5,mLevel:1,drop:[98,1,-1]},{id:101,dTime:5,mLevel:1,drop:[101,1,0]},{id:108,dTime:2,mLevel:1,drop:[108,1,0]},{id:109,dTime:1.5,mLevel:1,drop:[109,1,-1]},{id:112,dTime:2,mLevel:1,drop:[112,1,0]},{id:113,dTime:2,mLevel:1,drop:[113,1,0]},{id:114,dTime:2,mLevel:1,drop:[114,1,0]},{id:116,dTime:5,mLevel:1,drop:[116,1,9]},{id:121,dTime:3,mLevel:1,drop:[121,1,0]},{id:128,dTime:0.8,mLevel:1,drop:[128,1,0]},{id:129,dTime:3,mLevel:3,drop:[388,1,0]},{id:133,dTime:5,mLevel:3,drop:[133,1,0]},{id:139,dTime:2,mLevel:1,drop:[139,1,0]},{id:145,dTime:5,mLevel:1,drop:[145,1,0]},{id:152,dTime:5,mLevel:1,drop:[152,1,0]},{id:155,dTime:0.8,mLevel:1,drop:[155,1,0]},{id:156,dTime:0.8,mLevel:1,drop:[156,1,0]},{id:159,dTime:1.25,mLevel:1,drop:[159,1,-1]},{id:172,dTime:1.25,mLevel:1,drop:[172,1,0]},{id:173,dTime:5,mLevel:1,drop:[173,1,0]}],				
		itemsData:{itemId:[],durability:[],damage:[],mSpeed:[],mLevel:[]},
		currentData:{itemId:null,durability:null,damage:null,mSpeed:null,mLevel:null},
		setDestroyTimes:function(){
				for(var a in this.blocksData){
						if(this.currentData.mLevel>=this.blocksData[a].mLevel){
								Block.setDestroyTime(this.blocksData[a].id,this.currentData.mSpeed*(this.blocksData[a].dTime/3.33));
						}
				}
		},
		resetDestroyTimes:function(){
				for(var b in this.blocksData){
						Block.setDestroyTime(this.blocksData[b].id,this.blocksData[b].dTime);
				}
		},
		modTick:function(){
				if(Item.isPickaxe(Player.getCarriedItem())===true&&this.currentData.itemId!==Player.getCarriedItem()){
						this.currentData.itemId = Player.getCarriedItem();
						this.currentData.durability = this.getDurability(Player.getCarriedItem());
						this.currentData.damage = this.getDamage(Player.getCarriedItem());
						this.currentData.mSpeed = this.getMiningSpeed(Player.getCarriedItem());
						this.currentData.mLevel = this.getMiningLevel(Player.getCarriedItem());
						this.setDestroyTimes();
				}
				else if(Item.isPickaxe(Player.getCarriedItem())===false&&this.currentData.itemId!==null){
						this.currentData.itemId = null;
						this.currentData.durability = null;
						this.currentData.damage = null;
						this.currentData.mSpeed = null;
						this.currentData.mLevel = null;
						this.resetDestroyTimes();
				}			
		},
		destroyBlock:function(x,y,z,s){
				for(var c in this.blocksData){			
						if(this.blocksData[c].id===getTile(x,y,z)&&this.blocksData[c].drop[2]<0){
								Level.dropItem(x+0.5,y,z+0.5,0,this.blocksData[c].drop[0],this.blocksData[c].drop[1],Level.getData(x,y,z));
								Item.setDamage(this.currentData.itemId,this.currentData.durability);
						}			
						else if(this.blocksData[c].id===getTile(x,y,z)&&this.blocksData[c].drop[2]>=0){
								Level.dropItem(x+0.5,y,z+0.5,0,this.blocksData[c].drop[0],this.blocksData[c].drop[1],this.blocksData[c].drop[2]);
								Item.setDamage(this.currentData.itemId,this.currentData.durability);
						}
				}
		},
		attackHook:function(a,v){
				if(Entity.getHealth(v)>this.currentData.damage&&Entity.getHealth(v)>0){
						Entity.setHealth(v,Entity.getHealth(v)-this.currentData.damage);
						Item.setDamage(this.currentData.itemId,this.currentData.durability);
				}
				else if(Entity.getHealth(v)<=this.currentData.damage&&Entity.getHealth(v)>0){
						Entity.setHealth(v,1);
						Item.setDamage(this.currentData.itemId,this.currentData.durability);
				}
		},	
		getDurability:function(id){
				return this.itemsData.durability[this.itemsData.itemId.indexOf(id)];
		},
		getDamage:function(id){
				return this.itemsData.damage[this.itemsData.itemId.indexOf(id)];
		},
		getMiningSpeed:function(id){
				return this.itemsData.mSpeed[this.itemsData.itemId.indexOf(id)];
		},
		getMiningLevel:function(id){
				return this.itemsData.mLevel[this.itemsData.itemId.indexOf(id)];
		}	
};
Item.definePickaxe = function(id,texture,textureData,name,durability,damage,mSpeed,mLevel){
		ModPE.setItem(id,texture,textureData,name,1);
		Item.setCategory(id,ItemCategory.TOOL);
		Item.setMaxDamage(id,durability);
		Item.setHandEquipped(id,true);
		Pickaxe.itemsData.itemId.push(id);
		Pickaxe.itemsData.durability.push(durability);
		Pickaxe.itemsData.damage.push(damage-2);
		Pickaxe.itemsData.mSpeed.push(mSpeed);
		Pickaxe.itemsData.mLevel.push(mLevel);
}
Item.isPickaxe = function(id){
		if(Pickaxe.itemsData.itemId.indexOf(id)!==-1){
				return true;
		}
		else{
				return false;
		}
}


///# Shovels System #///
var Shovel = {
		blocksData:[{id:2,dTime:0.6},{id:3,dTime:0.5},{id:12,dTime:0.5},{id:13,dTime:0.6},{id:60,dTime:0.6},{id:78,dTime:0.1},{id:80,dTime:0.2},{id:82,dTime:0.6},{id:88,dTime:0.5},{id:110,dTime:0.6},{id:198,dTime:0.6},{id:243,dTime:0.6}],	
		itemsData:{itemId:[],durability:[],damage:[],dSpeed:[]},
		currentData:{itemId:null,durability:null,damage:null,dSpeed:null},
		setDestroyTimes:function(){
				for(var a in this.blocksData){
						Block.setDestroyTime(this.blocksData[a].id,this.currentData.dSpeed*this.blocksData[a].dTime);
				}
		},
		resetDestroyTimes:function(){
				for(var b in this.blocksData){
						Block.setDestroyTime(this.blocksData[b].id,this.blocksData[b].dTime);
				}
		},
		modTick:function(){
				if(Item.isShovel(Player.getCarriedItem())===true&&this.currentData.itemId!==Player.getCarriedItem()){
						this.currentData.itemId = Player.getCarriedItem();
						this.currentData.durability = this.getDurability(Player.getCarriedItem());
						this.currentData.damage = this.getDamage(Player.getCarriedItem());
						this.currentData.dSpeed = this.getDiggingSpeed(Player.getCarriedItem());
						this.setDestroyTimes();
				}
				else if(Item.isShovel(Player.getCarriedItem())===false&&this.currentData.itemId!==null){
						this.currentData.itemId = null;
						this.currentData.durability = null;
						this.currentData.damage = null;
						this.currentData.dSpeed = null;
						this.resetDestroyTimes();
				}			
		},
		destroyBlock:function(x,y,z,s){
				Item.setDamage(this.currentData.itemId,this.currentData.durability);
				switch(getTile(x,y,z)){
						case 78:Level.dropItem(x+0.5,y,z+0.5,0,332,1,0);break;
						case 80:Level.dropItem(x+0.5,y,z+0.5,0,332,4,0);break;
				}
		},
		useItem:function(x,y,z,i,b,s,iD,bD){
				if(b===2){
						Item.setDamage(this.currentData.itemId,this.currentData.durability);
						Level.playSound(x,y,z,"step.grass",16);
						setTile(x,y,z,198,0);
				}
		},
		attackHook:function(a,v){
				if(Entity.getHealth(v)>this.currentData.damage&&Entity.getHealth(v)>0){
						Entity.setHealth(v,Entity.getHealth(v)-this.currentData.damage);
						Item.setDamage(this.currentData.itemId,this.currentData.durability);
				}
				else if(Entity.getHealth(v)<=this.currentData.damage&&Entity.getHealth(v)>0){
						Entity.setHealth(v,1);
						Item.setDamage(this.currentData.itemId,this.currentData.durability);
				}
		},	
		getDurability:function(id){
				return this.itemsData.durability[this.itemsData.itemId.indexOf(id)];
		},
		getDamage:function(id){
				return this.itemsData.damage[this.itemsData.itemId.indexOf(id)];
		},
		getDiggingSpeed:function(id){
				return this.itemsData.dSpeed[this.itemsData.itemId.indexOf(id)];
		},
};
Item.defineShovel = function(id,texture,textureData,name,durability,damage,dSpeed){
		ModPE.setItem(id,texture,textureData,name,1);
		Item.setCategory(id,ItemCategory.TOOL);
		Item.setMaxDamage(id,durability);
		Item.setHandEquipped(id,true);
		Shovel.itemsData.itemId.push(id);
		Shovel.itemsData.durability.push(durability);
		Shovel.itemsData.damage.push(damage-2);
		Shovel.itemsData.dSpeed.push(dSpeed);
}
Item.isShovel = function(id){
		if(Shovel.itemsData.itemId.indexOf(id)!==-1){
				return true;
		}
		else{
				return false;
		}
}


///# Axes System #///
var Axe = {
		blocksData:[{id:5,dTime:2},{id:17,dTime:2},{id:43,dTime:2},{id:44,dTime:2},{id:47,dTime:1.5},{id:53,dTime:2},{id:54,dTime:2.5},{id:58,dTime:2.5},{id:63,dTime:1},{id:64,dTime:3},{id:65,dTime:0.4},{id:68,dTime:1},{id:85,dTime:2},{id:96,dTime:3},{id:107,dTime:2},{id:134,dTime:2},{id:135,dTime:2},{id:136,dTime:2},{id:157,dTime:2},{id:158,dTime:2},{id:162,dTime:2},{id:163,dTime:2},{id:164,dTime:2},{id:183,dTime:2},{id:184,dTime:2},{id:185,dTime:2},{id:186,dTime:2},{id:187,dTime:2}],
		itemsData:{itemId:[],durability:[],damage:[],cSpeed:[]},
		currentData:{itemId:null,durability:null,damage:null,cSpeed:null},
		setDestroyTimes:function(){
				for(var a in this.blocksData){
						Block.setDestroyTime(this.blocksData[a].id,this.currentData.cSpeed*this.blocksData[a].dTime);
				}
		},
		resetDestroyTimes:function(){
				for(var b in this.blocksData){
						Block.setDestroyTime(this.blocksData[b].id,this.blocksData[b].dTime);
				}
		},
		modTick:function(){
				if(Item.isAxe(Player.getCarriedItem())===true&&this.currentData.itemId!==Player.getCarriedItem()){
						this.currentData.itemId = Player.getCarriedItem();
						this.currentData.durability = this.getDurability(Player.getCarriedItem());
						this.currentData.damage = this.getDamage(Player.getCarriedItem());
						this.currentData.cSpeed = this.getChoppingSpeed(Player.getCarriedItem());
						this.setDestroyTimes();
				}
				else if(Item.isAxe(Player.getCarriedItem())===false&&this.currentData.itemId!==null){
						this.currentData.itemId = null;
						this.currentData.durability = null;
						this.currentData.damage = null;
						this.currentData.cSpeed = null;
						this.resetDestroyTimes();
				}			
		},
		destroyBlock:function(x,y,z,s){
				Item.setDamage(this.currentData.itemId,this.currentData.durability);
		},
		attackHook:function(a,v){
				if(Entity.getHealth(v)>this.currentData.damage&&Entity.getHealth(v)>0){
						Entity.setHealth(v,Entity.getHealth(v)-this.currentData.damage);
						Item.setDamage(this.currentData.itemId,this.currentData.durability);
				}
				else if(Entity.getHealth(v)<=this.currentData.damage&&Entity.getHealth(v)>0){
						Entity.setHealth(v,1);
						Item.setDamage(this.currentData.itemId,this.currentData.durability);
				}
		},	
		getDurability:function(id){
				return this.itemsData.durability[this.itemsData.itemId.indexOf(id)];
		},
		getDamage:function(id){
				return this.itemsData.damage[this.itemsData.itemId.indexOf(id)];
		},
		getChoppingSpeed:function(id){
				return this.itemsData.cSpeed[this.itemsData.itemId.indexOf(id)];
		},
};
Item.defineAxe = function(id,texture,textureData,name,durability,damage,cSpeed){
		ModPE.setItem(id,texture,textureData,name,1);
		Item.setCategory(id,ItemCategory.TOOL);
		Item.setMaxDamage(id,durability);
		Item.setHandEquipped(id,true);
		Axe.itemsData.itemId.push(id);
		Axe.itemsData.durability.push(durability);
		Axe.itemsData.damage.push(damage-2);
		Axe.itemsData.cSpeed.push(cSpeed);
}
Item.isAxe = function(id){
		if(Axe.itemsData.itemId.indexOf(id)!==-1){
				return true;
		}
		else{
				return false;
		}
}


///# Hoes System #///
var Hoe = {
		itemsData:{itemId:[],durability:[]},	
		useItem:function(x,y,z,i,b,s,iD,bD){
				var SeedDrop = Math.round(Math.random());
				if((b===2||b===3||b===198)&&SeedDrop===0){
						Item.setDamage(i,this.getDurability(i));
						Level.playSound(x,y,z,"step.gravel",16);
						setTile(x,y,z,60,0);
				}
				else if((b===2||b===3||b===198)&&SeedDrop===1){
						Item.setDamage(i,this.getDurability(i));
						Level.playSound(x,y,z,"step.gravel",16);
						Level.dropItem(x+0.5,y+1,z+0.5,0,295,1,0);
						setTile(x,y,z,60,0);
				}
		},		
		getDurability:function(id){
				return this.itemsData.durability[this.itemsData.itemId.indexOf(id)];
		},
};
Item.defineHoe = function(id,texture,textureData,name,durability){
		ModPE.setItem(id,texture,textureData,name,1);
		Item.setCategory(id,ItemCategory.TOOL);
		Item.setMaxDamage(id,durability);
		Item.setHandEquipped(id,true);
		Hoe.itemsData.itemId.push(id);
		Hoe.itemsData.durability.push(durability);
}
Item.isHoe = function(id){
		if(Hoe.itemsData.itemId.indexOf(id)!==-1){
				return true;
		}
		else{
				return false;
		}
}



              //==========NOCHE==========\\

/* Living in the Skies 2 -- Develeoper Edition

by MICAHMINER

©MICAHMINER
©MICAHMINER Modding™
©MicahTheManiac
/==\
TAMPERING WITH THE SOURCE CODE IS NOT ALLOWED UNLESS IT IS FOR PERSONAL USE AND IS NOT RELEASED TO THE PUBLIC!

DO NOT STEAL/REPOST THIS MODPACK OR THE SOURCE CODE TO ANYONE!

Thank you;
-Micah Thompson

©MICAHMINER
©MICAHMINER Modding™
©MicahTheManiac
\==/

All Mods used with permission from creator.
Mods: (Mods marked with a "×" are officially part of this pack)
× Elemental Alchemist Mod - by MICAHMINER ×
× Easy Tool Coding API - by Taquelos | OPEN SOURCE FOR ALL MODDERS ×
  Gold Into Diamonds 3 - by MICAHMINER (been modified WITH permission)
*/

/*Mod: Living In The Skies (CORE)*/

var dirt = [904,904,904,371,295,371,362,361,905,905,903,903,903,903];
var sand = [904,903,904,903,905,905,361,351,905,371,371,371,371,371];
var gravel = [318,318,318,903,371,904,905,263,263,351,351,351,264,388];
var nether = [331,331,904,904,903,905,348,348,905,907,900,901,900,908];


//Items

ModPE.setItem(900, "lits2-bloodstone", 0, "Bloodstone");
ModPE.setItem(901, "lits2-moonstone", 0, "Moonstone");
ModPE.setItem(902, "lits2-dironingot", 0, "Dark Iron Ingot");
ModPE.setItem(903, "lits2-dironnug", 0, "Dark Iron Nugget");
ModPE.setItem(904, "lits2-ironnuggetrms", 0, "Iron Nugget");
ModPE.setItem(905, "lits2-usteelnug", 0, "Unstable Steel Nugget");
ModPE.setItem(906, "lits2-unstablesteel", 0, "Unstable Steel Ingot");
ModPE.setItem(907, "lits2-infernostone", 0, "Infernium");
ModPE.setItem(908, "lits2-meteorite", 0, "Stellatite");
ModPE.setItem(909, "lits2-mysteriousmagic", 0, "Mysterious Magic", 16);
ModPE.setItem(910, "lits2-blooddiamond", 0, "Blood Diamond");
ModPE.setItem(911, "lits2-trapnetf", 0, "Trapping Net Frame", 16);
ModPE.setItem(912, "lits2-trapnet", 0, "Trapping Net", 1);
ModPE.setItem(913, "lits2-tnfull", 0, "Trapping Net: " + ChatColor.GREEN + "[Trapped Soul]");
ModPE.setItem(914, "lits2-craft", 0, "Transmutating Plate", 1);
ModPE.setItem(915, "lits2-crushore", 0, "Crushed Iron Ore", 16);
ModPE.setItem(916, "lits2-crushore", 1, "Crushed Gold Ore", 16);
ModPE.setItem(917, "lits2-goldbucket", 0, "Bucket of Gold Dust", 1);
ModPE.setItem(918, "lits2-goldbucket", 1, "Bucket of 16 Gold Dust", 1);
ModPE.setItem(919, "lits2-diamondshard", 0, "Diamond Shard");
ModPE.setItem(920, "lits2-golddust", 0, "Gold Dust");

//Blocks

Block.defineBlock(221, "Compressed Cobblestone", [["lits2-compcob", 0]],4,false,0);
Block.setDestroyTime(221, 2.5);

Block.defineBlock(222, "Compressed Dirt", [["lits2-compdirt", 0]],3,false,0);
Block.setDestroyTime(222, 0.7);

Block.defineBlock(223, "Compressed Gravel", [["lits2-compgrav", 0]],13,false,0);
Block.setDestroyTime(223, 0.7);

Block.defineBlock(224, "Compressed Netherrack", [["lits2-compneth", 0]],87,false,0);
Block.setDestroyTime(224, 0.7);

Block.defineBlock(225, "Compressed Sand", [["lits2-compsand", 0]],12,false,0);
Block.setDestroyTime(225, 0.8);

Block.defineBlock(226, "Compressed Soul Sand", [["lits2-compsand", 1]],88,false,0);
Block.setDestroyTime(226, 0.8);

Block.defineBlock(214, "Bloodstone Ore", [["lits2-bloodore", 0]],16,false,0);
Block.setDestroyTime(214, 3.0);

Block.defineBlock(215, "Moonstone Ore", [["lits2-moonore", 0]],16,false,0);
Block.setDestroyTime(215, 2.5);

Block.defineBlock(216, "Inferno Ore", [["lits2-infernoore", 0]],57,false,0);
Block.setDestroyTime(216, 1.9);

Block.defineBlock(217, "Dark Iron Ore", [["lits2-diron", 0]],42,false,0);
Block.setDestroyTime(217, 2.8);

Block.defineBlock(218, "Stellatite Stone" + ChatColor.YELLOW + "\n[Meteorite]", [["lits2-stellatite", 0]],49,true,0);
Block.setDestroyTime(218, 15.0);

Block.defineBlock(219, "Ustable Steel Alloy", [["lits2-alloy", 0]],49,false,0);
Block.setDestroyTime(219, 4.7);

Block.defineBlock(190, "EXPERIMENTAL! DO NOT BREAK!", [["lits2-chance", 0]],19,false,0);
Block.setDestroyTime(190, 0.0);

Block.defineBlock(227, "Cobbled Ore", [["lits2-emptyore", 0]],1,false,0);
Block.setDestroyTime(227, 1.2);

Block.defineBlock(228, "Bloodstone Block", [["lits2-bloodstoneblock", 0]],16,false,0);
Block.setDestroyTime(228, 3.0);

Block.defineBlock(229, "Moonstone Block", [["lits2-moonblock", 0]],16,false,0);
Block.setDestroyTime(229, 2.5);

Block.defineBlock(230, "Infernium Block", [["lits2-infernoblock", 0]],57,false,0);
Block.setDestroyTime(230, 1.9);

Block.defineBlock(231, "Dark Iron Block", [["lits2-dironblock", 0]],42,false,0);
Block.setDestroyTime(231, 2.8);

Block.defineBlock(232, "Ustable Steel Block", [["lits2-unsteelb", 0]],49,false,0);
Block.setDestroyTime(232, 4.7);

Block.defineBlock(210, "Gravel Sieve", [["furnace", 3], ["lits2-gentop" , 1], ["furnace" , 2], ["furnace", 2], ["furnace", 2], ["furnace", 2]],61,false,0);
Block.setDestroyTime(210, 1.5);
Block.setShape(210, 0, 0, 0, 1, 0.8, 1);

Block.defineBlock(209, "Transmutating Generator", [["iron_block", 0], ["lits2-gentop" , 0], ["iron_block" , 0], ["iron_block", 0], ["iron_block", 0], ["iron_block", 0]],42,false,0);
Block.setDestroyTime(209, 1.5);
Block.setShape(209, 0, 0, 0, 1, 0.8, 1);

//Crafting Recipes - Blocks
Item.addShapedRecipe(221, 1, 0, ["nnn", "nnn", "nnn"], ["n", 4, 0]);
Item.addShapedRecipe(222, 1, 0, ["nnn", "nnn", "nnn"], ["n", 3, 0]);
Item.addShapedRecipe(223, 1, 0, ["nnn", "nnn", "nnn"], ["n", 13, 0]);
Item.addShapedRecipe(224, 1, 0, ["nnn", "nnn", "nnn"], ["n", 87, 0]);
Item.addShapedRecipe(225, 1, 0, ["nnn", "nnn", "nnn"], ["n", 12, 0]);
Item.addShapedRecipe(226, 1, 0, ["nnn", "nnn", "nnn"], ["n", 88, 0]);

Item.addCraftRecipe(4, 9, 0, [221, 1, 0]);
Item.addCraftRecipe(3, 9, 0, [222, 1, 0]);
Item.addCraftRecipe(13, 9, 0, [223, 1, 0]);
Item.addCraftRecipe(87, 9, 0, [224, 1, 0]);
Item.addCraftRecipe(12, 9, 0, [225, 1, 0]);
Item.addCraftRecipe(88, 9, 0, [226, 1, 0]);

Item.addFurnaceRecipe(216, 907, 0);
Item.addFurnaceRecipe(217, 902, 0);
Item.addFurnaceRecipe(218, 908, 0);
Item.addFurnaceRecipe(219, 906, 0);

Item.addShapedRecipe(219, 1, 0, ["mmm", "doi", "mmm"], ["o", 227, 0, "i", 907, 0, "d", 902, 0, "m", 909, 0]);
Item.addShapedRecipe(909, 6, 0, ["b m", "m b", "b m"], ["b", 900, 0, "m", 901, 0]);
Item.addShapedRecipe(910, 8, 0, ["bdb", "d d", "bdb"], ["b", 900, 0, "d", 264, 0]);
Item.addShapedRecipe(914, 1, 0, ["mdm", "dcd", "mdm"], ["d", 910, 0, "m", 909, 0, "c", 58, 0]);

Item.addShapedRecipe(209, 1, 0, ["cdc", "ipi", "iii"], ["c", 4, 0, "p", 914, 0, "i", 265, 0, "d", 125, 0]);
Item.addShapedRecipe(210, 1, 0, ["cfc", "cic", "cmc"], ["c", 4, 0, "f", 61, 0, "i", 907, 0, "m", 901, 0]);
Item.addShapedRecipe(15, 1, 0, ["cc ", "cc ", "   "], ["c", 915, 0]);
Item.addShapedRecipe(14, 1, 0, ["cc ", "cc ", "   "], ["c", 916, 0]);

Item.addShapedRecipe(264, 1, 0, ["nnn", "nnn", "nnn"], ["n", 919, 0]);
Item.addShapedRecipe(920, 6, 0, [" n ", " n ", " n "], ["n", 371, 0]);
Item.addShapedRecipe(917, 1, 0, ["nnn", "nbn", "nnn"], ["n", 920, 0, "b", 325, 0]);
Item.addShapedRecipe(918, 1, 0, ["nnn", "nbn", "nnn"], ["n", 920, 0, "b", 917, 0]);

Item.addShapedRecipe(228, 1, 0, ["nnn", "nnn", "nnn"], ["n", 900, 0]);
Item.addShapedRecipe(229, 1, 0, ["nnn", "nnn", "nnn"], ["n", 901, 0]);
Item.addShapedRecipe(230, 1, 0, ["nnn", "nnn", "nnn"], ["n", 907, 0]);
Item.addShapedRecipe(231, 1, 0, ["nnn", "nnn", "nnn"], ["n", 902, 0]);
Item.addShapedRecipe(232, 1, 0, ["nnn", "nnn", "nnn"], ["n", 906, 0]);

Item.addCraftRecipe(900, 9, 0, [228, 1, 0]);
Item.addCraftRecipe(901, 9, 0, [229, 1, 0]);
Item.addCraftRecipe(907, 9, 0, [230, 1, 0]);
Item.addCraftRecipe(902, 9, 0, [231, 1, 0]);
Item.addCraftRecipe(906, 9, 0, [232, 1, 0]);

/*Mod: Elemental Alchemist*/

//Items
ModPE.setItem(850, "elal-redstone", 0, "Redstone Alchemist Orb", 16)
ModPE.setItem(851, "elal-coal", 0, "Coal Alchemist Orb", 16)
ModPE.setItem(852, "elal-iron", 0, "Iron Alchemist Orb", 16)
ModPE.setItem(853, "elal-gold", 0, "Gold Alchemist Orb", 16)
ModPE.setItem(854, "elal-diamond", 0, "Diamond Alchemist Orb", 16)
ModPE.setItem(855, "elal-emerald", 0, "Emerald Alchemist Orb", 16)

Block.defineBlock(220, "Elemental Alchemist Gateway", [["reactor_core", 1]],2,false,0);
Block.setDestroyTime(220, 1.5);

Item.addShapedRecipe(850, 1, 0, ["bfb", "fcf", "bfb"], ["c", 331, 0, "f", 377, 0, "b", 152, 0]);
Item.addShapedRecipe(851, 1, 0, ["bfb", "fcf", "bfb"], ["c", 850, 0, "f", 377, 0, "b", 173, 0]);
Item.addShapedRecipe(852, 1, 0, ["bfb", "fcf", "bfb"], ["c", 851, 0, "f", 377, 0, "b", 42, 0]);
Item.addShapedRecipe(853, 1, 0, ["bfb", "fcf", "bfb"], ["c", 852, 0, "f", 377, 0, "b", 41, 0]);
Item.addShapedRecipe(854, 1, 0, ["bfb", "fcf", "bfb"], ["c", 853, 0, "f", 377, 0, "b", 57, 0]);
Item.addShapedRecipe(855, 1, 0, ["bfb", "fcf", "bfb"], ["c", 854, 0, "f", 370, 0, "b", 388, 0]);
Item.addShapedRecipe(220, 1, 0, ["bfb", "fcf", "bfb"], ["c", 15, 0, "f", 76, 0, "b", 351, 4]);


/*function useItem -- ALL MODS*/
function useItem(x, y, z, itemId, blockId, side) {
//Living in the Skies 2

if(itemId==13&&blockId==210){
removeItem(13, 1, 0);
Level.dropItem(x, y+1, z, 0, 331, 2)
Level.dropItem(x, y+1, z, 0, 915, 3)
Level.dropItem(x, y+1, z, 0, 916, 1)
Level.dropItem(x, y+1, z, 0, 371, 4)

}

if(itemId==223&&blockId==210){
removeItem(223, 1, 0);
Level.dropItem(x, y+1, z, 0, 331, 10)
Level.dropItem(x, y+1, z, 0, 915, 27)
Level.dropItem(x, y+1, z, 0, 916, 9)
Level.dropItem(x, y+1, z, 0, 371, 20)

}

if(itemId==152&&blockId==209){
removeItem(152, 1, 0);
Level.dropItem(x, y+1, z, 0, 16, 3)
}

if(itemId==173&&blockId==209){
removeItem(173, 1, 0);
Level.dropItem(x, y+1, z, 0, 15, 3)
}

if(itemId==42&&blockId==209){
removeItem(42, 1, 0);
Level.dropItem(x, y+1, z, 0, 14, 3)
}

if(itemId==41&&blockId==209){
removeItem(41, 1, 0);
Level.dropItem(x, y+1, z, 0, 56, 3)
}

if(itemId==57&&blockId==209){
removeItem(57, 1, 0);
Level.dropItem(x, y+1, z, 0, 129, 3)
}

if(itemId==917&&blockId==209){
Entity.setCarriedItem(getPlayerEnt(),325,1,0);
Level.dropItem(x, y+1, z, 0, 919, 3)
}

if(itemId==918&&blockId==209){
Entity.setCarriedItem(getPlayerEnt(),325,1,0);
Level.dropItem(x, y+1, z, 0, 919, 6)
}


//Elemental Alchemist

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

if(itemId==853&&blockId==233&&
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

/*Destroy Block Function - ALL MODS*/

function destroyBlock(x, y, z, side){
var random = Math.floor((Math.random()*2)+1);

if (getTile(x,y,z) == 214){
setTile(x,y,z,0)
preventDefault()
Level.dropItem(x,y,z,0,900,1);
Level.dropItem(x,y,z,0,227,1);
}

if (getTile(x,y,z) == 215){
setTile(x,y,z,0)
preventDefault()
Level.dropItem(x,y,z,0,901,1);
Level.dropItem(x,y,z,0,227,1);
}

if(Level.getTile(x,y,z)==190){
setTile(x,y,z,0)
switch(random){

case 1:
Level.dropItem(x, y, z, 0, 264, 10)

case 2:
Level.spawnMob(x,y,z,65);
Level.spawnMob(x+1,y,z,65);
Level.spawnMob(x+1,y,z,65);

}}


}

//modTick - all mods
function modTick(){
if (getCarriedItem()==190){

ModPE.showTipMessage("WARNING: This Block is Experimental! DO NOT BREAK!")
}}

/*JoinWorld - LITS2 + MODS*/
function newLevel(){

clientMessage("|==| Living In The Skies - Modpack |==|");
clientMessage("Version: " + ChatColor.RED + "Dev 1.0 [LITS2beta: -0.1.2]")
clientMessage("Assembled by: " + ChatColor.BLUE + "MICAHMINER/MicahTheManiac")

print("[LITS2 is calling Mods...] \nElemental Alchemist v.1.0 by MICAHMINER")


}

/*Health Var. - ALL MODS*/
function lits2_tooluse(maxDamage,id) {
var pcid=Player.getCarriedItemData();
if(pcid!==maxDamage){
Entity.setCarriedItem(getPlayerEnt(),id,1,pcid+1);
}else if(pcid==maxDamage) {
Entity.setCarriedItem(getPlayerEnt(),0,0,0);
}}

//removeItem function
function removeItem(item, amount, data){
var count = Player.getCarriedItemCount();
var data = Player.getCarriedItemData();
var newcount = count - amount;
Entity.setCarriedItem(Player.getEntity(), parseInt(item), newcount, data);

if (count == 1){
Entity.setCarriedItem(getPlayerEnt(),0,0,0);
}}