const request = require('request');
const fsPromises = require('fs').promises;
const fs = require('fs');

const args = process.argv.slice(2);
let url = args[0].toString('');
let fileName = args[1].toString('') + '.txt';
console.log(url);
// fs.openSync(url + '.txt', 'a')

request(`${url}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.appendFile(fileName, body, (err) => {
    if (err) throw err;
    console.log(`File made`);
    let stats = fs.statSync(fileName);
    console.log(`File size downloadeded was ${stats.size} and saved to ${fileName}`);
    //creates filename/file and saves body information into new file
  });
  
  //  Print the HTML for the Google homepage.
});