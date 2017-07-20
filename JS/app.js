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
        this.canAttack = true;
        this.canDefend = true;
        this.roundsInPlay = 0;
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
    const archer = new Creature("Archer", 1, 1, 2);

    // gameplay

  const game = {
    roundNumber: 0,
    attackers: [],
    defenders: [],
    availableCreatures: [ghost, archer, ghost, archer, ghost, ghost, ghost],

    // flipCoin() {
    //
    // }

    // assignDeck() {
    //
    // }

  buildCard(card) {
    $('<div>').addClass('card').appendTo('.playerArea1 .hand').text(card.name + ' cost: ' + card.cost).append('</br><button class="attack">A</button>','</br><button class="defend">B</button>');
  },

  dealCard(targetPlayer, card) {
    targetPlayer.hand.push(card);
    this.buildCard(card);
  },

  dealFirstHand(targetPlayer) {
    for (let i = 0; i < 3; i++) {
      // this needs to be random from either deck or availableCreatures
      game.dealCard(targetPlayer, game.availableCreatures[i]);
    };
  },

  updateMana(targetPlayer) {
    if (targetPlayer === player1) {
    $('.manaStats1').text('Mana: ' + targetPlayer.mana);
  } else if (targetPlayer === player2) {    $('.manaStats2').text('Mana: ' + targetPlayer.mana);
  }
},

  updateHealth(targetPlayer) {
    if (targetPlayer === player1) {
   $('.healthStats1').text('Health: ' + targetPlayer.healthPoints);
 } else if (targetPlayer === player2) {
   $('.healthStats2').text('Health: ' + targetPlayer.healthPoints);
 }
},


    startGame() {
      console.log('Game started!');
      game.dealFirstHand(player1);
      game.updateHealth(player1);
      game.updateHealth(player2);
      game.updateMana(player1);
      game.updateMana(player2);
    },

    roundBegin() {
      this.roundNumber += 1;
      console.log("this is round# " + this.roundNumber);
    },

    turnBegin(targetPlayer) {
      targetPlayer.mana += 1;
      game.updateMana(targetPlayer);
      game.updateMana(targetPlayer);

      // need to configure to ensure a max of 10 using if statements

    },

    playCard(card) {
      if (card.cost <= player1.mana) {
        card.isInPlay = true;
        // need to set method for isInPlay to display card
        player1.mana -= card.cost;
        player1.cardsInPlay.push(card);
        console.log(card.name + " played!");
        console.log("remaining mana:  " + player1.mana);
        let t = player1.hand.indexOf(card);
        player1.hand.splice(t, 1);
        console.log("You now have " + player1.hand + " remaining in your hand");
      } else {
        // need to change to message on DOM
        console.log("not enough mana");
      }
    },

    setAttack(target) {
        if (target.canAttack === true) {
          this.attackers.push(target);
        } else {
          // console.log('can not attack');
        }
    },

    setDefenders(target) {
        if (target.canDefend === true) {
          this.defenders.push(target);
        } else {
          console.log('can not defend');
        }
    },

    attackPhase() {
      let a = this.defenders[0].defensePoints - this.attackers[0].attackPoints;
      let b = this.attackers[0].defensePoints - this.defenders[0].attackPoints;
      if (a <= 0) {
        this.defenders[0].isDead = true;
      };
      if (b <= 0) {
        this.attackers[0].isDead = true;
      };
      console.log(this.defenders[0].isDead);
      console.log(this.attackers[0].isDead);
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
  if (ghost.cost <= player1.mana) {
    game.playCard(ghost);
  $(e.currentTarget).appendTo(".playerArea1 .inPlay");
  game.updateMana(player1);
} else {alert('not enough mana');}
});

$('.inPlay').on('click', '.attack', (e) => {
  // when clicking A again, needs to return card to In Play
  if (ghost.canAttack == true) {
$(e.currentTarget).closest('.card').appendTo(".battleField");
game.setAttack(this);
} else {alert('can not attack')};
});

$('.inPlay').on('click', '.defend', (e) => {
  if (ghost.canDefend == true) {
$(e.currentTarget).closest('.card').appendTo(".battleField");
game.setAttack(this);
} else {alert('can not attack')};
});


$('.battleField .card').click(
    function() {
        alert("Select attacker to defend");
    },
    function() {
      alert('defender matched with attacker ')
    }
);

$('.player1TurnOver').on('click', () => {
  console.log("player 1 turn over");
  game.turnBegin(player2);
});


  // test code




});
