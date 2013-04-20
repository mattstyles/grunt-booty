/*
 * grunt-booty
 * https://github.com/mattstyles/grunt-bower-bootstrap
 *
 * Copyright (c) 2013 Matt Styles
 * Licensed under the MIT license.
 */

'use strict';

var fs      = require('fs');

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
            '/font-awesome-more'                // @todo should be configurable
        ];

        var errors = [];

        paths.forEach( function( path ) {
            try {
                grunt.log.write( 'Finding ' + options.componentPath + path + '...' );
                fs.readdirSync( options.componentPath + path );
                grunt.log.writeln( 'found'.cyan );
            } catch( e ) {
                grunt.log.error();
                grunt.verbose.error( e );

                // If a valid component parent path was not found
                if ( e.path === options.componentPath ) {
                    grunt.fail.warn( 'No component directory -- specify a valid directory\n  ' );
                }

                // If we got through here then keep track of the errors
                errors.push( e.path );
            }
        });

        // Warn about the errors and fail
        grunt.log.write( grunt.util.linefeed );
        if ( errors.length ) {
            errors.forEach( function( error ) {
                grunt.log.writeln( error.match('[^/]+$')[0].cap().red + ' not found in component directory'.yellow );
            });
            grunt.fail.warn( 'Try bower install\n  ' );
        }

        // Start the actual task
        // Move stuff over

        // Have a go at bootstrap
        try {
            // The meat - bootstrap less files
            grunt.file.mkdir( options.dest + '/bootstrap' );
            fs.readdirSync( options.componentPath + '/bootstrap/less').forEach( function( file ) {
                if ( grunt.util._.endsWith( file, '.less' ) ) {
                    grunt.file.copy( options.componentPath + '/bootstrap/less/' + file, options.dest + '/bootstrap/' + file );
                }
            });

            // glyphicons needed for sprite
            // @todo this can probably be removed if font-awesome is used
            grunt.file.mkdir( options.dest + '/img' );
            fs.readdirSync( options.componentPath + '/bootstrap/img').forEach( function( file ) {
                if ( grunt.util._.endsWith( file, '.png' ) ) {
                    grunt.file.copy( options.componentPath + '/bootstrap/img/' + file, options.dest + '/img/' + file );
                }
            });
        // Catch all bootstrap copying errors
        } catch( e ) {
            grunt.log.error();
            grunt.verbose.error( e );
            grunt.fail.warn( 'Error copying bootstrap\n   ' );
        }

        // Now have a go at font-awesome
        try {
            // The meat - font-awesome less files
            grunt.file.mkdir( options.dest + '/font-awesome-more' );
            fs.readdirSync( options.componentPath + '/font-awesome-more/less').forEach( function( file ) {
                if ( grunt.util._.endsWith( file, '.less' ) ) {
                    grunt.file.copy( options.componentPath + '/font-awesome-more/less/' + file, options.dest + '/font-awesome-more/' + file );
                }
            });

            // main font-awesome font
            grunt.file.mkdir( options.dest + '/font' );
            fs.readdirSync( options.componentPath + '/font-awesome-more/font').forEach( function( file ) {
                grunt.file.copy( options.componentPath + '/font-awesome-more/font/' + file, options.dest + '/font/' + file );
            });

            // additional font-awesome stuff
            grunt.file.mkdir( options.dest + '/fonts' );
            fs.readdirSync( options.componentPath + '/font-awesome-more/fonts').forEach( function( file ) {
                grunt.file.recurse( options.componentPath + '/font-awesome-more/fonts/', function( abspath, rootdir, subdir, filename ) {
                    grunt.file.copy( abspath, options.dest + '/fonts/' + subdir + '/' + filename );
                });
            });

            // Catch all font-awesome copying errors
        } catch( e ) {
            grunt.log.error();
            grunt.verbose.error( e );
            grunt.fail.warn( 'Error copying font-awesome-more\n   ' );
        }

    });

};
