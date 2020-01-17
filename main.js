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

// app.use(express.json())
// 解析json, req.body获取
app.use(bodyParser.json())


// 配置路由
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))
// 监听服务
const PORT = config.get('port')
const BaseURL = config.get('baseUrl')
app.listen(PORT, () => {
  console.log(`Server runing at ${BaseURL}:${PORT}`)
})