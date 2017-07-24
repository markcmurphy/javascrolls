$(() => {

  // classes

  class Creature {
    constructor(name, cost, attackPoints, defensePoints, serialNumber) {
      this.name = name;
      // constructor(name, cost, attackPoints, defensePoints) {
      // this.name = name;
      this.cost = cost;
      this.attackPoints = attackPoints;
      this.defensePoints = defensePoints;
      this.serialNumber = serialNumber;
      // this.arrPlace = arrPlace;
      // this.creatureID = creatureID;
      this.isInPlay = false;
      this.isDead = false;
      this.canAttack = true;
      this.canDefend = true;
      this.roundsInPlay = 0;
      this.attackSlot = "";
      this.defenseSlot= "";
      this.isBlocked = false;
    }

  }
const vortex = {
  creatures: [],
  createArcher() {
    const newArcher = new Creature('Archer', 2, 2, 2, this.creatures.length);
    this.creatures.push(newArcher);
    return newArcher;
  },
  createGoblin() {
    const newGoblin = new Creature('Goblin', 1, 1, 1, this.creatures.length);
    this.creatures.push(newGoblin);
    return newGoblin;
  },
  createGolem() {
    const newGolem = new Creature('Golem', 4,3,4, this.creatures.length);
    this.creatures.push(newGolem);
    return newGolem;
  },
  createSludge() {
    const newSludge = new Creature('Sludge', 1, 0, 2, this.creatures.length);
    this.creatures.push(newSludge);
    return newSludge;
  },
  createEnt() {
    const newEnt = new Creature('Ent', 5, 3, 5, this.creatures.length);
    this.creatures.push(newEnt);
    return newEnt;
  },
  findCreature(index) {
    return this.creatures[index];
  }
}

  class Player {
    constructor(name) {
      this.name = name;
      this.healthPoints = 10;
      this.deck = [];
      this.hand = [];
      this.graveyard = [];
      this.mana = 0;
      this.cardsInPlay = [];
      this.a1 = [];
      this.a2 = [];
      this.a3 = [];
      this.a4 = [];
      this.d1 = [];
      this.d2 = [];
      this.d3 = [];
      this.d4 = [];
      this.defenders = [];
      this.attackers = [];
    }
  }

  const player1 = new Player("Mark");
  const player2 = new Player("Comp");

  // gameplay

  const game = {
    roundNumber: 1,
    attackers: [],
    defenders: [],
    availableCreatures: ["goblin", "archer", "golem", "sludge", "ent"],
    currentPlayersTurn: {},
    numberOfTurns: 0,
    // creaturesBuilt: 0,
    // allCreatures: [],

    flipCoin() {
      let availablePlayers = [player1, player2];
      let a = Math.floor((Math.random() * availablePlayers.length));
      let b = availablePlayers[a];
      return b;
    },

    assignDeck(targetPlayer) {
      for (let i = 0; i < 30; i++) {
        let a = Math.floor((Math.random() * game.availableCreatures.length));
        let b = game.availableCreatures[a];
        if (b == "goblin") {
          vortex.createGoblin();
        } else if (b == 'archer') {
          vortex.createArcher();
        } else if (b == 'golem') {
          vortex.createGolem();
        } else if (b == 'sludge') {
          vortex.createSludge();
        } else if (b == 'ent') {
          vortex.createEnt();
        }
        targetPlayer.deck.push(vortex.creatures[i]);
      }
    },

    // buildCard(targetPlayer, card) {
    //   game.creaturesBuilt += 1;
    //   // console.log(this.creaturesBuilt);
    //   if (targetPlayer === player1) {
    //     // game.allCreatures.push(card);
    //     $('<div>').addClass('card').appendTo('.playerArea1 .hand').text(card.name + ' cost: ' + card.cost).append('</br><button class="attack">A</button>', '</br><button  class="defend">B</button>').attr(card).attr('id', game.creaturesBuilt);
    //   } else if (targetPlayer === player2) {
    //     game.allCreatures.push(card);
    //     $('<div>').addClass('card').appendTo('.playerArea2 .hand').text(card.name + ' cost: ' + card.cost).append('</br><button class="attack">A</button>', '</br><button class="defend">B</button>').attr(card).attr('id', this.creaturesBuilt);
    //    }
    // },
    backgrounds() {
      $('[name=Archer]').css({
        'background-image': "url('http://i.imgur.com/OGDnCY4.png')",
        'background-size': "cover",
      });
      $('[name=Goblin]').css({
        'background-image': "url('http://i.imgur.com/ehpvZFZ.png')",
        'background-size': "cover",
      });
      $('[name=Golem]').css({
        'background-image': "url('http://i.imgur.com/g1yAGLX.png')",
        'background-size': "cover",
      });
      $('[name=Sludge]').css({
        'background-image': "url('http://i.imgur.com/TKBuYRq.png')",
        'background-size': "cover",
      });
      $('[name=Ent]').css({
        'background-image': "url('http://i.imgur.com/q76h54z.png')",
        'background-size': "cover",
      });
    },



    dealCard(targetPlayer, card) {
      targetPlayer.hand.push(card);
      if (targetPlayer == player1) {
        $('<div>').addClass('card').appendTo('.playerArea1 .hand').text(card.name).append('<button class="attack">A</button>', '<button  class="defend">B</button>').attr(card).attr('player','player1').attr('id', card.serialNumber);
        game.backgrounds();
      } else if (targetPlayer == player2) {
        $('<div>').addClass('card').appendTo('.playerArea2 .hand').text(card.name).attr(card).append('<button class="attack">A</button>' ,'<button class="defend">B</button>').attr('id', card.serialNumber).attr('player',"player2");
       }
       game.backgrounds();
       game.cardInfo();
    },


    cardInfo() {
      $("[name=Archer]").hover(function() {
          $(this).css('cursor','pointer').attr('title', 'Mana Cost: 2 / Attack Points: 2 / Defense Points: 2');
      }, function() {
          $(this).css('cursor','auto');
        })
      $("[name=Goblin]").hover(function() {
          $(this).css('cursor','pointer').attr('title', 'Mana Cost: 1 / Attack Points: 1 / Defense Points: 1');
      }, function() {
          $(this).css('cursor','auto');
        })
      $("[name=Golem]").hover(function() {
          $(this).css('cursor','pointer').attr('title', 'Mana Cost: 4 / Attack Points: 3 / Defense Points: 4');
      }, function() {
          $(this).css('cursor','auto');
        })
      $("[name=Sludge]").hover(function() {
          $(this).css('cursor','pointer').attr('title', 'Mana Cost: 1 / Attack Points: 0 / Defense Points: 2');
      }, function() {
          $(this).css('cursor','auto');
        })
      $("[name=Ent]").hover(function() {
          $(this).css('cursor','pointer').attr('title', 'Mana Cost: 5 / Attack Points: 3 / Defense Points: 5');
      }, function() {
          $(this).css('cursor','auto');
        })

            // from https://stackoverflow.com/questions/1333546/how-can-i-display-a-tooltip-message-on-hover-using-jquery
    },

    dealFirstHand(targetPlayer) {
      for (let i = 0; i < 3; i++) {
        let a = Math.floor((Math.random() * targetPlayer.deck.length));
        game.dealCard(targetPlayer, targetPlayer.deck[a]);
      };

    },

    updateMana(targetPlayer) {
      if (targetPlayer == player1) {
        $('.manaStats1').text('Mana: ' + targetPlayer.mana);
      } else if (targetPlayer == player2) {
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
      this.roundNumber+=1;
      targetPlayer.mana += 1;
      game.assignDeck(player1);
      game.assignDeck(player2);
      game.dealFirstHand(player1);
      game.dealFirstHand(player2);
      game.updateHealth(player1);
      game.updateHealth(player2);
      game.updateMana(player1);
      game.updateMana(player2);
      console.log(player1.hand);
      console.log(player2.hand);
    },

    turnBegin(targetPlayer) {
      console.log(targetPlayer);
      this.currentPlayersTurn = targetPlayer;
      this.numberOfTurns += 1;
      console.log(this.numberOfTurns);
      if (this.numberOfTurns % 2 === 0) {
      this.roundNumber += 1;
      console.log(this.roundNumber);
    } else {
      console.log('bleh');
    };
      if (this.roundNumber > 1 && this.roundNumber < 10) {
      targetPlayer.mana = this.roundNumber;
    } else {
      targetPlayer.mana = 10;
    };
      let a = Math.floor((Math.random() * targetPlayer.deck.length));
      game.dealCard(targetPlayer, targetPlayer.deck[a]);
      game.updateMana(targetPlayer);
      game.updateHealth(targetPlayer);
    },
      // need to configure to ensure a max of 10 using if statements


    playCard(targetPlayer, card) {
      console.log(card);
        // let card = vortex.findCreature(num);
        // console.log(card);
        // let arr = targetPlayer.hand;
        // for (let i=0; i< arr.length; i++) {
          // if (arr[i].serialNumber == num.serialNumber || arr[i].serialNumber == num){

            // const card = arr[i];
            card.isInPlay = true;
            targetPlayer.cardsInPlay.push(card);
            targetPlayer.mana -= card.cost;
            console.log(card.name + " played!");
            console.log("remaining mana:  " + targetPlayer.mana);
            let t = targetPlayer.hand.indexOf(card);
            targetPlayer.hand.splice(t, 1);
            console.log("You now have ", targetPlayer.hand, " remaining in your hand");
          // } else {
            // console.log('not played');
          // }
        // };
        game.updateMana(targetPlayer);
        game.updateHealth(targetPlayer);
    },

    checkCompHand() {
      let canPlay = [];
      for (let i=0; i< player2.hand.length; i++) {
        console.log(i);
        console.log(player2.hand[i]);
        console.log(player2.hand[i].cost);
        console.log(player2.mana);
        if (player2.hand[i].cost <= player2.mana) {
          console.log(player2.hand[i]);
          canPlay.push(player2.hand[i]);
        } else {
          console.log('-1');
        };
      };
      return canPlay;
    },

    compRecheck() {
        let canPlay = game.checkCompHand();
        let a = Math.floor((Math.random() * (canPlay.length)));
        let card = canPlay[a];
        console.log(card);
        game.playCard(player2, card);
        console.log("computer played a ", card.name);
        let $computerSelectedCard = "#" + card.serialNumber;
        $('.playerArea2 .inPlay').append($($computerSelectedCard));
        if (player2.mana >= 1) {
          game.checkCompHand();
        };
    },

    compTurn() {
      game.checkCompHand();
      game.compRecheck();
      game.setAttackComp();
    },

    setAttackComp() {
      console.log(player2.cardsInPlay.length);
      let a = Math.floor((Math.random() * (player2.cardsInPlay.length)));
      let attacker = player2.cardsInPlay[a];
      console.log(attacker);
      if (attacker.canAttack == true) {
        console.log("computer attacking with " + attacker.name);
        this.attackers.push(attacker);
        // player2.a1.push(attacker);
        let $computerSelectedCard = "#" + attacker.serialNumber;
        $('.battleField #a1').append($($computerSelectedCard));
      } else {
        console.log('can not attack this turn');
      }
    },

    setDefendComp() {
      console.log(player2.cardsInPlay.length);
      let a = Math.floor((Math.random() * (player2.cardsInPlay.length)));
      let defender = player2.cardsInPlay[a];
      console.log(defender);
      // console.log("computer defending with " + defender.name);
        this.defenders.push(defender);
        // player2.a1.push(attacker);
        let $computerSelectedCard = "#" + defender.serialNumber;
        $('.battleField .defenders #d1').append($($computerSelectedCard));

      },


    // if (attackStatus == 'true') {
    //   $(e.currentTarget).closest('.card').appendTo(".battleField");
    //   game.setAttack(card);
    // } else if (attackStatus == 'false'){
    //   alert('can not attack');
    // };


    setAttack(target) {
      this.attackers.push(vortex.findCreature(target));
      let $selectedCard = "#" + target;
        $('.battleField .attackers #a1').append($($selectedCard));
        if (player2.cardsInPlay.length > 0) {
        game.setDefendComp();
      };
    },

    setDefenders(targetPlayer,card) {

      // let arr = targetPlayer.cardsInPlay;
      // for (let i=0; i< arr.length; i++) {
      // console.log(arr[i].serialNumber)
      // if (arr[i].serialNumber == card.serialNumber || arr[i].serialNumber == card){
      //   const defender = arr[i];

        this.defenders.push(vortex.findCreature(card));
        // game.defenders.push(defender);
        game.attackers[0].isBlocked=true;
        // targetPlayer.d1.push(defender);
        console.log(game.defenders);
        console.log(defender.name + " defending!");
        // let t = targetPlayer.cardsInPlay.indexOf(defender);
        // targetPlayer.cardsInPlay.splice(t, 1);
      // } else {
        // console.log('can not defend');
      // }
    // }
  },

    attackPhase(attacker,defender) {
      console.log(attacker, " is attacker");
      console.log(defender, " is defender");
      console.log("it is " ,game.currentPlayersTurn, "turn");
      // if (this.attackers.length > this.defenders.length) {
        let attPts = 0;
        let defPts = 0;
        for (let i=0; i<this.attackers.length; i++) {
          // this.attackers[i].isBlocked = true;
          console.log(this.attackers[i]);
          attPts += parseInt(this.attackers[i].attackPoints);
          console.log(attPts);
        };

        for (let i=0; i<this.defenders.length; i++) {
          console.log(this.defenders[i]);
          defPts += parseInt(this.defenders[i].defensePoints);
          console.log(defPts);
        };

        let life = () => {
          defender.healthPoints -= (attPts - defPts);
        };
          life();

          console.log(defender.healthPoints);
          game.updateMana(defender);
          game.updateMana(attacker);
          game.updateHealth(attacker);
          game.updateHealth(defender);
          this.attackers = [];
          this.defenders = [];
          $('.slot').empty();
          game.isWon();


          // let a = this.defenders[i].defensePoints - this.attackers[i].attackPoints;
          // let b = this.attackers[i].defensePoints - this.defenders[i].attackPoints;
          // if (a <= 0) {
            // this.defenders[i].isDead = true;
          // };
          // if (b <= 0) {
            // this.attackers[i].isDead = true;
          // };

          // $('div.defenders').remove('.card');

      },
//
//       // for (let i=0; i<this.attackers.length;i++) {
//       //   if (game.attackers[i].isBlocked == false) {
//       //     console.log(this.attackers[i]);
//         };
// // else if (this.defenders.length = this.defenders.length) {
//   // console.log('hey');
// // };
// //       for (let i=0; i<this.attackers.length;i++) {
// //
// //         let a = this.defenders[i].defensePoints - this.attackers[i].attackPoints;
// //         let b = this.attackers[i].defensePoints - this.defenders[i].attackPoints;
// //         if (a <= 0) {
// //           this.defenders[i].isDead = true;
// //         };
// //         if (b <= 0) {
// //           this.attackers[i].isDead = true;
// //         };
// //
// //         };
//
//
//       for (let i=0; i<this.defenders.length; i++) {
//         if (this.defenders[i].isDead == true) {
//           let $card = "#" + this.defenders[i].serialNumber;
//           // $('.graveyard').append($($card));
//           $($card).remove();
//           console.log($card);
//           let p1 = player1.cardsInPlay.indexOf(this.defenders[i]);
//           let p2 = player2.cardsInPlay.indexOf(this.defenders[i]);
//           player1.cardsInPlay.splice(p1, 1);
//           player2.cardsInPlay.splice(p2, 1);
//         } else {
//           $('.card','.defenders','[player=player1]').appendTo('.playerArea1 .inPlay');
//           $('.card','.defenders'),'[player=player2]'.appendTo('.playerArea2 .inPlay');
//           // $('.player2').appendTo('.playerArea2 .inPlay')
//       };
//       };
//       this.defenders = [];
//
//       for (let i=0; i<this.attackers.length; i++) {
//         console.log(i);
//         let $card = this.attackers[i].serialNumber;
//         if (this.attackers[i].isDead == true) {
//           let $card = this.attackers[i].serialNumber;
//           // $('.graveyard').append($($card));
//           $($card).remove();
//           console.log($card);
//           let p1 = player1.cardsInPlay.indexOf(this.attackers[i]);
//           let p2 = player2.cardsInPlay.indexOf(this.attackers[i]);
//           player1.cardsInPlay.splice(p1, 1);
//           player2.cardsInPlay.splice(p2, 1);
//       } else if (this.attackers[i].isDead == false) {
//           $('.card','.attackers','[player=player2]').appendTo('.playerArea2 .inPlay');
//           $('.card','.attackers','[player=player1]').appendTo('.playerArea1 .inPlay');
//     }
// this.attackers = [];
//     };
//
//     console.log(player1.cardsInPlay);
//     console.log(player2.cardsInPlay);
//     console.log(this.attackers);
//     console.log(this.defenders);
//   },

    isWon() {
      if (player1.healthPoints <= 0) {
        alert('You lost!');
      } else if (player2.healthPoints <= 0) {
        alert('Victory!');
      } else {
        null;
      }
    },

    // resetGame() {
    //
    // }

  }

  $('.start').on('click', () => {
    // let a = game.flipCoin();
    game.startGame(player1);
  });

  $('.hand').on('click', '.card', (e) => {
    let cost = $(e.currentTarget).attr('cost');
    let mana = player1.mana;
    if (cost <= mana) {
    let index = $(e.currentTarget).attr('serialNumber');
    console.log(index);
    let card = vortex.findCreature(index);
    console.log(card);
      game.playCard(player1, card);
      $(e.currentTarget).closest('div').appendTo(".playerArea1 .inPlay");
      game.updateMana(player1);
    }
    else {
      alert('not enough mana, select another card');
    }
  });

  $('.inPlay').on('click', '.attack', (e) => {
    // when clicking A again, needs to return card to In Play
    let card = $(e.currentTarget).closest('div').attr('serialNumber');
    console.log(card);
    game.setAttack(card);
  });

  $('.inPlay').on('click', '.defend', (e) => {
    let defendStatus = $(e.currentTarget).closest('.card').attr('canDefend');
    console.log(defendStatus);
    if (defendStatus == 'true') {
      let card = $(e.currentTarget).closest('div').attr('serialNumber');
      $(e.currentTarget).closest('div').appendTo(".battleField #d1");
      game.setDefenders(player1,card);
    }
    else {
      alert('can not defend this turn, select another card');
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
  //   console.log(player1.cardsInPlay);
  //   for (let i=0; i < player1.cardsInPlay.length; i++) {
  //   player1.cardsInPlay[i].roundsInPlay+=1;
  //   if (player1.cardsInPlay[i].roundsInPlay >= 1) {
  //     player1.cardsInPlay[i].canAttack = 'true';
  //   } else {
  //     console.log('can not set to true');
  //   }
  // };
    game.turnBegin(player2);
    game.compTurn();
  });

  $('.battle').on('click', () => {
    console.log("battle clicked");
    // console.log(game.attackers[0]);
    // console.log(game.defenders[0]);
    console.log(game.currentPlayersTurn);
    if (game.currentPlayersTurn == player2) {
      game.attackPhase(game.currentPlayersTurn, player1);
    } else {
      game.attackPhase(player1, player2);
    };
    }
  );

  $('.player2TurnOver').on('click',() => {
    // let targetPlayer = player2;
    // for (let i=0; i<targetPlayer.cardsInPlay.length; i++) {
    // targetPlayer.cardsInPlay[i].roundsInPlay+=1;
    // if (targetPlayer.cardsInPlay[i].roundsInPlay >= 1) {
    //   targetPlayer.cardsInPlay[i].canAttack = true;
    // };
    game.turnBegin(player1);
  });

// https://stackoverflow.com/questions/16113070/how-to-associate-an-object-with-a-dom-element

// functionality doesn't work yet
  $('.reset').on('click', () => {
    console.log("reset");
    game.startGame();

  });


  // test code




});
