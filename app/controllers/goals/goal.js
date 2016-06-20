import Ember from 'ember';

export default Ember.Controller.extend({
  listItems: [],
  actions: {
    addListInput(){
      this.get('listItems').pushObject(this.get('model.listItems').createRecord())
    },
    removeListInput() {
      this.get('listItems').popObject()
    },
    saveItems() {
      let listItems = this.get('listItems')
      for (let i=0; i < listItems.length; i++) {
        listItems[i].save()
      }
      listItems.clear()
    },
    completed(item){
      item.toggleProperty('completed')
      item.save()
    },
    deleteItems(item) {
      let remove = confirm('Are you sure you\'d like to delete this item?')
      if (remove) {
        item.destroyRecord()
      }
    }

  }
});
