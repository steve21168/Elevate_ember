import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  startDate: attr(),
  endDate: attr(),
  active: attr('boolean'),
  user: belongsTo('user'),
  listItems: hasMany('list-item')
});
