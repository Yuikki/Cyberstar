Page({
  /**
   * 页面的初始数据
   */
  data: {
    
    messages: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const messages = this.data.messages
    {
      messages.push({
        title: '校内比赛',
        image: 'https://i.loli.net/2020/03/06/Fhqs8xQ7mZpLu2z.png',
        summary: '火热报名中。'
      })
      messages.push({
        title: '校内比赛',
        image: 'https://i.loli.net/2020/03/06/Fhqs8xQ7mZpLu2z.png',
        summary: '火热报名中。'
      })
      messages.push({
        title: '校内比赛',
        image: 'https://i.loli.net/2020/03/06/Fhqs8xQ7mZpLu2z.png',
        summary: '火热报名中。'
      })
    }

    this.setData({ messages })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    const query = wx.createSelectorQuery()
    query.select('#bottom').boundingClientRect()
    query.exec(res => wx.pageScrollTo({ scrollTop: res[0].top + 200 }))
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
  
})
