export default Ember.Controller.extend({
  isCompleted: false,
  actions: {
    showFinishedGoals() {
      this.toggleProperty('isCompleted')
    }
  }
});
