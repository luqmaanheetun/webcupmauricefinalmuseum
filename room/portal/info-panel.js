/* global AFRAME */
AFRAME.registerComponent('info-panel', {
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button');
    var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');

    this.movieImageEl;
    this.movieTitleEl = document.querySelector('#movieTitle');
    this.movieDescriptionEl = document.querySelector('#movieDescription');

    this.movieInfo = {
      karigurashiButton: {
        title: 'The Secret World of Arrietty (2010)',
        imgEl: document.querySelector('#karigurashiMovieImage'),
        description: 'Based on the 1952 novel The Borrowers by Mary Norton, an English author of children\'s books, about a family of tiny people who live secretly in the walls and floors of a typical household, borrowing items from humans to survive.'
      },
      kazetachinuButton: {
        title: 'Bienvenue à Maurice',
        imgEl: document.querySelector('#kazetachinuMovieImage'),
        description: 'Dans 15 secondes, vous embarquerez pour un voyage ou vous decouvrirez des souvenirs de vos ancêtres et ce qui a façonne la vie que nous vivons aujourd\'hui. Bon voyage. Veuillez activer les fenêtres contextuelles.'
      },
      ponyoButton: {
        title: 'Ponyo (2003)',
        imgEl: document.querySelector('#ponyoMovieImage'),
        description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
      }
    };

    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.backgroundEl = document.querySelector('#background');
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener('click', this.onMenuButtonClick);
    }
    this.backgroundEl.addEventListener('click', this.onBackgroundClick);
    this.el.object3D.renderOrder = 9999999;
    this.el.object3D.depthTest = false;
    fadeBackgroundEl.object3D.renderOrder = 9;
    fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
  },

  onMenuButtonClick: function (evt) {
    console.log(evt.currentTarget.id);

    if (evt.currentTarget.id == 'kazetachinuButton') {
      var movieInfo = this.movieInfo[evt.currentTarget.id];

      this.backgroundEl.object3D.scale.set(1, 1, 1);

      this.el.object3D.scale.set(1, 1, 1);
      if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
      this.el.object3D.visible = true;
      this.fadeBackgroundEl.object3D.visible = true;

      if (this.movieImageEl) { this.movieImageEl.object3D.visible = false; }
      this.movieImageEl = movieInfo.imgEl;
      this.movieImageEl.object3D.visible = true;

      this.movieTitleEl.setAttribute('text', 'value', movieInfo.title);
      this.movieDescriptionEl.setAttribute('text', 'value', movieInfo.description);
      setTimeout(() => {
        window.open("https://webcupfinalsmauritiusroom.azurewebsites.net/room/mauritius/", '_blank');
      }, 15000);

    }
  },

  onBackgroundClick: function (evt) {
    console.log('clcked');
    this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.visible = false;
    this.fadeBackgroundEl.object3D.visible = false;
  },
});
