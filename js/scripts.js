// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]
OVERLAY = document.querySelector('.overlay')


document.addEventListener('DOMContentLoaded', function () {
	delay = 0
	$('header .menu_item').each(function () {
		delay = delay + 50

		$(this).css('transition-delay', delay + 'ms')
	})


	delay = 0
	$('.first_section .title span').each(function () {
		delay = delay + 50

		$(this).css('transition-delay', delay + 'ms')
	})


	delay = 500
	$('.first_section .desc span').each(function () {
		delay = delay + 25

		$(this).css('transition-delay', delay + 'ms')
	})


	// Анимация блока "Спорт Ферма"
	delay = 300
	$('.sport_ferma_block .name span').each(function () {
		delay = delay + 50

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 300
	$('.sport_ferma_block .site a').each(function () {
		delay = delay + 50

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 500
	$('.sport_ferma_block .title span').each(function () {
		delay = delay + 50

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 500
	$('.sport_ferma_block .desc span').each(function () {
		delay = delay + 25

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 500
	$('.sport_ferma_block .tags > *').each(function () {
		delay = delay + 25

		$(this).css('transition-delay', delay + 'ms')
	})


	// Анимация блока "FitnesSHOCK"
	delay = 300
	$('.fitnesSHOCK_block .name span').each(function () {
		delay = delay + 50

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 300
	$('.fitnesSHOCK_block .site a').each(function () {
		delay = delay + 50

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 500
	$('.fitnesSHOCK_block .title span').each(function () {
		delay = delay + 50

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 500
	$('.fitnesSHOCK_block .desc span').each(function () {
		delay = delay + 25

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 500
	$('.fitnesSHOCK_block .tags > *').each(function () {
		delay = delay + 25

		$(this).css('transition-delay', delay + 'ms')
	})


	// Анимация блока "Tim"
	delay = 300
	$('.TIM_block .name span').each(function () {
		delay = delay + 50

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 300
	$('.TIM_block .site a').each(function () {
		delay = delay + 50

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 500
	$('.TIM_block .title span').each(function () {
		delay = delay + 50

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 500
	$('.TIM_block .desc span').each(function () {
		delay = delay + 25

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 500
	$('.TIM_block .tags > *').each(function () {
		delay = delay + 25

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 500
	$('.TIM_block .link a').each(function () {
		delay = delay + 25

		$(this).css('transition-delay', delay + 'ms')
	})


	// Анимация блока "АВАНГАРД"
	delay = 300
	$('.avangard_block .name span').each(function () {
		delay = delay + 50

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 300
	$('.avangard_block .site a').each(function () {
		delay = delay + 50

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 500
	$('.avangard_block .title span').each(function () {
		delay = delay + 50

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 500
	$('.avangard_block .desc span').each(function () {
		delay = delay + 25

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 500
	$('.avangard_block .tags > *').each(function () {
		delay = delay + 25

		$(this).css('transition-delay', delay + 'ms')
	})


	// Анимация заголовка страниц
	delay = 0
	$('.page_title span').each(function () {
		delay = delay + 25

		$(this).css('transition-delay', delay + 'ms')
	})


	// Анимация заголовков блоков
	$('.block_head').each(function () {
		delay = 300

		$(this).find('.title span').each(function () {
			delay = delay + 50

			$(this).css('transition-delay', delay + 'ms')
		})
	})

	$('.block_head').each(function () {
		delay = 300

		$(this).find('.desc span').each(function () {
			delay = delay + 25

			$(this).css('transition-delay', delay + 'ms')
		})
	})


	// Анимация страницы контактов
	delay = 300
	$('.contacts_info .item .label').each(function () {
		delay = delay + 150

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 500
	$('.contacts_info .item .val').each(function () {
		delay = delay + 150

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 500
	$('.contacts_info .requisites .label').each(function () {
		delay = delay + 150

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 700
	$('.contacts_info .requisites .vals').each(function () {
		delay = delay + 150

		$(this).css('transition-delay', delay + 'ms')
	})


	// Анимация страницы услуг
	delay = 0
	$('.services .head .title span').each(function () {
		delay = delay + 50

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 300
	$('.services .head .desc span').each(function () {
		delay = delay + 25

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 200
	$('.services .service').each(function () {
		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 300
	$('.cooperation_options .row > *').each(function () {
		delay = delay + 150

		$(this).css('transition-delay', delay + 'ms')
	})


	// Анимация страницы услуги
	delay = 0
	$('.service_head .pre_title').each(function () {
		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 150
	$('.service_head .title').each(function () {
		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 250
	$('.service_head .desc span').each(function () {
		delay = delay + 25

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 300
	$('.what_we_create .data .row > *').each(function () {
		delay = delay + 50

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 300
	$('.when_needed .data ul li span').each(function () {
		delay = delay + 25

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 300
	$('.how_we_work .desc span').each(function () {
		delay = delay + 25

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 500
	$('.stages .row > *').each(function () {
		delay = delay + 100

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 500
	$('.test_week .data .desc span').each(function () {
		delay = delay + 25

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 500
	$('.test_week .price > *').each(function () {
		delay = delay + 100

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 750
	$('.test_week .calendar').each(function () {
		delay = delay + 100

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 300
	$('.team .title').each(function () {
		delay = delay + 25

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 500
	$('.team .desc span').each(function () {
		delay = delay + 25

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 750
	$('.team .items span').each(function () {
		delay = delay + 25

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 300
	$('.corporate_flag .title span').each(function () {
		delay = delay + 50

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 500
	$('.corporate_flag .price > *').each(function () {
		delay = delay + 100

		$(this).css('transition-delay', delay + 'ms')
	})


	// Анимация подвала сайта
	delay = 0
	$('footer .data .title span').each(function () {
		delay = delay + 50

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 150
	$('footer .data .desc span').each(function () {
		delay = delay + 25

		$(this).css('transition-delay', delay + 'ms')
	})

	delay = 300
	$('footer .contacts > *').each(function () {
		delay = delay + 100

		$(this).css('transition-delay', delay + 'ms')
	})


	// Смена изображений в пермов блоке на главной
	let mainSlider = document.querySelector('.first_section .image .swiper')

	if (mainSlider) {
		new Swiper('.first_section .image .swiper', {
			loop: true,
			speed: 0,
			spaceBetween: 0,
			slidesPerView: 1,
			on: {
				init: swiper => {
					setTimeout(() => {
						swiper.params.autoplay.delay = 200
						swiper.autoplay.start()
					}, 750)
				},
			}
		})
	}


	// Вертикальные полоски
	const leftLinesSliders = [],
		leftLines = document.querySelectorAll('.left_lines .swiper')

	leftLines.forEach(function (el, i) {
		el.classList.add('left_lines_s' + i)

		let options = {
			loop: true,
			speed: 20000,
			spaceBetween: 0,
			slidesPerView: 1,
			allowTouchMove: false,
			disableOnInteraction: true,
			autoplay: {
				delay: 1,
				reverseDirection: el.classList.contains('reverse') ? true : false
			},
			direction: 'vertical'
		}

		leftLinesSliders.push(new Swiper('.left_lines_s' + i, options))
	})


	const rightLinesSliders = [],
		rightLines = document.querySelectorAll('.right_lines .swiper')

	rightLines.forEach(function (el, i) {
		el.classList.add('right_lines_s' + i)

		let options = {
			loop: true,
			speed: 20000,
			spaceBetween: 0,
			slidesPerView: 1,
			allowTouchMove: false,
			disableOnInteraction: true,
			autoplay: {
				delay: 1,
				reverseDirection: el.classList.contains('reverse') ? true : false
			},
			direction: 'vertical'
		}

		rightLinesSliders.push(new Swiper('.right_lines_s' + i, options))
	})


	// Бегущая строка в первом ьлоке на главной
	let firstЫectionMarquee = document.querySelector('.first_section .marquee .swiper')

	if (firstЫectionMarquee) {
		new Swiper('.first_section .marquee .swiper', {
			loop: true,
			speed: 15000,
			spaceBetween: 0,
			slidesPerView: 'auto',
			allowTouchMove: false,
			disableOnInteraction: true,
			autoplay: {
				delay: 1,
			}
		})
	}


	// Бегущая строка в подвале
	let footerMarquee = document.querySelector('footer .top .swiper')

	if (footerMarquee) {
		new Swiper('footer .top .swiper', {
			loop: true,
			speed: 15000,
			spaceBetween: 0,
			slidesPerView: 'auto',
			allowTouchMove: false,
			disableOnInteraction: true,
			autoplay: {
				delay: 1,
			}
		})
	}


	// Бегущая строка в проекте
	let projectHeadMarquee = document.querySelector('.service_head .marquee .swiper')

	if (projectHeadMarquee) {
		new Swiper('.service_head .marquee .swiper', {
			loop: true,
			speed: 15000,
			spaceBetween: 0,
			slidesPerView: 'auto',
			allowTouchMove: false,
			disableOnInteraction: true,
			autoplay: {
				delay: 1,
			}
		})
	}


	// Карусель товаров
	const productsSliders = [],
		products = document.querySelectorAll('.products .swiper')

	products.forEach(function (el, i) {
		el.classList.add('products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 30,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 30,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.product')),
				resize: swiper => {
					let products = swiper.el.querySelectorAll('.product')

					products.forEach(el => el.style.height = 'auto')

					setHeight(products)
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	Fancybox.defaults.template = {
		closeButton: '<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg><span>Закрыть</span>',
		spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
		main: null
	}


	// Всплывающие окна
	const modalBtns = document.querySelectorAll('.modal_btn')

	if (modalBtns) {
		modalBtns.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				Fancybox.close()

				Fancybox.show([{
					src: document.getElementById(el.getAttribute('data-modal')),
					type: 'inline'
				}])
			})
		})
	}


	// Увеличение картинки
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	// Моб. меню
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('header').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('header .close_btn, .overlay').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('header').removeClass('show')
		$('.overlay').fadeOut(300)
	})


	// Выбор файла
	const fileInputs = document.querySelectorAll('form input[type=file]')

	if (fileInputs) {
		fileInputs.forEach(el => {
			el.addEventListener('change', () => el.closest('.file').querySelector('label div').innerText = el.value)
		})
	}
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


		// Моб. версия
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})