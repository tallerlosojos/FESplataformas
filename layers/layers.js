var wms_layers = [];

var format_Argentina_0 = new ol.format.GeoJSON();
var features_Argentina_0 = format_Argentina_0.readFeatures(json_Argentina_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Argentina_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Argentina_0.addFeatures(features_Argentina_0);
var lyr_Argentina_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Argentina_0, 
                style: style_Argentina_0,
                popuplayertitle: 'Argentina',
                interactive: true,
                title: '<img src="styles/legend/Argentina_0.png" /> Argentina'
            });
var format_Chile_1 = new ol.format.GeoJSON();
var features_Chile_1 = format_Chile_1.readFeatures(json_Chile_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chile_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chile_1.addFeatures(features_Chile_1);
var lyr_Chile_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chile_1, 
                style: style_Chile_1,
                popuplayertitle: 'Chile',
                interactive: true,
                title: '<img src="styles/legend/Chile_1.png" /> Chile'
            });
var format_Uruguay_2 = new ol.format.GeoJSON();
var features_Uruguay_2 = format_Uruguay_2.readFeatures(json_Uruguay_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uruguay_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uruguay_2.addFeatures(features_Uruguay_2);
var lyr_Uruguay_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uruguay_2, 
                style: style_Uruguay_2,
                popuplayertitle: 'Uruguay',
                interactive: true,
                title: '<img src="styles/legend/Uruguay_2.png" /> Uruguay'
            });
var format_Peru_3 = new ol.format.GeoJSON();
var features_Peru_3 = format_Peru_3.readFeatures(json_Peru_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peru_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peru_3.addFeatures(features_Peru_3);
var lyr_Peru_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Peru_3, 
                style: style_Peru_3,
                popuplayertitle: 'Peru',
                interactive: true,
                title: '<img src="styles/legend/Peru_3.png" /> Peru'
            });
var format_Bolivia_4 = new ol.format.GeoJSON();
var features_Bolivia_4 = format_Bolivia_4.readFeatures(json_Bolivia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bolivia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bolivia_4.addFeatures(features_Bolivia_4);
var lyr_Bolivia_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bolivia_4, 
                style: style_Bolivia_4,
                popuplayertitle: 'Bolivia',
                interactive: true,
                title: '<img src="styles/legend/Bolivia_4.png" /> Bolivia'
            });
var format_Paraguay_5 = new ol.format.GeoJSON();
var features_Paraguay_5 = format_Paraguay_5.readFeatures(json_Paraguay_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paraguay_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paraguay_5.addFeatures(features_Paraguay_5);
var lyr_Paraguay_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paraguay_5, 
                style: style_Paraguay_5,
                popuplayertitle: 'Paraguay',
                interactive: true,
                title: '<img src="styles/legend/Paraguay_5.png" /> Paraguay'
            });
var format_Brazil_6 = new ol.format.GeoJSON();
var features_Brazil_6 = format_Brazil_6.readFeatures(json_Brazil_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brazil_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brazil_6.addFeatures(features_Brazil_6);
var lyr_Brazil_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brazil_6, 
                style: style_Brazil_6,
                popuplayertitle: 'Brazil',
                interactive: true,
                title: '<img src="styles/legend/Brazil_6.png" /> Brazil'
            });
var format_Colombia_7 = new ol.format.GeoJSON();
var features_Colombia_7 = format_Colombia_7.readFeatures(json_Colombia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colombia_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colombia_7.addFeatures(features_Colombia_7);
var lyr_Colombia_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colombia_7, 
                style: style_Colombia_7,
                popuplayertitle: 'Colombia',
                interactive: true,
                title: '<img src="styles/legend/Colombia_7.png" /> Colombia'
            });
var format_Venezuela_8 = new ol.format.GeoJSON();
var features_Venezuela_8 = format_Venezuela_8.readFeatures(json_Venezuela_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Venezuela_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Venezuela_8.addFeatures(features_Venezuela_8);
var lyr_Venezuela_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Venezuela_8, 
                style: style_Venezuela_8,
                popuplayertitle: 'Venezuela',
                interactive: true,
                title: '<img src="styles/legend/Venezuela_8.png" /> Venezuela'
            });
