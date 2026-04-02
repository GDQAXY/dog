Page({
  data: {
    currentFilter: 0,
    items: [
      {
        id: 1,
        icon: '🌳',
        name: '九成新猫爬架',
        price: '¥120',
        location: '朝阳区',
        type: '自提',
        tags: ['用品转让', '9成新', '可小刀'],
        bg: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)'
      },
      {
        id: 2,
        icon: '🥩',
        name: '进口狗粮（买多了）',
        price: '¥180',
        location: '海淀区',
        type: '可快递',
        tags: ['食品转让', '未拆封', '保质期剩6月'],
        bg: 'linear-gradient(135deg, #fff3e0, #ffe0b2)'
      },
      {
        id: 3,
        icon: '🔍',
        name: '【求购】大型犬笼',
        price: '预算¥200',
        location: '丰台区',
        type: '求购',
        tags: ['求购', '8成新以上'],
        bg: 'linear-gradient(135deg, #fce4ec, #f8bbd9)'
      },
      {
        id: 4,
        icon: '🛒',
        name: '宠物推车（用过2次）',
        price: '¥150',
        location: '西城区',
        type: '自提/跑腿',
        tags: ['用品转让', '95新'],
        bg: 'linear-gradient(135deg, #e3f2fd, #bbdefb)'
      }
    ]
  },

  // 发布闲置
  publishItem() {
    wx.showToast({ title: '发布闲置', icon: 'none' })
  },

  // 切换筛选
  switchFilter(e) {
    const index = e.currentTarget.dataset.index
    this.setData({ currentFilter: index })
  },

  // 点击闲置
  onItemTap(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: item.name, icon: 'none' })
  }
})
