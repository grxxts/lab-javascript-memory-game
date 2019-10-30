class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed){
    this.cards = cards,
   
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  
  shuffleCards() {
      for (let i = 0; i<this.cards.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        let x = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = x;

      }
    
  }
  checkIfPair(card1, card2) {

    if(card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else if (card1 != card2){
      this.pairsClicked +=1
      return false
      }
    }
  

  isFinished() {
    if(this.cards.length===this.pairsGuessed *2){
      return true
    }return false
    
  }
}