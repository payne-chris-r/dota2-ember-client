import DS from 'ember-data';

export default DS.Model.extend({
  // players: DS.hasMany('player'),
  profiles: DS.hasMany('profile'),
  open: DS.attr('boolean')
});
