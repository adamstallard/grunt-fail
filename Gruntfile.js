'use strict';

module.exports = function(grunt) {

  // project configuration
  grunt.initConfig({
    jshint: {
      all : {
        src : [
          "**/*.js",
          "!node_modules/**/*.js"
        ]
      },
      options: {
        jshintrc : ".jshintrc"
      }
    },
    vows: {
      options : {
        reporter : "spec"
      },
      all : {
        src : ["test/**/*.js"]
      }
    }
  });

  // local tasks
  grunt.loadTasks('tasks');

  // npm tasks
  grunt.loadNpmTasks('grunt-vows-runner');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // default task
  grunt.registerTask('default', ['vows']);

  // Don't use jshint by default until they fix the requirement for a radix parameter for parseInt

};