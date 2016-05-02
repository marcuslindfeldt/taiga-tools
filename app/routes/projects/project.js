import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return Ember.RSVP.hash({
      project: this.store.findRecord('project', params.project_id),
      userstories: this.store.query('userstories', {project: params.project_id, is_closed: 'false' }),
    });
  }
});
