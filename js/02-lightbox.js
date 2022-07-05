import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const galleryItemsRef = galleryItems.map(
  ({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  }
);

galleryRef.insertAdjacentHTML("beforeend", galleryItemsRef.join(""));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsPosition: "bottom",
  captionsDelay: 250,
});
