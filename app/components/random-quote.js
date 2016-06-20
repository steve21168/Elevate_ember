import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    randomize: function() {
      var quotes = [{description: 'hi'}, {description: 'yo'}, {description: 'hola'}]
      return quotes[Math.floor(Math.random() * quotes.length)].description
    }
  }
});
