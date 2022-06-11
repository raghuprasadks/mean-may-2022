const {si,mk} =require('./6-node-export')

const { upperCase, localeUpperCase } =require("upper-case");

const interest = si(10000,4,1)

console.log('si is '+interest)

const mks = mk(10)

console.log('10 miles is  '+mks + 'kms ')

uc = upperCase('RagHu')
console.log('upper case  '+uc)