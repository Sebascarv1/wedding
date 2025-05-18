// Páginas
const pages = document.querySelectorAll('.page');
function showPage(idx) {
  pages.forEach((p, i) => {
    p.classList.toggle('active', i === idx);
  });
  window.scrollTo(0, 0);
}

// Sobre y sello (página 1)
const seal = document.getElementById('seal');
if (seal) {
  seal.addEventListener('click', () => {
    // animación de sobre abriéndose (opcional, puedes poner una clase CSS)
    document.getElementById('envelope').style.opacity = '0.6';
    setTimeout(() => showPage(1), 600); // ir a pag 2
  });
}

// Botón siguiente a detalles (página 2 a 3)
const toPage3 = document.getElementById('toPage3');
if (toPage3) {
  toPage3.addEventListener('click', () => showPage(2));
}

// Botón siguiente a regalo (página 3 a 4)
const toPage4 = document.getElementById('toPage4');
if (toPage4) {
  toPage4.addEventListener('click', () => showPage(3));
}

// Regalo (página 4 a 5)
const regalo = document.getElementById('regalo');
if (regalo) {
  regalo.addEventListener('click', () => showPage(4));
}

// Música de fondo
const playMusicBtn = document.getElementById('playMusic');
const ytMusic = document.getElementById('ytmusic');
if (playMusicBtn && ytMusic) {
  playMusicBtn.addEventListener('click', () => {
    ytMusic.width = 1;
    ytMusic.height = 1;
    ytMusic.src += "&autoplay=1";
    playMusicBtn.style.display = 'none';
  });
}
// Mostrar página 1 al inicio
showPage(0);