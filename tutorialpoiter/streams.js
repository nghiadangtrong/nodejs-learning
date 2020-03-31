const fs = require('fs');
const zlib = require('zlib');

const readFile = (path='input.txt') => {
	try {
		let data = '';
		let readerStream = fs.createReadStream(path);
		readerStream.setEncoding('UTF8');

		// handle read
		readerStream.on('data', (chunk) => {
			data += chunk;
		});

		// handle read done
		readerStream.on('end', () => console.log(data));

		// handle read error
		readerStream.on('error', (err) => console.log('Read error', err.stack)) 

		console.log('Program ended');
	} catch(err) {
		console.error('Can not read file', err)
	}
}

const writeFile = (path, data='') => {
	try {
		let writerStream = fs.createWriteStream(path);

		writerStream.write(data, "UTF8");

		// mark the end of file
		writerStream.end();

		// handle write done
		writerStream.on('finish', () => console.log("Write completed"));

		// handle write error
		writerStream.on('error', (err) => console.error('err write', err.stack));

		console.log('Program ended');
	} catch(err) {
		console.error('Can\'t write file', err)
	}
}

//	Dùng piping the stream
const copyFile = (from, to) => {
	try {
		// create readable stream
		let readerStream = fs.createReadStream(from);

		// create writable stream
		let writerStream = fs.createWriteStream(to);

		// Handle pipe copy
		readerStream.pipe(writerStream);

		console.log('Program ended');
	} catch (err) {
		console.error('Error: ', err)
	}
}

// Dùng chaining the streams

const zipFile = (from, to) => {
	try {
		fs.createReadStream(from)
			.pipe(zlib.createGzip())
			.pipe(fs.createWriteStream(to+'.gz'));
	} catch(err) {
		console.error('Error zip file', err)
	}
}