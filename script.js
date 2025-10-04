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

// Scroll Animation Observer - Works for both scroll up and down
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    // Observe all sections with scroll animations
    const scrollSections = document.querySelectorAll('.scroll-section');
    scrollSections.forEach(section => {
        observer.observe(section);
    });
});

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

// Multi-language Greeting Switcher
document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');

    const greetings = [
        'こんにちは！',      // Japanese
        'Hello!',            // English
        '你好！',            // Chinese
        'Hola!',             // Spanish
        'Bonjour!',          // French
        'Hallo!',            // German
        'Ciao!',             // Italian
        'Olá!',              // Portuguese
        '안녕하세요!',        // Korean
        'Привет!',           // Russian
        'مرحبا!',            // Arabic
        'नमस्ते!',           // Hindi
        'Merhaba!',          // Turkish
        'Hej!',              // Swedish
        'Sawubona!'          // Zulu
    ];

    let currentIndex = 0;

    greetingElement.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % greetings.length;
        greetingElement.textContent = greetings[currentIndex];
    });
});

// Timeline Slider Functionality
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('timelineSlider');
    const slides = slider.querySelectorAll('.timeline-slide');
    const prevBtn = document.getElementById('timelinePrev');
    const nextBtn = document.getElementById('timelineNext');
    const dotsContainer = document.getElementById('timelineDots');
    const dots = dotsContainer.querySelectorAll('.dot');

    let currentSlide = 0;
    const totalSlides = slides.length;

    // Show specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Show current slide
        slides[index].classList.add('active');
        dots[index].classList.add('active');

        // Update button states
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === totalSlides - 1;

        currentSlide = index;
    }

    // Next slide
    nextBtn.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            showSlide(currentSlide + 1);
        }
    });

    // Previous slide
    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    });

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentSlide > 0) {
            showSlide(currentSlide - 1);
        } else if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
            showSlide(currentSlide + 1);
        }
    });

    // Initialize first slide
    showSlide(0);
});

// GitHub Projects Loader
document.addEventListener('DOMContentLoaded', () => {
    const username = 'Nishimichi01';
    const projectsGrid = document.getElementById('projectsGrid');

    // Fetch repositories from GitHub API
    async function fetchGitHubRepos() {
        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);

            if (!response.ok) {
                throw new Error('Failed to fetch repositories');
            }

            const repos = await response.json();

            // Filter out forked repos and sort by stars
            const ownRepos = repos
                .filter(repo => !repo.fork)
                .sort((a, b) => b.stargazers_count - a.stargazers_count);

            displayProjects(ownRepos);
        } catch (error) {
            console.error('Error fetching GitHub repos:', error);
            projectsGrid.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Unable to load projects. Please check back later.</p>
                </div>
            `;
        }
    }

    // Display projects in the grid
    function displayProjects(repos) {
        if (repos.length === 0) {
            projectsGrid.innerHTML = `
                <div class="no-projects">
                    <i class="fas fa-folder-open"></i>
                    <p>No projects available yet. Check back soon!</p>
                </div>
            `;
            return;
        }

        projectsGrid.innerHTML = repos.map(repo => {
            const description = repo.description || 'No description available';
            const language = repo.language || 'Code';
            const stars = repo.stargazers_count;
            const forks = repo.forks_count;
            const lastUpdated = new Date(repo.updated_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short'
            });

            return `
                <div class="project-card">
                    <div class="project-header">
                        <div class="project-icon">
                            <i class="fas fa-folder"></i>
                        </div>
                        <div class="project-links-header">
                            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                                <i class="fab fa-github"></i>
                            </a>
                            ${repo.homepage ? `
                                <a href="${repo.homepage}" target="_blank" rel="noopener noreferrer" title="Live Demo">
                                    <i class="fas fa-external-link-alt"></i>
                                </a>
                            ` : ''}
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>${repo.name}</h3>
                        <p>${description}</p>
                        <div class="project-tech">
                            ${repo.topics && repo.topics.length > 0 ?
                                repo.topics.slice(0, 3).map(topic =>
                                    `<span class="tech-tag">${topic}</span>`
                                ).join('')
                                : `<span class="tech-tag">${language}</span>`
                            }
                        </div>
                    </div>
                    <div class="project-footer">
                        <div class="project-stats">
                            <span title="Stars">
                                <i class="fas fa-star"></i> ${stars}
                            </span>
                            <span title="Forks">
                                <i class="fas fa-code-branch"></i> ${forks}
                            </span>
                        </div>
                        <span class="project-updated">Updated ${lastUpdated}</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Initialize
    fetchGitHubRepos();
});

// Form submission success message
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        // Create success message
        const successMsg = document.createElement('div');
        successMsg.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem 2rem;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(129, 140, 248, 0.4);
            z-index: 10000;
            animation: slideIn 0.5s ease;
            font-size: 1.1rem;
            font-weight: 500;
        `;
        successMsg.innerHTML = '✓ Message sent successfully!';
        document.body.appendChild(successMsg);

        // Remove after 4 seconds
        setTimeout(() => {
            successMsg.style.animation = 'slideOut 0.5s ease';
            setTimeout(() => successMsg.remove(), 500);
        }, 4000);

        // Clean URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
});