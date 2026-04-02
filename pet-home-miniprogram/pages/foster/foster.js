Page({
  data: {
    showMap: false,
    currentFilter: 0,
    hostList: [
      {
        id: 1,
        avatar: '👩',
        avatarBg: 'linear-gradient(135deg, #667eea, #764ba2)',
        name: '李阿姨的家',
        rating: '4.9',
        distance: '1.2km',
        address: '朝阳区xx小区',
        desc: '90㎡两居室 · 有院子',
        tags: ['🐶 中小型犬', '🐱 猫咪', '已接128单'],
        price: 45
      },
      {
        id: 2,
        avatar: '👨‍⚕️',
        avatarBg: 'linear-gradient(135deg, #11998e, #38ef7d)',
        name: '张医生宠物之家',
        rating: '5.0',
        distance: '2.1km',
        address: '宠物医院旁',
        desc: '兽医背景 · 专业护理',
        tags: ['🐶 全犬种', '🐱 猫咪', '🐰 异宠'],
        price: 80
      },
      {
        id: 3,
        avatar: '👩‍🦰',
        avatarBg: 'linear-gradient(135deg, #f093fb, #f5576c)',
        name: '爱宠小姐姐',
        rating: '4.7',
        distance: '3.5km',
        address: '海淀区xx公寓',
        desc: '60㎡一居室 · 全屋地毯',
        tags: ['🐱 猫咪专用', '🐶 小型犬'],
        price: 35
      },
      {
        id: 4,
        avatar: '👴',
        avatarBg: 'linear-gradient(135deg, #4facfe, #00f2fe)',
        name: '王叔叔的院子',
        rating: '4.8',
        distance: '4.2km',
        address: '昌平区独栋别墅',
        desc: '200㎡院子 · 每天遛狗3次',
        tags: ['🐶 大型犬', '🐶 中型犬', '可寄养多只'],
        price: 60
      }
    ]
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },

  // 切换地图
  toggleMap() {
    this.setData({
      showMap: !this.data.showMap
    })
  },

  // 切换筛选
  switchFilter(e) {
    const index = e.currentTarget.dataset.index
    this.setData({ currentFilter: index })
  },

  // 点击寄养家庭
  onHostTap(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: item.name, icon: 'none' })
  },

  // 成为养家
  becomeHost() {
    wx.showToast({ title: '申请成为养家', icon: 'none' })
  }
})
