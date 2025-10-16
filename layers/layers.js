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
var format_Brazil_1 = new ol.format.GeoJSON();
var features_Brazil_1 = format_Brazil_1.readFeatures(json_Brazil_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brazil_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brazil_1.addFeatures(features_Brazil_1);
var lyr_Brazil_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brazil_1, 
                style: style_Brazil_1,
                popuplayertitle: 'Brazil',
                interactive: true,
                title: '<img src="styles/legend/Brazil_1.png" /> Brazil'
            });
var format_Chile_2 = new ol.format.GeoJSON();
var features_Chile_2 = format_Chile_2.readFeatures(json_Chile_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chile_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chile_2.addFeatures(features_Chile_2);
var lyr_Chile_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chile_2, 
                style: style_Chile_2,
                popuplayertitle: 'Chile',
                interactive: true,
                title: '<img src="styles/legend/Chile_2.png" /> Chile'
            });
var format_CostaRica_3 = new ol.format.GeoJSON();
var features_CostaRica_3 = format_CostaRica_3.readFeatures(json_CostaRica_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CostaRica_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CostaRica_3.addFeatures(features_CostaRica_3);
var lyr_CostaRica_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CostaRica_3, 
                style: style_CostaRica_3,
                popuplayertitle: 'Costa Rica',
                interactive: true,
                title: '<img src="styles/legend/CostaRica_3.png" /> Costa Rica'
            });
var format_Cuba_4 = new ol.format.GeoJSON();
var features_Cuba_4 = format_Cuba_4.readFeatures(json_Cuba_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuba_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuba_4.addFeatures(features_Cuba_4);
var lyr_Cuba_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cuba_4, 
                style: style_Cuba_4,
                popuplayertitle: 'Cuba',
                interactive: true,
                title: '<img src="styles/legend/Cuba_4.png" /> Cuba'
            });
var format_Uruguay_5 = new ol.format.GeoJSON();
var features_Uruguay_5 = format_Uruguay_5.readFeatures(json_Uruguay_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uruguay_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uruguay_5.addFeatures(features_Uruguay_5);
var lyr_Uruguay_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uruguay_5, 
                style: style_Uruguay_5,
                popuplayertitle: 'Uruguay',
                interactive: true,
                title: '<img src="styles/legend/Uruguay_5.png" /> Uruguay'
            });
var format_Paraguay_6 = new ol.format.GeoJSON();
var features_Paraguay_6 = format_Paraguay_6.readFeatures(json_Paraguay_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paraguay_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paraguay_6.addFeatures(features_Paraguay_6);
var lyr_Paraguay_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paraguay_6, 
                style: style_Paraguay_6,
                popuplayertitle: 'Paraguay',
                interactive: true,
                title: '<img src="styles/legend/Paraguay_6.png" /> Paraguay'
            });
var format_Nicaragua_7 = new ol.format.GeoJSON();
var features_Nicaragua_7 = format_Nicaragua_7.readFeatures(json_Nicaragua_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nicaragua_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nicaragua_7.addFeatures(features_Nicaragua_7);
var lyr_Nicaragua_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nicaragua_7, 
                style: style_Nicaragua_7,
                popuplayertitle: 'Nicaragua',
                interactive: true,
                title: '<img src="styles/legend/Nicaragua_7.png" /> Nicaragua'
            });
var format_ElSalvador_8 = new ol.format.GeoJSON();
var features_ElSalvador_8 = format_ElSalvador_8.readFeatures(json_ElSalvador_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElSalvador_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElSalvador_8.addFeatures(features_ElSalvador_8);
var lyr_ElSalvador_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElSalvador_8, 
                style: style_ElSalvador_8,
                popuplayertitle: 'El Salvador',
                interactive: true,
                title: '<img src="styles/legend/ElSalvador_8.png" /> El Salvador'
            });
var format_DominicanRepublic_9 = new ol.format.GeoJSON();
var features_DominicanRepublic_9 = format_DominicanRepublic_9.readFeatures(json_DominicanRepublic_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DominicanRepublic_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DominicanRepublic_9.addFeatures(features_DominicanRepublic_9);
var lyr_DominicanRepublic_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DominicanRepublic_9, 
                style: style_DominicanRepublic_9,
                popuplayertitle: 'Dominican Republic',
                interactive: true,
                title: '<img src="styles/legend/DominicanRepublic_9.png" /> Dominican Republic'
            });
var format_Peru_10 = new ol.format.GeoJSON();
var features_Peru_10 = format_Peru_10.readFeatures(json_Peru_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peru_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peru_10.addFeatures(features_Peru_10);
var lyr_Peru_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Peru_10, 
                style: style_Peru_10,
                popuplayertitle: 'Peru',
                interactive: true,
                title: '<img src="styles/legend/Peru_10.png" /> Peru'
            });
var format_Bolivia_11 = new ol.format.GeoJSON();
var features_Bolivia_11 = format_Bolivia_11.readFeatures(json_Bolivia_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bolivia_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bolivia_11.addFeatures(features_Bolivia_11);
var lyr_Bolivia_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bolivia_11, 
                style: style_Bolivia_11,
                popuplayertitle: 'Bolivia',
                interactive: true,
                title: '<img src="styles/legend/Bolivia_11.png" /> Bolivia'
            });
