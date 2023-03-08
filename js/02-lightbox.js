import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

galleryItems.forEach((item) => {
    const galleryLink = document.createElement('a');
    galleryLink.setAttribute('href', item.original);
    galleryLink.classList.add('gallery__item');

    const galleryImage = document.createElement('img');
    galleryImage.src = item.preview;
    galleryImage.setAttribute('alt', item.description);
    galleryImage.setAttribute('data-source', item.original);
    galleryImage.classList.add('gallery__image');

    gallery.append(galleryLink);
    galleryLink.append(galleryImage);
});

const lightbox = new SimpleLightbox('.gallery .gallery__item', {
  captions: true,
  captionSelector: 'img',
    captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  enableKeyboard: true,
});