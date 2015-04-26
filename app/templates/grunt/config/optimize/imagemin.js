// Configuration for ImageMin task(s)
// Compresses jpg, jpeg, png, and svg files
'use strict';

var pngquant = require('imagemin-pngquant');
var svgo = require('imagemin-svgo');

var taskConfig = function(grunt) {

  grunt.config.set('imagemin', {
    dist: {
      options: {
        use: [pngquant({quality: '65-80', speed: 4}), svgo()]
      },
      files: [{
        expand: true,
        cwd: '<%%= yeogurt.directories.source %>/<%%= yeogurt.directories.images %>',
        src: '**/*.{jpg,jpeg,gif,png,svg}',
        dest: '<%%= yeogurt.directories.destination %>/<%%= yeogurt.directories.images.replace(/^_/, "") %>'
      }]
    }
  });

};

module.exports = taskConfig;
