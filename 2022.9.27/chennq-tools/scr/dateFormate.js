//定义格式化时间函数
function dateFormat(dateStr) {
    const dt = new Date(dateStr)
    const y = dt.getFullYear()
    const m = padZero(dt.getMonth())
    const d = padZero(dt.getDay())
    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getMinutes())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

function padZero(n) {
    return n > 9 ? n : '0' + n
}
module.exports = {
    dateFormat
}