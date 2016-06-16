import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let user_id = this.modelFor('users.user').id
    let user = this.store.peekRecord('user', user_id)
    let goal = this.store.createRecord('goal', {
      user: user,
    })
    return goal
  },
  actions: {
    save: function() {
      let goal = this.modelFor('users.user.goals.new')
      goal.save().then((response) => {
        this.transitionTo('users.user.goals')
      })
    }
  }
});
