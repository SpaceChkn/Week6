var expect = chai.expect;

describe('MyFunctions', function () {
    describe('creates a deck', function () {
        it('creates a simple deck of 52 playing cards', function () {
            const deck = new Deck(); 
            deck.createDeck();
            let numCards = deck.length; 
            expect(numCards).to.have.a.lengthOf(52); 
        });

        it('errors out', function () {
            expect(function () {
                createDeck(49); 
            }).to.throw(Error);
        });

    });
});