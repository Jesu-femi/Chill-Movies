// Hero Carousel
var homeSwiper = new Swiper(`.hero-swiper`, {
	loop: true,
	// autoplay: {
	// 	delay: 7500,
	// 	// disableOnInteraction: false,
	// },
	pagination: {
		el: `.swiper-pagination`,
		dynamicBullets: true,
		clickable: true,
	},
});
// const heroSwiper = new Swiper(".hero-swiper", {
// 	loop: true,
// 	spaceBetween: 20,
// 	autoplay: {
// 		delay: 7500,
// 		disableOnInteraction: false,
// 	},
// 	pagination: {
// 		el: ".pagination",
// 		dynamicBullets: true,
// 		clickable: true,
// 	},
// 	breakpoints: {
// 		0: {
// 			slidesPerView: 1,
// 		},
// 		640: {
// 			slidesPerView: 1,
// 		},
// 		1024: {
// 			slidesPerView: 1,
// 		},
// 	},
// });

// Category Carousel
const categorySwiper = new Swiper(".cat-container", {
	slidesPerView: 1.5,
	spaceBetween: 15,
	loop: true,
	autoplay: { delay: 5000, disableOnInteraction: false },
	breakpoints: {
		320: { slidesPerView: 1.2, spaceBetween: 10 },
		640: { slidesPerView: 2, spaceBetween: 15 },
		768: { slidesPerView: 3, spaceBetween: 20 },
		1024: { slidesPerView: 4, spaceBetween: 25 },
		1440: { slidesPerView: 5, spaceBetween: 30 },
	},
});

// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const navList = document.querySelector(".nav-list");

if (hamburger) {
	hamburger.addEventListener("click", () => {
		navList.classList.add("active");
		closeBtn.classList.add("active");
	});
}

if (closeBtn) {
	closeBtn.addEventListener("click", () => {
		navList.classList.remove("active");
		closeBtn.classList.remove("active");
	});
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll(".nav-list a");
navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		navList.classList.remove("active");
		closeBtn.classList.remove("active");
	});
});

// Newsletter Form
const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
	newsletterForm.addEventListener("submit", (e) => {
		e.preventDefault();
		const email = newsletterForm.querySelector('input[type="email"]').value;
		alert(`Thank you for subscribing with ${email}!`);
		newsletterForm.reset();
	});
}
