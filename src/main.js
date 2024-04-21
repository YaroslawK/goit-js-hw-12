import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";


import { clearGallery, renderImages, showLoader, hideLoader, hideButton, showButton } from './js/render-functions';

import { fetchImages } from './js/pixabay-api.js';

const loadButton = document.querySelector('.btn');

const form = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
let page = 1;
let totalPage;



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
        const imagesHits = images.hits;
        const imageTotalHits = images.totalHits;
        if (imagesHits.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
        } else {
            if (page === 1) {
                totalPage = Math.ceil(imageTotalHits / imagesHits.length);
            }
            page++;
            renderImages(imagesHits);
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
            showButton()
            if (page > totalPage) {
                hideButton();
                iziToast.error({
                title: 'Error',
                message: 'We are sorry, but you have reached the end of search results.',
            });
            }
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



