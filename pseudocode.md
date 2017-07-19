Before the game can begin, we will require a player #1 and a player #2 (presumably the comp, at this point). We require a deck of 30 cards for each of the two players, which can be composed of an assortment of different card classes (starting first with "creatures" and then expanding to other classes such as "spells" and "weapons/armor" as time permits). Each player will start with 30 life points, the first player to reach zero will lose the game. Each player will gain 1 "mana" per turn up to a maximum of ten, and these will serve as a currency with which you can play cards in your hand during your term (each card having a different cost of mana). The mana will refresh at the beginning of players' turn and can be used to play cards in hand. Each player will draw one new card at the beginning of turn. Each turn, a round will consist of:




Before game can begin:
Player 1
  Deck of 30 cards: [to be randomly assigned from cards object]
    Number of cards remaining in deck: 30
  Hand: []
    Number of cards in hand: 0
  used cards or "graveyard": []
  life points: 30
  Mana: 0 (max 10)

Player 2
Deck of 30 cards: [to be randomly assigned from cards object] (-1 per turn, to be assigned to hand)
  Number of cards remaining in deck: 30
Hand: [] (+1 per turn, to be assigned from deck. max 10)
  Number of cards in hand: 0
used cards or "graveyard": [] (to be assigned from cards taken out of play)
life points: 30 (-x, the value to be determined by the number of unblocked attack points from enemy creatures targeting player)
Mana: 0 (+1 per turn, max 10) (-x per card played, with x being the cost of that particular card)

Cards from which decks will be composed:
  "creature" cards [class] that possess the following:
    Cost:
    Attack points: will either deal X damage to blocking creature or player upon attack
    Defense points: amount of damage creature can take per turn before being removed from play, will
    attack target:
    defense target:
  As a stretch goal, potentially add spells, armor, weapons, or other classes. Those cards will have special attributes which can alter gameplay by dealing direct damage to create or player, increasing attack points/defense points either temporarily or permanently for creatures, add life points back to a targeted player, etc.

Coin to be flipped to determine which player goes first

Board on which to play game which will consist of the following for each player:
Deck of cards facedown
hand
"graveyard" for discarded cards no longer in play
area for cards in play
"battle ground" between players
available mana count (to be refreshed at the beginning of each turn, max 10)
available life points remaining


1) Player's total available mana points become available for use again +1 up until a max of 10
2) Creatures in play that have attacked last turn become available again.
2) Player "draws" a card from the top of the deck of available cards assuming cards are available in deck and player has <10 cards in hand
3) Player then has the option of playing as many cards from their hand as they have the available mana for. The used mana will come out of total mana count available and can't be used again til the beginning of their next turn. Played creature cards can take no action during their first turn in play. They are able to block opponent's attacks during opponent's next turn but may not attack until the following turn they are in play.
5) Player has the option of attacking opponent with available creature cards in play. Opponent has the option to block attacks with their own creatures in play. The attack points and defense points will be calculated against each other and creatures with <1 defense point remaining are discarded. Attack points above the defense points of blocking creature do not pass to player. Unblocked creatures that attack opponent player will deal an amount of damage equal to their attack points and that value will be subtracted from opponent's total life points value. Attack points against creatures that have successfully blocked are not cumulative and will reset to stated value at end of turn. Attacking creatures are not available to block during opponents turn.
7) At this point, if opponent still has life remaining it will pass to their turn. Else game is over.
