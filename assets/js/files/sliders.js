/**
 * sliders.js
 *
 * Copyright (c) 2023 Moiseev Evgeny
 * Organization: WebisGroup
 *
 * Скрипты инициализации и обработки слайдеров.
 */

/**
 * Инициализация слайдеров по атрибуту data-swiper.
 *
 * Используется библиотека swiper.js: assets/js/libs/swiper.min.js
 * Документация: https://swiperjs.com/swiper-api
 * Примеры: https://swiperjs.com/demos
 *
 * Требуется подключение стилей: assets/scss/_swiper.scss
 *
 * Данный скрипт необходим для того, чтобы не привязываться к стандартным классам свипер-слайдера. На сайте слайдера в документации предоставляется HTML разметка c определёнными классами, без которых он не буедет функционировать. Скрипт же просто расставляет эти обязательные классы и поэтому нет необходимости о них думать. Структура HTML разметки слайдера должна быть такой же, как и указано в документации, но классы могут быть какими угодно. Необходимые поставятся автоматически.
 */
document.querySelectorAll("[data-swiper]").forEach((slider) => {
	slider.classList.add("swiper");

	if (slider.classList.contains("swiper-bild")) return;

	const sliderWrapper = slider.firstElementChild;
	const sliderItems = Array.from(sliderWrapper.children);

	sliderWrapper.classList.add("swiper-wrapper");

	sliderItems.forEach((slide) => slide.classList.add("swiper-slide"));

	slider.classList.add("swiper-bild");
});

/**
 * Пример инициализации слайдера
 */
new Swiper(".main-slider", {
	slidesPerView: 1,
	spaceBetween: 50,
	speed: 500,
	// autoplay: {
	// 	delay: 8000,
	// 	pauseOnMouseEnter: true,
	// 	disableOnInteraction: false,
	// },
	pagination: {
		el: ".main-pagination",
		bulletClass: "main-bullet",
		bulletActiveClass: "_active",
		clickable: true,
		renderBullet: (index) => getMainSliderBullet(index),
	},
});

// Функция построения кастомных буллетов
function getMainSliderBullet(index) {
	const slide = document.querySelectorAll(".main-slide")[index];
	const title = slide.querySelector(".main-slide__paging").innerHTML;
	const bullet = `
		<div class="main-pagination__bullet main-bullet">
			<h5 class="main-bullet__title">${title}</h5>
		</div>
	`;
	return bullet;
}

/**
 * Инициализация слайдера
 */
const digAdsSlider = new Swiper(".dig-ads-slider", {
	speed: 1500,
	pagination: {
		el: ".dig-ads-slider__pagination",
		bulletClass: "pagination__bullet",
		bulletActiveClass: "_active",
		clickable: true,
	},
	breakpoints: {
		320: {
			spaceBetween: 16,
			slidesPerView: "auto",
			allowTouchMove: true,
		},
		1501: {
			spaceBetween: 30,
			slidesPerView: 4,
			allowTouchMove: false,
		},
	},
});

/**
 * Инициализация слайдера
 */
const demoSlider = new Swiper(".demo-slider", {
	speed: 1500,
	pagination: {
		el: ".demo-slider__pagination",
		bulletClass: "pagination__bullet",
		bulletActiveClass: "_active",
		clickable: true,
	},
	breakpoints: {
		320: {
			spaceBetween: 16,
			slidesPerView: "auto",
			allowTouchMove: true,
		},
		1201: {
			spaceBetween: 30,
			slidesPerView: 3,
			allowTouchMove: false,
		},
	},
});

/**
 * Инициализация слайдера
 */
const exchangeSlider = new Swiper(".exchange-slider", {
	speed: 1500,
	spaceBetween: 16,
	slidesPerView: "auto",
	allowTouchMove: true,
	pagination: {
		el: ".exchange-slider__pagination",
		bulletClass: "pagination__bullet",
		bulletActiveClass: "_active",
		clickable: true,
	},
});

const reviewsSlider = new Swiper(".reviews-slider", {
	speed: 1500,
	pagination: {
		el: ".reviews-slider__pagination",
		bulletClass: "pagination__bullet",
		bulletActiveClass: "_active",
		clickable: true,
	},
	navigation: {
		disabledClass: "_disabled",
		prevEl: ".reviews__arrow_prev",
		nextEl: ".reviews__arrow_next",
	},
	breakpoints: {
		320: {
			spaceBetween: 16,
			slidesPerView: "auto",
		},
		767: {
			spaceBetween: 30,
			slidesPerView: 2,
		},
	},
});

// /**
//  * Пример инициализации слайдера
//  */
// new Swiper(".news-slider__body", {
// 	slidesPerView: 4,
// 	spaceBetween: 30,
// 	speed: 800,
// 	autoheight: true,
// 	navigation: {
// 		disabledClass: "_disabled",
// 		prevEl: ".news-slider-arrows__arrow_prev",
// 		nextEl: ".news-slider-arrows__arrow_next",
// 	},
// 	breakpoints: {
// 		320: { slidesPerView: 1 },
// 		480: { slidesPerView: 1 },
// 		768: { slidesPerView: 2 },
// 		992: { slidesPerView: 3 },
// 		1201: { slidesPerView: 3 },
// 		1583: { slidesPerView: 4 },
// 	},
// });
