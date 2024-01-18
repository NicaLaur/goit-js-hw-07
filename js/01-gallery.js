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
    imgGallery.setAttribute('data-source', element.original)
    imgGallery.setAttribute('alt', element.description)
    linkGallery.appendChild(imgGallery)

});
    
    const modal = basicLightbox.create('<img>')
    const modalImg = modal.element().querySelector('img')
    
    ulGallery.addEventListener('click', function(event) {
        event.preventDefault();
    modalImg.src = event.target.dataset.source;
    modal.show();

    }, true)

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modal.visible()) {
            e.preventDefault()
            modal.close()
        }
    })
    
})






