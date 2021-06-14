var localMap = L.map(document.getElementById("localization"), {
  center: [-23.1474, -46.8337],
  zoom: 15,
});
var localBasemap = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
  {}
);
const localMarker = L.marker([-23.1474, -46.8337]);

localBasemap.addTo(localMap);
localMarker.addTo(localMap).bindPopup("Joseph's Wiskey").openPopup();
