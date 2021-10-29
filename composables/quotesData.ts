
export default async function () {

    let quotes = ref([])
    let apiurl = ref(`/api/quotes`)
    let total = ref(0)
    const manyQuotes = async (input) => {
        apiurl.value = `/api/quotes`
        if (input) {
            apiurl.value = `/api/quotes?author=${input}`
        }
        let response = await $fetch(apiurl.value);
        quotes.value = response.data;
        total.value = response.total;
    }

    const randomQuote = async () => {
        apiurl.value = "/api/quotes/random"
        let response = await $fetch(apiurl.value);
        quotes.value = response.data;
        total.value = response.total;
    }

    return {
        apiurl,
        quotes,
        total,
        randomQuote,
        manyQuotes
    };
};