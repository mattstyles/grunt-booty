'use strict';

var grunt = require( 'grunt' )
  , fs    = require( 'fs' );

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

exports.bower_bootstrap = {

    setUp: function( done ) {
        // setup here if necessary
        done();
    },

    tearDown: function( done ) {
        // tear down here if necessary
        done();
    },
//  default_options: function(test) {
//    test.expect(1);
//
//    var actual = grunt.file.read('tmp/default_options');
//    var expected = grunt.file.read('test/expected/default_options');
//    test.equal(actual, expected, 'should describe what the default behavior is.');
//
//    test.done();
//  },
//  custom_options: function(test) {
//    test.expect(1);
//
//    var actual = grunt.file.read('tmp/custom_options');
//    var expected = grunt.file.read('test/expected/custom_options');
//    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');
//
//    test.done();
//  }

    /*
     * test1
     *
     * /styles/ has /less/ and /css/ folders but nothing more.
     * Expected - task should populate /styles/ with bootstrap less files
     */
    test1: function( test ) {
        test.expect(1);

        var actual = fs.readdirSync( 'test/test1/styles').sort();
        var expected = fs.readdirSync( 'test/expected/test1/styles').sort();

        test.deepEqual( actual, expected, 'should copy over bootstrap less files and font-awesome-more files using the correct file structure' );

        test.done();
    }

};
