window.addEventListener("load", demarrer);

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

function demarrer(){
  document.getElementById('form').addEventListener("submit", ville);
}

function ville() {
  var France = ['Grenoble', 'Paris', 'Lyon', 'Marseille'];
  var Espagne = ['Madrid', 'Barcelone', 'Valence', 'Seville'];
  var Italie = ['Milan', 'Rome', 'Turin', 'Venise'];
  var Allemagne = ['Munich', 'Breme', 'Berlin', 'Leipzig'];
  var villeChoisie = document.getElementById('laville').value;
  var tab = [];
  document.getElementById('resultatVille').innerHTML = "";
  if (France.includes(villeChoisie)) {
    tab = France;
    tab.splice(France.indexOf(villeChoisie), 1);
    document.getElementById('resultatVille').innerHTML = "Bienvenue en France ! Vous pouvez aussi visiter les lieux suivants : ";
    for (var i = 0; i < tab.length; i++) {
      document.getElementById('resultatVille').append(tab[i] + " ");
    }
  } else if (Espagne.includes(villeChoisie)) {
    tab = Espagne;
    tab.splice(Espagne.indexOf(villeChoisie), 1);
    document.getElementById('resultatVille').innerHTML = "Bienvenue en Espagne ! Vous pouvez aussi visiter les lieux suivants : ";
    for (var i = 0; i < tab.length; i++) {
      document.getElementById('resultatVille').append(tab[i] + " ");
    }
  } else if (Italie.includes(villeChoisie)) {
    tab = Italie;
    tab.splice(Italie.indexOf(villeChoisie), 1);
    document.getElementById('resultatVille').innerHTML = "Bienvenue en Italie ! Vous pouvez aussi visiter les lieux suivants : ";
    for (var i = 0; i < tab.length; i++) {
      document.getElementById('resultatVille').append(tab[i] + " ");
    }
  } else if (Allemagne.includes(villeChoisie)) {
    tab = Allemagne;
    tab.splice(Allemagne.indexOf(villeChoisie), 1);
    document.getElementById('resultatVille').innerHTML = "Bienvenue en Allemagne ! Vous pouvez aussi visiter les lieux suivants : ";
    for (var i = 0; i < tab.length; i++) {
      document.getElementById('resultatVille').append(tab[i] + " ");
    }
  } else {
    event.preventDefault();
  }
  document.getElementById('submit').value = "Ajouter une Destination";
  document.getElementById('form').addEventListener("submit", newDestination(tab));
}

function newDestination(tab) {
  var newVille = document.getElementById('laville').value;
  // var nouvDiv= document.createElement("div");
  // nouvDiv.setAttribute("id","div");
  // var texte= document.createTextNode(newVille);
  // nouvDiv.appendChild(texte)
  // document.getElementById("div1").appendChild(nouvDiv)
  if (tab != "") {
    if (France.includes(newVille) || Espagne.includes(newVille) || Italie.includes(newVille) || Allemagne.includes(newVille)) {
        document.getElementById('resultatVille').append(newVille + " ");
    }
  }
}
