import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  setupController(controller, model) {
    $.getJSON(config.ApiUrl + '/tops', data => {
      controller.set('topUrls', data.urls);
    });
  }
})
