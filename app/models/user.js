import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  email: attr('string'),
  avatar: attr('string'),
  password: attr('string'),
  goals: hasMany('goal')
});
