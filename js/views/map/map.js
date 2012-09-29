// Filename: views/home/main
define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

  var mapView = Backbone.View.extend({

    el: $("#page"),

    render: function(){

      var map = new OpenLayers.Map('map_canvas');
      var wms = new OpenLayers.Layer.WMS( "OpenLayers WMS","http://vmap0.tiles.osgeo.org/wms/vmap0", {layers: 'basic'} );
      map.addLayer(wms);
      map.zoomToMaxExtent();
      var center = new OpenLayers.LonLat(2.5,46.5);
      map.setCenter(center, 6); 

    }
  });
  return new mapView;
});