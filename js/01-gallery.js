import { galleryItems } from './gallery-items.js';

let textHtml='';
const ulSelector =document.querySelector("ul.gallery");

const modalImg=(event)=>{
    const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source} width="800" height="600">
`)
instance.show()
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

insertHtmlImg();
ulSelector.addEventListener("click",(event)=>modalImg(event));