var format_Ecuador_9 = new ol.format.GeoJSON();
var features_Ecuador_9 = format_Ecuador_9.readFeatures(json_Ecuador_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ecuador_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecuador_9.addFeatures(features_Ecuador_9);
var lyr_Ecuador_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ecuador_9, 
                style: style_Ecuador_9,
                popuplayertitle: 'Ecuador',
                interactive: true,
                title: '<img src="styles/legend/Ecuador_9.png" /> Ecuador'
            });
var format_Cuba_10 = new ol.format.GeoJSON();
var features_Cuba_10 = format_Cuba_10.readFeatures(json_Cuba_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuba_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuba_10.addFeatures(features_Cuba_10);
var lyr_Cuba_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cuba_10, 
                style: style_Cuba_10,
                popuplayertitle: 'Cuba',
                interactive: true,
                title: '<img src="styles/legend/Cuba_10.png" /> Cuba'
            });
var format_Nicaragua_11 = new ol.format.GeoJSON();
var features_Nicaragua_11 = format_Nicaragua_11.readFeatures(json_Nicaragua_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nicaragua_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nicaragua_11.addFeatures(features_Nicaragua_11);
var lyr_Nicaragua_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nicaragua_11, 
                style: style_Nicaragua_11,
                popuplayertitle: 'Nicaragua',
                interactive: true,
                title: '<img src="styles/legend/Nicaragua_11.png" /> Nicaragua'
            });
var format_ElSalvador_12 = new ol.format.GeoJSON();
var features_ElSalvador_12 = format_ElSalvador_12.readFeatures(json_ElSalvador_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElSalvador_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElSalvador_12.addFeatures(features_ElSalvador_12);
var lyr_ElSalvador_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElSalvador_12, 
                style: style_ElSalvador_12,
                popuplayertitle: 'El Salvador',
                interactive: true,
                title: '<img src="styles/legend/ElSalvador_12.png" /> El Salvador'
            });
var format_DominicanRepublic_13 = new ol.format.GeoJSON();
var features_DominicanRepublic_13 = format_DominicanRepublic_13.readFeatures(json_DominicanRepublic_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DominicanRepublic_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DominicanRepublic_13.addFeatures(features_DominicanRepublic_13);
var lyr_DominicanRepublic_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DominicanRepublic_13, 
                style: style_DominicanRepublic_13,
                popuplayertitle: 'Dominican Republic',
                interactive: true,
                title: '<img src="styles/legend/DominicanRepublic_13.png" /> Dominican Republic'
            });
var format_PuertoRico_14 = new ol.format.GeoJSON();
var features_PuertoRico_14 = format_PuertoRico_14.readFeatures(json_PuertoRico_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuertoRico_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuertoRico_14.addFeatures(features_PuertoRico_14);
var lyr_PuertoRico_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuertoRico_14, 
                style: style_PuertoRico_14,
                popuplayertitle: 'Puerto Rico',
                interactive: true,
                title: '<img src="styles/legend/PuertoRico_14.png" /> Puerto Rico'
            });
var format_Belize_15 = new ol.format.GeoJSON();
var features_Belize_15 = format_Belize_15.readFeatures(json_Belize_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Belize_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Belize_15.addFeatures(features_Belize_15);
var lyr_Belize_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Belize_15, 
                style: style_Belize_15,
                popuplayertitle: 'Belize',
                interactive: true,
                title: '<img src="styles/legend/Belize_15.png" /> Belize'
            });
var format_Panama_16 = new ol.format.GeoJSON();
var features_Panama_16 = format_Panama_16.readFeatures(json_Panama_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Panama_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Panama_16.addFeatures(features_Panama_16);
var lyr_Panama_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Panama_16, 
                style: style_Panama_16,
                popuplayertitle: 'Panama',
                interactive: true,
                title: '<img src="styles/legend/Panama_16.png" /> Panama'
            });
