// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';
/**
   * Hero type effect
   */

  AOS.init();

  const typed = document.querySelector('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

// function toggleMenu() {
//     const nav = document.getElementById('mobile-nav');
//     const icon = document.getElementById('menu-icon');
    
//     if (nav.classList.contains('max-h-0')) {
//       // فتح القائمة
//       nav.classList.remove('max-h-0', 'opacity-0');
//       nav.classList.add('max-h-[500px]', 'opacity-100'); // قيمة كبيرة كافية للمحتوى
//       icon.style.transform = 'rotate(90deg)';
//     } else {
//       // إغلاق القائمة
//       nav.classList.add('max-h-0', 'opacity-0');
//       nav.classList.remove('max-h-[500px]', 'opacity-100');
//       icon.style.transform = 'rotate(0deg)';
//     }
//   }

function toggleMenu() {
    const nav = document.getElementById('mobile-nav');
    const icon = document.getElementById('menu-icon');
    
    if (nav.classList.contains('max-h-0')) {
        nav.classList.remove('max-h-0', 'opacity-0');
        nav.classList.add('max-h-[500px]', 'opacity-100');
        icon.style.transform = 'rotate(90deg)';
    } else {
        closeMobileMenu(); // استخدمنا دالة فرعية للتنظيم
    }
}

// دالة مخصصة للإغلاق فقط
function closeMobileMenu() {
    const nav = document.getElementById('mobile-nav');
    const icon = document.getElementById('menu-icon');
    if (nav) {
        nav.classList.add('max-h-0', 'opacity-0');
        nav.classList.remove('max-h-[500px]', 'opacity-100');
        icon.style.transform = 'rotate(0deg)';
    }
}

// مراقب لتغيير حجم الشاشة (التأكد من إغلاق القائمة في التابلت واللابتوب)
window.addEventListener('resize', () => {
    // 768px هو المقاس الافتراضي للـ md في Tailwind (بداية التابلت)
    if (window.innerWidth >= 768) {
        closeMobileMenu();
    }
});

  window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    const logo = document.getElementById('logo-text');
    const navLinks = document.querySelectorAll('.nav-item');

    if (window.scrollY > 50) {
      // التنسيق عند التمرير للأسفل (أبيض مع ظل)
      header.classList.remove('lg:bg-transparent');
      header.classList.add('bg-white', 'shadow-md', 'py-2'); // py-2 لتصغير حجم الهيدر قليلاً عند السكرول

    } else {
      // التنسيق الأصلي عند العودة للأعلى
      header.classList.add('md:bg-white', 'sm:bg-white','lg:bg-transparent');
      header.classList.remove('lg:bg-white', 'shadow-md', 'py-2');
    }
  });

  // swipper
  var swiper = new Swiper(".mySwiper", {
  // 1. تحديد نوع الحركة: ظهور واختفاء
  effect: "fade", 
  
  // 2. ضبط إعدادات التلاشي ليكون ناعماً جداً
  fadeEffect: {
    crossFade: true // هذا الخيار يمنع رؤية الخلفية أثناء الانتقال بين الصور
  },

  // 3. التكرار والتشغيل التلقائي
  loop: true,
  speed: 1000, // سرعة الانتقال (1000 مللي ثانية = ثانية واحدة)
  autoplay: {
    delay: 3000, // البقاء على كل صورة لمدة 3 ثوانٍ
    disableOnInteraction: false,
  },

  // 4. النقاط السفلية
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const navItems = document.querySelectorAll('.nav-item'); // تأكد أن الكلاس متطابق مع الروابط لديك
const sections = document.querySelectorAll('section'); // أو استخدم كلاس معين للسيكشنز

const options = {
    threshold: 0.6 // تفعيل الكلاس عندما يظهر 60% من السيكشن
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 1. الحصول على ID السيكشن الظاهر حالياً
            const id = entry.target.getAttribute('id');
            
            // 2. إزالة active من الجميع
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // 3. إضافة active للرابط الذي يشير لهذا السيكشن
            const activeLink = document.querySelector(`.nav-item[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, options);

// تفعيل المراقب على كل سيكشن
sections.forEach(section => observer.observe(section));

// إضافة حدث الكليك (اختياري) للتأكد من سلاسة الانتقال
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});
