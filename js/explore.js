function addMarker(item,itemType){
    
    let marker = new H.map.DomMarker(
        item.position,
        {
            icon: createSvgMarkerIconWithImg("Get "+itemType+" from "+item.title)
        });

    // Add a marker for each location found
    markerGroup.addObject(marker);
    map.getViewModel().setLookAtData({
        bounds: markerGroup.getBoundingBox(),
        zoom: 15
        });

}


function getJewelleryStore(position){
    service.browse({
        at: position.lat+','+position.lng+',5000',
        limit: 1,
        categories: '600-6900-0356' //Jewellery
    }, (result) => {
        (result.items.length > 0)? addMarker(result.items[0],"Jewellery") : console.log("No such place found")
      }, alert);
      
}
function getSweetShop(position){
    service.browse({
        at: position.lat+','+position.lng,
        limit: 1,
        categories: '600-6300-0245'//sweet shop
    }, (result) => {
        (result.items.length > 0)? addMarker(result.items[0],"Sweets") : console.log("No such place found")
      }, alert);
      
}
function getBookStore(position){
    service.browse({
        at: position.lat+','+position.lng,
        limit: 1,
        categories: '600-6700-0087'// book store
    }, (result) => {
        (result.items.length > 0)? addMarker(result.items[0],"Books") : console.log("No such place found")
      }, alert);
      
}
function getClothingStore(position){
    service.browse({
        at: position.lat+','+position.lng,
        limit: 1,
        categories: '600-6800-0089,600-6800-0090,600-6800-0091' // clothing store
    }, (result) => {
        (result.items.length > 0)? addMarker(result.items[0],"Clothes") : console.log("No such place found")
      }, alert);
    
      
}