window.addEventListener("load", ville);

function devineNb() {
  var nb = Math.floor(Math.random() * 11);
  var nbChoisi = prompt("Devine le nombre");
  var nbEssai = 1;
  while ((nbChoisi != nb) && (nbEssai < 3)) {
    if (nbChoisi > nb) {
      nbChoisi = prompt("Raté ! C'est moins que ça");
    } else if (nbChoisi < nb) {
      nbChoisi = prompt("Raté ! C'est plus que ça");
    }
	nbEssai++;
  }
  if (nbChoisi == nb) {
    alert("Bravo ! C'était bien " + nb);
  } else {
    alert("Perdu.");
  }
}



function ville() {
  document.getElementById('form').addEventListener("submit", ville);
  var France = ['Grenoble', 'Paris', 'Lyon', "Marseille"];
  var Espagne = ['Madrid', 'Barcelone', 'Valence', 'Seville'];
  var Italie = ['Milan', 'Rome', 'Turin', 'Venise'];
  var Allemagne = ['Munich', 'Breme', 'Berlin', 'Leipzig'];
  var villeChoisie = document.getElementById('laville').value;
  if (France.includes(villeChoisie) || Espagne.includes(villeChoisie) || Italie.includes(villeChoisie) || Allemagne.includes(villeChoisie)) {
    alert("Bienvenue à " + villeChoisie);
  } else {
    event.preventDefault();
  }
}
