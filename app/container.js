
var HomePage = require('../src/file-metada/appilcation/action/home-page');
var ObtainFileSize = require('../src/file-metada/appilcation/action/obtain-file-size');

var container = {

  HomePageAction: function () {
    var homePage = new HomePage();

    return homePage.action;
  },

  ObtainFileSize: function () {
    var obtainFileSize = new ObtainFileSize();

    return obtainFileSize.action;
  }

};

module.exports = container;
