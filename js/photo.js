import {data, countOfOffers, countOfComments, commentArray} from "./main.js";


const pictures = document.querySelector(".pictures");

const pictureTemplate = document.querySelector("#picture");
const pictureImage = pictureTemplate.content.querySelector('.picture__img');
const pictureComment = pictureTemplate.content.querySelector('.picture__comments')
const pictureLikes = pictureTemplate.content.querySelector('.picture__likes');
const pictureInfo = data.map((e, index) => getPictureInfo(index));

function getPictureInfo(index) {
    pictureImage.src = data[index].url;
    pictureLikes.textContent = data[index].likes;
    pictureComment.textContent = commentArray[index].comment;
    const cloneTemplate = pictureTemplate.content.cloneNode(true);
    pictures.appendChild(cloneTemplate);
    
}
