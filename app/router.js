import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('users', function() {
    this.route('user', { path: ':user_id'}),
    this.route('new', {path: '/registration'})
  });

  this.route('goals', function() {
    this.route('goal', {path: ':goal_id'}),
    this.route('new')
  })

  this.route('login')
});

export default Router;
