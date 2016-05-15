import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  color: attr('string'),
  isArchived: attr('boolean'),
  isClosed: attr('boolean'),
  name: attr('string'),
  order: attr('number'),
});
