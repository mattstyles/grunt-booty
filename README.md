# grunt-booty

> Adds the bootstrap to your project from a bower install - (optionally includes font-awesome)

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-booty --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-booty');
```

## The "booty" task

### Overview
In your project's Gruntfile, add a section named `booty` to the data object passed into `grunt.initConfig()`, it's a
multitask so you'll need to add a task identier (e.g. `dev`):

```js
grunt.initConfig({
  booty: {
    dev: {
      options: {
        componentPath: '/path/to/bower/components/',
        dest: '/path/to/styles/directory/'
      }
    }
  }
})
```

### Options

#### options.componentPath
The location of the bower installs

#### options.dest
The stylesheet destination for all of the bootstrap and font-awesome goodness

### Usage Examples
_Coming_

### Proper Docs
_Coming_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
