import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    $.getJSON('http://localhost:3000/api/v1/tops', data =>{
      controller.set('topUrls', data.urls);
    })
  }
})
