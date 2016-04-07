/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-full-pagejs',

  included: function included(app) {
    this._super.included(app);

    // workaround for https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    var fullpagejsPath = path.join(app.bowerDirectory, 'fullpage.js/dist');

    app.import(path.join(fullpagejsPath, 'jquery.fullpage.min.css'));
    app.import(path.join(fullpagejsPath, 'jquery.fullpage.min.css.map'), {
      destDir: 'assets'
    });

    app.import(path.join(fullpagejsPath, 'jquery.fullpage.min.js'));
    app.import(path.join(fullpagejsPath, 'jquery.fullpage.min.js.map'), {
      destDir: 'assets'
    });
  }
};
