define([
  'jquery',
  'underscore',
  'backbone',
  'models/projects'
], function($, _, Backbone, projectsModel){
  var projectsCollection = Backbone.Collection.extend({
    model: projectsModel,
    url: 'http://data2.rasp-france.org/status.php',
    parse: function(response) {
      return response.france;
    },
    // Overwrite the sync method to pass over the Same Origin Policy
    sync: function(method, model, options) {
      var that = this;
        var params = _.extend({
          type: 'GET',
          dataType: 'jsonp',
          url: that.url,
          processData: false
        }, options);

      return $.ajax(params);
    },
    initialize: function(){
    }

  });

  return new projectsCollection;
});
