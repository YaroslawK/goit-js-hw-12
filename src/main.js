import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";


import { clearGallery, renderImages, showLoader, hideLoader, hideButton, showButton } from './js/render-functions';

import { fetchImages } from './js/pixabay-api.js';

const loadButton = document.querySelector('.btn');

const form = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
let page = 1;



const formSubmit = (event) => {
    page = 1;
    clearGallery();
    handleSubmit(event);
    hideButton();
    };

form.addEventListener('submit', formSubmit);
loadButton.addEventListener('click', handleSubmit);



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
    try { 
        showLoader();

        const images = await fetchImages(searchQuery, page);
           
        if (images.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
        } else {
        
            renderImages(images);
        
                showButton()
            if (page > 33) {
                hideButton();
            }
        }
        page++;
         if (page !== 2) {
            const { height: cardHeight } = document
                .querySelector('.gallery')
                .firstElementChild.getBoundingClientRect();
            window.scrollBy({
            left: 0,
            top: cardHeight * 2,
            behavior: 'smooth',
    });
            }
        }
        catch (error) {
            iziToast.error({
                title: 'Error',
                message: 'We are sorry, but you have reached the end of search results.',
            });
        }
        finally{
            hideLoader();
    };
    
}



