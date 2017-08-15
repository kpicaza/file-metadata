
var path = require('path');
var pug = require('pug');

function HomePage() {

  this.action = function (request, response) {

    var view = pug.compileFile(path.resolve('views/index.pug'));

    response.send(view({
      siteUrl: process.env.SITE_URL
    }));

  };

}

module.exports = HomePage;
