import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const gallery = new SimpleLightbox('.gallery a');
const loadButton = document.querySelector('.btn');
export function clearGallery() {
    const galleryElement = document.querySelector('.gallery');
    galleryElement.innerHTML = '';
}

export function renderImages(imagesHits) {
    const galleryElement = document.querySelector('.gallery');
    const imageElements = imagesHits.map(image => {
        return `
        <li class="item">
            <a href="${image.largeImageURL}">
                <img src="${image.webformatURL}" alt="${image.tags}" class="image"/>
            </a>
            <ul class="stats-list">
                <li class="stats-list-item">
            <h3>Likes</h3>
            <p>${image.likes}</p>
                </li>
                <li class="stats-list-item">
            <h3>Views</h3>
            <p>${image.views}</p>
                </li>
                <li class="stats-list-item">
            <h3>Comments</h3>
            <p>${image.comments}</p>
                </li>
                <li class="stats-list-item">
            <h3>Downloads</h3>
            <p>${image.downloads}</p>
                </li>
            </ul>    
        </li>
        `;
    }).join('');


    galleryElement.insertAdjacentHTML('beforeend', imageElements);
    
    gallery.refresh();

    

    return imageElements

    
    
}

export function showLoader() {
    document.querySelector('.loader').style.display = 'block';
}
export function showButton() {
    loadButton.classList.replace('btn-hidden', 'btn');
}

export function hideLoader() {
    document.querySelector('.loader').style.display = 'none';
    
}
export function hideButton() {
    loadButton.classList.replace('btn', 'btn-hidden');
}

window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = 'block'; 
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none'; 
    }, 500);
});