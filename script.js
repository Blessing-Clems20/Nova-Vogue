document.addEventListener("DOMContentLoaded", () => {
  // console.log("JS is connected ✅");

  //  TIME-BASED GREETING 
  const greet = document.getElementById("greet-message");
  if (greet) {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
      greeting = "Good morning, welcome to Nova Vogue!";
    } else if (hour < 18) {
      greeting = "Good afternoon, welcome to Nova Vogue!";
    } else {
      greeting = "Good evening, welcome to Nova Vogue!";
    }
    greet.textContent = greeting;
  }

  //  SIMPLE IMAGE SLIDER 
  const slides = document.querySelectorAll(".slides img");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");
  let slideIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  function prevSlideFn() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  if (slides.length > 0) {
    showSlide(slideIndex);
    setInterval(nextSlide, 4000);
    if (next) next.addEventListener("click", nextSlide);
    if (prev) prev.addEventListener("click", prevSlideFn);
  }

  // BLACK FRIDAY COUNTDOWN 
  const countdownContainer = document.querySelector(".black-friday");
  if (countdownContainer) {
    const countdownDate = new Date("Nov 29, 2025 00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(timer);
        countdownContainer.innerHTML =
          "<h2>The Sale Has Ended!</h2><p>Stay tuned for our next event!</p>";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
    }, 1000);
  }

  // ===== FILTER FUNCTIONALITY =====
  const filterButtons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product-card");

  if (filterButtons.length > 0 && products.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener("click", function () {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        const category = this.getAttribute("data-category");
        products.forEach(product => {
          if (category === "all" || product.dataset.category === category) {
            product.style.display = "block";
          } else {
            product.style.display = "none";
          }
        });
      });
    });
  }
});

// ===== FORM HANDLERS =====
document.addEventListener("DOMContentLoaded", () => {
  const inquiryForm = document.getElementById("inquiryForm");
  const appointmentForm = document.getElementById("appointmentForm");
  const confirmation = document.getElementById("confirmationMessage");

  function handleSubmit(e) {
    e.preventDefault();
    confirmation.classList.remove("hidden");
    e.target.reset();
    setTimeout(() => {
      confirmation.classList.add("hidden");
    }, 5000);
  }

  if (inquiryForm) inquiryForm.addEventListener("submit", handleSubmit);
  if (appointmentForm) appointmentForm.addEventListener("submit", handleSubmit);
});

// ====== HAMBURGER MENU TOGGLE ======
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("open");
  });
}

