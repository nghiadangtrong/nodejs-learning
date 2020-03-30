var events = require('events')

// create a eventEmitter object
var eventEmitter = new events.EventEmitter();

// bind the connection 
eventEmitter.on('connection', function connected(){
	console.log('connection succesful.')

	eventEmitter.emit('data_received');
})

// bind the data receuved 
eventEmitter.on('data_received', function (){
	console.log('data received succesfully.')
})

eventEmitter.emit('connection')

console.log("Program Ended.")