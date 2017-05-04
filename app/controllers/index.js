import Ember from 'ember';

export default Ember.Controller.extend({
  //isDisabled: true,
  url: '',
  isValid: Ember.computed.match('url', /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/),
  isDisabled: Ember.computed.not('isValid'),

  actualUrl: Ember.computed('url', function() {
    alert('acutalUrl is called: ', this.get('url'));
  }),
  urlChanged: Ember.observer('url', function(){
    console.log('observer is called', this.get('url'))
  }),

  actions: {
    createShortLink(){
      const url = this.get('url');
      console.log('we will be back shortly with your shorter version of ', url);
      this.set('url', '');
    }
  }
});
