Page({
  data: {
    quickMenus: [
      { id: 1, name: '健康档案', icon: '📋', color: 'green' },
      { id: 2, name: '疫苗记录', icon: '💉', color: 'blue' },
      { id: 3, name: '驱虫记录', icon: '🐛', color: 'orange' },
      { id: 4, name: '用药提醒', icon: '💊', color: 'purple' }
    ],
    symptoms: ['食欲不振', '呕吐', '腹泻', '精神萎靡', '咳嗽', '抓挠', '流眼泪', '跛行'],
    doctors: [
      {
        id: 1,
        avatar: '👨‍⚕️',
        avatarBg: 'linear-gradient(135deg, #11998e, #38ef7d)',
        name: '张医生',
        hospital: '三甲医院',
        experience: '10年经验',
        specialty: '擅长内科',
        price: 25,
        helped: '3000'
      },
      {
        id: 2,
        avatar: '👩‍⚕️',
        avatarBg: 'linear-gradient(135deg, #667eea, #764ba2)',
        name: '李医生',
        hospital: '宠物医院院长',
        experience: '15年经验',
        specialty: '擅长外科',
        price: 35,
        helped: '5000'
      }
    ],
    hospitals: [
      {
        id: 1,
        avatar: '🏥',
        avatarBg: 'linear-gradient(135deg, #ff6b6b, #ee5a6f)',
        name: '瑞鹏宠物医院（朝阳店）',
        rating: '4.8',
        distance: '1.5km',
        service: '24小时急诊',
        tags: ['医保定点', '微创手术']
      }
    ]
  },

  // 急诊通道
  goToEmergency() {
    wx.showToast({ title: '24小时急诊热线', icon: 'none' })
  },

  // 快捷菜单
  onMenuTap(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: item.name, icon: 'none' })
  },

  // 开始预诊
  startDiagnosis() {
    wx.showToast({ title: '开始AI预诊', icon: 'none' })
  },

  // 症状点击
  onSymptomTap(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: `已选择：${item}`, icon: 'none' })
  },

  // 查看全部医生
  viewAllDoctors() {
    wx.showToast({ title: '查看全部医生', icon: 'none' })
  },

  // 点击医生
  onDoctorTap(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: item.name, icon: 'none' })
  },

  // 咨询医生
  consultDoctor(e) {
    e.stopPropagation()
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: `咨询${item.name}`, icon: 'none' })
  },

  // 查看地图
  viewMap() {
    wx.showToast({ title: '查看附近医院', icon: 'none' })
  },

  // 点击医院
  onHospitalTap(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({ title: item.name, icon: 'none' })
  }
})
