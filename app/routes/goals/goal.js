import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('goals', params.goal_id )
  }
});
