import { galleryItems } from './gallery-items.js';

let textHtml='';
const ulSelector =document.querySelector("ul.gallery");
let escAttribute = false;
const modalImg=(event)=>{
    const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source} width="800" height="600">
`);
    instance.show();
    document.addEventListener("keydown", (event) => onEscPress(event, instance));
};

const insertHtmlImg= ()=>{
    galleryItems.forEach(item=>{
        const text = `<li class="gallery__item">\n
        <a class="gallery__link" href=${item.original}>\n
        <img class="gallery__image" 
        src=${item.preview} 
        data-source=${item.original} 
        alt=${item.description}/>
        </a>
        </li>`;
        textHtml+=text;
    });
    ulSelector.insertAdjacentHTML("afterbegin",textHtml);
};

const onEscPress = (event, instance) => {
    const ESC_KEYCODE = "Escape";
    if (event.code === ESC_KEYCODE) {
      instance.close();
      document.removeEventListener("keydown", (event) =>
        onEscPress(event, instance)
      );
    }
};
insertHtmlImg();
ulSelector.addEventListener("click",(event)=>modalImg(event));