var app = app || {};
app.views = {};
app.models = {};
app.collections = {};
app.templates = {};
app.config = {};

this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};

this["app"]["templates"]["intro"] = function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div>\n  This is how this works.\n</div>\n";};
(function () {
  app.models.Input = Backbone.Model.extend({
  
    initialize : function () {
      console.log( 'initialized' );
    }

  });
})();

(function () {
  app.models.sample = Backbone.Model.extend({
    initialize : function () {

    }
  });
})();

(function () {
  app.views.View = Backbone.View.extend({

    render : function () {
      this.template = this.template ||
        Handlebars.template( app.templates[ this.name ]);

      var data = this.getRenderData ? this.getRenderData() : {};
      this.$el.html( this.template( data ));
      console.log(this.$el.html());
      return this;
    }

  });
})();

(function () {
  app.views.Intro = app.views.View.extend({

    name : 'intro',

    className : 'intro-view',

    initialize : function ( options ) {

    }

  });
})();

app.init = function () {
  app.introView = new app.views.Intro();

  app.context = allen.getAudioContext();
  app.input = new app.models.Input();

  $( '#content' )
    .append( app.introView.render().$el );
};

$(function () {
  app.init.call( app );
  Backbone.history.start();
});