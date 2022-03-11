// ---------------- Add a Map Object -------------------
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);


// ----------------- Add Tile Layer --------------------
// Create & add basemap tile layer
let basemap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "satellite-streets-v11",
    accessToken: API_KEY
}).addTo(map);

// ---------------- Add Lines to Map --------------------------------

// Coordinates for each point to be used in the polyline.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];


// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "red",
  dashArray: "20,15",
  lineJoin: "round"
}).addTo(map);