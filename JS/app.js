$(() => {

// creatures

class creature {
  constructor(name, cost, attackPoints, defensePoints, isInPlay, isDead, canAttack) {
  this.name = "";
  this.cost = 0;
  this.attackPoints = 0;
  this.defensePoints = 0;
  this.isInPlay = false;
  this.isDead = false;
  this.canAttack = false;

  }
}

class ghoul extends creature {
  constructor(name, cost, attackPoints, defensePoints, isInPlay, isDead, canAttack) {
  super(name, cost, attackPoints, defensePoints, isInPlay, isDead, canAttack);
  this.name = "Ghoul";
  this.cost = 1;
  this.attackPoints = 1;
  this.defensePoints = 1;
  this.isInPlay = false;
  this.isDead = false;
  this.canAttack = false;
}
}

const ghost = new ghoul;

// players

class player {
  constructor(name, healthPoints, deck, hand, graveyard, mana, cardsInPlay) {
    this.name = "";
    this.healthPoints = 30;
    this.deck = [];
    this.hand = [];
    this.graveyard = [];
    this.mana = 0;
    this.cardsInPlay = [];
  }
}
// this can be moved to new game function later
const player1 = new player();
const player2 = new player();


// class player1 extends player {
//   constructor(name, healthPoints, deck, hand, graveyard, mana, cardsInPlay) {
//   super(name, healthPoints, deck, hand, graveyard, mana, cardsInPlay);
//   this.name = "Player One";
//   this.healthPoints = 30;
//   this.deck = [];
//   this.hand = [ghost];
//   this.graveyard = [];
//   this.mana = 0;
//   this.cardsInPlay = [];
//   }
// }

// class player2 extends player {
//   constructor(name, healthPoints, deck, hand, graveyard, mana, cardsInPlay) {
//   super(name, healthPoints, deck, hand, graveyard, mana, cardsInPlay);
//   this.name = "Player Two";
//   this.healthPoints = 30;
//   this.deck = [];
//   this.hand = [];
//   this.graveyard = [];
//   this.mana = 0;
//   this.cardsInPlay = [];
// }
//
// }





// gameplay
const game = {
  roundNumber: 0,

  // flipCoin() {
  //
  // }

  // assignDeck() {
  //
  // }

  roundBegin (targetPlayer) {
for (let i=0; i<3; i++) {
  // to be changed later to pull 3 random cards from deck
  targetPlayer.hand.push(ghost);
};
  targetPlayer.mana += 1;
  },

  startGame() {

  },

  attackPhase () {

  },

  playCard () {

  },

  isWon () {

  },

  // resetGame() {
  //
  // }

}
// test code

game.roundBegin(player1);
console.log(player1.hand);
console.log(player1.mana);


// ideas for how to attack player
// const hitPlayer = (target) => {target.healthPoints -= 1;
// };
// hitPlayer(player1);
// console.log(player1.healthPoints);

// end of run on window load
});
