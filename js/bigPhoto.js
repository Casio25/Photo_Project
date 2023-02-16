


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
const bigPictureLoadCommennts = document.querySelector(".social__comments-loader");
const HTMLbody = document.body;
let photoId = undefined;
let commentsHTML = "";
let commentsCountHTML = "";
let equalFive = 5;
let slicedPictureArray = undefined;



export function showBigPicture(bigPictureArray) {
    pictures.addEventListener('click', (e) => {
        photoId = e.target.dataset.id - 1;
        if (isNaN(photoId)) {
        } else {
            bigPicture.classList.remove('hidden');
            const pictureArray = bigPictureArray[photoId];
            bigPictureImage.src = pictureArray.url;
            bigPictureSocialLikes.textContent = pictureArray.likes;
            bigPictureSocialNumberofComments.textContent = pictureArray.comments.length;
            bigPictureSocialDescription.textContent = pictureArray.description;
            HTMLbody.classList.add("modal-open");

            

            /* Making comment length check*/
            function loadAllComments(){
                console.log(pictureArray.comments)
                pictureArray.comments.forEach((comment) => {
                    commentsHTML += `
        <li class="social__comment" data-post-id="${comment.id}">
            <img class="social__picture" src="${comment.avatar}" alt="${comment.name}" width="35" height="35">
            <p class="social__text">${comment.comment}</p>
        </li>`;
                });

                bigPicture.querySelector(".social__comments").innerHTML = commentsHTML;
            }

            /*Function that load only five comments */
            function loadFiveComments(equalFive){
                console.log(` Length of all comments is ${pictureArray.comments.length}`)
                slicedPictureArray = pictureArray.comments.slice(0, equalFive)
                console.log(`Length of shown comments is ${slicedPictureArray.length}`);
                slicedPictureArray.forEach((comment) => {
                    commentsHTML += `
        <li class="social__comment" data-post-id="${comment.id}">
            <img class="social__picture" src="${comment.avatar}" alt="${comment.name}" width="35" height="35">
            <p class="social__text">${comment.comment}</p>
        </li>`;
                });
                bigPicture.querySelector(".social__comments").innerHTML = commentsHTML;
                /* Hiding "Load more" button if all comments shown */
                if (pictureArray.comments.length === slicedPictureArray.length){
                    bigPictureLoadCommennts.classList.add("hidden");
                }
            }

            function getAllComments(){
                bigPictureLoadCommennts.addEventListener('click', function() {
                    equalFive += 5;
                    commentsHTML = "";
                    loadFiveComments(equalFive);
                    commentsCountHTML = `${slicedPictureArray.length} из <span class="comments - count"> ${pictureArray.comments.length + " "} </span> комментарів`;
                    bigPictureSocialComments.innerHTML = commentsCountHTML;

                })
                /*making loadAllComments function*/
                if (pictureArray.comments.length < equalFive){
                    console.log("less than 5");
                    loadAllComments();
                    bigPictureLoadCommennts.classList.add("hidden");
                    bigPictureSocialComments.classList.add("hidden");
                }else{
                    console.log("more than 5");
                    loadFiveComments(equalFive);
                }
            }
            getAllComments();
            

        }


    })

    function closeBigPicture() {
        bigPicture.classList.add('hidden');
        HTMLbody.classList.remove("modal-open");
        closeButton.removeEventListener('click', closeBigPicture);
        commentsHTML = "";
        equalFive = 5;
        commentsCountHTML = "";
        bigPictureLoadCommennts.classList.remove("hidden");
        bigPictureSocialComments.classList.remove("hidden");
    }
    closeButton.addEventListener('click', () => {
        closeBigPicture();
    })
    HTMLbody.addEventListener('keydown', (e) => {
        if (e.keyCode === 27) {
            closeBigPicture();
        }
    })

}

