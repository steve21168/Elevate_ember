import JSONAPIAdapter from 'ember-data/adapters/json-api'
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin'
import config from '../config/environment';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
 namespace: "api/v1",
 host: `${config.host}`,
 authorizer: 'authorizer:custom'
});
