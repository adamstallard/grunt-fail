'use strict';

var vows = require('vows');
var exec = require('child_process').exec;
var expect = require('chai').expect;
var grunt = require('grunt');

vows.describe('grunt').addBatch({
  "grunt fail:25" : {
    topic : function(){
      exec('grunt --verbose fail:25', this.callback);
    },
    "should have an error code of 25" : function(error, stdout){
      grunt.verbose.error(error);
      grunt.verbose.error().errorlns(stdout);
      expect(error).to.have.property('code', 25);
    }
  },
  "grunt fail:awesome" : {
    topic : function(){
      exec('grunt --verbose fail:awesome', this.callback);
    },
    "should have an error message of 'awesome'" : function(error, stdout){
      grunt.verbose.error(error);
      grunt.verbose.error().errorlns(stdout);
      expect(stdout).to.have.string('error: awesome');
    },
    "should have an error code of 255" : function(error){
      expect(error).to.have.property('code', 255);
    }
  },
  "grunt fail:awesome:-25" : {
    topic : function(){
      exec('grunt --verbose fail:awesome:-25', this.callback);
    },
    "should have an error message of 'awesome'" : function(error, stdout){
      expect(stdout).to.have.string('error: awesome');
    },
    "should have an error code of -25" : function(error){
      expect(error).to.have.property('code', -25);
    }
  },
  "grunt fail" : {
    topic : function(){
      exec('grunt --verbose fail', this.callback);
    },
    "should have an error message of 'Failed on purpose.'" : function(error, stdout){
      grunt.verbose.error(error);
      grunt.verbose.error().errorlns(stdout);
      expect(stdout).to.have.string('error: Failed on purpose');
    },
    "should have an error code of 255" : function(error){
      expect(error).to.have.property('code', 255);
    }
  }
}).export(module, {error: false});
