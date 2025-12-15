// ---------------- DARK / LIGHT MODE ----------------
const toggleBtn = document.querySelector('#themeToggle');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});




// ---------------- HERO SLIDER ----------------
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

if (slides.length > 0) {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 5000); // 5 seconds per slide
}

// ---------------- ADD TO CART INTERACTION ----------------
const cartButtons = document.querySelectorAll('.product-card button');
cartButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Product added to cart!'); // Placeholder for cart functionality
  });
});
