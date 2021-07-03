const fs = require('fs');
const async = require("async");
const request = require('request');
const options = {
    url: 'https://discord.com/api/v9/guilds/663869392152559648/messages/search?content=mentally',
    method: 'GET',
    headers: {
        'authorization': 'ODExNjM2NTUxNzMyODIyMDU4.YKRJ0A.6ROZUhHf1e7cuNWkdGLiN3MTPnQ',
        
    }
};

// This snippet is to be used for the first page. After the first page has been retrieved, it is commented out.

request(options, function(err, res, body) {
    let json = JSON.parse(body);
    console.log(json);
    let fileName = `mentally0.txt`;
    fs.writeFileSync(fileName, JSON.stringify(json), function (error) {
      if (error) { 
           console.error(error); 
      }
   });
});

// This snippet is used for all the remaining pages.

function getTheUrl(data) {
  var options = {
      url: "https://discord.com/api/v9/guilds/663869392152559648/messages/search?content=mentally&offset=" + data,
      method: 'GET',
      headers: {
        'authorization': 'ODExNjM2NTUxNzMyODIyMDU4.YKRJ0A.6ROZUhHf1e7cuNWkdGLiN3MTPnQ',
    }}
  return options;
}

function consoleTheResult(url, i) {
  request(url, function (err, res, body) {
      let json2 = JSON.parse(body)
      console.log(json2.body);
      let fileName = `mentally${i}.txt`;
      fs.writeFile(fileName, JSON.stringify(json2), function (error){
        if (error){
          console.error(error)
        }
      })
  });
}

for (var i = 125; i < 126; i++) {
  consoleTheResult(getTheUrl(i*25), i);
}