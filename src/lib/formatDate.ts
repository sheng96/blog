/**
 * 格式化日期
 * @param date
 * @param local
 * @returns {string}
 */
export default function formatDate (date:string, local:string) {
  if (!date) return ''
  const d = new Date(date)
  const options:Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' }
  const res = d.toLocaleDateString(local, options)
  return local.slice(0, 2).toLowerCase() === 'zh'
    ? res.replace('年', '-').replace('月', '-').replace('日', '')
    : res
}
//
// export function formatDateFmt (timestamp:any, fmt:any) {
//   const date = new Date(timestamp)
//   const o = {
//     'M+': date.getMonth() + 1, // 月份
//     'd+': date.getDate(), // 日
//     'h+': date.getHours(), // 小时
//     'm+': date.getMinutes(), // 分
//     's+': date.getSeconds(), // 秒
//     'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
//     S: date.getMilliseconds() // 毫秒
//   }
//   if (/(y+)/.test(fmt)) {
//     fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
//   }
//   for (const k in o) {
//     if (new RegExp('(' + k + ')').test(fmt)) {
//       fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
//     }
//   }
//   return fmt.trim()
// }
