// Home Javascript

/* Scroll Animation Script */
const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const target = entry.target;

            if (target.classList.contains('section-information')) {
                target.querySelector('.profile').classList.add('animation-slidein');
                target.querySelector('.profile-description-wrap').classList.add('animation-slidein');
            } else if (target.classList.contains('section-about')) {
                target.querySelector('.about-title-wrap').classList.add('animation-fadein');
                target.querySelector('.about-contents-wrap').classList.add('animation-slidein');
            } else if (target.classList.contains('section-team')) {
                target.querySelector('.team-title-wrap').classList.add('animation-fadein');
                target.querySelector('.team-contents-wrap').classList.add('animation-slidein');
            } else if (target.classList.contains('section-thumbnails')) {
                target.querySelector('.thumbnail-title-wrap').classList.add('animation-fadein');
                target.querySelector('.thumbnail-contents-wrap').classList.add('animation-slidein');
            }
        }
    });
};

const observer = new IntersectionObserver(intersectionCallback, {
    threshold: 0.5,
});

const sectionInformation = document.querySelector('.section-information');
const sectionAbout = document.querySelector('.section-about');
const sectionTeam = document.querySelector('.section-team');
const sectionThumbnails = document.querySelector('.section-thumbnails');

if (sectionInformation) {
    observer.observe(sectionInformation);
}

if (sectionAbout) {
    observer.observe(sectionAbout);
}

if (sectionTeam) {
    observer.observe(sectionTeam);
}

if (sectionThumbnails) {
    observer.observe(sectionThumbnails);
}
/* // Scroll Animation Script */