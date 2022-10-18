const express = require('express')
const app = express()
const qus= require('querystring')
//解析表单数据中间件
app.use((req,res,next)=>{
  //定义中间件程序
  //定义str接收数据
  let str = ''
  //监听data
  req.on('data',(chunk)=>{
    str += chunk
  })
  //监听end
  req.on('end',()=>{
    //输出完整请求体
    const body = qus.parse(str)
    console.log(body);
    req.body = body
    next()
  })
})

app.post('/user',(req,res)=>{
  res.send(req.body)
})

app.listen(80,()=>{
  console.log('服务器运行中');
})