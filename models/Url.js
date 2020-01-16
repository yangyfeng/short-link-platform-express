const mongoose = require('mongoose')
// 创建数据表结构
const usrlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: {
    type: String,
    default: Date.now()
  }
})
// 创建表模型
const model = mongoose.model('Url', usrlSchema)
module.exports = model