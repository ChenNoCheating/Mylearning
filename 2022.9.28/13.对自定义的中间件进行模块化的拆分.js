//导入express模块
const express = require('express')
const app = express()
//导入中间件模块
const cbp = require('./14.custom-body-parser')
//进行全局注册
app.use(cbp)
//post
app.post('/user',(req,res)=>{
  res.send(req.body)
  console.log('响应成功');
})
//监听端口
app.listen(80,function() {
  console.log('端口80开始运行');
})