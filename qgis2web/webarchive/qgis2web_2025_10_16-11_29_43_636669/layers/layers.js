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
var format_FrenchGuiana_8 = new ol.format.GeoJSON();
var features_FrenchGuiana_8 = format_FrenchGuiana_8.readFeatures(json_FrenchGuiana_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrenchGuiana_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrenchGuiana_8.addFeatures(features_FrenchGuiana_8);
var lyr_FrenchGuiana_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrenchGuiana_8, 
                style: style_FrenchGuiana_8,
                popuplayertitle: 'French Guiana',
                interactive: true,
                title: '<img src="styles/legend/FrenchGuiana_8.png" /> French Guiana'
            });
var format_ElSalvador_9 = new ol.format.GeoJSON();
var features_ElSalvador_9 = format_ElSalvador_9.readFeatures(json_ElSalvador_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElSalvador_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElSalvador_9.addFeatures(features_ElSalvador_9);
var lyr_ElSalvador_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElSalvador_9, 
                style: style_ElSalvador_9,
                popuplayertitle: 'El Salvador',
                interactive: true,
                title: '<img src="styles/legend/ElSalvador_9.png" /> El Salvador'
            });
var format_DominicanRepublic_10 = new ol.format.GeoJSON();
var features_DominicanRepublic_10 = format_DominicanRepublic_10.readFeatures(json_DominicanRepublic_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DominicanRepublic_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DominicanRepublic_10.addFeatures(features_DominicanRepublic_10);
var lyr_DominicanRepublic_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DominicanRepublic_10, 
                style: style_DominicanRepublic_10,
                popuplayertitle: 'Dominican Republic',
                interactive: true,
                title: '<img src="styles/legend/DominicanRepublic_10.png" /> Dominican Republic'
            });
var format_Peru_11 = new ol.format.GeoJSON();
var features_Peru_11 = format_Peru_11.readFeatures(json_Peru_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peru_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peru_11.addFeatures(features_Peru_11);
var lyr_Peru_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Peru_11, 
                style: style_Peru_11,
                popuplayertitle: 'Peru',
                interactive: true,
                title: '<img src="styles/legend/Peru_11.png" /> Peru'
            });
var format_Bolivia_12 = new ol.format.GeoJSON();
var features_Bolivia_12 = format_Bolivia_12.readFeatures(json_Bolivia_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bolivia_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bolivia_12.addFeatures(features_Bolivia_12);
var lyr_Bolivia_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bolivia_12, 
                style: style_Bolivia_12,
                popuplayertitle: 'Bolivia',
                interactive: true,
                title: '<img src="styles/legend/Bolivia_12.png" /> Bolivia'
            });
var format_PuertoRico_13 = new ol.format.GeoJSON();
var features_PuertoRico_13 = format_PuertoRico_13.readFeatures(json_PuertoRico_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuertoRico_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuertoRico_13.addFeatures(features_PuertoRico_13);
var lyr_PuertoRico_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuertoRico_13, 
                style: style_PuertoRico_13,
                popuplayertitle: 'Puerto Rico',
                interactive: true,
                title: '<img src="styles/legend/PuertoRico_13.png" /> Puerto Rico'
            });
var format_Colombia_14 = new ol.format.GeoJSON();
var features_Colombia_14 = format_Colombia_14.readFeatures(json_Colombia_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colombia_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colombia_14.addFeatures(features_Colombia_14);
var lyr_Colombia_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colombia_14, 
                style: style_Colombia_14,
                popuplayertitle: 'Colombia',
                interactive: true,
                title: '<img src="styles/legend/Colombia_14.png" /> Colombia'
            });
var format_Guyana_15 = new ol.format.GeoJSON();
var features_Guyana_15 = format_Guyana_15.readFeatures(json_Guyana_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Guyana_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Guyana_15.addFeatures(features_Guyana_15);
var lyr_Guyana_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Guyana_15, 
                style: style_Guyana_15,
                popuplayertitle: 'Guyana',
                interactive: true,
                title: '<img src="styles/legend/Guyana_15.png" /> Guyana'
            });
var format_Venezuela_16 = new ol.format.GeoJSON();
var features_Venezuela_16 = format_Venezuela_16.readFeatures(json_Venezuela_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Venezuela_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Venezuela_16.addFeatures(features_Venezuela_16);
var lyr_Venezuela_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Venezuela_16, 
                style: style_Venezuela_16,
                popuplayertitle: 'Venezuela',
                interactive: true,
                title: '<img src="styles/legend/Venezuela_16.png" /> Venezuela'
            });
var format_Belize_17 = new ol.format.GeoJSON();
var features_Belize_17 = format_Belize_17.readFeatures(json_Belize_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Belize_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Belize_17.addFeatures(features_Belize_17);
var lyr_Belize_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Belize_17, 
                style: style_Belize_17,
                popuplayertitle: 'Belize',
                interactive: true,
                title: '<img src="styles/legend/Belize_17.png" /> Belize'
            });
