/**
 * Modern Portfolio JavaScript
 * Handles theme switching, project filtering, smooth scrolling, and animations
 */

// ==========================================
// Theme Toggle Functionality
// ==========================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const themeIcon = document.querySelector('.theme-icon');

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
	const theme = html.getAttribute('data-theme');
	const newTheme = theme === 'light' ? 'dark' : 'light';

	html.setAttribute('data-theme', newTheme);
	localStorage.setItem('theme', newTheme);
	updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
	themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
}

// ==========================================
// Navbar Scroll Effect
// ==========================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
	if (window.scrollY > 50) {
		navbar.classList.add('scrolled');
	} else {
		navbar.classList.remove('scrolled');
	}
});

// ==========================================
// Smooth Scrolling for Navigation Links
// ==========================================
document.querySelectorAll('.nav-link, .cta-button').forEach(link => {
	link.addEventListener('click', (e) => {
		const href = link.getAttribute('href');

		// Only handle internal links
		if (href.startsWith('#')) {
			e.preventDefault();
			const targetId = href.substring(1);
			const targetSection = document.getElementById(targetId);

			if (targetSection) {
				const navHeight = navbar.offsetHeight;
				const targetPosition = targetSection.offsetTop - navHeight;

				window.scrollTo({
					top: targetPosition,
					behavior: 'smooth'
				});
			}
		}
	});
});

// ==========================================
// Active Navigation Link Highlighting
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
	let current = '';
	const scrollPosition = window.scrollY + 100;

	sections.forEach(section => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;

		if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
			current = section.getAttribute('id');
		}
	});

	navLinks.forEach(link => {
		link.classList.remove('active');
		if (link.getAttribute('href') === `#${current}`) {
			link.classList.add('active');
		}
	});
});

// ==========================================
// Project Filtering
// ==========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		// Update active button
		filterBtns.forEach(b => b.classList.remove('active'));
		btn.classList.add('active');

		const filterValue = btn.getAttribute('data-filter');

		// Filter projects with animation
		projectCards.forEach((card, index) => {
			const category = card.getAttribute('data-category');

			// Add small delay for staggered animation
			setTimeout(() => {
				if (filterValue === 'all' || category === filterValue) {
					card.style.display = 'block';
					card.style.animation = 'fadeInUp 0.5s ease-out forwards';
				} else {
					card.style.animation = 'fadeOut 0.3s ease-out forwards';
					setTimeout(() => {
						card.style.display = 'none';
					}, 300);
				}
			}, index * 50);
		});
	});
});

// ==========================================
// Intersection Observer for Scroll Animations
// ==========================================
const observerOptions = {
	threshold: 0.1,
	rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.style.opacity = '1';
			entry.target.style.transform = 'translateY(0)';
		}
	});
}, observerOptions);

// Observe project cards
projectCards.forEach(card => {
	card.style.opacity = '0';
	card.style.transform = 'translateY(30px)';
	card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
	observer.observe(card);
});

// Observe skill categories
document.querySelectorAll('.skill-category').forEach((category, index) => {
	category.style.opacity = '0';
	category.style.transform = 'translateY(30px)';
	category.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
	observer.observe(category);
});

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach((item, index) => {
	item.style.opacity = '0';
	item.style.transform = 'translateX(-30px)';
	item.style.transition = `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`;
	observer.observe(item);
});

// ==========================================
// Add fade out animation keyframe dynamically
// ==========================================
const style = document.createElement('style');
style.textContent = `
	@keyframes fadeOut {
		from {
			opacity: 1;
			transform: scale(1);
		}
		to {
			opacity: 0;
			transform: scale(0.9);
		}
	}
`;
document.head.appendChild(style);

// ==========================================
// Project Card Hover Effect Enhancement
// ==========================================
projectCards.forEach(card => {
	card.addEventListener('mouseenter', function() {
		this.style.zIndex = '10';
	});

	card.addEventListener('mouseleave', function() {
		this.style.zIndex = '1';
	});
});

// ==========================================
// Skill Item Click Effect (Optional)
// ==========================================
document.querySelectorAll('.skill-item').forEach(item => {
	item.addEventListener('click', function() {
		// Add a pulse animation on click
		this.style.animation = 'pulse 0.5s';
		setTimeout(() => {
			this.style.animation = '';
		}, 500);
	});
});

// Add pulse animation
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
	@keyframes pulse {
		0%, 100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
	}
`;
document.head.appendChild(pulseStyle);

// ==========================================
// Console Welcome Message
// ==========================================
console.log(
	'%c👋 Welcome to Dominick Braico\'s Portfolio! ',
	'background: #2563eb; color: white; padding: 10px 20px; border-radius: 5px; font-size: 16px; font-weight: bold;'
);
console.log(
	'%cInterested in the code? Check out the GitHub repository!',
	'color: #6b7280; font-size: 14px;'
);

// ==========================================
// Loading Animation Complete
// ==========================================
window.addEventListener('load', () => {
	document.body.style.opacity = '1';
	console.log('✅ Portfolio loaded successfully!');
});
