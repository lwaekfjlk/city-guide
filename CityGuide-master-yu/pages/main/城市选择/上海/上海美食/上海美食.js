Page({
  onShow() {
    wx.reportAnalytics('enter_home_programmatically', {})
  },


  onShareAppMessage() {
    return {
      title: '山一程水一程',
      path: 'page/component/index'
    }
  },


  data: {
    list: [
      {
        id: '生煎',
        name: '生煎',
        open: false,
        pages: ['历史','推荐饭店']
      }, {
        id: '小笼包',
        name:'小笼包',
        open: false,
      pages: ['历史', '推荐饭店']
      },
      {
        id: '咸浆',
        name: '咸浆',
        open: false,
        pages: ['历史', '推荐饭店']
      },
      {
        id: '酱鸭',
        name: '酱鸭',
        open: false,
        pages: ['历史', '推荐饭店']
      },
      {
        id: '鲜肉月饼',
        name: '鲜肉月饼',
        open: false,
        pages: ['历史', '推荐饭店']
      },
    
    ]
  },


  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i <      len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  }
})
