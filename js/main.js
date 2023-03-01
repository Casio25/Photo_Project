import {showBigPicture} from "./bigPhoto.js";
import { ImageUpload } from "./validation.js";
const catImage = document.querySelector(".img-upload__preview img");
const imageUploadOverlay = document.querySelector(".img-upload__overlay")
const scaleValue = document.querySelector(".scale__control--value");
const backendScaleValue = scaleValue.value;
const userHashTags = document.querySelector(".text__hashtags");
const userComments = document.querySelector(".text__description");
const form = document.querySelector(".img-upload__form");




function submit(formExample){
    formExample.addEventListener("submit", (evt) => {
        evt.preventDefault();
        const backendData = {
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
console.log(data);
export{data};
showBigPicture(data);
ImageUpload();

