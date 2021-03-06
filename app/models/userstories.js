import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  assigned_to: attr('number'),
  backlog_order: attr('number'),
  blocked_note: attr('string'),
  blocked_note_html: attr('string'),
  client_requirement: attr('boolean'),
  comment: attr('string'),
  created_date: attr('string'),
  description: attr('string'),
  description_html: attr('string'),
  finish_date: attr('string'),
  generated_from_issue: attr('number'),
  is_blocked: attr('boolean'),
  is_closed: attr('boolean'),
  kanban_order: attr('number'),
  milestone: attr('number'),
  milestone_name: attr('string'),
  milestone_slug: attr('string'),
  modified_date: attr('string'),
  origin_issue: attr('number'),
  owner: attr('number'),
  points: attr(),
  project: belongsTo('project'),
  ref: attr('number'),
  sprint_order: attr('number'),
  status: attr('number'),
  subject: attr('string'),
  tags: attr(),
  team_requirement: attr('boolean'),
  total_points: attr('number'),
  version: attr('number'),
  watchers: attr(),
  neighbors: attr(),
  status_extra_info: attr(),
  assigned_to_extra_info: attr(),
});
