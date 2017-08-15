
var fileSize = require('../service/file-size');

function ObtainFileSize() {

  this.action = function (request, response) {

    var file = request.files.chosenFile;
    var path = process.env.TMP_PATH + '/' + file.name;

    file.mv(path, function (err) {
      if (err) {
        return response.status(400);
      }

      response.json({
        size: fileSize(path) + ' bytes'
      });
    });

  };

}

module.exports = ObtainFileSize;
