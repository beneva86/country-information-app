const jsonFile = './countries.json'

const fs = require('fs')

const readFile = fs.readFile('./countries.json', function(err,data){
	if(err) {
		throw err		
	}
	const parsedData = JSON.parse(data);
	return parsedData
});

module.exports = {			// object
	readFile : readFile
}