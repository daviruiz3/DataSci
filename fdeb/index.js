var data = []
var harry = []
var sarah = []
var eveie = []
var peter = []
var mario = []
var james = []
var bobby = []
var alice = []
var roger = []
var maddy = []
var sonny = []
var johan = []
var henry = []
var elric = []

var data = [harry, sarah, eveie, peter, mario, james, bobby, alice, roger, maddy, sonny, johan, henry, elric]

harry[0] = ['Harry','Sally',1.2]
harry[1] = ['Harry','Mario',1.3]
harry[2] = ['Harry','Carol',0.7]
harry[3] = ['Harry','Nicky',0.8]
harry[4] = ['Harry','Lynne',0.5]
harry[5] = ['Harry','Eveie',0.1]

sarah[0] = ['Sarah','Alice',0.2]
sarah[1] = ['Sarah','James',1.9]

eveie[0] = ['Eveie','Alice',0.5]
eveie[1] = ['Eveie','Harry',2.0]

peter[0] = ['Peter','Alice',1.6]
peter[1] = ['Peter','Johan',0.7]

mario[0] = ['Mario','Alice',0.4]

james[0] = ['James','Alice',0.6]
james[1] = ['James','Roger',1.5]
james[2] = ['James','Sarah',1.5]
james[3] = ['James','Maddy',0.5]

bobby[0] = ['Bobby','Frank',0.8]

alice[0] = ['Alice','Mario',0.7]
alice[1] = ['Alice','Peter',1.1]
alice[2] = ['Alice','Eveie',0.5]
alice[3] = ['Alice','Sarah',0.6]

roger[0] = ['Roger','James',1.1]

maddy[0] = ['Maddy','James',0.3]

sonny[0] = ['Sonny','Roger',0.5]

johan[0] = ['Johan','Peter',1.6]

henry[0] = ['Henry','Mikey',0.4]

elric[0] = ['Elric','Mikey',0.6]

var c = document.getElementById("fdeb");
var ctx = c.getContext("2d");


for(var i=0; i<data.length; i++) {
	//console.log(data[i].length);
	
	for(var j=0; j<data[i].length; j++) {
		ctx.beginPath();
		console.log(data[i][j][2]);
		ctx.arc(15+15*j*, 10+15*i, 5, 0, 2*Math.PI);
		ctx.stroke();
	}
}


