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

        var actual = []
          , expected = [];

        grunt.file.recurse( 'test/fixtures/vanilla/styles', function( abspath, rootdir, subdir, filename ) {
            actual.push( path.join(subdir, filename) );
        });
        grunt.file.recurse( 'test/expected/vanilla/styles', function( abspath, rootdir, subdir, filename ) {
            expected.push( path.join(subdir, filename) );
        });

        test.deepEqual( actual, expected, 'should copy over bootstrap less files and font-awesome-more files using the correct file structure' );

        test.done();
    }

};