var format_Mexico_17 = new ol.format.GeoJSON();
var features_Mexico_17 = format_Mexico_17.readFeatures(json_Mexico_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mexico_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mexico_17.addFeatures(features_Mexico_17);
var lyr_Mexico_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mexico_17, 
                style: style_Mexico_17,
                popuplayertitle: 'Mexico',
                interactive: true,
                title: '<img src="styles/legend/Mexico_17.png" /> Mexico'
            });
var format_Honduras_18 = new ol.format.GeoJSON();
var features_Honduras_18 = format_Honduras_18.readFeatures(json_Honduras_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Honduras_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Honduras_18.addFeatures(features_Honduras_18);
var lyr_Honduras_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Honduras_18, 
                style: style_Honduras_18,
                popuplayertitle: 'Honduras',
                interactive: true,
                title: '<img src="styles/legend/Honduras_18.png" /> Honduras'
            });
var format_Guatemala_19 = new ol.format.GeoJSON();
var features_Guatemala_19 = format_Guatemala_19.readFeatures(json_Guatemala_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Guatemala_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Guatemala_19.addFeatures(features_Guatemala_19);
var lyr_Guatemala_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Guatemala_19, 
                style: style_Guatemala_19,
                popuplayertitle: 'Guatemala',
                interactive: true,
                title: '<img src="styles/legend/Guatemala_19.png" /> Guatemala'
            });
var format_CostaRica_20 = new ol.format.GeoJSON();
var features_CostaRica_20 = format_CostaRica_20.readFeatures(json_CostaRica_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CostaRica_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CostaRica_20.addFeatures(features_CostaRica_20);
var lyr_CostaRica_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CostaRica_20, 
                style: style_CostaRica_20,
                popuplayertitle: 'Costa Rica',
                interactive: true,
                title: '<img src="styles/legend/CostaRica_20.png" /> Costa Rica'
            });
var format_zona_sursur_21 = new ol.format.GeoJSON();
var features_zona_sursur_21 = format_zona_sursur_21.readFeatures(json_zona_sursur_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zona_sursur_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zona_sursur_21.addFeatures(features_zona_sursur_21);
var lyr_zona_sursur_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zona_sursur_21, 
                style: style_zona_sursur_21,
                popuplayertitle: 'zona_sur-sur',
                interactive: true,
                title: '<img src="styles/legend/zona_sursur_21.png" /> zona_sur-sur'
            });
var format_zona_surnorte_22 = new ol.format.GeoJSON();
var features_zona_surnorte_22 = format_zona_surnorte_22.readFeatures(json_zona_surnorte_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zona_surnorte_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zona_surnorte_22.addFeatures(features_zona_surnorte_22);
var lyr_zona_surnorte_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zona_surnorte_22, 
                style: style_zona_surnorte_22,
                popuplayertitle: 'zona_sur-norte',
                interactive: true,
                title: '<img src="styles/legend/zona_surnorte_22.png" /> zona_sur-norte'
            });
var format_zona_nortecentro_23 = new ol.format.GeoJSON();
var features_zona_nortecentro_23 = format_zona_nortecentro_23.readFeatures(json_zona_nortecentro_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zona_nortecentro_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zona_nortecentro_23.addFeatures(features_zona_nortecentro_23);
var lyr_zona_nortecentro_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zona_nortecentro_23, 
                style: style_zona_nortecentro_23,
                popuplayertitle: 'zona_norte-centro',
                interactive: true,
                title: '<img src="styles/legend/zona_nortecentro_23.png" /> zona_norte-centro'
            });
var group_zonas = new ol.layer.Group({
                                layers: [lyr_zona_sursur_21,lyr_zona_surnorte_22,lyr_zona_nortecentro_23,],
                                fold: 'open',
                                title: 'zonas'});
