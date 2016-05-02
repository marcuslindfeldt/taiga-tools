import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('signin');
  this.route('projects', function() {
    this.route('project', { path: ':project_id' });
  });
  this.route('print');
});

export default Router;