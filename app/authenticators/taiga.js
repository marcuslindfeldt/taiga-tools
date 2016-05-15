import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import ENV from 'taiga-tools/config/environment';

export default Base.extend({

  restore(data) {
    return Ember.RSVP.Promise.resolve(data);
  },

  authenticate(username, password) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        type: "POST",
        url: `${ENV.APP.apiUrl}/api/v1/auth`,
        data: {
          type: 'normal',
          username,
          password,
        },
        dataType: 'json'
      }).then(
        (data) => {
          resolve(data);
        },
        (jqXHR) => {
          reject(new Error(jqXHR.responseJSON._error_message));
        }
      );
    });
  },

  invalidate() {
    return Ember.RSVP.Promise.resolve();
  }
});
