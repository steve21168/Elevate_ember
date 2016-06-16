import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', function() {
    this.route('user', { path: ':user_id'}, function() {
      this.route('goals', { path: 'goals'}, function() {
        this.route('goal', { path: ':goal_id'})
      })
    })
  });
});

export default Router;
