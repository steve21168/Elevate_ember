import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('goal', params.goal_id )
  },
  actions: {
    showGoals() {
      this.transitionTo('goals')
    }
  }
});
