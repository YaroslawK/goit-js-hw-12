import axios from 'axios';

const API_KEY = '43277181-ebb9172f58fa43bc64ca23581';

export async function fetchImages(searchQuery) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    })

    const url = `https://pixabay.com/api/?${params}`;
    try {
        const response = await axios(url);
        return response.data.hits;
        }
        catch(error){
            throw new Error('Failed to fetch images');
        };
}
