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
        id: '东坡肉',
        name: '东坡肉',
        open: false,
        pages: ['历史','推荐饭店']
      }, {
        id: '笋干老鸭煲',
        name:'笋干老鸭煲',
        open: false,
      pages: ['历史', '推荐饭店']
      },
      {
        id: '蛋黄青蟹',
        name: '蛋黄青蟹',
        open: false,
        pages: ['历史', '推荐饭店']
      },
      {
        id: '西湖醋鱼',
        name: '西湖醋鱼',
        open: false,
        pages: ['历史', '推荐饭店']
      },
      {
        id: '龙井虾仁',
        name: '龙井虾仁',
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
