import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.createRecord('user')
  },
  actions: {
    create() {
      this.currentModel.save().then( () => {
        this.transitionTo("login")
      })
    }

  }
});