var format_PuertoRico_12 = new ol.format.GeoJSON();
var features_PuertoRico_12 = format_PuertoRico_12.readFeatures(json_PuertoRico_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuertoRico_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuertoRico_12.addFeatures(features_PuertoRico_12);
var lyr_PuertoRico_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuertoRico_12, 
                style: style_PuertoRico_12,
                popuplayertitle: 'Puerto Rico',
                interactive: true,
                title: '<img src="styles/legend/PuertoRico_12.png" /> Puerto Rico'
            });
var format_Colombia_13 = new ol.format.GeoJSON();
var features_Colombia_13 = format_Colombia_13.readFeatures(json_Colombia_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colombia_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colombia_13.addFeatures(features_Colombia_13);
var lyr_Colombia_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colombia_13, 
                style: style_Colombia_13,
                popuplayertitle: 'Colombia',
                interactive: true,
                title: '<img src="styles/legend/Colombia_13.png" /> Colombia'
            });
var format_Venezuela_14 = new ol.format.GeoJSON();
var features_Venezuela_14 = format_Venezuela_14.readFeatures(json_Venezuela_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Venezuela_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Venezuela_14.addFeatures(features_Venezuela_14);
var lyr_Venezuela_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Venezuela_14, 
                style: style_Venezuela_14,
                popuplayertitle: 'Venezuela',
                interactive: true,
                title: '<img src="styles/legend/Venezuela_14.png" /> Venezuela'
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
var format_Ecuador_16 = new ol.format.GeoJSON();
var features_Ecuador_16 = format_Ecuador_16.readFeatures(json_Ecuador_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ecuador_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecuador_16.addFeatures(features_Ecuador_16);
var lyr_Ecuador_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ecuador_16, 
                style: style_Ecuador_16,
                popuplayertitle: 'Ecuador',
                interactive: true,
                title: '<img src="styles/legend/Ecuador_16.png" /> Ecuador'
            });
var format_Panama_17 = new ol.format.GeoJSON();
var features_Panama_17 = format_Panama_17.readFeatures(json_Panama_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Panama_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Panama_17.addFeatures(features_Panama_17);
var lyr_Panama_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Panama_17, 
                style: style_Panama_17,
                popuplayertitle: 'Panama',
                interactive: true,
                title: '<img src="styles/legend/Panama_17.png" /> Panama'
            });
var format_Mexico_18 = new ol.format.GeoJSON();
var features_Mexico_18 = format_Mexico_18.readFeatures(json_Mexico_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mexico_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mexico_18.addFeatures(features_Mexico_18);
var lyr_Mexico_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mexico_18, 
                style: style_Mexico_18,
                popuplayertitle: 'Mexico',
                interactive: true,
                title: '<img src="styles/legend/Mexico_18.png" /> Mexico'
            });
var format_Honduras_19 = new ol.format.GeoJSON();
var features_Honduras_19 = format_Honduras_19.readFeatures(json_Honduras_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Honduras_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Honduras_19.addFeatures(features_Honduras_19);
var lyr_Honduras_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Honduras_19, 
                style: style_Honduras_19,
                popuplayertitle: 'Honduras',
                interactive: true,
                title: '<img src="styles/legend/Honduras_19.png" /> Honduras'
            });
var format_Guatemala_20 = new ol.format.GeoJSON();
var features_Guatemala_20 = format_Guatemala_20.readFeatures(json_Guatemala_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Guatemala_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Guatemala_20.addFeatures(features_Guatemala_20);
var lyr_Guatemala_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Guatemala_20, 
                style: style_Guatemala_20,
                popuplayertitle: 'Guatemala',
                interactive: true,
                title: '<img src="styles/legend/Guatemala_20.png" /> Guatemala'
            });
var format_CostaRica_21 = new ol.format.GeoJSON();
var features_CostaRica_21 = format_CostaRica_21.readFeatures(json_CostaRica_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CostaRica_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CostaRica_21.addFeatures(features_CostaRica_21);
var lyr_CostaRica_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CostaRica_21, 
                style: style_CostaRica_21,
                popuplayertitle: 'Costa Rica',
                interactive: true,
                title: '<img src="styles/legend/CostaRica_21.png" /> Costa Rica'
            });
var format_zona_sursur_22 = new ol.format.GeoJSON();
var features_zona_sursur_22 = format_zona_sursur_22.readFeatures(json_zona_sursur_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zona_sursur_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zona_sursur_22.addFeatures(features_zona_sursur_22);
var lyr_zona_sursur_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zona_sursur_22, 
                style: style_zona_sursur_22,
                popuplayertitle: 'zona_sur-sur',
                interactive: true,
                title: '<img src="styles/legend/zona_sursur_22.png" /> zona_sur-sur'
            });
