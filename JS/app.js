$(() => {

  // classes

  class Creature {
    constructor(name, cost, attackPoints, defensePoints, arrPlace) {
      this.name = name;
      this.cost = cost;
      this.attackPoints = attackPoints;
      this.defensePoints = defensePoints;
      this.arrPlace = arrPlace;
      this.creatureID = 0;
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
        $('<div>').addClass('card').appendTo('.playerArea1 .hand').text(card.name + ' cost: ' + card.cost).append('</br><button class="attack">A</button>', '</br><button  class="defend">B</button>').attr(card).attr('id', game.creaturesBuilt);
        card.creatureID = this.creaturesBuilt;
      } else if (targetPlayer === player2) {
        $('<div>').addClass('card').appendTo('.playerArea2 .hand').text(card.name + ' cost: ' + card.cost).append('</br><button class="attack">A</button>', '</br><button class="defend">B</button>').attr(card).attr('id', game.creaturesBuilt);
        card.creatureID = this.creaturesBuilt;
      }
    },

    dealCard(targetPlayer, card) {
      targetPlayer.hand.push(card);
      this.buildCard(targetPlayer, card);
      // game.creaturesBuilt += 1;
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


    startGame(targetPlayer) {
      console.log('Game started!');
      this.currentPlayersTurn = targetPlayer;
      targetPlayer.mana += 1;
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
      let a = Math.floor((Math.random() * game.availableCreatures.length));
      console.log(a);
      let card = game.availableCreatures[a];
      game.dealCard(targetPlayer, card);
      game.updateMana(targetPlayer);
      game.updateMana(targetPlayer);
      console.log(targetPlayer);

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
        console.log(card);
        console.log(card.name + " played!");
        console.log("remaining mana:  " + targetPlayer.mana);
        let t = targetPlayer.hand.indexOf(card);
        targetPlayer.hand.splice(t, 1);
        console.log("You now have ", targetPlayer.hand, " remaining in your hand");
        console.log(card.creatureID);
      // } else {
        // need to change to message on DOM
        // console.log("not enough mana");
      // }
    },

    setAttackComp(card) {
      if (card.canAttack === true) {
        console.log("computer attacking with " + card.name);
        this.attackers.push(card);
        console.log(this.attackers);
        let $computerSelectedCard = "#" + card.creatureID;
        $('.battleField').append($($computerSelectedCard));
      } else {
        console.log('can not attack');
      }
    },

    compTurn() {
      console.log(player2.hand.length);
      let a = Math.floor((Math.random() * (player2.hand.length)));
      console.log(a);
      let card = player2.hand[a];
      console.log(card);
      game.playCard(player2, card);
      console.log("the creature that was played is:", card.creatureID);
      let $computerSelectedCard = "#" + card.creatureID;
      $('.playerArea2 .inPlay').append($($computerSelectedCard));
      game.setAttackComp(card);

    },



    setAttack(target) {
      if (target.canAttack === true) {
        this.attackers.push(target);
        let $selectedCard = "#" + target.creatureID;
        $('.playerArea1 .battleField').append($($selectedCard));
      } else {
        console.log('can not attack');
      }
    },

    setDefenders(card) {
      if (card.canDefend === true) {
        this.defenders.push(card);
        console.log(this.defenders);
      } else {
        console.log('can not defend');
      }
    },

    attackPhase() {
      let x = this.defenders[0];
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
// need to set up seperate graveyards

      for (let i=0; i<this.defenders.length; i++) {
        console.log(i);
        if (this.defenders[i].isDead == true) {
          let $card = "#" + this.defenders[i].creatureID;
          $('.playerArea1 .graveyard').append($($card));
          console.log($card);
          let p1 = player1.hand.indexOf(this.defenders[i]);
          let p2 = player2.hand.indexOf(this.defenders[i]);
          player1.cardsInPlay.splice(p1, 1);
          player2.cardsInPlay.splice(p2, 1);
        } else {
          console.log('nothing done');
      };
      };

      for (let i=0; i<this.attackers.length; i++) {
        console.log(i);
        if (this.attackers[i].isDead == true) {
          let $card = "#" + this.attackers[i].creatureID;
          $('.playerArea1 .graveyard').append($($card));
          console.log($card);
          let p1 = player1.hand.indexOf(this.attackers[i]);
          let p2 = player2.hand.indexOf(this.attackers[i]);
          player1.cardsInPlay.splice(p1, 1);
          player2.cardsInPlay.splice(p2, 1);
      } else {
        console.log('nothing done');
    };
    };
  },

    isWon() {

    },

    // resetGame() {
    //
    // }

  }


  // listening
  $('.start').on('click', () => {
    game.startGame(player1);
    game.roundBegin(player1);
    // game.turnBegin(player1);
    // game.updateMana(player1);
    // game.updateHealth(player1);
  });



  $('.hand').on('click', '.card', (e) => {
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
      $(e.currentTarget).closest('div').appendTo(".playerArea1 .inPlay");
      game.updateMana(player1);
    // }
    // else {
    //   alert('not enough mana');
    // }
  });

  $('.inPlay').on('click', '.attack', (e) => {
    // when clicking A again, needs to return card to In Play
    if (card.canAttack == true) {
      $(e.currentTarget).closest('.card').appendTo(".battleField");
      game.setAttack(this);
    } else {
      alert('can not attack')
    };
  });

  $('.inPlay').on('click', '.defend', (e) => {
    // let i = $(e.currentTarget).closest('div').attr('canDefend');
    // console.log(i);
    // if (i == true) {
      // let x = $(e.currentTarget).closest('.card').attr('creatureID');
      // console.log(x);
      $(e.currentTarget).closest('div').appendTo(".battleField");
      let i = $(e.currentTarget).closest('.card').attr('arrPlace');
      console.log(i);
      let card = game.availableCreatures[i];
      console.log(card);
      // let card = $(e.currentTarget).closest('card');
      // console.log(card1);
      // console.log(e.currentTarget);
      // console.log($(e.currentTarget).closest('div'));
      // let card = $("#" + $(e.currentTarget).closest('.card').attr('creatureID'));

      // console.log($($selectedCard));
      // let card = $("");
      // console.log(y);
      // console.log($($selectedCard));
      // $('.playerArea2 .inPlay').append($($computerSelectedCard));
      // console.log(e.currentTarget);
      // console.log($(e.currentTarget).closest('div'));
      // console.log(this);

      game.setDefenders(card);
      console.log(game.defenders[0]);
      // alert('can not defend')
      // } else if (i==false) {
    }
  );


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
    game.compTurn();
  });

  $('.battle').on('click', () => {
    console.log("battle clicked");
    console.log(game.attackers[0]);
    console.log(game.defenders[0]);
    game.attackPhase();
    }
  );


// functionality doesn't work yet
  $('.reset').on('click', () => {
    console.log("reset");
    game.startGame();
  });


  // test code
// console.log(game.availableCreatures.length);
// let a = Math.floor((Math.random() * game.availableCreatures.length));
// console.log(a);
// console.log(game.defenders[0].creatureID);


});
