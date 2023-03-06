import {showBigPicture} from "./bigPhoto.js";
import { ImageUpload } from "./validation.js";
import { sorted } from "./filters.js";

const catImage = document.querySelector(".img-upload__preview img");
const imageUploadOverlay = document.querySelector(".img-upload__overlay")
const scaleValue = document.querySelector(".scale__control--value");
const backendScaleValue = scaleValue.value;
const userHashTags = document.querySelector(".text__hashtags");
const userComments = document.querySelector(".text__description");
const form = document.querySelector(".img-upload__form");
const imageFilters = document.querySelector(".img-filters--inactive");


const pictures = document.querySelector(".pictures");

const pictureTemplate = document.querySelector("#picture");
const pictureImage = pictureTemplate.content.querySelector('.picture__img');
const pictureComment = pictureTemplate.content.querySelector('.picture__comments')
const pictureLikes = pictureTemplate.content.querySelector('.picture__likes');








function submit(formExample){
    formExample.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let backendData = {
            url: catImage.src,
            scale: backendScaleValue,
            filter: catImage.style.filter,
            hashtags: userHashTags.value,
            description: userComments.value,
            id: data.length+1,
            likes: 0,
            comments: [],

        }
        form.reset();
        imageUploadOverlay.classList.add("hidden");
        document.body.classList.remove("modal-open");




        fetch('http://localhost:3000/data', {
            method: "POST",
            body: JSON.stringify(
                backendData
            ),
            // headers: {
            //     "Content-type": "application/json; charset=UTF-8"
            // }
        })
            .then((response) => response.json());


});
}
submit(form);

const data = await fetch('http://localhost:3000/data')
    .then(function (resp) {
        return resp.json()
    })
    .catch((error) => {
        return `${error}`;
    });
const pictureData = data.map((e, index) => getPictureData(e, index));
console.log(data);




export function getPictureData(e) {
    pictureImage.src = e.url;
    pictureImage.style.scale = `${e.scale}%`;
    pictureImage.style.filter = e.filter;
    pictureImage.dataset.id = e.id;
    pictureLikes.textContent = e.likes;
    pictureComment.textContent = e.comments.length;
    const cloneTemplate = pictureTemplate.content.cloneNode(true);
    pictures.appendChild(cloneTemplate);

}
imageFilters.style.opacity =1;

export{data};
export {pictures};
showBigPicture(data);
ImageUpload();
sorted();


