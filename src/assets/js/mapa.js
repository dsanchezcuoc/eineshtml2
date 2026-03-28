var map = L.map("map").setView([39.828965541565076, 4.292599776744697], 15);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap",
}).addTo(map);

L.Icon.Default.imagePath = "/assets/images/";

// Alcaufar Vell
L.marker([39.83598690118668, 4.282197069308877])
  .bindPopup("Alcaufar Vell")
  .addTo(map);

// Cala Alcaufar
L.marker([39.828965541565076, 4.292599776744697])
  .bindPopup("Cala Alcaufar")
  .addTo(map);

// Torre
L.marker([39.825417149557325, 4.296031610774266])
  .bindPopup("Torre d'Alcaufar")
  .addTo(map);
