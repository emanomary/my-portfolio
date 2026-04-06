// استيراد الستايلات
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import Typed from 'typed.js';
/**
   * Hero type effect
   */
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


export function toggleMenu() {
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
// تصدير الدالة لتكون متاحة في الـ HTML
window.toggleMenu = toggleMenu;

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

// menu active state
// تحديد جميع عناصر القائمة (Desktop + Mobile)
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.6 // تفعيل السيكشن عندما يظهر 60% منه
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            
            // 1. إزالة active من جميع الروابط في كل القوائم
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // 2. البحث عن كل الروابط التي تشير لهذا السيكشن (قد يكون أكثر من رابط)
            const activeLinks = document.querySelectorAll(`.nav-item[href="#${id}"]`);
            
            // 3. إضافة كلاس active لكل الروابط المطابقة
            activeLinks.forEach(link => {
                link.classList.add('active');
            });
        }
    });
}, options);

// تفعيل المراقب على كل سيكشن
sections.forEach(section => {
    if (section.id) { // التأكد أن السيكشن لديه ID
        observer.observe(section);
    }
});

// معالجة حدث الكليك لضمان التفاعل الفوري وإغلاق قائمة الجوال
navItems.forEach(item => {
    item.addEventListener('click', function() {
        // إزالة active من الجميع
        navItems.forEach(nav => nav.classList.remove('active'));
        
        // إضافة active لكل الروابط التي تملك نفس الـ href (للمزامنة بين القوائم)
        const targetHref = this.getAttribute('href');
        document.querySelectorAll(`.nav-item[href="${targetHref}"]`).forEach(link => {
            link.classList.add('active');
        });

        // إغلاق قائمة الجوال برمجياً بعد الضغط
        const mobileNav = document.getElementById('mobile-nav');
        if (mobileNav) {
            mobileNav.classList.replace('max-h-[500px]', 'max-h-0'); // أو التعديل حسب كلاساتك
            mobileNav.classList.replace('opacity-100', 'opacity-0');
        }
    });
});