var map = d3.geomap.choropleth()
    .geofile('/d3-geomap/topojson/countries/USA.json')
    .projection(d3.geo.albersUsa)
    .column('Hilary Clinton')
    .unitId('fips')
    .scale(1000)
    .legend(true);

d3.csv('/data/2016DemPrimary.csv', function(error, data) {
    d3.select('#map')
        .datum(data)
        .call(map.draw, map);
});
