import{data, pictureData} from "./photo.js";

const bigPicture = document.querySelector(".big-picture");
const bigPictureImage = bigPicture.querySelector(".big-picture__img img");

const bigPictureSocial = bigPicture.querySelector(".big-picture__social");
const bigPictureSocialDescription = bigPictureSocial.querySelector(".social__caption")
const bigPictureSocialReaction = bigPictureSocial.querySelector(".social__likes ");
const bigPictureSocialLikes = bigPictureSocialReaction.querySelector(".likes-count");
const bigPictureSocialComments = bigPictureSocial.querySelector(".social__comment-count");
const bigPictureSocialNumberofComments = bigPictureSocialComments.querySelector(".comments-count");
const pictures = document.querySelector(".pictures");
let photoId = undefined;

function showBigPicture(data) {
    pictures.addEventListener('click', (e)=>{
        photoId = e.target.dataset.id-1;
        bigPicture.classList.remove('hidden');
        bigPictureImage.src = data[photoId].url;
        bigPictureSocialDescription.textContent = data[photoId].description;
        bigPictureSocialLikes.textContent = data[photoId].likes;
        bigPictureSocialNumberofComments.innerText= data[photoId].comments.length;
        

    })
}

showBigPicture(data)