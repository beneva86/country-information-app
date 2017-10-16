const jsonFile = './countries.json'

const fs = require('fs')


function readFile(fileName, callback){

	fs.readFile('./countries.json', function(err,data){
	if(err) {
		throw err		
	}

	let parsedData = "";
	parsedData = JSON.parse(data);

	callback(parsedData);
	
})
};

module.exports = readFile;
