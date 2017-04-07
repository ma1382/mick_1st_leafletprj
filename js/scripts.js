
//this is how I placed map into container with set view
var map = L.map('mapcontainer').setView([40.735021, -73.994787], 11);
//added carto light basemap
//var layer =  
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
      }).addTo(map);

//L.marker([40.735021, -73.994787]).addTo(map)
//  .bindPopup('TEST')

//these are Manhattan music venues

var MNVenues = [

  {
    name: 'Apollo Theater',
    fyi: 'Legends and amateurs alike take this longtime Harlem music hall',
    coord: [40.810067, -73.949938],
  },
  {
    name: 'Beacon Theater',
    fyi: 'Big-name musical acts are usually on the marquee at this classy, 2,800-seat theater',
    coord: [40.780714, -73.981046],
  },
  {
    name: 'Mercury Lounge',
    fyi: 'Indie headliners & up-and-comers have kept this small music venue crowded since the 90s',
    coord: [40.722176, -73.986070],
  },
  {
    name: 'Arlene’s Grocery',
    fyi: 'Up-&-coming acts are the focus of this rock music bar that is also home to live band karaoke',
    coord: [40.721258, -73.987899],
  },
  {
    name: 'Terminal 5',
    fyi: 'Indie bands & more make some noise at this sprawling venue on the western fringe of Hells Kitchen',
    coord: [40.719112, -73.961461],
  },
  {
    name: 'Hammerstein Ballroom',
    fyi: 'Luxe, century-old music hall with standing, balconies & ornate decor. Doubles as a recording studio',
    coord: [40.752886, -73.993833],
  },
]

//these are Brooklyn venues

var BKVenues = [
  {
    name: 'Knitting Factory',
    fyi: 'Spacious outpost of a small national concert venue chain',
    coord: [40.714325, -73.955361],
  },
  {
    name: 'Music Hall of Williamsburg',
    fyi: 'Indie-rock fans groove to live music at this popular triple-tiered club with 3 bars',
    coord: [40.719112, -73.961461],
  },
  {
    name: 'Rough Trade',
    fyi: 'Independent record store for obscure & mainstream CDs & vinyl, plus live music & a bar',
    coord: [40.720773, -73.959469],
  },
  {
    name: 'Brooklyn Bowl',
    fyi: 'Genre-defying bowling alley in Williamsburg with high-tech lanes, live tunes & food',
    coord: [40.721881, -73.956794],
  },
]

//add markers for venues

var MNVenueslayergroup = L.layerGroup();

MNVenues.forEach(function(data) {
  var thisMarker = L.marker(data.coord, {
    title: data.name,
  });
  
  thisMarker.bindPopup(data.name + ' : ' + data.fyi);

  // add the marker to the layergroup
  MNVenuesLayerGroup.addLayer(thisMarker);
  
});

var BKVenuesLayerGroup = L.layerGroup();

BKVenues.forEach(function(data) {
  var thisCircleMarker = L.circleMarker(data.coord, {
    color: 'orange',
    fillColor: 'steelblue',
    fillOpacity: .9,
    weight: 1,
  })
    .bindPopup(data.name + ' : ' + data.fyi)
    .addTo(map)


  BKVenuesLayerGroup.addLayer(thisCircleMarker);
}) ;

// Added the fully populated layergroup to the map
MNVenuesLayerGroup.addTo(map);
BKVenuesLayerGroup.addTo(map);

// created an object with the two layerGroups in it, to pass into L.control.group

var boroughs = {
  "MNVenues": MNVenuesLayerGroup,
  "BKVenues": BKVenuesLayerGroup,
}

L.control.layers(null, boroughs, {
  collapsed: false
}).addTo(map);
