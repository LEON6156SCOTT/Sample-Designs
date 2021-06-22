var slides = document.querySelectorAll(`.slide`); // Get an array of slides

// global index for slides and countdown
var index = 2, time = 5000, long_wait = 30000;
slides[index].classList.add('active');

/**
 * Advance to next slide, setting global index
 */
function advanceSlide() {
    slides[index].classList.remove('active');

    // advance to next slide

    index++;
    if (index === slides.length) index = 0;

    slides[index].classList.add('active');
    rotateImages();
}


let slidesInterval = setInterval(() => {advanceSlide()}, time);

/**
 *h4 Set a new global index
 *h4 @param {int} newIndex
 **/
function changeImage(newIndex) {
    slides[index].classList.remove('active'); // deactivate current slide
    index = newIndex;
    slides[index].classList.add('active');    
    rotateImages();

    // reset interval
    clearInterval(slidesInterval);
    setTimeout(() => {clearInterval(slidesInterval); slidesInterval = setInterval(advanceSlide, time);}, long_wait)
}


/**
 * Rotate images according to global index.
 */
function rotateImages() {
    var speakerImages = document.querySelectorAll(`.speaker-img`);
    
    for (var i = 0; i < speakerImages.length; i++) {
        var img = speakerImages[i];

        if (i === index) {
            img.classList.remove('border');
            img.classList.remove('border-warning');

        } else {
            img.classList.add('border');
            img.classList.add('border-warning');
        }

        const offset = Math.abs(index - i);
        if (offset === 0) {
            img.classList.remove('w-50');
            img.classList.remove('w-75');
            img.classList.add('w-100');
        } else if (offset === 1) {
            img.classList.remove('w-50');
            img.classList.remove('w-100');
            img.classList.add('w-75');
        } else if (offset >= 2) {
            img.classList.remove('w-75');
            img.classList.remove('w-100');
            img.classList.add('w-50');
        }
    }
}

// attach click events to speaker images
document.getElementById('speaker-a').addEventListener('click', () => {changeImage(0)});
document.getElementById('speaker-b').addEventListener('click', () => {changeImage(1)});
document.getElementById('speaker-c').addEventListener('click', () => {changeImage(2)});
document.getElementById('speaker-d').addEventListener('click', () => {changeImage(3)});