import {showBigPicture} from "./bigPhoto.js";
import { ImageUpload } from "./validation.js";

const data = await fetch('http://localhost:3000/data')
    .then(function (resp) {
        return resp.json()
    })
    .catch((error) => {
        return `${error}`;
    });

export{data};
showBigPicture(data);
ImageUpload();
