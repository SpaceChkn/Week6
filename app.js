class Player {
  constructor(name) {
      this.name = name;
      this.score = 0;
      this.hand = []; 
  }

  drawCard() {
      return this.hand.pop(); 
  }

  incrementScore() {
      this.score += 1;
  }
}

class Card {
  constructor(value, suit) {
      this.value = value;
      this.suit = suit;
  }

  getValue() {
      return this.value;
  }

}

class Deck {
  constructor() {
      this.cards = [];
      this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
      this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']; //I think I could have passed through actual symbols instead
  }

  valueFlip(card) {
      switch (card) {
          case 2:
              return 'two';
              break;

          case 3:
              return 'three';
              break;

          case 4:
              return 'four';
              break;

          case 5:
              return 'five';
              break;

          case 6:
              return 'six';
              break;

          case 7:
              return 'seven';
              break;

          case 8:
              return 'eight';
              break;

          case 9:
              return 'nine';
              break;

          case 10:
              return 'ten';
              break;

          case 11:
              return 'eleven';
              break;

          case 12:
              return 'Queen';
              break;

          case 13:
              return 'King';
              break;

          case 14:
              return 'Ace';
              break;

      }
  }

  createDeck() {
      for (let i = 0; i < this.suits.length; i++) {
          for (let d = 2; d < this.values.length + 2; d++) {
              this.cards.push(new Card(d, `${this.valueFlip(d)} of ${this.suits[i]}`));
          }
      }
  }

  shuffleDeck() {
    //This took me some time to figure out. Ended up finding a tutorial from webdev simplified. My original code did not produce true randomness. 
      for (let i = this.cards.length - 1; i > 0; i--) {
          let s = Math.floor(Math.random() * (i + 1));
             let tempCard = this.cards[i];
          this.cards[i] = this.cards[s];
          this.cards[s] = tempCard;
      }
  }

  dealHand(player1, player2) {
      for (let i = 0; i < 26; i++) {
          player1.hand.push(this.cards.pop());
          player2.hand.push(this.cards.pop());
      } 
     
  }
}

class PlayGame {
  constructor() {
      this.player1 = new Player(prompt('Player 1?'));
      this.player2 = new Player(prompt('Player 2?'));
  }

  start() {
      console.log('A simple game of WAR');
      const deck = new Deck();
      deck.createDeck();
      deck.shuffleDeck();
      deck.dealHand(this.player1, this.player2);
      this.compareCards(this.player1, this.player2);
      this.compareScore(this.player1, this.player2);
  }


  compareCards() {
      for (let r = 0; r < 26; r++) {
          let card1 = this.player1.drawCard();
          let card2 = this.player2.drawCard();

//The logic that determines which card is greater
          if (card1.value > card2.value) {
              console.log(`${this.player1.name}'s ${card1.suit} overpowers ${this.player2.name}'s ${card2.suit}`);
              this.player1.incrementScore();
          } else if (card2.value > card1.value) {
              console.log(`${this.player2.name}'s ${card2.suit} overpowers ${this.player1.name}'s ${card1.suit}`);
              this.player2.incrementScore();
          } else {
              console.log(`${this.player1.name}'s ${card1.suit} and ${this.player2.name}'s ${card2.suit} tie!`);
          }
      } 
  }

  //Here we are comparing scores of the two players to determine the winner
  compareScore() {
      if (this.player1.score > this.player2.score) {
          console.log(`${this.player1.name} wins! - Final score: ${this.player1.score} to ${this.player2.score}`);
          alert(`${this.player1.name} wins! - Final score: ${this.player1.score} to ${this.player2.score}`);
      } else if (this.player2.score > this.player1.score) {
          console.log(`${this.player2.name} wins! - Final score: ${this.player2.score} to ${this.player1.score}`);
          alert(`${this.player2.name} wins! - Final score: ${this.player2.score} to ${this.player1.score}`);
      } else {
          console.log(`${this.player1.name} and ${this.player2.name} tie!`);
          alert(`${this.player1.name} and ${this.player2.name} tie!`);
      }
  }

}

let play = new PlayGame;
play.start();