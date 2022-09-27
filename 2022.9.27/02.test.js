const chennq = require('./chennq-tools')

// 格式化时间的功能
const dtStr = chennq.dateFormat(new Date())
console.log(dtStr)
console.log('-----------')

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = chennq.htmlEscape(htmlStr)
console.log(str)
console.log('-----------')

const str2 = chennq.htmlUnEscape(str)
console.log(str2)