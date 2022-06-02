/**
 * Operators 
 * 1. Arithmetic : +,-,*,/,%,**,++,--
 * 2. Comparision : >,<,>=,<=,==,===,!=
 * 3. Logical operators : &&,||,!
 * 4. Assignment Opertors : =,+=,-=,*=
 * 5. Bitwise Operators : &,| 
 * */
console.log('Arithmetic Operator')

num1 = 100
num2 = 200
result = num1+num2

console.log('Result of addition '+num1 + "is "+num2 +" is "+result)
result = num2%num1
console.log('Result of % '+num2 + " % "+num1 +" is "+result)

num1++
//sum = num1++
sum = ++num1
console.log('value of sum is '+sum)
console.log('value of num1 is '+num1)

result = 2**3

console.log('exponent '+result)

console.log('Comparision Operator')

result = num1>num2
console.log('num1>num2 '+result)


result = num1==num2
console.log('num1==num2 '+result)

result = num1===num2
console.log('num1===num2 '+result)

num3 ='200'
result = num2==num3
console.log('num2==num3 '+result)

result = num2===num3
console.log('num2===num3 '+result)

result = num1!=num2
console.log('num1!=num2 '+result)

console.log('Logical Operators')

result = (num1 < num2) && (num2 == num3)
console.log('Logical Operators: && '+result)

result = (num1 > num2) || (num2 == num3)
console.log('Logical Operators: || '+result)

result = !((num1 > num2) || (num2 == num3))
console.log('Logical Operators: ! '+result)

console.log('Assignment Operators')

num4 = 100

sum = 100
sum = sum + 20
console.log('value of sum '+sum)
sum += 30

console.log('value of sum after +='+sum)

