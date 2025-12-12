// ---- Cambiar color ----
const panel = document.getElementById("panel");

document.querySelectorAll(".colorBtn").forEach(btn => {
  btn.onclick = () => {
    panel.setAttribute("fill", btn.dataset.color);
  };
});

// ---- Cambiar tamaño ----
document.getElementById("widthRange").oninput = e => {
  panel.setAttribute("width", e.target.value);
};

document.getElementById("heightRange").oninput = e => {
  panel.setAttribute("height", e.target.value);
};

// ---- Cotizar por WhatsApp ----
document.getElementById("cotizarBtn").onclick = () => {
  let color = panel.getAttribute("fill");
  let w = panel.getAttribute("width");
  let h = panel.getAttribute("height");

  window.open(
    `https://wa.me/5214615577822?text=Quiero cotizar una mampara:%0AColor: ${color}%0AAncho: ${w} cm%0AAlto: ${h} cm`
  );
};

// ---- Animación scroll (para que no se vea todo pegado) ----
const sections = document.querySelectorAll(".fade-section");

function showSections() {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showSections);
showSections();
