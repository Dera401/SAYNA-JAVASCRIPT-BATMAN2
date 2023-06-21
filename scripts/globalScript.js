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