var format_Ecuador_18 = new ol.format.GeoJSON();
var features_Ecuador_18 = format_Ecuador_18.readFeatures(json_Ecuador_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ecuador_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecuador_18.addFeatures(features_Ecuador_18);
var lyr_Ecuador_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ecuador_18, 
                style: style_Ecuador_18,
                popuplayertitle: 'Ecuador',
                interactive: true,
                title: '<img src="styles/legend/Ecuador_18.png" /> Ecuador'
            });
var format_Panama_19 = new ol.format.GeoJSON();
var features_Panama_19 = format_Panama_19.readFeatures(json_Panama_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Panama_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Panama_19.addFeatures(features_Panama_19);
var lyr_Panama_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Panama_19, 
                style: style_Panama_19,
                popuplayertitle: 'Panama',
                interactive: true,
                title: '<img src="styles/legend/Panama_19.png" /> Panama'
            });
var format_Suriname_20 = new ol.format.GeoJSON();
var features_Suriname_20 = format_Suriname_20.readFeatures(json_Suriname_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suriname_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suriname_20.addFeatures(features_Suriname_20);
var lyr_Suriname_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suriname_20, 
                style: style_Suriname_20,
                popuplayertitle: 'Suriname',
                interactive: true,
                title: '<img src="styles/legend/Suriname_20.png" /> Suriname'
            });
var format_Mexico_21 = new ol.format.GeoJSON();
var features_Mexico_21 = format_Mexico_21.readFeatures(json_Mexico_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mexico_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mexico_21.addFeatures(features_Mexico_21);
var lyr_Mexico_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mexico_21, 
                style: style_Mexico_21,
                popuplayertitle: 'Mexico',
                interactive: true,
                title: '<img src="styles/legend/Mexico_21.png" /> Mexico'
            });
var format_Honduras_22 = new ol.format.GeoJSON();
var features_Honduras_22 = format_Honduras_22.readFeatures(json_Honduras_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Honduras_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Honduras_22.addFeatures(features_Honduras_22);
var lyr_Honduras_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Honduras_22, 
                style: style_Honduras_22,
                popuplayertitle: 'Honduras',
                interactive: true,
                title: '<img src="styles/legend/Honduras_22.png" /> Honduras'
            });
var format_Guatemala_23 = new ol.format.GeoJSON();
var features_Guatemala_23 = format_Guatemala_23.readFeatures(json_Guatemala_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Guatemala_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Guatemala_23.addFeatures(features_Guatemala_23);
var lyr_Guatemala_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Guatemala_23, 
                style: style_Guatemala_23,
                popuplayertitle: 'Guatemala',
                interactive: true,
                title: '<img src="styles/legend/Guatemala_23.png" /> Guatemala'
            });
var format_CostaRica_24 = new ol.format.GeoJSON();
var features_CostaRica_24 = format_CostaRica_24.readFeatures(json_CostaRica_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CostaRica_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CostaRica_24.addFeatures(features_CostaRica_24);
var lyr_CostaRica_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CostaRica_24, 
                style: style_CostaRica_24,
                popuplayertitle: 'Costa Rica',
                interactive: true,
                title: '<img src="styles/legend/CostaRica_24.png" /> Costa Rica'
            });
var format_zona_sursur_25 = new ol.format.GeoJSON();
var features_zona_sursur_25 = format_zona_sursur_25.readFeatures(json_zona_sursur_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zona_sursur_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zona_sursur_25.addFeatures(features_zona_sursur_25);
var lyr_zona_sursur_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zona_sursur_25, 
                style: style_zona_sursur_25,
                popuplayertitle: 'zona_sur-sur',
                interactive: true,
                title: '<img src="styles/legend/zona_sursur_25.png" /> zona_sur-sur'
            });
var format_zona_surnorte_26 = new ol.format.GeoJSON();
var features_zona_surnorte_26 = format_zona_surnorte_26.readFeatures(json_zona_surnorte_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zona_surnorte_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zona_surnorte_26.addFeatures(features_zona_surnorte_26);
var lyr_zona_surnorte_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zona_surnorte_26, 
                style: style_zona_surnorte_26,
                popuplayertitle: 'zona_sur-norte',
                interactive: true,
                title: '<img src="styles/legend/zona_surnorte_26.png" /> zona_sur-norte'
            });
var format_zona_nortecentro_27 = new ol.format.GeoJSON();
var features_zona_nortecentro_27 = format_zona_nortecentro_27.readFeatures(json_zona_nortecentro_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zona_nortecentro_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zona_nortecentro_27.addFeatures(features_zona_nortecentro_27);
var lyr_zona_nortecentro_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zona_nortecentro_27, 
                style: style_zona_nortecentro_27,
                popuplayertitle: 'zona_norte-centro',
                interactive: true,
                title: '<img src="styles/legend/zona_nortecentro_27.png" /> zona_norte-centro'
            });
