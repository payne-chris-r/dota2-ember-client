import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('application/index', {path: '/'});
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('user', { path: '/users/:id' });
  this.route('profile', { path: '/profiles/:id'});
  this.route('profiles');
  this.route('profile/edit', { path: 'profiles/:id/edit'});
  this.route('games');
  this.route('game', { path: '/games/:id' });
  // is this what we call it
  this.route('join-team/id', { path: 'join-team/:id' });
  //                         and this is what ember interprets as ?

});

export default Router;
