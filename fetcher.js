const fetch = process.argv.slice(2);
const fs = require('fs');
const request = require('request');

const source = fetch[0];
const target = fetch[1];


request(source, (error, response, body) => {
  pageDownloader(body);
});

function getFileSizeInBytes(filename) {
  const stats = fs.statSync(filename);
  const fileSizeInBytes = stats.size;
  return fileSizeInBytes;
}
const pageDownloader = function(fileDownloaded) {
  fs.writeFile(target, fileDownloaded, (error, data) => {
    let fileSize = getFileSizeInBytes(target);
    error ? console.log(error) : console.log(`Downloaded and saved ${fileSize} bytes to ${target}`);
  }); 

};
