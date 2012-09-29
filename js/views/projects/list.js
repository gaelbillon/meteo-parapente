// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/projects',
  'text!templates/projects/list.html'

], function($, _, Backbone, projectsCollection, projectListTemplate){
  var projectListView = Backbone.View.extend({
    el: $("#menu ul"),
    initialize: function(){


      // Fetch the collection and call render() method
      _.bindAll(this, 'render');
      // create a collection
      this.collection = projectsCollection;
      // Fetch the collection and call render() method
      var that = this;
      this.collection.fetch({
        success: function (data) {
            // console.log('success');
            // console.log(data);
            that.render();
        }
      });

    },
    exampleBind: function( model ){
      console.log(model);
    },

    template: _.template(projectListTemplate),
    render: function(){

      $(this.el).append(this.template({ runs: this.collection.toJSON()
      }));
    }
  });
  return new projectListView;
});
