const openBTN = document.querySelector('#openBTN');
const closeBTN = document.querySelector('#closeBTN');
const mobileMENU = document.querySelector('#mobileMENU');

openBTN.addEventListener('click', () => {
    setTimeout(() => {
        openBTN.classList.add('hidden');
        closeBTN.classList.remove('hidden');
        mobileMENU.classList.remove('hidden');
    }, 200);
});

closeBTN.addEventListener('click', () => {

    setTimeout(() => {
        closeBTN.classList.add('hidden');
        openBTN.classList.remove('hidden');
        mobileMENU.classList.add('hidden');
    }, 200);

});

const infiniteSlide = document.querySelectorAll('.infiniteSlide');

const overflowSlide = () => {
    for (let i = 0; i < infiniteSlide.length; i++) {
        const element = infiniteSlide[i];
        element.style.transition = 'transform 10s linear';
        element.style.transform = `translateX(-100%)`;
    }
};

const restartSlide = () => {
    setTimeout(() => {
        for (let i = 0; i < infiniteSlide.length; i++) {
            const element = infiniteSlide[i];
            element.style.transition = 'none';
            element.style.transform = 'translateX(0)';
        }
    }, 15000);
};

setInterval(() => {
    overflowSlide();
    restartSlide();
}, 16000);


