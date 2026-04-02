Page({
  data: {
    currentFilter: 0,
    hotels: [
      {
        id: 1,
        icon: '🏨',
        name: '五星级宠物度假酒店',
        rating: '5.0',
        location: '距您3.2km · 独立别墅 · 恒温泳池',
        desc: '高端服务 · 专业护理 · 宠物SPA',
        tags: ['24小时看护', 'SPA服务', '监控直播'],
        price: 288,
        bg: 'linear-gradient(135deg, #ffd700, #ffaa00)'
      },
      {
        id: 2,
        icon: '🏠',
        name: '汪星人精品旅馆',
        rating: '4.8',
        location: '距您1.5km · 主题房间 · 社交活动',
        desc: '温馨环境 · 每日遛狗 · 美容护理',
        tags: ['每日遛狗', '美容护理'],
        price: 128,
        bg: 'linear-gradient(135deg, #667eea, #764ba2)'
      },
      {
        id: 3,
        icon: '🐱',
        name: '喵星人专属酒店',
        rating: '4.9',
        location: '距您2.8km · 猫咪专用 · 无狗环境',
        desc: '专为猫咪设计 · 安静舒适',
        tags: ['猫爬架', '每日梳毛', '安静环境'],
        price: 168,
        bg: 'linear-gradient(135deg, #f093fb, #f5576c)'
      }
    ]
  },

  // 查看地图
  viewMap() {
    wx.showToast({ title: '查看地图', icon: 'none' })
  },

  // 切换筛选
  switchFilter(e) {
    const index = e.currentTarget.dataset.index
    this.setData({ currentFilter: index })
  },

  // 点击酒店
  onHotelTap(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: item.name, icon: 'none' })
  }
})
