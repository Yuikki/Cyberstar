Page({
  /**
   * 页面的初始数据
   */
    mixins: [require('../../mixin/themeChanged')],

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
        title: '某校内比赛',
        summary: '校团委学生会XX部',

        title1: '活动简介',
        summary1: ' xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        title2: '参赛对象',
        summary2: '全校学生都可申报作品参赛。',
        title3: '活动要求',
        summary3: 'xxxxxxxxx',
        title4: '活动步骤',
        summary4: '（一）收集作品（2020年4月前）\n（二）线上评选（2020年4.1-4.7）\n（三）公布结果（2020.4.10）',
        title5: '联系方式',
        summary5: '联 系 人：XXX  \n联系电话：XXXXXX \n电子邮箱：XXXX.com',





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
