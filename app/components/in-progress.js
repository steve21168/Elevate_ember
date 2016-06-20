import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    completed(item){
      this.get('switchComplete')(item)
    },
    deleteItems(item) {
      this.get('removeItem')(item)
    }
  }
});
