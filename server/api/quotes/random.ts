import quotesBank from '../../json/quotes';

let quotesTotal = quotesBank.length
let returnData = {
    total: quotesTotal,
    data: []
}
export default (req, res) => {

    returnData.data = []
    let getQuote = quotesBank[Math.floor(Math.random() * quotesBank.length)];
    returnData.data.push(getQuote)
    return returnData;
}