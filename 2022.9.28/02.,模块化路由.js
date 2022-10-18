const express = require('express')
const app = express()
//导入路由模块
const router = require('./03.router')
//app.user()注册全局中间件
app.use('/api',router)
//监听
app.listen(80,()=>{
  console.log('http://127.0.0.1');
})