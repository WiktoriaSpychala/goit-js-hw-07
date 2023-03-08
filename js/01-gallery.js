import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

galleryItems.forEach((item) => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery__item');

    const galleryLink = document.createElement('a');
    galleryLink.setAttribute('href', item.original);
    galleryLink.classList.add('gallery__link');

    const galleryImage = document.createElement('img');
    galleryImage.src = item.preview;
    galleryImage.setAttribute('alt', item.description);
    galleryImage.setAttribute('data-source', item.original);
    galleryImage.classList.add('gallery__image');

    gallery.append(galleryItem);
    galleryItem.append(galleryLink);
    galleryLink.append(galleryImage);
});

let instance = basicLightbox.create(`<img src="" alt=""`);

const bigImage = (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();

  instance = basicLightbox.create(
    `<img src=${event.target.getAttribute(
      "data-source"
    )} alt="${event.target.getAttribute("alt")}">`
  );
  instance.show();
};
gallery.addEventListener('click', bigImage);



document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && instance.visible()) instance.close();
});