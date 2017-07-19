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


  const player1 = new player();
  const player2 = new player();


  // gameplay
  const game = {
    roundNumber: 0,

    // flipCoin() {
    //
    // }

    // assignDeck() {
    //
    // }

    startGame() {
      for (let i = 0; i < 3; i++) {
        // to be changed later to pull 3 random cards from deck
      player1.hand.push(ghost);
      player2.hand.push(ghost);
      };
    },

    roundBegin() {
      this.roundNumber += 1;
    },

    turnBegin() {
      // need to configure so that +1 card isn't dealt on first turn
      player1.mana += 1; // need to configure to ensure a max of 10 using if statements
      player1.hand.push(ghost);
    },

    playCard() {
      // set peram for target card
      if (ghost.cost <= player1.mana) {
        ghost.isInPlay = true;
        // need to set method for isInPlay to display card
        player1.mana -= ghost.cost;
        // console.log("Ghost played!");
        let t = player1.hand.indexOf(ghost);
        player1.hand.splice(t, 1);
      }
    },

    attackPhase() {

    },

    isWon() {

    },

    // resetGame() {
    //
    // }

  }
  // test code

  game.startGame();
  game.roundBegin();
  // console.log(game.roundNumber);
  game.turnBegin();
  // console.log(player1.hand);
  // console.log(player1.mana);
  // console.log(ghost.isInPlay);
  game.playCard();
  // console.log(player1.mana);
  // successfully subtracted mana from player1
  // successfully played ghost
  // console.log(ghost.isInPlay);
  // successfully changed play status of ghost
  console.log(player1.hand);



  // ideas for how to attack player
  // const hitPlayer = (target) => {target.healthPoints -= 1;
  // };
  // hitPlayer(player1);
  // console.log(player1.healthPoints);

  // end of run on window load
});
