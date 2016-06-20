import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(item) {
      this.get('model').save()
    }
  }
});
