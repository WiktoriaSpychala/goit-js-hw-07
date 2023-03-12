import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryItem = galleryItems.map((item) => `<div class = "gallery__item">
<a class = "gallery__link" href = ${item.original}>
<img class = "gallery__image" src = ${item.preview}
data-source = ${item.original} alt = ${item.description}/></a></div>`).join("");

gallery.insertAdjacentHTML('beforeend', galleryItem);

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
