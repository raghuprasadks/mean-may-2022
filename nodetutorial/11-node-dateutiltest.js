const du = require('./dateutility')

today = new Date()
format = 'dd/mm/yyyy'
formatteddate = du.dateUtil(today,format)
console.log('formatted date '+formatteddate)