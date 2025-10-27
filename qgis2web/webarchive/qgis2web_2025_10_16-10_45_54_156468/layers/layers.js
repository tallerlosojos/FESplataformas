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
var format_UnitedStates_10 = new ol.format.GeoJSON();
var features_UnitedStates_10 = format_UnitedStates_10.readFeatures(json_UnitedStates_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnitedStates_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnitedStates_10.addFeatures(features_UnitedStates_10);
var lyr_UnitedStates_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnitedStates_10, 
                style: style_UnitedStates_10,
                popuplayertitle: 'United States',
                interactive: true,
                title: '<img src="styles/legend/UnitedStates_10.png" /> United States'
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
var format_Guyana_14 = new ol.format.GeoJSON();
var features_Guyana_14 = format_Guyana_14.readFeatures(json_Guyana_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Guyana_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Guyana_14.addFeatures(features_Guyana_14);
var lyr_Guyana_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Guyana_14, 
                style: style_Guyana_14,
                popuplayertitle: 'Guyana',
                interactive: true,
                title: '<img src="styles/legend/Guyana_14.png" /> Guyana'
            });
var format_Venezuela_15 = new ol.format.GeoJSON();
var features_Venezuela_15 = format_Venezuela_15.readFeatures(json_Venezuela_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Venezuela_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Venezuela_15.addFeatures(features_Venezuela_15);
var lyr_Venezuela_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Venezuela_15, 
                style: style_Venezuela_15,
                popuplayertitle: 'Venezuela',
                interactive: true,
                title: '<img src="styles/legend/Venezuela_15.png" /> Venezuela'
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
var format_Suriname_18 = new ol.format.GeoJSON();
var features_Suriname_18 = format_Suriname_18.readFeatures(json_Suriname_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suriname_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suriname_18.addFeatures(features_Suriname_18);
var lyr_Suriname_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suriname_18, 
                style: style_Suriname_18,
                popuplayertitle: 'Suriname',
                interactive: true,
                title: '<img src="styles/legend/Suriname_18.png" /> Suriname'
            });
var format_Mexico_19 = new ol.format.GeoJSON();
var features_Mexico_19 = format_Mexico_19.readFeatures(json_Mexico_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mexico_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mexico_19.addFeatures(features_Mexico_19);
var lyr_Mexico_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mexico_19, 
                style: style_Mexico_19,
                popuplayertitle: 'Mexico',
                interactive: true,
                title: '<img src="styles/legend/Mexico_19.png" /> Mexico'
            });
var format_Honduras_20 = new ol.format.GeoJSON();
var features_Honduras_20 = format_Honduras_20.readFeatures(json_Honduras_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Honduras_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Honduras_20.addFeatures(features_Honduras_20);
var lyr_Honduras_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Honduras_20, 
                style: style_Honduras_20,
                popuplayertitle: 'Honduras',
                interactive: true,
                title: '<img src="styles/legend/Honduras_20.png" /> Honduras'
            });
var format_Guatemala_21 = new ol.format.GeoJSON();
var features_Guatemala_21 = format_Guatemala_21.readFeatures(json_Guatemala_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Guatemala_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Guatemala_21.addFeatures(features_Guatemala_21);
var lyr_Guatemala_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Guatemala_21, 
                style: style_Guatemala_21,
                popuplayertitle: 'Guatemala',
                interactive: true,
                title: '<img src="styles/legend/Guatemala_21.png" /> Guatemala'
            });
var format_CostaRica_22 = new ol.format.GeoJSON();
var features_CostaRica_22 = format_CostaRica_22.readFeatures(json_CostaRica_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CostaRica_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CostaRica_22.addFeatures(features_CostaRica_22);
var lyr_CostaRica_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CostaRica_22, 
                style: style_CostaRica_22,
                popuplayertitle: 'Costa Rica',
                interactive: true,
                title: '<img src="styles/legend/CostaRica_22.png" /> Costa Rica'
            });

lyr_Argentina_0.setVisible(true);lyr_Brazil_1.setVisible(true);lyr_Chile_2.setVisible(true);lyr_CostaRica_3.setVisible(true);lyr_Cuba_4.setVisible(true);lyr_Uruguay_5.setVisible(true);lyr_Paraguay_6.setVisible(true);lyr_Nicaragua_7.setVisible(true);lyr_FrenchGuiana_8.setVisible(true);lyr_DominicanRepublic_9.setVisible(true);lyr_UnitedStates_10.setVisible(true);lyr_Peru_11.setVisible(true);lyr_Bolivia_12.setVisible(true);lyr_Colombia_13.setVisible(true);lyr_Guyana_14.setVisible(true);lyr_Venezuela_15.setVisible(true);lyr_Ecuador_16.setVisible(true);lyr_Panama_17.setVisible(true);lyr_Suriname_18.setVisible(true);lyr_Mexico_19.setVisible(true);lyr_Honduras_20.setVisible(true);lyr_Guatemala_21.setVisible(true);lyr_CostaRica_22.setVisible(true);
var layersList = [lyr_Argentina_0,lyr_Brazil_1,lyr_Chile_2,lyr_CostaRica_3,lyr_Cuba_4,lyr_Uruguay_5,lyr_Paraguay_6,lyr_Nicaragua_7,lyr_FrenchGuiana_8,lyr_DominicanRepublic_9,lyr_UnitedStates_10,lyr_Peru_11,lyr_Bolivia_12,lyr_Colombia_13,lyr_Guyana_14,lyr_Venezuela_15,lyr_Ecuador_16,lyr_Panama_17,lyr_Suriname_18,lyr_Mexico_19,lyr_Honduras_20,lyr_Guatemala_21,lyr_CostaRica_22];
lyr_Argentina_0.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Brazil_1.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Chile_2.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_CostaRica_3.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Cuba_4.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Uruguay_5.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Paraguay_6.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Nicaragua_7.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_FrenchGuiana_8.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_DominicanRepublic_9.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_UnitedStates_10.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Peru_11.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Bolivia_12.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Colombia_13.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Guyana_14.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Venezuela_15.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Ecuador_16.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Panama_17.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Suriname_18.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Mexico_19.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Honduras_20.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Guatemala_21.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_CostaRica_22.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', });
lyr_Argentina_0.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Brazil_1.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Chile_2.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_CostaRica_3.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Cuba_4.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Uruguay_5.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Paraguay_6.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Nicaragua_7.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_FrenchGuiana_8.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_DominicanRepublic_9.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_UnitedStates_10.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Peru_11.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Bolivia_12.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Colombia_13.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Guyana_14.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Venezuela_15.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Ecuador_16.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Panama_17.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Suriname_18.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Mexico_19.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Honduras_20.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Guatemala_21.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_CostaRica_22.set('fieldImages', {'fid': '', 'COUNTRY': '', 'ISO': '', 'COUNTRYAFF': '', 'AFF_ISO': '', });
lyr_Argentina_0.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Brazil_1.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Chile_2.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_CostaRica_3.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Cuba_4.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Uruguay_5.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Paraguay_6.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Nicaragua_7.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_FrenchGuiana_8.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_DominicanRepublic_9.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_UnitedStates_10.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Peru_11.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Bolivia_12.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Colombia_13.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Guyana_14.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Venezuela_15.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Ecuador_16.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Panama_17.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Suriname_18.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Mexico_19.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Honduras_20.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_Guatemala_21.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_CostaRica_22.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', });
lyr_CostaRica_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});