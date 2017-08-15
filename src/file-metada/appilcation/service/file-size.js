
var fs = require('fs');

function fileSize(file) {
  var stats = fs.statSync(file);

  fs.unlinkSync(file);

  return stats.size;
}

module.exports = fileSize;
