import axios from 'axios';

const API_KEY = '43277181-ebb9172f58fa43bc64ca23581';

const per_page = 15;

export async function fetchImages(searchQuery, page) {
   
    const params = new URLSearchParams({
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page,
        page
    })
   
   
        
    const url = `https://pixabay.com/api/?${params}`;
    try {     
        const response = await axios(url);
        return response.data;
        }
        catch(error){
            throw new Error('Failed to fetch images. Please try again later!');
        };
}


  
