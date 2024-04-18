import axios from 'axios';
// import { renderImages } from './render-functions.js';
// import { searchInput } from '../main.js';


const API_KEY = '43277181-ebb9172f58fa43bc64ca23581';
const loadButton = document.querySelector('.btn');

let page = 1;

export async function fetchImages(searchQuery) {
   
    const params = new URLSearchParams({
         key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page
    })
   
        
    const url = `https://pixabay.com/api/?${params}`;
    try {
         page += 1;
        const response = await axios(url);
         loadButton.classList.replace('btn-hidden', 'btn');
        

        console.log(response);
        return response.data.hits;
        }
        catch(error){
            throw new Error('Failed to fetch images');
        };
}

// async function loadMore() { 
//        page += 1;
//      loadButton.disabled = true;
   

//     try {
             
        
//         const searchQuery = searchInput.value.trim();
//         const data = await fetchImages(searchQuery);
//         gallery.insertAdjacentHTML('beforeend', renderImages(data));
//         loadButton.disabled = false;

//     } catch (error) {
//         throw new Error('Failed to fetch images');
//     }
// }

