/*
 * grunt-bower-bootstrap
 * https://github.com/mattstyles/grunt-bower-bootstrap
 *
 * Copyright (c) 2013 Matt Styles
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('booty', 'Builds bootstrap into your project from a bower install', function() {

        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({


        });

        // Look for a component install of bootstrap

        // Test that this project installs and can be run as a grunt task
        grunt.log.writeln( 'this is a test of the grunt-bower-bootstrap task' );




//        // Iterate over all specified file groups.
//        this.files.forEach(function(f) {
//          // Concat specified files.
//          var src = f.src.filter(function(filepath) {
//            // Warn on and remove invalid source files (if nonull was set).
//            if (!grunt.file.exists(filepath)) {
//              grunt.log.warn('Source file "' + filepath + '" not found.');
//              return false;
//            } else {
//              return true;
//            }
//          }).map(function(filepath) {
//            // Read file source.
//            return grunt.file.read(filepath);
//          }).join(grunt.util.normalizelf(options.separator));
//
//          // Handle options.
//          src += options.punctuation;
//
//          // Write the destination file.
//          grunt.file.write(f.dest, src);
//
//          // Print a success message.
//          grunt.log.writeln('File "' + f.dest + '" created.');
//        });
    });

};
