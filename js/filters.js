import { data as filterPhoto } from "./main.js";
import { getPictureData } from "./main.js";
const defaultFilter = document.querySelector("#filter-default");
const randomFilter = document.querySelector("#filter-random");
const popularFilter = document.querySelector("#filter-discussed");
const NumberOfRandomPhotos = 10;
const delayTime = 500;
let filteredData = undefined;
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
function clearPhotos() {
    let pictures = document.querySelectorAll('.picture');
    for (let i = 0; i < pictures.length; i++) {
        pictures[i].remove()
    }
}
function defFilter() {
    clearPhotos();
    console.log(filterPhoto)
    shuffle(filterPhoto);
    console.log(filterPhoto);
    filterPhoto.map((e, index) => getPictureData(e, index));
}
function popFilter(){
    clearPhotos();
    filterPhoto.sort((a, b) => parseFloat(b.comments.length) - parseFloat(a.comments.length));
    filterPhoto.map((e, index) => getPictureData(e, index));
}

function uniqueFIlter() {
    clearPhotos();
        /*Show only 10 unique photo*/
        filteredData = [... new Map(filterPhoto.map((item) => [item["id"], item])).values(),];
    filteredData = filteredData.slice(0, NumberOfRandomPhotos);
    filteredData.map((e, index) => getPictureData(e, index));
    }

function debounce(callee, timeoutMs) {
    return function perform(...args) {
        let previousCall = this.lastCall
        this.lastCall = Date.now()
        if (previousCall && this.lastCall - previousCall <= timeoutMs) {
            clearTimeout(this.lastCallTimer)
        }
        this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs)
    }
}
const debouncedPopularPhotos = debounce(popFilter, delayTime);
const debouncedRandomPhotos = debounce(uniqueFIlter, delayTime);
const debouncedDefaultPhotos = debounce(defFilter, delayTime);

export function sorted(){
    randomFilter.addEventListener('click', debouncedRandomPhotos)
    defaultFilter.addEventListener('click', debouncedDefaultPhotos)
    popularFilter.addEventListener('click', debouncedPopularPhotos)
}





