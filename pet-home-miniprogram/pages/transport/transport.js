Page({
  data: {
    currentFilter: 0,
    routes: [
      {
        id: 1,
        icon: '🚗',
        name: '北京 → 上海',
        rating: '5.0',
        desc: '专车直达 · 全程空调 · 实时定位',
        tags: ['24小时达', '保险赠送', '已运1.2万单'],
        price: 680,
        bg: 'linear-gradient(135deg, #667eea, #764ba2)'
      },
      {
        id: 2,
        icon: '✈️',
        name: '北京 → 广州',
        rating: '4.9',
        desc: '航空托运 · 有氧舱 · 专人陪护',
        tags: ['当日达', '上门接送'],
        price: 980,
        bg: 'linear-gradient(135deg, #f093fb, #f5576c)'
      },
      {
        id: 3,
        icon: '🚙',
        name: '北京 → 天津',
        rating: '4.8',
        desc: '顺风车 · 宠物友好司机',
        tags: ['2小时达', '可拼车'],
        price: 150,
        bg: 'linear-gradient(135deg, #4facfe, #00f2fe)'
      },
      {
        id: 4,
        icon: '🚄',
        name: '北京 → 南京',
        rating: '4.9',
        desc: '火车托运 · 空调车厢 · 专人看管',
        tags: ['次日达', '经济实惠'],
        price: 320,
        bg: 'linear-gradient(135deg, #11998e, #38ef7d)'
      }
    ]
  },

  // 路线规划
  planRoute() {
    wx.showToast({ title: '路线规划', icon: 'none' })
  },

  // 切换筛选
  switchFilter(e) {
    const index = e.currentTarget.dataset.index
    this.setData({ currentFilter: index })
  },

  // 点击路线
  onRouteTap(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: item.name, icon: 'none' })
  }
})
