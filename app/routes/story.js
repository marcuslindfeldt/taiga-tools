import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.findRecord('userstories', params.story_id).then((story) => {
      return Ember.RSVP.hash({
        story,
        userstoryStatuses: this.store.query('userstoryStatuses', { project: story.get('project').get('id') })
      });
    });
  },
});
