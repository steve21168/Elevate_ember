import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit() {
      this.toggleProperty('isEditing');
    },
    submit() {
      this.toggleProperty('isEditing');
      this.attrs.saveChanges(this.get('goal'));
    }
  }
});
