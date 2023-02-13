import {showBigPicture} from "./bigPhoto.js";
import { ImageUpload } from "./validation.js";

const data = await fetch('http://localhost:3000/data')
    .then(function (resp) {
        return resp.json()
    })
    .catch((error) => {
        return `${error}`;
    });


function getOffer(index){
    return {
        id: index+1,
        url: `photos/${index+1}.jpg`,     
        description: getRandomDescription(),
        likes: getRandomNumber(15, 200),
        comments: getComment(getRandomNumber(1, countOfComments))
    }
}


function getComment(countOfComments,) {

    const ArrayOfComments=[];
    for (let i = 0; i < countOfComments; i++) {
        ArrayOfComments.push({
            id: getRandomNumber(1, 999),
            avatar: `img/avatar-${getRandomNumber(1, countOfAvatars)}.svg`,
            comment: comments[getRandomNumber(1, comments.length-1)],
            name: names[getRandomNumber(1, names.length-1)]

        })
        }
    return ArrayOfComments;
    }
export{data};
showBigPicture(data);
ImageUpload();
console.log(data);