const openBTN = document.querySelector('#openBTN');
const closeBTN = document.querySelector('#closeBTN');
const mobileMENU = document.querySelector('#mobileMENU');

const openMobile = () => {
    openBTN.classList.add('hidden');
    closeBTN.classList.remove('hidden');
    mobileMENU.classList.remove('hidden');
}
const closeMobile = () => {
    closeBTN.classList.add('hidden');
    openBTN.classList.remove('hidden');
    mobileMENU.classList.add('hidden');
}

openBTN.addEventListener('click', openMobile);
closeBTN.addEventListener('click', closeMobile);



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
const controlScreen = () => {
    if (screen.width >= 800) {
        overflowSlide();
        restartSlide();
    }
}
setInterval(() => {
    controlScreen();
}, 16000);


const communicationSlide = document.querySelectorAll('.communicationSlide');

const coverflowSlide = () => {
    for (let i = 0; i < communicationSlide.length; i++) {
        const element = communicationSlide[i];
        element.style.transition = 'transform 10s linear';
        element.style.transform = `translateX(-400%)`;
    }
};

const crestartSlide = () => {
    setTimeout(() => {
        for (let i = 0; i < communicationSlide.length; i++) {
            const element = communicationSlide[i];
            element.style.transition = 'none';
            element.style.transform = 'translateX(0)';
        }
    }, 15000);
};

setInterval(() => {
    if (screen.width < 800) {
        setInterval(() => {
            coverflowSlide();
            crestartSlide();
        }, 16000);
    }
}, 17000);
