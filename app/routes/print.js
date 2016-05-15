import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model(params) {
    const selected = params.userstories || [];
    const project = params.project;

    const userstories = Ember.RSVP.all(selected.map((id) => {
      return this.store.find('userstories', id);
    }));
    const userstatuses = this.store.query('userstoryStatuses', { project });

    return Ember.RSVP.hash({ userstories, userstatuses });

  }
});
