angular.module('meme-generator')

.controller('GeneratorCtrl', function() {

  this.allMemes = [];
  this.randomMeme = '';

  this.getAllMemes = () => {
    axios.get('https://api.imgflip.com/get_memes')
      .then(({ data }) =>
        this.allMemes = data.data.memes.map(meme => meme.url)
      )
      .catch(err => console.log(err));
  };

  this.getRandomMeme = () => {
    const randomIndex = Math.floor(Math.random() * this.allMemes.length);
    this.randomMeme = this.allMemes[randomIndex];
  };

  this.saveMeme = () => {
    this.mymemes.push({
      url: this.randomMeme,
      text: this.input,
    });
    this.randomMeme = '';
    this.input = '';
  };

  this.getAllMemes();
})
.component('generator', {
  bindings: {
    mymemes: '<',
  },
  controller: 'GeneratorCtrl',
  templateUrl: 'src/templates/generator.html'
});
