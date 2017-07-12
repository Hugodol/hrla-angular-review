angular.module('meme-generator')

.controller('MyMemesCtrl', function() {})
.component('myMemes', {
  bindings: {
    mymemes: '<',
  },
  controller: 'MyMemesCtrl',
  templateUrl: 'src/templates/myMemes.html',
});
