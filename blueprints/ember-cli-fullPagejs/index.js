/*jshint node:true*/
module.exports = {
  description: 'ember-cli-fullpagejs',

  normalizeEntityName: function() {
    // allows us to run ember -g ember-cli-fullpagejs and not blow up
    // because ember cli normally expects the format
    // ember generate <entitiyName> <blueprint>
  },

  afterInstall: function(options) {
    return this.addBowerPackageToProject('fullpage.js', '^2.7.8');
  }
};
