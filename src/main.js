import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";



import { clearGallery, renderImages, showLoader, hideLoader } from './js/render-functions';

import { fetchImages } from './js/pixabay-api.js';

const form = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const loadButton = document.querySelector('.btn');

form.addEventListener('submit', handleSubmit);
    
async function handleSubmit(event) {
    event.preventDefault();
    const searchQuery = searchInput.value.trim();
    if (!searchQuery) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query',
        });
        return;
    }
    try{
    showLoader();
    clearGallery();
    const images = await fetchImages(searchQuery)
            if (images.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            } else {
                renderImages(images);
            }
        }
        catch (error) {
            iziToast.error({
                title: 'Error',
                message: 'Failed to fetch images. Please try again later!',
            });
        }
        finally{
            hideLoader();
        };
}

