import Ember from 'ember';
import ENV from 'taiga-tools/config/environment';

export default Ember.Controller.extend({
  queryParams: ['userstories', 'project'],

  userstories: [],

  project: null,

  stories: Ember.computed('model.userstories.@each', function(){
    const router = this.get('target');
    return this.get('model.userstories').map(function(story){
      return {
        'model': story,
        'link': ENV.APP.appUrl + router.generate('story', story),
      };
    });
  })
});
