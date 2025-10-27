var wms_layers = [];

var format_FESplataformas_0 = new ol.format.GeoJSON();
var features_FESplataformas_0 = format_FESplataformas_0.readFeatures(json_FESplataformas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FESplataformas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FESplataformas_0.addFeatures(features_FESplataformas_0);
var lyr_FESplataformas_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FESplataformas_0, 
                style: style_FESplataformas_0,
                popuplayertitle: 'FESplataformas',
                interactive: true,
    title: 'FESplataformas<br />\
    <img src="styles/legend/FESplataformas_0_0.png" /> Norte/Centro<br />\
    <img src="styles/legend/FESplataformas_0_1.png" /> Sur/Norte<br />\
    <img src="styles/legend/FESplataformas_0_2.png" /> Sur/Sur<br />' });

lyr_FESplataformas_0.setVisible(true);
var layersList = [lyr_FESplataformas_0];
lyr_FESplataformas_0.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ZONA': 'ZONA', 'CENTRAL1': 'CENTRAL1', 'CENTRAL2': 'CENTRAL2', 'CENTRAL3': 'CENTRAL3', 'CENTRAL4': 'CENTRAL4', 'CENTRAL5': 'CENTRAL5', 'CENTRAL6': 'CENTRAL6', 'CENTRAL7': 'CENTRAL7', 'URL IMAGEN1': 'URL IMAGEN1', 'URL INICIO': 'URL INICIO', });
lyr_FESplataformas_0.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ZONA': 'TextEdit', 'CENTRAL1': 'TextEdit', 'CENTRAL2': 'TextEdit', 'CENTRAL3': 'TextEdit', 'CENTRAL4': 'TextEdit', 'CENTRAL5': 'TextEdit', 'CENTRAL6': 'TextEdit', 'CENTRAL7': 'TextEdit', 'URL IMAGEN1': 'ExternalResource', 'URL INICIO': 'TextEdit', });
lyr_FESplataformas_0.set('fieldLabels', {'fid': 'hidden field', 'COUNTRY': 'no label', 'ZONA': 'no label', 'CENTRAL1': 'no label', 'CENTRAL2': 'no label', 'CENTRAL3': 'no label', 'CENTRAL4': 'no label', 'CENTRAL5': 'no label', 'CENTRAL6': 'no label', 'CENTRAL7': 'no label', 'URL IMAGEN1': 'no label', 'URL INICIO': 'no label', });
lyr_FESplataformas_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});