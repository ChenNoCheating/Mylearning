##安装
```
npm install chennq-tools
```

##导入
```js
const chennq-tools = require('chennq-tools')
```

##时间格式化
```js
//调用dateFormat
const dtStr = chennq.dateFormat(new Date())
//结果 2022-08-02 17:08:08
console.log(dtStr)
```

##转义HTML中的特殊字符
```js
//顶替待转换的字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
//调用htmlEscape方法
const str = chennq.htmlEscape(htmlStr)
//转换结果 &lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str)
```

##还原HTML中的转义字符
```js
//待还原的HTML字符串
const str2 = chennq.htmlUnEscape(str)
//输出结果 <h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
console.log(str2)
```

##开源协议
ISC