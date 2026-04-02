const app = getApp()

Page({
  data: {
    userInfo: {
      avatar: '👤',
      name: '宠物主人',
      level: 'Lv.5',
      location: '北京 · 朝阳区',
      pets: '🐶 1只宠物',
      id: '88456621',
      stats: {
        collect: 12,
        follow: 86,
        fans: '1.2k',
        likes: 256
      }
    },
    pets: [
      {
        id: 1,
        avatar: '🐶',
        name: '豆豆',
        type: '金毛',
        age: '3岁',
        health: '健康'
      }
    ],
    wallet: {
      balance: '1,280',
      coupon: 12,
      points: '3,580',
      cashback: 88
    },
    messages: [
      { id: 1, icon: '📢', name: '系统通知', count: 2 },
      { id: 2, icon: '📦', name: '订单动态', count: 1 },
      { id: 3, icon: '💬', name: '互动消息', count: 0 },
      { id: 4, icon: '🎧', name: '客服对话', count: 0 },
      { id: 5, icon: '⏰', name: '服务提醒', count: 3 }
    ],
    orders: [
      { id: 1, icon: '💳', name: '待付款', count: 2 },
      { id: 2, icon: '⏳', name: '待服务', count: 1 },
      { id: 3, icon: '🔄', name: '进行中', count: 0 },
      { id: 4, icon: '⭐', name: '待评价', count: 3 },
      { id: 5, icon: '🛡️', name: '退款/售后', count: 0 }
    ],
    services: [
      { id: 1, icon: '📝', name: '我的发布' },
      { id: 2, icon: '❤️', name: '我的收藏' },
      { id: 3, icon: '👁️', name: '浏览记录' },
      { id: 4, icon: '💬', name: '我的评价' },
      { id: 5, icon: '👑', name: '会员中心' },
      { id: 6, icon: '🎁', name: '邀请有礼' },
      { id: 7, icon: '🏠', name: '成为养家' },
      { id: 8, icon: '📍', name: '地址管理' }
    ],
    menuList: [
      { id: 1, icon: '❓', name: '帮助中心', bg: '#e3f2fd', color: '#1976d2' },
      { id: 2, icon: '💬', name: '联系客服', bg: '#e8f5e9', color: '#4caf50', tag: '在线' },
      { id: 3, icon: '✏️', name: '意见反馈', bg: '#fff3e0', color: '#ff9800' },
      { id: 4, icon: 'ℹ️', name: '关于我们', bg: '#f3e5f5', color: '#9c27b0' }
    ]
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }
  },

  // 设置
  goToSetting() {
    wx.showToast({ title: '设置', icon: 'none' })
  },

  // 查看统计
  viewStats(e) {
    const type = e.currentTarget.dataset.type
    wx.showToast({ title: type, icon: 'none' })
  },

  // 管理宠物
  managePets() {
    wx.showToast({ title: '管理宠物', icon: 'none' })
  },

  // 查看宠物
  viewPet(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: item.name, icon: 'none' })
  },

  // 添加宠物
  addPet() {
    wx.showToast({ title: '添加宠物', icon: 'none' })
  },

  // 钱包
  goToWallet() {
    wx.showToast({ title: '我的钱包', icon: 'none' })
  },

  // 消息中心
  goToMessage() {
    wx.showToast({ title: '消息中心', icon: 'none' })
  },

  // 查看消息
  viewMessage(e) {
    e.stopPropagation()
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: item.name, icon: 'none' })
  },

  // 全部订单
  viewAllOrders() {
    wx.showToast({ title: '全部订单', icon: 'none' })
  },

  // 查看订单
  viewOrder(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: item.name, icon: 'none' })
  },

  // 服务点击
  onServiceTap(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: item.name, icon: 'none' })
  },

  // 菜单点击
  onMenuTap(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: item.name, icon: 'none' })
  },

  // 退出登录
  logout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({ title: '已退出登录', icon: 'success' })
        }
      }
    })
  }
})
