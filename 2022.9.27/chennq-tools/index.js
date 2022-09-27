//入口
const date = require('./scr/dateFormate')
const html = require('./scr/htmlEscape')

module.exports = {
    ...date,
    ...html
}