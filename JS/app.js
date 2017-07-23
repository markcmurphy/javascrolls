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
      // this.roundsInPlay = 0;
    }

  }
const vortex = {
  creatures: [],
  createArcher() {
    const newArcher = new Creature('Archer', 2, 2, 2, this.creatures.length);
    this.creatures.push(newArcher);
    return newArcher;
  },
  createGhost() {
    const newGhost = new Creature('Ghost', 1, 1, 1, this.creatures.length);
    this.creatures.push(newGhost);
    return newGhost;
  },
  findCreature(index) {
    return this.creatures[index];
  }
}

// vortex.createGhost();
// vortex.createGhost();
// vortex.createGhost();
// vortex.createArcher();
// console.log(vortex.creatures);

// const ghost = {
//       creatures: [],
//
// },
// findCreature(index){
//   return ghost.creatures[index];
// }
// }
//
// archer.create();
// const archer = new Generator('Archer',2, 2, 2,);
// archer.create();
// ghost.create();
// archer.create();
// const ghost = new Generator('Ghost', 1, 1, 1,);
// archer.createCreature();
// ghost.createCreature();
// archer.createCreature();
// console.log(archer.creatures);
// console.log(ghost.findCreature(0));


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

  // gameplay

  const game = {
    roundNumber: 0,
    attackers: [],
    defenders: [],
    availableCreatures: ["ghost", "archer"],
    currentPlayersTurn: {},
    // creaturesBuilt: 0,
    // allCreatures: [],

    // flipCoin() {
    //
    // }

    assignDeck(targetPlayer) {
      for (let i = 0; i < 30; i++) {
        let a = Math.floor((Math.random() * game.availableCreatures.length));
        let b = game.availableCreatures[a];
        if (b == "ghost") {
          vortex.createGhost();
        } else if (b == 'archer') {
          vortex.createArcher();
        }
        targetPlayer.deck.push(vortex.creatures[i]);
      }
    },

    buildCard(targetPlayer, card) {
      game.creaturesBuilt += 1;
      // console.log(this.creaturesBuilt);
      if (targetPlayer === player1) {
        // game.allCreatures.push(card);
        $('<div>').addClass('card').appendTo('.playerArea1 .hand').text(card.name + ' cost: ' + card.cost).append('</br><button class="attack">A</button>', '</br><button  class="defend">B</button>').attr(card).attr('id', game.creaturesBuilt);
      } else if (targetPlayer === player2) {
        game.allCreatures.push(card);
        $('<div>').addClass('card').appendTo('.playerArea2 .hand').text(card.name + ' cost: ' + card.cost).append('</br><button class="attack">A</button>', '</br><button class="defend">B</button>').attr(card).attr('id', this.creaturesBuilt);
       }
    },

    dealCard(targetPlayer, x) {
      if (x == "ghost") {
        vortex.createGhost();
        let y = vortex.findCreature(vortex.creatures.length);
        targetPlayer.hand.push(y);
        game.buildCard(targetPlayer, ghost);
      } else if (x == 'archer') {
        vortex.createArcher();
        let y = vortex.findCreature(vortex.creatures.length );
        targetPlayer.hand.push(y);
        game.buildCard(targetPlayer, archer);
      }

      // console.log(x);
      // targetPlayer.hand.push(y);
    //   this.buildCard(targetPlayer, card);
    //   // game.creaturesBuilt += 1;
    //   // console.log(this.creaturesBuilt);
    //   // console.log(card);
    //
    //   // console.log(targetPlayer.hand[0]);
    // },
  },



    dealFirstHand(targetPlayer) {
      for (let i = 0; i < 3; i++) {
        let a = Math.floor((Math.random() * game.availableCreatures.length));
        game.dealCard(targetPlayer, game.availableCreatures[a]);
        // console.log(a);
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
      game.assignDeck(player1);
      game.dealFirstHand(player1);
      game.dealFirstHand(player2);
      game.updateHealth(player1);
      game.updateHealth(player2);
      game.updateMana(player1);
      game.updateMana(player2);
      console.log(player1.hand);
      console.log(player2.hand);
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

    playCard(targetPlayer, num) {
      console.log(num);
      // console.log(targetPlayer.hand[0].id);
      let arr = targetPlayer.hand;
      console.log(arr[0].id);
      // console.log(arr.find(arr.id === arr.num).name);
// let $card = $('#'+num);
// console.log($($card).name);
// console.log(card);
//       let lookup = {};
//       for (let i = 0; i<targetPlayer.hand.length;i++) {
//         lookup[targetPlayer.hand[i].id] = targetPlayer.hand[i];
//       }
//       console.log(lookup[num]);
        // if (card.cost <= targetPlayer.mana) {
        for (let i=0; i< arr.length; i++) {
          console.log(arr[i].id);
          if (arr[i].id == num) {
            console.log(i);
            console.log(arr[i]);
            const card = arr[i];
          } else {
            console.log(-1);
          }
        };
        // console.log(card);
        // card.isInPlay = true;
        // // need to set method for isInPlay to display card
        // targetPlayer.mana -= card.cost;
        // targetPlayer.cardsInPlay.push(card);
        // console.log(targetPlayer.cardsInPlay);
        // console.log(card);
        // console.log(card.name + " played!");
        // console.log("remaining mana:  " + targetPlayer.mana);
        // let t = targetPlayer.hand.indexOf(card);
        // targetPlayer.hand.splice(t, 1);
        // console.log("You now have ", targetPlayer.hand, " remaining in your hand");
        // console.log(card.creatureID);
      // } else {
        // need to change to message on DOM
        // console.log("not enough mana");
      // }
    },

    setAttackComp(card) {
      if (card.canAttack === true) {
        console.log("computer attacking with " + card.name);
        this.attackers.push(card);
        console.log(this.attackers[0]);
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

    setDefenders(x) {
      game.defenders.push(x);

      // if (card.canDefend === true) {
      // console.log(player1.cardsInPlay[0]);
      // console.log(num);
      // console.log(player1.cardsInPlay.length);

      // let $selectedCard = "#" + num;
      // let ind = $('player1.cardsInPlay').find($($selectedCard));
      // console.log(ind);

// let tyt = $('div#'+ num);
// console.log(tyt);

// console.log($(player1.cardsInPlay[0]).data('id'));
      // var arrayOfIds = $.map($('#'+num), function(n, i){
  // return n.id;
// });
// console.log(arrayOfIds);
// console.log(player1.cardsInPlay[0].id);
// console.log(player1.cardsInPlay[0].id);
      // for (let i=0; i<player1.cardsInPlay.length; i++) {
        // console.log(player1.cardsInPlay[i].creatureID);
        // if (player1.cardsInPlay[i].id == num) {
          // console.log(i);
          // return i;
      // } else {
        // console.log(-1);
      // }
    // };


        // this.defenders.push(card);
        // console.log(this.defenders[0]);
      // } else {
        // console.log('can not defend');
      // }
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
        if (this.defenders[i].isDead === true) {
          let $cardAtt = "#" + this.defenders[i].creatureID;
          $('.playerArea1 .graveyard').append($($cardAtt));
          console.log($cardAtt);
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
        if (this.attackers[i].isDead === true) {
          let $cardDef = "#" + this.attackers[i].creatureID;
          $('.playerArea1 .graveyard').append($($cardDef));
          console.log($cardDef);
          let p1 = player1.hand.indexOf(this.attackers[i]);
          let p2 = player2.hand.indexOf(this.attackers[i]);
          player1.cardsInPlay.splice(p1, 1);
          player2.cardsInPlay.splice(p2, 1);
      } else {
        console.log('nothing done');
    };

    };

    console.log(player1.cardsInPlay);
    console.log(player2.cardsInPlay);
    console.log(this.attackers);
    console.log(this.defenders);
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
      // let i = $(e.currentTarget).attr('arrPlace');
      // let card = game.availableCreatures[i];
      // console.log(card);
      // let card = $(e.currentTarget).closest('card');
      // console.log(card1);
      // console.log(e.currentTarget);
      let card = $(e.currentTarget).attr('id');
      console.log(card);
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
    // var index = $(e).index();
    // console.log(index);
      let x = $(e.currentTarget).closest('div');
      game.defenders.push(x);
      // console.log(x);
      // let $card = "#" + x;
      // var listItem = $("#" + x);
      // console.log(listItem);
      // let cardsArr = player1.cardsInPlay;
      // let id = $('div').attr('id');
      // let ind = $.inArray(x,cardsArr);
      // console.log(ind);
// let ind = cardsArr.index(listItem);
// console.log(ind);
// console.log(player1.cardsInPlay[0].id);
// let ind = () => {
//   for (let i=0; i<player1.cardsInPlay.length; i++) {
//     if (player1.cardsInPlay[i].id == x) {
//       return i;
//   } else {  return -1;
//   } }
// };

// console.log(ind());

// let index = player1.cardsInPlay.map(function(el) {
  // return el.id;
// }).indexOf($card);

// console.log(index);

      // console.log(cardsArr[0]);





      // let t = player1.cardsInPlay.indexOf("id:" + x);
      // console.log(t);
      // targetPlayer.hand.splice(t, 1);
      // console.log("Index: " + $(".card").index(listItem));
      // console.log(cardsArr[$(".card").index(listItem)]);
      // let card = $.grep(cardsArr, function(creature) {
      // return creature.id === x;
      // });
      //
      // $.grep(cardsArr, function(creature) {
      // return Creature.id === x;
      // })
      //
      // let cardx = $("div").filter($('id:' + 1))
      // console.log(cardx);

// function findCreature(creature) {
  // return creature.id === "x";
// }

// console.log(cardsArr.find(findCreature));


      // console.log(card);

      $('.battleField').append($(x));
      // setDefenders(card) {
      //   if (card.canDefend === true) {
      //     this.defenders.push(card);
      //     console.log(this.defenders[0]);
      //   } else {
      //     console.log('can not defend');
      //   }
      // },
      // console.log($card);

      // $(e.currentTarget).closest('div').appendTo(".battleField");
      // let i = $(e.currentTarget).closest('.card').attr('arrPlace');
      // console.log(i);
      // let card = game.availableCreatures[i];
      // console.log(card);
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

      game.setDefenders(x);
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

Creature.handleEvent = function(e) {
  switch (e.type) {
    case 'click': this.click(e);
  }
};

// https://stackoverflow.com/questions/16113070/how-to-associate-an-object-with-a-dom-element

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

// ghost.createCard(player1);
// console.log(ghost.defensePoints);

game.assignDeck(player1);
console.log(player1.deck);

});
