//转义html字符
function htmlEscape(htmlstr) {
    return htmlstr.replace(/<|>|"|&/g, (match)=> {
        switch (match) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}
//还原html字符
function htmlUnEscape(htmlstr) {
    return htmlstr.replace(/&lt;|&gt;|&quot;|&amp;/g,(match)=> {
        switch(match) {
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'
        }
    })
}

module.exports = {
    htmlEscape,
    htmlUnEscape
}