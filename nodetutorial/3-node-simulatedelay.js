function greet(){
    console.log('hi')
}

function showDateTime(){
  //  return setTimeout(()=>console.log(new Date().getMinutes()),2000)
 return setInterval(()=>console.log(new Date().getMinutes()),2000)

}

showDateTime()
clsgreet()

console.log('Simulating asynchrounous')