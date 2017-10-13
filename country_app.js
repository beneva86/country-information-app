// Country Information App

// Part 1
// Create a Node.js application that does the following:
// - Takes in one parameter from the command line, the name of a country. Note: command line arguments can be read from the global array `process.argv`
// - Reads and parses the `countries.json` file. Note: you must use readFile and not readFileSync. Get it here: countries.jsonPreview the documentView in a new window
// - Outputs information about that specific country. Must be in the following format:
// Country: <country name>
// Top Level Domain: <tld>


const fs = require('fs')

const country = process.argv[2]

fs.readFile('./countries.json', function(err,data){
	if(err) {
		throw err		
	}
	const parsedData = JSON.parse(data);


				for(var i=0; i < parsedData.length; i++){
					if (country == parsedData[i].name) {

					console.log("Country: " + parsedData[i].name);
					console.log("Top Level Domain: " + parsedData[i].topLevelDomain);
					}
				}	
})	
				//search through the JSON file
				// find a country whose name matches the name entered in terminal
				// print out that country's name and top level domain






