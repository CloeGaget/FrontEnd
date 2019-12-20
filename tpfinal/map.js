window.addEventListener("load", addElements);

function addElements () {
  var mymap = L.map('mapid').setView([45.186171, 5.717426], 13);

  L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'your.mapbox.access.token'
  }).addTo(mymap);

  //var marker1 = L.marker([45.191781, 5.717058]).addTo(mymap);

  var icon1 = L.icon({
      iconUrl: 'marker1.png',
      iconSize:     [80, 80], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [42, 85], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
    var marker1 = L.marker([45.191781, 5.717058], {icon: icon1}).addTo(mymap).on('click', onClick);
    function onClick() {
      alert("Bienvenue dans notre Zoo !");
    }
    var popup1 = L.popup({closeOnClick: false, autoClose:false})
    .setContent('<b>Notre Zoo !</b><br>Le Zoo de la LP AW');
    marker1.bindPopup(popup1).openPopup();


    var icon2 = L.icon({
        iconUrl: 'marker2.png',
        iconSize:     [80, 80], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [41, 85], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    var marker2 = L.marker([45.168309, 5.706426], {icon: icon2}).addTo(mymap);
    var popup2 = L.popup({closeOnClick: false, autoClose:false})
    .setContent('<b>Un Zoo de lycéens !</b><br>Le Zoo de Louise Michel');
    marker2.bindPopup(popup2).openPopup();


  var icon3 = L.icon({
      iconUrl: 'marker3.png',
      iconSize:     [80, 80], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [41, 85], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [0, -75] // point from which the popup should open relative to the iconAnchor
  });
  var marker3 = L.marker([45.173904, 5.736859], {icon: icon3}).addTo(mymap);
  var popup3 = L.popup({closeOnClick: false, autoClose:false})
    .setContent('<b>Un Zoo de collégiens !</b><br>Le Zoo de Charles Munch');
    marker3.bindPopup(popup3).openPopup();
}
