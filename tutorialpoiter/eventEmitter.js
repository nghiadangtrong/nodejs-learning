var events = require('events')
var eventEmitter = new events.EventEmitter();

// create listeners
var listener1 = function () { console.log('Listern 1 executed.') }
var listener2 = function () { console.log('Listern 2 executed.') }

// bind connection event to function
eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

var listenerCountConnection = () => {
	let eventListeners = events.EventEmitter.listenerCount(eventEmitter, 'connection');
	console.log(eventListeners + ' Listener(s) listening to connect event');
}

//////	Stack 1	//////
// count listeners
listenerCountConnection();

eventEmitter.emit('connection');

// remove the binding listener1 function 
eventEmitter.removeListener('connection', listener1);
console.log('Listener1 will not listern now.')

////// stack 2	//////
eventEmitter.emit('connection');

listenerCountConnection();

console.log("Program ended");
