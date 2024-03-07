export const formatDate = (date) => {
  let dateObj = new Date(date)
    return [(dateObj.getMonth() <= 8 ? "0" + (dateObj.getMonth()+1) : dateObj.getMonth()+1),
    dateObj.getFullYear() % 100].join('/')+' - '+
                      [dateObj.getHours(),
                        dateObj.getMinutes()].join(':');
}

export const formatEventDay = (date) => {
  let dateObj = new Date(date)
  let days = ['Sun','Mon','Tue','Wed','Thu','Fr','Sat'];
  let months = ['Jan','Feb','Mar','April','May','Jun','Jul','Aug','Sep','Oct','Nov','Decembe'];
  var day = days[ dateObj.getDay() ];
  var month = months[ dateObj.getMonth() ];
  return `${day}, ${dateObj.getDay()} ${month}`
}

export const formatEventHours = (date) => {
  let dateObj = new Date(date)
  return [dateObj.getHours(),
    dateObj.getMinutes()].join(':')
}