import Ember from 'ember';

export default Ember.Controller.extend({
  //isDisabled: true,
  url: '',
  isValid: Ember.computed.match('url', /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/),
  isDisabled: Ember.computed.not('isValid'),
  topUrls: [],

  actions: {
    activate(){
      console.log('inside activate')
      const apiUrl = "http://localhost:300/api/v1/tops";
      Ember.$.ajax({
        url: apiUrl,
        method: "GET"
      }).then(response => {
        debugger;
        this.set('topUrls', response)
      });
    },
    createShortLink(){
      const url = this.get('url');
      console.log('we will be back shortly with your shorter version of ', url);
      this.set('url', '');
    }
  }
});
