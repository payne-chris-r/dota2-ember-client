import DS from 'ember-data';
// import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  email: DS.attr('string'),
  profile: DS.belongsTo('profile')
});
