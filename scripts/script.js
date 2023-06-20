//changement couleur jaune logo fixed et home
function changeImagelogoHome() {
  document.getElementById("idLogoHome").src = "Assets/Logos/logohome_jaune.png";
}

function changeImageBatHaut() {
  document.getElementById("batHaut").src =
    "Assets/Logos/logo_bat_flèche_jaune.png";
}

function changeImageBatBas() {
  document.getElementById("batBas").src =
    "Assets/Logos/logo_bat_flèche_2_jaune.png";
}

function changeImageFb() {
  document.getElementById("fb").src = "Assets/Logos/icon_facebook_jaune.png";
}

function changeImageIg() {
  document.getElementById("ig").src = "Assets/Logos/icon_ig_jaune.png";
}

function changeImageTw() {
  document.getElementById("tw").src = "Assets/Logos/icon_tw_jaune.png";
}
//changement couleur jaune logo dans footer
function changeSaynaFooter() {
  document.getElementById("SaynaFooter").src =
    "Assets/Logos/logo_sayna_white_jaune.png";
}

function changeXfooter() {
  document.getElementById("xFooter").src = "Assets/Logos/icon_x_jaune.png";
}

function changeDcFooter() {
  document.getElementById("dcFotter").src = "Assets/Logos/icon_DC_jaune.png";
}

function changeFbFooter() {
  document.getElementById("fbFooter").src =
    "Assets/Logos/icon_facebook_jaune.png";
}

function changeIgFooter() {
  document.getElementById("igFooter").src = "Assets/Logos/icon_ig_jaune.png";
}

function changeTwFooter() {
  document.getElementById("twFooter").src = "Assets/Logos/icon_tw_jaune.png";
}

// reset couleur apres passage de la souris
function reset() {
  const collecJaune = document.getElementsByClassName("jaune");
  collecJaune[0].src = "Assets/Logos/logohome.png";
  collecJaune[1].src = "Assets/Logos/logo_bat_flèche.png";
  collecJaune[2].src = "Assets/Logos/icon_facebook.png";
  collecJaune[3].src = "Assets/Logos/icon_ig.png";
  collecJaune[4].src = "Assets/Logos/icon_tw.png";
  collecJaune[5].src = "Assets/Logos/logo_bat_flèche_2.png";
}

//reset pour le footer
function resetFooter() {
  const collecJaune = document.getElementsByClassName("jaune_footer");
  collecJaune[0].src = "Assets/Logos/logo_sayna_white.png";
  collecJaune[1].src = "Assets/Logos/icon_x.png";
  collecJaune[2].src = "Assets/Logos/icon_DC.png";
  collecJaune[3].src = "Assets/Logos/icon_facebook.png";
  collecJaune[4].src = "Assets/Logos/icon_ig.png";
  collecJaune[5].src = "Assets/Logos/icon_tw.png";
}

// scroll du document
const flecheHaut = document.querySelector("#batHaut");
const flecheBas = document.querySelector("#batBas");

flecheBas.addEventListener("click", () => {
  window.scrollBy({
    top: 250,
    behavior: "smooth",
  });
});

flecheHaut.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// animation en fonction du scroll
// definition de l'API intersection observer
const ratio = 0.1;
const options = {
  root: null, //zone d'affichage
  rootMargin: "0px", //marge d'affichage
  threshold: ratio, //ratio du declenchement de l'observateur
};

const detectIntersect = (entries, observer) => {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveleCarte");
      observer.unobserve(entry.target);
    }
  });
};
const observer = new IntersectionObserver(detectIntersect, options);
document.querySelectorAll(".cacheCarte").forEach(function (cache) {
  observer.observe(cache);
});

// animation de la chauve souris
/*const canvas = document.getElementById("canvas");
const img = document.querySelector(".fond-canvas");
const ctx = canvas.getContext("2d");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
let raf;
let running = false;

const ball = {
  x: 50,
  y: 50,
  vx: 5,
  vy: 1,
  radius: 25,
  color: "blue",
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function clear() {
  let patern = ctx.createPattern(img, "repeat");
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = patern;
  ctx.fill();
}

function draw() {
  clear();
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mousemove", function (e) {
  if (!running) {
    clear();
    ball.x = e.clientX;
    ball.y = e.clientY;
    ball.draw();
  }
});

canvas.addEventListener("click", function (e) {
  if (!running) {
    raf = window.requestAnimationFrame(draw);
    running = true;
  }
});

canvas.addEventListener("mouseout", function (e) {
  window.cancelAnimationFrame(raf);
  running = false;
});

ball.draw(); */

// animation avec scroll pour les textes
const optionsContent = {
  root: null, //zone d'affichage
  rootMargin: "0px", //marge d'affichage
  threshold: ratio, //ratio du declenchement de l'observateur
};

const detectIntersection = (entries, observervateur) => {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveleContent");
      observervateur.unobserve(entry.target);
    }
  });
};
const observervateur = new IntersectionObserver(
  detectIntersection,
  optionsContent
);
document.querySelectorAll(".cacheContent").forEach(function (cache) {
  observervateur.observe(cache);
});

// changement du deplacement vers ancre en js
const batmanCine = document.querySelector(".first");
const nemesis = document.querySelector(".second");

batmanCine.addEventListener("click", () => {
  window.scrollBy({
    top: 950,
    behavior: "smooth",
  });
});

nemesis.addEventListener("click", () => {
  window.scrollBy({
    top: 1700,
    behavior: "smooth",
  });
});

// section popup
// enregistrement des variables necessaire à l'evenement
const confirmbtn = document.getElementById("confirmbtn");
const btnClose = document.getElementById("btnClose");
const overlay = document.getElementById("overlay");
const mail = document.getElementById("mail");
const message = document.getElementById("message");
const invalid = document.getElementsByClassName("invalid");

// definition de l'evenement ouverture de overlay
confirmbtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (mail.value == "" || message.value == "") {
    invalid[0].textContent = "ce champ e-mail est obligatoire";
    invalid[1].textContent = "ce champ est obligatoire";

    // invalid.style.fontStyle = "italic";
  } else {
    ouvrirFenetre();
  }
});

function ouvrirFenetre() {
  overlay.style.display = "block";
}

btnClose.addEventListener("click", fermerFenetre);

function fermerFenetre() {
  overlay.style.display = "none";
}

// partie formulaire
// frequence de newsletter
const btnFilm = document.getElementById("lbl-films");
const btnComics = document.getElementById("lbl-comics");
const btnTout = document.getElementById("lbl-tout");
const gradient =
  "linear-gradient(90deg, rgba(237, 222, 191, 0.7) 30%, rgba(137, 0, 8, 1) 100%)";

btnFilm.addEventListener("click", (evt) => {
  evt.target.style.background = gradient;

  btnComics.style.background = "transparent";
  btnTout.style.background = "transparent";
});
btnComics.addEventListener("click", (evt) => {
  evt.target.style.background = gradient;

  btnFilm.style.background = "transparent";
  btnTout.style.background = "transparent";
});
btnTout.addEventListener("click", (evt) => {
  evt.target.style.background = gradient;

  btnFilm.style.background = "transparent";
  btnComics.style.background = "transparent";
});

// legendes des images de carte
const legendes = document.getElementsByClassName("legende");
const items = document.getElementsByClassName("item");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseover", () => {
    legendes[i].style.display = "block";
  });
  items[i].addEventListener("mouseout", () => {
    legendes[i].style.display = "none";
  });
}

// jquery pour le select en utilisant la librairie select2
$(document).ready(function () {
  $(".myselect").select2();
});
