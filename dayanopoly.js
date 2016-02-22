var pName = prompt("What's your name?");

var player = {
	number: 1, 
	name: pName, 
	position: 1, 
	bankAccount: 1500, ownedProperties, 
	buyProperty: function buyProperty(){}, 
};
var html = "";

//non space entities
var kitty = {
	account: 500,
};
var jail = {
	function jailBreak(){}
};
var bank = {};

//property group arrays
var violet=[baltic,mediterranean];
var cyan=[oriental,vermont,connecticut];
var indigo=[stCharles,states,virginia];
var orange=[stJames,tennessee,newYork];
var red=[kentucky,indiana,illinois];
var yellow=[atlantic,ventnor,marvinGardens];
var green=[pacific,northCarolina,pennsylvania];
var blue=[parkPlace,boardwalk];
var railroads=[readingRR,pennsRR,boRR,shortRR];
var utilities=[electricCompany,waterWorks];

//array of property groups
cgroups = [violet, cyan, indigo, orange, red, yellow, green, blue, railroads, utilities];
for (var i=0; i<cgroups.length; i+=1){
	html+= '<p>Look, ' + pName + ' - '
	for (var j=0; j<cgroups[i].length; j+=1){
		html+= '<p>' + cgroups[i][j].name + ', ';
		html+= ' Price: ' + cgroups[i][j].price + ', ';
		html+= ' Space : ' + cgroups[i][j].position + ', ';
		html+= ' Rent While Unimproved: ' + cgroups[i][j].rent + ', </p>';
	};
};
document.write(html);
/*var property(position, name, cost, )*/
