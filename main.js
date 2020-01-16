// express
const express = require('express')
const app = express()
// body-parser
const bodyParser = require('body-parser')
// 链接mongdb数据库

// 解析json, req.body获取
app.use(express.json())

// 配置路由
app.get('/',function(req,res) {
  res.send("hello world")
})
// 监听服务
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server runing at http://www.yangyufeng.com:${PORT}`)
})