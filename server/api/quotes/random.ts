import quotesBank from '../../json/quotes';

export default (req, res) => {
    let getQuote = quotesBank[Math.floor(Math.random() * quotesBank.length)];
    return getQuote;
}