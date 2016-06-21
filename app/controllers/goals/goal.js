import Ember from 'ember';

export default Ember.Controller.extend({
  listItems: [],
  // startDate: Ember.computed("startDate", {
  //   get(key){
  //   },
  //   set(key, value){
  //     let formattedDate = (new Date(value)).toISOString()
  //     this.get('model').set('startDate', formattedDate)
  //   }
  // }),
  // startDate: function() {
  //   return Date.now()
  // },
  endDate: Date.now(),
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
      if (item.get('completed')) {
        var remove = confirm(`Are you sure you want to delete this item?`)
      } else {
        var remove = confirm(`Pain is temporary. Quitting lasts forever.  Are you sure you want remove this item before it's complete?`)
      }

      if (remove) {
        item.destroyRecord()
      }
    }

  }
});
