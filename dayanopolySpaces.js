//non property spaces
var go = {
	name: 'GO!',
	position: 1,
	function pay(){/*will need t pay a player when they land on or pass GO!*/},
};
var justVisiting = {
	name: 'Just Visiting',
	position: 11,
};
var freeParking = {
	name: 'Free Parking',
	position: 21,
	function bonus(){/*will add kitty to active players bank account*/}
};
var goToJail = {
	name: 'Go To Jail!',
	position: 31,
	function busted(){/*sends active player to jail*/}
	
};
var Chance = {
	name: 'Chance',
	position: [8, 23, 37],
	function drawCard(){/*needs to draw 1 of 16 elements from an array*/}
};
var communityChest = {
	name: 'Community Chest',
	position: [3, 18, 34],
	function drawCard(){/*needs to draw 1 of 16 elements from an array*/}
};
var incomeTax = {
	name: 'Income Tax',
	position: 5,
	function calc10PerCent(){/*needs to calculate 10% of active players total worth*/}
	function taxCollector(){/*needs to take either $200 or 10%*/}
};
var luxuryTax = {
	name:'Luxury Tax',
	position: 39,
};

//ownable, not buildable property objects
var readingRR = {
	name: 'Reading Railroad', 
	price: 200, 
	position: 6, 
	isOwned: false
	};
var pennsRR = {
	name: 'Pennsylvania Railroad', 
	price: 200, 
	position: 16, 
	isOwned: false
	};
var boRR = {
	name: 'B&O Railroad', 
	price: 200, 
	position: 26, 
	isOwned: false
	};
var shortRR = {
	name: 'Short Line Railroad',
	price:200, 
	position:36, 
	isOwned: false
	};
var electricCompany = {
	name: 'Electric Company', 
	price: 150, 
	isOwned: false
	};
var waterWorks = {
	name: 'Water Works', 
	price: 150, 
	isOwned: false
	};

//ownable buildable property objects
var baltic = {
	name: 'Baltic', 
	price: 60, 
	position: 2, 
	rent: 2, 
	houseCost: 50, 
	isOwned: false
	}; 
var mediterranean = {
	name: 'Mediterranean', 
	price: 60, 
	position: 4, 
	rent: 4, 
	houseCost: 50, 
	isOwned: false
	};
var oriental = {
	name: 'Oriental', 
	price: 100, 
	position: 7, 
	rent:  6, 
	houseCost: 50, 
	isOwned: false
	};
var vermont = {
	name: 'Vermont', 
	price: 100, 
	position: 9, 
	rent:  6, 
	houseCost: 50, 
	isOwned: false
	};
var connecticut = {
	name: 'Connecticut', 
	price: 120, 
	position: 10, 
	rent: 8, 
	houseCost: 50, 
	isOwned: false
	};
var stCharles = {
	name: 'St Charles', 
	price: 140, 
	position: 12, 
	rent: 10, 
	houseCost: 100, 
	isOwned: false
	};
var states = {
	name: 'States', 
	price: 140, 
	position: 14, 
	rent: 10, 
	houseCost: 100, 
	isOwned: false
	};
var virginia = {
	name: 'Virginia', 
	price: 160, 
	position: 15, 
	rent: 12, 
	houseCost: 100, 
	isOwned: false
	};
var stJames = {
	name:  'St James', 
	price: 180, 
	position: 17, 
	rent: 14, 
	houseCost: 100, 
	isOwned: false
	};
var tennessee = {
	name: 'Tennessee', 
	price: 180, 
	position: 19, 
	rent: 14, 
	houseCost: 100, 
	isOwned: false
	};
var newYork = {
	name: 'New York', 
	price: 200, 
	position: 20, 
	rent: 16, 
	houseCost: 100, 
	isOwned: false
	};
var kentucky = {
	name: 'Kentucky', 
	price: 220, 
	position: 22, 
	rent: 18, 
	houseCost: 150, 
	isOwned: false
	};
var indiana = {
	name: 'Indiana', 
	price: 220, 
	position: 24, 
	rent: 18, 
	houseCost: 150, 
	isOwned: false
	};
var illinois = {
	name: 'Illinois', 
	price: 240, 
	position: 25, 
	rent: 20, 
	houseCost: 150, 
	isOwned: false
	};
var atlantic = {
	name: 'Atlantic', 
	price: 260, 
	position: 27, 
	rent: 22, 
	houseCost: 150, 
	isOwned: false
	};
var ventnor = {
	name: 'Ventnor', 
	price: 260,
	position: 28, 
	rent: 22, 
	houseCost: 150, 
	isOwned: false
	};
var marvinGardens = {
	name: 'Marvin Gardens', 
	price: 280, 
	position: 30, 
	rent: 22, 
	houseCost: 150, 
	isOwned: false
	};
var pacific = {
	name: 'Pacific', 
	price: 300, 
	position: 32, 
	rent: 26, 
	houseCost:200, 
	isOwned: false
	};
var northCarolina = {
	name: 'North Carolina', 
	price: 300, 
	position: 33, 
	rent: 26, 
	houseCost: 200, 
	isOwned: false
	};
var pennsylvania = {
	name: 'Pennsylvania', 
	price: 320, 
	position: 35, 
	rent: 28, 
	houseCost: 200, 
	isOwned: false
	};
var parkPlace = {
	name: 'Park Place', 
	price: 350, 
	position: 38, 
	rent: 35, 
	houseCost: 200, 
	isOwned: false
	};
var boardwalk = {
	name: 'Boardwalk', 
	price: 400, 
	position: 40, 
	rent: 50, 
	houseCost: 200, 
	isOwned: false
	};
