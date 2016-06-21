import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('goal', params.goal_id )
  },
  actions: {
    delete(model) {
      model.destroyRecord().then(function() {
        this.transitionTo('goals');
      }.bind(this));
    },
    completeGoal(model) {
      model.toggleProperty("active")
      model.save()
      this.transitionTo('goals')
    }
  }
});
