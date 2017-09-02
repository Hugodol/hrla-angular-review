angular.module('meme-generator')

.component('memeEntry', {
  bindings: {
    url: '<',
    text: '<',
  },
  templateUrl: 'src/templates/memeEntry.html',
});
