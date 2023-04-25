import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			'x-rapidapi-host': 'bayut.p.rapidapi.com',
			'x-rapidapi-key': 'e1f1f2feafmshad4e01227b4ce3cp16531ajsndbe8148a1164',
		},
	})

	return data
}
