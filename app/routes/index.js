import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    $.getJSON('http://localhost:3000/api/v1/tops', data =>{
      console.log('setting isChecked to: ', data.urls);
      controller.set('topUrls', data.urls);
    })
  }
})
