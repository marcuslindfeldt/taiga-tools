import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params, transition) {
    const selected = transition.queryParams.userstories;
    const project = transition.queryParams.project;

    return this.store.query('userstories', { project: project }).then((userstories) => {
      return userstories.filter((item) => {
        return selected.indexOf(item.id) !== -1;
      });
    });
  }
});
