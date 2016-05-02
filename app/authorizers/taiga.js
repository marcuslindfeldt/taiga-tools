import Ember from 'ember';
import BaseAuthorizer from 'ember-simple-auth/authorizers/base';

export default BaseAuthorizer.extend({

  authorize: function(sessionData, block) {
    const userToken = sessionData['auth_token'];

    if (!Ember.isEmpty(userToken)) {
      block('Authorization', `Bearer ${userToken}`);
    }}
});
