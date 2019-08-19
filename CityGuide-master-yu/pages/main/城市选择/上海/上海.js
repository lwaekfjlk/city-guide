Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'xihu',
        name: '请选择查询信息种类',
        open: false,
        pages: ['上海景点', '上海交通', '上海住宿', '上海美食']
      }
    ]
  },

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
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