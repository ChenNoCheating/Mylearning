const express = require('express')
const router = express.Router()

// 在这里挂载对应的路由
router.get('/get',(req,res)=>{
  const query = req.query
  res.send({
    status:0,
    msg:'GET请求成功',
    data:query
  })
})
//定义post接口
router.post('/post',(req,res)=>{
  //用body接收
  const body = req.body
  //调用res.send()
  res.send({
    status:0,
    msg:'POST请求成功',
    data:body
  })
})
//定义delete接口
router.delete('/delete',(req,res)=>{
  //直接响应
  res.send({
    status:0,
    msg:'DELETE请求成功',
  })
})
module.exports = router