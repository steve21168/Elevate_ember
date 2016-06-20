import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate: function() {
      var credentials = this.getProperties('email', 'password'),
        authenticator = 'authenticator:jwt';
      var self = this;
      this.get('session').authenticate(authenticator, credentials)
      // .then(() => this.transitionToRoute('goals'))
      .catch((reason)=>{
        this.set('errorMessage', reason.error || reason);
      })
    }
  }
});
