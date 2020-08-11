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
  onLoad:function (options) {
    const messages = this.data.messages
     {
      messages.push({
        title: '全国大学生广告艺术大赛',
        image: 'https://i.loli.net/2020/06/01/cS2RgW3OQas8qe4.png',
  
      })
      messages.push({
        title: '全国大学生电子商务“创新、创意及创业”挑战赛',
        image: 'https://i.loli.net/2020/06/01/gK3fLhDarHCQjMb.png',

      })
      messages.push({
        title: '2020年第十届MathorCup高校数学建模挑战赛',
        image: 'https://i.loli.net/2020/06/01/dtc6BDPqar45mIp.png',

      })
      messages.push({
        title: '全国金融与证券投资模拟实训大赛',
        image: 'https://i.loli.net/2020/06/01/dlDrEPwUK2OWzkC.png',

      })
      messages.push({
        title: '第十九届全国大学生机器人大赛',
        image: 'https://i.loli.net/2020/06/02/VWUKC6LiNrZAntB.png',

      })
      messages.push({
        title: '国际大学生程序设计竞赛',
        image: 'https://i.loli.net/2020/06/02/agtfcGb73TUBEOn.png',

      })
      messages.push({
        title: '第五届中国“互联网＋”大学生创新创业大赛',
        image: 'https://i.loli.net/2020/06/02/E4lNKqZzGbpDRJQ.png',

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
