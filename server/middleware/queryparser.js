export default async (req, res) => {
    var arr = req.url.split('?');
    if (req.url.length > 1 && arr[1] !== '') {

        let params = Object.fromEntries(new URLSearchParams(req.url.substring(req.url.indexOf("?"))));
        req.query = params;
    }
}