angular.module('meme-generator', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('generator', {
      url: '/',
      template: '<generator mymemes="$ctrl.myMemes"></generator>',
    })
    .state('myMemes', {
      url: '/mymemes',
      template: '<my-memes mymemes="$ctrl.myMemes"></my-memes>',
    })
});
