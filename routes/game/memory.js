module.exports = {
  path: '/game/memory',
  code: `
  $jsEval[false;function createMemoryGame(cards) {
    /**
     * This function creates a memory game with the given cards.
     * 
     * @param {Array} cards - An array of card objects to be used in the game.
     * @returns {Object} - Returns an object with methods to play the game.
     */
    let game = {
        cards: cards,
        flippedCards: [],
        matchedCards: [],
        moves: 0,

        /**
         * This method flips a card and checks if it matches with another flipped card.
         * 
         * @param {Object} card - The card object to be flipped.
         */
        flipCard: function(card) {
            if (this.flippedCards.length < 2 && !this.matchedCards.includes(card)) {
                card.isFlipped = true;
                this.flippedCards.push(card);

                if (this.flippedCards.length == 2) {
                    this.moves++;
                    if (this.flippedCards[0].value == this.flippedCards[1].value) {
                        this.matchedCards.push(...this.flippedCards);
                        this.flippedCards = [];
                    } else {
                        setTimeout(() => {
                            this.flippedCards.forEach(card => card.isFlipped = false);
                            this.flippedCards = [];
                        }, 1000);
                    }
                }
            }
        },

        /**
         * This method shuffles the cards in the game.
         */
        shuffleCards: function() {
            for (let i = this.cards.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
            }
        },

        /**
         * This method resets the game.
         */
        resetGame: function() {
            this.cards.forEach(card => card.isFlipped = false);
            this.flippedCards = [];
            this.matchedCards = [];
            this.moves = 0;
            this.shuffleCards();
        }
    };

    game.shuffleCards();
    return game;
}]
`
}