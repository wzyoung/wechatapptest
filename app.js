App({
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('app hide')
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false
  }
})
