'use strict';

module.exports = function(grunt){
  grunt.registerTask('fail', 'Cause grunt to fail with a message and/or return code', function(){
    grunt.verbose.subhead('fail:arguments');
    grunt.verbose.writeflags(arguments);
    var message = 'Failed on purpose.';
    var code = 255;
    if (isNaN(arguments[0])) {
      if (arguments.length) {
        message = arguments[0];
      }
      if (arguments.length > 1) {
        code = parseInt(arguments[1]);
      }
    }
    else {
      if (arguments.length) {
        code = parseInt(arguments[0]);
      }
    }
    grunt.fail.fatal(message, code);
  });
};
