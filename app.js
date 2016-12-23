App({
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log("log","log")
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false
  }
})
