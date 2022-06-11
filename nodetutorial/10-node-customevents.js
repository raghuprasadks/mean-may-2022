var events = require('events');
var eventEmitter = new events.EventEmitter();
//Create an event handler:
var myEventHandler = function () {
  console.log('I opened the door');
}

var sawFire = function (){
    console.log('saw fire')
}
//Create an event handler:
var getFireExtinguisher = function () {
  console.log('Got fire extinguisher. Fire under control');
}
//Assign the eventhandler to an event:
eventEmitter.on('ring', myEventHandler);
eventEmitter.on('fire', sawFire);
eventEmitter.on('extingwish',getFireExtinguisher);

//Fire the event:
eventEmitter.emit('ring')
eventEmitter.emit('fire')
eventEmitter.emit('extingwish')
