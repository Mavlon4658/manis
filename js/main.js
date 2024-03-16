let menu_open = document.querySelector('.mobile_menu__open')
let menu_close = document.querySelector('.mobile_menu__close')
let mobile_menu = document.querySelector('.mobile_menu');

menu_open.onclick = () => {
    mobile_menu.classList.toggle('active')
}

menu_close.onclick = () => {
    mobile_menu.classList.toggle('active')
}

let call_modal_open = document.querySelectorAll('.call_modal__open');
let call_mdoal = document.querySelector('.call_modal');
let call_modal_content = document.querySelector('.call_modal__content');
let call_modal_bg = document.querySelector('.call_modal__bg');
let call_modal_close = document.querySelector('.call_modal__close');

call_modal_open.forEach(btn => {
    btn.onclick = () => {
        call_mdoal.classList.remove('end-active');
        call_mdoal.classList.add('active');
        call_modal_content.classList.remove('animate__zoomOut')
        call_modal_content.classList.add('animate__bounceIn')
    }
})

call_modal_close.onclick = () => {
    call_mdoal.classList.remove('active');
    call_mdoal.classList.add('end-active');
    call_modal_content.classList.remove('animate__bounceIn')
    call_modal_content.classList.add('animate__zoomOut')
}

call_modal_bg.onclick = () => {
    call_mdoal.classList.remove('active');
    call_mdoal.classList.add('end-active');
    call_modal_content.classList.remove('animate__bounceIn')
    call_modal_content.classList.add('animate__zoomOut')
}

let award_img = document.querySelectorAll('.work_example__galerea img');
if (award_img.length) {
    award_img.forEach((img, img_idx) => {
        img.onclick = () => {
            let src = [];
            award_img.forEach(item => {
                src.push({
                    'src': item.getAttribute('src'),
                    'thumb': item.getAttribute('src'),
                    'subHtml': ''
                });
            })
            if (document.querySelector('#lightgallery')) {
                document.querySelector('#lightgallery').remove();
            }
            const galleryContainer = document.createElement('div');
            galleryContainer.id = 'lightgallery';
            document.body.appendChild(galleryContainer);
            lightGallery(galleryContainer, {
                dynamic: true,
                dynamicEl: src,
                index: img_idx
            });
        }
    })
}

let selection_slider = new Swiper('.selection__slider .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2500,
        pauseOnMouseEnter: true,
    },
    navigation: {
        nextEl: '.selection__slider_btn__next',
        prevEl: '.selection__slider_btn__prev',
    }
})