import DS from 'ember-data';

export default DS.Model.extend({
  full_link: DS.attr('string'),
  short_link: DS.attr('string'),
  access_count: DS.attr('string')
})
