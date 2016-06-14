// Create the map
var map = L.map('map').setView([49.64882,5.82359], 11);

// Set up the OSM layer
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {maxZoom: 18}).addTo(map);

// add a marker in the given location
L.marker([36.83711,-2.464459]).addTo(map);

var greenIcon = L.icon({
  iconUrl: '/images/map-icon.png',
  // shadowUrl: 'leaf-shadow.png',

  iconSize:     [70, 70], // size of the icon
  shadowSize:   [0, 0],   // size of the shadow
  iconAnchor:   [40, 60],   // point of the icon which will correspond to marker's location
  shadowAnchor: [0, 0],   // the same for the shadow
  popupAnchor:  [0, 0]    // point from which the popup should open relative to the iconAnchor
});

L.marker([49.64882,5.82359], {icon: greenIcon}).addTo(map);
