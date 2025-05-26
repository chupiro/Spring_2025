const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".slider-image");
const txt = document.querySelectorAll(".slider-txt");
const bottom = document.getElementById("bottom");

let currentSlideIndex = 0;
const paginationCircles = [];

// Создание кружков пагинации 
function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    bottom.appendChild(div);
    paginationCircles.push(div);
}
// Добавление кружков пагинации в зависимости от кол-ва картинок в слайдере
function addPagination() {
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}
// Отображение активного слайда в кружке пагинации путём заливки кружка
function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("active");
}
// Убрать заливку с неактивного кружка
function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("active");
}
// Показ слайда
function showSlide() {
    slides[currentSlideIndex].classList.add("block");
}
// Скрытие слайда
function hideSlide() {
    slides[currentSlideIndex].classList.remove("block");
}

// Показ текста
function showText() {
    txt[currentSlideIndex].classList.add("block");
}
// Скрытие текста
function hideText() {
    txt[currentSlideIndex].classList.remove("block");
}

function changeSlide(slideIndex) {
    hideSlide();
    hideText();
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
    showText();
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if(newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if(newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
}

addPagination();
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);
