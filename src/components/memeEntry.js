angular.module('meme-generator')

.controller('MemeEntryCtrl', function() {})
.component('memeEntry', {
  bindings: {
    url: '<',
    text: '<',
  },
  controller: 'MemeEntryCtrl',
  templateUrl: 'src/templates/memeEntry.html',
});
