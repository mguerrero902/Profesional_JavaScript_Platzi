class MediaPlayer {
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
  }

  _initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }

  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  mute() {
    this.media.muted = true;
  }

  unmute() {
    this.media.muted = false;
  }

  toggleMute() {
    if (this.media.muted === true) {
      this.unmute();
    } else {
      this.mute();
    }
  }
}

// function MediaPlayer(config) {
//       this.media = config.el;
//   }
//   MediaPlayer.prototype.play() {
//     this.media.play();
//   }

//   MediaPlayer.prototype.pause() {
//     this.media.pause();
//   }

//   MediaPlayer.prototype.togglePlay() {
//     if (this.media.paused) {
//       this.play();
//     } else {
//       this.pause();
//     }
//   }

export default MediaPlayer;
