class SliderClass {
    constructor () {
        var images = document.getElementsByClassName("slider-images"),
            selectors = document.getElementsByClassName("slider-selectors"); 
    }
}

var sliderIndex = 0, 
    sliderPaused = false; // indexes always start at 0;

// Slider Move functions, positive or negative
function move_slider (n) {
    sliderIndex += n;
    slideshow(sliderIndex);
}

// Sets the current slider to a selected one
function set_current_slider (n) {
    sliderIndex = n;
    slideshow(sliderIndex);
}

//  Pause Automatic slider progression
function pause_slider () {
    sliderPaused = !sliderPaused;
}

// Main / Automatic Slider Functionality
function slideshow () {
    var i = 0;
    var sliderAccess = new SliderClass();
    //var images = document.getElementsByClassName("slider-images");
    //var selectors = document.getElementsByClassName("slider-selectors");

    // Wrappers & Wrap arounds
    if (n > sliderAccess.images.length) { sliderIndex = 0; }
    else if (n < 0) { sliderIndex = sliderAccess.images.length; }

    // Make everything 'hidden' to set new image and selector active
    for (i = 0; i < sliderAccess.images.length; i++) {
        sliderAccess.images[i].style.display = "none";
        sliderAccess.selectors[i].className = sliderAccess.selectors[i].className.replace(" active", "");
    }

    if (!sliderPaused) { sliderIndex++; }

    sliderAccess.images[sliderIndex].style.display = "block";
    sliderAccess.selectors[sliderIndex].className += " active";

    setTimeout( slideshow, 3000);
}

// Selector Slider Functionality
function slideshow (n) {
    var i = 0;
    var sliderAccess = new SliderClass();
    //var images = document.getElementsByClassName("slider-images");
    //var selectors = document.getElementsByClassName("slider-selectors");

    // If we're selecting something, we want to pause automatically
    sliderPaused = true;

    // Wrappers & Wrap arounds
    if (n > sliderAccess.images.length) { sliderIndex = 0; }
    else if (n < 0) { sliderIndex = sliderAccess.images.length; }

    // Make everything 'hidden' to set new image and selector active
    for (i = 0; i < images.length; i++) {
        sliderAccess.images[i].style.display = "none";
        sliderAccess.selectors[i].className = sliderAccess.selectors[i].className.replace(" active", "");
    }

    // Set the currect slider image to show, and it's corresponding selector to active
    sliderAccess.images[sliderIndex].style.display = "block";
    sliderAccess.selectors[sliderIndex].className += " active";
}

// Wait for images to load
setTimeout(function () { }, 3000);
slideshow();