function dRoll(){return(Math.floor(Math.random()*6)+1)};//random number from 1-6.
function dThrow(){ var roll1 = dRoll(); var roll2 = dRoll(); var rolls = [roll1 , roll2]; return (rolls); };//simulates the casting of 2d6.
var doubles=1;//pre-increments the doubles count to 1
var message="";//prepares an output variable
var rolls = [];//prepares an array to accept input from dThrow function
do {rolls.unshift(dThrow());//throws the dice, appends the output as an array in rolls[0]
	message +="<p>" + rolls[0][0] + " + " + rolls[0][1] + "  Move " + (rolls[0][0]+rolls[0][1]) + " spaces.</p>";
		if (rolls[0][0]===rolls[0][1]){//checks for doubles
			if (doubles === 3){//checks for third instance of doubles in one turn
				message+= '<p>Third Doubles in one turn.  GO TO JAIL!!!</p>'; } 
			else { message += '</p>Doubles! </p>';}		
			doubles += 1;//increments doubles count up
		} else { break;	}
	}
 while (doubles > 0 && doubles < 4)//provides conditional by which program decides whether or not to continue
console.log(message);
document.write(message);

