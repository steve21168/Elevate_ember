import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete: (goal) => {
      goal.destroyRecord()
    }
  }
});
