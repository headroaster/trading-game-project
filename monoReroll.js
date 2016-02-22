function dRoll(){return(Math.floor(Math.random()*6)+1)};
function dThrow(){ var roll1 = dRoll(); var roll2 = dRoll(); var rolls = [roll1 , roll2]; return (rolls); };

var doubles=1;
var message="";
var rolls = [];
do {rolls.unshift(dThrow());
	message +="<p>" + rolls[0][0] + " + " + rolls[0][1] + " Move " + (rolls[0][0]+rolls[0][1]) + " spaces.</p>";
		if (rolls[0][0]===rolls[0][1]){
			if (doubles === 3){
				message+= '<p>Third Doubles in one turn.  GO TO JAIL!!!</p>'; } 
			else { message += '</p>Doubles! </p>';}		
			doubles += 1;
		} else { break;	}
	}
 while (doubles > 0 && doubles < 4)

console.log(message);
document.write(message);
