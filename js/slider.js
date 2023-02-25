

const effects = document.querySelector(".img-upload__effects");
const catImage = document.querySelector(".img-upload__preview img");
const effectPreview = document.querySelector(".effect-level");
const effectLevelSlider = document.querySelector(".effect-level__slider");
const scaleValue = document.querySelector(".scale__control--value");
const scale = document.querySelector(".img-upload__scale");
const smallerScale = document.querySelector("scale__control--smaller");
const biggerScale = document.querySelector(".scale__control--bigger");
let selectedEffect = undefined
let scaleValueStep = 25;
scaleValue.value = parseInt(scaleValue.value.match(/\d+/));


photoSlider(1, 0.1, 0, 1);
export function slider(){
    console.log("slider");
    addFilter();
    addScale();

}
function increaseScale() {
    if (scaleValue.value < 100) {
        scaleValue.value = Number(scaleValue.value) + Number(scaleValueStep)
        scaleValue.classList.add = `new_value-${scaleValue.value}` + "%";

        catImage.style.transform = `scale(${scaleValue.value / 100})`
    }
}
function scaleDown() {
    if (scaleValue.value > 25) {
        scaleValue.value = `${scaleValue.value - scaleValueStep}`;
        scaleValue.classList.add = `new_value-${scaleValue.value}` + "%";
        catImage.style.transform = `scale(${scaleValue.value / 100})`
    }
}
function addScale(){
    scale.addEventListener("click", (evt) => {
        if (evt.target.classList.contains("scale__control--bigger")){
            increaseScale();
        } else if (evt.target.classList.contains("scale__control--smaller")){
            scaleDown();
        }
    });
}






function addFilter(){
    effects.addEventListener('input', (e) => {
        selectedEffect = e.target.value;
        console.log(selectedEffect);
        switch (selectedEffect) {
            case "none":
                catImage.style.filter = "none";
                effectPreview.style.display = "none";
                break;
            case "chrome":
                applyFilter("chrome", "grayscale", 1, 0.1, 0, 1, "");
                break;
            case "sepia":
                applyFilter("sepia", "sepia", 1, 0.1, 0, 1, "");
                break;
            case "marvin":
                applyFilter("marvin", "invert", 100, 1, 0, 100, "%");
                break;
            case "phobos":
                applyFilter("phobos", "blur", 3, 0.1, 0, 3, "px");
                break;
            case "heat":
                applyFilter("heat", "brightness", 3, 0.1, 1, 3, "");
                break;
            default:
                effectLevelSlider.noUiSlider.destroy();
                effectPreview.style.display = "none";
                break;

        }
    })
}

function photoSlider(start, step, filterMin, filterMax,){
    noUiSlider.create(effectLevelSlider, {
        start: start,
        tooltips: true,
        connect: true,
        step: step,
        range: {
            min: filterMin,
            max: filterMax,
        },
    });
};


function applyFilter(HTMLname, filterName, start, step, filterMin, filterMax, measure){
    catImage.classList.add(`used_effect-${HTMLname}`);
    effectLevelSlider.noUiSlider.destroy()
    photoSlider(start, step, filterMin, filterMax,);
    effectLevelSlider.noUiSlider.on("update", function (value) {
        catImage.style.filter = `${filterName}(${value}${measure})`;
        console.log(value);
    });
    effectPreview.style.display = "block";
    
}