var group_nortecentro = new ol.layer.Group({
                                layers: [lyr_Cuba_10,lyr_Nicaragua_11,lyr_ElSalvador_12,lyr_DominicanRepublic_13,lyr_PuertoRico_14,lyr_Belize_15,lyr_Panama_16,lyr_Mexico_17,lyr_Honduras_18,lyr_Guatemala_19,lyr_CostaRica_20,],
                                fold: 'close',
                                title: 'norte-centro'});
var group_surnorte = new ol.layer.Group({
                                layers: [lyr_Paraguay_5,lyr_Brazil_6,lyr_Colombia_7,lyr_Venezuela_8,lyr_Ecuador_9,],
                                fold: 'close',
                                title: 'sur-norte'});
var group_sursur = new ol.layer.Group({
                                layers: [lyr_Argentina_0,lyr_Chile_1,lyr_Uruguay_2,lyr_Peru_3,lyr_Bolivia_4,],
                                fold: 'close',
                                title: 'sur-sur'});

lyr_Argentina_0.setVisible(false);lyr_Chile_1.setVisible(false);lyr_Uruguay_2.setVisible(false);lyr_Peru_3.setVisible(false);lyr_Bolivia_4.setVisible(false);lyr_Paraguay_5.setVisible(false);lyr_Brazil_6.setVisible(false);lyr_Colombia_7.setVisible(false);lyr_Venezuela_8.setVisible(false);lyr_Ecuador_9.setVisible(false);lyr_Cuba_10.setVisible(false);lyr_Nicaragua_11.setVisible(false);lyr_ElSalvador_12.setVisible(false);lyr_DominicanRepublic_13.setVisible(false);lyr_PuertoRico_14.setVisible(false);lyr_Belize_15.setVisible(false);lyr_Panama_16.setVisible(false);lyr_Mexico_17.setVisible(false);lyr_Honduras_18.setVisible(false);lyr_Guatemala_19.setVisible(false);lyr_CostaRica_20.setVisible(false);lyr_zona_sursur_21.setVisible(true);lyr_zona_surnorte_22.setVisible(true);lyr_zona_nortecentro_23.setVisible(true);
var layersList = [group_sursur,group_surnorte,group_nortecentro,group_zonas];
lyr_Argentina_0.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Chile_1.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Uruguay_2.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Peru_3.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Bolivia_4.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Paraguay_5.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Brazil_6.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Colombia_7.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Venezuela_8.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Ecuador_9.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Cuba_10.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Nicaragua_11.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_ElSalvador_12.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_DominicanRepublic_13.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_PuertoRico_14.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Belize_15.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Panama_16.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Mexico_17.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Honduras_18.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Guatemala_19.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_CostaRica_20.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_zona_sursur_21.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', 'layer': 'layer', 'path': 'path', });
lyr_zona_surnorte_22.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', 'layer': 'layer', 'path': 'path', });
lyr_zona_nortecentro_23.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', 'layer': 'layer', 'path': 'path', });
lyr_Argentina_0.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Chile_1.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Uruguay_2.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Peru_3.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Bolivia_4.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Paraguay_5.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Brazil_6.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Colombia_7.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Venezuela_8.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Ecuador_9.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Cuba_10.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Nicaragua_11.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_ElSalvador_12.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_DominicanRepublic_13.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_PuertoRico_14.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Belize_15.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Panama_16.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Mexico_17.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Honduras_18.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Guatemala_19.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_CostaRica_20.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_zona_sursur_21.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_zona_surnorte_22.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_zona_nortecentro_23.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Argentina_0.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Chile_1.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Uruguay_2.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Peru_3.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Bolivia_4.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Paraguay_5.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Brazil_6.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Colombia_7.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Venezuela_8.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Ecuador_9.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Cuba_10.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Nicaragua_11.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_ElSalvador_12.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_DominicanRepublic_13.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_PuertoRico_14.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Belize_15.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Panama_16.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Mexico_17.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Honduras_18.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Guatemala_19.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_CostaRica_20.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_zona_sursur_21.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_zona_surnorte_22.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_zona_nortecentro_23.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_zona_nortecentro_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});