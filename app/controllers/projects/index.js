import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    gotoProject(project) {
      this.transitionToRoute('projects.project', project.id);
    }
  }
});
