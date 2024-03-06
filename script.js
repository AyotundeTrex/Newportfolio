// ... (unchanged) ...

// Hide profile picture on scroll
const profilePicture = document.querySelector('.profile-container');
const profileOptions = {
    rootMargin: "0px 0px -50% 0px"
};

const profileObserver = new IntersectionObserver(function (entries, profileObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            profilePicture.style.opacity = '1';
        } else {
            profilePicture.style.opacity = '0';
        }
    });
}, profileOptions);

profileObserver.observe(header);

// ... (unchanged) ...
