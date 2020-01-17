const express = require('express')
const router = express.Router()
const UrlModel = require('./../models/Url')
const validUrl = require('valid-url')
const shortid = require('shortid')
const config = require('config')
// api/url/shorten
// 创建短链接
router.post('/shorten', async (req, res) => {
  // 获取长链接
  const {
    longUrl
  } = req.body

  // 验证长链接
  if (!validUrl.isUri(longUrl)) {
    return res.status(401).json('无效的url')
  }

  // 生成url code
  const urlCode = shortid.generate()

  // 生成短链接
  const shortUrl = `${config.get('baseUrl')}:${config.get('port')}/${urlCode}`
  try {
    // 存入数据库
    // 检测长链接 longUrl 是否存在数据库
    
    let url = await UrlModel.findOne({
      longUrl
    })
    if (url) {
      return res.json(url)
    }
    url = new UrlModel({
      longUrl,
      shortUrl,
      urlCode
    })
    url.save()

    // 响应url对象
    res.json(url)
  } catch (error) {
    res.status(500).json('Server Error')
  }

})
module.exports = router