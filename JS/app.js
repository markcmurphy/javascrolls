$(() => {

  // classes

  class Creature {
    constructor(name, cost, attackPoints, defensePoints, arrPlace) {
      this.name = name;
      this.cost = cost;
      this.attackPoints = attackPoints;
      this.defensePoints = defensePoints;
      this.arrPlace = arrPlace;
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
  const ghost = new Creature("ghost", 1, 1, 1, 0);
  const archer = new Creature("Archer", 1, 1, 2, 1);

  // gameplay

  const game = {
    roundNumber: 0,
    attackers: [],
    defenders: [],
    availableCreatures: [ghost, archer],
    currentPlayersTurn: {},
    creaturesBuilt: 0,

    // flipCoin() {
    //
    // }

    // assignDeck() {
    //
    // }

    buildCard(targetPlayer, card) {
      game.creaturesBuilt += 1;
      console.log(this.creaturesBuilt);
      // console.log(card);
      if (targetPlayer === player1) {
        $('<card>').addClass('card').appendTo('.playerArea1 .hand').text(card.name + ' cost: ' + card.cost).append('</br><button class="attack">A</button>', '</br><button class="defend">B</button>').attr('id', game.creaturesBuilt).attr(card);
      } else if (targetPlayer === player2) {
        $('<card>').addClass('card').appendTo('.playerArea2 .hand').text(card.name + ' cost: ' + card.cost).append('</br><button class="attack">A</button>', '</br><button class="defend">B</button>').innerHTML = card;
      }
    },

    dealCard(targetPlayer, card) {
      targetPlayer.hand.push(card);
      this.buildCard(targetPlayer, card);
      game.creaturesBuilt += 1;
      // console.log(this.creaturesBuilt);
      // console.log(card);

      console.log(targetPlayer.hand[0]);
    },



    dealFirstHand(targetPlayer) {
      for (let i = 0; i < 3; i++) {
        let a = Math.floor((Math.random() * game.availableCreatures.length));
        game.dealCard(targetPlayer, game.availableCreatures[a]);
      };
    },

    updateMana(targetPlayer) {
      if (targetPlayer === player1) {
        $('.manaStats1').text('Mana: ' + targetPlayer.mana);
      } else if (targetPlayer === player2) {
        $('.manaStats2').text('Mana: ' + targetPlayer.mana);
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
      game.dealFirstHand(player2);
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
      this.currentPlayersTurn = targetPlayer;
      targetPlayer.mana += 1;
      game.updateMana(targetPlayer);
      game.updateMana(targetPlayer);

      // need to configure to ensure a max of 10 using if statements

    },

    playCard(targetPlayer, card) {
        // if (card.cost <= targetPlayer.mana) {
        console.log(card);
        card.isInPlay = true;
        // need to set method for isInPlay to display card
        targetPlayer.mana -= card.cost;
        targetPlayer.cardsInPlay.push(card);
        console.log(targetPlayer.cardsInPlay);
        console.log(card.name);
        console.log(card.name + " played!");
        console.log("remaining mana:  " + targetPlayer.mana);
        let t = targetPlayer.hand.indexOf(card);
        player1.hand.splice(t, 1);
        console.log("You now have " + targetPlayer.hand + " remaining in your hand");
      // } else {
        // need to change to message on DOM
        // console.log("not enough mana");
      // }
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



  $('.hand').on('click', 'card', (e) => {
    // if (game.card.cost <= game.targetPlayer.mana) {
      // let i = $('a:focus').attr('arrPlace');
      // console.log($(e.currentTarget).attr('arrPlace'));
      let i = $(e.currentTarget).attr('arrPlace');
      console.log(i);
      let card = game.availableCreatures[i];
      console.log(card);
      // let card = $(e.currentTarget).closest('card');
      // console.log(card1);
      // console.log(e.currentTarget);
      // console.log($(e.currentTarget).closest('div'));
      game.playCard(player1, card);
      $(e.currentTarget).closest('card').appendTo(".playerArea1 .inPlay");
      game.updateMana(player1);
    // }
    // else {
    //   alert('not enough mana');
    // }
  });

  $('.inPlay').on('click', '.attack', (e) => {
    // when clicking A again, needs to return card to In Play
    if (ghost.canAttack == true) {
      $(e.currentTarget).closest('.card').appendTo(".battleField");
      game.setAttack(this);
    } else {
      alert('can not attack')
    };
  });

  $('.inPlay').on('click', '.defend', (e) => {
    if (ghost.canDefend == true) {
      $(e.currentTarget).closest('.card').appendTo(".battleField");
      game.setAttack(this);
    } else {
      alert('can not attack')
    };
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


// functionality doesn't work yet
  $('.reset').on('click', () => {
    console.log("reset");
    game.startGame();
  });


  // test code



});
