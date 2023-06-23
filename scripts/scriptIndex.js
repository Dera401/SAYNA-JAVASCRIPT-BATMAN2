// animation de la chauve souris
const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "../Assets/Logos/logohome_jaune.png";

let mouseX = 320;
let mouseY = 80;
const width = (canvas.width = window.innerWidth - 50);
const height = (canvas.height = window.innerHeight);
let pressed = false;

// evenement qui relie le mouvement de la sousis
img.onload = function () {
  canvas.addEventListener("mousemove", (event) => {
    if (!pressed) {
      mouseX = event.clientX - this.offsetLeft;
      mouseY = event.clientY - this.offsetTop;
    }
  });

  // fonction pour animer la souris
  function drawImageWithMouse() {
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, mouseX - img.width / 2, mouseY - img.height / 2);
    requestAnimationFrame(drawImageWithMouse);
  }
  drawImageWithMouse();

  // pour desactiver le suivui de la souris
  canvas.addEventListener("click", () => {
    if (!pressed) {
      cancelAnimationFrame(drawImageWithMouse);
      mouseX = 320;
      mouseY = 80;
      pressed = true;
    }
  });

  // reactiver le logo batman avec la souris
  canvas.addEventListener("mouseout", function () {
    requestAnimationFrame(drawImageWithMouse);
    pressed = false;
  });
};

// changement du deplacement vers ancre en js
const batmanCine = document.querySelector(".first");
const nemesis = document.querySelector(".second");

const cineAncre = document.querySelector("#batmanAuCine");
const nemesisAncre = document.querySelector("#nemesis");

batmanCine.addEventListener("click", () => {
  cineAncre.scrollIntoView({
    behavior: "smooth",
  });
});

nemesis.addEventListener("click", () => {
  nemesisAncre.scrollIntoView({
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
