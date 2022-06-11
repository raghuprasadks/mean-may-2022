//import date from 'date-and-time';

const date = require('date-and-time');
const now = new Date();
console.log(date.format(now, 'YYYY/MM/DD HH:mm:ss'));    // => '2015/01/02 23:14:05'
formatteddate = date.format(now, 'ddd, MMM DD YYYY');       // => 'Fri, Jan 02 2015'
console.log('ddd, MMM DD YYYY '+formatteddate)
//date.format(now, 'hh:mm A [GMT]Z');         // => '11:14 PM GMT-0800'
//date.format(now, 'hh:mm A [GMT]Z', true);   // => '07:14 AM GMT+0000'

//const pattern = date.compile('ddd, MMM DD YYYY');
//date.format(now, pattern); 