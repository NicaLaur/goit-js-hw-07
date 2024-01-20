
import { galleryItems } from './gallery-items.js';
// Change code below this line


const ulGallery = document.querySelector('.gallery');

document.addEventListener('DOMContentLoaded', function () {

    galleryItems.forEach(element => {

        const liGallery = document.createElement('li')
        liGallery.classList.add('gallery__item')
        ulGallery.appendChild(liGallery)

        const linkGallery = document.createElement('a')
        linkGallery.classList.add('gallery__link')
        liGallery.appendChild(linkGallery)
        linkGallery.setAttribute('href', element.preview)

        const imgGallery = document.createElement('img')
        imgGallery.classList.add('gallery__image')
        imgGallery.setAttribute('src', element.preview)
        imgGallery.setAttribute('alt', element.description)
        linkGallery.appendChild(imgGallery)

    });


})


new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 })
