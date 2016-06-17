import Ember from 'ember';

export default Ember.Controller.extend({
  startDateRaw: Ember.computed("startDateRaw", {
    get(key){
      return this.get('startDate')
    },
    set(key, value){
      let formattedDate = (new Date(value)).toISOString()
      this.get('model').set('startDate', formattedDate)
    }
  }),
  endDateRaw: Ember.computed("endDateRaw", {
    get(key){
      return this.get('endDate')
    },
    set(key, value){
      let formattedDate = (new Date(value)).toISOString()
      this.get('model').set('endDate', formattedDate)
    }
  })
});
