import { galleryItems } from "./gallery-items.js";
// import * as basicLightbox from "basiclightbox";
// Change code below this line

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.

// Подключение скрипта и стилей библиотеки модального окна basicLightbox.Используй CDN сервис
//  jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента < img > в модальном окне перед открытием.
//  Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

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
galleryRef.addEventListener("click", galleryEl);

function galleryEl(event) {
  console.log(event);
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  instance.element().querySelector("img").src = event.target.dataset.source;
  instance.element().querySelector("img").alt =
    event.target.getAttribute("alt");

  instance.show();
}

const instance = basicLightbox.create(`
    <img
      src=""
      alt=""
    />
`);

// const gallery = document.querySelector(".gallery");
// const galleryItemsRef = galleryItems
//   .map(({ preview, original, description }) => {
//     return `<div class = "gallery__item"><a class = "gallery__link" href= "${original}"><img  class = "gallery__image" data-source = "${original}" src = ${preview} alt = "${description}"></a></div>`;
//   })
//   .join("");

// gallery.insertAdjacentHTML("beforeend", galleryItemsRef);

// // взяли из https://simplelightbox.com/ (раздел Usage)
// const lightbox = new SimpleLightbox(".gallery a", {
//   captionsPosition: "bottom",
//   captionsData: "alt",
//   captionsDelay: 250,
// });
