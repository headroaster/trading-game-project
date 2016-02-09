I want to create a tool for keeping track of banking in Monopoly, including each players total bank, position on the board, properties held, houses owned, chance and community choice cards drawn, and the value of the kitty to support the frequently used house rule of putting all penalties and taxes as well as a seed of $500 into the center of the board to be awarded to anyone landing on free parking.  I also want this to implement the auction function in the rules which is commonly ignored.

I will create an automatically executing monopoly game that runs 4 players and determines the ultimate outcome of the game, logging the whole play in a text file.

I will then allow for any of the computer players to be replaced with real players, removing the automation and inserting dialogs allowing real players to submit data about their actual dice rolls and purchase decisions rather than simulating those things, otherwise will leave the function unaltered, resulting in a tool facilitating play for 1-4 players to have a game of monopoly.

to do this, I'll need:

an object: board - containing: 
an ordered list comprised of all of the spaces on the board 
Kitty - contains a running total of all fines and fees paid into the game and not explicitly paid to another player or the bank
Jail - with Retention method - On first, second, and third turns in Jail- player may choose between paying a fine and accessing the Roll method, if fine is paid player exits Jail to Just Visiting and takes their turn, if Roll is accessed and doubles are thrown, player exits Jail to Just Visiting and moves the number of spaces shown on dice continuing to resolve turn as appropriate.  On the first and second turns if doubles are not thrown the turn ends, on the third turn if doubles are not thrown the player will be fined $50, exit Jail to Just Visiting, and moved the number of spaces shown on dice continuing to resolve turn as appropriate.
an array of 16 Chance cards
an array of 16 Community Chest cards
an array of objects - spaces - there will be 40 of these:
1 Go! space, with Pay method - when a player lands on or ticks past this space, $200 will be added to their total bank
1 Just Visiting space
1 Free parking space with Payout method
1 Go To Jail space with Busted method
1 income tax space ith IRS method (collects either $200 or 10% of total value, player chooses) & calcTax method (calculate 10% of the players total value considering bank account balance (which is simply the players total cash right now), and realty account balance (comprised of printed cost of all owned property, mortgaged or not, purchase cost of improvements owned))
1 luxury tax space with flaTax method
2 utilities with offer method & utility rent method
4 railroads with offer method & railroad rent method
3 community chest spaces with a ccCardSelect method
3 chance spaces with chCardSelect method
22 property spaces with offer method & rent method, divided into 8 arrays { purple(Baltic, Mediterranean), cyan(Vermont, Oriental, Connecticut), blue(States, Virginia, St Charles), orange(Tennessee, St. James, New York), red(Kentucky, Illinois, Indiana), yellow(Atlantic, Ventnor, Marvin Garden), green (Pacific, North Carolina, Pennsylvania), indigo(Park Place, Boardwalk)}


an object: bank - containing
a count of all bills in the game
a list of all properties in the game
a count of houses available for purchase
a count of hotels available for purchase

a method - pay - which will add $200 to a players account each time they reach the Go! space.
a method - auction - which will auction off the property in play this turn if first right of refusal is exercised AND a player other than the one who just opted not to buy makes a bid on the property.  This is a no reserve auction.

an array of 4 objects: player - with properties:
number
name
bank account
and methods:
roll - which will call a simulated dice roll and move the player to a new position on the board
buy property - which will remove the necessary funds from the purchasers account and add the appropriate credit to the realty account.
pass buy - which will decline to purchase whichever property was just landed on
request rent - which will request rent from another player
improve property - which will purchase houses or hotels to adorn completed color groups
pay jail fine - available at the BEGINNING of the first, second or third turn where the player begins in Jail.  Moves $50 from player's bank account to kitty, moves player from Jail to Just Visiting, and invites the player to Roll.

