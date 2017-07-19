$(() => {

  // classes

  class Creature {
    constructor(name, cost, attackPoints, defensePoints) {
        this.name = name;
        this.cost = cost;
        this.attackPoints = attackPoints;
        this.defensePoints = defensePoints;
        this.isInPlay = false;
        this.isDead = false;
        this.canAttack = false;
        this.defender = [];
      }
    }

    class Player {
      constructor(name) {
        this.name = name;
        this.healthPoints = 30;
        this.deck = [];
        this.hand = [];
        this.graveyard = [];
        this.mana = 0;
        this.cardsInPlay = [];
      }
    }

    const player1 = new Player("Mark");
    const player2 = new Player("Comp");
    const ghost = new Creature("Ghost", 1, 1, 1);

    // gameplay

  const game = {
    roundNumber: 0,
    battlefield: [],
    // currentCreatures: [ghost],

    // flipCoin() {
    //
    // }

    // assignDeck() {
    //
    // }


  dealCard(targetPlayer, card) {
    targetPlayer.hand.push(card);
    $('<div>').addClass('card').appendTo('.hand').text(ghost.name).append('<input type="button" class="play" value="play"/>');
    console.log(targetPlayer.hand);
  },

  dealFirstHand() {
    for (let i = 0; i < 3; i++) {
      game.dealCard(player1, ghost);
      // game.dealCard(player2, ghost);
    };
  },

  updateMana(targetPlayer) {
    $('.manaStats').text('Mana: ' + targetPlayer.mana);
  },

  updateHealth(targetPlayer) {
   $('.healthStats').text('Health: ' + targetPlayer.healthPoints);
  },


    startGame() {
      game.dealFirstHand();
      game.updateHealth(player1);
      game.updateMana(player1);
    },

    roundBegin() {
      this.roundNumber += 1;
    },

    turnBegin(targetPlayer) {
      // need to configure so that +1 card isn't dealt on first turn
      targetPlayer.mana += 1; // need to configure to ensure a max of 10 using if statements

    },

    playCard(card) {
      // set peram for target card
      if (card.cost <= player1.mana) {
        card.isInPlay = true;
        // need to set method for isInPlay to display card
        player1.mana -= card.cost;
        player1.cardsInPlay.push(card);
        console.log("Ghost played!");
        console.log(player1.mana);
        let t = player1.hand.indexOf(card);
        player1.hand.splice(t, 1);
      } else {
        // need to change to message on DOM
        console.log("not enough mana");
      }
    },

    setAttack() {
        if (creature.canAttack === true) {
          this.battlefield.push();
        } else {
          console.log('can not attack');
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


// listening
$('.start').on('click', () => {
  game.startGame();
  game.roundBegin(player1);
  game.turnBegin(player1);
  game.updateMana(player1);
  game.updateHealth(player1);
});

$('.hand').on('click', '.card', (e) => {
  // need to change to cards in play that are clicked don't attempt to put into play again
  console.log('clicked');
  game.playCard(ghost);
  $(e.currentTarget).appendTo(".inPlay");
  // // $('p').attr(ghost.cost);
  game.updateMana(player1);
});



// $('.hand .card').on('click', (e) => {
//   $(e.currentTarget).appendTo(".battleField");




  // test code

  // game.startGame();
  // game.roundBegin();
  // console.log(game.roundNumber);
  // game.turnBegin();
  // console.log(player1.hand);
  // console.log(player1.mana);
  // console.log(ghost.isInPlay);
  // game.playCard();
  // game.playCard();
  // console.log(player1.mana);
  // successfully subtracted mana from player1
  // successfully played ghost
  // console.log(ghost.isInPlay);
  // successfully changed play status of ghost
  // console.log(player1.hand);



  // ideas for how to attack player
  // const hitPlayer = (target) => {target.healthPoints -= 1;
  // };
  // hitPlayer(player1);
  // console.log(player1.healthPoints);

  // end of run on window load
// game.instancesOfGhost();
});
