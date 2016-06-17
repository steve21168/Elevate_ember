import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let user = this.modelFor('users.user')
    // let user = this.store.peekRecord('user', user_id)
    let goal = this.store.createRecord('goal', {
      user: user,
    })
    return goal
  },
  actions: {
    save: function() {
      let goal = this.modelFor(this.routeName)
      goal.save().then(() => {
        this.transitionTo('goals.goal', goal)
      })
    }
  }
});
