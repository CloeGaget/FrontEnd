window.addEventListener("load", addElements);

var animal = '{"Animal":['+
  '{"nom":"Le Gomis", "desc":"Un cheval à rayures", "pays":"Iles Fidji", "photo":"gomis.jpg"},'+
  '{"nom":"La Neeko", "desc":"Un caméléo curieux", "pays":"Vastayas", "photo":"neeko.jpg"},'+
  '{"nom":"Le Pierrick", "desc":"Un oiseau qui mange tout", "pays":"France", "photo":"pierrick.jpg"},'+
  '{"nom":"La Astrid", "desc":"Un rat volant", "pays":"France", "photo":"astrid.jpg"},'+
  '{"nom":"Le Paulien", "desc":"Un poisson qui saute", "pays":"Sénégal", "photo":"paulien.jpeg"},'+
  '{"nom":"La Audrey", "desc":"Une marmotte kawaii", "pays":"Drôme", "photo":"audrey.jpg"},'+
  '{"nom":"Le Téo", "desc":"Un castor venimeux", "pays":"La Creuse", "photo":"teo.jpg"}'+
']}';

var lesAnimaux = JSON.parse(animal);

function addElements () {
  var table = document.getElementById('lezoo');
  for (i = 0; i < lesAnimaux.Animal.length; i++) {
    var tr = document.createElement("tr");
    table.appendChild(tr);
    // nom
    var td = document.createElement("td");
    var tdText = document.createTextNode(lesAnimaux.Animal[i].nom);
    td.appendChild(tdText);
    tr.appendChild(td);
    // desc
    td = document.createElement("td");
    tdText = document.createTextNode(lesAnimaux.Animal[i].desc);
    td.appendChild(tdText);
    tr.appendChild(td);
    // pays
    td = document.createElement("td");
    tdText = document.createTextNode(lesAnimaux.Animal[i].pays);
    td.appendChild(tdText);
    tr.appendChild(td);
    // photo
    td = document.createElement("td");
    img = document.createElement("img");
    img.src = (lesAnimaux.Animal[i].photo);
    tr.appendChild(td);
    td.appendChild(img);
    // bt
    td = document.createElement("td");
    var button = document.createElement("button");
    button.type = "button";
    buttonText = document.createTextNode("Découvrir");
    button.appendChild(buttonText);
    tr.appendChild(td);
    td.appendChild(button);
  }
}
