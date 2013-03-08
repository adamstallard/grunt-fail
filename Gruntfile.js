'use strict';

module.exports = function(grunt) {

  // Project configuration
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

  // Load local tasks
  grunt.loadTasks('tasks');

  // Load npm tasks
  grunt.loadNpmTasks('grunt-vows-runner');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task
  // Don't use jshint by default until they fix the requirement for a radix parameter for parseInt
  grunt.registerTask('default', ['vows']);

};