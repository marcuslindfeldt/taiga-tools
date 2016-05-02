import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      const { identification, password } = this.getProperties('identification', 'password');

      this.get('session').authenticate('authenticator:taiga', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
