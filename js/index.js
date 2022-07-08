// navigation part start
let bar = document.querySelector('.bar');
let navigation = document.querySelector('.mobile-navigation');

bar.onclick = function(){
    this.classList.toggle('close');
    navigation.classList.toggle('open')
}







// navigation part end





















// carousel part start
let carouselContainer = document.querySelector('.carousel-container');
let carouselSlide = document.querySelector('.carousel-slide');
let nextBtn = document.querySelector('#nextBtn');
let prevBtn = document.querySelector('#prevBtn');

let counter = 1;
let item = carouselSlide.querySelector('li').clientWidth;
let slideWidth = carouselSlide.clientWidth + item;

nextBtn.addEventListener('click', function () {
    if (counter <= 4) {
        carouselSlide.style.transform = 'translateX(' + (-item * counter) + 'px)';
        counter++;
    }
    if (counter > 4) counter = 0;

});
prevBtn.addEventListener('click', function () {
    counter--;
    if (counter <= 0) counter = 1;
    if (counter > 0) {
        carouselSlide.style.transform = 'translateX(' + (-item * (counter - 1)) + 'px)';
    }
});
setInterval(() => {
    nextBtn.click()
}, 2000);
// carousel part end
