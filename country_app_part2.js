// Country Information App
// Part 2
// - For the purposes of this exercise, you must create a separate module for reading 
// and parsing the JSON file, named "json-file-reader".
// - This module should have a function that takes in a filename and a callback function 
// as a parameter. It should then read that file, then parse the JSON. Finally, it should 
// call the callback function and pass the parsed JSON to it.
// - One way to think of this module is as a helper that can read and parse any JSON file. 
// It has nothing to do with 'countries', so to speak.
// - Another way to think of it is as a small wrapper to fs.readFile, except that this 
// function only works with JSON files.



// const fs = require('fs')

const myModul = require('./json-file-reader')


const country = process.argv[2]

// fs.readFile('./countries.json', function(err,data){
// 	if(err) {
// 		throw err		
// 	}
// 	const parsedData = JSON.parse(data);

console.log(myModul.readFile());

				for(var i=0; i < parsedData.length; i++){
					if (country == parsedData[i].name) {

					console.log("Country: " + parsedData[i].name);
					console.log("Top Level Domain: " + parsedData[i].topLevelDomain);
					}
				}	
// })	










