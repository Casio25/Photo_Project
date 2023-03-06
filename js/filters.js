import { data as filterPhoto } from "./main.js";
import { getPictureData } from "./main.js";
const defaultFilter = document.querySelector("#filter-default");
const randomFilter = document.querySelector("#filter-random");
const popularFilter = document.querySelector("#filter-discussed");
const NumberOfRandomPhotos = 10;
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
    shuffle(filterPhoto);
    filterPhoto.map((e, index) => getPictureData(e, index));
}
function popFilter(){
    clearPhotos();
    const popularPhotos =filterPhoto.sort((a, b) => parseFloat(b.comments.length) - parseFloat(a.comments.length));
    filterPhoto.map((e, index) => getPictureData(e, index));
}

function uniqueFIlter() {
    clearPhotos();
        /*Show only 10 unique photo*/
        filteredData = [... new Map(filterPhoto.map((item) => [item["id"], item])).values(),];
    shuffle(filteredData);
    filteredData = filteredData.slice(0, NumberOfRandomPhotos);
    filteredData.map((e, index) => getPictureData(e, index));
    console.log(filteredData);
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
const debouncedPopularPhotos = debounce(popFilter, 500);
const debouncedRandomPhotos = debounce(uniqueFIlter, 500);
const debouncedDefaultPhotos = debounce(defFilter, 500);

export function sorted(){
    randomFilter.addEventListener('click', debouncedRandomPhotos)
    defaultFilter.addEventListener('click', debouncedDefaultPhotos)
    popularFilter.addEventListener('click', debouncedPopularPhotos)
}





