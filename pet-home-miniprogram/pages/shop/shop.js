Page({
  data: {
    currentFilter: 0,
    cartCount: 3,
    products: [
      {
        id: 1,
        icon: '🥩',
        tag: '热销',
        name: '进口天然狗粮 5kg',
        desc: '富含优质蛋白 · 适合全犬种',
        currentPrice: 299,
        originalPrice: 399,
        sold: '1.2万+'
      },
      {
        id: 2,
        icon: '🥫',
        tag: '新品',
        name: '进口猫罐头 85g*12',
        desc: '鲜美鱼肉配方 · 补水营养',
        currentPrice: 89,
        originalPrice: 129,
        sold: '8千+'
      },
      {
        id: 3,
        icon: '🦴',
        tag: '',
        name: '耐咬磨牙棒 大号',
        desc: '天然牛皮 · 清洁牙齿',
        currentPrice: 29,
        originalPrice: 49,
        sold: '2万+'
      },
      {
        id: 4,
        icon: '🧹',
        tag: '-30%',
        name: '豆腐猫砂 6L*4袋',
        desc: '快速结团 · 无尘除臭',
        currentPrice: 69,
        originalPrice: 99,
        sold: '3万+'
      },
      {
        id: 5,
        icon: '🏠',
        tag: '',
        name: '宠物航空箱 大号',
        desc: '符合航空标准 · 通风透气',
        currentPrice: 168,
        originalPrice: 238,
        sold: '5千+'
      },
      {
        id: 6,
        icon: '💊',
        tag: '推荐',
        name: '宠物益生菌 30包',
        desc: '调理肠胃 · 增强免疫力',
        currentPrice: 59,
        originalPrice: 89,
        sold: '9千+'
      }
    ]
  },

  // 购物车
  goToCart() {
    wx.showToast({ title: '购物车', icon: 'none' })
  },

  // 切换筛选
  switchFilter(e) {
    const index = e.currentTarget.dataset.index
    this.setData({ currentFilter: index })
  },

  // 点击商品
  onProductTap(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: item.name, icon: 'none' })
  }
})
