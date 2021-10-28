import quotesBank from '../../json/quotes';

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export default (req, res) => {
    if (req.query.author != null) {
        let authorQuotes = quotesBank.filter(function (o) {
            return o.author === req.query.author;
        });
        return shuffle(authorQuotes)
    }
    return shuffle(quotesBank)

}