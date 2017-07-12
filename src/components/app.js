angular.module('meme-generator')

.controller('AppCtrl', function() {
  this.myMemes = [];
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html',
});
