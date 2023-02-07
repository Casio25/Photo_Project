const imageUpload = document.querySelector(".img-upload")
const imageUploadForm = imageUpload.querySelector(".img-upload__start");
const imageIsUploaded = imageUploadForm.querySelector("#upload-file");
const imageUploadOverlay = document.querySelector(".img-upload__overlay");
const imageUploadClose = document.querySelector(".img-upload__cancel");

const userHashtagsAndComments = document.querySelector(".img-upload__text");
const userHashTags = userHashtagsAndComments.querySelector(".text__hashtags");
const maxHashtagSize = 5;
const minHashtagSize = 1;

export function ImageUpload(){
    imageIsUploaded.addEventListener('change', function (e) {
        if (e.target.files[0]) {
            imageUploadOverlay.classList.remove("hidden");
            document.body.classList.add("modal-open");
        }
    })
    function validate(evt) {
        const hashtagText = evt.target.value;
        if (hashtagText.length > 1){
            const re = /\s/g;
            const hashtags = hashtagText.split(re);
            console.log(hashtags);
            if (hashtags.length > 5){
                evt.target.setCustomValidity("Ви не можете ввести більше 5 хештегів");
                evt.target.reportValidity();
                
            }
            checkHashtag(hashtags, evt);
        }
        
    }
    function checkHashtag(tagsArray, evt){
        tagsArray.forEach (function (elem, index, array) {
            const elemArray = elem.split("");
            console.log(elemArray);
            if (elemArray[0] !== "#"){
                evt.target.setCustomValidity("No # as first symbol");
                evt.target.reportValidity();
            }
            if (elemArray.length-1 < minHashtagSize){
                evt.target.setCustomValidity("Кожен # повинен складатись мінімум з 2 символів");
                evt.target.reportValidity();
                
            }
            
        })
    }


    function closeImageUpload() {
        imageUploadOverlay.classList.add("hidden");
        document.body.classList.remove("modal-open");
        imageUploadClose.removeEventListener('click', closeImageUpload);
    }
    imageUploadClose.addEventListener('click', () =>{
        closeImageUpload()
    })
    /*Додаємо eventListener для #*/
    userHashTags.addEventListener('input', function(event) {
        validate(event);
    })
}