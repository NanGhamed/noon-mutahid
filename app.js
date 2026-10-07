/* ==========================================================
   روابط مجموعات الواتساب — عدّليها هنا فقط
   الصقي رابط كل مجموعة مكان علامة # وسيعمل الزر تلقائياً
   ========================================================== */
const WHATSAPP_LINKS = {
  noon: "https://chat.whatsapp.com/GPuw2MQoRaK9zI8KbBoSnt",        // مجتمع نون متحد (القناة العامة)
  leaders: "https://chat.whatsapp.com/F1CN1H9YIndItuPIqqI3Uc",     // لجنة رئيسات الأقسام
  support: "https://chat.whatsapp.com/FyEHloh4DWg7PXHkhxOlq2",     // الخدمات المساندة
  food: "https://chat.whatsapp.com/KwmmuFSZpaeJ2BzxysDdhQ",        // لجنة الإعاشة
  media: "https://chat.whatsapp.com/L3Oe9tGftQYJ1eXTvFt3VR?s=sh&p=a&mlu=4&ilr=4",       // اللجنة الإعلامية
  digital: "https://chat.whatsapp.com/CWQVjZatu1M8kYMxrwgG86?s=sw&p=a&mlu=4&ilr=4",     // لجنة التحول الرقمي
  culture: "https://chat.whatsapp.com/EU0fPWnLyO3D5EKegqZ5A3",     // اللجنة الثقافية
  creativity: "https://chat.whatsapp.com/Kt77XiVB9GS9pmjLv0NG1D?s=sw&p=a&mlu=4&ilr=4",  // لجنة الإبداع والريادة
  circulars: "https://chat.whatsapp.com/FtBHk1vh76t6uvkJluwZvW?s=sw&p=a&mlu=4&ilr=4",   // لجنة التعاميم
  contact: "https://wa.me/966534404415",     // التواصل والاستفسار
  quality: "https://chat.whatsapp.com/Drt9yQ6HGKTFwpw81auHmB",     // لجنة الجودة والتميز المؤسسي
  guest: "https://chat.whatsapp.com/C5Lu4gdySuX7pIFCKmPZOT"        // لجنة إثراء تجربة الضيف
};

// ربط الأزرار بالروابط
document.querySelectorAll('[data-link]').forEach(a => {
  const key = a.getAttribute('data-link');
  if (WHATSAPP_LINKS[key] && WHATSAPP_LINKS[key] !== "#") {
    a.href = WHATSAPP_LINKS[key];
  } else {
    a.addEventListener('click', e => {
      // تنبيه مؤقت حتى تُضاف الروابط
      if (a.getAttribute('href') === "#") {
        e.preventDefault();
        alert('سيُضاف رابط الواتساب الخاص بهذه المجموعة قريباً.');
      }
    });
  }
});

// سهم العودة للأعلى
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) toTop.classList.add('show');
  else toTop.classList.remove('show');
  // تظليل الهيدر
  document.getElementById('header').style.boxShadow = window.scrollY > 10 ? '0 4px 20px rgba(0,0,0,.08)' : 'none';
});
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// قائمة الجوال (من اليمين)
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
menuBtn.addEventListener('click', () => mobileNav.classList.toggle('open'));
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));

// تفعيل الرابط النشط عند التمرير
const sections = ['top','groups','goals','conditions','contact'];
window.addEventListener('scroll', () => {
  let current = 'top';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  document.querySelectorAll('.nav a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});
