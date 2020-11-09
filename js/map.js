// Step 1: initialize the HERE map platform
// IMPORTANT: Replace the apikey with your own from developer.here.com
var platform = new H.service.Platform({
  apikey: window.here.apikey
});
var defaultLayers = platform.createDefaultLayers();
var myPosition = {lat: 59.32537, lng: 18.12536};

// Step 2: Initialize the map in the "map" div
// This map is centered on New York, using the default map style
var map = new H.Map(document.getElementById('map'),
defaultLayers.vector.normal.map, {
center: myPosition,
zoom: 5,
pixelRatio: window.devicePixelRatio || 1
});

// Step 4: Add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

// Step 5: Enable the event system and add default interactions (e.g., zoom)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Step 6: Create the default UI components (e.g., zoom buttons)
var ui = H.ui.UI.createDefault(map, defaultLayers);
// adjust tilt and rotation of the map

// Get an instance of the geocoding service:
var service = platform.getSearchService();

var provider = map.getBaseLayer().getProvider();
var style = new H.map.Style('style/cesStyle.yaml','https://js.api.here.com/v3/3.1/styles/omv/');
provider.setStyle(style);


function getBrowserLocation(){
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      markerGroup.removeAll();
        // console.log(position.coords);
        let browserPosition = {lat:position.coords.latitude, lng:position.coords.longitude};
        let marker = new H.map.Marker(browserPosition,{icon:homeIcon});
        markerGroup.addObject(marker);
        getJewelleryStore(browserPosition);
        getSweetShop(browserPosition);
        getBookStore(browserPosition);
        getClothingStore(browserPosition);
        map.getViewModel().setLookAtData({
          bounds: markerGroup.getBoundingBox(),
          zoom: 5
      });
    });
  } else {
      alert("Geolocation is not supported by this browser!");
      let marker = new H.map.Marker(myPosition,{icon:homeIcon});
      markerGroup.addObject(marker);
      getJewelleryStore(myPosition);
      getSweetShop(myPosition);
      getBookStore(myPosition);
      getClothingStore(myPosition);
  } 
}

