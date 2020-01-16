const mongoose = require('mongoose')
const config = require('config')
const dburl = config.get('mongodbUrl')

// 创建 mongodb 链接方法
const connectDB = async () => {
  try {
    await mongoose.connect(dburl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('mongodb 连接成功')
  } catch (error) {
    console.log('mongodb 连接失败', error.message)
    process.exit(1)
  }
}
module.exports = connectDB