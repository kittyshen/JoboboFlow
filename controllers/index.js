
var fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);
var routePaths = {};

// 1) Reads the current directory and filters off the index.js
// 2) Goes over each controller file and changes them from [name here]-controller.js to a file path
//    uncomment the console.logs on lines 18 and 20, and run this file in node `node index.js` for a good illustration
// 3) These all get push to an exported array, so that we can loop over all our routes and iteratively attach them to
//    app instance via app.use in server.js
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    // The first case filters off a possible file name like ..js
    // The second case filters off index.js
    // The third case filters off any non .js files
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js" && file !== 'home.js');
  })
  .forEach(function(file) {
    var pathName = '/';
    for (var i = 0; i < file.length; i++) {
      if(file[i] === '-') {
        break;
      } else {
        pathName += file[i];
      }
    }
    routePaths[pathName] = path.join(__dirname,file);
    // console.log(routePaths);
  });

module.exports = routePaths;
