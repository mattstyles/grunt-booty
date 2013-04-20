/*
 * grunt-booty
 * https://github.com/mattstyles/grunt-bower-bootstrap
 *
 * Copyright (c) 2013 Matt Styles
 * Licensed under the MIT license.
 */

'use strict';

var fs      = require('fs')

// Helper function
String.prototype.cap = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

// Grunt Booty Task
module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('booty', 'Builds bootstrap into your project from a bower install', function() {

        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            force: false
        });

        grunt.verbose.writeflags(options, 'Options');

        /**
         * Look for component installs - error if not present
         */
        var paths = [
            '',
            '/bootstrap',
            '/font-awesome-more'
        ];

        var errors = [];

        paths.forEach( function( path) {
            try {
                grunt.log.write( 'Finding ' + options.componentPath + path + '...' );
                fs.readdirSync( options.componentPath + path );
                grunt.log.writeln( 'found'.cyan );
            } catch (e) {
                grunt.log.error();
                grunt.verbose.error(e);

                // If a valid component parent path was not found
                if (e.path === options.componentPath) {
                    grunt.fail.warn( 'No component directory -- specify a valid directory\n  ' );
                }

                // If we got through here then keep track of the errors
                errors.push(e.path);
            }
        });

        // Warn about the errors and fail
        grunt.log.writeln('');
        if ( errors.length ) {
            errors.forEach( function( error ) {
                grunt.log.writeln( error.match('[^/]+$')[0].cap().red + ' not found in component directory'.yellow );
            });
            grunt.fail.warn( 'Try bower install\n  ' );
        }

        // Test that this project installs and can be run as a grunt task
        grunt.log.writeln( 'this is a test of the grunt-booty task' );




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
