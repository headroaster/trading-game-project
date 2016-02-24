//card shuffler

var deck = [ 
	card1 = {
				caption: 'Take a ride on the Reading Railroad.  If you pass go collect $200', 
				drawn: false, 
				effect: function (){}
			},
	card2 = {
				caption: 'Bank pays you dividend of $50 ',
				 drawn: false,
				  effect: function (){
				  }},
	card3 = {
				caption: 'Advance to Illinois Avenue ',
				 drawn: false,
				  effect: function (){
				  }},
	card4 = {
				caption: 'Your building and loan matures.  Collect $150 ',
				 drawn: false,
				  effect: function (){
				  }},
	card5 = {
				caption: 'Get out of jail free card ',
				 drawn: false,
				  effect: function (){
				  }}, 
	card6 = {
				caption: 'Make general repairs on all your property.  Pay $25 for each house, Pay $100 for each hotel',
				 drawn: false,
				  effect: function (){
				  }},
	card7 = {
				caption: 'Advance token to the nearest railroad and pay the owner twice the rental to which he is otherwise entitled. If railroad is unowned, you may buy it from the bank',
				 drawn: false,
				  effect: function (){
				  }},
	card8 = {
				caption: 'Pay poor tax of $15 ',
				 drawn: false,
				  effect: function (){
				  }},
	card9 = {
				caption: 'Take a walk on the Boardwalk ',
				 drawn: false,
				  effect: function (){
				  }},
	card10 = {
				caption: 'Advance to St. Charles Place',
				 drawn: false,
				  effect: function (){
				  }},
	card11 = {
				caption: 'You have been elected chairman of the board, Pay each player $50',
				 drawn: false,
				  effect: function (){
				  }},
	card12 = {
				caption: 'Advance token to nearest utility If unowned, you may buy it from the bank If owned, throw the dice and pay owner a total of 10 times the amount thrown',
				 drawn: false,
				  effect: function (){
				  }},
	card13 = {
				caption: 'Go back 3 spaces',
				 drawn: false,
				  effect: function (){
				  }},
	card14 = {
				caption: 'Advance to GO! Collect $200 dollars',
				 drawn: false,
				  effect: function (){
				  }},
	card15 = {
				caption: 'Go directly to jail',
				 drawn: false,
				  effect: function (){
				  }},
	card16 = {
				caption: 'Advance token to the nearest railroad and pay the owner twice the rental to which he is otherwise entitled. If railroad is unowned, you may buy it from the bank',
				 drawn: false,
				  effect: function (){
				  }}
    ];
    
function draw (){ 
	var success = false;
	while (success===false) { 
		var cardsleft = false;
		var howmany = 0;
		var runs = 0;
		card = deck[Math.floor(Math.random()*deck.length)];
		if (card.drawn === false) 
			{ card.drawn = true;
			     success = true;
			} else {}
	
		for(i=0;i<deck.length;i++) {
			if (deck[i].drawn !== true) {
				cardsleft = true;
				howmany +=1;
			}
		}
		if (cardsleft === false) {
			for(k=0;k<deck.length;k++) {
				deck[k].drawn = false;
				console.log(k + 'RESET!!!');
			}
			} else { 
				console.log(howmany + ' cards left')
		}	
	} 
	console.log(card.caption);
}


draw()

