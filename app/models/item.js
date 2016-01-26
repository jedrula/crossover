import DS from 'ember-data';
import MF from 'model-fragments';

export default DS.Model.extend({
  buildNo: DS.attr('number'),
  owner: DS.attr('string'),
  timeStarted: DS.attr('date'),
  state: DS.attr('string'),
  metrics: MF.fragment('metrics'),
  build: DS.attr(),
  unitTest: DS.attr(),
  functionalTest: DS.attr()
});
