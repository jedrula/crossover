import DS from 'ember-data';
import MF from 'model-fragments';

export default MF.Fragment.extend({
  val: DS.attr('number'),
  alert: DS.attr('boolean')
});