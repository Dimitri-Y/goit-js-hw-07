import { galleryItems } from "./gallery-items.js";

let textHtml = "";
const ulSelector = document.querySelector("ul.gallery");
let escAttribute = false;

const modalImg = (event) => {
  const instance = basicLightbox.create(
    `
  <img src=${event.target.dataset.source} width="800" height="600">
`,
    {
      onShow: (instance) =>
        document.addEventListener("keydown", (event) =>
          onEscPress(event, instance)
        ),
      onClose: (instance) =>
        document.removeEventListener("keydown", (event) =>
          onEscPress(event, instance)
        ),
    }
  );
  instance.show();
};

const onEscPress = (event, instance) => {
  const ESC_KEYCODE = "Escape";
  if (event.code === ESC_KEYCODE) {
    instance.close();
  }
};

const insertHtmlImg = () => {
  textHtml = galleryItems
    .map(
      (item) => `<li class="gallery__item">
             <a class="gallery__link" herf="${item.original}">
             <img class="gallery__image" 
             src=${item.preview} 
             data-source=${item.original} 
             alt=${item.description}/>
             </a>
             </li>`
    )
    .join("\n");
  ulSelector.insertAdjacentHTML("afterbegin", textHtml);
};

// const insertHtmlImg= ()=>{
//     galleryItems.forEach(item=>{
//         const textHtml += `<li class="gallery__item">\n
//         <a class="gallery__link">\n
//         <img class="gallery__image"
//         src=${item.preview}
//         data-source=${item.original}
//         alt=${item.description}/>
//         </a>
//         </li>`;
//     });
//     ulSelector.insertAdjacentHTML("afterbegin",textHtml);
// };

insertHtmlImg();
ulSelector.addEventListener("click", (event) => modalImg(event));
