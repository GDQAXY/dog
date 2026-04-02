Page({
  data: {
    currentTab: 0,
    tabs: ['推荐', '关注', '热门', '金毛', '猫咪', '训练', '美食'],
    posts: [
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
        comments: 23
      },
      {
        id: 2,
        avatar: '👨',
        avatarBg: 'linear-gradient(135deg, #f093fb, #f5576c)',
        username: '铲屎官小王',
        time: '5小时前',
        location: '上海市',
        content: '分享一个训练狗狗定点大小便的小技巧，只用了3天就教会了！有需要的可以私信我~ 🐕✨ #宠物训练 #新手养狗',
        images: [],
        likes: 256,
        comments: 45
      },
      {
        id: 3,
        avatar: '👩‍⚕️',
        avatarBg: 'linear-gradient(135deg, #4facfe, #00f2fe)',
        username: '张医生',
        time: '昨天',
        location: '认证医生',
        content: '【养宠知识】夏天到了，给狗狗驱虫很重要！建议每月一次体外驱虫，每三个月一次体内驱虫。有疑问可以咨询我~ 🐛💊 #宠物医疗 #驱虫',
        images: ['📋'],
        likes: 512,
        comments: 89
      },
      {
        id: 4,
        avatar: '🐱',
        avatarBg: 'linear-gradient(135deg, #11998e, #38ef7d)',
        username: '猫奴小张',
        time: '3小时前',
        location: '广州市',
        content: '家里的主子今天又胖了，需要减肥了！有没有什么好的猫粮推荐？🐱🍖 #猫咪 #猫粮推荐',
        images: ['🖼️', '🖼️'],
        likes: 89,
        comments: 34
      }
    ]
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },

  // 切换Tab
  switchTab(e) {
    const index = e.currentTarget.dataset.index
    this.setData({ currentTab: index })
  },

  // 关注用户
  followUser(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: `关注${item.username}`, icon: 'none' })
  },

  // 点赞
  likePost(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: '点赞成功', icon: 'none' })
  },

  // 评论
  commentPost(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: '打开评论', icon: 'none' })
  },

  // 收藏
  collectPost(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: '收藏成功', icon: 'none' })
  },

  // 分享
  sharePost(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: '分享帖子', icon: 'none' })
  },

  // 发布
  showPublish() {
    wx.showToast({ title: '发布动态', icon: 'none' })
  }
})
