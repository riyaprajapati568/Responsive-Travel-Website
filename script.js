const menus = document=queryselector()
// ===== Mobile Menu Toggle =====
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const navLinks = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  navLinks.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
});


/* ===== Mobile Menu ===== */


menuBtn.onclick = () => nav.classList.add('active');
closeBtn.onclick = () => nav.classList.remove('active');

/* ===== Review Slider ===== */
let reviews = document.querySelectorAll('.review');
let index = 0;

function showReview() {
    reviews.forEach(r => r.classList.remove('active'));
    reviews[index].classList.add('active');
    index = (index + 1) % reviews.length;
}

setInterval(showReview, 3000);

/* ===== Book Button Alert ===== */
document.querySelectorAll('.destination-card button').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Booking feature coming soon!');
    });
});

/* ===== Newsletter Subscription ===== */
  const form = document.querySelector(".newsletter form");
  const emailInput = form.querySelector("input");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (emailInput.value === "") {
      alert("Please enter your email address ✉️");
      return;
    }

    alert("🎉 Thank you for subscribing! Travel updates are on the way.");
    emailInput.value = "";
  });





