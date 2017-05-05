import Ember from 'ember';

export default Ember.Controller.extend({
  url: '',
  shortUrl: '',
  responseMessage: '',
  isValid: Ember.computed.match('url', /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/),
  isDisabled: Ember.computed.not('isValid'),
  topUrls: [],

  actions: {
    getTopUrls(){
      const apiUrl = "https://url-shortenerapi.herokuapp.com/api/v1/tops";
      Ember.$.ajax({
        url: apiUrl,
        method: "GET"
      }).then(response => {
        this.set('topUrls', response.urls)
      });
    },
    createShortLink(){
      const url = this.get('url');
      const apiUrl = "https://url-shortenerapi.herokuapp.com/api/v1/urls";

      Ember.$.ajax({
        url: apiUrl,
        method: "POST",
        data: {url: {full_link: url}}
      }).then(response => {
        this.send('getTopUrls')
        const short = response.url.short_link
        this.set('shortUrl', response.url.short_link)
        this.set('url', '')
        this.set('responseMessage', `Thanks! Here is your link: ${this.get('shortUrl')}`)
      });
    }
  }
});
