var homeIcon = new H.map.Icon('img/home.png');
var markerGroup = new H.map.Group();
map.addObject(markerGroup);

var createSvgMarkerIconWithImg = function (line1) {
    var ua = navigator.userAgent.toLowerCase();
    var svg =
        '<svg width="250" height="50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  >' +
            '<g>' +
            '<rect id="label-box" ry="3" rx="3" stroke="#000000" height="32" width="200" x="35" fill="#ffffff"/>' +
            '<text id="label-text" xml:space="preserve" text-anchor="start" font-family="Sans-serif" font-size="10" font-weight="bold" stroke-width="0" fill="#000000" x="45" y="20">__line1__</text>'+
            '<image x="10" width="40" height="32"   overflow="visible"  href="img/offer.png" />'+
            '</g>' +
            '</svg>';


    svg = svg.replace(/__line1__/g, line1);
    return new H.map.DomIcon(svg);
};

