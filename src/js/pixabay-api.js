import axios from 'axios';
import { renderImages } from './render-functions.js';
import { searchInput } from '../main.js';


const API_KEY = '43277181-ebb9172f58fa43bc64ca23581';
const loadButton = document.querySelector('.btn');
const gallery = document.querySelector('.gallery')

loadButton.addEventListener('click', loadMore);

let page = 1;
const forma = document.querySelector('.search-form')
forma.addEventListener('submit', () => {
    page = 1
});

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

    // const pages = Number(params.get('page'));
    // const perPage = Number(params.get('per_page'));
   
        
    const url = `https://pixabay.com/api/?${params}`;
    try {
        
        const response = await axios(url);
         loadButton.classList.replace('btn-hidden', 'btn');
        

        return response.data.hits;
        }
        catch(error){
            throw new Error('Failed to fetch images');
        };
}

async function loadMore() { 
       page += 1;
     loadButton.disabled = true;
   

    try {
         const card = document.querySelector('.image');
    const cardHeight = card.getBoundingClientRect().height;
    window.scrollBy({
        left: 0,
        top: cardHeight * 2,
        behavior: 'smooth'
    })
         
        
        const searchQuery = searchInput.value.trim();
        const data = await fetchImages(searchQuery);
        gallery.insertAdjacentHTML('beforeend', renderImages(data));
        loadButton.disabled = false;

    } catch (error) {
        throw new Error('Failed to fetch images');
    }
}

