import Ember from 'ember';
import moment from 'moment';

export function formatDates(date/*, hash*/) {
  let formatted = moment(date, "YYYY-MM-DD HH:mm:ss:SSS.Z").format("LL")
  return formatted
}

export default Ember.Helper.helper(formatDates);
