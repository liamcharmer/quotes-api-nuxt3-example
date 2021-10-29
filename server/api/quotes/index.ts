import quotesBank from '../../json/quotes';
let quotesTotal = quotesBank.length
let returnData = {
    total: quotesTotal,
    data: quotesBank
}


export default (req, res) => {
    returnData.data = quotesTotal;
    if (req.query.author != null) {
        let authorQuotes = quotesBank.filter(function (o) {
            return o.author.toUpperCase() === req.query.author.toUpperCase();
        });
        returnData.data = authorQuotes;
    }
    return returnData

}