var format_zona_surnorte_23 = new ol.format.GeoJSON();
var features_zona_surnorte_23 = format_zona_surnorte_23.readFeatures(json_zona_surnorte_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zona_surnorte_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zona_surnorte_23.addFeatures(features_zona_surnorte_23);
var lyr_zona_surnorte_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zona_surnorte_23, 
                style: style_zona_surnorte_23,
                popuplayertitle: 'zona_sur-norte',
                interactive: true,
                title: '<img src="styles/legend/zona_surnorte_23.png" /> zona_sur-norte'
            });
var format_zona_nortecentro_24 = new ol.format.GeoJSON();
var features_zona_nortecentro_24 = format_zona_nortecentro_24.readFeatures(json_zona_nortecentro_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zona_nortecentro_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zona_nortecentro_24.addFeatures(features_zona_nortecentro_24);
var lyr_zona_nortecentro_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zona_nortecentro_24, 
                style: style_zona_nortecentro_24,
                popuplayertitle: 'zona_norte-centro',
                interactive: true,
                title: '<img src="styles/legend/zona_nortecentro_24.png" /> zona_norte-centro'
            });
var group_zonas = new ol.layer.Group({
                                layers: [lyr_zona_sursur_22,lyr_zona_surnorte_23,lyr_zona_nortecentro_24,],
                                fold: 'open',
                                title: 'zonas'});
var group_paises = new ol.layer.Group({
                                layers: [lyr_Argentina_0,lyr_Brazil_1,lyr_Chile_2,lyr_CostaRica_3,lyr_Cuba_4,lyr_Uruguay_5,lyr_Paraguay_6,lyr_Nicaragua_7,lyr_ElSalvador_8,lyr_DominicanRepublic_9,lyr_Peru_10,lyr_Bolivia_11,lyr_PuertoRico_12,lyr_Colombia_13,lyr_Venezuela_14,lyr_Belize_15,lyr_Ecuador_16,lyr_Panama_17,lyr_Mexico_18,lyr_Honduras_19,lyr_Guatemala_20,lyr_CostaRica_21,],
                                fold: 'open',
                                title: 'paises'});

lyr_Argentina_0.setVisible(true);lyr_Brazil_1.setVisible(true);lyr_Chile_2.setVisible(true);lyr_CostaRica_3.setVisible(true);lyr_Cuba_4.setVisible(true);lyr_Uruguay_5.setVisible(true);lyr_Paraguay_6.setVisible(true);lyr_Nicaragua_7.setVisible(true);lyr_ElSalvador_8.setVisible(true);lyr_DominicanRepublic_9.setVisible(true);lyr_Peru_10.setVisible(true);lyr_Bolivia_11.setVisible(true);lyr_PuertoRico_12.setVisible(true);lyr_Colombia_13.setVisible(true);lyr_Venezuela_14.setVisible(true);lyr_Belize_15.setVisible(true);lyr_Ecuador_16.setVisible(true);lyr_Panama_17.setVisible(true);lyr_Mexico_18.setVisible(true);lyr_Honduras_19.setVisible(true);lyr_Guatemala_20.setVisible(true);lyr_CostaRica_21.setVisible(true);lyr_zona_sursur_22.setVisible(true);lyr_zona_surnorte_23.setVisible(true);lyr_zona_nortecentro_24.setVisible(true);
var layersList = [group_paises,group_zonas];
lyr_Argentina_0.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Brazil_1.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Chile_2.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_CostaRica_3.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Cuba_4.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Uruguay_5.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Paraguay_6.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Nicaragua_7.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_ElSalvador_8.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_DominicanRepublic_9.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Peru_10.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Bolivia_11.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_PuertoRico_12.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Colombia_13.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Venezuela_14.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Belize_15.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Ecuador_16.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Panama_17.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Mexico_18.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Honduras_19.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Guatemala_20.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_CostaRica_21.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_zona_sursur_22.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', 'layer': 'layer', 'path': 'path', });
lyr_zona_surnorte_23.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', 'layer': 'layer', 'path': 'path', });
lyr_zona_nortecentro_24.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', 'layer': 'layer', 'path': 'path', });
lyr_Argentina_0.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Brazil_1.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Chile_2.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_CostaRica_3.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Cuba_4.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Uruguay_5.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Paraguay_6.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Nicaragua_7.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_ElSalvador_8.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_DominicanRepublic_9.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Peru_10.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Bolivia_11.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_PuertoRico_12.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Colombia_13.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Venezuela_14.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Belize_15.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Ecuador_16.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Panama_17.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Mexico_18.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Honduras_19.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_Guatemala_20.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_CostaRica_21.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', });
lyr_zona_sursur_22.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_zona_surnorte_23.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_zona_nortecentro_24.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Argentina_0.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Brazil_1.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Chile_2.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_CostaRica_3.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Cuba_4.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Uruguay_5.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Paraguay_6.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Nicaragua_7.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_ElSalvador_8.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_DominicanRepublic_9.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Peru_10.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Bolivia_11.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_PuertoRico_12.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Colombia_13.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Venezuela_14.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Belize_15.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Ecuador_16.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Panama_17.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Mexico_18.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Honduras_19.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Guatemala_20.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_CostaRica_21.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_zona_sursur_22.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_zona_surnorte_23.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_zona_nortecentro_24.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_zona_nortecentro_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});