
import AOS from 'aos';

import 'aos/dist/aos.css';
import './style.css';
import './custom.js';

AOS.init();

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper', {
    // تفعيل الموديلات يدوياً في النسخ الجديدة
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    speed: 600,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // لإصلاح مشاكل التجاوب
    observer: true,
    observeParents: true,
  });
});
