// 云函数入口文件
const cloud = require('wx-server-sdk')
const fs = require('fs')
const path = require('path')
cloud.init({
  env: 'kindear-fd77cd'
})

exports.main = async (event, context) => {

  try {
    return await cloud.uploadFile({
      cloudPath: event.path,
      fileContent: new Buffer(event.file, 'base64')
    })
  } catch (e) {
    return e;
  }
}