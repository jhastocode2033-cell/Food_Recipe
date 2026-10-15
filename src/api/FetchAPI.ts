import axios from "axios"

const BASE_URL = 'https://tasty.p.rapidapi.com';
const options = {
	headers: {
		'x-rapidapi-key': import.meta.env.VITE_API_KEY,
		'x-rapidapi-host': 'tasty.p.rapidapi.com'
	}
};

const FetchAPI = async (url : string ) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}

export default FetchAPI;