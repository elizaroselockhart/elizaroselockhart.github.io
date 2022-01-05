var slideIndex = [1, 1, 1, 1];
var slideid = ["slideshow-gallery-1", "slideshow-gallery-2", "slideshow-gallery-3", "slideshow-gallery-4"];

DisplaySlides(1, 0);
DisplaySlides(1, 1);
DisplaySlides(1, 2);
DisplaySlides(1, 3);

function NextSlide(n, no) {
    DisplaySlides(slideIndex[no] += n, no);
}

function CurrentSlide(n) {
    DisplaySlides(slideIndex = n);
}

function DisplaySlides(n, no) {
    let slides = document.getElementsByClassName(`slides-fade-${no}`);

    if (n > slides.length) {
        slideIndex[no] = 1;
    }
    if (n < 1) {
        slideIndex[no] = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    let slidedisplay = slides[slideIndex[no] - 1];
    slidedisplay.style.display = "block";


    //slides[slideIndex[no] - 1].style.display = "block";
}

