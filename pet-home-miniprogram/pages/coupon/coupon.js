Page({
  data: {
    coupons: [
      {
        id: 1,
        value: '¥50',
        name: '满299减50',
        tag: '即将抢完',
        valid: '有效期至2026-04-30 · 全品类可用',
        tags: ['仅剩23张', '每人限领1张'],
        bg: 'linear-gradient(135deg, #ff4757, #ff6b81)',
        btnBg: 'linear-gradient(135deg, #ff4757, #ff6b81)'
      },
      {
        id: 2,
        value: '免邮',
        name: '全场免邮券',
        tag: '',
        valid: '有效期至2026-04-15 · 商城订单可用',
        tags: ['不限金额', '剩余较多'],
        bg: 'linear-gradient(135deg, #11998e, #38ef7d)',
        btnBg: 'linear-gradient(135deg, #667eea, #764ba2)'
      },
      {
        id: 3,
        value: '8折',
        name: '寄养服务8折券',
        tag: '',
        valid: '有效期至2026-05-01 · 首次寄养可用',
        tags: ['新客专享', '最高减100'],
        bg: 'linear-gradient(135deg, #667eea, #764ba2)',
        btnBg: 'linear-gradient(135deg, #667eea, #764ba2)'
      },
      {
        id: 4,
        value: '¥30',
        name: '问诊咨询立减30',
        tag: '',
        valid: '有效期至2026-04-20 · 在线问诊可用',
        tags: ['无门槛'],
        bg: 'linear-gradient(135deg, #f093fb, #f5576c)',
        btnBg: 'linear-gradient(135deg, #667eea, #764ba2)'
      }
    ]
  },

  // 领取新人专享
  claimNewUser() {
    wx.showToast({ title: '新人礼包领取成功', icon: 'success' })
  },

  // 领取优惠券
  claimCoupon(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: `${item.name}领取成功`, icon: 'success' })
  }
})
