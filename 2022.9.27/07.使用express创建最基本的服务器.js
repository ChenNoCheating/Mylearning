//导入
const express = require('express')
//创建
const app = express()
//请求
app.get('/user',(req,res)=> {
  res.send({name:'zs',age:20,gender:'男'})
})

app.post('/user',(req,res)=>{
  res.send('请求成功')
})

app.get('/',(req,res)=>{
  console.log(req.query);
  res.send(req.query);
})
//启动
app.listen(80,()=> {
  console.log('express sever running at http://127.0.0.1');
})