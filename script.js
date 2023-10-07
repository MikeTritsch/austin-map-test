function initMap() {
    new google.maps.Map(document.getElementById("map"), {
      mapId: "3da66f88fcd57d88",
      center: { lat: 48.85, lng: 2.35 },
      zoom: 12,
    });
  }
  
  window.initMap = initMap;