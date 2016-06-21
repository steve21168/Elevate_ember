import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('goal')
  },
  actions: {
    delete(goal)  {
      goal.destroyRecord()
    },
    completeGoal(goal) {
      goal.toggleProperty("active")
      goal.save()
    },
    newGoal() {
      this.transitionTo('goals.new')
    }
  }
});
