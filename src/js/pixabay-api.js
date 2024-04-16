import axios from 'axios';
import { renderImages } from './render-functions.js';


const API_KEY = '43277181-ebb9172f58fa43bc64ca23581';
const loadButton = document.querySelector('.btn');
const gallery = document.querySelector('.gallery')
loadButton.addEventListener('click', loadMore);
let page = 1;

export async function fetchImages(searchQuery) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page: page
    })
    
    
    const url = `https://pixabay.com/api/?${params}`;
    try {
        
        const response = await axios(url);
        if(response.data.totalHits <= 500){
        loadButton.classList.replace('btn-hidden', 'btn');
        }
        return response.data.hits;
        }
        catch(error){
            throw new Error('Failed to fetch images');
        };
}

async function loadMore() {
    page += 1;
    console.log(page);
    loadButton.disabled = true;

    try {
        const data = await fetchImages(page);
        gallery.insertAdjacentHTML('beforeend', renderImages(data));
        loadButton.disabled = false;
    } catch (error) {
        throw new Error('Failed to fetch images');
    }

}