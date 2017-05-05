import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  url: '',
  shortUrl: '',
  responseMessage: '',
  isValid: Ember.computed.match('url', /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/),
  isDisabled: Ember.computed.not('isValid'),
  topUrls: [],

  actions: {
    getTopUrls(){
      const apiUrl = config.ApiUrl + "/tops";
      Ember.$.ajax({
        url: apiUrl,
        method: "GET"
      }).then(response => {
        this.set('topUrls', response.urls);
      });
    },
    createShortLink(){
      const url = this.get('url');
      const apiUrl = config.ApiUrl + "/urls";

      Ember.$.ajax({
        url: apiUrl,
        method: "POST",
        data: {url: {full_link: url}}
      }).then(response => {
        this.send('getTopUrls');
        this.set('shortUrl', response.url.short_link);
        this.set('url', '');
        this.set('responseMessage', `Thanks! Here is your link: ${this.get('shortUrl')}`);
      });
    }
  }
});
