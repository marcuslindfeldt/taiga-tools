import Ember from 'ember';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from 'taiga-tools/config/environment';

export default DS.RESTAdapter.extend(DataAdapterMixin, {

  namespace: 'api/v1',

  host: ENV.APP.apiUrl,

  authorizer: 'authorizer:taiga',

  headers: {
    'x-disable-pagination': 'True',
  },

  pathForType: function(type) {
    return Ember.String.pluralize(Ember.String.dasherize(type));
  },
});