var group_paises = new ol.layer.Group({
                                layers: [lyr_Argentina_0,lyr_Brazil_1,lyr_Chile_2,lyr_CostaRica_3,lyr_Cuba_4,lyr_Uruguay_5,lyr_Paraguay_6,lyr_Nicaragua_7,lyr_FrenchGuiana_8,lyr_ElSalvador_9,lyr_DominicanRepublic_10,lyr_Peru_11,lyr_Bolivia_12,lyr_PuertoRico_13,lyr_Colombia_14,lyr_Guyana_15,lyr_Venezuela_16,lyr_Belize_17,lyr_Ecuador_18,lyr_Panama_19,lyr_Suriname_20,lyr_Mexico_21,lyr_Honduras_22,lyr_Guatemala_23,lyr_CostaRica_24,],
                                fold: 'close',
                                title: 'paises'});
var group_bg = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'bg'});

lyr_Argentina_0.setVisible(true);lyr_Brazil_1.setVisible(true);lyr_Chile_2.setVisible(true);lyr_CostaRica_3.setVisible(true);lyr_Cuba_4.setVisible(true);lyr_Uruguay_5.setVisible(true);lyr_Paraguay_6.setVisible(true);lyr_Nicaragua_7.setVisible(true);lyr_FrenchGuiana_8.setVisible(true);lyr_ElSalvador_9.setVisible(true);lyr_DominicanRepublic_10.setVisible(true);lyr_Peru_11.setVisible(true);lyr_Bolivia_12.setVisible(true);lyr_PuertoRico_13.setVisible(true);lyr_Colombia_14.setVisible(true);lyr_Guyana_15.setVisible(true);lyr_Venezuela_16.setVisible(true);lyr_Belize_17.setVisible(true);lyr_Ecuador_18.setVisible(true);lyr_Panama_19.setVisible(true);lyr_Suriname_20.setVisible(true);lyr_Mexico_21.setVisible(true);lyr_Honduras_22.setVisible(true);lyr_Guatemala_23.setVisible(true);lyr_CostaRica_24.setVisible(true);lyr_zona_sursur_25.setVisible(true);lyr_zona_surnorte_26.setVisible(true);lyr_zona_nortecentro_27.setVisible(true);
var layersList = [group_paises,lyr_zona_sursur_25,lyr_zona_surnorte_26,lyr_zona_nortecentro_27];
lyr_Argentina_0.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Brazil_1.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Chile_2.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_CostaRica_3.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Cuba_4.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Uruguay_5.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Paraguay_6.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Nicaragua_7.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_FrenchGuiana_8.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_ElSalvador_9.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_DominicanRepublic_10.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Peru_11.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Bolivia_12.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_PuertoRico_13.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Colombia_14.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Guyana_15.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Venezuela_16.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Belize_17.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Ecuador_18.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Panama_19.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Suriname_20.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Mexico_21.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Honduras_22.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Guatemala_23.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_CostaRica_24.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_zona_sursur_25.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', 'layer': 'layer', 'path': 'path', });
lyr_zona_surnorte_26.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', 'layer': 'layer', 'path': 'path', });
lyr_zona_nortecentro_27.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', 'layer': 'layer', 'path': 'path', });
lyr_Argentina_0.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Brazil_1.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Chile_2.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_CostaRica_3.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Cuba_4.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Uruguay_5.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Paraguay_6.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Nicaragua_7.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_FrenchGuiana_8.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_ElSalvador_9.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_DominicanRepublic_10.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Peru_11.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Bolivia_12.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_PuertoRico_13.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Colombia_14.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Guyana_15.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Venezuela_16.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Belize_17.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Ecuador_18.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Panama_19.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Suriname_20.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Mexico_21.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Honduras_22.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Guatemala_23.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_CostaRica_24.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_zona_sursur_25.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', 'layer': '', 'path': '', });
lyr_zona_surnorte_26.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', 'layer': '', 'path': '', });
lyr_zona_nortecentro_27.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', 'layer': '', 'path': '', });
lyr_Argentina_0.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Brazil_1.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Chile_2.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_CostaRica_3.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Cuba_4.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Uruguay_5.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Paraguay_6.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Nicaragua_7.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_FrenchGuiana_8.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_ElSalvador_9.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_DominicanRepublic_10.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Peru_11.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Bolivia_12.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_PuertoRico_13.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Colombia_14.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Guyana_15.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Venezuela_16.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Belize_17.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Ecuador_18.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Panama_19.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Suriname_20.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Mexico_21.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Honduras_22.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Guatemala_23.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_CostaRica_24.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_zona_sursur_25.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_zona_surnorte_26.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_zona_nortecentro_27.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_zona_nortecentro_27.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});