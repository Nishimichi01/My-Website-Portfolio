// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Create animated starfield
function createStarfield() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars-container';
    document.body.appendChild(starsContainer);

    // Create multiple stars
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        starsContainer.appendChild(star);
    }

    // Create shooting stars/comets
    function createComet() {
        const comet = document.createElement('div');
        comet.className = 'comet';
        comet.style.left = Math.random() * 100 + '%';
        comet.style.top = Math.random() * 50 + '%';
        comet.style.animationDelay = Math.random() * 5 + 's';
        comet.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(comet);

        // Remove comet after animation
        setTimeout(() => {
            comet.remove();
        }, 4000);
    }

    // Create comets periodically
    setInterval(createComet, 8000);
    // Initial comets
    setTimeout(() => createComet(), 1000);
    setTimeout(() => createComet(), 3000);
}

// Initialize starfield when page loads
document.addEventListener('DOMContentLoaded', createStarfield);

// Local Music Player Functionality
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bgAudio');
    const musicToggle = document.getElementById('musicToggle');
    const volumeControl = document.getElementById('volumeControl');
    const volumePercent = document.getElementById('volumePercent');

    // Set initial volume
    audio.volume = 0.7;

    // Auto-play music on page load
    audio.play().then(() => {
        musicToggle.classList.add('playing');
        musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
    }).catch(() => {
        // If autoplay is blocked, show play icon
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
    });

    // Play/Pause toggle
    musicToggle.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            musicToggle.classList.add('playing');
            musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            musicToggle.classList.remove('playing');
            musicToggle.innerHTML = '<i class="fas fa-music"></i>';
        }
    });

    // Volume control
    volumeControl.addEventListener('input', (e) => {
        const volume = e.target.value / 100;
        audio.volume = volume;
        volumePercent.textContent = e.target.value + '%';
    });
});