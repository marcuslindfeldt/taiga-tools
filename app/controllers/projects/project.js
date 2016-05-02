import Ember from 'ember';

export default Ember.Controller.extend({
  selected: function () {
    if (!this.get('model.userstories')) {
      return [];
    }
    return this.get('model.userstories').filterBy('selected').mapBy('id');
  }.property('model.userstories.@each.selected'),

  hasSelected: function () {
    return !!this.get('selected').length;
  }.property('model.userstories.@each.selected'),

  actions: {
    toggleAll() {
      // debugger;
      if (this.get('hasSelected')) {
        this.get('model.userstories').setEach('selected', false);
      } else {
        this.get('model.userstories').setEach('selected', true);
      }
    },

    toggle(story) {
      story.toggleProperty('selected');
    },
  }
});
