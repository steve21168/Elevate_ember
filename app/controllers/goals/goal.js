import Ember from 'ember';

export default Ember.Controller.extend({
  listItems: [],
  actions: {
    addListItem(){
      // this.get('listItems').pushObject(this.store.createRecord('list-item'))
      this.get('listItems').pushObject(this.get('model.listItems').createRecord())
    }
  }
});
