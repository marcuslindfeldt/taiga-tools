import Ember from 'ember';

export default Ember.Component.extend({

  // classNames: 'btn-group',

  attributeBindings: ['data-toggle'],

  'data-toggle': 'buttons',

  statusList: Ember.computed('statuses.@each.id,story.status', function () {
    const active = this.get('story').get('status');

    return this.get('statuses').map(function(status){
       return {
         'model': status,
         'isActive': status.get('id') === active.toString(),
       };
     });
  }),

  actions: {
    changeStatus(story, status) {
      story.set('status', status.get('id'));
      story.save();
    }
  }
});
