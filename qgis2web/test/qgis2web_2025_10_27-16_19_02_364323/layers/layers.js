var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FESplataformas_1 = new ol.format.GeoJSON();
var features_FESplataformas_1 = format_FESplataformas_1.readFeatures(json_FESplataformas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FESplataformas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FESplataformas_1.addFeatures(features_FESplataformas_1);
var lyr_FESplataformas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FESplataformas_1, 
                style: style_FESplataformas_1,
                popuplayertitle: 'FESplataformas',
                interactive: true,
    title: 'FESplataformas<br />\
    <img src="styles/legend/FESplataformas_1_0.png" /> Norte/Centro<br />\
    <img src="styles/legend/FESplataformas_1_1.png" /> Sur/Norte<br />\
    <img src="styles/legend/FESplataformas_1_2.png" /> Sur/Sur<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_FESplataformas_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_FESplataformas_1];
lyr_FESplataformas_1.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ZONA': 'ZONA', 'CENTRAL1': 'CENTRAL1', 'CENTRAL2': 'CENTRAL2', 'CENTRAL3': 'CENTRAL3', 'CENTRAL4': 'CENTRAL4', 'CENTRAL5': 'CENTRAL5', 'CENTRAL6': 'CENTRAL6', 'CENTRAL7': 'CENTRAL7', 'URL INICIO': 'URL INICIO', });
lyr_FESplataformas_1.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ZONA': 'TextEdit', 'CENTRAL1': 'TextEdit', 'CENTRAL2': 'TextEdit', 'CENTRAL3': 'TextEdit', 'CENTRAL4': 'TextEdit', 'CENTRAL5': 'TextEdit', 'CENTRAL6': 'TextEdit', 'CENTRAL7': 'TextEdit', 'URL INICIO': 'TextEdit', });
lyr_FESplataformas_1.set('fieldLabels', {'fid': 'hidden field', 'COUNTRY': 'no label', 'ZONA': 'no label', 'CENTRAL1': 'no label', 'CENTRAL2': 'no label', 'CENTRAL3': 'no label', 'CENTRAL4': 'no label', 'CENTRAL5': 'no label', 'CENTRAL6': 'no label', 'CENTRAL7': 'no label', 'URL INICIO': 'no label', });
lyr_FESplataformas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});