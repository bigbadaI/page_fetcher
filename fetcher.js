const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
let url = args[0].toString('');
let fileName = args[1].toString('') + '.txt';
console.log(url);
// fs.openSync(url + '.txt', 'a')

request(`${url}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurs
  fs.appendFile(fileName, body, (err) => {
    if (err) throw err;// Print the error if one occurs
    console.log(`File made`); //prints when file made succesfully
    let stats = fs.statSync(fileName);
    console.log(`File size downloadeded was ${stats.size} bytes and saved to ${fileName}`);// tells user how large the file was and where it was saved too
  });
});