// express
const express = require('express')
const app = express()
// body-parser
const bodyParser = require('body-parser')
// 引入config
const config = require('config')
// 引入 mongodb 方法
const connectDB = require('./config/db')
// 链接mongdb数据库
connectDB()
// 解析json, req.body获取
app.use(express.json())

// 配置路由
app.get('/',function(req,res) {
  res.send("hello world")
})
// 监听服务
const PORT = config.get('port')
app.listen(PORT, () => {
  console.log(`Server runing at http://www.yangyufeng.com:${PORT}`)
})