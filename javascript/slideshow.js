let slideIndex = 0;

function changeSlide(n) {
    const slides = document.querySelectorAll('.slides');
    const dots = document.querySelectorAll('.dot');

    slides[slideIndex].classList.remove('active');
    dots[slideIndex].classList.remove('active');

    slideIndex = (slideIndex + n + slides.length) % slides.length;

    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

function currentSlide(n) {
    const slides = document.querySelectorAll('.slides');
    const dots = document.querySelectorAll('.dot');

    slides[slideIndex].classList.remove('active');
    dots[slideIndex].classList.remove('active');

    slideIndex = n - 1;

    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}
