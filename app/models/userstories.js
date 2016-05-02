import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr('string'),
  description: DS.attr('string'),
  total_points: DS.attr('number'),
});
