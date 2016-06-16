import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // let user = this.store.peekRecord('user', params.user_id);
    // let user = this.store.peekAll('user')
    let user_id = this.modelFor('users.user').id
    let user = this.store.peekRecord('user', user_id)
    let goal = this.store.createRecord('goal', {
      user: user
    })
    return goal
  },
  actions: {
    save: function(goal) {
      goal.save().then(function() {
        this.transitionTo('users.user.goals')
      })
    }
  }
});
