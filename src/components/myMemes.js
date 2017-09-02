angular.module('meme-generator')

.component('myMemes', {
  bindings: {
    mymemes: '<',
  },
  templateUrl: 'src/templates/myMemes.html',
});
