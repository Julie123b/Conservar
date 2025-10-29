const swiper = new Swiper(".myswiper", {
  loop: true, // El carrusel vuelve a empezar al final
  autoplay: {
    delay: 3000, // Cambia cada 3 segundos
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3, // Muestra 3 imágenes al mismo tiempo
  spaceBetween: 20, // Espacio entre imágenes
  centeredSlides: true, // Centra el slide activo
  grabCursor: true,
  speed: 800,
  breakpoints: {
    //Ajustes responsivos
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});

/*AMPLIAR IMG*/
// Obtener referencias al modal y a la imagen dentro del modal
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".modal-close");

// Seleccionar todas las imágenes dentro del carrusel
const images = document.querySelectorAll(".swiper-slide img");

// Agregar evento click a cada imagen
images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

// Cerrar el modal al hacer clic en la "X"
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de la imagen
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


// ===== MODAL LOGIN =====
const loginBtn = document.getElementById("login-btn");
const loginModal = document.getElementById("login-modal");
const loginClose = document.querySelector(".login-close");

// Abrir modal
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.style.display = "flex";
});

// Cerrar modal
loginClose.addEventListener("click", () => {
  loginModal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
});

// ===== TABS LOGIN/REGISTER =====
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // reset
    tabBtns.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    // activar seleccionado
    btn.classList.add("active");
    document.getElementById(`${btn.dataset.tab}-form`).classList.add("active");
  });
});

