import quotesBank from '../../json/quotes';



export default (req, res) => {
    if (req.query.author != null) {
        let authorQuotes = quotesBank.filter(function (o) {
            return o.author === req.query.author;
        });
        return authorQuotes
    }
    return quotesBank

}