
import{data, pictureData} from "./photo.js";

const bigPicture = document.querySelector(".big-picture");
const bigPictureImage = bigPicture.querySelector(".big-picture__img img");
const closeButton = document.querySelector(".big-picture__cancel")

const bigPictureSocial = bigPicture.querySelector(".big-picture__social");
const bigPictureSocialDescription = bigPictureSocial.querySelector(".social__caption")
const bigPictureSocialReaction = bigPictureSocial.querySelector(".social__likes ");
const bigPictureSocialLikes = bigPictureSocialReaction.querySelector(".likes-count");
const bigPictureSocialComments = bigPictureSocial.querySelector(".social__comment-count");
const bigPictureSocialNumberofComments = bigPictureSocialComments.querySelector(".comments-count");
const pictures = document.querySelector(".pictures");
const HTMLbody = document.body;
let photoId = undefined;
let commentsHTML ="";



function showBigPicture(data) {
    pictures.addEventListener('click', (e)=>{
        photoId = e.target.dataset.id-1;
        if(isNaN(photoId)){
        }else{
        bigPicture.classList.remove('hidden');
        bigPictureImage.src = data[photoId].url;
        bigPictureSocialLikes.textContent = data[photoId].likes;
        bigPictureSocialNumberofComments.textContent= data[photoId].comments.length;
        bigPictureSocialDescription.textContent = data[photoId].description;
        HTMLbody.classList.add("modal-open");

            data[photoId].comments.forEach((comment) => {
                commentsHTML += `
        <li class="social__comment" data-post-id="${comment.id}">
            <img class="social__picture" src="${comment.avatar}" alt="${comment.name}" width="35" height="35">
            <p class="social__text">${comment.comment}</p>
        </li>`;
            });

            bigPicture.querySelector(".social__comments").innerHTML = commentsHTML;
        }


    })

    function closeBigPicture() {
        bigPicture.classList.add('hidden');
        HTMLbody.classList.remove("modal-open");
        closeButton.removeEventListener('click', closeBigPicture);
    }
    closeButton.addEventListener('click', () =>{
        closeBigPicture();
    })
    HTMLbody.addEventListener('keydown', (e)=>{
    if(e.keyCode === 27){
       closeBigPicture();
    }
    })
    
}

showBigPicture(data)