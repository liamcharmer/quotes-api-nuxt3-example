
export default async function () {

    let quotes = ref([])
    let apiurl = ref(`/api/quotes`)
    const manyQuotes = async (input) => {
        console.log(input)
        apiurl.value = `/api/quotes`
        if (input) {
            apiurl.value = `/api/quotes?author=${input}`
        }
        quotes.value = await $fetch(apiurl.value);
    }

    const randomQuote = async () => {
        apiurl.value = "/api/quotes/random"
        quotes.value = []
        quotes.value.push(await $fetch(apiurl.value));
    }

    return {
        apiurl,
        quotes,
        randomQuote,
        manyQuotes
    };
};