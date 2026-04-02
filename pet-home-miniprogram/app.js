App({
  globalData: {
    userInfo: null,
    location: {
      city: '北京',
      district: '朝阳区'
    },
    pets: [
      {
        id: 1,
        name: '豆豆',
        type: '金毛',
        age: '3岁',
        avatar: '🐶',
        health: '健康',
        tasks: [
          { name: '待喂药', urgent: true },
          { name: '疫苗齐全', urgent: false }
        ]
      }
    ]
  },

  onLaunch() {
    console.log('宠物之家小程序启动')
    this.checkUpdate()
  },

  onShow() {
    console.log('宠物之家小程序显示')
  },

  onHide() {
    console.log('宠物之家小程序隐藏')
  },

  // 检查小程序更新
  checkUpdate() {
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate((res) => {
      if (res.hasUpdate) {
        updateManager.onUpdateReady(() => {
          wx.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启应用？',
            success: (res) => {
              if (res.confirm) {
                updateManager.applyUpdate()
              }
            }
          })
        })
      }
    })
  },

  // 获取用户信息
  getUserInfo() {
    return new Promise((resolve, reject) => {
      wx.getUserProfile({
        desc: '用于完善用户资料',
        success: (res) => {
          this.globalData.userInfo = res.userInfo
          resolve(res.userInfo)
        },
        fail: reject
      })
    })
  },

  // 显示Toast
  showToast(title, icon = 'none') {
    wx.showToast({
      title,
      icon,
      duration: 2000
    })
  },

  // 显示加载
  showLoading(title = '加载中...') {
    wx.showLoading({
      title,
      mask: true
    })
  },

  // 隐藏加载
  hideLoading() {
    wx.hideLoading()
  },

  // 页面跳转
  navigateTo(url) {
    wx.navigateTo({ url })
  },

  // 返回上一页
  navigateBack(delta = 1) {
    wx.navigateBack({ delta })
  },

  // 重定向
  redirectTo(url) {
    wx.redirectTo({ url })
  },

  // 跳转到tabBar页面
  switchTab(url) {
    wx.switchTab({ url })
  }
})
