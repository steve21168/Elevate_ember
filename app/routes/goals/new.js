import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      debugger
      this.get('newName')
    }
  }
});
