import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    $.getJSON('https://url-shortenerapi.herokuapp.com/api/v1/tops', data =>{
      controller.set('topUrls', data.urls);
    })
  }
})
