import DS from 'ember-data';


const { String: { pluralize, underscore } } = Ember;

export default JSONAPIAdapter.extend({
  pathForType(type) {
    return pluralize(underscore(type));
  }
});


