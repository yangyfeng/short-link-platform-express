const express = require('express')
const router = express.Router()
const UrlModel = require('./../models/Url') 
// get /:code
// 重定向到长链接
router.get('/:code', async (req,res) => {
  // 获取url对象
  const url = await UrlModel.findOne({
    urlCode: req.params.code
  })

  // 检测url是否存在
  if (url) {
    res.redirect(url.longUrl)
  } else {
    res.status(400).json('Server Error')
  }
})
module.exports = router 