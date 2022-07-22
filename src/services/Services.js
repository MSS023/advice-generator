import axios from "axios";

const URL = "https://api.adviceslip.com/advice";

export async function getAdvice(setNumber,setQuote,setLoading) {
    try {
        const response = await axios.get(URL);
        if (response.status === 200) {
            const quote = response.data.slip.advice;
            const id = response.data.slip.id;
            setNumber(id);
            setQuote(quote);
            setLoading(false);
        }
    } catch(err) {
        console.log(err);
        throw err;
    }
}