import Ember from 'ember';
import ENV from 'taiga-tools/config/environment';

export default Ember.Component.extend({
  classNames: ['card storycard'],

  qrLink: Ember.computed('story', function () {
    return `${ENV.APP.appUrl}/story/${this.get('story').get('id')}`;
  }),

  actions: {
    updateStatus: function(status) {
      const story = this.get('story');

      story.set('status', status.get('id'));
      story.save();
    }
  }
});
