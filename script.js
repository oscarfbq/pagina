// ====== PERSONALIZADOR DE MAMPARA ======
const panel = document.getElementById("panel");
const widthRange = document.getElementById("widthRange");
const heightRange = document.getElementById("heightRange");
const colorButtons = document.querySelectorAll(".colorBtn");
const cotizarBtn = document.getElementById("cotizarBtn");

// Cambiar color
colorButtons.forEach(btn => {
  btn.style.background = btn.dataset.color;
  btn.addEventListener("click", () => {
    panel.setAttribute("fill", btn.dataset.color);
  });
});

// Cambiar tamaño
const updateSize = () => {
  panel.setAttribute("width", widthRange.value);
  panel.setAttribute("height", heightRange.value);
};

widthRange.addEventListener("input", updateSize);
heightRange.addEventListener("input", updateSize);

// Cotizar vía WhatsApp
cotizarBtn.addEventListener("click", () => {
  const ancho = widthRange.value;
  const alto = heightRange.value;
  const color = panel.getAttribute("fill");

  const mensaje = `Hola, me interesa una cotización de mamparas.%0A
- Ancho aprox: ${ancho} cm%0A
- Alto aprox: ${alto} cm%0A
- Color aproximado: ${color}%0A
%0A¿Me puedes apoyar con opciones y precios?`;

  window.open(`https://wa.me/5214615577822?text=${mensaje}`, "_blank");
});

// ====== SCROLL SUAVE ======
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    const offsetTop = target.offsetTop - 80;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  });
});

// ====== ANIMACIÓN DE SECCIONES ======
const sections = document.querySelectorAll(".section, .footer");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section-visible");
    }
  });
}, { threshold: 0.15 });

sections.forEach(sec => observer.observe(sec));
