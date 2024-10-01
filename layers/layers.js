ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32628").setExtent([205996.671042, 1319733.223311, 1116396.113606, 1839821.025813]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_santedesplantes_1 = new ol.format.GeoJSON();
var features_santedesplantes_1 = format_santedesplantes_1.readFeatures(json_santedesplantes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_santedesplantes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_santedesplantes_1.addFeatures(features_santedesplantes_1);
var lyr_santedesplantes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_santedesplantes_1, 
                style: style_santedesplantes_1,
                popuplayertitle: "sante des plantes",
                interactive: true,
    title: 'sante des plantes<br />\
    <img src="styles/legend/santedesplantes_1_0.png" /> Stress végétatif <br />\
    <img src="styles/legend/santedesplantes_1_1.png" /> Végétation faible / Croissance ralentie<br />\
    <img src="styles/legend/santedesplantes_1_2.png" /> Végétation modérée / Bon développement<br />'
        });
var format_Parcelle_2 = new ol.format.GeoJSON();
var features_Parcelle_2 = format_Parcelle_2.readFeatures(json_Parcelle_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_Parcelle_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelle_2.addFeatures(features_Parcelle_2);
var lyr_Parcelle_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelle_2, 
                style: style_Parcelle_2,
                popuplayertitle: "Parcelle",
                interactive: true,
                title: '<img src="styles/legend/Parcelle_2.png" /> Parcelle'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_santedesplantes_1.setVisible(true);lyr_Parcelle_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_santedesplantes_1,lyr_Parcelle_2];
lyr_santedesplantes_1.set('fieldAliases', {'VALUE': 'VALUE', 'VALUE_2': 'VALUE_2', });
lyr_Parcelle_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Commune': 'Commune', 'CAR': 'CAR', 'Nom producteur': 'Nom producteur', 'Niveau': 'Niveau', 'Date semis': 'Date semis', 'Date récolte': 'Date récolte', 'Observations': 'Observations', 'Type parce': 'Type parce', 'Culture': 'Culture', 'Variete': 'Variete', 'Type NPK': 'Type NPK', 'Autre CAR': 'Autre CAR', 'Autre commune': 'Autre commune', 'Telephone producteur': 'Telephone producteur', 'Autre projet': 'Autre projet', 'Autre culture': 'Autre culture', 'Date collecte': 'Date collecte', 'Superficie': 'Superficie', 'Uree en Kg': 'Uree en Kg', 'Semence en kg': 'Semence en kg', 'Qtite NPK en Kg': 'Qtite NPK en Kg', });
lyr_santedesplantes_1.set('fieldImages', {'VALUE': 'TextEdit', 'VALUE_2': 'TextEdit', });
lyr_Parcelle_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Commune': 'ValueMap', 'CAR': 'ValueMap', 'Nom producteur': 'TextEdit', 'Niveau': 'ValueMap', 'Date semis': 'DateTime', 'Date récolte': 'DateTime', 'Observations': 'TextEdit', 'Type parce': 'TextEdit', 'Culture': 'ValueMap', 'Variete': 'TextEdit', 'Type NPK': 'ValueMap', 'Autre CAR': 'TextEdit', 'Autre commune': 'TextEdit', 'Telephone producteur': 'TextEdit', 'Autre projet': 'TextEdit', 'Autre culture': 'TextEdit', 'Date collecte': 'DateTime', 'Superficie': 'TextEdit', 'Uree en Kg': 'TextEdit', 'Semence en kg': 'TextEdit', 'Qtite NPK en Kg': 'TextEdit', });
lyr_santedesplantes_1.set('fieldLabels', {'VALUE': 'hidden field', 'VALUE_2': 'hidden field', });
lyr_Parcelle_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Commune': 'hidden field', 'CAR': 'hidden field', 'Nom producteur': 'inline label - visible with data', 'Niveau': 'hidden field', 'Date semis': 'inline label - visible with data', 'Date récolte': 'hidden field', 'Observations': 'hidden field', 'Type parce': 'hidden field', 'Culture': 'inline label - visible with data', 'Variete': 'inline label - visible with data', 'Type NPK': 'hidden field', 'Autre CAR': 'hidden field', 'Autre commune': 'hidden field', 'Telephone producteur': 'inline label - visible with data', 'Autre projet': 'hidden field', 'Autre culture': 'inline label - visible with data', 'Date collecte': 'hidden field', 'Superficie': 'inline label - visible with data', 'Uree en Kg': 'hidden field', 'Semence en kg': 'inline label - visible with data', 'Qtite NPK en Kg': 'hidden field', });
lyr_Parcelle_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});