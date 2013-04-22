'use strict';

var grunt = require( 'grunt' )
  , fs    = require( 'fs' )
  , path  = require( 'path' );

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

// Utility functions
var testUtils = {

    /*
     * Recursively searches through a directory and returns an array of the contents
     * @param dirPath - the directory to search through
     * @param array - optional array to populate - function will return a new one if not specified
     * @returns - the array, populated with the contents of dirPath
     */
    dir: function( dirPath, array ) {
        array = array || [];

        grunt.file.recurse( dirPath, function( abspath, rootdir, subdir, filename ) {
            array.push( path.join( subdir, filename ) );
        });

        return array;
    }

};

exports.booty = {

    setUp: function( done ) {
        // setup here if necessary
        done();
    },

    tearDown: function( done ) {
        // tear down here if necessary
        done();
    },

    /*
     * vanilla test
     *
     * Start - /styles/ is an empty directory.
     * Expected - task should populate /styles/ with bootstrap less files
     */
    vanilla: function( test ) {
        test.expect(1);

        var actual = testUtils.dir( 'test/fixtures/vanilla/styles' )
          , expected = testUtils.dir( 'test/expected/vanilla/styles' );

        test.deepEqual( actual, expected, 'should copy over bootstrap less files and font-awesome-more files using the correct file structure' );

        test.done();
    }

};
