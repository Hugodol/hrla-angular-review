angular.module('meme-generator')

.controller('AppCtrl', function() {
  this.myMemes = [];
})
.component('app', {
  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html',
});
