import DS from 'ember-data';
import MF from 'model-fragments';

export default MF.Fragment.extend({
  test: MF.fragment('valalert'),
  maintainability: MF.fragment('valalert'),
  security: MF.fragment('valalert'),
  workmanship: MF.fragment('valalert')
});
