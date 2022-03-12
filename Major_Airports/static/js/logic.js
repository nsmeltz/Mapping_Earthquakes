// ----------------- Add Tile Layers --------------------
// Create & add basemap tile layer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "streets-v11",
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// ------------------ Create the map object with center, zoom level and default layer ---------------------------
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 3,
  layers: [dark]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// --------------------------------- Add GeoJSON data to the map ---------------------------

// Use this link to get the geojson data.
var airportData = "data/majorAirports.json";
var torontoRoutes = "data/torontoRoutes.json";

// Plot markers and popup for each airport
d3.json(airportData).then(function(data) {
  console.log(data);
  L.geoJSON(data, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h2> Airport Code: " + feature.properties.faa + "</h2><hr> Airport name: " + feature.properties.name + "</hr>" )
     }
  }).addTo(map);
});

// Plot all routes from Toronto
// Grabbing our GeoJSON data.
d3.json(torontoRoutes).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    weight: 2,
    color: "yellow"
  }).addTo(map);
});