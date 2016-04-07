/*jshint node:true*/
module.exports = {
  description: 'ember-cli-fullPagejs',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
    return this.addBowerPackageToProject('fullpage.js', '^2.7.8');
  }
};
