import {data as dataOfPictures} from "./main.js";


const pictures = document.querySelector(".pictures");

const pictureTemplate = document.querySelector("#picture");
const pictureImage = pictureTemplate.content.querySelector('.picture__img');
const pictureComment = pictureTemplate.content.querySelector('.picture__comments')
const pictureLikes = pictureTemplate.content.querySelector('.picture__likes');

const cloneTemplate = pictureTemplate.content.cloneNode(true);
const pictureData = dataOfPictures.map((e, index) => getPictureData(e,index));



export function getPictureData(e) {
    pictureImage.src = e.url;
    pictureImage.dataset.id = e.id;
    pictureLikes.textContent = e.likes;
    pictureComment.textContent = e.comments.length;
    const cloneTemplate = pictureTemplate.content.cloneNode(true);
    pictures.appendChild(cloneTemplate);
    
}

export{pictureData,}
