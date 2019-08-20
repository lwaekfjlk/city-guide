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
        id: '东方明珠',
        name: '东方明珠',
        open: false,
        pages: ['简介','情况','地图','评论']
      }, {
        id: '南京路',
        name: '南京路',
        open: false,
        pages: ['简介', '情况', '地图', '评论']
      },
      {
        id: '上海城隍庙',
        name: '上海城隍庙',
        open: false,
        pages: ['简介', '情况', '地图', '评论']
      },
      {
        id: '上海迪士尼',
        name: '上海迪士尼',
        open: false,
        pages: ['简介', '情况', '地图', '评论']
      },
      {
        id: '外滩',
        name: '外滩',
        open: false,
        pages: ['简介', '情况', '地图', '评论']
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
