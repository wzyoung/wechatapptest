Page({
  data: {
    audioAction: {
      method: 'pause'
    }
  },
  audioPlayed: function (e) {
    console.log('audio is played')
  },
  funerror: function (e) {
    console.log(e.detail.errMsg);
  }
})