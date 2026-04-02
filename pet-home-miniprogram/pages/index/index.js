const app = getApp()

Page({
  data: {
    location: {
      city: '北京',
      district: '朝阳区'
    },
    hasNotice: true,
    currentTab: 0,
    currentPet: {
      avatar: '🐶',
      name: '豆豆',
      type: '金毛',
      age: '3岁',
      tasks: [
        { name: '待喂药', urgent: true },
        { name: '疫苗齐全', urgent: false }
      ]
    },
    banners: [
      { id: 1, title: '新人专享礼包', desc: '注册即领188元优惠券', bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
      { id: 2, title: '宠物寄养', desc: '认证养家，安全有保障', bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
      { id: 3, title: 'AI智能问诊', desc: '24小时在线，3分钟获得专业建议', bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }
    ],
    gridMenus: [
      { id: 1, name: '寄养', icon: '🏠', color: 'blue', path: '/pages/foster/foster' },
      { id: 2, name: '医疗', icon: '⚕️', color: 'green', path: '/pages/medical/medical' },
      { id: 3, name: '运输', icon: '🚗', color: 'orange', path: '/pages/transport/transport' },
      { id: 4, name: '商城', icon: '🍖', color: 'pink', path: '/pages/shop/shop' },
      { id: 5, name: '酒店', icon: '🏨', color: 'red', path: '/pages/hotel/hotel' },
      { id: 6, name: '闲置', icon: '📦', color: 'cyan', path: '/pages/secondhand/secondhand' },
      { id: 7, name: '领券', icon: '🎫', color: 'yellow', path: '/pages/coupon/coupon' },
      { id: 8, name: '社区', icon: '💬', color: 'blue', path: '/pages/community/community' }
    ],
    transportRoutes: [
      { id: 1, name: '北京 → 上海', desc: '专车直达 · 24小时达 · ¥680起', icon: '🚗', tag: '热门路线', bg: 'linear-gradient(135deg, #667eea, #764ba2)' },
      { id: 2, name: '北京 → 广州', desc: '有氧舱 · 当日达 · ¥980起', icon: '✈️', tag: '航空', bg: 'linear-gradient(135deg, #f093fb, #f5576c)' },
      { id: 3, name: '北京 → 天津', desc: '宠物友好 · 2小时达 · ¥150起', icon: '🚙', tag: '顺风车', bg: 'linear-gradient(135deg, #4facfe, #00f2fe)' }
    ],
    feedTabs: ['推荐', '寄养', '医疗', '商城', '社区'],
    feedServices: [
      {
        id: 1,
        icon: '🏠',
        name: '李阿姨的家庭寄养',
        rating: '4.9',
        location: '朝阳区',
        distance: '1.2km',
        desc: '有院子 · 已接128单 · 中小型犬/猫',
        tags: ['热门', '可接送'],
        price: 45
      },
      {
        id: 2,
        icon: '🏥',
        name: '瑞鹏宠物医院（朝阳店）',
        rating: '4.8',
        location: '朝阳区',
        distance: '1.5km',
        desc: '24小时急诊 · 医保定点 · 全科诊疗',
        tags: ['急诊', '医保'],
        price: 0
      }
    ],
    feedPosts: [
      {
        id: 1,
        avatar: '👩',
        avatarBg: 'linear-gradient(135deg, #667eea, #764ba2)',
        username: '豆豆妈妈',
        time: '2小时前',
        location: '北京市',
        content: '今天带豆豆去公园玩，遇到了一只超级可爱的柯基！两只狗狗玩得好开心~ 🐶💕 #金毛日常 #宠物交友',
        images: ['🖼️', '🖼️', '🖼️'],
        likes: 128,
        comments: 23,
        collects: 45
      },
      {
        id: 2,
        avatar: '👨‍⚕️',
        avatarBg: 'linear-gradient(135deg, #4facfe, #00f2fe)',
        username: '张医生',
        time: '昨天',
        location: '认证医生',
        content: '【养宠知识】夏天到了，给狗狗驱虫很重要！建议每月一次体外驱虫，每三个月一次体内驱虫。有疑问可以咨询我~ 🐛💊 #宠物医疗 #驱虫',
        images: ['📋'],
        likes: 512,
        comments: 89,
        collects: 120
      }
    ],
    feedProducts: [
      {
        id: 1,
        icon: '🥩',
        tag: '秒杀',
        name: '进口冻干狗粮 500g',
        desc: '已有 1.2万+ 人拼单',
        currentPrice: 29,
        originalPrice: 59
      }
    ]
  },

  onLoad() {
    this.setData({
      location: app.globalData.location
    })
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },

  // 选择位置
  chooseLocation() {
    wx.chooseLocation({
      success: (res) => {
        this.setData({
          'location.city': res.name
        })
        app.globalData.location.city = res.name
      }
    })
  },

  // 去搜索
  goToSearch() {
    wx.showToast({ title: '搜索功能', icon: 'none' })
  },

  // 去通知
  goToNotice() {
    wx.showToast({ title: '消息通知', icon: 'none' })
    this.setData({ hasNotice: false })
  },

  // 轮播图点击
  onBannerTap(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: item.title, icon: 'none' })
  },

  // 宫格点击
  onGridTap(e) {
    const item = e.currentTarget.dataset.item
    if (item.path) {
      wx.navigateTo({ url: item.path })
    }
  },

  // 宠物详情
  goToPetDetail() {
    wx.showToast({ title: '查看宠物详情', icon: 'none' })
  },

  // 去运输
  goToTransport() {
    wx.navigateTo({ url: '/pages/transport/transport' })
  },

  // 运输卡片点击
  onTransportTap(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: item.name, icon: 'none' })
  },

  // 切换Feed Tab
  switchFeedTab(e) {
    const index = e.currentTarget.dataset.index
    this.setData({ currentTab: index })
    wx.showToast({ title: `切换至：${this.data.feedTabs[index]}`, icon: 'none' })
  },

  // 服务点击
  onServiceTap(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: item.name, icon: 'none' })
  },

  // 商品点击
  onProductTap(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: item.name, icon: 'none' })
  },

  // 邀请好友
  goToInvite() {
    wx.showToast({ title: '邀请好友活动', icon: 'none' })
  }
})
