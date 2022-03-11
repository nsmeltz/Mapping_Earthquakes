// Add console.log to check to see if our code is working.
console.log("working");

// ---------------- Add a Map Object -------------------
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);


// ----------------- Add Tile Layer --------------------
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// ------------- Add Marker to Map ------------------
//  Los Angeles, California.
let marker = L.marker([34.0522, -118.2437]).addTo(map);

// ------------ Add Circle to Map ---------------
// Laramie, WY
L.circle([41.3114, -105.5911], {
    radius: 10000,
    color: "black",
    fillColor: "pink"
}).addTo(map);

// Los Angeles, CA
 L.circleMarker([34.0522, -118.2437],{
     radius: 300,
     color: "black",
     fillColor: "#ffffa1"
 }).addTo(map);